/* Our lease router */
const drivers = require('express').Router();
//const model = require('../model/lease');

/* GET /leases INDEX; display a list of leases  */
drivers.get('/:userid', (req, res) => {
  res.render('./drivers/index');
})

/* GET /leases/new NEW display form to create lease */
drivers.get('/:userid/new', (req, res) => {
  res.render('./drivers/new')
});

/* GET /leases SHOW display specific lease with countdown */
drivers.get('/:userid/:id', (req, res) => {
  res.render('./drivers/show')
});


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