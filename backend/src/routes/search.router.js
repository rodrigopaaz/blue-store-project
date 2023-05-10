const express = require('express');
const { searchController } = require('../controllers');

const router = express.Router();

router.post('/', searchController.createSearch);

module.exports = router;
