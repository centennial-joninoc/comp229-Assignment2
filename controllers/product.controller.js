/*
 * Student Name: John Celso Inocente
 * Student ID: 301332723
 * Oct. 11, 2023
 */

let productModel = require('../models/product.model');

module.exports.find = async (req, res) => {

    if (req.query.name)
    {
        console.log('HI FIND NAME');  
        const name = req.query.name;
        //check name
        var condition = name ? { name: { $regex: new RegExp(name), $options: "i" } } : {};
    
        let result = await productModel.find(condition);
        res.send(result);
    }
    else 
    {
        console.log('HI FIND ALL');  
        let result = await productModel.find();
        res.send(result);
    }


    // let result = await productModel.find();
    // return res.send(result);
}

module.exports.findByID = async (req, res) => {
    console.log('HI FIND');  
    let id = req.params.id;    
    let result = await productModel.findById(id);
    res.send(result);
}

module.exports.create = async (req, res) => { 
    console.log('HI CREATE');  
    var newProd = new productModel(req.body);
    let result = await newProd.save();
    res.send(result);
}

module.exports.removeProduct = async (req, res) => {
    console.log('HI REMOVE');
    console.log(req.params.id);
    // var query = { _id: req.body._id}
    // let result = await productModel.deleteOne(query);
    // res.send(result);

    var query = { _id: req.params.id}
    let result = await productModel.deleteOne(query);
    res.send(result);
}

module.exports.removeProducts = async (req, res) => {
    console.log('HI REMOVE ALL');
    let result = await productModel.deleteMany();
    res.send(result);
}

module.exports.update = async (req, res) => {
    console.log('HI UPDATE');
    let id = req.params.id;  
    let result = await productModel.findByIdAndUpdate(id, req.body, { useFindAndModify: false });
    res.send(result);
}