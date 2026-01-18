const express = require('express');
const routes = express.Router();

const userRouter = require('./user.routes');
const imageRouter = require('./image.routes');

routes.use('/user', userRouter);
routes.use('/image', imageRouter);

module.exports = routes;
