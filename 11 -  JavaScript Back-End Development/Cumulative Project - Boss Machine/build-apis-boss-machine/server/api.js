// Dependencies:
const EXPRESS = require('express');

const ROUTER = EXPRESS.Router();

// Local dependencies:
const _minions = require('./minions');
const _ideas = require('./ideas');
const _meetings = require('./meetings');

// Routing:
ROUTER.use("/minions", _minions);
ROUTER.use("/ideas", _ideas);
ROUTER.use("/meetings", _meetings);

module.exports = ROUTER;
