const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const courseSchema = new Schema(
    {
        courseid: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },
        name: {
            type: String,
            required: true,
        }
    },
);
const model = mongoose.model('course', courseSchema);
module.exports = model;