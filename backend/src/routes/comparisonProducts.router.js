const express = require('express');
const { comparisonProductsController } = require('../controllers');

const router = express.Router();

router.post('/', comparisonProductsController.create);

module.exports = router;
