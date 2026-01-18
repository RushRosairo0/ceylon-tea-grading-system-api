const teaImageRepo = require('../repos/teamImage.repo');

const imageService = {
  uploadImage: async (data) => {
    const { destination, filename, requestUser } = data;

    // save uploaded image details
    const imageDetails = {
      url: `${destination}${filename}`,
      userId: requestUser.id,
    };
    await teaImageRepo.create(imageDetails);

    return {
      success: true,
      status: 201,
      data: {
        message: 'Image uploaded successfully!',
      },
    };
  },
};

module.exports = imageService;
