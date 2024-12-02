const express = require('express');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const userRoute = require('./routes/userRoute');
const tweetRoute = require('./routes/tweetRoute');
const mongoose = require("mongoose");
const cors = require('cors'); 

dotenv.config({
  path:".env"
})

const app = express();

// Connect to MongoDB
const connect = () => {
  mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
      console.log("Connected to MongoDB database");
    })
    .catch((err) => {
      console.error("Error connecting to MongoDB", err);
      process.exit(1);
    });
};

// Middleware
app.use(express.json());
app.use(cookieParser());

// Enable CORS if needed
const corsOptions = {
  origin: "process.env.FRONTEND_URL", // Update this to your frontend URL
  credentials: true,
};
app.use(cors(corsOptions));

// API routes
app.use("/api/v1/user", userRoute);
app.use("/api/v1/tweet", tweetRoute);

// Start server
app.listen(process.env.PORT, () => {
  connect();
  console.log(`Server listening at port ${process.env.PORT}`);
});
