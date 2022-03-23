const Type = require("../models/type");

module.exports.getTypes = async (req, res, next) => {
    try {
        const types = await Type.find();
        res.send(types);
    } catch (error) {
        console.log(error);
    }
}

module.exports.addType = async (req, res, next) => {
    try {
        const name = req.body.name;
        const type = Type({ name: name });
        type.save();
        res.send(type);
    } catch (error) {
        console.log(error);
    }
}