const validateId = (req, res, next) => {
  const sales = req.body;
  const validProductId = sales.every((sale) => (
    Object.keys(sale).includes('product_id')
  ));
  if (!validProductId) {
    return res.status(400).json({
      message: '"product_id" is required',
    });
  }

  next();
};

module.exports = validateId;