// Initialize the map on the "map" div with a given center and zoom
var map = L.map("map").setView([46.37, -93.88], 6);

/*******************
  Basemap Layers
*******************/
/* Basemap #1: Esri Dark Gray */
L.esri.basemapLayer("DarkGray").addTo(map);
//TODO: Step 1. Add in the Dark Gray basemap with labels

/*******************
  Feature Layer
  (ArcGIS Service)
*******************/

/* Feature Layer: U.S. Population Change between 1990-2000 (Credit: Esri, U.S. Census Bureau) */
//TODO: Step 2. Add in the following service: https://server.arcgisonline.com/arcgis/rest/services/Demographics/USA_1990-2000_Population_Change/MapServer/4
//TODO: Step 3: Add the data to the map using the .addTo(map) method
var usPopulationChange = L.esri.featureLayer({
  url: ""
});
