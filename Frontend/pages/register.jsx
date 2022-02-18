import axios from "axios";
import { useRef } from "react";
import Router from "next/router";
function register() {
	const idRef = useRef(null);
	const nameRef = useRef(null);

	const handleSubmit = async (e) => {
		try {
			e.preventDefault();
			const res = await axios.post("http://localhost:3002/student", {
				id: idRef.current.value,
				name: nameRef.current.value,
			});
			const { success, message } = res.data;
			if (success) {
				alert(message);
				Router.push("/home");
			} else {
				alert(message);
			}
		} catch (e) {
			console.log(e);
		}
	};

	return (
		<form action="">
			<input type="text" placeholder="Reg No." ref={idRef} />
			<input type="text" placeholder="Name" ref={nameRef} />
			<input type="password" placeholder="Password" />
			<button onClick={handleSubmit}>Sign Up</button>
		</form>
	);
}
export default register;
