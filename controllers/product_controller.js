const Product = require('../models/product');
const mongoose = require('mongoose');

module.exports.getAllProducts = async (req, res, next) => {
    try {
        let query = {};
        const type = req.query.type;
        if (type) query.type = type;
        const producer = req.query.producer;
        if (producer) query.producer = producer;
        const category = req.query.category;
        if (category) query.category = { $in: mongoose.Types.ObjectId(category) };
        const products = await Product.find(query).populate('category');
        res.send(products);
    } catch (error) {
        console.log(error);
    }
}

module.exports.getProduct = async (req, res, next) => {
    try {
        const product = await Product.findById(req.params.productId).populate('category');
        if (product) {
            res.send(product);
        } else {
            res.send('Not product');
        }
    } catch (error) {
        console.log(error);
    }
}

module.exports.addProduct = async (req, res, next) => {
    try {
        const name = req.body.name;
        const producer = req.body.producer;
        const type = req.body.type;
        const category = req.body.category;
        const size = req.body.size;
        const description = req.body.description;
        const price = req.body.price;
        const images = req.body.images;

        const product = Product({
            name, producer, type, category, size, description, price, downloadCount: 0, rate: 0, images: images
        });
        await product.save();
        res.send(product)

    } catch (error) {
        console.log(error);
    }
}

module.exports.getProductsByCategoryId = async (req, res, next) => {
    try {
        const categoryId = req.params.categoryId;
        const products = await Product.find({
            category: {
                $in: mongoose.Types.ObjectId(categoryId)
            }
        }).populate('category');

        res.send(products);

    } catch (error) {
        console.log(error);
    }
}


module.exports.getOnTrending = async (req, res, next) => {
    try {
        const typeId = req.query.typeId;
        const products = await Product.find({ type: mongoose.Types.ObjectId(typeId) }).populate('category').sort('downloadCount').limit(5);
        res.send(products);
    } catch (error) {
        console.log(error);
    }
}

module.exports.getUpdated = async (req, res, next) => {
    try {
        const typeId = req.query.typeId;
        const products = await Product.find({ type: mongoose.Types.ObjectId(typeId) }).populate('category').sort({ 'createdAt': -1 }).limit(5);
        res.send(products);
    } catch (error) {
        console.log(error);
    }
}