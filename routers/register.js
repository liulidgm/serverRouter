//一下require的文件是实例，不需要的删掉
var async = require('async');
var _ = require('underscore');
var router = require('express').Router();
var config = require('../config');
var Logger = require('../lib/log');
var client = require("../lib/client");
var utils = require("../lib/utils");
/*router list*/



function checkMobile(req, res) {/*手机号验证*/
    client.do.checkMobile(req.body, req, res, function (err, result) {
        if (err) return res.send({error: err});
        Logger.info(result);
        return res.send(result);
    });
}

function checkRegistPassword(req, res) {
    client.do.checkRegistPassword(req.body, req, res, function (err, result) {
        if (err) return res.send({error: err});
        Logger.info(result);
        return res.send(result);
    });
}

function checkIntroducerPhone(req, res) {
    client.do.checkIntroducerPhone(req.body, req, res, function (err, result) {
        if (err) return res.send({error: err});
        Logger.info(result);
        return res.send(result);
    });
}

function registSubmit(req, res) {
    client.do.registSubmit(req.body, req, res, function (err, result) {
        if (err) return res.send({error: err});
        Logger.info(result);
        return res.send(result);
    });
}

function CheckBankCode(req, res) {
    client.do.CheckBankCode(req.body, req, res, function (err, result) {
        if (err) return res.send({error: err});
        Logger.info(result);
        return res.send(result);
    });
}
function registNextConfirm(req, res) {
    client.do.registNextConfirm(req.body, req, res, function (err, result) {
        if (err) return res.send({error: err});
        Logger.info(result);
        return res.send(result);
    });
}

function getRiskQuestions(req, res) {
    client.do.getRiskQuestions({}, req, res, function (err, result) {
        if (err) return res.send({error: err});
        Logger.info(result);
        return res.send(result);
    });
}



function newRiskSubmit(req, res) {
    client.do.newRiskSubmit(req.body, req, res, function (err, result) {
        if (err) return res.send({error: err});
        Logger.info(result);
        return res.json(result);
    });
}

function getVerifyCodeToImg(req, res) {
    client.do.getVerifyCodeToImg(req.body, req, res, function (err, result) {
        if (err) return res.send({error: err});
        Logger.info(result);
        return res.send(result);
    });
}

function getImgVerifyCode(req, res) {
    client.do.getImgVerifyCode(req.body, req, res, function (err, result) {
        if (err) return res.send({error: err});
        Logger.info(result);
        return res.send(result);
    });
}

function loginOutVerifiedCode(req, res) {
    Logger.info('登录');
    client.do.loginOutVerifiedCode(req.body, req, res, function (err, result) {
        Logger.info('登录外验证');
        if (err) return res.send({error: err});
        Logger.info(result);
        return res.send(result);
    });
}

function selSupportBank(req, res) {
    client.do.selSupportBank(req.body, req, res, function (err, result) {
        if (err) return res.send({error: err});
        Logger.info(result);
        return res.json(result);
    });
}

//实名绑卡反填信息
function initRegistBank(req, res) {
    client.do.initRegistBank(req.body, req, res, function (err, result) {
        if (err) return res.send({error: err});
        Logger.info(result);
        return res.send(result);
    });
}

//绑卡反填信息
function selBankManageMsg(req, res) {
    client.do.selBankManageMsg(req.body, req, res, function (err, result) {
        if (err) return res.send({error: err});
        Logger.info(result);
        return res.json(result);
    });
}


router.post('/checkMobile', checkMobile)
router.post('/checkRegistPassword', checkRegistPassword)
router.post('/checkIntroducerPhone', checkIntroducerPhone)
router.post('/registSubmit', registSubmit)
router.post('/CheckBankCode', CheckBankCode)
router.post('/registNextConfirm', registNextConfirm);
router.post('/getRiskQuestions', getRiskQuestions);
router.post('/newRiskSubmit', newRiskSubmit)
router.post('/getVerifyCodeToImg', getVerifyCodeToImg)
router.post('/getImgVerifyCode', getImgVerifyCode)
router.post('/selSupportBank', selSupportBank)
router.post('/initRegistBank', initRegistBank);
router.post('/selBankManageMsg', selBankManageMsg);
//获取用户信息
router.post('/loginOutVerifiedCode', loginOutVerifiedCode);//登录外验证验证码





module.exports = router;
