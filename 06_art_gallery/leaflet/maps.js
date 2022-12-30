var osm_street = L.tileLayer("https://{s}.tile.thunderforest.com/pioneer/{z}/{x}/{y}.png?apikey=7b5b3783ece14e9585c3ad3bf5e2e2fd", {
  attribution: "&copy; Tsotneforester",
  minZoom: 1,
  maxZoom: 19,
});

var osm_topo = L.tileLayer("https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png", {
  attribution: "&copy; Tsotneforester",
  minZoom: 1,
  maxZoom: 15,
});

var thunder_forest = L.tileLayer("https://tile.thunderforest.com/cycle/{z}/{x}/{y}.png?apikey=7b5b3783ece14e9585c3ad3bf5e2e2fd", {
  attribution: "&copy; Tsotneforester",
  apikey: "<7b5b3783ece14e9585c3ad3bf5e2e2fd>",
  maxZoom: 20,
});

var thunder_landscape = L.tileLayer("https://tile.thunderforest.com/landscape/{z}/{x}/{y}.png?apikey=7b5b3783ece14e9585c3ad3bf5e2e2fd", {
  attribution: "&copy; Tsotneforester",
  apikey: "<7b5b3783ece14e9585c3ad3bf5e2e2fd>",
  maxZoom: 20,
});

var esri_satelite = L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}", { attribution: "&copy; Tsotneforester", minZoom: 9, maxZoom: 17 });
