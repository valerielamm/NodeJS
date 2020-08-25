var express = require('express');
var router = express.Router();

let index = require('../controllers/index')

/* GET home page. */
router.get('/', index.index);
router.get('/example', index.example);
router.get('/example/:rand_number', index.example_rand_number);

module.exports = router;
