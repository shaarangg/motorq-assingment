const router = require("express").Router();
const Student = require("../models/student.model");
// LOGIN
router.route("/:id").get((req, res) => {
	Student.findById({ _id: req.params.id })
		.then((data) => {
			res.json(data);
			console.log("Success");
		})
		.catch((err) => res.status(400).json("Error: " + err));
});

// SIGNUP
router.route("/").post((req, res) => {
	const { id, name } = req.body;
	Student.create({ _id: id, name: name })
		.then((response) => {
			console.log(response);
			res.json(response);
		})
		.catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
