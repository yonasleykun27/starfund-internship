const express = require('express');
const multer = require('multer');
const path = require('path');
const jwt = require('jsonwebtoken');
const startupController = require('../controllers/startupController');
const { startupValidator, startupUpdateValidator } = require('../middleware/validation');
const { protect, restrictTo } = require('../middleware/authMiddleware');
const db = require('../config/db');

// Multer Storage Configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, '../../uploads'));
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, `cover-${uniqueSuffix}${ext}`);
  }
});

// Multer File Filter (Only accept JPG/PNG)
const fileFilter = (req, file, cb) => {
  const allowedMimeTypes = ['image/jpeg', 'image/jpg', 'image/png'];
  if (allowedMimeTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error('Invalid file type. Only JPG, JPEG, and PNG are allowed.'), false);
  }
};

const upload = multer({
  storage,
  fileFilter,
  limits: {
    fileSize: 2 * 1024 * 1024 // 2MB
  }
});

// Optional authentication middleware for GET /api/startups
const optionalProtect = (req, res, next) => {
  let token;
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    token = req.headers.authorization.split(' ')[1];
  }

  if (!token) {
    return next();
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'super-secret-key-starfund-week6-internship');
    const users = db.getCollection('users');
    const currentUser = users.find(user => user.id === decoded.id);
    if (currentUser) {
      req.user = currentUser;
    }
  } catch (err) {
    // Ignore and proceed as guest
  }
  next();
};

const router = express.Router();

router.get('/', optionalProtect, startupController.getAllStartups);
router.get('/:id', startupController.getStartupById);

// Secured endpoints
router.post('/', protect, restrictTo('founder'), startupValidator, startupController.createStartup);
router.put('/:id', protect, startupUpdateValidator, startupController.updateStartup);
router.delete('/:id', protect, startupController.deleteStartup);
router.post('/:id/cover-image', protect, upload.single('coverImage'), startupController.uploadCoverImage);

module.exports = router;
