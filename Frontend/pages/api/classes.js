import clientPromise from "../../lib/mongodb";

async function handler(req, res) {
	const client = await clientPromise;
	const db = await client.db();
	const classes = await db.collection("classes").find({}).toArray();
	res.status(200).json({ success: true });
}
export default handler;
