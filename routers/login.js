//一下require的文件是实例，不需要的删掉
var async = require('async');
var _ = require('underscore');
var router = require('express').Router();
var config = require('../config');
var Logger = require('../lib/log');
var client = require("../lib/client");
/*router list*/

function login(req, res) {
    client.do.userLogin(req.body, req, res, function (err, result) {
        if (err) return res.send({
            error: err
        });
        Logger.info(result);
        res.json(result);
    });
}

function userLogin(req, res) {
    client.do.userLogin(req.body, req, res, function (err, result) {
        if (err) return res.send({
            error: err
        });
        Logger.info(result);
        res.json(result);
    });
}


function signOut(req, res) {
    client.do.signOut({}, req, res, function (err, result) {
        if (err) return res.send({
            error: err
        });
        return res.send(result);
    });
}

function forgetPwd(req, res) {
    res.render('login/RetrievePwd');
}

function useRetrievePwdSubmit(req, res) {
    Logger.info("忘记密码提交")
    client.do.useRetrievePwdSubmit(req.body, req, res, function (err, result) {
        if (err) return res.send({
            error: err
        });
        Logger.info(result);
        return res.send(result);
    });
}

function retrievePwd(req, res) {
    res.render('login/RetrievePwd');
}

function useRetrievePwd(req, res) {
    Logger.info("重置密码第一步,手机号验证")
    client.do.useRetrievePwd(req.body, req, res, function (err, result) {
        if (err) return res.send({
            error: err
        });
        Logger.info(result);
        return res.send(result);
    });
}

router.post('/', login);



router.post('/userLogin', userLogin);
router.post('/signOut', signOut);

router.get('/forgetPwd', forgetPwd);
router.post('/retrievePwd', retrievePwd) //忘记密码页面
router.post('/useRetrievePwdSubmit', useRetrievePwdSubmit)


router.post('/useRetrievePwd', useRetrievePwd) //重置密码第一步,手机号验证


module.exports = router;