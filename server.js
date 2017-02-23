var express = require('express');
require('dotenv').config()

var app = express();
const bodyParser = require('body-parser');
const pgp = require('pg-promise')();
const db = pgp(process.env.DATABASE_URL);

app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: false }));


var handlebars = require('express-handlebars')
	.create({ defaultLayout:'main' });
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.set('port', process.env.PORT || 3000);

app.get('/', function(req, res){
	res.render('index');
});

app.get('/form', function(req, res){
	res.render('form');
});

app.get('/zone_search', function(req, res){
	res.render('zone_search');
});

app.post('/form', function(req, res){
  console.log(`zone: ${req.body.zone_number}; license: ${req.body.price}`);
  db.none('INSERT INTO leases (zone_number, price, time_limit, plate_state, plate_number, duration, cgnumber) VALUES ($1,$2,$3,$4,$5,$6,$7)', [req.body.zone_number, req.body.price, req.body.time_limit, req.body.plate_state, req.body.plate_number, req.body.duration, req.body.cgnumber]);
  return res.redirect(303, '/success');
});

app.get('/success', function(req, res){
	res.render('success');
});


//404
app.use(function(req, res){
	res.type('text/plain');
	res.status(404);
	res.send('404 - Not Found');
});

//500
app.use(function(err, req, res, next){
	console.error(err.stack);
	res.type('text/plain');
	res.status(500);
	res.send('500 - Server Error');
});

app.listen(app.get('port'), function(){
	console.log('Express started on http://localhost:'+app.get('port')+'; press Ctrl-C to terminate.');
});
