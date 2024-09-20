var express = require('express');
var router = express.Router();


router.get('/', (req, res) => {
 const year =  new Date().getFullYear();
 res.json({ now: year });
});


module.exports = router