const router = require('express').Router();
const authController = require('../controllers/auth_controller');


router.get('/', authController.getUsers);
router.post('/register', authController.postRegister);
router.post('/login', authController.postLogin);

module.exports = router;