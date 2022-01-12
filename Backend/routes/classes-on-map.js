const router = require("express").Router();
const Class = require("../models/class.model");
const Build = require("../models/bulding.model");

router.route("/:courseCode").get((req, res) => {
	const courseCode = req.params.courseCode;
	Class.find({ courseCode })
		.then((result) => {
			console.log(result);
			res.json("Success");
		})
		.catch((err) => res.status(400).json("Error: " + err));
});
module.exports = router;
