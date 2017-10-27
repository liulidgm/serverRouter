var async = require('async');
var _ = require('underscore');
var router = require('express').Router();
var laypage = require('laypage'); //分页插件
var config = require('../config');
var Logger = require('../lib/log');
var client = require("../lib/client");
var utils = require('../lib/utils');



/*获取登录状态*/
function getUserState(req, res) {
    client.do.getUserState(req.body, req, res, function (err, result) {
         if (err) return res.send({error: err});
        res.send(result);
    });
}



function orderCenter(req, res) {
    client.do.getMyTenderList(req.body, req, res, function (err, result) {
        if (err) return res.send({
            error: err
        });
        res.send(result);
    });
}


function orderCenterSelect(req, res) {
    client.do.getMyTenderList(req.body, req, res, function (err, result) {
        if (err) return res.send({
            error: err
        });
        res.send(result);
    });
}


function orderTotalMsg(req, res) {
    client.do.selPresonMsgToApp(req.body, req, res, function (err, result) {
        if (err) return res.send({
            error: err
        });
        res.send(result);
    });
}

function orderDetails(req, res) {
    client.do.orderDetails(req.body, req, res, function (err, result) {
        if (err) return res.send({
            error: err
        });
        res.send(result);
    });
}



function record(req, res) {
    client.do.dealRecord(req.body, req, res, function (err, result) {
        if (err) return res.send({
            error: err
        });
        res.send(result);
    });

}

//我的项目列表
function myProject(req, res) {
    client.do.myProject(req.body, req, res, function (err, result) {
        if (err) return res.send({
            error: err
        });
        res.send(result);
    });

}
//渲染项目table
function projectTable(req, res) {
    client.do.myProject(req.body, req, res, function (err, result) {
        if (err) return res.send({
            error: err
        });
        res.send(result);
    });
}
//编辑项目
function projectEdit(req, res) {
    client.do.projectDetail(req.body, req, res, function (err, result) {
        if (err) return res.send({
            error: err
        });
        res.send(result);

    });

}
//添加或修改项目介绍
function insertProInfo(req, res) {
    client.do.insertProInfo(req.body, req, res, function (err, result) {
        if (err) return res.send({
            error: err
        });
        res.send(result);
    });
}
//获取公共模块列表
function selIntroductionTemplate(req, res) {
    client.do.selIntroductionTemplate({}, req, res, function (err, result) {
        if (err) return res.send({
            error: err
        });
        res.send(result);
    })
}
//获取指定公共模块的详情信息
function selSingleIntroductionTemplate(req, res) {
    client.do.selSingleIntroductionTemplate(req.body, req, res, function (err, result) {
        if (err) return res.send({
            error: err
        });
        res.send(result);
    })
}
//保存项目模块信息
function insertModuleInfo(req, res) {
    client.do.insertModuleInfo(req.body, req, res, function (err, result) {
        if (err) return res.send({
            error: err
        });
        res.send(result);
    });
}

//删除模块信息
function deleteProjectInformation(req, res) {
    client.do.deleteProjectInformation(req.body, req, res, function (err, result) {
        if (err) return res.send({
            error: err
        });
        res.send(result);
    });
}
//删除项目进展
function deleteProjectProgress(req, res) {
    client.do.deleteProjectProgress(req.body, req, res, function (err, result) {
        if (err) return res.send({
            error: err
        });
        res.send(result);
    });
}

function addProgress(req, res) {
    client.do.addProgress(req.body, req, res, function (err, result) {
        if (err) return res.send({
            error: err
        });
        res.send(result);
    });
}

function getProInfoAndProgress(req, res) {
    client.do.projectDetail(req.body, req, res, function (err, result) {
        if (err) return res.send({
            error: err
        });
        res.send(result);
    });
}

function submitProject(req, res) {
    client.do.submitProject(req.body, req, res, function (err, result) {
        if (err) return res.send({
            error: err
        });
        res.send(result);
    });
}



function selSupportBankList(req, res) {
    client.do.selSupportBankList(req.body, req, res, function (err, result) {
        if (err) return res.send({
            error: err
        });
        return res.send(result);
    });
}

function queryBankCard(req, res) {
    client.do.queryBankCard(req.body, req, res, function (err, result) {
        if (err) return res.send({
            error: err
        });
        res.send(result);
    });
}


