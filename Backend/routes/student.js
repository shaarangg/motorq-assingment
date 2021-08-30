const router = require('express').Router();
const Student = require('../models/student.model');

// TESTING
router.route('/').get((req, res) => {
    Student.find({ })
        .then((response) => {
            console.log(response);
            res.json('Success');
        })
        .catch(err => res.status(400).json('Error: ' + err))
});

// LOGIN
router.route('/:sid').get((req, res) => {
    Student.find({ sid: req.params.sid })
        .then((response) => {
            console.log(response);
            res.json('Success');
        })
        .catch(err => res.status(400).json('Error: ' + err))
});

// SIGNUP
router.route('/').post((req, res) => {
    const { sid, name, password } = req.body;
    Student.create({ sid, name, password })
        .then((response) => {
            console.log(response);
            res.json(response);
        })
        .catch(err => res.status(400).json('Error: ' + err))
});

module.exports = router;