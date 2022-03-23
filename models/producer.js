const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const producerSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    imageUrl: {
        type: String
    }
});

const Producer = mongoose.model('Producer', producerSchema);

module.exports = Producer;