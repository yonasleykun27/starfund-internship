const express = require('express');
const campaignController = require('../controllers/campaignController');
const { campaignValidator } = require('../middleware/validation');
const { protect, restrictTo } = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/', protect, restrictTo('founder'), campaignValidator, campaignController.launchCampaign);
router.get('/:id', campaignController.getCampaignById);

module.exports = router;
