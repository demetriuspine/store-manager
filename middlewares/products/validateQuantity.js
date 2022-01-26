const validateQuantity = (req, res, next) => {
  const { body } = req;

  if (body.quantity === undefined) {
    return res.status(400).json({ message: '"quantity" is required' });
  }

  const { quantity } = body;

  if (typeof quantity !== 'number' || quantity <= 0) {
    return res
    .status(422).json({ message: '"quantity" must be a number larger than or equal to 1' });
  }
  next();
};

module.exports = validateQuantity;