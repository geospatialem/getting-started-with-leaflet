// Initialize the map on the "map" div with a given center and zoom
//TODO: Step 1. Using the Lat/Long tool http://itouchmap.com/latlong.html add the latitude and longitude coordinates to center the map.
//TODO: Step 4. Once you determined a lat, long determine the zoom level by zooming into the map.
var map = L.map('map', {
    center: [lat,long], //Map center, e.g. center: [44.95, -93.09]
    zoom: 5 // Zoom level, e.g. zoom: 11
});

/* Basemap */
//TODO: Step 2. Find a basemap you'd like to use using http://leaflet-extras.github.io/leaflet-providers/preview
//TODO: Step 3. To add the basemap to the map, use the .addTo(map) call. */





//An Event listener to help us identify the zoom level for our map
map.on('zoomend', function() {
    var mapZoomLevel = map.getZoom();
    alert("You are at zoom level: " + mapZoomLevel);
    //console.log("Zoom level: " + mapZoomLevel);
});
