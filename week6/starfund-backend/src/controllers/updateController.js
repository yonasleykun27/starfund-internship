const db = require('../config/db');
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');

exports.postUpdate = catchAsync(async (req, res, next) => {
  const { startupId, title, content } = req.body;

  const startups = db.getCollection('startups');
  const startup = startups.find(s => s.id === startupId);

  if (!startup) {
    return next(new AppError('No startup found with that ID', 404));
  }

  // Restrict to founder owner or admin
  if (startup.founderId !== req.user.id && req.user.role !== 'admin') {
    return next(new AppError('You do not have permission to post updates for this startup', 403));
  }

  const updates = db.getCollection('updates');
  const newUpdate = {
    id: `upd_${Math.random().toString(36).substring(2, 9)}`,
    startupId,
    title,
    content,
    createdAt: new Date().toISOString()
  };

  updates.push(newUpdate);
  db.saveCollection('updates', updates);

  res.status(201).json({
    success: true,
    data: {
      update: newUpdate
    }
  });
});

exports.getUpdatesByStartupId = catchAsync(async (req, res, next) => {
  const updates = db.getCollection('updates');
  const startupId = req.params.startupId;

  // Verify startup exists
  const startups = db.getCollection('startups');
  const startupExists = startups.some(s => s.id === startupId);
  if (!startupExists) {
    return next(new AppError('No startup found with that ID', 404));
  }

  const startupUpdates = updates.filter(u => u.startupId === startupId);

  // Sort updates by createdAt descending
  startupUpdates.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  res.status(200).json({
    success: true,
    results: startupUpdates.length,
    data: {
      updates: startupUpdates
    }
  });
});
