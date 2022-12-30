let myLayers = L.layerGroup([monishvnebi_layer /*, holly_layer*/]);
let zoom = 16;
var map = L.map("mapid", {
  renderer: L.canvas(),
  zoomControl: false,
  attributionControl: true,
  fullscreenControl: true,
  center: [41.69575, 44.79658],
  zoom: zoom,
  maxZoom: zoom,
  minZoom: zoom,
  layers: [osm_street, myLayers],
});
