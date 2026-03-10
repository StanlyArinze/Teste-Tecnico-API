const AppError = require('../utils/AppError');

const validateIdParam = (req, res, next) => {
  const { id } = req.params;
  const parsedId = Number(id);

  if (!Number.isInteger(parsedId) || parsedId <= 0) {
    throw new AppError('Id invalido', 400);
  }

  next();
};

module.exports = validateIdParam;
