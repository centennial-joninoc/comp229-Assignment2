var express = require('express');
var router = express.Router();

var productsRouter = require('./product');
router.use('/api/products', productsRouter);

var categoryRouter = require('./category');
router.use('/api/categories', categoryRouter);

module.exports = router;