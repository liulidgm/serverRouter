var async = require('async');
var router = require('express').Router();
var config = require('../config');
var Logger = require('../lib/log');
var client = require("../lib/client");

function PCmyProject(req, res) {
    client.do.PCmyProject(req.body, req, res, function (err, result) {
        if (err) return res.send({error: err});
        return res.send(result);
    });
}
function PCprojectDetail(req,res){
   client.do.PCprojectDetail(req.body, req, res, function (err, result) {
        if (err) return res.send({error: err});
        return res.send(result);
    });
}


function PCsubmitMyProjectDes(req, res) {
    client.do.PCsubmitMyProjectDes(req.body, req, res, function (err, result) {
        if (err) return res.send({error: err});
        Logger.info(result);
        return res.send(result);
    });
}


function PCqueryMyProject(req, res) {
    client.do.PCqueryMyProject(req.body, req, res, function (err, result) {
        if (err) return res.send({error: err});
        Logger.info(result);
        return res.send(result);
    });
}

function selIntroductionTemplate(req, res) {
    client.do.selIntroductionTemplate(req.body, req, res, function (err, result) {
        if (err) return res.send({error: err});
        Logger.info(result);
        return res.send(result);
    });
}

function selSingleIntroductionTemplate(req, res) {
    client.do.selSingleIntroductionTemplate(req.body, req, res, function (err, result) {
        if (err) return res.send({error: err});
        Logger.info(result);
        return res.send(result);
    });
}
function PCinsertProjectInformation(req, res) {
    client.do.PCinsertProjectInformation(req.body, req, res, function (err, result) {
        if (err) return res.send({error: err});
        Logger.info(result);
        return res.send(result);
    });
}
function submitMyProject(req, res) {
    client.do.submitMyProject(req.body, req, res, function (err, result) {
        if (err) return res.send({error: err});
        Logger.info(result);
        return res.send(result);
    });
}
/*插入进展*/
function insertProjectProgress(req,res){
    client.do.insertProjectProgress(req.body,req,res,function(err,result){
        if (err) return res.send({error: err});
        return res.send(result);
    })
}
/*查询进展*/
function selMyProjectProgress(req,res){
    client.do.selMyProjectProgress(req.body,req,res,function(err,result){
        if (err) return res.send({error: err});
        return res.send(result);
    })
}
function PCdeleteProjectInformation(req, res) {
    client.do.PCdeleteProjectInformation(req.body, req, res, function (err, result) {
        if (err) return res.send({error: err});
        Logger.info(result);
        return res.send(result);
    });
}
function MyProjectModularSort(req, res) {
    client.do.MyProjectModularSort(req.body, req, res, function (err, result) {
        if (err) return res.send({error: err});
        Logger.info(result);
        return res.send(result);
    });
}

function PCprojectDetailModular(req, res) {
    client.do.PCprojectDetailModular(req.body, req, res, function (err, result) {
        if (err) return res.send({error: err});
        Logger.info(result);
        return res.send(result);
    });
}
//我的项目
router.post('/PCmyProject', PCmyProject);
router.post('/PCprojectDetail',PCprojectDetail);
router.post('/PCsubmitMyProjectDes',PCsubmitMyProjectDes)
router.post('/PCqueryMyProject',PCqueryMyProject)
router.post('/selIntroductionTemplate',selIntroductionTemplate)
router.post('/selSingleIntroductionTemplate',selSingleIntroductionTemplate)
router.post('/PCinsertProjectInformation',PCinsertProjectInformation)
router.post('/submitMyProject',submitMyProject)
router.post('/PCdeleteProjectInformation',PCdeleteProjectInformation)
router.post('/insertProjectProgress',insertProjectProgress)
router.post('/selMyProjectProgress',selMyProjectProgress)
router.post('/MyProjectModularSort',MyProjectModularSort)
router.post('/PCprojectDetailModular',PCprojectDetailModular)

module.exports = router;
