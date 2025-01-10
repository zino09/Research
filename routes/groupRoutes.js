const express = require('express');
const router = express.Router();
const { authenticate, authorize } = require('../middleware/auth');
const Group = require('../models/Group');
const GroupMember = require('../models/GroupMember');
const User = require('../models/User');

// Create a new group
router.post('/create', authenticate, async (req, res) => {
  const { name, description } = req.body;
  try {
    const group = await Group.create({ name, description });
    await GroupMember.create({ userId: req.user.id, groupId: group.id, role: 'admin' });
    res.status(201).json(group);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Add a member to a group
router.post('/:groupId/add-member', authenticate, authorize(['admin']), async (req, res) => {
  const { groupId } = req.params;
  const { userId, role } = req.body;
  try {
    const group = await Group.findByPk(groupId);
    if (!group) return res.status(404).json({ message: 'Group not found' });

    const user = await User.findByPk(userId);
    if (!user) return res.status(404).json({ message: 'User not found' });

    await GroupMember.create({ userId, groupId, role });
    res.status(201).json({ message: 'Member added successfully' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;