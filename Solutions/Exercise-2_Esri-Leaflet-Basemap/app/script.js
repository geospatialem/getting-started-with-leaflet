// Centered on St. Paul (Lat/Long tool: http://itouchmap.com/latlong.html)
var map = L.map("map").setView([46.37, -93.88], 6);

/* Basemaps */
L.esri.basemapLayer("DarkGray").addTo(map);
L.esri.basemapLayer("DarkGrayLabels").addTo(map);
// L.esri.basemapLayer("ImageryFirefly").addTo(map);
// L.esri.Vector.basemap("Spring").addTo(map);
