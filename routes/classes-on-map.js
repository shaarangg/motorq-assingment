const router = require('express').Router();
const Class = require('../models/class.model');
const Build = require('../models/bulding.model');

router.route('/:courseCode').get((req, res) => {
    const courseCode = req.params.courseCode;
    let response = [];
    Class.find({ courseCode }).then((classes) => {
        // console.log(classes);
        classes.map((c) => {
            Build.find({ name: c.building }).then((b) => {
                const location = { lat: b[0].location.lat, long: b[0].location.lat };
                const temp = { cid: c.cid, courseCode: c.courseCode, faculty: c.faculty, building: c.building, location };
                console.log(temp);
                response.push(temp);
            }
            ).catch(err => { res.status(400).json('Error: ' + err) })
        });
        console.log(response);
    }).catch(err => { res.status(400).json('Error: ' + err) })
});
module.exports = router;