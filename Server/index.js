const express = require('express');
const dotenv = require('dotenv');
const databaseConnection = require('./config/database');
const cookieParser = require('cookie-parser');
const userRoute = require('./routes/userRoute');
const tweetRoute = require('./routes/tweetRoute');
const cors = require('cors');

dotenv.config();
databaseConnection();
const app = express();


// middlewares
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());
app.use(cookieParser());
const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
};
app.use(cors(corsOptions));

// api
app.use("/api/v1/user", userRoute);
app.use("/api/v1/tweet", tweetRoute);

app.listen(process.env.PORT, () => {
  console.log(`Server listen at port ${process.env.PORT}`);
});
