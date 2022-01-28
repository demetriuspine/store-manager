const salesModel = require('../models/sales');

const create = async (sales) => {
  const createProduct = await salesModel.create(sales);
  return createProduct;
};

const getAll = async () => {
  const getAllSales = await salesModel.getAll();
  return getAllSales;
};

module.exports = { create, getAll };