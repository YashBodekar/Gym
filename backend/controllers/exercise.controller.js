const Exercise = require('../models/Exercise.model');

exports.getExercises = async (req, res) => {
    try {
        const exercises = await Exercise.find();
        res.json(exercises);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.createExercise = async (req, res) => {
    const { username, description, duration, date } = req.body;
    try {
        const newExercise = new Exercise({ username, description, duration, date });
        await newExercise.save();
        console.log('Exercise saved');
        res.status(201).json(newExercise);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
