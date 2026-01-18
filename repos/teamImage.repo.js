const models = require('../models');

const CustomError = require('../util/customeError');

const ENTITY = 'tea_images';
const TeaImage = models.TeaImage;

const teaImageRepo = {
  create: async (image) => {
    try {
      return await TeaImage.create(image);
    } catch (error) {
      throw new CustomError(`Failed to insert new ${ENTITY}: ${error.message}`, 500);
    }
  },
};

module.exports = teaImageRepo;
