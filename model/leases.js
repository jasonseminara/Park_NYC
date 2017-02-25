const db = require('./dbconnection.js');

/*  */
module.exports = {
  getMyLeases(req, res, next){
    db.any(`
      SELECT
        user_id,
        lease_id,
        zone_number,
        price,
        time_limit,
        plate_state,
        plate_number
      FROM leases
      WHERE user_id = $1
    `, req.params.userid)

    .then((data) => {
        //console.log(data);
        const userid = data[0].user_id;
        res.render('./drivers/index', {data: data, userid});
      })
    .catch((err) => {
      res.json(err);
    });
  },
  getOneLease(req, res, next){
    db.one(`
      SELECT
        user_id,
        lease_id,
        zone_number,
        price,
        time_limit,
        plate_state,
        plate_number
      FROM leases
      WHERE lease_id = $1
    `, req.params.id)

    .then((data) => {
        //console.log(data);
        res.render('./drivers/show', {data: data});
      })
    .catch((err) => {
      res.json(err);
    });
  },
};