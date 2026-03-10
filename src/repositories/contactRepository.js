const pool = require('../database/connection');

const create = async ({ nome, telefone }) => {
  const [result] = await pool.execute(
    'INSERT INTO contatos (nome, telefone) VALUES (?, ?)',
    [nome, telefone]
  );

  return result.insertId;
};

const findAll = async () => {
  const [rows] = await pool.execute(
    'SELECT id, nome, telefone FROM contatos ORDER BY id ASC'
  );

  return rows;
};

const findById = async (id) => {
  const [rows] = await pool.execute(
    'SELECT id, nome, telefone FROM contatos WHERE id = ?',
    [id]
  );

  return rows[0] || null;
};

const update = async (id, { nome, telefone }) => {
  await pool.execute(
    'UPDATE contatos SET nome = ?, telefone = ? WHERE id = ?',
    [nome, telefone, id]
  );
};

const remove = async (id) => {
  await pool.execute('DELETE FROM contatos WHERE id = ?', [id]);
};

module.exports = {
  create,
  findAll,
  findById,
  update,
  remove
};
