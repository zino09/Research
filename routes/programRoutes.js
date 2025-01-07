const express = require("express");
const protect = require("../middleware/authMiddleware");
const router = express.Router();

// @route   GET /api/programs
// @desc    Get all programs (protected)
// @access  Private
router.get("/", protect, async (req, res) => {
  try {
    res.json({ message: `Welcome ${req.user.name}, you can access programs!` });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});

module.exports = router;
