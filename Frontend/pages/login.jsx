import { useRef } from "react";
import { GlobalContext } from "../context";
import axios from "axios";
function login() {
	const { user } = GlobalContext();
	const regnoContainer = useRef(null);
	const handleSubmit = (e) => {
		e.preventDefault();
		axios
			.get(`http://localhost:3002/student/${regnoContainer.current.value}`)
			.then((res) => {
				console.log(res.data.data);
			})
			.catch((err) => console.log(err));
	};
	return (
		<form>
			<input type="text" placeholder="Reg No." ref={regnoContainer} />
			<input type="password" placeholder="Password" />
			<button onClick={handleSubmit}> Login</button>
		</form>
	);
}
export default login;
