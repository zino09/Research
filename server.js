const dotenv = require("dotenv");
dotenv.config(); // This loads the environment variables

const express = require("express");
const connectDB = require("./config/db");

const app = express();
connectDB();

app.use(express.json());
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/programs", require("./routes/programRoutes"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
 