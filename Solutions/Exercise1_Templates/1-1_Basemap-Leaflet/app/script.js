// Initialize the map on the "map" div with a given center and zoom
var map = L.map('map', {
    center: [44.95, -93.09],
    zoom: 11
});

/* Basemap: OSM Mapnik */
/* Other Leaflet.js Basemaps: http://leaflet-extras.github.io/leaflet-providers/preview */
var EsriDarkGrayCanvas = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ',
	maxZoom: 16
}).addTo(map);

/* Basemap #2: Esri Dark Gray Reference */
/* To add the basemap to the map, use the .addTo(map) call */
var EsriDarkGrayCanvasRef = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Reference/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ',
	maxZoom: 16
}).addTo(map);


//An Event listener to help us identify the zoom level for our map
/*map.on('zoomend', function() {
    var mapZoomLevel = map.getZoom();
    //alert("You are at zoom level: " + mapZoomLevel);
    console.log("Zoom level: " + mapZoomLevel);
});*/
