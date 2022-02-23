import styles from "../styles/Class.module.scss";
import axios from "axios";
function Class(props) {
	const cls = props.cls;
	const updateClass = props.func;
	const addClass = async (_id, time) => {
		try {
			const student = JSON.parse(localStorage.getItem("student"));
			const res = await axios.post(`http://localhost:3002/class/${student.id}`, {
				id: _id,
				time: time,
			});
			alert(res.data.message);
			const getRes = await axios.get(`http://localhost:3002/class/${student.id}`);
			localStorage.setItem("classes", JSON.stringify(getRes.data.data));
		} catch (e) {
			console.error(e);
		}
	};

	const deleteClass = async (_id) => {
		try {
			const student = JSON.parse(localStorage.getItem("student"));
			const res = await axios.delete(`http://localhost:3002/class/${student.id}/${_id}`);
			const classes = JSON.parse(localStorage.getItem("classes"));
			let tempClasses = classes;
			tempClasses = tempClasses.filter((cls) => cls._id !== _id);
			localStorage.setItem("classes", JSON.stringify(tempClasses));
			updateClass(tempClasses);
		} catch (e) {
			console.error(e);
		}
	};

	const { _id, building, courseCode, faculty, time, btn } = cls;
	return (
		<div className={styles.container}>
			<h2>{courseCode}</h2>
			<p>{time}</p>
			<div>
				<p>{faculty}</p>
				<p>{building}</p>
			</div>
			{btn === "add" ? (
				<button
					onClick={() => {
						addClass(_id, time);
					}}
				>
					Add Class
				</button>
			) : (
				<button
					onClick={() => {
						deleteClass(_id);
					}}
				>
					Delete Class
				</button>
			)}
		</div>
	);
}

export default Class;
