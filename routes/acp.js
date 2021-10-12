var express = require('express');
var router = express.Router();

const multer = require('multer');
const upload = multer();

const productCntr = require('../controlers/product');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('acp');
});

router.post('/createNewProduct', upload.none(), (req, res) => {
    const {nameProduct, discription, price} = req.body;
    productCntr.createNewProduct(nameProduct, discription, price);

});

module.exports = router;
