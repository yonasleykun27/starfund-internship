const express = require('express');
const authController = require('../controllers/authController');
const { registerValidator, loginValidator } = require('../middleware/validation');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/register', registerValidator, authController.register);
router.post('/login', loginValidator, authController.login);
router.get('/me', protect, authController.getMe);

module.exports = router;
