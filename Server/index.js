const express = require('express');
// const cors = require('cors');
const mongoose = require('mongoose');

const authRoute = require('./routes/Auth');
const usersRoute = require('./routes/User');
const tweetsRoute = require('./routes/Tweets');

require('dotenv').config();

const app = express();
const port = process.env.PORT ;

const uri = async function connectDB(){
  try{
      await mongoose.connect(process.env.DATABASE_URL)
  }catch(err){
      console.log(err)
  }
};
uri();
// mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true });
// const connection = mongoose.connection;
// connection.once('open', () => {
//   console.log('MongoDB database connection established successfully');
// });

// Middleware
// app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoute);
app.use('/api/users', usersRoute);
app.use('/api/tweets', tweetsRoute);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});