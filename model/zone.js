const pgp = require('pg-promise')();

const config = {
  host:     process.env.DB_HOST,
  port:     process.env.DB_PORT,
  database: process.env.DB_NAME,
  user:     process.env.DB_USER
};


const db = pgp(config);

module.exports = {
  getZone(req, res, next){
    db.any(`
      SELECT *
      FROM zones
      WHERE zone_number = $1
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
