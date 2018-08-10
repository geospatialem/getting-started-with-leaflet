//TODO: Step 1. Using the Lat/Long tool http://itouchmap.com/latlong.html add the latitude and longitude coordinates to center the map.
//TODO: Step 2. Once you determined a lat, long determine the zoom level by zooming into the map.
var map = L.map("map").setView([0, 0], 2);

//var map = L.map("map").setView([lat, lng], 5); //Testing out the zoom level (zoomed out)

//var map = L.map("map").setView([lat, lng], 15); //Testing out the zoom level (zoomed in)

//var map = L.map("map").setView([lat, lng], 10); //Testing out the zoom level (in between the two)

//TODO: Step 3. Uncomment the basemap line below to display Esri's Dark Gray basemap so we can identify where we are.
//TODO: Step 4. Using Esri's Documentation https://developers.arcgis.com/javascript/3/jsapi/esri.basemaps-amd.html and add the Dark Gray Labels basemap
//TODO: (Optional) Step 5. Check out additional basemaps available, the ImageryFirefly is a great option to display imagery with your data and make it "pop".
//TODO: (Optional) Step 6. Check out additional documentation on L.esri.Vector.basemap to learn more on how to add Esri or your own vector basemap.
/* Basemaps */
// L.esri.basemapLayer("DarkGray").addTo(map);
