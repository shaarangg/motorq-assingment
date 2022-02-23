import Link from "next/link";
function CourseDiv({ crs }) {
	return <Link href={`/map/${crs}`}>{crs}</Link>;
}

export default CourseDiv;
