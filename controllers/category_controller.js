const Category = require('../models/category');

module.exports.getAllCategory = async (req, res, next) => {
    try {
        const categories = await Category.find();
        res.send(categories);
    } catch (error) {
        console.log(error);
    }
}

module.exports.addCategory = async (req, res, next) => {
    try {
        const name = req.body.name;
        const category = Category({ name });
        category.save();
        res.send(category);
    } catch (error) {
        console.log(error);
    }
}