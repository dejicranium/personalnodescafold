var express = require('express');
var router = express.Router();
const cond = require('../utils/conditional')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.ok(req.data);
});

module.exports = router;
