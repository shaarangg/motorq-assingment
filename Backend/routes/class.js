const router = require('express').Router();
const Class = require('../models/class.model');
const Student = require('../models/student.model');


// Adds a class to the student
router.route('/:sid/:cid').post((req, res) => {
    const { sid, cid } = req.params;
    Student.updateOne({ sid }, {
        $push: { classes: cid }
    }).then((response) => {
        console.log(response);
        res.json("Success")
    })
        .catch(err => res.status(400).json('Error: ' + err))
})

// Deletes a class from the student id
router.route('/:sid/:cid').delete((req, res) => {
    const { sid, cid } = req.params;
    Student.updateOne({ sid }, {
        $pull: { classes: cid }
    }).then((response) => {
        console.log(response);
        res.json("Success")
    })
        .catch(err => res.status(400).json('Error: ' + err))
})


// Gets all the classes of sid
router.route('/:sid').get((req, res) => {
    const sid = req.params.sid;
    Student.find({ sid })
        .then((response) => {
            console.log(response);
            res.json('Success');
        })
        .catch(err => res.status(400).json('Error: ' + err))
});
module.exports = router;