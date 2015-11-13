// Initialize the map on the "map" div with a given center and zoom
var map = L.map('map', {
    center: [44.95, -93.09], // Centered on St. Paul
    zoom: 8 // Zoom level
});

/* Basemap: OpenStreet Map (OSM) Black and White */
/* Other Leaflet.js Basemaps: http://leaflet-extras.github.io/leaflet-providers/preview */
/* To add the basemap to the map, use the .addTo(map) call */
var OpenStreetMap_BW = L.tileLayer('http://{s}.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png', {
	maxZoom: 18, // The
	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
