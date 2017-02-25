/* Our login router */
const login = require('express').Router();
/* Connect to model */
const model = require('../model/users');

login.get('/drivers', (req, res) => {
  res.render('./login/drivers');
});

login.post('/drivers', model.getUser);

login.get('/agents', (req, res) => {
  res.render('./login/agents');
});

module.exports = login;