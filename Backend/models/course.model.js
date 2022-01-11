const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const courseSchema = new Schema({
	_id: String,
	name: {
		type: String,
		required: true,
	},
});
const model = mongoose.model("Course", courseSchema);
module.exports = model;
