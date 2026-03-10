const contactService = require('../services/contactService');
const asyncHandler = require('../utils/asyncHandler');

const create = asyncHandler(async (req, res) => {
  const contact = await contactService.create(req.body);

  res.status(201).json(contact);
});

const list = asyncHandler(async (req, res) => {
  const contacts = await contactService.list();

  res.status(200).json(contacts);
});

const update = asyncHandler(async (req, res) => {
  const contact = await contactService.update(req.params.id, req.body);

  res.status(200).json(contact);
});

const remove = asyncHandler(async (req, res) => {
  await contactService.remove(req.params.id);

  res.status(204).send();
});

module.exports = {
  create,
  list,
  update,
  remove
};
