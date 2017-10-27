//一下require的文件是实例，不需要的删掉
var async = require('async');
var _ = require('underscore');
var router = require('express').Router();
var config = require('../config');
var Logger = require('../lib/log');
var client = require("../lib/client");  
/*router list*/

function demo(req,res){
	//req.render()
}
//demod
router.get('/demo', demo);

module.exports = router;