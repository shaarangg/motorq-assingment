import Layout from "../../components/Layout";
import { useState, useEffect } from "react";
import CourseDiv from "../../components/CourseDiv";
import styles from "../../styles/Map.module.scss";
function map() {
	const [courseCode, setCourseCode] = useState([]);
	useEffect(() => {
		const classes = JSON.parse(localStorage.getItem("classes"));
		const courses = classes.map((cls) => {
			return cls.courseCode;
		});
		setCourseCode(courses);
	}, []);
	return (
		<Layout>
			<p className={styles.title}>Select the course</p>
			<div className={styles.container}>
				{courseCode.map((crs) => {
					return <CourseDiv key={crs} crs={crs} />;
				})}
			</div>
		</Layout>
	);
}

export default map;
