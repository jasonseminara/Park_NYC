const zones    = require('express').Router();
const model    = require('../model/zone');

zones.get('/:id', model.getZone );

module.exports = zones;
