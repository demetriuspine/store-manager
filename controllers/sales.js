const salesServices = require('../services/sales');

const create = async (req, res) => {
  try {
    const sales = req.body;
    const salesCreation = await salesServices.create(sales);
    return res.status(201).json(salesCreation);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAll = async (_req, res) => {
  try {
    const sales = await salesServices.getAll();
    res.status(200).json(sales);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getById = async (req, res) => {
  const { id } = req.params;
  try {
    const sale = await salesServices.getById(id);
    res.status(200).json(sale);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const update = async (req, res) => {
  try {
    const { id } = req.params;
    const sale = req.body;
    const response = await salesServices.update(id, sale);
    return res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { create, getAll, getById, update };