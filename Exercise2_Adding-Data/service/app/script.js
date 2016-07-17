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
  Feature Layer
  (ArcGIS Service)
*******************/

/* Minnesota County Service
(Credit: Minnesota State Auditor's Office */
var mnCountiesService = L.esri.featureLayer({
  url: "http://www.auditor.state.mn.us/arcgis/rest/services/MnCounties/FeatureServer/0",
  style: function () {
    return {
      color: "#FFF",
      weight: 2
    };
  }
}).addTo(map);
