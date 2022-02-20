import { MongoClient } from "mongodb";
import nextConnect from "next-connect";

if (!process.env.MONGODB_URI) {
	throw new Error("Please add your Mongo URI to .env.local");
}

const client = new MongoClient(`${process.env.MONGO_URI}`, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

async function database(req, res, next) {
	if (!client.isConnected()) await client.connect();
	req.dbClient = client;
	req.db = client.db("Frontend");
	return next();
}

const middleware = nextConnect();

middleware.use(database);
export default middleware;
