import { useRef } from "react";
import axios from "axios";
function Login() {
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
export default Login;
