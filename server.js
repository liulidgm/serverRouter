var fs = require('fs');
var file = require('./lib/file.js');
var config = require('./config');
process.on('uncaughtException', function(err) {
    console.log('-----------------------')
    console.log(err.stack);
    console.log('-----------------------')
});
//自动创建上传文件夹
if (!fs.existsSync(config.upload)) fs.mkdirSync(config.upload);
//自动创建日志文件夹
if (!fs.existsSync(config.logdir)) file.mkdirp(config.logdir);
var app = require('./app');
require('http').createServer(app).listen(app.get('port'), function(err) {
    console.log('Express server listening on port: ' + app.get('port'));
});