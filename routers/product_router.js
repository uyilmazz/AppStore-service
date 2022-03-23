const router = require('express').Router();
const productController = require('../controllers/product_controller');

// Product
router.get('/', productController.getAllProducts);
router.post('/', productController.addProduct);

router.get('/updated', productController.getUpdated);
router.get('/trends', productController.getOnTrending);

router.get('/:productId', productController.getProduct);



module.exports = router;