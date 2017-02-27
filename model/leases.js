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
  // addLease(req, res, next){
  //   db.none(`
  //     INSERT INTO leases
  //       (zone_number,
  //       price,
  //       time_limit,
  //       plate_state,
  //       plate_number,
  //       duration)
  //     VALUES
  //       ($1,$2,$3,$4,$5,$6,$7)`,
  //     [req.body.zone_number,
  //     req.body.price,
  //     req.body.time_limit,
  //     req.body.plate_state,
  //     req.body.duration])
  //   .then(data) => {
  //       //console.log(data);
  //       res.redirect(303, '/:userid');
  //     })
  //   .catch((err) => {
  //     res.json(err);
  //   });
  // },
};