const zones = require('express').Router();
const model    = require('../model/zone');

function barebones(req,res,next){
  console.log("I'm a middleware function!")
  next();
}

zones.get('/:id', barebones, model.getZone );

module.exports = zones;
