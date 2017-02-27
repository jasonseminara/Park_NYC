'use strict';

// all dependencies go here
const express     = require('express');
const bodyParser  = require('body-parser');
const logger      = require('morgan');
const passport    = require('passport');
const session     = require('express-session');
const handlebars  = require('express-handlebars').create({ defaultLayout: 'main' });

// Are we in dev?
const isDev = !('NODE_ENV' in process.env) && require('dotenv').config() && true;

// set up express
const app = express();
app.set('PORT', process.argv[2] || process.env.PORT || 3000);
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));


// SESSION
app.use(session({
  saveUninitialized: true,
  secret:            'i love new york',
  resave:            true,
}));

app.use(passport.initialize());
app.use(passport.session());

// VIEW
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

// LOGGING
app.use(logger(isDev ? 'dev' : 'common'));

// ROUTES
app.use('/zones', require('./routes/zones'));
app.use('/drivers', require('./routes/drivers'));
app.use('/login', require('./routes/login'));

// HOME route
app.get('/', (req, res) => res.render('index'));

// todo: we should set up some generic error handlers (400,500,etc)

app.listen(app.get('PORT'), () => {
  console.log(`Express started on http://localhost: ${app.get('PORT')}; press Ctrl-C to terminate.`);
});
