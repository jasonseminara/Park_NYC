/* Our zones router */
const zones = require('express').Router();
const model = require('../model/zone');

/* /zones/id GET request */
zones.get('/:id', model.getZone );

module.exports = zones;
