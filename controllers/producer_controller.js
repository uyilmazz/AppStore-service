const Producer = require('../models/producer');

module.exports.getAllProducer = async (req, res, next) => {
    try {
        const producers = await Producer.find();
        res.send(producers);
    } catch (error) {
        console.log(error);
    }
}

module.exports.addProducer = async (req, res, next) => {
    try {
        const name = req.body.name;
        const producer = Producer({ name });
        producer.save();
        res.send(producer);
    } catch (error) {
        console.log(error);
    }
}

