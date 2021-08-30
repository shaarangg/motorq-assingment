const router = require('express').Router();
const Class = require('../models/class.model');
const Build = require('../models/bulding.model');

router.route('/:courseCode').get(async (req, res) => {
    const courseCode = req.params.courseCode;
    let classMap = [];
    try {
        const classes = await Class.find({ courseCode });
        await classes.map(async (c) => {
            const b = await Build.findOne({ name: c.building });
            const location = { lat: b.location.lat, long: b.location.lat };
            const temp = { cid: c.cid, courseCode: c.courseCode, faculty: c.faculty, building: c.building, location };
            // console.log(temp);
            classMap = [...classMap, temp];
            console.log(classMap);
        })
        console.log(classMap);
        return res.json(classMap);
    } catch (err) {
        return res.status(400).json('Error: ' + err);
    }
});
module.exports = router;