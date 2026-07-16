const jwt = require('jsonwebtoken');
const db = require('../config/db');
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');

const protect = catchAsync(async (req, res, next) => {
  let token;
  
  // 1) Getting token and check if it exists
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    token = req.headers.authorization.split(' ')[1];
  }

  if (!token) {
    return next(new AppError('You are not logged in! Please log in to get access.', 401));
  }

  // 2) Verification of token
  let decoded;
  try {
    decoded = jwt.verify(token, process.env.JWT_SECRET || 'super-secret-key-starfund-week6-internship');
  } catch (err) {
    return next(new AppError('Invalid or expired authentication token. Please log in again.', 401));
  }

  // 3) Check if user still exists
  const users = db.getCollection('users');
  const currentUser = users.find(user => user.id === decoded.id);
  
  if (!currentUser) {
    return next(new AppError('The user belonging to this token no longer exists.', 401));
  }

  // 4) Grant access to protected route
  req.user = currentUser;
  next();
});

const restrictTo = (...roles) => {
  return (req, res, next) => {
    // roles is an array, e.g. ['admin', 'founder']
    if (!req.user || !roles.includes(req.user.role)) {
      return next(new AppError('You do not have permission to perform this action.', 403));
    }
    next();
  };
};

module.exports = {
  protect,
  restrictTo
};
