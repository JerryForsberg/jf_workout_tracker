const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
    type: String,
    name: String,
    weight: Number,
    sets: Number,
    reps: Number,
    duration: Number,
    distance: Number,
});

const Exercise = mongoose.model("Exercise", ExerciseSchema);

module.exports = Exercise;

//mongoose virtual to add workout times -- hardcode to test is virtual is wworking in the front end