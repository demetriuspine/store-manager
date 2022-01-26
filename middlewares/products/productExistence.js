const productsModel = require('../../models/products');

const productExistence = async (req, res, next) => {
  const { name } = req.body;
  const products = await productsModel.getAll();
  const productExists = products.some((product) => product.name === name);
  if (productExists) {
    return res.status(409).json({ message: 'Product already exists' });
  }
  next();
};

module.exports = productExistence;
