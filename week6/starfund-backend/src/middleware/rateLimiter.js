const AppError = require('../utils/appError');

// Store requests: { ipAddress: [timestamp1, timestamp2, ...] }
const ipRequestStore = {};

const rateLimiter = (req, res, next) => {
  // Bypass rate limiting in test mode
  if (process.env.NODE_ENV === 'test') {
    return next();
  }

  const ip = req.ip || req.connection.remoteAddress;
  const now = Date.now();
  const windowMs = 60 * 1000; // 60 seconds
  const maxRequests = 10;

  if (!ipRequestStore[ip]) {
    ipRequestStore[ip] = [];
  }

  // Filter timestamps to only keep requests within the last 60 seconds
  ipRequestStore[ip] = ipRequestStore[ip].filter(timestamp => now - timestamp < windowMs);

  if (ipRequestStore[ip].length >= maxRequests) {
    return next(new AppError('Too many requests from this IP. Please try again after a minute.', 429));
  }

  // Record current request timestamp
  ipRequestStore[ip].push(now);
  
  next();
};

module.exports = rateLimiter;
