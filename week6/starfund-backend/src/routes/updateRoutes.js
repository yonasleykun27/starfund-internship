const express = require('express');
const updateController = require('../controllers/updateController');
const { updateValidator } = require('../middleware/validation');
const { protect, restrictTo } = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/', protect, restrictTo('founder'), updateValidator, updateController.postUpdate);
router.get('/:startupId', updateController.getUpdatesByStartupId);

module.exports = router;
