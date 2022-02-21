import clientPromise from "../../lib/mongodb";

async function handler(req, res) {
	try {
		const client = await clientPromise;
		const db = client.db();
		const classes = await db.collection("classes").find({}).toArray();
		res.status(200).json({ success: true, message: "Class found successfully", data: classes });
	} catch (e) {
		res.status(500).json({ success: true, message: "Could not fetch classes", data: e });
	}
}
export default handler;
