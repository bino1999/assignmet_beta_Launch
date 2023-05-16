const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");

// Import routes

const employeeRoutes = require('./routes/empRoutes');

// Constants
dotenv.config();
const URL = process.env.MONGODB_URL;
const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

mongoose.connect(URL, {
  useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connected ");
});

// Use routes
app.use("/employee", employeeRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
