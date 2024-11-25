import React from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Icon } from 'leaflet';
import icon from '../assets/pin.png';

const SimpleMap = () => {
  const legalIcon = new Icon({
    iconUrl: icon,
    iconSize: [44, 58],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76],
  });

  //API works only for "art-gallery-geojsone.netlify.app" domain

  const host = 'https://maps.omniscale.net/v2/art-2aa166ea/style.grayscale/{z}/{x}/{y}.png';

  const attribution = '&copy; 2024 &middot; <a href="https://maps.omniscale.com/">Omniscale</a> ' + '&middot; Tsotneforester at GEOJS.ONE';

  return (
    <MapContainer zoomControl={false} scrollWheelZoom={false} center={[41.695733, 44.796561]} zoom={16} style={{ height: '100%', width: '100%' }}>
      <TileLayer attribution={attribution} url={host} />
      <Marker position={[41.695733, 44.796561]} icon={legalIcon}>
        {/* <Popup>Hello, I'm a marker!</Popup> */}
      </Marker>
    </MapContainer>
  );
};

export default SimpleMap;
