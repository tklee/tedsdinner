var express = require('express'),
    app = express.createServer(),
    routes = require('./routes');

app.configure(function(){
  app.set('views', __dirname + '/files/views');
  app.set('view engine', 'jade');
  app.use(express.logger());
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(require('stylus').middleware({ src: __dirname + '/public' }));
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.get('/', function(req, res){
  res.render('about');
});

//app.get('/about', function(req, res){
//  res.render('about');
//});

app.get('/about', function(req, res){
  res.redirect('about');
});

//app.post('/', function(request, response){
//
//    //console.log(request.body.choice);
//    user_ip = request.ip();
//
//    if (response.body.choice == 'first') {
//      song1_votes += [user_ip];
//    }
//    if (response.body.choice == 'second') {
//      song2_votes += [user_ip];  
//    }
//    if (response.body.choice == 'third') {
//      song3_votes += [user_ip]; 
//});



app.post('/about', function(request, response){

    console.log(request.body.choice);
    response.redirect('/', function(){	
      console.log(request.body.choice);
    });
});
//console.log('Express server started on port %s', app.address().port);
app.listen(8080);
