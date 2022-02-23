import styles from "../styles/Index.module.scss";
import Link from "next/link";
function index() {
	return (
		<div className={styles.container}>
			<h2 className={styles.title}>Welcome to the Student Portal</h2>
			<div className={styles.btn}>
				<button>
					<Link href="/login">Login</Link>
				</button>
				<button>
					<Link href="/register">Register</Link>
				</button>
			</div>
		</div>
	);
}

export default index;
