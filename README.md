# Smart Bin Waste Management 

> An Internet of Things (IOT) project which aligns with Smart Sustainable City 

---

### Table of Contents
You're sections headers will be used to reference location of destination.

- [Description](#description)
- [Features](#features)
- [References](#references)
- [License](#license)
- [Author Info](#author-info)

---

## Description

The Smart Waste Management System is designed to monitor and manage waste levels in bins using ultrasonic sensors. The system continuously measures the fullness of a waste bin and sends the data to a cloud platform, where it is visualized on a dashboard. The dashboard helps users monitor and optimize waste collection schedules.

---

### Features:
- Ultrasonic sensor for measuring bin fullness.
- Real- time seein
- Data sent to a cloud platform.
- Live data visualized on a web-based dashboard.

---

### Hardware Requirements:
- **Ultrasonic Sensor (Grove)**
- **ESP32 Microcontroller**
- **Power Supply (5V)**

---

### Setup Steps:
1. Connect the ultrasonic sensor to the ESP32 as follows:
   - VCC to 5V
   - GND to GND
   - Sig to GPIO 25
2. Install required libraries for Arduino IDE (e.g., ESP32 board manager).
3. Upload the `main.ino` sketch to the ESP32.
4. Set up the cloud function to receive and store bin data.
5. Open the dashboard in any browser to monitor the waste levels in real-time.
[Back To The Top](#read-me-template)

---

## Source Code
- **Microcontroller Code:** Located in `source_code/main.ino`
- **Cloud Functions:** Located in `source_code/app.js`
- **Dashboard:** Located in `source_code/index.html`

---

## Documentation
The detailed report of the project, including the system design, implementation, and results, can be found in the `documentation/smart_waste_management_report.pdf`.

# Image
![Dashboard Preview](https://github.com/user-attachments/assets/1ad43a80-97c3-4aab-b996-a6fd82a16ce7)



## Demo
Watch the project demo video here: [Demo Video](https://drive.google.com/drive/folders/13R2-zGZBsYkl5_1635Ux4SJKwuVip9OV)

## Live Dashboard
Access the live dashboard here: [Live Dashboard]([live_dashboard/link_to_dashboard.com](http://127.0.0.1:5500/index.html))
#### API Reference

```html
    <p>dummy code</p>
```
[Back To The Top](#read-me-template)

---

## References
[Back To The Top](#read-me-template)

---
## Author Info


[Back To The Top](#read-me-template)

