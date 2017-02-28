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
app.use('/api', require('./routes/api'));


app.get('/', (req, res) => {
  res.render('index');
});






app.listen(app.get('PORT'), () => {
  console.log(`Express started on http://localhost: ${app.get('PORT')}; press Ctrl-C to terminate.`);
});
