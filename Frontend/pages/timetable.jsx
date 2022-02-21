import Layout from "../components/Layout";
import axios from "axios";
import { useEffect } from "react";
import { GlobalContext } from "../context";
import Class from "../components/Class";
import styles from "../styles/Timetable.module.scss";
function timetable() {
	const { classes, setClasses } = GlobalContext();

	const fetchClasses = async (id, signal) => {
		try {
			const res = await axios.get(`http://localhost:3002/class/${id}`, { signal: signal });
			setClasses(res.data.data);
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

	if (classes.length === 0) {
		return (
			<Layout>
				<div>No classes</div>
			</Layout>
		);
	} else {
		return (
			<Layout>
				<div className={styles.classesContainer}>
					{classes.map((cls) => {
						cls = { ...cls, btn: "delete" };
						return <Class key={cls._id} cls={cls} />;
					})}
				</div>
			</Layout>
		);
	}
}
export default timetable;
