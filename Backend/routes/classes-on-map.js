const router = require("express").Router();
const Class = require("../models/class.model");
router.route("/:courseCode").get(async (req, res) => {
	try {
		const courseCode = req.params.courseCode;
		const classes = await Class.aggregate([
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
		]);
		res.json({ success: true, message: "Classes fetched successfully", data: classes });
	} catch (e) {
		res.json({ success: false, message: e });
	}
});
module.exports = router;
