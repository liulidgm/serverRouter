var async = require('async');
var _ = require('underscore');
var router = require('express').Router();
var config = require('../config');
var Logger = require('../lib/log');
var client = require("../lib/client");
var utils = require('../lib/utils');



function getHomePageNotice(req, res) {/*获取首页列表*/
    client.do.getHomePageNotice({}, req, res, function (err, result) {
        if (err) return callback(err);
        res.send(result);
    });
   
}


function getNoticeList(req, res) {/*获取公告列表*/
    client.do.getNoticeList(req.body, req, res, function (err, result) {
         if (err) return res.send({error: err});
        res.send(result);

    });
}

function getNoticeDetail(req, res) {/*获取公告列表*/
    client.do.getNoticeDetail(req.body, req, res, function (err, result) {
         if (err) return res.send({error: err});
        res.send(result);

    });
}





router.post('/getHomePageNotice', getHomePageNotice);
router.post('/getNoticeList', getNoticeList);
router.post('/getNoticeDetail', getNoticeDetail);



module.exports = router;