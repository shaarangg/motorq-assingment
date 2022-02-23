import axios from "axios";
import { useRef } from "react";
import Router from "next/router";
import styles from "../styles/Register.module.scss";
function register() {
	const idRef = useRef(null);
	const nameRef = useRef(null);
	const handleSubmit = async (e) => {
		try {
			e.preventDefault();
			const student = {
				id: idRef.current.value,
				name: nameRef.current.value,
				classes: [],
			};
			const res = await axios.post("http://localhost:3002/student", student);
			const { success, message } = res.data;
			if (success) {
				alert(message);
				localStorage.setItem("student", student);
				Router.push("/home");
			} else {
				alert(message);
			}
		} catch (e) {
			console.log(e);
		}
	};

	return (
		<div className={styles.container}>
			<form action="">
				<h2>Register</h2>
				<input type="text" placeholder="Reg No." ref={idRef} />
				<input type="text" placeholder="Name" ref={nameRef} />
				<input type="password" placeholder="Password" />
				<button onClick={handleSubmit}>Sign Up</button>
			</form>
		</div>
	);
}
export default register;
