var router = require("express").Router();
var Logger = require('../lib/log');
var libUtils = require("../lib/utils");
var libUpload = require('../lib/upload');
var config = require('../config');
//var projectModule = require('../lib/upload.projectModule');
function doUpload(req, res) {
    var file = req.file;
    if (file.size > 5 * 1024 * 1024) { //too max
        fs.unlink(file.path);
        return res.end('error|文件超出空间范围（5M），请扩容！'); //富文本编辑器error格式
    }
    var path = req.file.path;
    Logger.info(file);
    res.end(config.upload+'/files/'+file.filename)
    /*unzip*/
}
function doUploadProjectModule(req, res) {
    var file = req.file;
    if (file.size > 5 * 1024 * 1024) { //too max
        fs.unlink(file.path);
        return res.end('error|文件超出空间范围（5M），请扩容！'); //富文本编辑器error格式
    }
    var path = req.file.path;
    Logger.info(file);
    res.send({
        url: config.upload+'/projectmodule/'+file.filename,
        success:true
    })
    /*unzip*/
}
function doProjectCover(req,res){
   
    var file = req.file;
    var path = req.file.path;
    Logger.info(file);
    if (file.size > 5 * 1024 * 1024) { //too max
        fs.unlink(file.path);
        return res.end('图片大小不得超过5M'); 
    }
    if(req.file.filename.length>0){
        return res.send(config.upload+'/projectcover/'+file.filename);
    }
}
function doUploadProjectVideo(req,res){
    Logger.info('上传视频');
    var file = req.file;
    Logger.info(file);
    if(req.file.filename.length>0){
        return res.send(config.upload+'/projectvideo/'+file.filename);
    }
    
}
function doUploadprojectProgress(req,res){
    var file = req.file;
    var path = req.file.path;
    Logger.info(file);
    if (file.size > 5 * 1024 * 1024) { //too max
        fs.unlink(file.path);
        return res.end('图片大小不得超过5M'); 
    }
    if(req.file.filename.length>0){
        return res.send(config.upload+'/projectprogress/'+file.filename);
    }
}
function doUploadErr(err, req, res, next) {
    Logger.info(req.file);
    if (err) return res.end(err.toString());
}

function doUserAvatar(req,res){
    Logger.info("上传头像");
    var file = req.file;
    Logger.info("file----"+file);
    if (file.size > 1 * 1024 * 1024) { //too max
        fs.unlink(file.path);
        return res.end('error|文件超出空间范围（5M），请扩容！'); //富文本编辑器error格式
    }
    var path = req.file.path;
    Logger.info(file);
    return res.send(config.upload+'/useravatar/'+file.filename)
}


router.route('/img').post(libUpload.upload.single('myFileName'), doUpload, doUploadErr);
router.route('/projectCover').post(libUpload.projectCover.single('projectCover'),doProjectCover,doUploadErr);
router.route('/projectModule').post(libUpload.projectModule.single('projectModule'), doUploadProjectModule, doUploadErr);
router.route('/projectVideo').post(libUpload.projectVideo.single('projectVideo'), doUploadProjectVideo, doUploadErr);
router.route('/projectProgress').post(libUpload.projectProgress.single('projectProgress'), doUploadprojectProgress, doUploadErr);
router.route('/userAvatar').post(libUpload.userAvatar.single('userAvatar'),doUserAvatar,doUploadErr);
module.exports = router;