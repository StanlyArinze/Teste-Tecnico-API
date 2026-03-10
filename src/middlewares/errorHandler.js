const errorHandler = (error, req, res, next) => {
  if (error.statusCode) {
    return res.status(error.statusCode).json({
      message: error.message
    });
  }

  console.error(error);

  return res.status(500).json({
    message: 'Erro interno do servidor'
  });
};

module.exports = errorHandler;
