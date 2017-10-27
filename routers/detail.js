var async = require('async');
var router = require('express').Router();
var config = require('../config');
var Logger = require('../lib/log');
var client = require("../lib/client");


function detailIndex(req, res) {
    client.do.getProductDetail(req.body, req, res, function (err, result) {
        if (err) return callback(err);
        Logger.info(result);
        return res.send(result);
    });
   
}

function selProductInvestor(req, res) {
    client.do.selProductInvestor(req.body, req, res, function (err, result) {
        if (err) return callback(err);
        Logger.info(result);
        return res.json(result);
    });
   
}


router.post('/', detailIndex);
router.post('/selProductInvestor', selProductInvestor);
module.exports = router;