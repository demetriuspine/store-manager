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

module.exports = { create, getAll };