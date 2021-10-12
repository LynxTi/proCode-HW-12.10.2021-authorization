const productModel = require('../models/product');

const createNewProduct = (nameProduct, discription, price) => {
    const doc = productModel.create({nameProduct, discription, price});
}

const getAllproducts = async () => {
    const products = await productModel.find({});
    return products;
}

module.exports = {
    createNewProduct,
    getAllproducts
}