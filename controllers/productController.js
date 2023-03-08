// const productSchema = require('../database/models/productModel');
const productService = require('../services/productService');

const createProduct = async (req, res) => {
    try {
        // const savedData = await productSchema.create({ ...req.body });
        const savedData = await productService.createProduct({ ...req.body });
        res.status(200).send(savedData);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}

const getProducts = async (req, res) => {
    try {
        // const getData = await productSchema.find();
        const getData = await productService.getAllProducts();
        res.status(200).send(getData);
    }  catch (error) {
        res.status(500).send({ message: error.message });
    }
}

const getOneProduct = async(req, res) => {
    try {
        // const data = await productSchema.findById(req.params.id);
        const data = await productService.getOneProduct(req.params.id);
        res.status(200).send(data);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}

const updateProduct = async(req, res) => {
    try {
        const _id = req.params.id;
        const updatedData = req.body;
        const option = { new: true };

        // const result = await productSchema.findByIdAndUpdate(_id, updatedData, options);
        const result = await productService.updateProduct(_id, updatedData, option)
        res.status(200).send(result);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}

const deleteProduct = async(req, res) => {
    try {
        const {id} = req.params;
        // const product = await productSchema.findByIdAndDelete(id);
        const product = await productService.deleteProduct(id);

        if(!product){
            res.status(404).send({ message: `cannot find any product with ID ${id}.` });
        } else {
            res.status(200).send(`Document with ${product.name} has been deleted..`);
        }
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}

module.exports = {
    createProduct,
    getProducts,
    getOneProduct,
    updateProduct,
    deleteProduct
}