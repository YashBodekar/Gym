const express = require('express');
const router = express.Router();
const { getExercises, addExercise } = require('../controllers/exercisecontroller');

router.get('/', getExercises); // Assuming you have a getExercises function
router.post('/', addExercise); // Ensure addExercise function is defined

module.exports = router;
