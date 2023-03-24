//to get rid of try and catch block, we will wrap them in async wrapper function
const asyncWrapper = (controller) => {
  return async (req, res, next) => {
    try {
      await controller(req, res, next);
    } catch (error) {
      res.status(500).json({"message": "Invalid Category"})
      next(error);
    }
  };
};
module.exports = asyncWrapper;
