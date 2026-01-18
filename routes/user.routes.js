const express = require('express');
const userController = require('../controllers/user.controller');

const validator = require('../middleware/requestValidator');
const userRegisterSchema = require('../schemas/user/userRegister.schema');

// initialize router
const userRouter = express.Router();

userRouter.post('/', validator(userRegisterSchema), userController.register);

module.exports = userRouter;
