const moongoose = require('mongoose');

const Schema = moongoose.Schema;

const location = new Schema({
    lat: { type: String, required: true },
    lon: { type: String, required: true }
})

const bulidingSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true
        },
        location: location
    }
);
const model = moongoose.model("building", bulidingSchema);
module.exports = model;