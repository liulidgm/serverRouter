var config = require('../config');
var Logger = require('../lib/log');
var _ = require('underscore');
//检查登录
exports.returnJson = function (req, res, next) {
    Logger.info('异步请求，返回json');
    if (req.user.code == ' ' || !req.user || !req.user.mobile) {
        req.user = {};
        return res.send({goto: '/login/login'});
    }
    return next();
}

exports.checkRedirect = function (req, res, next) {
    var userName = req.user && req.user.userName;
    var mobile = req.user && req.user.mobile;
    var code = req.user && req.user.code;
    if (req.user.mobile) {
        if (code == '998') {
            res.redirect('/register/register?type=2');//去实名绑卡
        } else if (code == '997') {
            res.redirect('/register/register?type=3');//去风险评测
        } else {
            next();
        }
    } else {
        req.user = {};
        res.redirect('/login/login');
    }
};

// exports.checkLogin = function (req, res, next) {
//     Logger.info('node登录验证验证');
//     if (req.user.code == '999' || !req.user || !req.user.mobile) {
//         if (req.body.replace || req.query.replace) return res.send({goto: '/login/login'});
//         //确定进入登录了，本地user信息要清掉
//         req.user = {};
//         return res.redirect('/login/login');
//     }
//     return next();
// }
//
// exports.checkRealname = function (req, res, next) {
//     Logger.info('进入实名验证');
//     Logger.info(req.user);
//     var userName = req.user && req.user.userName;
//     var mobile = req.user && req.user.mobile;
//     if (mobile) {
//         if (req.user.code == '998') {
//             res.redirect('/register/register?type=2'); //去实名绑卡
//         } else {
//             next();
//         }
//     } else {
//         req.user = {};
//         res.redirect('/login/login');
//     }
// }
//
// exports.checkRisk = function (req, res, next) {
//     var userName = req.user && req.user.userName;
//     var mobile = req.user && req.user.mobile;
//     if (mobile) {
//         if (req.user.code == '997') {
//             res.redirect('/register/register?type=3'); //去风险评测
//         } else {
//             next();
//         }
//     } else {
//         req.user = {};
//         res.redirect('/login/login');
//     }
// }


/*
 *分页处理
 */
exports.paging = function (total, pageIndex, pageSize) {
    var result = {
        total: 0,
        pageIndex: 0,
        pageSize: 0,
        pageCount: 0
    };
    if (!total) return result;

    result = {
        total: parseInt(total),
        pageIndex: parseInt(pageIndex),
        pageSize: parseInt(pageSize) || 10
    };

    result.pageCount = parseInt(Math.ceil(total / result.pageSize));

    return result;

};

/*
 *分页list
 */
exports.pagingList = function (list, pageIndex, pageSize) {
    var total = list && list.length || 0;
    var result = {
        total: total,
        pageIndex: 0,
        pageSize: 0,
        pageCount: 0
    };
    if (!total) return result;

    result = {
        total: parseInt(total),
        pageIndex: parseInt(pageIndex),
        pageSize: parseInt(pageSize) || 10
    };
    result.pageCount = parseInt(Math.ceil(total / result.pageSize));
    //data
    result.data = list.slice(result.pageIndex * result.pageSize, (result.pageIndex + 1) * result.pageSize)
    return result;
};

exports.saveUserInfoAsLogined = function (req, res, userInfo) {
    req.session.user = (userInfo && userInfo.mobile && req.session.user && req.session.user.mobile == userInfo.mobile ? _.extend(req.session.user, userInfo) : userInfo);
    req.session.apicookie = res.getHeader("set-cookie");
    // res.cookie('login', true, {
    //     maxAge: config.sessionconfig.cookie.maxAge,
    //     domain: config.sessionconfig.cookie.domain,
    //     path: '/'
    // });
    // req.session.save();
};

/*
 * 将数据库中month和day转换成中文
 */
exports.en2zh = function (str) {
    return str == 'month' ? '个月' : str == 'day' ? '天' : '';
}

/*
 * 显示手机号
 */
exports.showphone = function (phone) {
    return phone && phone.length == 11 ? phone.substring(phone.length - 2, phone.length) + "******" + phone.substr(8, 2) : str == 'day' ? '天' : '';
}

/*
 * 显示--
 */
exports.showgg = function (data, gg, tofixed, append) {
    return (data ? (tofixed ? parseFloat(data).toFixed(tofixed) : data) + (append ? append : '') : gg || '--');
}

/*
 * 判断是否为全数字
 */
