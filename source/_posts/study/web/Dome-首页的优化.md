---
title: Dome 首页的优化
categories:
  - study
  - web
tags: js
date: 2016-07-02 22:23:50
---

由于整站是放在 Github 上的静态页，那么没有后端的支持，页面的更新就是个麻烦事了。例如 Demo 的首页。如果纯静态，做完 Demo 然后还要去 Demo 首页写 DOM ，问题是如果写错还要回来更新…… 我这么懒，这费力不讨好的事我可不做。为了改进这个缺陷，陆陆续续有了这 3 个版本的更新。

<!--more-->

### Version 1

这个版本主要解决有没有的问题，先把主体框架搞定。最大的麻烦还是配色，考虑到主要入口是简历的 More ，最后要死要活还是和简历的风格搭上了。花了一天时间就在改这几个 8 位的 HEX …… 除了练车，这应该是我做过第二没效率的事了。

接下来就是处理列表。现学的 JS 肯定不行，Google 一堆大神整天都在防着 Chrome 访问本地文件，靠我这技术现在肯定是没法，很自然的想到用批处理 – BAT，通过间接的创建本地目录的 XML，通过 ajax 调用达到目的。 说起来惭愧，从我开始用 Windows 就一直在用批处理，却一直没掌握循环 =。=～ 又是一阵折腾，把目录的 XML 结构搞定。剩下的就是 ajax 读 XML ，然后嵌套一个同步的 ajax 读每个 Demo 的 readme.md ， 最后处理字符串，插入 DOM。

第一个版本搞定，我的 Demo 有首页啦！

```bash

@echo off&setlocal enabledelayedexpansion
cd demos
echo ^<?xml version="1.0" encoding="GB18030"?^>>list.xml
echo ^<urls^>>>list.xml
for /f "delims=" %%i in ('dir /a-d/b /AD') do (
set "tt=%%i"
set tt=!tt:\=/!
echo ^<url^>!tt!^<^/url^>>>list.xml)

echo ^<^/urls^>>>list.xml

```
<hr/>

### Version 2

随着 Demo 越来越多，版本 1 暴露的问题就越来越多了。上一版的主体结构：

```javascript
ajax {
	…………
	success: fn(){
    	ajax{
        	async: false,
       		success: fn(){
        		读取 readme.md
        	}
        }//ajax 读取readme.md 结束  
        …………
        拼接插入DOM
    }
}
```


首先就是页面内容空白，读取 readme.md 导致大量的 HTTP 请求，虽然已经更换到 HK 服务器，但近 20 条的 HTTP 请求直接导致页面空白近 10s ，并且没有任何暗示页面还在加载中，这是致命的。迫使我继续改进本地的 list 。再次使用 BAT 把 readme.md 写入 list 虽然是可行的，试着琢磨下还是觉得太笨，先不说对象那么多的 引号 调试过程中多容易出错，光读 readme.md 然后分段取值就够麻烦的了。想想还是用 JS 实现吧。 读取版本 1 中的 list， 然后再循环读取 readme.md 分段取值后创建对象，输出到窗口中，再人肉写入新的 list, 这样相当于把 readme.md 的 HTTP 那段在本地完成了，不过多了一步人肉 COPY 的过程……

最后加上 CSS 的 loadding 动画，这次的改进让 Demo 至少能让人看到了。

chrome 3G 模式载入时间缩小到 7s 左右。

<hr/>

### Version 3

果然我是没耐性的，重复无意义的劳动做了几次就不爽了，人肉 COPY 这事闹心～ 而且现在我知道了 nodeJs 。学的 JavaScrip 终于能用在本地了。T.T 起初一切都很顺利，除了学习 改造 npm 和 fs API 的时间，几乎是一口气就写完了。


```javascript
var fs = require('fs');
//var lineReader = require('E:/nodejs/glob/npm/node_modules/line-reader');
var lineReader = require('line-reader');
var dir = "./demos/";
var list = {};
fs.readdir(dir, function (err, files) {
    // 构建 list 主体分类
    for (var i = files.length - 1; i >=0; i--) {
        if (files[i].indexOf(".") != -1) {
            files.splice(i, 1);
        }
        else {
            var _key = files[i].split("-")[0];
            if (list[_key] == undefined) {
                list[_key] = [];
            }
            getFile(files[i], list[_key]); //自己一边玩去吧
        }
    }
    //读取readme详细内容填充list
    function getFile(fDir, lsAy) {
        var file = dir + fDir + "/readme.md";
        var obj = {};
        var wArry = ""
        lineReader.eachLine(file, function (line, last) {
            wArry = line.split("-");
            obj.name = fDir;
            obj.title = wArry[0];
            obj.cont = wArry[1];
            lsAy.push(obj);
            return false; // stop reading
        });
});

var listAll = "var list = " + JSON.stringify(list);
fs.writeFile(dir + "list.js", listAll, function (err) {
    if (err) throw err;
    console.log('write JSON into TEXT');
});
```


可最后输出死活是空…… 我都开始怀疑人生了。逐步排查后才发现 nodeJs 是异步的！ 特们都是基于 JS 构建的，跑到后端你就变成异步的啦？ 变得这么快，尼玛能认出你不…… 解决这个异步可真是伤脑筋，首先 这么小的东西不想用模块，却又没找到什么好办法。

* 循环中写计数器，主代码最后写个 while 死循环等待，不知道为什么行不通。而且这也是治标不治本，耗电。
* 不用函数，代码又太笨～
而且我这是 异步 套着 异步， 早不知飞哪去了…… 最后还是简单粗暴加个 setTimeOut 先跑着，看看啥时候再灵光一现再来解决。

然后就是 Demo 首页的 JS 逻辑，根据之前 画廊 - Demo 的教训，Dom 的操作非常耗时，这次也直接改成字符串模板替换后插入 DOM 。

Chrome 3G 模式 2s 完全载入，并且主要耗时是 JQuery 和字体的下载，基本彻底解决了载入的性能问题。

<hr/>

### next

可能下一个版本还要改下主体，虽然现在主体有个样子，不过空间浪费严重，并且没有突出重点，也不够炫。

目前有个想法是书本，其中 HTML JS 等作为书页的贴纸标签，前面的目录会有黄色小星星标记出重点，每次随机翻到某一详细页，每次都有惊喜。应该还会把时间加进去，大概是按时间倒序。这样比较菜的东西会在后面，不过详细页就比较麻烦，空白太多还没想好怎么补。而且逻辑太多应该学完框架再去做会比较简单吧。

### 吐槽

简历是发了，今天逛 V 站看见有个娃也是前端求职，内容嘛…… 基本是照着我求职的帖子写的。简历的跳转以及说明还有网址都是～ 最后点进去看简历，连 CSS 的 loading 动画都是…… 我用动画是为了掩盖，你这单页纯静态的加一个 loading……
不过也说明我做的东西还是有人认可的，有意思～