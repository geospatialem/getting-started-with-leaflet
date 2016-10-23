var map = L.map("map").setView([44.95, -93.09], 10); // Centered on St. Paul (Lat/Long tool: http://itouchmap.com/latlong.html)

L.esri.basemapLayer("DarkGray").addTo(map);
L.esri.basemapLayer("DarkGrayLabels").addTo(map);
