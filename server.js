const express = require('express');
const path =require('path');
const mongoose = require('mongoose');
const config = require('config');
const app = express();


//Bodyparser Middleware
app.use(express.json());

//DB Config
const db = config.get('mongoURI');

//Connect to Mongo
mongoose.connect(db,{
  useNewUrlParser: true,
  useCreateIndex : true
})
  .then(()=> console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

//Use Routes  
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));