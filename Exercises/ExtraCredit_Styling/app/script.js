// Initialize the map on the "map" div with a given center and zoom
var map = L.map("map").setView([46.37, -93.88], 6);

// Basemap Layers
L.esri.basemapLayer("DarkGray").addTo(map);
L.esri.basemapLayer("DarkGrayLabels").addTo(map);

//TODO: Step 0. Research the data you are presenting before proceeding. Visit the REST endpoints, and view the data that is available to you to showcase in the map.
//Step 0.1. http://server.arcgisonline.com/arcgis/rest/services/Demographics/USA_1990-2000_Population_Change/MapServer/4
//Step 0.2. http://www.auditor.state.mn.us/arcgis/rest/services/MnInfrastructure/MapServer/0

/********************************************/
/*   Feature Layer Styling #1: Polygon    */
/* Set the color for the Population Rate  */
/*****************************************/
//TODO: Step 1. Rename the function, myFunction, to something more meaningful. For example: getRatePopStyle, since we are styling by the population rate field.
//TODO: Step 2. Rename the input variable, inputVarName, to something more meaningful. For example: ratePop, since we are styling the population rate field.
//TODO: Step 3. Decide on the number of classifications you would like to have in your map and create a return with that many objects using inputVarName. Use https://colorbrewer2.org to help you decide on a color ramp with your classifications.
//TODO: Step 4. Alter the 0.0 values to reflect the classifications you would like to have in your map. For example: 0-1, 1-2, 2-3, 3+.
function myFunctionName (inputVarName) {
  // return 	inputVarName >  0.0  ?  '#045A8D' :
  //         inputVarName >  0.0  ?  '#2B8CBE' :
  //         inputVarName >  0.0  ?  '#74A9CF' :
  //         inputVarName >  0.0  ?  '#BDC9E1' :
  //                                 '#FFF';
}


/***************************
  Feature Layer #1: Polygon
  (ArcGIS Service)
***************************/
/* Feature Layer: U.S. Population Change between 1990-2000 (Credit: Esri, U.S. Census Bureau) */
var usPopulationChange = L.esri.featureLayer({
  url: "http://server.arcgisonline.com/arcgis/rest/services/Demographics/USA_1990-2000_Population_Change/MapServer/4",
  style: function (feature) {
      return {
        color: "#CCC",
        weight: 1.5,
        //TODO: Steps 5 & 6. Add the name of your function and specify the field to symbolize against.
        //fillColor: myFunctionName(feature.properties.yourFieldName),
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
//TODO: Step 7. Rename the functions, myColorFunctionName and myRadiusFunctionName, to something more meaningful. For example: symbolizeColor and symbolizeRadius, since we are using multiple methods to symbolize the points.
//TODO: Step 8. Rename the input variables, inputVarName2 and inputVarName3, to something more meaningful. For example: popValue, since we are styling by the population field.
//TODO: Step 9. Decide on the number of classifications you would like to have in your map (the color and radius classification numbers can vary, too!). Create a return with that many objects using inputVarName2/inputVarName3. Use https://colorbrewer2.org to help you decide on a color ramp with your classifications.
//TODO: Step 10. Alter the 0 values to reflect the classifications you would like to have in your map. For example: 0, 1000, 10000, 100000.
function myColorFunctionName(inputVarName2) {
	// return 	inputVarName2 >  0   ?  '#045A8D' :
	// 		    inputVarName2 >  0   ?  '#2B8CBE' :
	// 		    inputVarName2 >  0   ?  '#74A9CF' :
	// 				inputVarName2 >  0   ?     '#FFF' :
	// 													         '#FFF';
}

function myRadiusFunctionName(inputVarName3) {
	// return 	inputVarName3 >  0  ?  12 :
	// 		    inputVarName3 >  0  ?  10 :
	// 		    inputVarName3 >  0  ?   8 :
	// 							                  5;
}

/***************************
  Feature Layer #2: Point
  (ArcGIS Service)
***************************/
/* Feature Layer: Minnesota City Populations (Credit: Minnesota Office of the State Auditor) */
var mnCitiesPopulations = L.esri.featureLayer({
	url: "http://www.auditor.state.mn.us/arcgis/rest/services/MnInfrastructure/MapServer/0",
  pointToLayer: function (feature, latlng) {
		return new L.CircleMarker(latlng, {
      //TODO: Step 11. Add the name of your function and specify the field to symbolize against the radius.
        //radius: myColorFunctionName(feature.properties.yourFieldName),
        //TODO: Step 12. Add the name of your function and specify the field to symbolize against the color.
        //fillColor: myRadiusFunctionName(feature.properties.yourFieldName),
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
