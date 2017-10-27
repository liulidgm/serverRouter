var async = require('async');
var _ = require('underscore');
var router = require('express').Router();
var config = require('../config');
var Logger = require('../lib/log');
var tplFormat = require('../lib/utils');
var client = require("../lib/client");
/*router list*/

//初始化产品列表
function renderProductList(req, res) {
    client.do.getProductList({}, req, res, function (err, result) {
        if (err) return res.send({error: err});
        res.render('product/productList', {
            format: tplFormat,
            industryList: result.industryList,
            productList: result.initList,
            bannerList: result.bannerList,
            pageTotal: result.totalNumPages,
            totalNum: result.totalCount
        });
    });
}

//点击全部初始化产品列表
function initProList(req, res) {
    client.do.getProductList({}, req, res, function (err, result) {
        return res.render('product/listTpl', {
            'format': tplFormat, 'productList': result.initList, pageTotal: result.totalNumPages,
            totalNum: result.totalCount
        });
    });
}


//其他页面进入时获取code码
function prloListCode(req, res) {
    client.do.getProductList({}, req, res, function (err, result) {
        return res.send(result);
    });
}

//产品列表页条件筛选
function selPcProductList(req, res) {
     client.do.selPcProductList(req.body, req, res, function (err, result) {
        if (err) return res.send({error: err});
        return res.send(result);
    });

}
// 产品详情页渲染
function renderProDetail(req, res) {
    client.do.productDetail(req.query, req, res, function (err, result) {
        if (err) return res.send({error: err});
        res.render('product/product', {
            format: tplFormat, dataBox: req.query,
            adjacentProduct: result.adjacentProduct,
            detail: result.productDetailMap,
            isAttestation: result.isAttestation,
            proInfo: req.proInfo,
            risk: result,
            productIntroduce: result.productDetailMap.productIntroduce
        });
    });
}

// 点击产品详情页渲染
function renderDetail(req, res) {
    client.do.productDetail(req.body, req, res, function (err, result) {
        if (err) return res.send({error: err});
        res.render('product/detail', {
            format: tplFormat,
            detail: result.productDetailMap,
            isAttestation: result.isAttestation,
            risk: result,
            productIntroduce: result.productDetailMap.productIntroduce
        });
    });
}

// 产品详情页支持者
function renderProProCast(req, res) {
    client.do.ProductInvestor(req.body, req, res, function (err, result) {
        if (err) return res.send({error: err});
        return res.render('product/productCast', {list: result.produtInvestor, result: result});
    });
}


// 产品详情页支持者
function moreProProCast(req, res) {
    client.do.ProductInvestor(req.body, req, res, function (err, result) {
        if (err) return res.send({error: err});
        return res.send({result: result});
    });
}

// 产品详情页项目进度
function renderProProgress(req, res) {
    client.do.productDetail(req.body, req, res, function (err, result) {
        if (err) return res.send({error: err});
        return res.render('product/productProgress', {
            format: tplFormat,
            list: result.productDetailMap.productIntroduce
        });
    });
}

//判断当前操作路径  认证投资人  购买  风险提示
function justify(req, res) {
    client.do.selCertifiedInvestor(req.body, req, res, function (err, result) {
        if (err) return res.send({error: err});
        return res.send({
            format: tplFormat,
            productLvl: req.body.proRiskLvl,
            BankQuotaList: result.BankQuotaList,
            userLvl: result.userLvl,
            list: result.proList,
            risk: result
        });
    });
}


//认购风险提示
function renderRiskTip(req, res) {
    client.do.initBuy(req.body, req, res, function (err, result) {
        if (err) return res.send({error: err});
        return res.send({
            format: tplFormat,
            productLvl: req.body.proRiskLvl,
            BankQuotaList: result.BankQuotaList,
            userLvl: result.userLvl,
            list: result.proList,
            risk: result
        });
    });
}

//风险提示页面
function renderRiskPump(req, res) {
    client.do.selCertifiedInvestor(req.query, req, res, function (err, result) {
        if (err) return res.send({error: err});

        return res.render('product/riskPump', {
            format: tplFormat,
            productLvl: JSON.stringify(result.proLvl),
            userLvl: JSON.stringify(result.userLvl),
            list: result.proList,
            money: req.query.money,
            dataBox: req.query
        });
    });
}

//状态检查
function checkState(req, res) {
    client.do.checkState({}, req, res, function (err, result) {
        if (err) return res.send({error: err});
        return res.send({
            data: result,
            success: true
        });
    });
}
// router.use(tplFormat.checkLogin);
// router.use(tplFormat.checkRealname);
// router.use(tplFormat.checkRisk);
// 初始化产品列表页
router.get('/', renderProductList);
//点击全部初始化
router.post('/initProList', initProList);

// 产品列表页条件筛选
router.post('/selPcProductList', selPcProductList);
// 产品详情页渲染
router.post('/detailC', tplFormat.returnJson, renderDetail);
router.post('/detail', tplFormat.returnJson, renderProDetail);
router.get('/detail', renderProDetail);
// 认购风险提示
router.post("/justify", tplFormat.returnJson, justify);
router.post("/buy", tplFormat.returnJson, renderRiskTip);
// 推荐产品
router.get("/riskPump", tplFormat.returnJson, renderRiskPump);
// 产品详情页支持者
router.post("/productCast", tplFormat.returnJson, renderProProCast);
router.post("/moreCast", tplFormat.returnJson, moreProProCast);
// 产品详情页项目进度
router.post("/productProgress", tplFormat.returnJson, renderProProgress);
// 其他页面进入时获取code
router.post("/prloListCode", tplFormat.returnJson, prloListCode);


module.exports = router;