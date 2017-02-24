/* Our lease router */
const leases = require('express').Router();
const model = require('../model/lease');

// /leases/new --> shows a create lease form
leases.get('/new', (req, res) => {
  res.render('form');
});

// /leases/edit --> shows a edit lease form
leases.get('/edit', (req, res) => {
  res.render('form');
});

/* /lease/id GET request */
leases.get('/:id', model.getOneLease);

/**/
/* /lease/id GET ALL leases */
leases.get('/', model.getMyLeases)

//temporary fix
leases.get('/success/:plate_number/:plate_state', (req, res) => {

      res.render('success');

});

module.exports = leases;
