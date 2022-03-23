const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    producer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Producer'
    },
    rate: {
        type: Number
    },
    type: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Type'
    },
    category: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category'
    }],
    size: {
        type: Number,
        required: true
    },
    images: [
        {
            type: String
        }
    ],
    downloadCount: {
        type: Number
    },
    description: {
        type: String
    },
    price: {
        type: Number,
        required: true
    }
}, { timestamps: true });

const Product = mongoose.model('Product', productSchema);

module.exports = Product;