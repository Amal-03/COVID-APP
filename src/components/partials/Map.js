import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { Card } from "react-bootstrap";

const Map = ({ data = [] }) => {
  const statesData = data;

  delete L.Icon.Default.prototype._getIconUrl;
  L.Icon.Default.mergeOptions({
    iconRetinaUrl:
      "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon-2x.png",
    iconUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png",
    shadowUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png",
  });

  const indiaCenter = [20.5937, 78.9629];

  return (
    <div className="px-3 px-lg-0">
      <MapContainer
        center={indiaCenter}
        zoom={5}
        style={{ height: "600px", width: "100%", marginBottom: "2rem" }}
        key={"covid-cases-india"}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {statesData.map((state) => (
          <Marker key={state.name} position={[state.lat, state.lng]}>
            <Popup>
              <h4 className="mt-3">{state.loc}</h4>
              <Card className="cases mb-2">
                <Card.Body className="p-2">
                  <small className="mb-0 mt-0">Total Cases</small>
                  <h5>{state.totalConfirmed}</h5>
                </Card.Body>
              </Card>

              <Card className="cases mb-2">
                <Card.Body className="p-2">
                  <small className="mb-0 mt-0">Recovered</small>
                  <h5>{state.discharged}</h5>
                </Card.Body>
              </Card>

              <Card className="cases mb-2">
                <Card.Body className="p-2">
                  <small className="mb-0 mt-0">Deaths</small>
                  <h5>{state.deaths}</h5>
                </Card.Body>
              </Card>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default Map;
