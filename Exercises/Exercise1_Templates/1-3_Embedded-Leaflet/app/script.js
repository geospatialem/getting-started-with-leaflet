/* Basemap: CartoDB Positron */
var cartoPositron = L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>'
});

//Define the map
//Turn off zooming and panning by click, scroll, and touch
var map = L.map('map', {
	center: [44.95, -93.09], //Map center moved to accommodate Minnesota's arrowhead region
	zoom: 6,

	//TODO: Step 1. Set the minimum and maximum zoom
	/*minZoom: 6,
	maxZoom: 6,*/

	//TODO: Step 2: Limit map functionality on desktop and mobile devices.
	/*doubleClickZoom: false,
	boxZoom: false,
	zoomControl: false,
	dragging: false,
	tap: false,
	touchZoom: false,
	scrollWheelZoom: false,*/

	//TODO: Step 3: Set map controls
	/*fullscreenControl: true,
	attributionControl: true,*/

	//TODO: Step 4: Showcase the layers option, same as the addTo(map) method.
	layers: [cartoPositron]
});
