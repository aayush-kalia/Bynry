import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

// Default (blue) icon
const defaultIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

// Red icon for selected marker
const redIcon = new L.Icon({
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const MapView = ({ profiles, selectedProfile }) => {
  return (
    <MapContainer
      center={[19.076, 72.8777]} // Default center (Mumbai)
      zoom={4.5}
      style={{ height: "400px", width: "100%", marginTop: "1rem" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />
      {profiles.map((profile) => {
        const position = profile.location;
        if (!position?.lat || !position?.lng) return null;

        const isSelected = selectedProfile?.id === profile.id;

        return (
          <Marker
            key={profile.id}
            position={[position.lat, position.lng]}
            icon={isSelected ? redIcon : defaultIcon}
          >
            <Popup>{profile.name}</Popup>
          </Marker>
        );
      })}
    </MapContainer>
  );
};

export default MapView;
