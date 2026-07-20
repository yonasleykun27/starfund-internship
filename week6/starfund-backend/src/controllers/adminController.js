const db = require('../config/db');
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');

exports.listUsers = catchAsync(async (req, res, next) => {
  const users = db.getCollection('users');
  
  // Exclude passwords
  const sanitizedUsers = users.map(user => {
    const u = { ...user };
    delete u.password;
    return u;
  });

  res.status(200).json({
    success: true,
    results: sanitizedUsers.length,
    data: {
      users: sanitizedUsers
    }
  });
});

exports.verifyStartup = catchAsync(async (req, res, next) => {
  const { status } = req.body; // approved or rejected
  const startupId = req.params.id;

  const startups = db.getCollection('startups');
  const startupIndex = startups.findIndex(s => s.id === startupId);

  if (startupIndex === -1) {
    return next(new AppError('No startup found with that ID', 404));
  }

  const startup = startups[startupIndex];
  startup.status = status;
  startups[startupIndex] = startup;
  db.saveCollection('startups', startups);

  res.status(200).json({
    success: true,
    message: `Startup status successfully updated to ${status}`,
    data: {
      startup
    }
  });
});

exports.getAnalytics = catchAsync(async (req, res, next) => {
  const users = db.getCollection('users');
  const startups = db.getCollection('startups');
  const campaigns = db.getCollection('campaigns');
  const investments = db.getCollection('investments');

  // Compute analytics metrics
  const totalUsers = users.length;
  const totalStartups = startups.length;
  const approvedStartups = startups.filter(s => s.status === 'approved').length;
  const pendingStartups = startups.filter(s => s.status === 'pending').length;
  
  const activeCampaigns = campaigns.filter(c => c.status === 'active').length;
  const completedCampaigns = campaigns.filter(c => c.status === 'completed').length;
  
  const totalInvested = investments.reduce((sum, inv) => sum + inv.amount, 0);
  const totalInvestmentsCount = investments.length;

  res.status(200).json({
    success: true,
    data: {
      metrics: {
        totalUsers,
        totalStartups,
        approvedStartups,
        pendingStartups,
        activeCampaigns,
        completedCampaigns,
        totalInvested,
        totalInvestmentsCount
      }
    }
  });
});
