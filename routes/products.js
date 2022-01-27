const express = require('express');
const productsController = require('../controllers/products');
const productExistence = require('../middlewares/products/productExistence');
const validateExistence = require('../middlewares/products/validateExistence');
const validateName = require('../middlewares/products/validateName');
const validateQuantity = require('../middlewares/products/validateQuantity');

const router = express.Router();

router.get('/', productsController.getAll);
router.get('/:id', validateExistence, productsController.getById);
router.put('/:id', validateQuantity, validateName, validateExistence, productsController.update);
router.post('/', validateQuantity, validateName, productExistence, productsController.create);

module.exports = router;