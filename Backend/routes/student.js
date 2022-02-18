const router = require("express").Router();
const Student = require("../models/student.model");
// LOGIN
router.route("/:id").get(async (req, res) => {
	try {
		const { id } = req.params;
		if (!id) {
			return res.json({ success: false, message: "Required fields cannot be empty" });
		}
		const student = await Student.findById({ _id: id });
		if (!student) {
			return res.json({ success: false, message: "Student cannot be found" });
		}
		return res.json({
			success: true,
			message: "Student found successfully",
			data: { regno: student._id, name: student.name, classes: student.classes },
		});
	} catch (e) {
		return res.json({ success: "false", message: e });
	}
});

// SIGNUP
router.route("/").post(async (req, res) => {
	try {
		const { id, name } = req.body;
		if (!id || !name) {
			return res.json({ success: false, message: "Required fields cannot be empty" });
		}
		const student = await Student.create({ _id: id, name: name });
		res.json({
			success: true,
			message: "Data posted successfully",
			data: {
				id: student._id,
				name: student.name,
			},
		});
	} catch (e) {
		if (e.code === 11000) {
			return res.json({ success: false, message: "Reg No. already exist" });
		}
		res.json({ success: false, message: e.name });
	}
});
module.exports = router;
