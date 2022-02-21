import axios from "axios";
function courses({ data }) {
	return <div>courses</div>;
}
export async function getStaticProps() {
	const res = await axios.get("http://localhost:3000/api/classes");
	// console.log(res.data);
	const cls = JSON.stringify(res.data);
	return {
		props: { cls },
	};
}
export default courses;
