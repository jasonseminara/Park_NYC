const db = require('./dbconnection.js');

module.exports = {
  getZone(req, res, next){
    db.any(`SELECT *
  		FROM zones
  		WHERE zone_number = ${req.params.id}`)
    .then((data) => {
        res.json(data);
      })
    .catch((err) => {
      res.json(err);
    });
  },
};