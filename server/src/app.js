const express = require('express');
const db = require('./database');
require('dotenv').config();

//Import routes
const authRoutes = require('./components/auth/routes');
const userRoutes = require('./components/user/routes');

//App
const app = express();

//Routes middleware
app.use("/api", authRoutes);
app.use("/api", userRoutes);

//Test databese
db.connect(function(err){
  if(err) {
    console.log('Error connecting to Db: ', err);
  } else {
    console.log('Connection established');
  }
});

db.query('SHOW DATABASES', function(err, result) {
  if (err) throw err;
  console.log(result);
});

db.end();

//Running app
const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Running on port ${port}!`);
});
