/* Our lease router */
const leases = require('express').Router();
//const model = require('../model/lease');

/* GET /leases INDEX; display a list of leases  */
leases.get('/', (req, res) => {
  res.render('./leases/index');
})

/* GET /leases/new NEW display form to create lease */
leases.get('/new', (req, res) => {
  res.render('./leases/new')
});

/* GET /leases SHOW display specific lease with countdown */
leases.get('/:id', (req, res) => {
  res.render('./leases/show')
});


// /* POST /leases CREATE DB INSERT create new lease*/
// leases.post('/', (req, res) => {
 
// });


/* GET /leases/:id/edit EDIT display form to edit lease*/
leases.get('/:id/edit', (req, res) => {
  res.render('./leases/edit');
});

// /* PUT /leases/:id UPDATE DB EDIT update specific lease */
// leases.put('/:id', (req, res) => {

// });

// /* DELETE /leases/:id DELETE delete a specific lease */
// leases.delete('/id', (req, res) => {

// });




module.exports = leases;