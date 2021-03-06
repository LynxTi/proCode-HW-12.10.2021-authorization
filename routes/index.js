var express = require('express');
var router = express.Router();

const multer = require('multer');
const upload = multer();

const authorizationCntr = require('../controlers/authorization');
const productCntrl = require('../controlers/product');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/createNewUser', upload.none(), async (req, res, next) => {
  const {nameUser, passwordUser} = req.body;
  authorizationCntr.createNewUser(nameUser, passwordUser);
});

router.post('/signIn', upload.none(), async (req, res) => {
  const {nameUser, passwordUser} = req.body;
  const rezalt = await authorizationCntr.login(nameUser, passwordUser);
  
  if(rezalt.status === "logged in") {
    req.session.userId = rezalt.user.id;
    res.json({profile: rezalt.user});
  }
});

router.post('/getAllProducts', upload.none(), async (req, res) => {
  const products = await productCntrl.getAllproducts();
  res.json({products});

});

module.exports = router;
