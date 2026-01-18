const jwt = require('jsonwebtoken');
const CustomError = require('../util/customeError');

const jwtService = {
  generateAccessToken: async (tokenUser) => {
    try {
      return jwt.sign({ tokenUser }, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: '3h',
      });
    } catch (error) {
      throw new CustomError(`Failed to generate the access token: ${error.message}`, 500);
    }
  },
};

module.exports = jwtService;
