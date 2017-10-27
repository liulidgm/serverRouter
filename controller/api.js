var config = require('../config');
/*后端模块路径在这里配置*/
var modules = {
    /*后端接口地址*/
    root: config.backendDomain.api,
    accountModule: config.backendDomain.api + 'SCLogin/',
    accountModuleOut: config.backendDomain.api + 'loginOut/',
     /*yilicai start*/

};
/*提供给client.js使用。后端加接口，node就在这里加*/
module.exports = {
    // 'getUserInfo': modules.root + 'getUserInfo', //这里配好，就可以直接使用client.js直接请求后端的接口==>client.do.isUserNameUsed({name:'xxx'},function(err,result){})
    // 'login': modules.accountModule + 'login',
    // 'logout': modules.accountModule + 'logout',
    // 'getMessage': modules.msgModule + 'get', //新增返回字段 ： displayType  （  展现方式：0-url方式，1-富文本）
    /*yilicai  start*/
    /*验证登录状态*/
    // '/SCLogin/initIndex.do'
    'initIndex': modules.accountModule + 'initIndex.do',
    /*登录*/
    'userLogin': modules.accountModuleOut + 'userLogin.do', /*登录*/
    'useRetrievePwdSubmit': modules.accountModuleOut + 'useRetrievePwdSubmit.do', /*忘记密码*/
    /*退出*/
    'signOut': modules.root + 'signOut.do', /*退出*/
    /*交易记录*/
    'dealRecord': modules.accountModule + 'PCdealRecord.do',
    /*登陆*/
    'loginOut': modules.root + 'loginOut/userLogin.do',
    'loginBanner': modules.root + 'loginOut/initLogin.do',
    /*忘记密码*/
    'useRetrievePwd': modules.accountModuleOut + ' useRetrievePwd.do', /*重置密码第一步,手机号验证*/
    /*index*/
    'getIndexProject': modules.root + 'projectList.do',
    'checkState': modules.root + 'checkState.do',
    'bannerList': modules.root + 'bannerList.do',
    'companionList': modules.root + 'companionList.do',//合作伙伴
    'cooperateList': modules.root + 'cooperateList.do',//指导机构
    'getHomePageNotice': modules.accountModuleOut + 'getHomePageNotice.do',//公告
    /*个人中心-我的项目*/
    'queryMyProject': modules.accountModule + 'queryMyProject.do',
    'PCmyProject': modules.accountModule + 'PCmyProject.do',
    'PCprojectDetail': modules.accountModule + "PCprojectDetail.do",
    'PCsubmitMyProjectDes': modules.accountModule + "PCsubmitMyProjectDes.do",
    'insertModuleInfo': modules.accountModule + "insertProjectInformation.do",
    'insertProjectProgress': modules.accountModule + "PCsaveMyProjectProgress.do",
    'selMyProjectProgress': modules.accountModule + "PCselMyProjectProgress.do",//查询项目进展
    'addProgress': modules.accountModule + "insertProjectProgress.do",
    'submitProject': modules.accountModule + "submitProject.do",
    'deleteProjectInformation': modules.accountModule + 'deleteProjectInformation.do',
    'deleteProjectProgress': modules.accountModule + 'deleteProjectProgress.do',
    'selIntroductionTemplate': modules.accountModule + 'selIntroductionTemplate.do',
    'selSingleIntroductionTemplate': modules.accountModule + 'selSingleIntroductionTemplate.do',
    'PCqueryMyProject':modules.accountModule +'PCqueryMyProject.do',
    'PCinsertProjectInformation':modules.accountModule +'PCinsertProjectInformation.do',
    'submitMyProject':modules.accountModule +'submitMyProject.do',
    'PCdeleteProjectInformation':modules.accountModule +'PCdeleteProjectInformation.do',
    'MyProjectModularSort':modules.accountModule + 'MyProjectModularSort.do',
    'PCprojectDetailModular':modules.accountModule +'PCprojectDetailModular.do',
    /*注册*/
    'checkMobile': modules.accountModuleOut + "checkMobile.do", /*验证手机号*/
    'checkRegistPassword': modules.accountModuleOut + "checkRegistPassword.do", /*验证密码*/
    'checkIntroducerPhone': modules.accountModuleOut + "checkIntroducerPhone.do", /*推荐人手机号验证*/
    'registSubmit': modules.accountModuleOut + "registSubmit.do", /*注册第一步提交信息*/
    'CheckBankCode': modules.accountModule + "CheckBankCode.do", /*验证银行卡*/
    'registNextConfirm': modules.accountModule + "registNextConfirm.do", /*银行卡提交确定*/
    'getRiskQuestions': modules.accountModule + "getRiskQuestions.do", /*测评*/
    'newRiskSubmit': modules.accountModule + "newRiskSubmit.do", /*提交测评*/
    'getVerifyCodeToImg': modules.accountModuleOut + "getVerifyCodeToImg.do", /*注册获取验证码（需验证图形验证码）*/
    'getImgVerifyCode': modules.root + "getImgVerifyCode.do", /*获取验证码*/
    'selSupportBank': modules.accountModule + "selSupportBank.do", /*校验绑卡是否支持*/
    'initRegistBank': modules.accountModule + "initRegistBank.do", /*获取迁移信息*/
    'selBankManageMsg': modules.accountModule + "selBankManageMsg.do", /*获取迁移信息*/
    'selSupportBankList': modules.accountModule + "selSupportBankList.do", /*支持的银行卡列表*/

    /*个人中心--个人信息*/
    'uploadImage': modules.accountModule + 'uploadHeadImage.do', /*上传头像*/
    'queryPersonalInfo': modules.accountModule + 'queryPersonalInfo.do',
    'getLoginVerifyCode': modules.accountModule + 'getLoginVerifyCode.do', /*个人中心--登录内获取验证码*/
    'loginVerifiedCode': modules.accountModule + 'loginVerifiedCode.do', /*个人中心--登录内验证验证码*/
    // 'getVerifyCode':modules.accountModuleOut +'getVerifyCode.do',        /*个人中心--登录外获取验证码*/
    // 'loginOutVerifiedCode':modules.accountModuleOut +'loginOutVerifiedCode.do',    /*个人中心--登录外验证验证码*/
    'getVerifyCode': modules.accountModuleOut + 'getVerifyCode.do', /*个人中心--登录外获取验证码*/
    'loginOutVerifiedCode': modules.accountModuleOut + 'loginOutVerifiedCode.do', /*个人中心--登录外验证验证码*/
    'saveNewUserPhone': modules.accountModule + 'saveNewUserPhone.do', /*个人中心--保存手机号*/
    'updRetrievePwd': modules.accountModule + 'updRetrievePwd.do', /*修改登录密码确定*/
    'updNewPayPassword': modules.accountModule + 'updNewPayPassword.do', /*修改支付密码确定*/
    'saveNewPayPassword': modules.accountModule + 'saveNewPayPassword.do', /*忘记支付密码保存*/
    'sendUserEmail': modules.accountModule + 'sendUserEmail.do', /*绑定邮箱*/
    'sendShortMessage': modules.accountModule + 'sendShortMessage.do', /*中证获取验证码*/
    'bindUserEmail': modules.accountModuleOut + 'bindUserEmail.do', /*绑定邮箱*/
    /*绑定银行卡*/
    'queryBankCard': modules.accountModule + 'queryBankCard.do', /*获取银行卡信息*/
    'bankCardManane': modules.accountModule + 'bankCardManane.do', /*添加银行卡发送验证码*/
    'bankCardMananeSubmit': modules.accountModule + 'bankCardMananeSubmit.do', /*添加银行卡确认*/
    'bankCardCancel': modules.accountModule + 'bankCardCancel.do',
    /*个人中心--我的邀请*/
    'getInviteLink': modules.accountModule + 'getInviteLink.do',
    'getInviteQR': modules.accountModule + 'getInviteQR.do', /*获取二维码*/
    'setIntroducerMobile': modules.accountModule + 'setIntroducerMobile.do', /*添加邀请人*/
    'PCselMessageList': modules.accountModule + 'PCselMessageList.do', /*添加邀请人*/
    
    /* 产品列表 */
    'getProductList': modules.root + 'loginOut/initProductList.do',
    'selPcProductList': modules.root + 'loginOut/selPcProductList.do',

    /*产品详情页*/
    'getProductDetail': modules.root + 'SCLogin/getProductDetail.do',
    // 产品支持者
    'selProductInvestor': modules.root + 'SCLogin/getProductInvestor.do',
    /*产品认购*/
    'selCertifiedInvestor': modules.root + 'SCLogin/selCertifiedInvestor.do',
    'overTimeJudge': modules.root + 'SCLogin/overTimeJudge.do',//判断时间是否过期
    'createOrder': modules.root + 'SCLogin/createOrder.do',//用户创建订单
    'waitOrderInfo': modules.root + 'SCLogin/waitOrderInfo.do',//查询用户订单待支付信息
    'initOrderInfo': modules.root + 'SCLogin/initOrderInfo.do',
    'selBankQuota': modules.root + 'SCLogin/selBankQuota.do',
    'payOrderConfirm': modules.root + 'SCLogin/payOrderConfirm.do',
    'buySendSmCode': modules.root + 'SCLogin/sendShortMessage.do',
    'selBankList': modules.root + 'SCLogin/selBankList.do',
    /*订单中心*/
    'getMyTenderList': modules.accountModule+'PCgetMyTenderList.do',//获取订单列表
    'selPresonMsgToApp': modules.accountModule + 'selPresonMsgToApp.do',//获取订单列表
    'orderDetails': modules.accountModule +'PCorderDetails.do',
    'returnOrder': modules.accountModule + 'returnOrder.do',
    'delCloseOrder':modules.accountModule + 'delCloseOrder.do',

    // 公告
    'getNoticeList': modules.accountModuleOut + 'getNoticeList.do', /*公告列表*/
    'getNoticeDetail': modules.accountModuleOut + 'getNoticeDetail.do', /*公告详情*/

    //用户状态
    'isAuthentica': modules.accountModule + 'isAuthentica.do', //判断用户风险评测 和 网银签约状态
    'getUserState':modules.accountModule + 'getUserState.do', /*获取用户登录状态*/
    'realNameAuthenty':modules.accountModule +'realNameAuthenty.do',
    //我要融资
    'addFinancing': modules.accountModuleOut + 'pcAddFinancing.do' ,
    'getLoginVerifyCodeToBuy': modules.accountModule + 'getLoginVerifyCodeToBuy.do',/*撤单发送短信验证码*/
    'loginVerifiedCodeToBuy': modules.accountModule + 'loginVerifiedCodeToBuy.do',/*撤单验证短信验证码*/

    'longzhenPro':modules.accountModule +'selInvestmentAgreement.do'  /*龙臻项目协议*/
};

/*test/api-server.js模拟了后端api。这里的url配置根据后端来写*/
