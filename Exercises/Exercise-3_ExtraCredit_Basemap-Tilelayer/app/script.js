// Initialize the map on the "map" div with a given center and zoom
//TODO: Step 1. Using the Lat/Long tool http://itouchmap.com/latlong.html add the latitude and longitude coordinates to center the map.
//TODO: Step 4. Once you determined a lat, long determine the zoom level by zooming into the map.
var map = L.map("map", {
    center: [0, 0], //Map center stored as [lat, lng], e.g. center: [44.95, -93.09]
    zoom: 5 // Zoom level, e.g. zoom: 11
});

/* Basemap */
//TODO: Step 2. Find a basemap you'd like to use using http://leaflet-extras.github.io/leaflet-providers/preview and copy the JavaScript to the section below. (Basemap example: Esri Dark Gray Canvas).
//TODO: Step 3. To add the basemap to the map, use the .addTo(map) call. */


// Tilelayer Placekitten.com fun example
// Since we load it last in the map, it displays on top of the Esri basemaps
// L.TileLayer.Kitten = L.TileLayer.extend({
//     getTileUrl: function(coords) {
//         var i = Math.ceil(Math.random() * 4);
//         return "https://placekitten.com/256/256?image=" + i;
//     },
//     getAttribution: function() {
//         return "<a href='https://placekitten.com/attribution.html'>PlaceKitten</a>";
//     }
// });
//
// L.tileLayer.kitten = function() {
//     return new L.TileLayer.Kitten();
// };
//
// L.tileLayer.kitten().addTo(map);


//An Event listener to help us identify the zoom level for our map
map.on('zoomend', function() {
    var mapZoomLevel = map.getZoom();
    alert("You are at zoom level: " + mapZoomLevel);
    //console.log("Zoom level: " + mapZoomLevel);
});
