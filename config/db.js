const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
  try {
    let dbUrl;
    if (process.env.MONGO_ATLAS_URI) {
      dbUrl = process.env.MONGO_ATLAS_URI;
    } else {
      dbUrl = `mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/${process.env.MONGO_DB}`;
    }
    
    await mongoose.connect(dbUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
  } catch (err) {
    console.error('MongoDB connection error:', err);
    if (err.code === 'EAUTH') {
      console.error('Authentication failed. Check your username and password.');
    } else if (err.code === 'ENOTFOUND') {
      console.error('Database not found. Check your database name.');
    } else {
      console.error('Unknown error:', err);
    }
    process.exit(1); // Exit the process if connection fails
  }
};

module.exports = connectDB;