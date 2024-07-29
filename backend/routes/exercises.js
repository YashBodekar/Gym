const express = require('express');
const router = express.Router();
const { getExercises } = require('../controllers/exercisecontroller');
const { getExerciseByUsername } = require('../controllers/exercisecontroller');

// GET exercises by username
router.get('/exercises/:username', getExerciseByUsername);


// GET exercises with optional username query parameter
router.get('/exercises', getExercises);

module.exports = router;
