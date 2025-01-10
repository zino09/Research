const express = require('express');
const router = express.Router();
const { authenticate, authorize } = require('../middleware/auth');

// Example route handlers (replace with your actual handlers)
const getPrograms = (req, res) => {
  res.send('Get programs');
};

const createProgram = (req, res) => {
  res.send('Create program');
};

// Define routes
router.get('/programs', authenticate, authorize(['admin', 'user']), getPrograms);
router.post('/programs', authenticate, authorize(['admin']), createProgram);

module.exports = router;