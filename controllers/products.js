const productServices = require('../services/products');

const getAll = async (_req, res) => {
  try {
    const products = await productServices.getAll();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const create = async (req, res) => {
  const { name, quantity } = req.body;
  try {
    const createdProduct = await productServices.create({ name, quantity });
    res.status(201).json(createdProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  create,
  getAll,
};