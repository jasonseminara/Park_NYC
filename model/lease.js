const db = require('./dbconnection.js');

/* TODO: make the lease search based on user role
  (eg, Driver gets only Driver leases, plates) */
module.exports = {
  getOneLease(req, res, next){
    db.one(`
      SELECT *
      FROM leases
      WHERE id = $/id/
    `, req.params)
    .then((data) => {
        console.log(data);
        res.json(data);
      })
    .catch((err) => {
      res.json(err);
    });
  },
  getMyLeases(req, res, next){
    db.any(`
      SELECT
        id,
        zone_number,
        price,
        duration
      FROM leases
    `, req.params.id)

    .then((data) => {
        console.log(data);
        res.json(data);
      })
    .catch((err) => {
      res.json(err);
    });
  },
};
