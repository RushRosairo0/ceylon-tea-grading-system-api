const models = require('../models');

const CustomError = require('../util/customeError');

const ENTITY = 'user';
const User = models.User;

const userRepo = {
  create: async (user) => {
    try {
      return await User.create(user);
    } catch (error) {
      throw new CustomError(`Failed to insert new ${ENTITY}: ${error.message}`, 500);
    }
  },

  getByEmail: async (email) => {
    try {
      return await User.findOne({
        where: {
          email: email,
        },
      });
    } catch (error) {
      throw new CustomError(`Failed to fetch ${ENTITY} by email: ${error.message}`, 500);
    }
  },
};

module.exports = userRepo;
