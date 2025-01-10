// filepath: /E:/Research Project/Backend/models/index.js
const sequelize = require('../config/db');
const User = require('./User');
const ResearchProject = require('./ResearchProject');
const Dataset = require('./Dataset');
const Metadata = require('./Metadata');

// Associations
User.hasMany(ResearchProject, { foreignKey: 'userId' });
ResearchProject.belongsTo(User, { foreignKey: 'userId' });

ResearchProject.hasMany(Dataset, { foreignKey: 'projectId' });
Dataset.belongsTo(ResearchProject, { foreignKey: 'projectId' });

Dataset.hasMany(Metadata, { foreignKey: 'datasetId' });
Metadata.belongsTo(Dataset, { foreignKey: 'datasetId' });

module.exports = {
  sequelize,
  User,
  ResearchProject,
  Dataset,
  Metadata,
};