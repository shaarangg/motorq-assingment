import dynamic from "next/dynamic";
import Layout from "../../components/Layout";
import { useRouter } from "next/router";
function MapPage() {
	const MapComp = dynamic(() => import("../../components/MapComp"), {
		ssr: false,
	});
	const router = useRouter();
	const { courseCode } = router.query;
	return (
		<Layout>
			<MapComp courseCode={courseCode}></MapComp>
		</Layout>
	);
}

export default MapPage;
