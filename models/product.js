
//Dependencies
var restful = require ('node-resftul');
var mongoose = restful.mongoose;

//Schema
var productSchema = new mongoose.Schema({
  name: String,
  sku: String,
  price: Number
});

//Return Model
module.exports = resful.model('Products', productSchema);