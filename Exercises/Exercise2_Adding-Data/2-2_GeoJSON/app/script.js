// Initialize the map on the "map" div with a given center and zoom
var map = L.map('map', {
    center: [46.37, -93.88], //Map center moved to accommodate Minnesota's arrowhead region (Lat/Long tool: http://itouchmap.com/latlong.html)
    zoom: 6 // Zoom level (so we can see the state of Minnesota)
});

/*******************
  Basemap Layers
*******************/

/* Basemap #1: Esri Dark Gray */
/* Other Leaflet.js Basemaps: http://leaflet-extras.github.io/leaflet-providers/preview */
/* To add the basemap to the map, use the .addTo(map) call */
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


/*******************
  GeoJSON
  Note: As with any other AJAX request, this technique is subject to the
  Same Origin Policy: http://en.wikipedia.org/wiki/Same_origin_policy
  So the file must be on the same domain as the Javascript, or the server
  delivering it should support CORS.
*******************/

// No styling
// Data: data/mnCounties.geojson
var mnCountiesJSON = new L.GeoJSON.AJAX("data/mnCounties.geojson").addTo(map);

// Styling
// var mnCountiesJSON = new L.GeoJSON.AJAX("data/mnCounties.geojson", {
// style: function (feature) {
//     return {
//       color: "#FFF",
//       weight: 2
//     };
//   }
// }).addTo(map);
