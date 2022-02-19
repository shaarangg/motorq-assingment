import Layout from "../components/Layout";
import styles from "../styles/Home.module.scss";
import Link from "next/link";
function home() {
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
