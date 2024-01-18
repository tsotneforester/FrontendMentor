console.log(`192.168.0.100 - to catch error`);
console.log(`210.138.184.59 - IP from japan `);

let form = document.forms[0];
let zoomIndex = 10;
let ip_data = document.querySelector("#ip-data h1");
let location_data = document.querySelector("#location-data h1");
let time_data = document.querySelector("#time-data h1");
let provider_data = document.querySelector("#provider-data h1");

let osm_street = L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "&copy; Tsotneforester",
  minZoom: 1,
  maxZoom: 19,
});

var customIcon = L.icon({
  iconUrl: "images/icon-location.svg",
  iconSize: [32, 38],
  iconAnchor: [16, 19],
  popupAnchor: [-0, -18],
});

let map = L.map("mapid", {
  renderer: L.canvas(),
  zoomControl: false,
  fullscreenControl: true,
  center: [23.2955, 45.69],
  zoom: 2,
  minZoom: 3,
  layers: [osm_street],
});

async function ipify(ip) {
  let myIP;
  if (!ip) {
    const response1 = await fetch("https://ipinfo.io/?token=8f8e89d5007bc0");
    const data1 = await response1.json();

    myIP = data1.ip;
  } else {
    myIP = ip;
  }

  try {
    const response2 = await fetch(`https://ipapi.co/${myIP}/json`);
    const data2 = await response2.json();

    console.log(data2);

    const { city, country_name, latitude, longitude, utc_offset, org } = data2;
    map.setView([latitude, longitude], zoomIndex);
    L.marker([latitude, longitude], { icon: customIcon }).addTo(map).bindPopup(`${myIP} / ${country_name}, ${city} / UTC ${utc_offset} / ${org}`);

    ip_data.innerHTML = myIP;
    location_data.innerHTML = `${country_name}, ${city}`;
    time_data.innerHTML = `UTC ${utc_offset.slice(0, 3)}:${utc_offset.slice(3, 7)}`;
    provider_data.innerHTML = org;
  } catch (e) {
    alert("result not found");
  }
}

ipify();

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let userInput = form[0].value;
  const ipAddressRegex = /^(\d{1,3}\.){3}\d{1,3}$/;

  if (ipAddressRegex.test(userInput)) {
    ipify(userInput);
  } else {
    alert("not valid IP");
  }
});
