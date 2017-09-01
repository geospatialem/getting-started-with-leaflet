# How To Make a Web Map Like That!
This workshop was created for the [Minnesota GIS/LIS Consortium](http://mngislis.org)'s 26th Annual Conference in Duluth, Minnesota on October 26, 2016.

_While all content is freely available, no person should redistribute the information for profit._ However, the course content can be shared for non-profit use including broadcasting via webinars, training opportunities, Maptime events, Meet-up events, and other mediums.

If using this course for such a medium, please give credit to [Kitty Hurley](https://www.twitter.com/geospatialem).

## Course Files
* [Slides](http://bit.ly/gislis-web-map-like-that)    
* [Project Files](http://bit.ly/web-map-like-that-files)    

## Background
While this workshops focuses on open source platforms, students can apply the skills learned in the classroom to work with other mapping libraries!

This course teaches students about the [Leaflet](http://leafletjs.com/reference.html) and [Esri Leaflet](http://esri.github.io/esri-leaflet) libraries; two of the leading open-source JavaScript libraries for mobile-friendly interactive maps.

Leaflet is designed with simplicity, performance, and usability in mind. It works efficiently across all major desktop and mobile platforms, can be extended with lots of plugins, is well-documented, and has a readable source code.

### Code Organization
The course content separates out the code into the following files:

* HTML *(.html)*
* CSS *(.css)*
* JavaScript *(.js)*

### File Structure  
**Bolded** file names indicate the files we will be editing. The other folders and files are used for reference, and are the libraries we are using to produce our web maps.

* :open_file_folder: _app_  
  * **style.css**  
  * **script.js**  
* :open_file_folder: _leaflet_ [Leaflet JavaScript Library]  
  * leaflet.css  
  * leaflet.js
  * leaflet.ajax.js _(where applicable)_   
* :open_file_folder: _esri leaflet (where applicable)_ [Esri Leaflet JavaScript Library]  
  * esri-leaflet.js  
* **index.html**

## Course Materials  

* [Exercise 1: Templates](Exercise1_Templates.md)   
* [Exercise 2: Adding Data](Exercise2_Adding-Data.md)    
* [Exercise 3: Pop-ups](Exercise3_Popups.md)    
* [Exercise 4: Extra Credit](Exercise4_ExtraCredit.md)

## Exercise 1: Templates  

### 1.1: Basemap template with Leaflet.js  
Put together your first web map and add a basemap using the [Leaflet.js](http://leafletjs.com) library.  

### 1.2: Basemap template with Esri Leaflet.js  
Put together your first web map and add a basemap using the [Esri Leaflet](https://esri.github.io/esri-leaflet) library.  

### 1.3: Embeddable map with basemap template, including no zoom/panning, with Leaflet.js  
Put together your first web map, add a basemap, and restrict panning and zooming so you can embed the map within an existing webpage or content management system (CMS).

To embed the map on a page add in the following HTML content to the page:

```html  
<iframe src="http://your-published-map-url-here.com" frameborder="0" width="600" height="400"></iframe>  
```   

## Exercise 2: Adding Data to the Map

### 2.1: Add an ArcGIS Service  
Add an ArcGIS Service of your choice and style it to your liking in **your** web map!

### 2.2: Add a GeoJSON  
Add a GeoJSON, from an ArcGIS Service, a web location, or create your own from scratch. Style it to your liking and add it to your web map!

## Exercise 3: Pop-ups
Now that you've added data to the map, we'll loop through a field and add the data as a popup when a user clicks on a geography. :+1:   

## Exercise 4: Extra Credit
If time permits, try one of the following options in your map:

* Create a function that grabs a field's values and styles your features differently in the map based on their values.
* Create a function that symbolizes your point-based data based on a radius size.