function setIntroducerMobile(req, res) {
    client.do.setIntroducerMobile(req.body, req, res, function (err, result) {
        if (err) return res.send({
            error: err
        });
        res.send(result);
    });
}


function bankCardManane(req, res) {
    client.do.bankCardManane(req.body, req, res, function (err, result) {
        if (err) return res.send({
            error: err
        });
       return res.json(result);
    });
}

function bankCardMananeSubmit(req, res) {
    client.do.bankCardMananeSubmit(req.body, req, res, function (err, result) {
        if (err) return res.send({
            error: err
        });
       return  res.json(result);
    });
}

function bankCardCancel(req, res) {
    client.do.bankCardCancel(req.body, req, res, function (err, result) {
        if (err) return res.send({
            error: err
        });
        res.send(result);
    });

}



function getInviteQR(req, res) {
    client.do.getInviteQR(req.body, req, res, function (err, result) {
        if (err) return res.send({
            error: err
        });
        res.send(result);
    });
}


function getInviteLink(req, res) {
    client.do.getInviteLink(req.body, req, res, function (err, result) {
        if (err) return res.send({
            error: err
        });
        res.send(result);
    });
}


function getLoginVerifyCode(req, res) {
    client.do.getLoginVerifyCode(req.body, req, res, function (err, result) {
        if (err) return res.send({
            error: err
        });
        Logger.info(result);
        return res.json(result);
    });
}

function loginVerifiedCode(req, res) {
    client.do.loginVerifiedCode(req.body, req, res, function (err, result) {
        if (err) return res.send({
            error: err
        });
        res.send(result);
    });
}

function getVerifyCode(req, res) {
    client.do.getVerifyCode(req.body, req, res, function (err, result) {
        if (err) return res.send({
            error: err
        });
        res.send(result);
    });
}

function checkMobile(req, res) {
    client.do.checkMobile(req.body, req, res, function (err, result) {
        if (err) return res.send({
            error: err
        });
        res.send(result);
    });

}

function loginOutVerifiedCode(req, res) {
    client.do.loginOutVerifiedCode(req.body, req, res, function (err, result) {
        if (err) return res.send({
            error: err
        });
        res.send(result);
    });
}

function saveNewUserPhone(req, res) {
    client.do.saveNewUserPhone(req.body, req, res, function (err, result) {
        if (err) return res.send({
            error: err
        });
        res.send(result);
    });
}

function useRetrievePwdSubmit(req, res) {
    client.do.useRetrievePwdSubmit(req.body, req, res, function (err, result) {
        if (err) return res.send({
            error: err
        });
        res.send(result);
    });
}

function saveNewPayPassword(req, res) {
    client.do.saveNewPayPassword(req.body, req, res, function (err, result) {
        if (err) return res.send({
            error: err
        });
        res.send(result);
    });
}

function sendUserEmail(req, res) {
    client.do.sendUserEmail(req.body, req, res, function (err, result) {
        if (err) return res.send({
            error: err
        });
        res.send(result);
    });
}

function updNewPayPassword(req, res) {
    client.do.updNewPayPassword(req.body, req, res, function (err, result) {
        if (err) return res.send({
            error: err
        });
        res.send(result);
    });
}

function useRetrievePwd(req, res) {
    client.do.useRetrievePwd(req.body, req, res, function (err, result) {
        if (err) return res.send({
            error: err
        });
        res.send(result);
    });
}

function updRetrievePwd(req, res) {
    client.do.updRetrievePwd(req.body, req, res, function (err, result) {
        if (err) return res.send({
            error: err
        });
        res.send(result);
    });
}


function dealRecord(req, res) {
    client.do.dealRecord(req.body, req, res, function (err, result) {
        if (err) return res.send({
            error: err
        });
        res.send(result);
    });
}


function uploadImage(req, res) {
    client.do.uploadImage(req.body, req, res, function (err, result) {
        if (err) return res.send({
            error: err
        });
        res.send(result);
    });
}

function sendShortMessage(req, res) {
    client.do.sendShortMessage(req.body, req, res, function (err, result) {
        if (err) return res.send({
            error: err
        });
        res.send(result);
    });
}

function bindUserEmail(req, res) {
    client.do.bindUserEmail(req.body, req, res, function (err, result) {
        if (err) return res.send({
            error: err
        });
        res.send(result);
    });
}

