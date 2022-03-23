const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const typeSchema = new Schema({
    name: {
        type: String,
        required: true
    }
});

const Type = mongoose.model('Type', typeSchema);

module.exports = Type;