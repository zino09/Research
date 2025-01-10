// filepath: /Backend/models/Metadata.js
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Metadata = sequelize.define('Metadata', {
  key: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  value: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  datasetId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = Metadata;