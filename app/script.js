// Initialize the map on the "map" div with a given center and zoom
var map = L.map('map', {
    center: [44.95, -93.09], // Centered on St. Paul (Lat/Long tool: http://itouchmap.com/latlong.html)
    zoom: 9 // Zoom level
});

/* Basemap: Thunderforest Spinal Map */
/* Other Leaflet.js Basemaps: http://leaflet-extras.github.io/leaflet-providers/preview */
/* To add the basemap to the map, use the .addTo(map) call */
var Thunderforest_SpinalMap = L.tileLayer('https://{s}.tile.thunderforest.com/spinal-map/{z}/{x}/{y}.png', {
	attribution: '&copy; <a href="http://www.opencyclemap.org">OpenCycleMap</a>, &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
