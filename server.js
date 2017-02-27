'use strict';

// all dependencies go here
const express     = require('express');
const bodyParser  = require('body-parser');
const logger      = require('morgan');

const isDev = !('NODE_ENV' in process.env) && require('dotenv').config() && true;

const app = express();
app.set('PORT', process.env.PORT || 3000);

app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: false }));

const handlebars = require('express-handlebars')
  .create({ defaultLayout: 'main' });

const db = require('./model/dbconnection.js');

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');


// go get the routes I need for this app
app.use('/zones', require('./routes/zones'));
app.use('/drivers', require('./routes/drivers'));
app.use('/login', require('./routes/login'));


app.get('/', (req, res) => {
  res.render('index');
});


///////////////////


// app.post('/form', (req, res) => {
//   console.log(`zone: ${req.body.zone_number}; license: ${req.body.price}`);
//   db.none('INSERT INTO leases (zone_number, price, time_limit, plate_state, plate_number, duration, cgnumber) VALUES ($1,$2,$3,$4,$5,$6,$7)', [req.body.zone_number, req.body.price, req.body.time_limit, req.body.plate_state, req.body.plate_number, req.body.duration, req.body.cgnumber]);
//   res.redirect(303, 'success'/*, `/success/${req.body.plate_number}/${req.body.plate_state}`*/);
// });

// app.get('/success', (req, res) => {
//   res.render('success');
// });



app.listen(app.get('PORT'), () => {
  console.log(`Express started on http://localhost: ${app.get('PORT')}; press Ctrl-C to terminate.`);
});
