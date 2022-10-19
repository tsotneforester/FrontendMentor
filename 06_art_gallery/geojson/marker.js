let popup = L.popup({ minWidth: 60, autoClose: true, closeOnEscapeKey: true })
  .setLatLng([42.2955, 43.69])
  .setContent("<p>გამარჯობა!<br />კეთილი იყოს შენი მობრძანება.</p>");

popup.on("click", function (ev) {
  var latlng = map.mouseEventToLatLng(ev.originalEvent);
  console.log(latlng.lat + ", " + latlng.lng);
});
