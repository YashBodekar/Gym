const express = require('express');
const { getUsers, createUser, getUserById } = require('../controllers/usercontroller');
const { registerUser } = require('../controllers/auth.controller')
const router = express.Router();

router.get('/', getUsers);
// router.post('/', createUser);
router.get('/:id', getUserById);
router.post('/register', registerUser);

module.exports = router;
