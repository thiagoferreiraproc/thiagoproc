import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

export default function MapView({ data }) {
  const center = data.length ? [parseFloat(data[0].latitude), parseFloat(data[0].longitude)] : [0, 0];
  return (
    <MapContainer center={center} zoom={13} style={{ height: '400px', width: '100%' }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {data.map((item, idx) => (
        <Marker key={idx} position={[parseFloat(item.latitude), parseFloat(item.longitude)]}>
          <Popup>{item.name}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
