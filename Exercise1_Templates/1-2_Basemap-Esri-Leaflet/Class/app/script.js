var map = L.map("map").setView([0, 0], 10); //Testing out the latitude, longitude (Lat/Long tool: http://itouchmap.com/latlong.html)

//var map = L.map("map").setView([44.95, -93.09], 5); //Testing out the zoom level (zoomed out)

//var map = L.map("map").setView([44.95, -93.09], 15); //Testing out the zoom level (zoomed in)

//var map = L.map("map").setView([44.95, -93.09], 10); //Final

/* Other Esri basemaps: https://developers.arcgis.com/javascript/3/jsapi/esri.basemaps-amd.html */
L.esri.basemapLayer("DarkGray").addTo(map); //Dark Gray Basemap
//L.esri.basemapLayer("DarkGrayLabels").addTo(map); //Dark Gray Basemap w/ Labels
