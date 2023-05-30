const express = require('express');
const { comparisonController } = require('../controllers');

const router = express.Router();

router.post('/', comparisonController.create);

module.exports = router;
