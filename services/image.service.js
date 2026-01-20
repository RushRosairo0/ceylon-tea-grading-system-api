const teaImageRepo = require('../repos/teamImage.repo');

const imageService = {
  uploadImage: async (data) => {
    const { destination, filename, reqUser } = data;

    // save uploaded image details
    const imageDetails = {
      url: `${destination}${filename}`,
      userId: reqUser.id,
    };
    const image = await teaImageRepo.create(imageDetails);

    // image response
    const imageRes = {
      id: image.id,
      url: image.url,
      userId: image.userId,
    };

    return {
      success: true,
      status: 201,
      data: {
        image: imageRes,
      },
    };
  },
};

module.exports = imageService;
