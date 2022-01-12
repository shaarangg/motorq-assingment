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
router.route("/:id").get((req, res) => {
	const id = req.params.id;
	Student.findById({ _id: id })
		.then((result) => {
			const { classes } = result;
			Class.find({ _id: { $in: classes } })
				.then((classResult) => {
					res.json({ status: "Success", data: classResult });
					console.log("Success");
				})
				.catch((err) => res.status(400).json("Error: " + err));
		})
		.catch((err) => res.status(400).json("Error: " + err));
});
module.exports = router;
