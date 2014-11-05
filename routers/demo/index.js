/**
 * Created by mdemo on 14/11/4.
 */
var app = require('../../app/demo');

var express = require('express');
var router = express.Router();
router.get('/', app.models.pageServer.demo);

module.exports = router;
