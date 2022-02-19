const router = require("express").Router();
const Class = require("../models/class.model");
const Student = require("../models/student.model");
var mongoose = require("mongoose");
// Adds a class to the student
router.route("/:id").post((req, res) => {
	const sid = req.params.id;
	const cid = req.body.id;
	Student.updateOne({ _id: sid }, { $push: { classes: cid } })
		.then((result) => {
			console.log(result);
			Class.updateOne({ _id: cid }, { $inc: { studentsRegistered: 1 } })
				.then((classResult) => {
					console.log(classResult);
					res.json({ status: "Success" });
				})
				.catch((err) => res.status(400).json("Error: " + err));
		})
		.catch((err) => res.status(400).json("Error: " + err));
});

// Deletes a class from the student id
router.route("/:sid/:cid").delete((req, res) => {
	const { sid, cid } = req.params;
	Student.updateOne({ _id: sid }, { $pull: { classes: cid } })
		.then((response) => {
			console.log(response);
			res.json({ status: "Success" });
		})
		.catch((err) => res.status(400).json("Error: " + err));
});

// Gets all the classes of sid
router.route("/:id").get(async (req, res) => {
	try {
		const studentId = req.params.id;
		if (!studentId) return res.json({ success: false, message: "Required fields cannot be empty" });
		const student = await Student.findById({ _id: studentId });
		const { classes } = student;
		const classArray = await Class.find({ _id: { $in: classes } });
		res.json({ success: true, message: "Class found successfully", data: classArray });
	} catch (e) {
		res.json({ success: false, message: e });
	}
});
module.exports = router;
