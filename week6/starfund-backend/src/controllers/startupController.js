const db = require('../config/db');
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');

exports.getAllStartups = catchAsync(async (req, res, next) => {
  let startups = db.getCollection('startups');
  const campaigns = db.getCollection('campaigns');

  // By default, filter to only show approved startups for non-admin users
  // (or let's allow query param 'status' if requested by admin, but default to 'approved')
  const user = req.user;
  if (!user || user.role !== 'admin') {
    startups = startups.filter(s => s.status === 'approved');
  } else if (req.query.status) {
    startups = startups.filter(s => s.status === req.query.status);
  }

  // 1) Search filter: q
  if (req.query.q) {
    const q = req.query.q.toLowerCase();
    startups = startups.filter(s => 
      s.title.toLowerCase().includes(q) || 
      s.description.toLowerCase().includes(q)
    );
  }

  // 2) Sector filter
  if (req.query.sector) {
    const sector = req.query.sector.toLowerCase();
    startups = startups.filter(s => s.sector.toLowerCase() === sector);
  }

  // Map campaigns to startups to get goal and raised amounts for sorting/display
  const startupsWithCampaigns = startups.map(startup => {
    const campaign = campaigns.find(c => c.startupId === startup.id);
    const goalAmount = campaign ? campaign.goalAmount : 0;
    const raisedAmount = campaign ? campaign.raisedAmount : 0;
    const fundingPercent = goalAmount > 0 ? (raisedAmount / goalAmount) * 100 : 0;
    
    return {
      ...startup,
      campaign: campaign || null,
      fundingPercent,
      goalAmount,
      raisedAmount
    };
  });

  // 3) Sorting
  if (req.query.sort) {
    const sort = req.query.sort;
    if (sort === 'funded') {
      // Sort by funding percentage descending
      startupsWithCampaigns.sort((a, b) => b.fundingPercent - a.fundingPercent);
    } else if (sort === 'goal') {
      // Sort by goal amount descending
      startupsWithCampaigns.sort((a, b) => b.goalAmount - a.goalAmount);
    } else if (sort === 'date') {
      // Sort by created date descending
      startupsWithCampaigns.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    } else if (sort === 'title') {
      // Sort by title alphabetically
      startupsWithCampaigns.sort((a, b) => a.title.localeCompare(b.title));
    }
  }

  // 4) Pagination
  const page = parseInt(req.query.page, 10) || 1;
  const limit = parseInt(req.query.limit, 10) || 6;
  const skip = (page - 1) * limit;

  const paginatedStartups = startupsWithCampaigns.slice(skip, skip + limit);

  res.status(200).json({
    success: true,
    results: paginatedStartups.length,
    totalCount: startupsWithCampaigns.length,
    page,
    limit,
    data: {
      startups: paginatedStartups
    }
  });
});

exports.getStartupById = catchAsync(async (req, res, next) => {
  const startups = db.getCollection('startups');
  const campaigns = db.getCollection('campaigns');
  const updates = db.getCollection('updates');

  const startup = startups.find(s => s.id === req.params.id);
  if (!startup) {
    return next(new AppError('No startup found with that ID', 404));
  }

  const campaign = campaigns.find(c => c.startupId === startup.id) || null;
  const startupUpdates = updates.filter(u => u.startupId === startup.id);

  res.status(200).json({
    success: true,
    data: {
      startup: {
        ...startup,
        campaign,
        updates: startupUpdates
      }
    }
  });
});

exports.createStartup = catchAsync(async (req, res, next) => {
  const startups = db.getCollection('startups');
  
  const newStartup = {
    id: `stp_${Math.random().toString(36).substring(2, 9)}`,
    title: req.body.title,
    description: req.body.description,
    sector: req.body.sector,
    coverImage: req.body.coverImage || '/uploads/default-cover.png',
    teamSize: req.body.teamSize,
    founderId: req.user.id,
    status: 'pending', // require admin approval
    createdAt: new Date().toISOString()
  };

  startups.push(newStartup);
  db.saveCollection('startups', startups);

  res.status(201).json({
    success: true,
    data: {
      startup: newStartup
    }
  });
});

exports.updateStartup = catchAsync(async (req, res, next) => {
  const startups = db.getCollection('startups');
  const startupIndex = startups.findIndex(s => s.id === req.params.id);

  if (startupIndex === -1) {
    return next(new AppError('No startup found with that ID', 404));
  }

  const startup = startups[startupIndex];

  // Restrict to founder owner or admin
  if (startup.founderId !== req.user.id && req.user.role !== 'admin') {
    return next(new AppError('You do not have permission to update this startup', 403));
  }

  // Update fields
  const updatedStartup = {
    ...startup,
    title: req.body.title || startup.title,
    description: req.body.description || startup.description,
    sector: req.body.sector || startup.sector,
    teamSize: req.body.teamSize || startup.teamSize,
    coverImage: req.body.coverImage || startup.coverImage
  };

  startups[startupIndex] = updatedStartup;
  db.saveCollection('startups', startups);

  res.status(200).json({
    success: true,
    data: {
      startup: updatedStartup
    }
  });
});

exports.deleteStartup = catchAsync(async (req, res, next) => {
  const startups = db.getCollection('startups');
  const startup = startups.find(s => s.id === req.params.id);

  if (!startup) {
    return next(new AppError('No startup found with that ID', 404));
  }

  // Restrict to founder owner or admin
  if (startup.founderId !== req.user.id && req.user.role !== 'admin') {
    return next(new AppError('You do not have permission to delete this startup', 403));
  }

  const updatedStartups = startups.filter(s => s.id !== req.params.id);
  db.saveCollection('startups', updatedStartups);

  // Also clean up campaigns associated with it
  const campaigns = db.getCollection('campaigns');
  const updatedCampaigns = campaigns.filter(c => c.startupId !== req.params.id);
  db.saveCollection('campaigns', updatedCampaigns);

  res.status(200).json({
    success: true,
    message: 'Startup deleted successfully'
  });
});

exports.uploadCoverImage = catchAsync(async (req, res, next) => {
  if (!req.file) {
    return next(new AppError('Please upload a cover image file', 400));
  }

  const startups = db.getCollection('startups');
  const startupIndex = startups.findIndex(s => s.id === req.params.id);

  if (startupIndex === -1) {
    return next(new AppError('No startup found with that ID', 404));
  }

  const startup = startups[startupIndex];

  // Restrict to founder owner or admin
  if (startup.founderId !== req.user.id && req.user.role !== 'admin') {
    return next(new AppError('You do not have permission to upload cover image for this startup', 403));
  }

  const relativePath = `/uploads/${req.file.filename}`;
  startup.coverImage = relativePath;
  startups[startupIndex] = startup;
  db.saveCollection('startups', startups);

  res.status(200).json({
    success: true,
    data: {
      coverImage: relativePath
    }
  });
});
