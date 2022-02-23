import { useRef } from "react";
import Router from "next/router";
import axios from "axios";
import styles from "../styles/Register.module.scss";
function login() {
	const regnoContainer = useRef(null);
	const handleSubmit = async (e) => {
		try {
			e.preventDefault();
			const res = await axios.get(`http://localhost:3002/student/${regnoContainer.current.value}`);
			const { success, message, data } = res.data;
			if (success) {
				alert(message);
				localStorage.setItem("student", JSON.stringify(data));
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
			<form>
				<h2>Log in</h2>
				<input type="text" placeholder="Reg No." ref={regnoContainer} />
				<input type="password" placeholder="Password" />
				<button onClick={handleSubmit}> Login</button>
			</form>
		</div>
	);
}
export default login;
