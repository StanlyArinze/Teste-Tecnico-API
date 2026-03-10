const AppError = require('../utils/AppError');
const validateFullName = require('../utils/validateFullName');

const allowedFields = ['nome', 'telefone'];

const isNonEmptyString = (value) => {
  return typeof value === 'string' && value.trim() !== '';
};

const validateCreatePayload = (body) => {
  if (!body || typeof body !== 'object' || Array.isArray(body)) {
    throw new AppError('Payload invalido', 400);
  }

  const bodyKeys = Object.keys(body);

  if (bodyKeys.length === 0) {
    throw new AppError('Payload invalido', 400);
  }

  const hasInvalidField = bodyKeys.some((field) => !allowedFields.includes(field));

  if (hasInvalidField) {
    throw new AppError('Payload invalido', 400);
  }

  if (!isNonEmptyString(body.nome)) {
    throw new AppError('Nome obrigatorio', 400);
  }

  if (!isNonEmptyString(body.telefone)) {
    throw new AppError('Telefone obrigatorio', 400);
  }

  if (!validateFullName(body.nome)) {
    throw new AppError('Nome deve conter pelo menos duas palavras e cada palavra deve ter no minimo 3 letras', 400);
  }
};

const validateUpdatePayload = (body) => {
  if (!body || typeof body !== 'object' || Array.isArray(body)) {
    throw new AppError('Payload invalido', 400);
  }

  const bodyKeys = Object.keys(body);

  if (bodyKeys.length === 0) {
    throw new AppError('Payload invalido', 400);
  }

  const hasInvalidField = bodyKeys.some((field) => !allowedFields.includes(field));

  if (hasInvalidField) {
    throw new AppError('Payload invalido', 400);
  }

  if (Object.prototype.hasOwnProperty.call(body, 'nome')) {
    if (!isNonEmptyString(body.nome)) {
      throw new AppError('Nome obrigatorio', 400);
    }

    if (!validateFullName(body.nome)) {
      throw new AppError('Nome deve conter pelo menos duas palavras e cada palavra deve ter no minimo 3 letras', 400);
    }
  }

  if (Object.prototype.hasOwnProperty.call(body, 'telefone') && !isNonEmptyString(body.telefone)) {
    throw new AppError('Telefone obrigatorio', 400);
  }
};

const validateContactPayload = (mode) => {
  return (req, res, next) => {
    if (mode === 'create') {
      validateCreatePayload(req.body);
    }

    if (mode === 'update') {
      validateUpdatePayload(req.body);
    }

    next();
  };
};

module.exports = validateContactPayload;
