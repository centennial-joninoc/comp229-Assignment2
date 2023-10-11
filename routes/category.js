/*
 * Student Name: John Celso Inocente
 * Student ID: 301332723
 * Oct. 11, 2023
 */

var express = require('express');
var router = express.Router();
var categoryController = require('../controllers/category.controller')


router.get('/', function(req, res, next) {
  res.render('category', { title: 'Category' });
});

module.exports = router;