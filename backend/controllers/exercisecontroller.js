const Exercise = require('../models/exerciseModel');

const getExercises = async (req, res) => {
  try {
    const exercises = await Exercise.find();
    res.json(exercises);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const createExercise = async (req, res) => {
  const { name, duration, date } = req.body;

  const newExercise = new Exercise({
    name,
    duration,
    date
  });

  try {
    const savedExercise = await newExercise.save();
    res.status(201).json(savedExercise);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = { getExercises, createExercise };
