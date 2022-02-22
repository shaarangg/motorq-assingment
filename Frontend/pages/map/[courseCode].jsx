import dynamic from "next/dynamic";
function MapPage() {
	const MapComp = dynamic(() => import("../../components/MapComp"), {
		ssr: false,
	});
	return <MapComp></MapComp>;
}

export default MapPage;
