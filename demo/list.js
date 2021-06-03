var fs = require('fs');
//var lineReader = require('E:/nodejs/glob/npm/node_modules/line-reader');
var lineReader = require('line-reader');
var dir = "./demos/";
var list = {};
var primiseList = [];
var files = fs.readdirSync(dir);
// 构建 list 主体分类
//倒序
//    for (var i = files.length - 1; i >=0; i--) {
//        if (files[i].indexOf(".") != -1) {
//            files.splice(i, 1);
//        }
//        else {
//            var _key = files[i].split("-")[0];
//            if (list[_key] == undefined) {
//                list[_key] = [];
//            }
//            getFile(files[i], list[_key]); //自己一边玩去吧
//        }
//正序
for (var i = 0; i < files.length; i++) {
    if (files[i].indexOf(".") != -1) {
        //好像没啥好干的
    }
    else {
        var _key = files[i].split("-")[0];
        if (list[_key] == undefined) {
            list[_key] = [];
        }
        primiseList.push(getFile(files[i], list[_key])); //自己一边玩去吧
    }
}

Promise.all(primiseList).then(function (v) {
    var listAll = 'var list = ' + JSON.stringify(list);
    fs.writeFile(dir + "list.json", listAll, function (err) {
        if (err) throw err;
        console.log('write JSON into TEXT');
    });
})


function getFile(fDir, lsAy) {
    var file = dir + fDir + "/readme.md";
    var obj = {};
    var wArry = "";
    var res = function () {
        console.log('ok', ok);
    }
    var rej = function () {
        console.log('err', err);
    }
    return new Promise(function (res, rej) {
        lineReader.eachLine(file, function (line, last) {
            wArry = line.split("-");
            obj.name = fDir;
            obj.title = wArry[0];
            obj.cont = wArry[1];
            lsAy.push(obj);
            res();
            rej();
            return false; // stop reading
        });
    })
}