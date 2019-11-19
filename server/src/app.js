const express = require('express');
const db = require('./database');
require('dotenv').config();

//Import routes
const userRoutes = require('./components/user/routes');

//App
const app = express();

//Connect Database
db.connect(function(err){
  if(err) {
    console.log('Error connecting to Db: ', err);
  } else {
    console.log('Connection established');
  }
});

//Routes middleware
app.use("/api", userRoutes);

//Close DB connection
db.end();

//Running app
const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Running on port ${port}!`);
});
