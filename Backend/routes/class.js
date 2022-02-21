const router = require("express").Router();
const Class = require("../models/class.model");
const Student = require("../models/student.model");
// Adds a class to the student
router.route("/:id").post(async (req, res) => {
	try {
		const sid = req.params.id;
		const cid = req.body.id;
		const time = req.body.time;
		let studentClasses = await Student.aggregate([
			{ $match: { _id: sid } },
			{
				$lookup: {
					from: "classes",
					localField: "classes",
					foreignField: "_id",
					as: "classArray",
				},
			},
			{
				$project: { classArray: 1 },
			},
		]);
		studentClasses = JSON.parse(JSON.stringify(studentClasses));
		studentClasses = studentClasses[0].classArray;
		const classTime = studentClasses.map((cls) => {
			return cls.time;
		});
		if (classTime.includes(time)) {
			res.json({ success: false, message: "Class Clashing" });
		} else {
			await Student.updateOne({ _id: sid }, { $push: { classes: cid } });
			await Class.updateOne({ _id: cid }, { $inc: { studentsRegistered: 1 } });
			res.json({ success: true, message: "Class successfully added" });
		}
	} catch (e) {
		res.json({ success: false, message: e });
	}
});

// Deletes a class from the student id
router.route("/:sid/:cid").delete(async (req, res) => {
	try {
		const { sid, cid } = req.params;
		if (!studentId || !classId) {
			res.json({ success: false, message: "Required fields cannot be empty" });
		}
		const student = await Student.updateOne({ _id: sid }, { $pull: { classes: cid } });
		res.json({ success: true, message: "Class deleted successfully", data: student });
	} catch (e) {
		res.json({ success: false, message: e });
	}
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
