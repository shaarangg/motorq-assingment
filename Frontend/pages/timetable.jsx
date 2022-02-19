import Layout from "../components/Layout";
import axios from "axios";
import { useEffect } from "react";
import { GlobalContext } from "../context";
function timetable({ data }) {
	const { classes, setClasses } = GlobalContext();

	useEffect(() => {
		const AbortCont = new AbortController();
		const student = localStorage.getItem("student");
		const { id } = student;
		axios
			.get(`http://localhost:3002/class/${id}`, { signal: AbortCont.signal })
			.then((res) => {
				setClasses(res.data.data);
			})
			.catch((err) => {
				console.log(err);
			});

		return () => {
			AbortCont.abort();
		};
	}, []);

	return (
		<Layout>
            <div>
                {if(classes.length!==0)}
            </div>
		</Layout>
	);
}
export default timetable;
