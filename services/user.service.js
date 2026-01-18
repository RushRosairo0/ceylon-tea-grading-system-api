const bcrypt = require('bcrypt');

const userRepo = require('../repos/user.repo');
const CustomError = require('../util/customeError');

const userService = {
  userRegistration: async (data) => {
    const { name, email, password, experience } = data;

    // check if user is already registered
    const user = await userRepo.getByEmail(email);
    if (user) {
      throw new CustomError('User with this email already exists!', 400);
    }

    // hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // create new user
    const userDetails = {
      name: name,
      email: email,
      password: hashedPassword,
      experience: experience,
    };
    const newUser = await userRepo.create(userDetails);

    // user response
    const userRes = {
      id: newUser.id,
      name: newUser.name,
      email: newUser.email,
      experience: newUser.experience,
    };

    return {
      success: true,
      status: 201,
      data: {
        user: userRes,
      },
    };
  },
};

module.exports = userService;
