const express = require('express');
const authenticate = require('../middleware/auth/authenticate');
const imageController = require('../controllers/image.controller');
const imageUpload = require('../middleware/imageUpload');

// initialize router
const imageRouter = express.Router();

// secure below endpoints
imageRouter.use(authenticate);

imageRouter.post('/', imageUpload.upload, imageController.handle);

module.exports = imageRouter;
