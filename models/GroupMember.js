const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const User = require('./User');
const Group = require('./Group');

const GroupMember = sequelize.define('GroupMember', {
  userId: {
    type: DataTypes.INTEGER,
    references: {
      model: User,
      key: 'id',
    },
  },
  groupId: {
    type: DataTypes.INTEGER,
    references: {
      model: Group,
      key: 'id',
    },
  },
  role: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'member', // roles can be 'member' or 'admin'
  },
});

Group.belongsToMany(User, { through: GroupMember });
User.belongsToMany(Group, { through: GroupMember });

module.exports = GroupMember;