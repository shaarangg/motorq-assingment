const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const studentSchema = new Schema(
    {
        sid: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },
        name: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        classes: {
            type: [String],
            default: []
        },
    },
    {
        timestamps: true,
    }
);
const model = mongoose.model('student', studentSchema);
module.exports = model;