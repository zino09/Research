// filepath: /Backend/models/Dataset.js
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Dataset = sequelize.define('Dataset', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  projectId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = Dataset;