

exports.index = function(req, res, next) {
  res.render('index', { title: 'Express'});
}

exports.example = function(req, res, next) {
  res.render('example', { title: 'Example Page'});
}