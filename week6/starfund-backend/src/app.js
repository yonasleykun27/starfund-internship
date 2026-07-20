const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');
require('dotenv').config();

const db = require('./config/db');
const requestLogger = require('./middleware/logger');
const rateLimiter = require('./middleware/rateLimiter');
const errorMiddleware = require('./middleware/errorMiddleware');
const AppError = require('./utils/appError');

// Initialize database
db.init();

// Import Routes
const authRoutes = require('./routes/authRoutes');
const startupRoutes = require('./routes/startupRoutes');
const campaignRoutes = require('./routes/campaignRoutes');
const investmentRoutes = require('./routes/investmentRoutes');
const updateRoutes = require('./routes/updateRoutes');
const adminRoutes = require('./routes/adminRoutes');

const app = express();

// Global Middlewares
app.use(cors());
app.use(express.json());
app.use(morgan('dev')); // console logging for incoming requests
app.use(requestLogger);  // Custom request log middleware tracking timing & logging to file
app.use(rateLimiter);    // Exercise 26 rate-limiting middleware

// Static Files Serving
// Serving files inside 'uploads' directory under static route '/uploads'
app.use('/uploads', express.static(path.join(__dirname, '../uploads')));

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'StarFund backend service is healthy.',
    timestamp: new Date().toISOString()
  });
});

// Route mappings
app.use('/api/auth', authRoutes);
app.use('/api/startups', startupRoutes);
app.use('/api/campaigns', campaignRoutes);
app.use('/api/investments', investmentRoutes);
app.use('/api/updates', updateRoutes);
app.use('/api/admin', adminRoutes);

// Fallback for unhandled routes
app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

// Centralized error handling middleware
app.use(errorMiddleware);

module.exports = app;
