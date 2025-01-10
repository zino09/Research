// filepath: /Backend/models/ResearchProject.js
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const ResearchProject = sequelize.define('ResearchProject', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = ResearchProject;