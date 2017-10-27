/**
 * Created by Me on 2017/4/4.
 */
var async = require('async');
var _ = require('underscore');
var router = require('express').Router();
var config = require('../config');
var Logger = require('../lib/log');
var tplFormat = require('../lib/utils');
var client = require("../lib/client");


//认证投资人
function renderCertify(req, res) {
    return res.render('purchase/certified', {
        idCard: req.query.idCard,
        realName: req.query.realName,
        productId: req.query.productId,
        money: req.query.money,
        proId: req.query.proId,
        platformProjectsFullNm: req.query.platformProjectsFullNm,
        minAmount: req.query.minAmount,
        allotmentShares: req.query.allotmentShares,
        riskLvl: req.query.riskLvl,
        dvidMd: req.query.dvidMd,
        proLev: req.query.proLev
    });
}


//渲染购买页面
function initOrderInfo(req, res) {
    client.do.initOrderInfo(req.body, req, res, function (err, result) {
        if (err) return res.send({error: err});
        return res.json(result);
    });
}

//判断时间是否过期
function overTimeJudge(req, res) {
    client.do.overTimeJudge(req.body, req, res, function (err, result) {
        if (err) return res.send({error: err});
        return res.json(result);
    });
}

//用户创建订单
function createOrder(req, res) {
    client.do.createOrder(req.body, req, res, function (err, result) {
        if (err) return res.send({error: err});
        return res.json(result);
    });
}


//查询用户订单待支付信息
function waitOrderInfo(req, res) {
    client.do.waitOrderInfo(req.body, req, res, function (err, result) {
        if (err) return res.send({error: err});
        return res.json(result);
    });
}

//订单支付发送短信验证码
function sendShortMessage(req, res) {
    client.do.sendShortMessage(req.body, req, res, function (err, result) {
        if (err) return res.send({error: err});
        return res.json(result);
    });
}


// //确认购买
function payOrderConfirm(req, res) {
    client.do.payOrderConfirm(req.body, req, res, function (err, result) {
        if (err) return res.send({
            error: err
        });
        return res.send(result);
    });
}
//购买发送验证码
function sendSmCode(req, res) {
    client.do.buySendSmCode(req.body, req, res, function (err, result) {
        if (err) return res.send({
            error: err
        });
        return res.send(result);
    });
}
//购买失败
function renderInvestFail(req, res) {
    // res.render('purchase/purchaseFail', {});
    res.render('purchase/purchaseFail', {
        msg: req.query.msg
    });
}

//购买成功
function renderInvestSuccess(req, res) {
    res.render('purchase/purchaseSuccess', {
        format: tplFormat,
        money: req.query.money
    });
}
//查询银行卡限额
function BankLimit(req, res) {
    client.do.selBankQuota(req.body, req, res, function (err, result) {
        return res.render('purchase/purchaseLimit', {
            BankQuotaList: result.BankQuotaList
        });
    });
}
//查询银行卡列表
function selBankList(req, res) {
    client.do.selBankList({}, req, res, function (err, result) {
        if (err) return res.send({
            error: err
        });
        return res.render('purchase/bindBankCard', {
            bankList: result.bankList
        });
    });
}


//设置投资人认证
function setCertifiedInvestor(req, res) {
    client.do.setCertifiedInvestor(req.body, req, res, function (err, result) {
        if (err) return res.send({
            error: err
        });
        return res.send(result);
    });
}

//我要融资
function addFinancing(req, res) {
    client.do.addFinancing(req.body, req, res, function (err, result) {
        if (err) return res.send({
            error: err
        });
        return res.json(result);
    });
}


router.post('/initOrderInfo',initOrderInfo);//初始化购买页面
router.post('/overTimeJudge',overTimeJudge);//初始化购买页面
router.post('/createOrder',createOrder);//用户创建订单
router.post('/waitOrderInfo',waitOrderInfo);//用户创建订单
router.post('/sendShortMessage',sendShortMessage);//订单支付发送验证码


router.get('/certify', renderCertify); //投资人认证
router.post('/setCertifiedInvestor', setCertifiedInvestor); //设置投资人认证

router.post('/payOrderConfirm', payOrderConfirm);
router.post('/BankLimit', BankLimit);
router.post('/sendSmCode', sendSmCode);
router.post('/bindCard', selBankList);

router.get('/purchaseSuccess', tplFormat.checkRedirect, renderInvestSuccess);
router.get('/purchaseFail', tplFormat.checkRedirect, renderInvestFail);

router.post('/addFinancing', addFinancing);

module.exports = router;