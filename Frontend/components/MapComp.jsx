import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useEffect, useState } from "react";
import axios from "axios";
import MarkerClusterGroup from "react-leaflet-markercluster";
L.Icon.Default.imagePath = "../leaflet_images/";

function MapComp({ courseCode }) {
	const [classes, setClasses] = useState([]);
	const fetchCycles = async (signal) => {
		try {
			const res = await axios.get(`http://localhost:3002/classes-on-map/${courseCode}`);
			setClasses(res.data.data);
		} catch (e) {
			console.error(e);
		}
	};

	useEffect(() => {
		const AbortCont = new AbortController();
		fetchCycles(AbortCont.signal);
	}, []);

	return (
		<MapContainer center={[12.9, 79.14]} zoom={4} style={{ height: "100%", width: "100%" }}>
			<TileLayer
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			/>
			<MarkerClusterGroup>
				{classes.map((cls) => {
					const { _id, location, studentsRegistered, faculty, building, time } = cls;
					return (
						<Marker key={_id} position={[location.lat, location.lon]}>
							<Popup style={{ dispay: "flex", gap: "1rem" }}>
								<div>Faculty: {faculty}</div>
								<div>Building: {building}</div>
								<div>Time: {time}</div>
								<div>Students Registered: {studentsRegistered}</div>
							</Popup>
						</Marker>
					);
				})}
			</MarkerClusterGroup>
		</MapContainer>
	);
}

export default MapComp;