exports.isNum = function (str) {
    return /^\d*$/.test(str);
}

/*
 * 判断一个对象是否为空。
 */
exports.isNull = function (obj) {
    return !obj || obj == null || (typeof(obj) == 'string' && obj.trim().length == 0);
};

/*
 * 判断一个对象是否不为空。
 */
exports.isNotNull = function (obj) {
    return obj != null && (typeof(obj) != 'string' || obj.trim().length > 0);
};

/*
 * 判断一个对象是否为数组。
 */
exports.isArray = function (obj) {
    return Object.prototype.toString.call(obj) === '[object Array]';
};

/*
 * 格式化金额
 * 如：123456.21格式化后为：123,456.21
 */
exports.formatAmount = function (number) {
    return number.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
};
/*
 *计算中英文实际长度
 *如：abc中文 长度为7
 */
exports.calcStrLength = function (str) {
    if (!str) return 0;
    var arChina = str.match(/[^x00-xff]/g) ? str.match(/[^x00-xff]/g) : [];
    return str.length + arChina.length;
};
/*
 *截取字符串的长度
 */
exports.subString = function (str, length, dot) {
    if (!str) return "";
    if (!dot) {
        dot = ".";
    }
    var strLength = this.calcStrLength(str);
    var dots = dot.toString() + dot + dot;
    if (strLength > length) {
        return str.substring(0, length - dots.length) + dots;
    }
    return str;
}

//获取客户请求的IP
exports.getClientIp = function (req) {
    var forwardedIpsStr = req.connection.remoteAddress ||
        req.socket.remoteAddress ||
        req.connection.socket.remoteAddress;
    return forwardedIpsStr ? forwardedIpsStr.split(",")[0] : "";
};


/*
 * 从req对象中获取请求的url
 */
exports.getReqURL = function (req) {
    return req.url.toLowerCase();
};

/*
 * 获取header.html和footer.html中的ejs变量默认值。
 */
exports.getCommonEJSVar = function (title, user, req, res) {
    return {};
};

/*
 * 构造ajax调用时的成功返回结果。
 */
exports.getSuccessResult = function (data, tourl, resultMessage, resultCode) {
    return this.getAJAXResult('success', data, tourl, resultMessage, resultCode);
};

/*
 * 构造Session失效时的返回结果。
 */
exports.getSessionInvalidResult = function (req, url) {
    //this.setBeforeToLogin(req, url);
    return this.getFailResult(messages.notLogin, '/login', constants.sessionInvalidCode);
};


/*
 * 构造ajax调用时的失败返回结果。
 */
exports.getFailResult = function (resultMessage, tourl, resultCode, errortype) {
    return this.getAJAXResult('fail', null, tourl, resultMessage, resultCode, errortype);
};

/*
 * 构造ajax调用时的返回结果。
 */
exports.getAJAXResult = function (result, data, tourl, resultMessage, resultCode, errortype) {

    var jdata = {
        result: result
    };
    if (this.isNotNull(data)) {
        jdata.data = data;
    }
    if (this.isNotNull(tourl)) {
        jdata.tourl = tourl;
    }
    if (this.isNotNull(resultMessage)) {
        jdata.resultMessage = resultMessage;
    }
    if (this.isNotNull(resultCode)) {
        jdata.resultCode = resultCode;
    }
    if (this.isNotNull(errortype)) {
        jdata.errortype = errortype;
    }
    return jdata;
};


/*
 * 用户注册或登录后创建session。
 */
exports.createSession = function (custInfo, req, res) {
    var user = {
        custId: custInfo.custId,
        loginname: custInfo.loginname,
        phoneNumber: custInfo.mobile
    };
    req.session.userInfo = {
        userid: custInfo.custId,
        username: custInfo.loginname,
        phone: custInfo.mobile || null,
        ishaslastTime: true
    }
    req.session.user = user;
    //将用户名保留在客户浏览器cookie中，并可以允许页面js读取
    res.cookie(config.sessionconfig.userNameCookieName, user.loginname, {
        httpOnly: false,
        maxAge: 3 * 24 * 60 * 60 * 1000
    }); //7 days
    if (config.base.debugOn) {
        Logger.debug("Create session for ", user.loginname, ".");
    }
};

/*
 *  合并json
 */
exports.getConcatJson = function (des, src, override) {
    if (src instanceof Array) {
        for (var i = 0, len = src.length; i < len; i++)
            exports.getConcatJson(des, src[i], override);
    }
    for (var i in src) {
        if (override || !(i in des)) {
            des[i] = src[i];
        }
    }
    return des;
}

