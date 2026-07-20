const db = require('../config/db');
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');

exports.launchCampaign = catchAsync(async (req, res, next) => {
  const { startupId, goalAmount, startDate, endDate } = req.body;

  const startups = db.getCollection('startups');
  const startup = startups.find(s => s.id === startupId);

  if (!startup) {
    return next(new AppError('No startup found with that ID', 404));
  }

  // Check ownership
  if (startup.founderId !== req.user.id && req.user.role !== 'admin') {
    return next(new AppError('You do not have permission to launch a campaign for this startup', 403));
  }

  // Check if startup is approved
  if (startup.status !== 'approved') {
    return next(new AppError('Startups must be approved by admin before launching campaigns', 400));
  }

  const campaigns = db.getCollection('campaigns');

  // Check if active campaign already exists
  const activeCampaign = campaigns.find(c => c.startupId === startupId && c.status === 'active');
  if (activeCampaign) {
    return next(new AppError('An active campaign already exists for this startup', 400));
  }

  const newCampaign = {
    id: `cmp_${Math.random().toString(36).substring(2, 9)}`,
    startupId,
    goalAmount: parseFloat(goalAmount),
    raisedAmount: 0,
    startDate,
    endDate,
    status: 'active',
    createdAt: new Date().toISOString()
  };

  campaigns.push(newCampaign);
  db.saveCollection('campaigns', campaigns);

  res.status(201).json({
    success: true,
    data: {
      campaign: newCampaign
    }
  });
});

exports.getCampaignById = catchAsync(async (req, res, next) => {
  const campaigns = db.getCollection('campaigns');
  const investments = db.getCollection('investments');
  const startups = db.getCollection('startups');

  const campaign = campaigns.find(c => c.id === req.params.id);
  if (!campaign) {
    return next(new AppError('No campaign found with that ID', 404));
  }

  const startup = startups.find(s => s.id === campaign.startupId);
  const campaignInvestments = investments.filter(i => i.campaignId === campaign.id);
  const uniqueInvestors = [...new Set(campaignInvestments.map(i => i.investorId))];
  
  // Compute stats
  const totalRaised = campaign.raisedAmount;
  const goal = campaign.goalAmount;
  const fundingPercent = goal > 0 ? (totalRaised / goal) * 100 : 0;
  
  const end = new Date(campaign.endDate);
  const now = new Date();
  const diffTime = end - now;
  const daysRemaining = Math.max(0, Math.ceil(diffTime / (1000 * 60 * 60 * 24)));

  res.status(200).json({
    success: true,
    data: {
      campaign: {
        ...campaign,
        startupName: startup ? startup.title : 'Unknown Startup',
        fundingPercent: parseFloat(fundingPercent.toFixed(2)),
        backerCount: uniqueInvestors.length,
        daysRemaining
      }
    }
  });
});
