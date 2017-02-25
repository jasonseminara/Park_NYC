const db = require('./dbconnection.js');

/* */
module.exports = {
  getUser(req, res, next){
    db.one(`
      SELECT *
      FROM users
      WHERE email = $1
    `, [req.body.email])
    .then((data) => {
        const id = data.user_id;
        res.redirect(`/drivers/${id}`)
      })
    .catch((err) => {
      res.json(err);
    });
  }
};