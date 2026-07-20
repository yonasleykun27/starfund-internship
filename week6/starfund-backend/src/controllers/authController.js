const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('../config/db');
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');

const signToken = (id) => {
  return jwt.sign(
    { id }, 
    process.env.JWT_SECRET || 'super-secret-key-starfund-week6-internship', 
    { expiresIn: process.env.JWT_EXPIRES_IN || '90d' }
  );
};

const sendTokenResponse = (user, statusCode, res) => {
  const token = signToken(user.id);
  
  // Remove password from output
  const userResponse = { ...user };
  delete userResponse.password;

  res.status(statusCode).json({
    success: true,
    token,
    data: {
      user: userResponse
    }
  });
};

exports.register = catchAsync(async (req, res, next) => {
  const { name, email, password, role } = req.body;

  const users = db.getCollection('users');
  
  // Check if email already exists
  const existingUser = users.find(u => u.email === email.toLowerCase());
  if (existingUser) {
    return next(new AppError('Email already registered', 400));
  }

  // Hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // Create new user
  const newUser = {
    id: `usr_${Math.random().toString(36).substring(2, 9)}`,
    name,
    email: email.toLowerCase(),
    password: hashedPassword,
    role,
    createdAt: new Date().toISOString()
  };

  users.push(newUser);
  db.saveCollection('users', users);

  sendTokenResponse(newUser, 201, res);
});

exports.login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;

  const users = db.getCollection('users');
  const user = users.find(u => u.email === email.toLowerCase());

  if (!user || !(await bcrypt.compare(password, user.password))) {
    return next(new AppError('Incorrect email or password', 401));
  }

  sendTokenResponse(user, 200, res);
});

exports.getMe = catchAsync(async (req, res, next) => {
  const user = { ...req.user };
  delete user.password;
  
  res.status(200).json({
    success: true,
    data: {
      user
    }
  });
});
