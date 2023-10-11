/*
 * Student Name: John Celso Inocente
 * Student ID: 301332723
 * Oct. 11, 2023
 */

var mongoose = require('mongoose');

var ProductSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  quantity: Number,
  category: String,
});

module.exports = mongoose.model('Product', ProductSchema)