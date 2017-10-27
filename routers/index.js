var async = require('async');
var router = require('express').Router();
var config = require('../config');
var Logger = require('../lib/log');
var client = require("../lib/client");



function indexBanner(req, res) {
    client.do.bannerList({}, req, res, function (err, result) {
        if (err) return callback(err);
        res.send(result);
    });
   
}





router.post('/indexBanner', indexBanner);

module.exports = router;