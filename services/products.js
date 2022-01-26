const productsModel = require('../models/products');

const create = async ({ name, quantity }) => {
  const product = await productsModel.create({ name, quantity });

  return product;
};

const getAll = async () => {
  const products = await productsModel.getAll();
  return products;
};

const getById = async (id) => {
  const product = await productsModel.getById(id);
  return product;
};

module.exports = {
  create,
  getAll,
  getById,
};