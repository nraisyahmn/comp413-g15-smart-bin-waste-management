# Smart Bin Waste Management 

![Project Image]()

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
   - Echo to GPIO 25
2. Install required libraries for Arduino IDE (e.g., ESP32 board manager).
3. Upload the `main.ino` sketch to the ESP32.
4. Set up the cloud function to receive and store bin data.
5. Open the dashboard in any browser to monitor the waste levels in real-time.
[Back To The Top](#read-me-template)

---

## Source Code
- **Microcontroller Code:** Located in `source_code/microcontroller_code/main.ino`
- **Cloud Functions:** Located in `source_code/cloud_functions/cloud_function.js`
- **Dashboard:** Located in `source_code/dashboard/index.html`

---

## Documentation
The detailed report of the project, including the system design, implementation, and results, can be found in the `documentation/smart_waste_management_report.pdf`.

# Image
![Dashboard Preview](images/dashboard_image.png)

## Demo
Watch the project demo video here: [Demo Video](demo/demo_video.mp4)

## Live Dashboard
Access the live dashboard here: [Live Dashboard](live_dashboard/link_to_dashboard.com)
#### API Reference

```html
    <p>dummy code</p>
```
[Back To The Top](#read-me-template)

---

## References
[Back To The Top](#read-me-template)

---
## License

MIT License

Copyright (c) [2017] [James Q Quick]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

[Back To The Top](#read-me-template)

---
## Author Info

- Twitter - [@jamesqquick](https://twitter.com/jamesqquick)
- Website - [James Q Quick](https://jamesqquick.com)

[Back To The Top](#read-me-template)

