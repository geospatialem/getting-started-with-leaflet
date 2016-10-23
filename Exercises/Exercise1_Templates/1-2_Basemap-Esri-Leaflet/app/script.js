//TODO: Step 1. Using the Lat/Long tool http://itouchmap.com/latlong.html add the latitude and longitude coordinates to center the map.
//TODO: Step 2. Once you determined a lat, long determine the zoom level by zooming into the map.
var map = L.map("map").setView([0, 0], 2);

//var map = L.map("map").setView([lat, lng], 5); //Testing out the zoom level (zoomed out)

//var map = L.map("map").setView([lat, lng], 15); //Testing out the zoom level (zoomed in)

//var map = L.map("map").setView([lat, lng], 10); //Testing out the zoom level (in between the two)


//TODO: Step 3. Using Esri's Documentation https://developers.arcgis.com/javascript/3/jsapi/esri.basemaps-amd.html
//add the Dark Gray Labels basemap so we can identify where we are!
/* Basemaps */
L.esri.basemapLayer("DarkGray").addTo(map); //Dark Gray Basemap
