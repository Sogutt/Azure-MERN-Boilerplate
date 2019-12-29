var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'All traffic other than /api/data and base comes here' });
});



module.exports = router;