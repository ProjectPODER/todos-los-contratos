var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

/* GET Metodología. */
router.get('/metodologia', function(req, res, next) {
  res.render('metodologia');
});

/* GET Unidades Compradoras. */
router.get('/unidades-compradoras', function(req, res, next) {
  res.render('unidades-compradoras');
});

/* GET Proveedores. */
router.get('/proveedores', function(req, res, next) {
  res.render('proveedores');
});

module.exports = router;
