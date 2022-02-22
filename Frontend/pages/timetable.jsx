import Layout from "../components/Layout";
import { useEffect, useState } from "react";
import Class from "../components/Class";
import styles from "../styles/Timetable.module.scss";
function timetable() {
	const [classes, setClasses] = useState([]);

	useEffect(() => {
		const cls = JSON.parse(localStorage.getItem("classes"));
		setClasses(cls);
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
						return <Class key={cls._id} cls={cls} func={setClasses} />;
					})}
				</div>
			</Layout>
		);
	}
}
export default timetable;
