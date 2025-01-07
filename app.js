// Import Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-database.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAv_mGskxW-kufHJn_Zi7ivDmpC1nErU5U",
  authDomain: "smart-bin-management-4d63f.firebaseapp.com",
  databaseURL: "https://smart-bin-management-4d63f-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "smart-bin-management",
  storageBucket: "smart-bin-management.appspot.com",
  messagingSenderId: "649711223949",
  appId: "1:649711223949:web:4d211b8d7e4a55ec0f4ec4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// Constants
const MAX_HEIGHT = 120; // Maximum height of the bin in cm
const ALMOST_FULL_PERCENT = 75; // Percentage fill rate for "Almost Full"

// HTML Elements
const fillLevelElement = document.getElementById("fill-level");
const statusAlertElement = document.getElementById("status-alert");
const alarmSound = document.getElementById("alarm-sound");

// Initialize Chart
const ctx = document.getElementById("fillChart").getContext("2d");
let fillChart = new Chart(ctx, {
  type: "doughnut",
  data: {
    labels: ["Filled", "Remaining"],
    datasets: [
      {
        data: [0, 100],
        backgroundColor: ["#FF6384", "#36A2EB"],
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: true,
      },
    },
  },
});

// Fetch Data from Firebase Realtime Database
function fetchFillLevel() {
  const sensorRef = ref(database, "sensor/distance"); // Firebase path to distance value

  onValue(sensorRef, (snapshot) => {
    if (snapshot.exists()) {
      const distance = snapshot.val(); // Distance value in cm
      const fillLevel = calculateFillLevel(distance);

      updateInterface(fillLevel);
    } else {
      console.error("No data found at the specified Firebase path.");
      fillLevelElement.textContent = "No Data";
      statusAlertElement.textContent = "Status: No Data Found.";
    }
  });
}

// Calculate Fill Level
function calculateFillLevel(distance) {
  if (distance > MAX_HEIGHT) return 0;
  if (distance <= 0) return 100;

  const fillLevel = ((MAX_HEIGHT - distance) / MAX_HEIGHT) * 100;
  return Math.min(Math.max(fillLevel, 0), 100).toFixed(1); // Clamp value between 0 and 100
}

// Update Interface
function updateInterface(fillLevel) {
  // Update Fill Level Text
  fillLevelElement.textContent = `${fillLevel}%`;

  // Update Status Alert and Alarm
  if (fillLevel >= 100) {
    statusAlertElement.textContent = "Status: Bin is FULL!";
    statusAlertElement.style.color = "red";
    triggerAlarm();
  } else if (fillLevel >= ALMOST_FULL_PERCENT) {
    statusAlertElement.textContent = "Status: Bin is Almost Full!";
    statusAlertElement.style.color = "orange";
    triggerAlarm();
  } else {
    statusAlertElement.textContent = "Status: Bin is OK";
    statusAlertElement.style.color = "green";
    stopAlarm();
  }

  // Update Chart
  fillChart.data.datasets[0].data = [fillLevel, 100 - fillLevel];
  fillChart.update();
}

// Alarm Functions
function triggerAlarm() {
  alarmSound.play();
}

function stopAlarm() {
  alarmSound.pause();
  alarmSound.currentTime = 0;
}

// Start Fetching Firebase Data
fetchFillLevel();
