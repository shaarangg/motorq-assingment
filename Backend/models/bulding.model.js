const moongoose = require("mongoose");

const Schema = moongoose.Schema;

const bulidingSchema = new Schema({
	name: {
		type: String,
		required: true,
		unique: true,
	},
	location: { lat: { type: String, required: true }, lon: { type: String, required: true } },
});
const model = moongoose.model("building", bulidingSchema);
module.exports = model;