//实名绑卡
function renderRealName(req, res) {
    client.do.selSupportBankList({}, req, res, function (err, result) {
        if (err) return res.send({
            error: err
        });
        res.send(result);
    });

}

//绑卡
function renderBindCard(req, res) {
    client.do.selSupportBankList({}, req, res, function (err, result) {
        if (err) return res.send({
            error: err
        });
        res.send(result);
    });
}
//个人资料
function userInfo(req, res) {
    client.do.queryPersonalInfo({}, req, res, function (err, result) {
        if (err) return res.send({
            error: err
        });
        res.send(result);
    });
}


function realNameAuthenty(req, res) {req.body
    client.do.realNameAuthenty(req.body, req, res, function (err, result) {
        if (err) return res.send({error: err});
        res.send(result);
    });
}

function isAuthentica(req, res) {
    client.do.isAuthentica({}, req, res, function (err, result) {
        if (err) return res.send({error: err});
        return res.json(result);
    });
}


function PCselMessageList(req, res) {
    client.do.PCselMessageList(req.body, req, res, function (err, result) {
        if (err) return res.send({error: err});
        return res.json(result);
    });
}


// =====================================
function longzhen(req, res) {
    client.do.longzhenPro(req.body, req, res, function (err, result) {
        if (err) return res.send({error: err});
        return res.json(result);
    });
}


router.post('/getUserState',getUserState);
router.post('/realNameAuthenty',realNameAuthenty);
//我的项目
router.post('/myProject', myProject);
router.post('/projectTable', projectTable);
router.post('/projectEdit', projectEdit);
router.post('/addProgress', addProgress);
router.post('/insertProInfo', insertProInfo);
router.post('/insertModuleInfo', insertModuleInfo);
router.post('/getProInfoAndProgress', getProInfoAndProgress);
router.post('/submitProject', submitProject);
router.post('/deleteProjectInformation', deleteProjectInformation);
router.post('/deleteProjectProgress', deleteProjectProgress);
router.post('/selIntroductionTemplate', selIntroductionTemplate);
router.post('/selSingleIntroductionTemplate', selSingleIntroductionTemplate);

//绑定银行卡
router.post('/bankCardManane', bankCardManane);
router.post('/bankCardMananeSubmit', bankCardMananeSubmit);
router.post('/bankCardCancel', bankCardCancel);
router.post('/selSupportBankList', selSupportBankList)

//我的邀请
router.post('/queryBankCard', queryBankCard);
router.post('/setIntroducerMobile', setIntroducerMobile);
router.post('/getInviteQR', getInviteQR); //获取邀请二维码
router.post('/getInviteLink', getInviteLink); //获取邀请信息

//基本信息
router.post('/userInfo', userInfo);
router.post('/uploadImage', uploadImage);
router.post('/getLoginVerifyCode', getLoginVerifyCode); //登录内获取验证码
router.post('/loginVerifiedCode', loginVerifiedCode); //登录内验证验证码
router.post('/getVerifyCode', getVerifyCode); //登录外获取验证码
router.post('/loginOutVerifiedCode', loginOutVerifiedCode); //登录外验证验证码
router.post('/saveNewUserPhone', saveNewUserPhone); //保存手机号
router.post('/updRetrievePwd', updRetrievePwd); //修改登录密码
router.post('/updNewPayPassword', updNewPayPassword); //修改支付密码
router.post('/saveNewPayPassword', saveNewPayPassword); //忘记支付密码保存
router.post('/sendUserEmail', sendUserEmail) //绑定邮箱
router.post('/sendShortMessage', sendShortMessage) //获取中证短信验证码
router.post('/bindUserEmail', bindUserEmail) //绑定邮箱

//订单中心
router.post('/orderTotalMsg', orderTotalMsg);
router.post('/orderCenter', orderCenter);
router.post('/orderCenterSelect', orderCenterSelect);
router.post('/orderDetails', orderDetails);

router.post('/realName', renderRealName); //实名绑卡
router.post('/bindCard', renderBindCard); //实名绑卡
router.post('/checkMobile',checkMobile)/*校验手机号*/

router.post('/isAuthentica', isAuthentica); //判断用户风险评测 和 网银签约状态
router.post('/PCselMessageList', PCselMessageList); //判断用户风险评测 和 网银签约状态

// ============
router.post('/longzhen', longzhen); //龙臻项目协议

module.exports = router;