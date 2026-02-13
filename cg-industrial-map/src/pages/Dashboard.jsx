import MapView from "../components/Map/MapView";
import Sidebar from "../components/Sidebar/Sidebar";

function Dashboard() {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <Sidebar />
      <MapView />
    </div>
  );
}

export default Dashboard;
