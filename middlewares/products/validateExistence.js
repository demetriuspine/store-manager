const productServices = require('../../services/products');

const validateExistence = async (req, res, next) => {
  const { id } = req.params;
  const product = await productServices.getById(id);
  if (!product || product.length === 0) {
    return res.status(404).json({ message: 'Product not found' });
  }
  next();
};

module.exports = validateExistence;
