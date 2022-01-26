const productsModel = require('../models/products');

const create = async ({ name, quantity }) => {
  const product = await productsModel.create({ name, quantity });

  return product;
};

const getAll = async () => {
  const products = await productsModel.getAll();
  return products;
};

module.exports = {
  create,
  getAll,
};