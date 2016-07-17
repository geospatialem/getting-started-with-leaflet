var map = L.map("map").setView([0, 0], 10); //Testing out the latitude, longitude

//var map = L.map("map").setView([37.75, -122.23], 5); //Testing out the zoom level (zoomed out)

//var map = L.map("map").setView([37.75, -122.23], 15); //Testing out the zoom level (zoomed in)

//var map = L.map("map").setView([37.75, -122.23], 10); //Final

L.esri.basemapLayer("Topographic").addTo(map); //Basemap
