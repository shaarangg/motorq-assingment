const router = require("express").Router();
const Class = require("../models/class.model");
const Build = require("../models/bulding.model");

router.route("/:courseCode").get((req, res) => {
	const courseCode = req.params.courseCode;
	Class.aggregate([
		{ $match: { courseCode: courseCode } },
		{
			$lookup: {
				from: "buildings",
				localField: "building",
				foreignField: "name",
				as: "fromBuilding",
			},
		},
		{
			$replaceRoot: {
				newRoot: { $mergeObjects: [{ $arrayElemAt: ["$fromBuilding", 0] }, "$$ROOT"] },
			},
		},
		{ $project: { fromBuilding: 0, name: 0 } },
	])
		.then((result) => {
			console.log(result);
			res.json("Success");
		})
		.catch((err) => res.status(400).json("Error: " + err));
});
module.exports = router;
