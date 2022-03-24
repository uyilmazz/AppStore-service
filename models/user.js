const mongoose = require('mongoose');
const Product = require('./product');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true
    },
    token: {
        type: String
    },
    wishList: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Product',
            required: true
        }
    ]
}, { timestamps: true });


const User = mongoose.model('User', userSchema);
module.exports = User;