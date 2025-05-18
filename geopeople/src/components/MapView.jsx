import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

// Fix default icon issue in Leaflet + React
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});

// Custom red bigger icon for selected marker
const redIcon = new L.Icon({
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
  iconSize: [35, 56], // bigger size
  iconAnchor: [17, 56], // point of the icon which will correspond to marker's location
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const MapView = ({ location, isSelected, name }) => {
  if (!location || !location.lat || !location.lng) {
    return <p style={{ color: "red" }}>Location not available</p>;
  }

  return (
    <MapContainer
      center={[location.lat, location.lng]}
      zoom={10}
      style={{ height: "400px", width: "100%", marginTop: "1rem" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker
        position={[location.lat, location.lng]}
        icon={isSelected ? redIcon : undefined} // use red icon if selected
      >
        <Popup>{name}</Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapView;
