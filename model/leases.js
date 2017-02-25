const db = require('./dbconnection.js');

/*  */
module.exports = {
  // getOneLease(req, res, next){
  //   db.one(`
  //     SELECT *
  //     FROM leases
  //     WHERE id = $/id/
  //   `, req.params)
  //   .then((data) => {
  //       console.log(data);
  //       res.json(data);
  //     })
  //   .catch((err) => {
  //     res.json(err);
  //   });
  // },
  getMyLeases(req, res, next){
    db.any(`
      SELECT
        zone_number,
        price,
        price,
        time_limit,
        plate_state,
        plate_number
      FROM leases
      WHERE user_id = $1
    `, req.params.userid)

    .then((data) => {
        console.log(data);
        res.json(data);
      })
    .catch((err) => {
      res.json(err);
    });
  },
};