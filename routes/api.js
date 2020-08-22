const router = require("express").Router();
const db = require("../models");
const path = require("path");


router.get("/api/workouts", (req, res) => {
    db.Workout.find({})
        .populate('exercises')
        .sort({ date: -1 })
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        });
});


router.post("/api/workouts", (req, res) => {

    db.Workout.create(req.body)
        .then((data) => { res.json(data) })

        .catch(err => {
            res.status(400).json(err);
        });
});


router.get("/api/workouts/range", (req, res) => {
    db.Workout.find({})
        .populate("exercises")
        .sort({ date: -1 })
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

router.put("/api/workouts/:id", (req, res) => {
    db.Exercise.create(req.body)
        .then((created_exercise) => {
            db.Workout.findOneAndUpdate({ '_id': req.params.id }, { $push: { exercises: created_exercise._id } }, { new: true })
                .then(dbWorkout => {
                    res.json(dbWorkout);
                })
                .catch(err => {
                    res.json(err);
                })
        });




    //take the id then find one and update
    //push into exercise array by id
    //send the res.json back 

    // db.Workout.findById(req.params.id).then((res) => {
    //     console.log("found with id", res);
    // });

})

router.get("/exercise", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
});

router.get("/stats", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
});

module.exports = router;