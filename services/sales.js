const salesModel = require('../models/sales');

const create = async (sales) => {
  const createProduct = await salesModel.create(sales);
  return createProduct;
};

const getAll = async () => {
  const getAllSales = await salesModel.getAll();
  return getAllSales;
};

const getById = async (id) => {
  const sale = await salesModel.getById(id);
  return sale;
};

const update = async (id, sale) => {
  const updatedSale = await salesModel.update(id, sale);
  return updatedSale;
};

module.exports = { create, getAll, getById, update };