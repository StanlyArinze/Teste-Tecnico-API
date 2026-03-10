const contactRepository = require('../repositories/contactRepository');
const AppError = require('../utils/AppError');

const create = async (payload) => {
  const contactId = await contactRepository.create(payload);

  return contactRepository.findById(contactId);
};

const list = async () => {
  return contactRepository.findAll();
};

const update = async (id, payload) => {
  const existingContact = await contactRepository.findById(id);

  if (!existingContact) {
    throw new AppError('Contato nao encontrado', 404);
  }

  const nextContact = {
    nome: payload.nome ?? existingContact.nome,
    telefone: payload.telefone ?? existingContact.telefone
  };

  await contactRepository.update(id, nextContact);

  return contactRepository.findById(id);
};

const remove = async (id) => {
  const existingContact = await contactRepository.findById(id);

  if (!existingContact) {
    throw new AppError('Contato nao encontrado', 404);
  }

  await contactRepository.remove(id);
};

module.exports = {
  create,
  list,
  update,
  remove
};
