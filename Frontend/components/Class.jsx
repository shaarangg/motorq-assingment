import styles from "../styles/Class.module.scss";
import axios from "axios";
function Class({ cls }) {
	const addClass = async (_id, time) => {
		const student = JSON.parse(localStorage.getItem("student"));
		const res = await axios.post(`http://localhost:3002/class/${student.id}`, {
			id: _id,
			time: time,
		});
		alert(res.data.message);
	};

	const deleteClass = async (_id) => {
		const student = JSON.parse(localStorage.getItem("student"));
		const res = await axios.delete(`http://localhost:3002/class/${student.id}/${_id}`);
		console.log(res);
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
