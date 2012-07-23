exports.index = function(req, res){
  res.render('index', { title: 'Express' })
};

exports.about = function(req, res){
  res.render('../files/views/about', { title: 'About' })
};
  
