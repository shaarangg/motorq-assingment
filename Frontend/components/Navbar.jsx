import Link from "next/link";
import styles from "../styles/Navbar.module.scss";
function Navbar() {
	return (
		<nav className={styles.nav}>
			<ul>
				<li>
					<Link href="/home">
						<a>Home</a>
					</Link>
				</li>
				<li>
					<Link href="/courses">
						<a>Courses</a>
					</Link>
				</li>
				<li>
					<Link href="/map">
						<a>Map</a>
					</Link>
				</li>
				<li>
					<Link href="/timetable">
						<a>Timetable</a>
					</Link>
				</li>
				<li>
					<Link href="/">
						<a>Logout</a>
					</Link>
				</li>
			</ul>
		</nav>
	);
}

export default Navbar;
