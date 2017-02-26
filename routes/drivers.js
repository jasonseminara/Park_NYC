/* Our lease router */
const drivers = require('express').Router();
/* Connect to model */
const model = require('../model/leases');
const zones = require('../model/zones');


/* GET INDEX display a list of dirver's leases  */
drivers.get('/:userid', model.getMyLeases);

/* GET NEW display form to create a lease */
drivers.get('/:userid/new', (req, res) => {
  
  res.render('./drivers/new', {zones: zones[1]})
});

/* GET SHOW display specific lease with countdown */
drivers.get('/:userid/:id', model.getOneLease);


// /* POST /leases CREATE DB INSERT create new lease*/
// leases.post('/', (req, res) => {
 
// });


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