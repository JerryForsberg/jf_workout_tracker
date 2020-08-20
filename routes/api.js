const router = require("express").Router();
const express = require("express");
const db = require("../models");
const mongoose = require("mongoose");



router.post("/api/workouts", (req, res) => {
    
    db.Exercise.create(req.body)
        .then((data) => { console.log(data) })

        .catch(err => {
            res.status(400).json(err);
        });
});


router.get("/api/workouts/range", (req, res) => {
    db.Workout.find({})
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

router.put("api/workouts/:id", (req, res) => {
    console.log("hello");

})

module.exports = router;