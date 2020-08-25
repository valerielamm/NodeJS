

exports.index = function(req, res, next) {
  res.render('index', { title: 'Express'});
}

exports.example = function(req, res, next) {
  res.render('example', { title: 'Example Page'});
}

exports.example_rand_number = function(req, res, next) {
  var rand_num = req.params.rand_number;
  res.render('example', { title: 'Example Page With Random Number Parameter', rand_number: rand_num});
}