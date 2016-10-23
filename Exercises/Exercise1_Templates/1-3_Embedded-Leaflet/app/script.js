/* Basemap: CartoDB Positron */
/* Other Leaflet.js Basemaps: http://leaflet-extras.github.io/leaflet-providers/preview */
/* To add the basemap to the map, use the .addTo(map) call */
var cartoPositron = L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>'
});

//Define the map
//Turn off zooming and panning by click, scroll, and touch
var map = L.map('map', {
	center: [44.95, -93.09], //Map center moved to accommodate Minnesota's arrowhead region
	zoom: 6,
	//minZoom: 6,
	//maxZoom: 6,
	/*doubleClickZoom: false,
	boxZoom: false,
	zoomControl: false,
	dragging: false,
	tap: false,
	touchZoom: false,
	scrollWheelZoom: false,*/
	/*fullscreenControl: true,
	attributionControl: true,*/
	layers: [cartoPositron]
});
