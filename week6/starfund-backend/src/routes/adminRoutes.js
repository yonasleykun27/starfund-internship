const express = require('express');
const adminController = require('../controllers/adminController');
const { verifyValidator } = require('../middleware/validation');
const { protect, restrictTo } = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/users', protect, restrictTo('admin'), adminController.listUsers);
router.patch('/startups/:id/verify', protect, restrictTo('admin'), verifyValidator, adminController.verifyStartup);
router.get('/analytics', protect, restrictTo('admin'), adminController.getAnalytics);

module.exports = router;
