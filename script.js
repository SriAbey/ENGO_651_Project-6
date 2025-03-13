// Initialize the map
const map = L.map('map').setView([51.505, -0.09], 13);

// Add a base layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Initialize the draw control
const drawnItems = new L.FeatureGroup();
map.addLayer(drawnItems);

const drawControl = new L.Control.Draw({
    edit: { featureGroup: drawnItems },
    draw: {
        polyline: true,
        polygon: true,
        rectangle: true,
        circle: true,
        marker: true
    }
});
map.addControl(drawControl);

// Event listener for when a shape is drawn
map.on(L.Draw.Event.CREATED, function (event) {
    const layer = event.layer;
    drawnItems.addLayer(layer);
});

// Simplify button event listener
document.getElementById('simplify-btn').addEventListener('click', function () {
    const layers = drawnItems.getLayers();
    if (layers.length === 0) return alert('Please draw a polyline first.');

    const originalLayer = layers[0];
    if (originalLayer instanceof L.Polyline) {
        const originalCoords = originalLayer.getLatLngs().map(ll => [ll.lng, ll.lat]);

        // Simplify the line using Turf.js
        const tolerance = 0.01; // Adjust tolerance as needed
        const simplifiedLine = turf.simplify(turf.lineString(originalCoords), { tolerance });

        // Add the simplified line to the map
        L.geoJSON(simplifiedLine, {
            style: { color: 'red', weight: 4 }
        }).addTo(map);
    } else {
        alert('Please draw a polyline to simplify.');
    }
});

// Clear button event listener
document.getElementById('clear-btn').addEventListener('click', function () {
    drawnItems.clearLayers();
    map.eachLayer(layer => {
        if (layer instanceof L.GeoJSON) {
            map.removeLayer(layer);
        }
    });
});