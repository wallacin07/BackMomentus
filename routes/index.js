var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  console.log("ta funcionando");      // <-- aqui
  res.render('index');                // <-- ou: res.send('ok');
});

module.exports = router;