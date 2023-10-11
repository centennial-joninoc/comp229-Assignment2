/*
 * Student Name: John Celso Inocente
 * Student ID: 301332723
 * Oct. 11, 2023
 */

var express = require('express');
var router = express.Router();
var productCtrl = require('../controllers/product.controller');

// get
router.get('/:id', productCtrl.findByID);
router.get('/', productCtrl.find);

// get products by name
//router.get('/?name=[kw]', productCtrl.findByName);


// add or create
router.post('/', productCtrl.create);
 
// update
router.put('/:id', productCtrl.update);

// delete
router.delete('/:id', productCtrl.removeProduct);
router.delete('/', productCtrl.removeProducts);
module.exports = router;