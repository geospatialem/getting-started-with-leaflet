/********************************************/
/*   Feature Layer Styling #1: Polygon    */
/* Set the color for the Population Rate  */
/*****************************************/
function getRatePopStyle(ratePop) {
	return 	ratePop >  3.0  ?  '#045A8D' :
			    ratePop >  2.0  ?  '#2B8CBE' :
			    ratePop >  1.0  ?  '#74A9CF' :
			    ratePop >  0.5  ?  '#BDC9E1' :
								             '#FFF';
}

/***************************
  Feature Layer #1: Polygon
  (ArcGIS Service)
***************************/
/* Feature Layer: U.S. Population Change between 1990-2000 (Credit: Esri, U.S. Census Bureau) */
var usPopulationChange = L.esri.featureLayer({
  url: "https://server.arcgisonline.com/arcgis/rest/services/Demographics/USA_1990-2000_Population_Change/MapServer/4",
  style: function (feature) {
      return {
        color: "#CCC",
        weight: 1.5,
        fillColor: getRatePopStyle(feature.properties.RATE_POP),
        fillOpacity: 0.75
      };
    },
  onEachFeature: function (feature, layer) {
     layer.bindPopup("<h1>" + feature.properties.NAME + "</h2>" + "<b>2000-2010 Population Change: </b>" + feature.properties.RATE_POP + "%"),
		 layer.on({
			 mouseover: function (e) {
				 e.target.setStyle({ //Change the polygon style
						 weight: 4,
						 color: '#000',
				 });
				 //IE & Opera Browser Support
				 if (!L.Browser.ie && !L.Browser.opera) {
					 layer.bringToFront();
				 }
			 },
			 mouseout: function (e) {
				 usPopulationChange.resetStyle(e.target); //Reset the polygon style
			 }
		 });
   }
});

/********************************************/
/*   Feature Layer Styling #2: Point       */
/*   Set the color & radius for a Point   */
/*****************************************/
function symbolizeColor(popValue) {
	return 	popValue >  100000   ?  '#045A8D' :
			    popValue >   10000   ?  '#2B8CBE' :
			    popValue >    1000   ?  '#74A9CF' :
					popValue >   		 0   ?  '#FFF':
														      '#FFF';
}

function symbolizeRadius(popValue) {
	return 	popValue >  100000  ?  15 :
			    popValue >   10000  ?  10 :
			    popValue >    1000  ?   4 :
								             		  2;
}

/***************************
  Feature Layer #2: Point
  (ArcGIS Service)
***************************/
/* Feature Layer: Minnesota City Populations (Credit: Minnesota Office of the State Auditor) */
var mnCitiesPopulations = L.esri.featureLayer({
	url: "https://www.auditor.state.mn.us/arcgis/rest/services/MnInfrastructure/MapServer/0",
  pointToLayer: function (feature, latlng) {
		return new L.CircleMarker(latlng, {
				radius: symbolizeRadius(feature.properties.Population),
				fillColor: symbolizeColor(feature.properties.Population),
				color: null,
				weight: 1,
				opacity: 1,
				fillOpacity: 0.75
		});
  },
  onEachFeature: function (feature, layer) {
     layer.bindPopup("<h1>" + feature.properties.Name + "</h1>" + "<b>Population: </b>" + feature.properties.Population);
   }
});

/***************************
  Cat Lounge (icon example)
***************************/
// Custom icon: Apollo cat icon
var catIcon = L.Icon.extend({
	options: {
		shadowUrl: 'images/apolloCatShadow.png',
		iconSize:     [50, 50],
		shadowSize:   [55, 55],
		iconAnchor:   [22, 94],
		shadowAnchor: [22, 94],
		popupAnchor:  [-3, -76]
	}
});

var apolloCatIcon = new catIcon({
	iconUrl: 'images/apolloCat.png'
});

var catLounge = L.marker([44.95945355239673,-93.293559551239], {icon: apolloCatIcon, title: 'The Cat Meow Cafe'});

// Another way to load layers in instead of using the addTo(map) method is to load them using the map's layers option
var map = L.map("map", {
	center: [46.37, -93.88],
	zoom: 6,
	layers: [usPopulationChange]
});

/* Legend */
var baseMaps = {}; // Basemaps
var overlayMaps = { // Data layers
	"States": usPopulationChange,
	"Cities": mnCitiesPopulations,
	"Cat Lounge": catLounge
};

// Add the basemaps and data layers to the legend and map view
L.control.layers(baseMaps, overlayMaps).addTo(map);

// Basemap Layers
L.esri.basemapLayer("DarkGray").addTo(map);
L.esri.basemapLayer("DarkGrayLabels").addTo(map);

// Event listener when a user adds a layer to the map, the map extent will zoom to the bounds of the dataset
// This is using Esri Leaflet, please see their documentation for additional information: https://esri.github.io/esri-leaflet/api-reference
map.on('overlayadd', function (layer) {
	if (layer.name.indexOf("Cities") >= 0) {
		// Point-based extent
		mnCitiesPopulations.query().bounds(function (error, latlngbounds) {
			map.fitBounds(latlngbounds);
		});
	} else if (layer.name.indexOf("Cat Lounge") >= 0) {
			// Change the map view
			map.setView([44.95945355239673,-93.293559551239], 15);
	} else {
		// Polygon-based extent
		var bounds = L.latLngBounds([]);
    usPopulationChange.eachFeature(function (layer) {
			var layerBounds = layer.getBounds();
			bounds.extend(layerBounds);
		});
    map.fitBounds(bounds);
	}
});
