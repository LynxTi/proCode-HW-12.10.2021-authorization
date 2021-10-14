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

  res.render('product', { product });
});

router.post('/createNewComment', upload.none(), async (req, res) => {
    // const коментарий ид товара, ид автора
    const {productId, comment} = req.body;
    const {userId} = req.session;
    const rezalt = await commentCntrl.createNewComment(comment, userId, productId);
    console.log(rezalt.status);

    const allComments = commentCntrl.getAllCommentsForHTML(productId);
});

router.post('/getAllComents', upload.none(), async (req, res) => {
  const { productId } = req.body;
  const allComments = await commentCntrl.getAllCommentsForHTML(productId);

  res.json({allComments});
})

module.exports = router;