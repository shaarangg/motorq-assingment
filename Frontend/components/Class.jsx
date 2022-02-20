import styles from "../styles/Class.module.scss";
function Class({ cls }) {
	const { building, courseCode, faculty, time } = cls;
	console.log(cls);
	return (
		<div className={styles.container}>
			<h2>{courseCode}</h2>
			<p>{time}</p>
			<div>
				<p>{faculty}</p>
				<p>{building}</p>
			</div>
		</div>
	);
}

export default Class;
