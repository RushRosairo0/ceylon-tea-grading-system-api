const express = require('express');
const cors = require('cors');
const connection = require('./database/connection');
const errorHandler = require('./middleware/errorHandler');
require('dotenv').config({
  path: process.env.ENV_PATH || '.env',
});

const ENV = process.env.NODE_ENV || 'development';
const PORT = process.env.PORT || 3000;

const routes = require('./routes/index');

// initialize the express app
const app = express();
app.use(express.json({ limit: '10kb' }));

// initialize cors
const allowedOrigins = [process.env.MOBILE_URL || 'http://localhost:5173'];
app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS!'));
      }
    },
    credentials: true,
    allowedHeaders: ['Content-Type', 'Authorization'],
    exposedHeaders: ['Access-Token'],
  }),
);

// setup routing paths
app.use('/api', routes);

// global custom error handler
app.use(errorHandler);

// start the server
app.listen(PORT, () => {
  console.log(`${ENV} | ${PORT}`);
});
