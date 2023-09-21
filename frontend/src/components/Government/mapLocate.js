import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import LocationIcon from '../../pics/LocationIcon.png';
import L from 'leaflet';
const customIcon = L.icon({
  iconUrl: LocationIcon,
  iconSize: [50, 50],
  iconAnchor: [12.5, 12.5],
});

const Map = () => {
  const [clickedLocation, setClickedLocation] = useState(null);

  const handleMapClick = async (e) => {
    const { lat, lng } = e.latlng;

    try {
      const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`);
      if (response.ok) {
        const data = await response.json();
        const address = data.display_name;
        setClickedLocation({ lat, lng, address });
      } else {
        throw new Error('Unable to fetch address data');
      }
    } catch (error) {
      console.error('Error fetching address data:', error);
    }
  };

  return (
    <MapContainer center={[20.5937, 78.9629]} zoom={4.5} style={{ height: '700px', width: '650px' }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />

      <MapClickHandler onClick={handleMapClick} />

      {clickedLocation && (
        <Marker position={[clickedLocation.lat, clickedLocation.lng]} icon={customIcon}>
          <Popup>{clickedLocation.address}</Popup>
        </Marker>
      )}
    </MapContainer>
  );
};

function MapClickHandler({ onClick }) {
  const map = useMapEvents({
    click(e) {
      onClick(e);
    },
  });

  return null;
}

export default Map;