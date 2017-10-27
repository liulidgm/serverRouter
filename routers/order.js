var async = require('async');
var router = require('express').Router();
var config = require('../config');
var Logger = require('../lib/log');
var client = require("../lib/client");

function getMyTenderList(req, res) {
    Logger.info(req.body);
    client.do.getMyTenderList(req.body, req, res, function (err, result) {
        if (err) return res.send({error: err});
        return res.send(result);
    });
}
function orderDetails(req,res){
   client.do.orderDetails(req.body, req, res, function (err, result) {
        if (err) return res.send({error: err});
        return res.send(result);
    });
}


function dealRecord(req, res) {
    client.do.dealRecord(req.body, req, res, function (err, result) {
        if (err) return res.send({error: err});
        Logger.info(result);
        return res.send(result);
    });
}

//订单中心撤单
function returnOrder(req, res) {
    client.do.returnOrder(req.body, req, res, function (err, result) {
        if (err) return res.send({
            error: err
        });
        res.send(result);
    });
}

function delCloseOrder(req, res) {
    client.do.delCloseOrder(req.body, req, res, function (err, result) {
        if (err) return res.send({
            error: err
        });
        res.send(result);
    });
}

function getLoginVerifyCodeToBuy(req, res) {
    client.do.getLoginVerifyCodeToBuy(req.body, req, res, function (err, result) {
        if (err) return res.send({
            error: err
        });
        res.send(result);
    });
}


function loginVerifiedCodeToBuy(req, res) {
    client.do.loginVerifiedCodeToBuy(req.body, req, res, function (err, result) {
        if (err) return res.send({
            error: err
        });
        res.send(result);
    });
}


//订单中心
router.post('/getMyTenderList', getMyTenderList);
router.post('/orderDetails',orderDetails)
router.post('/dealRecord',dealRecord)
router.post('/returnOrder',returnOrder)
router.post("/delCloseOrder",delCloseOrder)
router.post("/getLoginVerifyCodeToBuy",getLoginVerifyCodeToBuy)
router.post("/loginVerifiedCodeToBuy",loginVerifiedCodeToBuy)

module.exports = router;
