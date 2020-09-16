// Bring in Models
var Article = require('.././models/article');

exports.index = function (req, res, next) {
  console.log('You\'re on the home page');
  res.render('index', {
    title: 'Express'
  });
}

exports.example = function (req, res, next) {
  res.render('example', {
    title: 'Example Page'
  });
  console.log('You\'re on the example page.');
}

exports.example_rand_number = function (req, res, next) {
  Article.find({}, function (err, articles) {
    var rand_num = req.params.rand_number;
    if (err) {
      console.log(err);
    } else {
      res.render('example', {
        title: 'Example Page With Random Number Parameter',
        rand_number: rand_num,
        requestTime: req.requestTime,
        articles: articles
      });
    }
  });
  console.log('You\'re on the example_rand_number page.');
}
exports.add_article = function (req, res, next) {
  Article.find({}, function (err, articles) {
    if (err) {
      console.log(err);
    } else {
      res.render('add-article', {
        h1_title: 'Let\'s add an article!',
        articles: articles
      });
    }
  });
  console.log('You\'re on the add_article page.');
}

// Add submit POST route
exports.add_article_post = function (req, res) {
  var article = new Article();
  article.title = req.body.title;
  article.author = req.body.author;
  article.body = req.body.body;
  article.save(function (err) {
    if (err) {
      console.log(err);
      return;
    } else {
      res.redirect('/');
    }
  });
  console.log('Submitted ' + req.body.title);
};