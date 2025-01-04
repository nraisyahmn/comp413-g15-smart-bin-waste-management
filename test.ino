#include <WiFi.h>
#include <FirebaseESP32.h>

// Wi-Fi credentials
const char* ssid = "Your_SSID";
const char* password = "Your_PASSWORD";

// Firebase project credentials
#define FIREBASE_HOST "https://iot-smartwaste-management-default-rtdb.firebaseio.com/"
#define FIREBASE_AUTH "AIzaSyC-uFasClL7ub9CqC2dfIi0jApKjdsrxNY"

// Ultrasonic Sensor Pins
const int trigPin = 5;
const int echoPin = 18;

// Bin parameters
const float binHeight = 30.0; // Height of the bin in cm
const int thresholdDistance = 2; // Minimum distance to consider the bin full (in cm)

FirebaseData firebaseData;

void setup() {
  Serial.begin(115200);

  // Wi-Fi connection
  WiFi.begin(ssid, password);
  Serial.print("Connecting to WiFi");
  while (WiFi.status() != WL_CONNECTED) {
    delay(1000);
    Serial.print(".");
  }
  Serial.println("\nConnected to WiFi");

  // Firebase initialization
  Firebase.begin(FIREBASE_HOST, FIREBASE_AUTH);
  Firebase.reconnectWiFi(true);

  // Configure ultrasonic sensor pins
  pinMode(trigPin, OUTPUT);
  pinMode(echoPin, INPUT);
}

void loop() {
  float distance = getDistance();
  int fillLevel = calculateFillLevel(distance);

  Serial.print("Distance: ");
  Serial.print(distance);
  Serial.print(" cm, Fill Level: ");
  Serial.print(fillLevel);
  Serial.println("%");

  sendDataToFirebase(fillLevel);
  
  delay(10000); // Wait 10 seconds before the next reading
}

float getDistance() {
  digitalWrite(trigPin, LOW);
  delayMicroseconds(2);
  digitalWrite(trigPin, HIGH);
  delayMicroseconds(10);
  digitalWrite(trigPin, LOW);

  long duration = pulseIn(echoPin, HIGH);
  return duration * 0.034 / 2;
}

int calculateFillLevel(float distance) {
  if (distance <= thresholdDistance) {
    return 100; // Bin is full
  }
  if (distance >= binHeight) {
    return 0; // Bin is empty
  }
  return (int)((1 - (distance / binHeight)) * 100);
}

void sendDataToFirebase(int fillLevel) {
  String path = "/bin1/fillLevel"; // Firebase path
  if (Firebase.setInt(firebaseData, path, fillLevel)) {
    Serial.println("Data sent successfully");
  } else {
    Serial.print("Error sending data: ");
    Serial.println(firebaseData.errorReason());
  }
}
