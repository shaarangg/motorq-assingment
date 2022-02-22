import Layout from "../components/Layout";
import dynamic from "next/dynamic";
function map() {
	const MapComp = dynamic(() => import("../components/MapComp"), {
		ssr: false,
	});
	return (
		<Layout>
			<MapComp></MapComp>
		</Layout>
	);
}

export default map;