exports.htmlDecode = function (str) {
    var s = str;
    if (str.length == 0) return "";
    s = str.replace(/&amp;/g, "&");
    s = s.replace(/&lt;/g, "<");
    s = s.replace(/&gt;/g, ">");
    s = s.replace(/&nbsp;/g, " ");
    s = s.replace(/&#39;/g, "\'");
    s = s.replace(/&quot;/g, "\"");
    s = s.replace(/<br>/g, "\n");
    s = s.replace(/&ldquo;/g, "“");
    s = s.replace(/&rdquo;/g, "”");
    return s;
};

/*计算汉字*/
exports.checksum = function (chars) {
    var sum = 0;
    for (var i = 0; i < chars.length; i++) {
        var c = chars.charCodeAt(i);
        if ((c >= 0x0001 && c <= 0x007e) || (0xff60 <= c && c <= 0xff9f)) {
            sum++;
        } else {
            sum += 2;
        }
    }
    return sum;
}

exports.isLocalIp = function (str) {
    return str && str.match(/^(http:\/\/)?192\.168([\.]{1}\d{1,3}){2}$/);
}


//浮点数运算
exports.operation = function (arg1, arg2, operators) {
    var n, m = 0,
        t1 = 0,
        t2 = 0,
        r1, r2, s1, s2;
    if (arg1 == null || typeof(arg1) == 'undefined') {
        arg1 = '0';
    }
    if (arg2 == null || typeof(arg2) == 'undefined') {
        arg2 = '0';
    }
    try {
        s1 = arg1.toString();
        t1 = s1.split(".")[1].length;

    } catch (e) {

    }
    try {
        s2 = arg2.toString();
        t2 = s2.split(".")[1].length;
    } catch (e) {

    }
    with (Math) {
        r1 = Number(arg1.toString().replace(".", ""));
        r2 = Number(arg2.toString().replace(".", ""));
        switch (operators) {
            case "/":
                return (r1 / r2) * pow(10, t2 - t1);
                break;
            case "*":
                m += t1 + t2;
                return Number(r1) * Number(r2) / pow(10, m);
                break;
            case "+":
                m = pow(10, max(t1, t2));
                return (arg1 * m + arg2 * m) / m;
                break;
            case "-":
                m = pow(10, max(t1, t2));
                n = (t1 >= t2) ? t1 : t2;
                return ((arg1 * m - arg2 * m) / m).toFixed(n);
                break;
            case "%":
                m = pow(10, max(t1, t2));
                return (arg1 * m) % (arg2 * m);
        }

    }
}

//判定是否在活动期间内
exports.checkExpired = function (startDate, endDate) {
    var now = new Date().getTime();
    if (startDate instanceof Date && endDate instanceof Date) {
        if (now >= startDate && now < endDate) {
            return true;
        }
    }
    return false;
};
//除法
Number.prototype.divi = function (arg1) {
    return operation(this, arg1, "/");
}
//乘法
Number.prototype.mult = function (arg1) {
    return operation(this, arg1, "*");
}
//加法
Number.prototype.add = function (arg1) {
    return operation(this, arg1, "+");
}
// 减法
Number.prototype.subtr = function (arg1) {
    return operation(this, arg1, "-");
}
//整除
Number.prototype.mod = function (arg1) {
    return operation(this, arg1, "%");
}


//元转万元
exports.tenTh = function (val) {
    return (val / 10000);
};

//募集金额百分比
exports.percent = function (current, total) {

    return Math.floor(((total - current) / total) * 10000) / 100;

};
//募集金额百分比
exports.percent2 = function (current, total) {

    return Math.floor((current / total) * 10000) / 100;

};
//已募集金额
exports.subtraction = function (current, total) {

    var str = String(Math.floor(total - current));

    return str.replace(/\B(?=(?:\d{3})+\b)/g, ',');

};

//数字格式化
exports.numFormat = function (data) {

    var str = String(data);
    return str.replace(/\B(?=(?:\d{3})+\b)/g, ',');

};


//根据风险等级设置字体颜色
exports.levelFontColor = function (level) {

    switch (level) {
        case '1' :
            return 'lowFont';
            break;
        case '2' :
            return 'lowFont ';
            break;
        case '3' :
            return 'midFont ';
            break;
        case '4' :
            return 'highFont ';
            break;
        case '5' :
            return 'highFont ';
            break;
        default :
            return 'lowFont  ';
            break;
    }

};
//根据风险等级设置背景颜色
exports.levelBgColor = function (level) {

    switch (level) {
        case '1' :
            return 'lowBg';
            break;
        case '2' :
            return 'midLowBg';
            break;
        case '3' :
            return 'midBg';
            break;
        case '4' :
            return 'midHighBg';
            break;
        case '5' :
            return 'highBg';
            break;
        default :
            return 'lowBg';
            break;
    }

};
//根据项目状态转换文字
exports.formatZh = function (level) {

    switch (level) {
        case '0' :
            return '募集前';
            break;
        case '1' :
            return '募集期';
            break;
        case '2' :
            return '开放期';
            break;
        case '3' :
            return '封闭期';
            break;
        case '4' :
            return '封盘';
            break;
        default :
            return '';
            break;
    }

};
//根据项目状态转换项目列表左边背景
exports.formatProjectStateBg = function (iss_st) {

    switch (iss_st) {
        case '0' :
            //return '募集前';
            return '#b9e4cb';
            break;
        case '1' :
            //return '募集期';
            return '#ffbd76';
            break;
        case '2' :
            //return '开放期';
            return '#6fdeb5';
            break;
        case '3' :
            //return '封闭期';
            return '#ff7c62';
            break;
        case '4' :
            ///return '封盘';
            return '#bdcbd9';
            break;
        default :
            return '';
            break;
    }

};
//风险等级转换文字
exports.formatRisk = function (level) {

    switch (level) {
        case '1' :
            return '低';
            break;
        case '2' :
            return '中低';
            break;
        case '3' :
            return '中';
            break;
        case '4' :
            return '中高';
            break;
        case '5' :
            return '高';
            break;
        default :
            return '';
            break;
    }

};
//订单中心 订单状态和项目状态数字和文字转换
exports.fOrderState = function (state) {
    switch (state) {
        case '冷静期' :
            return '#4fc3f7';
            break;
        case '撤单中' :
            return '#666';
            break;
        case '撤单失败' :
            return '#ff5b65';
            break;
        case '进行中' :
            return '#ff8f1f';
            break;
        case '成功' :
            return '#76ca3b';
            break;
        case '失败' :
            return '#ff5b65';
            break;
        default :
            return '';
            break;
    }

};

//订单中心 订单状态和项目状态数字和文字转换
exports.diMType = function (level) {
    switch (level) {
        case '1' :
            return '红利转投';
            break;
        case '2' :
            return '现金分红';
            break;
        default :
            return '';
            break;
    }

};

//详情页标题字数限制25个
exports.wordLimt = function (level) {
    if (level.length > 25) {
        return level.substr(0, 24) + "...";
    } else {
        return level;
    }
};

//公告副标题字数限制40个
exports.wordLimt40 = function (level) {
    if (level.length > 46) {
        return level.substr(0, 45) + "...";
    } else {
        return level;
    }
};

//项目列表 审核中状态转换
exports.projectExamineState = function (state) {
    switch (state) {
        case '1' :
            return '审核中';
            break;
        case '5' :
            return '驳回';
            break;
        default :
            return '';
            break;
    }

}
//项目列表 审核中状态转换
exports.projectExamineStateColor = function (state) {
    switch (state) {
        case '1' :
            return '#666';
            break;
        case '5' :
            return 'red';
            break;
        default :
            return '';
            break;
    }

}
//时间split
exports.timeSplit = function (t) {
    var arr = t.split(" ");
    return arr;
};

//银行名称
exports.bankName = function (value) {
    switch (value) {
        case '0100' :
            return '邮储银行';
            break;
        case '0102' :
            return '工商银行';
            break;
        case '0103' :
            return '农业银行';
            break;
        case '0104' :
            return '中国银行';
            break;
        case '0105' :
            return '建设银行';
            break;
        case '0301' :
            return '交通银行';
            break;
        case '0302' :
            return '中信银行';
            break;
        case '0303' :
            return '光大银行';
            break;
        case '0304' :
            return '华夏银行';
            break;
        case '0305' :
            return '民生银行';
            break;
        case '0306' :
            return '广发银行';
            break;
        case '0307' :
            return '平安银行';
            break;
        case '0308' :
            return '招商银行';
            break;
        case '0309' :
            return '兴业银行';
            break;
        case '0310' :
            return '浦发银行';
            break;
        case '0316' :
            return '浙商银行';
            break;
        case '0401' :
            return '上海银行';
            break;
        default :
            return '';
            break;
    }
};

exports.judge = function (obj) {
    for (var i in obj) {//如果不为空，则会执行到这一步，返回true
        return true;
    }
    return false;
};