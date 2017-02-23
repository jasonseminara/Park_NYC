const pgp = require('pg-promise')();

const config = {
  host:     process.env.DB_HOST,
  port:     process.env.DB_PORT,
  database: process.env.DB_NAME,
  user:     process.env.DB_USER
};

const db = pgp(config);


/*app.get('/success/:plate_number/:plate_state', (req, res) => {
  const data = db.one(`
    SELECT
      zone_number,
      price,
      duration
    FROM leases
    WHERE plate_number = $/plate_number/
      AND plate_state = $/plate_state/
    `, req.params)
    .then((data) => {
      var zone = data.zone_number;
      var price = data.price;
      var time = data.duration;
      res.render('success', {zone, price, time});
    })
});*/




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
