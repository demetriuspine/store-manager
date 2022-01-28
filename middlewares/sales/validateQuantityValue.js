const validateQuantityValue = (req, res, next) => {
  const sales = req.body;
  const isNumberInteger = sales.every(({ quantity }) => (
    Number.isInteger(quantity)
  ));
  const isNotZero = sales.every(({ quantity }) => (
    quantity <= 0
  ));
  if (!isNumberInteger || isNotZero) {
    return res.status(422).json({
      message: '"quantity" must be a number larger than or equal to 1',
    });
  }

  next();
};

module.exports = validateQuantityValue;