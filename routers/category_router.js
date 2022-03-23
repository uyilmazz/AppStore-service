const router = require('express').Router();
const categoryController = require('../controllers/category_controller');

router.get('/', categoryController.getAllCategory);
router.post('/', categoryController.addCategory);

module.exports = router;