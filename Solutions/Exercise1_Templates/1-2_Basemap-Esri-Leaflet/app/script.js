var map = L.map("map").setView([46.37, -93.88], 6); // Centered on St. Paul (Lat/Long tool: http://itouchmap.com/latlong.html)

/* Basemaps */
L.esri.basemapLayer("DarkGray").addTo(map);
L.esri.basemapLayer("DarkGrayLabels").addTo(map);
