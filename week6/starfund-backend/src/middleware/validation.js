const { check, validationResult } = require('express-validator');
const AppError = require('../utils/appError');

// Middleware to execute validation and return errors
const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const errorArray = errors.array().map(err => ({
      field: err.path || err.param,
      message: err.msg
    }));
    return res.status(422).json({
      success: false,
      message: 'Validation failed',
      errors: errorArray
    });
  }
  next();
};

const registerValidator = [
  check('name')
    .trim()
    .notEmpty()
    .withMessage('Name is required')
    .isLength({ min: 2 })
    .withMessage('Name must be at least 2 characters'),
  check('email')
    .trim()
    .notEmpty()
    .withMessage('Email is required')
    .isEmail()
    .withMessage('Please provide a valid email address'),
  check('password')
    .notEmpty()
    .withMessage('Password is required')
    .isLength({ min: 8 })
    .withMessage('Password must be at least 8 characters'),
  check('role')
    .notEmpty()
    .withMessage('Role is required')
    .isIn(['investor', 'founder'])
    .withMessage('Role must be either investor or founder'),
  validate
];

const loginValidator = [
  check('email')
    .trim()
    .notEmpty()
    .withMessage('Email is required')
    .isEmail()
    .withMessage('Please provide a valid email'),
  check('password')
    .notEmpty()
    .withMessage('Password is required'),
  validate
];

const startupValidator = [
  check('title')
    .trim()
    .notEmpty()
    .withMessage('Startup title is required')
    .isLength({ min: 10 })
    .withMessage('Startup title must be at least 10 characters'),
  check('description')
    .trim()
    .notEmpty()
    .withMessage('Description is required')
    .isLength({ min: 20 })
    .withMessage('Description must be at least 20 characters'),
  check('sector')
    .trim()
    .notEmpty()
    .withMessage('Sector is required')
    .isIn(['CleanTech', 'FinTech', 'HealthTech', 'EdTech', 'SaaS', 'AI'])
    .withMessage('Sector must be one of: CleanTech, FinTech, HealthTech, EdTech, SaaS, AI'),
  check('teamSize')
    .notEmpty()
    .withMessage('Team size is required')
    .isInt({ min: 1 })
    .withMessage('Team size must be a positive integer'),
  validate
];

const startupUpdateValidator = [
  check('title')
    .optional()
    .trim()
    .isLength({ min: 10 })
    .withMessage('Startup title must be at least 10 characters'),
  check('description')
    .optional()
    .trim()
    .isLength({ min: 20 })
    .withMessage('Description must be at least 20 characters'),
  check('sector')
    .optional()
    .trim()
    .isIn(['CleanTech', 'FinTech', 'HealthTech', 'EdTech', 'SaaS', 'AI'])
    .withMessage('Sector must be one of: CleanTech, FinTech, HealthTech, EdTech, SaaS, AI'),
  check('teamSize')
    .optional()
    .isInt({ min: 1 })
    .withMessage('Team size must be a positive integer'),
  validate
];

const campaignValidator = [
  check('startupId')
    .notEmpty()
    .withMessage('Startup ID is required'),
  check('goalAmount')
    .notEmpty()
    .withMessage('Goal amount is required')
    .isFloat({ min: 1 })
    .withMessage('Goal amount must be a positive number'),
  check('startDate')
    .notEmpty()
    .withMessage('Start date is required')
    .isISO8601()
    .withMessage('Start date must be a valid ISO8601 date'),
  check('endDate')
    .notEmpty()
    .withMessage('End date is required')
    .isISO8601()
    .withMessage('End date must be a valid ISO8601 date')
    .custom((value, { req }) => {
      if (new Date(value) <= new Date(req.body.startDate)) {
        throw new Error('End date must be after the start date');
      }
      return true;
    }),
  validate
];

const investmentValidator = [
  check('campaignId')
    .notEmpty()
    .withMessage('Campaign ID is required'),
  check('amount')
    .notEmpty()
    .withMessage('Investment amount is required')
    .isFloat({ min: 1 })
    .withMessage('Investment amount must be a positive number'),
  validate
];

const updateValidator = [
  check('startupId')
    .notEmpty()
    .withMessage('Startup ID is required'),
  check('title')
    .trim()
    .notEmpty()
    .withMessage('Update title is required')
    .isLength({ min: 5 })
    .withMessage('Update title must be at least 5 characters'),
  check('content')
    .trim()
    .notEmpty()
    .withMessage('Content is required')
    .isLength({ min: 10 })
    .withMessage('Content must be at least 10 characters'),
  validate
];

const verifyValidator = [
  check('status')
    .notEmpty()
    .withMessage('Verification status is required')
    .isIn(['approved', 'rejected'])
    .withMessage('Status must be approved or rejected'),
  validate
];

module.exports = {
  registerValidator,
  loginValidator,
  startupValidator,
  startupUpdateValidator,
  campaignValidator,
  investmentValidator,
  updateValidator,
  verifyValidator
};
