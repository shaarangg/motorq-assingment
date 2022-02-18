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
router.route("/").post((req, res) => {
	const { id, name } = req.body;
	Student.create({ _id: id, name: name })
		.then((response) => {
			res.json({ status: "Success" });
			console.log(response);
		})
		.catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
