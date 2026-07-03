# Sleek Unit Converter

A modern, high-fidelity, glassmorphic dark-theme dashboard for real-time unit conversions. This application is built entirely using vanilla **HTML**, **CSS**, and **JavaScript**, and comes with a lightweight **Node.js** development server to host the page locally.

![Design Preview](https://img.shields.io/badge/Design-Glassmorphism-purple)
![Tech Stack](https://img.shields.io/badge/Stack-HTML5%20%7C%20CSS3%20%7C%20JS-blue)
![Local Server](https://img.shields.io/badge/Server-Node.js-green)

---

## Live Demo
https://nishchitha98.github.io/unit-conversion-react-app/

## Key Features

- **Live Two-Way Conversion**: Type in either field (e.g. Celsius or Fahrenheit) to instantly see the calculated conversion in the opposite field.
- **Convert Action Button**: Provides fallback triggers and highlights target fields with visual pulsing animations upon calculation.
- **Glassmorphic Aesthetic**: Features translucent cards, gradient glowing borders, colorful background glows, and a fixed blur-filtered header.
- **Responsive Layout**: Designed using CSS Grid and Flexbox to adapt seamlessly across desktop, tablet, and mobile screens.
- **Bug Fixes**: Rectified structural and form field duplication bugs present in initial drafts.

---

## Supported Conversions

1. **Temperature**
   - Celsius (°C) $\leftrightarrow$ Fahrenheit (°F)
   - *Formula:* $F = C \times 1.8 + 32$
2. **Weight**
   - Kilograms (kg) $\leftrightarrow$ Pounds (lbs)
   - *Formula:* $lbs = kg \times 2.2046$
3. **Distance**
   - Kilometers (km) $\leftrightarrow$ Miles (mi)
   - *Formula:* $mi = km \times 0.6214$

---

## File Structure

- [index1.html](file:///c:/Users/nishc/OneDrive/Desktop/Conversion/index1.html) — Contains the semantic HTML5 layout structure, interactive forms, and links to typography/scripts.
- [style1.css](file:///c:/Users/nishc/OneDrive/Desktop/Conversion/style1.css) — Custom stylesheet hosting variables, responsive grid settings, glass effects, colors, and keyframe animations.
- [script.js](file:///c:/Users/nishc/OneDrive/Desktop/Conversion/script.js) — The frontend script driving real-time values, mathematical formulas, and highlight transitions.
- [server.js](file:///c:/Users/nishc/OneDrive/Desktop/Conversion/server.js) — A lightweight development server utilizing native Node.js libraries to host assets locally.

---

## Getting Started

### Prerequisites
Make sure you have [Node.js](https://nodejs.org) installed on your system.

### Running Locally
1. Open your terminal in the project directory.
2. Start the local server:
   ```bash
   node server.js
   ```
3. Open your browser and navigate to:
   [http://localhost:3000](http://localhost:3000)
