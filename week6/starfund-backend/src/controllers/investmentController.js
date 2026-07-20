const db = require('../config/db');
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');

exports.fundCampaign = catchAsync(async (req, res, next) => {
  const { campaignId, amount } = req.body;
  const investmentAmount = parseFloat(amount);

  const campaigns = db.getCollection('campaigns');
  const campaignIndex = campaigns.findIndex(c => c.id === campaignId);

  if (campaignIndex === -1) {
    return next(new AppError('No campaign found with that ID', 404));
  }

  const campaign = campaigns[campaignIndex];

  if (campaign.status !== 'active') {
    return next(new AppError('This crowdfunding campaign is no longer active', 400));
  }

  // Create new investment
  const investments = db.getCollection('investments');
  const newInvestment = {
    id: `inv_${Math.random().toString(36).substring(2, 9)}`,
    campaignId,
    investorId: req.user.id,
    amount: investmentAmount,
    createdAt: new Date().toISOString()
  };

  investments.push(newInvestment);
  db.saveCollection('investments', investments);

  // Update campaign raisedAmount
  campaign.raisedAmount += investmentAmount;
  
  // If target achieved, maybe mark as completed (but let's allow overfunding unless specified)
  campaigns[campaignIndex] = campaign;
  db.saveCollection('campaigns', campaigns);

  res.status(201).json({
    success: true,
    data: {
      investment: newInvestment,
      campaignRaisedAmount: campaign.raisedAmount
    }
  });
});

exports.getInvestorPortfolio = catchAsync(async (req, res, next) => {
  const investments = db.getCollection('investments');
  const campaigns = db.getCollection('campaigns');
  const startups = db.getCollection('startups');

  // Filter investor investments
  const myInvestments = investments.filter(i => i.investorId === req.user.id);
  
  // Sum cumulative invested amount
  const totalInvested = myInvestments.reduce((sum, inv) => sum + inv.amount, 0);

  // Map startup details
  const portfolioItems = myInvestments.map(inv => {
    const campaign = campaigns.find(c => c.id === inv.campaignId);
    const startup = campaign ? startups.find(s => s.id === campaign.startupId) : null;
    
    return {
      id: inv.id,
      amount: inv.amount,
      createdAt: inv.createdAt,
      campaignId: inv.campaignId,
      startupId: startup ? startup.id : null,
      startupName: startup ? startup.title : 'Unknown Startup',
      sector: startup ? startup.sector : 'Unknown',
      campaignStatus: campaign ? campaign.status : 'unknown'
    };
  });

  res.status(200).json({
    success: true,
    data: {
      totalInvested,
      investmentCount: portfolioItems.length,
      portfolio: portfolioItems
    }
  });
});
