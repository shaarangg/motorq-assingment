const router = require('express').Router();
const Class = require('../models/class.model');
const Build = require('../models/bulding.model');

router.route('/:courseCode').get(async (req, res) => {
    const courseCode = req.params.courseCode;
    let classMap = [];
    try {
        const classes = await Class.find({ courseCode });
        for(let i=0;i<classes.length;i++) {
            const builds = await Build.findOne({name: classes[i].building});
            const location = { lat: builds.location.lat, long: builds.location.lat };
            const temp = { cid: classes[i].cid, courseCode: classes[i].courseCode, faculty: classes[i].faculty, building: classes[i].building, location };
            classMap.push(temp);
        }
        console.log("sending");
        return res.json(classMap);
    } catch (err) {
        return res.status(400).json('Error: ' + err);
    }
});
module.exports = router;