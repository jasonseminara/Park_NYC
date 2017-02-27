/* Our lease router */
const drivers = require('express').Router();
/* Connect to model */
const model = require('../model/leases');
const zones = require('../model/zone');


/* GET INDEX display a list of dirver's leases  */
drivers.get('/:userid', model.getMyLeases);

/* GET NEW display form to create a lease */
drivers.get('/:userid/new', (req, res) => {
  console.log(req.params.userid);
  res.render('./drivers/new', {userid: req.params.userid})
});

/* GET SHOW display specific lease with countdown */
drivers.get('/:userid/:id', model.getOneLease);


/* POST /leases CREATE DB INSERT create new lease*/
drivers.post('/:userid', model.addLease);



/* GET /leases/:id/edit EDIT display form to edit lease*/
drivers.get('/:userid/:id/edit', (req, res) => {
  res.render('./drivers/edit');
});

// /* PUT /leases/:id UPDATE DB EDIT update specific lease */
// leases.put('/:id', (req, res) => {

// });

// /* DELETE /leases/:id DELETE delete a specific lease */
// leases.delete('/id', (req, res) => {

// });




module.exports = drivers;