var express = require('express');
var router = express.Router();

let index = require('../controllers/index')

/* GET home page. */
router.get('/', index.index);
router.get('/example', index.example);
router.get('/example/:rand_number', index.example_rand_number);
router.get('/add-article', index.add_article);

// Add submit POST route
router.post('/add-article', index.add_article_post);

module.exports = router;
