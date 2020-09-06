var express = require('express');
var router = express.Router();
var api = require('./contorller');

router.post('/insert', api.insert);
router.get('/fetch', api.fetch);
// router.put();
// router.delete();

module.exports = router;