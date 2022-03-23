const router = require('express').Router();
const producerController = require('../controllers/producer_controller');

router.get('/', producerController.getAllProducer);
router.post('/', producerController.addProducer);

module.exports = router;