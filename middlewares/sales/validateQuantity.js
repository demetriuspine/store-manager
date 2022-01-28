const validateQuantity = (req, res, next) => {
  const sales = req.body;
  const validQuantity = sales.every((sale) => (
    Object.keys(sale).includes('quantity')
  ));
  if (!validQuantity) {
    return res.status(400).json({
      message: '"quantity" is required',
    });
  }

  next();
};

module.exports = validateQuantity;