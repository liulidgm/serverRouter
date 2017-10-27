var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var cookieParser = require('cookie-parser');
var useragent = require('express-useragent');



var app = new express();

var appFilter = require('./controller/appfilter');
var request = require('request');
var config = require('./config');
// req.body
app.use(bodyParser.json());
app.use(useragent.express());
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: false}));

// set port
app.set('port', config.port);

/*打印ip信息。appFilter---3种方式use。之一*/
app.use(appFilter.filter());
/*重写render，渲染常用数据。appFilter---3种方式use。之二*/
app.use(appFilter.render);


//登陆
app.use('/login',require('./routers/login'));


app.use('/',require('./routers/index'));



// 项目详情
app.use('/detail',require('./routers/detail'));
// 注册
app.use('/register',require('./routers/register'));
// 订单
app.use('/order',require('./routers/order'));

app.use('/index',require('./routers/index'));

app.use('/product',require('./routers/product'));

app.use('/account',require('./routers/account'));


app.use('/notice',require('./routers/notice'));


app.use('/purchase',require('./routers/purchase'));

app.use('/project',require('./routers/project'));

app.use("/build", express.static('build'));

app.use("/static", express.static('build/static'));
app.use("/upload",require('./routers/upload'));
//静态化图片地址
app.use('/app/data', express.static(config.upload));
app.use("/staticImg", express.static('staticImg'));

appFilter.routeCommonUgly(app);

module.exports = app;
