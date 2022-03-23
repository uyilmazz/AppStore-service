const User = require("../models/user");
const jwt = require('jsonwebtoken');
const { StatusCodes } = require("http-status-codes");
require('dotenv').config();

module.exports.getUsers = async (req, res, next) => {
    try {
        const users = await User.find();
        res.send(users);
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(error);
    }
}


module.exports.postRegister = async (req, res, next) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (user) {
            res.send({
                message: 'Email already exit'
            });
        } else {
            const _user = new User({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
                wishList: []
            });
            const token = jwt.sign(_user.email, process.env.JWT_SECRET_KEY);
            _user.token = token;
            await _user.save();
            res.status(StatusCodes.CREATED).send(_user);
        }
    } catch (error) {
        // res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(error);
        res.send();
    }
}

module.exports.postLogin = async (req, res, next) => {
    try {
        const user = await User.findOne({ email: req.body.email, password: req.body.password });
        if (user) {
            const token = jwt.sign(user.email, process.env.JWT_SECRET_KEY);
            user.token = token;
            res.status(StatusCodes.ACCEPTED).send(user);
        } else {
            res.send({ message: 'email or password are wrong!' });
        }
    } catch (error) {
        console.log('sss');
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(error);
    }
}