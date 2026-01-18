const jwt = require('jsonwebtoken');

const authenticate = async (req, res, next) => {
  try {
    const token = req.headers.authorization;

    // decode access token
    const decodedToken = jwt.verify(JSON.parse(token), process.env.ACCESS_TOKEN_SECRET);
    req.user = decodedToken.tokenUser;

    next();
  } catch (error) {
    res.status(401).json({
      success: false,
      response: {
        status: 401,
        data: 'Authentication failed!',
      },
    });
  }
};

module.exports = authenticate;
