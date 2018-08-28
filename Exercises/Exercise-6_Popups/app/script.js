// Initialize the map on the "map" div with a given center and zoom
var map = L.map("map").setView([46.37, -93.88], 6);

// Basemap Layers
L.esri.basemapLayer("DarkGray").addTo(map);
L.esri.basemapLayer("DarkGrayLabels").addTo(map);


/*******************
  Feature Layer
  (ArcGIS Service)
*******************/

//TODO: Step 1. Go to http://server.arcgisonline.com/arcgis/rest/services/Demographics/USA_1990-2000_Population_Change/MapServer/4 and determine two (2) fields you would like to display in the popup.
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
    //TODO: Step 2. Add the two fields you would like to display
    layer.bindPopup(feature.properties.yourFirstFieldToDisplay + "<br/>" + feature.properties.yourSecondFieldToDisplay);
    //TODO: Step 3. Try styling your popups. Change the field names below and comment out the section above to see a styled popup with your content.
    // layer.bindPopup("<h1>" + feature.properties.yourFirstFieldToDisplay + "</h1>" + "<b>Population Rate: </b>" + feature.properties.yourSecondFieldToDisplay);
  }
}).addTo(map);
