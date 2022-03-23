const router = require('express').Router();
const typeController = require('../controllers/type_controller');

router.get('/', typeController.getTypes);
router.post('/', typeController.addType);

module.exports = router;