const express = require('express');
const router = express.Router();
const auth = require('../middlewares/authMiddleware');
const { getUser, updateUser } = require('../controllers/userController');

// @route   GET api/user
// @desc    Get user info
// @access  Private
router.get('/', auth, getUser);

// @route   PUT api/user
// @desc    Update user info
// @access  Private
router.put('/', auth, updateUser);

module.exports = router;
