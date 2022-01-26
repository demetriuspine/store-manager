const express = require('express');
const productsController = require('../controllers/products');
const productExistence = require('../middlewares/products/productExistence');
const validateName = require('../middlewares/products/validateName');
const validateQuantity = require('../middlewares/products/validateQuantity');

const router = express.Router();

router.get('/', productsController.getAll);
router.post('/', validateQuantity, validateName, productExistence, productsController.create);

module.exports = router;