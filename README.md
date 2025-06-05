# Pen Detection App

A web application that detects pens in real-time using your device's camera, built with TensorFlow.js and Teachable Machine.

## Features

- Real-time pen detection using your webcam
- Toggle between front and back cameras
- Displays detection confidence percentage
- Visual feedback (green/red) based on detection confidence

## Technologies Used

- TensorFlow.js
- Teachable Machine Image Model
- HTML5/CSS/JavaScript

## How to Use

1. Open the application in a modern browser (Chrome/Firefox recommended)
2. Allow camera access when prompted
3. Point your camera at a pen
4. The app will display detection confidence in percentage
   - Green text: High confidence (>85%)
   - Red text: Low confidence
5. Click the "🔄 Kamera váltás" button to switch between front and back cameras

## Setup

To run this project locally:

1. Clone the repository
2. Ensure all files are in the correct directory structure:
   - `index.html` in the root
   - `script.js` in `/static/js/`
   - Model files (`model.json`, `metadata.json`, `weights.bin`) in `/static/model/`
3. Open `index.html` in a browser

## Model Information

The app uses a pre-trained Teachable Machine model with the following specifications:

- Image size: 224x224 pixels
- Classes: "toll" (pen), "nem toll" (not pen)
- Model architecture: MobileNet-based

## License

This project is open-source and available for free use.
