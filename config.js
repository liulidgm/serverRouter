var libDate = require('./lib/date');
var path = require('path');
var config = {
    port: 8882,
    backendDomain: { /*后端接口地址*/
        // api:'http://10.10.9.125:8080/'  /*高明*/
        // api:'http://10.10.9.116:8080/'  /*LY*/
        api:'http://10.10.9.50:8082/'  /*DF*/
        // api:'http://101.37.3.219:8090/'  /*测试*/
    },
    logdir: '/app/log/yysc/',
    winston_key: 'winston',
    winston: {
        exitOnError: false,
        console: {
            colorize: true,
            level: 'debug',
            handleExceptions: true,
            humanReadableUnhandledException: true,
            timestamp: function () {
                return libDate.formatDate(new Date(), 'yyyy-MM-dd hh:mm:ss.S');
            }
        },
        dailyRotateFile: {
            filename: '/app/log/yysc/winston',
            datePattern: '.yyyy-MM-dd.log',
            level: 'debug',
            json: false,
            handleExceptions: true,
            humanReadableUnhandledException: true,
            timestamp: function () {
                return libDate.formatDate(new Date(), 'yyyy-MM-dd hh:mm:ss.S');
            }
        }
    },
    upload: '/app/data'
    
};
module.exports = config;
