// Initialize the map on the "map" div with a given center and zoom
var map = L.map("map").setView([46.37, -93.88], 6);

// Basemap Layers
L.esri.basemapLayer("DarkGray").addTo(map);
L.esri.basemapLayer("DarkGrayLabels").addTo(map);


/*******************
  Feature Layer
  (ArcGIS Service)
*******************/

/* Feature Layer: U.S. Population Change between 1990-2000 (Credit: Esri, U.S. Census Bureau) */
var usPopulationChange = L.esri.featureLayer({
  url: "https://server.arcgisonline.com/arcgis/rest/services/Demographics/USA_1990-2000_Population_Change/MapServer/4",
  style: function () {
    return {
      color: "#FFF",
      weight: 2
    };
  },
  onEachFeature: function (feature, layer) {
     /* Popup displaying the state and its population rate */
     // layer.bindPopup(feature.properties.NAME + "<br/>" + feature.properties.RATE_POP);
     /* Popup with additional styling */
     layer.bindPopup("<h1>" + feature.properties.NAME + "</h1>" + "<b>Population Rate: </b>" + feature.properties.RATE_POP);
   }
}).addTo(map);
