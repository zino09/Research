const express = require('express');
const router = express.Router();
const upload = require('../config/multer');
const { authenticate, authorize } = require('../middleware/auth');

router.post('/upload', authenticate, authorize(['admin', 'user']), upload.single('file'), (req, res) => {
  res.status(200).json({ message: 'File uploaded successfully', file: req.file });
});

module.exports = router;