import { MapContainer, TileLayer } from "react-leaflet";

function MapView() {
  return (
    <div style={{ flex: 1, height: "100vh" }}>
      <MapContainer
        center={[21.2787, 81.8661]}
        zoom={7}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          attribution='© OpenStreetMap contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    </div>
  );
}

export default MapView;
