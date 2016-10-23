// Initialize the map on the "map" div with a given center and zoom
var map = L.map('map', {
    center: [46.37, -93.88],
    zoom: 6
});

/*******************
  Basemap Layers
*******************/

/* Basemap #1: Esri Dark Gray */
var EsriDarkGrayCanvas = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ',
	maxZoom: 16
}).addTo(map);

/* Basemap #2: Esri Dark Gray Reference */
var EsriDarkGrayCanvasRef = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Reference/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ',
	maxZoom: 16
}).addTo(map);


/*******************
  Feature Layer
  (ArcGIS Service)
*******************/

/* Feature Layer: U.S. Population Change between 1990-2000 (Credit: Esri, U.S. Census Bureau) */
var usPopulationChange = L.esri.featureLayer({
  url: "http://server.arcgisonline.com/arcgis/rest/services/Demographics/USA_1990-2000_Population_Change/MapServer/4",
  style: function () {
    return {
      color: "#FFF",
      weight: 2
    };
  },
  onEachFeature: function (feature, layer) {
    layer.bindPopup(feature.properties.NAME + ": " + feature.properties.RATE_POP); //Popup displaying the county name
}
}).addTo(map);
