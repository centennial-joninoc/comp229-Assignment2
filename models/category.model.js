/*
 * Student Name: John Celso Inocente
 * Student ID: 301332723
 * Oct. 11, 2023
 */

var mongoose = require('mongoose');

var CategorySchema = new mongoose.Schema({
  name: String
});

module.exports = mongoose.model('Category', CategorySchema)