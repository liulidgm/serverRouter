/**
 *
 * @Description 文件上传配置
 * @Author Amor
 * @Created 2016/04/27 17:50
 * 技术只是解决问题的选择,而不是解决问题的根本...
 * 我是Amor,为发骚而生!
 *
 */
var multer = require('multer');
var Logger = require('../lib/log');
var router = require("express").Router();
var libRandom = require('../lib/random');
var path = require('path');
var config = require('../config');
var libDate = require('../lib/date');
//添加配置文件到muler对象。
//demo
var upload = multer({
    storage: multer.diskStorage({
        //设置上传文件路径,以后可以扩展成上传至七牛,文件服务器等等
        //Note:如果你传递的是一个函数，你负责创建文件夹，如果你传递的是一个字符串，multer会自动创建
        destination: config.upload+'/files',
        filename: function(req, file, cb) {
            Logger.info('file+++>', file, file.originalname);
            //构造文件名称
            cb(null, libDate.getDate(new Date()) + libRandom.genStr(10) + '-' + path.extname(file.originalname));
        }
    }),
    //其他设置请参考multer的limits
    limits: {
        fileSize: 5000000 //50M
    },
    fileFilter: function(req, file, cb) { //文件过滤，可以过滤格式等
        console.log('fileFilter', file);
        //if (path.extname(file.originalname) !== ".jpg") return cb('error|请上传jpg格式的压缩包'); //这个格式是那个富文本编辑器约定的错误格式：error|错误信息
        cb(null, true);
    }
});
//富文本上传图片
var projectModule = multer({
    storage: multer.diskStorage({
        //设置上传文件路径,以后可以扩展成上传至七牛,文件服务器等等
        //Note:如果你传递的是一个函数，你负责创建文件夹，如果你传递的是一个字符串，multer会自动创建
        destination: config.upload+'/projectmodule',
        filename: function(req, file, cb) {
            Logger.info('file+++>', file, file.originalname);
            //构造文件名称
            cb(null, libDate.getDate(new Date()) + libRandom.genStr(10) + '-' + path.extname(file.originalname));
        }
    }),
    //其他设置请参考multer的limits
    limits: {
        fileSize: 5000000 //5M
    },
    fileFilter: function(req, file, cb) { //文件过滤，可以过滤格式等
        console.log('fileFilter', file);
        //if (path.extname(file.originalname) !== ".jpg"||path.extname(file.originalname) !== ".jpeg"||path.extname(file.originalname) !== ".png") return cb('请上传jpg,jpeg,png格式的图片'); //这个格式是那个富文本编辑器约定的错误格式：error|错误信息
        cb(null, true);
    }
});


//项目封面图上传
var projectCover = multer({
    storage: multer.diskStorage({
        //设置上传文件路径,以后可以扩展成上传至七牛,文件服务器等等
        //Note:如果你传递的是一个函数，你负责创建文件夹，如果你传递的是一个字符串，multer会自动创建
        destination: config.upload+'/projectcover',
        filename: function(req, file, cb) {
            Logger.info('file+++>', file, file.originalname);
            //构造文件名称
            cb(null, libDate.getDate(new Date()) + libRandom.genStr(10) + '-' + path.extname(file.originalname));
        }
    }),
    //其他设置请参考multer的limits
    limits: {
        fileSize: 5000000 //5M
    },
    fileFilter: function(req, file, cb) { //文件过滤，可以过滤格式等
        //console.log('fileFilter', file);
        //console.log(path.extname(file.originalname) == ".jpg");
        if (path.extname(file.originalname) == ".jpg"||path.extname(file.originalname) == ".jpeg"||path.extname(file.originalname) == ".png"){
             cb(null, true);
         }else{
             return cb('请上传jpg,jpeg,png格式的图片');
         }
       
    }
});
//项目进展图片上传
var projectProgress = multer({
    storage: multer.diskStorage({
        destination: config.upload+'/projectprogress',
        filename: function(req, file, cb) {
            Logger.info('file+++>', file, file.originalname);
            //构造文件名称
            cb(null, libDate.getDate(new Date()) + libRandom.genStr(10) + '-' + path.extname(file.originalname));
        }
    }),
    //其他设置请参考multer的limits
    limits: {
        fileSize: 5000000 //5M
    },
    fileFilter: function(req, file, cb) { //文件过滤，可以过滤格式等
        console.log('fileFilter', file);
        if (path.extname(file.originalname) == ".jpg"||path.extname(file.originalname) == ".jpeg"||path.extname(file.originalname) == ".png"){
             cb(null, true);
        }else{
             return cb('请上传jpg,jpeg,png格式的图片');
        }
    }
});
//项目视频上传
var projectVideo = multer({
    storage: multer.diskStorage({
        //设置上传文件路径,以后可以扩展成上传至七牛,文件服务器等等
        //Note:如果你传递的是一个函数，你负责创建文件夹，如果你传递的是一个字符串，multer会自动创建
        destination: config.upload+'/projectvideo',
        filename: function(req, file, cb) {
            Logger.info('file+++>', file, file.originalname);
            //构造文件名称
            cb(null, libDate.getDate(new Date()) + libRandom.genStr(10) + '-' + path.extname(file.originalname));
        }
    }),
    //其他设置请参考multer的limits
    limits: {
        fileSize: 50000000 //50M
    },
    fileFilter: function(req, file, cb) { //文件过滤，可以过滤格式等
        console.log('fileFilter', file);
        //只能上传MP4
        if (path.extname(file.originalname) !== ".mp4") return cb('只能上传MP4格式的文件'); //这个格式是那个富文本编辑器约定的错误格式：error|错误信息
        cb(null, true);
    }
});

//头像上传
var userAvatar = multer({
    storage: multer.diskStorage({
        //设置上传文件路径,以后可以扩展成上传至七牛,文件服务器等等
        //Note:如果你传递的是一个函数，你负责创建文件夹，如果你传递的是一个字符串，multer会自动创建
        destination: config.upload+'/useravatar',
        filename: function(req, file, cb) {
            Logger.info('file+++>', file, file.originalname);
            //构造文件名称
            cb(null, libDate.getDate(new Date()) + libRandom.genStr(10) + '-' + path.extname(file.originalname));
        }
    }),
    //其他设置请参考multer的limits
    limits: {
        fileSize: 5000000 //单位bit
    },
    fileFilter: function(req, file, cb) { //文件过滤，可以过滤格式等
        console.log('fileFilter', file);
        //比如要求传jpg，就这样写
        //if (path.extname(file.originalname) !== ".jpg") return cb('error|请上传jpg格式的压缩包'); //这个格式是那个富文本编辑器约定的错误格式：error|错误信息
        cb(null, true);
    }
});


//导出对象
module.exports.upload = upload;
module.exports.projectCover = projectCover;
module.exports.projectModule = projectModule;
module.exports.projectVideo = projectVideo;
module.exports.projectProgress = projectProgress;
module.exports.userAvatar = userAvatar;