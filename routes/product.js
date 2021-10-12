var express = require('express');
var router = express.Router();

const multer = require('multer');
const upload = multer();

const productCntrl = require('../controlers/product');
const commentCntrl = require('../controlers/comment');


/* GET home page. */
router.get('/:id', async function(req, res, next) {
    const { id }= req.params;
    const products = await productCntrl.getAllproducts();
    const product = products.find(val => val.id === id);
    // commentCntrl.createNewComment('Классный кот', '6161508b7fb1062a3dfac014', '61633ea35f99fb6f310fd047')

  res.render('product', { product });
});

router.post('/createNewComment', (req, res) => {
    // const коментарий ид товара, ид автора
    console.log("url", req.url);
    console.log('id:   ', req.session.userId);
})

module.exports = router;