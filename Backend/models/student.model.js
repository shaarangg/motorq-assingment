const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const studentSchema = new Schema({
	_id: String,
	name: {
		type: String,
		required: true,
	},
	classes: [mongoose.ObjectId],
});
const model = mongoose.model("Student", studentSchema);
module.exports = model;
