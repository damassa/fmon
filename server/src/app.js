const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');

require('dotenv').config();

//Import routes
const userRoutes = require('./components/user/routes');
const newsRoutes = require('./components/news/routes');

//App
const app = express();

//Middlware
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

//Routes middleware
app.use("/api", userRoutes);
app.use("/api", newsRoutes);

//Running app
const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Running on port ${port}!`);
});
