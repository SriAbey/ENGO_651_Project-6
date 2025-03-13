# ENGO 651 - Lab 6 Assignment

## Line Simplification with Turf.js

### Overview
This project is a web mapping application that allows users to draw a polyline on a map and simplify it using Turf.js. The application provides an interactive way to visualize line simplification by showing both the original and simplified versions of a polyline in different colors.

### Features
- **Draw Polyline**: Users can draw a polyline on the map.
- **Simplify Line**: A button allows users to simplify the drawn polyline and display it in a different color.
- **Reset Map**: Users can remove the existing polyline and draw a new one.
- **Leaflet.js Integration**: The map is built using Leaflet.js for an interactive experience.
- **Turf.js for Line Simplification**: Utilizes the `turf.simplify()` function to reduce the complexity of the drawn polyline.

### Technologies Used
- **HTML, CSS, JavaScript**: Frontend technologies for structuring and styling the web application.
- **Leaflet.js**: Mapping library for displaying and interacting with the map.
- **Turf.js**: Geospatial analysis library used for line simplification.

### File Structure
```
|-- index.html  (Main HTML file containing the map and UI elements)
|-- style.css   (Stylesheet for styling the application)
|-- script.js   (JavaScript logic for handling user interaction, drawing, and simplifying lines)
```

### Installation & Usage
1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Open `index.html` in a web browser.
3. Draw a polyline on the map.
4. Click the "Simplify" button to see the simplified version.
5. Click the "Reset" button to start over.

### References
- [Leaflet.js Documentation](https://leafletjs.com/)
- [Turf.js Documentation](https://turfjs.org/)

### Author
Sri Raji Abeywickrama