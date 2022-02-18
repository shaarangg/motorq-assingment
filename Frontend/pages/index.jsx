import styles from "../styles/Index.module.scss";
import Link from "next/link";
function index() {
	return (
		<main>
			<div className={styles.title}>Welcome to the Student Portal</div>
			<div className={styles.btn}>
				<button>
					<Link href="/login">Login</Link>
				</button>
				<button>
					<Link href="/register">Register</Link>
				</button>
			</div>
		</main>
	);
}

export default index;
