// Initialize the map on the "map" div with a given center and zoom
var map = L.map("map").setView([46.37, -93.88], 6);

/*******************
  Basemap Layers
*******************/
/* Basemap #1: Esri Dark Gray */
var EsriDarkGrayCanvas = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}').addTo(map);
/* Basemap #2: Esri Dark Gray Reference */
var EsriDarkGrayCanvasRef = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Reference/MapServer/tile/{z}/{y}/{x}').addTo(map);

/*******************
  GeoJSON
  Note: As with any other AJAX request, this technique is subject to the
  Same Origin Policy: http://en.wikipedia.org/wiki/Same_origin_policy
  So the file must be on the same domain as the Javascript, or the server
  delivering it should support CORS.
*******************/
