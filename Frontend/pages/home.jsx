import Layout from "../components/Layout";
import styles from "../styles/Home.module.scss";
import Link from "next/link";
import axios from "axios";
import { useEffect } from "react";
function home() {
	const fetchClasses = async (id, signal) => {
		try {
			const res = await axios.get(`http://localhost:3002/class/${id}`, { signal: signal });
			localStorage.setItem("classes", JSON.stringify(res.data.data));
		} catch (e) {
			console.log(e);
		}
	};

	useEffect(() => {
		const AbortCont = new AbortController();
		const student = JSON.parse(localStorage.getItem("student"));
		const { id } = student;
		fetchClasses(id, AbortCont.signal);
		return () => {
			AbortCont.abort();
		};
	}, []);

	return (
		<Layout>
			<div className={styles.container}>
				<Link href="/courses">Courses</Link>
				<Link href="/map">Map</Link>
				<Link href="/timetable">Timetable</Link>
			</div>
		</Layout>
	);
}

export default home;
