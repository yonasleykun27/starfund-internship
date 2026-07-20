const express = require('express');
const investmentController = require('../controllers/investmentController');
const { investmentValidator } = require('../middleware/validation');
const { protect, restrictTo } = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/', protect, restrictTo('investor'), investmentValidator, investmentController.fundCampaign);
router.get('/my', protect, restrictTo('investor'), investmentController.getInvestorPortfolio);

module.exports = router;
