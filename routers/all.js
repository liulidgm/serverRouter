
var async = require('async');
var _ = require('underscore');
var router = require('express').Router();
var config = require('../config');
var Logger = require('../lib/log');
var client = require("../lib/client");

router.use(function(req,res){
    var url = req.path.substring(1) 
	Logger.info(url);
    client.do[url](req.body, req, res, function (err, result) {
        if (err) return res.send({
            error: err
        });
       	Logger.info('---------------------------------------');
        Logger.info(result);
        res.send(result);
    });
});


module.exports = router;