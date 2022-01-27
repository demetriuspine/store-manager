const productServices = require('../services/products');
const productModels = require('../models/products');

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

const getById = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await productServices.getById(id);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const update = async (req, res) => {
  const { id } = req.params;
  const { name, quantity } = req.body;
  try {
    const createdProduct = await productServices.update({ id, name, quantity });
    res.status(200).json(createdProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const remove = async (req, res) => {
  const { id } = req.params;
  try {
    const productToBeDeleted = productServices.getById(id);
    await productModels.remove(id);
    res.status(200).json(productToBeDeleted);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  create,
  getAll,
  getById,
  update,
  remove,
};