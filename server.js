const dotenv = require('dotenv');
dotenv.config();

const express = require("express");
const { sequelize } = require('./models');
const { authenticate, authorize } = require('./middleware/auth');

const app = express();

app.use(express.json());
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/programs", require("./routes/programRoutes"));
app.use("/api/upload", require("./routes/uploadRoutes"));
app.use("/api/groups", require("./routes/groupRoutes")); // Add group routes

const PORT = process.env.PORT || 5000;

// Sync Sequelize models and start the server
sequelize.sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });