const connection = require('./connection');

const create = async ({ name, quantity }) => {
  const query = 'INSERT INTO StoreManager.products(name, quantity) VALUES (?, ?)';
  const [rows] = await connection.execute(query, [name, quantity]);
  return {
    id: rows.insertId,
    name,
    quantity,
  };
};

const getAll = async () => {
  const query = 'SELECT * FROM StoreManager.products';
  const [rows] = await connection.execute(query);
  return rows;
};

const getById = async (id) => {
  const query = 'SELECT * FROM StoreManager.products WHERE StoreManager.products.id = ?';
  const [rows] = await connection.execute(query, [id]);
  return rows[0];
};

const update = async ({ id, name, quantity }) => {
  const query = 'UPDATE StoreManager.products SET name = ?, quantity = ? WHERE id = ?';
  await connection.execute(query, [name, quantity, id]);
  return {
    id,
    name,
    quantity,
  };
};

const remove = async ({ id }) => {
  const query = 'DELETE FROM StoreManager.products WHERE id = ?';
  await connection.execute(query, [id]);
};

module.exports = {
  create,
  getAll,
  getById,
  update,
  remove,
};