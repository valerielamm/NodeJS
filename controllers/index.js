
// Bring in Models
var Article = require('.././models/article');

exports.index = function(req, res, next) {
  console.log ('You\'re on the home page');
  res.render('index', { title: 'Express'});
}

exports.example = function(req, res, next) {
  res.render('example', { title: 'Example Page'});
}

exports.example_rand_number = function(req, res, next) {
  Article.find({}, function(err, articles){
    var rand_num = req.params.rand_number;
    if(err){
      console.log(err);
    } else{
      res.render('example', { 
        title: 'Example Page With Random Number Parameter', 
        rand_number: rand_num, 
        requestTime: req.requestTime,
        articles: articles
      });
    }
  });
}