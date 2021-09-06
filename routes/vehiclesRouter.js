const express = require('express');
const router = express.Router();
const vehicles = require('../services/vehicles');

/* GET vehicles */
router.get('/', async function(req, res, next) {
  try {
    res.json(await vehicles.getMultiple());
  } catch (err) {
    console.error(`Error while getting vehicles`, err.message);
    next(err);
  }
});

module.exports = router;