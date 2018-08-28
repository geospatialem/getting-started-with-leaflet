// Initialize the map on the "map" div with a given center and zoom
var map = L.map("map").setView([46.37, -93.88], 6);

// Basemap Layers
L.esri.basemapLayer("DarkGray").addTo(map);
L.esri.basemapLayer("DarkGrayLabels").addTo(map);

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
     layer.bindPopup("<h1>" + feature.properties.NAME + "</h2>" + "<b>2000-2010 Population Change: </b>" + feature.properties.RATE_POP + "%");
   }
}).addTo(map);

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
}).addTo(map);
