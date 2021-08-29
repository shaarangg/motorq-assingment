const router = require('express').Router();
const Class = require('../models/class.model');
const Student = require('../models/student.model');
// TESTING
router.route('/').get((req, res) => {
    Class.find({ })
        .then((response) => {
            console.log(response);
            res.json(response);
        })
        .catch(err => res.status(400).json('Error: ' + err))
});

// Add Classes
router.route('/').post((req, res) => {
    const { cid, courseCode, faculty, building, time } = req.body;
    console.log(cid);
    Class.create({ cid, courseCode, faculty, building, time })
        .then((response) => {
            console.log(response);
            res.json('Success');
        })
        .catch(err => res.status(400).json('Error: ' + err))
});

// Returns Array of classes with the courseCode
router.route('/:courseCode').get((req, res) => {
    Class.find({ courseCode: req.params.courseCode })
        .then((response) => {
            console.log(response);
            res.json(response);
        })
        .catch(err => res.status(400).json('Error: ' + err))
})

module.exports = router;