const productModel = require('../database/models/productModel')

const createProduct = async (product) => {
    return await productModel.create(product);
}

const getAllProducts = async () => {
    return await productModel.find();
}

const getOneProduct = async (productId) => {
    return await productModel.findById(productId);
}

const updateProduct = async (productId, updatedData, option) => {
    return await productModel.findByIdAndUpdate(productId, updatedData, option);
}

const deleteProduct = async (productId) => {
    return await productModel.findByIdAndDelete(productId);
}

module.exports = {
    createProduct,
    getAllProducts,
    getOneProduct,
    updateProduct,
    deleteProduct
}