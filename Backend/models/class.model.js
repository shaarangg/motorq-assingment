const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const classSchema = new Schema({
	courseCode: {
		type: String,
		required: true,
	},
	faculty: {
		type: String,
		required: true,
	},
	building: {
		type: String,
		required: true,
	},
	time: {
		type: String,
		required: true,
	},
});
const model = mongoose.model("class", classSchema);
module.exports = model;
