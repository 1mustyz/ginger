var express = require('express');
var router = express.Router();
const supplierController = require('../controllers/supplierController');
const stockCotroller = require('../controllers/stockController')
const {checkEmail} = require('../middlewares/checkerMiddleware');

router.post('/create-supplier', checkEmail, supplierController.createSupplier)
router.get('/get-all-suppliers', supplierController.findAllSuppliers)

router.get('/get-all-stocks', stockCotroller.getAllStocks)
router.get('/get-single-stock', stockCotroller.getSingleStock)
router.post('/create-stock', stockCotroller.createStock)
router.put('/add-stock-image', stockCotroller.addStockImage)
router.post('/login',supplierController.login)

module.exports = router;
