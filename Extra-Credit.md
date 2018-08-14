# Extra Credit: Trade Tricks  

1. [Symbolize Based on Attribute](#symbolize-based-on-attribute)  
2. [Point to Layer](#point-to-layer)  

## Symbolize Based on Attribute  

### Color  
Color is a great way to showcase your data on a map, particularly with choropleth maps, but also with point data.  

The following example will work for both point, and polygon data. Note the style function is _only a portion_ of the JavaScript needed. The rest of the code was omitted so it could apply to a wide range of datasets.  

**JavaScript**:   
```javascript  
//Set the color
function setColor(yourVariableName) {
	return yourVariableName  > 100.0 ? '#000' : // I usually set the highest value here, to verify records are coming in as-expected
	       yourVariableName  > 75.0  ? '#006D2C' :
	       yourVariableName  > 50.0  ? '#31A354' :
	       yourVariableName  > 25.0  ? '#74C476' :
	       yourVariableName  >  0.0  ? '#BAE4B3' :
				                             '#FFF'; // I usually set this below the lowest value, to verify records are coming in as-expected
}

//Note: this is only the style portion of the data. The data itself is not defined as it could be a service, or GeoJSON.
style: function (feature) {
    return {
      color: "#D3D3D3", //Gray outline
      weight: 1.5, // Weight of the outline
      fillColor: setColor(feature.properties.YOURFIELDNAMEHERE), //Set the fill to a field in your dataset
      fillOpacity: 0.75, //Fill opacity
      opacity: 1, //Line opacity
      dashArray: '3', //Line dash
      clickable: true //Clickable
    };
}
```

### Radius  
Symbol size is a great way to showcase your data on a map, particularly with point data.

The following example will work for both point, and polygon data. Note the style function is _only a portion_ of the JavaScript needed. The rest of the code was omitted so it could apply to a wide range of datasets.  

**JavaScript**:   
```javascript  
//Set the color
function setRadiusSize(yourVariableName) {
	return yourVariableName  > 100.0 ? 100 : // I usually set the highest value here, to verify records are coming in as-expected
	       yourVariableName  > 75.0  ?  16 :
	       yourVariableName  > 50.0  ?   8 :
	       yourVariableName  > 25.0  ?   6 :
	       yourVariableName  >  0.0  ?   4 :
					                  					 4; // I usually set this below the lowest value, to verify records are coming in as-expected
}

//Note: this is only the style portion of the data. The data itself is not defined as it could be a service, or GeoJson.
style: function (feature) {
    return {
      color: "#000", //Colored black
      radius: setRadiusSize(feature.properties.YOURFIELDNAMEHERE), //Set the radius to a field in your dataset
      opacity: 1, //Point opacity
      clickable: true //Clickable
    };
}
```  

## Point to Layer
By default, simple markers are drawn for GeoJSON points. However, using the `pointToLayer` option we can create a `circleMarker`. For more info, check out my [blog post](https://geospatialresponse.wordpress.com/2015/07/26/leaflet-geojson-pointtolayer).

Note the style function is _only a portion_ of the JavaScript needed. The rest of the code was omitted so it could apply to a wide range of datasets.  

**JavaScript**:  
```javascript
    style: function(feature) {
        return {
        	color: "#000"
        };
    },
    pointToLayer: function(feature, latlng) {
        return new L.CircleMarker(latlng, {
        	radius: 8,
        	fillOpacity: 1
        });
    }
```  

## Final products  
* [Code](../../tree/gh-pages/Solutions/Extra-Credit_Styling)  
* [Map](http://geospatialem.github.io/getting-started-with-leaflet/Solutions/Extra-Credit_Styling/index.html)  

Return to [Exercise 6: Popups](Exercise_6_Popups.md)  
Continue to [Course Content](README.md)  
