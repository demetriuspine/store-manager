const express = require('express');
const salesController = require('../controllers/sales');
const validateId = require('../middlewares/sales/validateId');
const validateQuantity = require('../middlewares/sales/validateQuantity');
const validateQuantityValue = require('../middlewares/sales/validateQuantityValue');

const router = express.Router();

router.get('/', salesController.getAll);
router.post('/', validateId, validateQuantity, validateQuantityValue, salesController.create);

module.exports = router;