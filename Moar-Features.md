# Moar Features

1. [Custom icon](#custom-icon)   
2. [Layer mouseover interaction](#layer-mouseover-interaction)    
3. [Layer control](#layer-control)  
4. [Zoom to layer (on load)](#zoom-to-layer)  


## Custom icon  
To make your own custom icon you will need two images, one of the icon and one of the icons shadow. You can use the shadow image as a way to make your icon pop, either as a shadow or background image. Both icons should be saved as .png files and have transparency surrounding the images.  

```javascript  
// Custom-defined icon sizing and image
var yourIconName = L.icon({
	iconUrl: 'images/yourIconFileName.png',
	shadowUrl: 'images/yourIconShadowFileName.png',
	iconSize:     [50, 50],
	shadowSize:   [55, 55],
	iconAnchor:   [22, 94],
	shadowAnchor: [22, 94],
	popupAnchor:  [-3, -76]
});

// Add the marker to the map and specify the custom icon
var yourMarkerName = L.marker([44.9594,-93.2935], {icon: yourIconName, title: 'Accessibility tag'});  
```

## Layer mouseover interaction   
Add interaction to your map elements by using the `onEachFeature` option and adding the `layer.on` listener for `mouseover` and `mouseout`.

You will need to style your elements when a user mouses over the feature, but also when the user mouses out you will need to reset the style back to its original style (or a different one if you so choose).  

```javascript  
/* Feature Layer */
var yourFeatureLayerName = L.esri.featureLayer({
  url: "yourUrl",
	// Style
  style: function (feature) {
      return {
        color: "#CCC",
        weight: 1.5,
        fillColor: "#CCC"
      };
    },
  onEachFeature: function (feature, layer) {
     layer.bindPopup("My popup content"),
		 //The layer.on event listener
		 layer.on({
			 mouseover: function (e) {
				 //Change the polygon style
				 e.target.setStyle({
						 weight: 4,
						 color: '#000',
				 });
				 //IE & Opera Browser Support
				 if (!L.Browser.ie && !L.Browser.opera) {
					 layer.bringToFront();
				 }
			 },
			 //Reset the polygon style
			 mouseout: function (e) {
				 yourFeatureLayerName.resetStyle(e.target);
			 }
		 });
   }
});
```

## Layer control  
We'll define the map and add the `layers` option to define which layers we'd like to load into the map by default. **Note:** We also removed the `addTo(map)` call:  
```javascript  
// Another way to load layers in instead of using the addTo(map) method is to load them using the map's layers option
var map = L.map("map", {
	center: [yourLat, yourLng],
	zoom: yourZoomLevel,
	layers: [initialLoadLayerName]
});
```

We'll define the basemaps and overlay layers we'd like to add to our legend:  
```javascript  
/* Legend */
var baseMaps = {}; // Basemaps
var overlayMaps = { // Data layers
	"Layer 1": initialLoadLayerName,
	"Layer 2": unloadedLayerName1,
	"Layer 3": unloadedLayerName2
};
```

Finally, we'll add the basemaps and overlay layers to the layer control. Then we'll add the control to the map, like so:  
```javascript  
// Add the basemaps and data layers to the legend and map view
L.control.layers(baseMaps, overlayMaps).addTo(map);
```

## Zoom to layer  
Lastly we'll add an event listener that when a user adds a layer to the view will zoom to the extent of the dataset.

Using the layer name (defined in our legend) we can set up an `if/else if/else` statement that gathers the extent based on:
* Point-based extent,
* Polgon-based extent, and
* Map view  

**Note:** Since the example uses the `L.esri.FeatureLayer` we must reference the [Esri Leaflet documentation](https://esri.github.io/esri-leaflet) to get the bounds. Other calls using Leaflet will need to consult the [Leaflet documentation](https://leafletjs.com).
```javascript  
// Event listener when a user adds a layer to the map, the map extent will zoom to the bounds of the dataset
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
```


## Final products  
* [Code](https://github.com/geospatialem/getting-started-with-leaflet/tree/gh-pages/Solutions/Resource-MoarFeatures)  
* [Map](https://geospatialem.github.io/getting-started-with-leaflet/Solutions/Resource-MoarFeatures/index.html)  

Return to [Extra Credit: Trade Tricks](Extra-Credit.md)  
Continue to [Course Content](README.md)  
