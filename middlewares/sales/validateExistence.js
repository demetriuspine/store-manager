const salesServices = require('../../services/sales');

const validateExistence = async (req, res, next) => {
  const { id } = req.params;
  const sale = await salesServices.getById(id);
  if (!sale || sale.length === 0) {
    return res.status(404).json({ message: 'Sale not found' });
  }
  next();
};

module.exports = validateExistence;
