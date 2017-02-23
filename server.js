const express = require('express');
require('dotenv').config();

const app = express();
const bodyParser = require('body-parser');
const pgp = require('pg-promise')();

const db = pgp(process.env.DATABASE_URL);

const zones = require('./lib/zones.js');

app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: false }));

const handlebars = require('express-handlebars')
  .create({ defaultLayout: 'main' });

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.set('port', process.env.PORT || 3000);


app.get('/form', (req, res) => {
  res.render('form');
});

app.get('/zone_search', (req, res) => {
  res.render('zone_search');
});

app.get('/zones/:id', (req, res) => {
  // res.json(req.params)
  console.log(db);

  db.any(`select *
    from zones
    where zone_number = 2`)
    .then((data) => {
      console.log(data);
      res.json(data);
    })
  .catch((err) => {
    res.json(err);
  });
});

app.post('/form', (req, res) => {
  console.log(`zone: ${req.body.zone_number}; license: ${req.body.price}`);
  db.none('INSERT INTO leases (zone_number, price, time_limit, plate_state, plate_number, duration, cgnumber) VALUES ($1,$2,$3,$4,$5,$6,$7)', [req.body.zone_number, req.body.price, req.body.time_limit, req.body.plate_state, req.body.plate_number, req.body.duration, req.body.cgnumber]);
  return res.redirect(303, `/success/${req.body.plate_number}/${req.body.plate_state}`);
});

app.get('/success/:plate_number/:plate_state', (req, res) => {
  db.one(`SELECT * FROM leases WHERE plate_number = $1 AND plate_state = $2`, [req.params.plate_number, req.params.plate_state])
    .then((data) => {
    console.log(data)
    //return data.id
    })
    //console.log(data)
  res.render('success', {fish: zone });
});

app.get('/', (req, res) => {
  res.render('index');
});
// //404
// app.use(function(req, res){
//  res.type('text/plain');
//  res.status(404);
//  res.send('404 - Not Found');
// });
//
// //500
// app.use(function(err, req, res, next){
//  console.error(err.stack);
//  res.type('text/plain');
//  res.status(500);
//  res.send('500 - Server Error');
// });

app.listen(app.get('port'), () => {
  console.log(`Express started on http://localhost: ${app.get('port')}; press Ctrl-C to terminate.`);
});
