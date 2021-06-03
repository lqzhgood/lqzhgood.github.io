//版本号
var Ver = "1.2.9";
//Url
var webUrl = "http://139.129.236.139";
var showUrl = webUrl + "/api/show" + window.location.search;
var nextUrl = webUrl + "/api/show/next" + window.location.search;
var pingUrl = webUrl + "/api/ping" + window.location.search;
var offListUrl = webUrl + "/api/show/default" + window.location.search;
var weatherUrl = webUrl + "/api/show/weather" + window.location.search;
var newsUrl = webUrl + "/api/show/news" + window.location.search;
var resetUrl = webUrl + "/api/demo/reset" + window.location.search;
var receiptUrl =  webUrl + "/api/show/receipt" + window.location.search;
//Chrome WebServer
var NasUrl = "http://127.0.0.1:8887/";
//门店ID
var Terminal = "";
// 守护进程计数
var daemonNum = 0;
var daemonOldNum = 0;
//模块控制
var AllPage = [{
    num: 0
    , name: "text"
    , enable: true
}, {
    num: 1
    , name: "pic-x"
    , enable: false
}, {
    num: 2
    , name: "map"
    , enable: true
}, {
    num: 3
    , name: "onePic"
    , enable: true
}, {
    num: 4
    , name: "twoPic"
    , enable: true
}, {
    num: 5
    , name: "ewm"
    , enable: true
}, {
    num: 6
    , name: "num"
    , enable: true
}, {
    num: 7
    , name: "text2"
    , enable: true
}, {
    num: 8
    , name: "text3"
    , enable: true
}, {
    num: 9
    , name: "onePicBg"
    , enable: true
}, {
    num: 10
    , name: "twoPicOneText"
    , enable: true
}, {
    num: 11
    , name: "daoJishi"
    , enable: true
}, {
    num: 12
    , name: "onePic_2"
    , enable: true
}, {
    num: 13
    , name: "twoPic_2"
    , enable: true
}, {
    num: 14
    , name: "cloudText"
    , enable: false
}, {
    num: 15
    , name: "video"
    , enable: true
}, {
    num: 16
    , name: "video_2"
    , enable: true
}, {
    num: 17
    , name: "movies"
    , enable: true
}, {
    num: 18
    , name: "movies_2"
    , enable: true
}, {
    num: 19
    , name: "ewmWithText"
    , enable: true
}, {
    num: 20
    , name: "ewmWithText_2"
    , enable: true
}, {
    num: 21
    , name: "goodNight"
    , enable: true
}, {
    num: 22
    , name: "twoPicOneText_2"
    , enable: true
}, {
    num: 23
    , name: "danmu"
    , enable: true
}, {
    num: 24
    , name: "danmu_2"
    , enable: true
}, {
    num: 25
    , name: "luckList_1"
    , enable: true
}];


// ajax show next 全局变量
var ajaxTime = 0;
var ajaxNext = 0;
//如果一直待机 二维码页不重复快速切换
var stayEwm = 0;


//测试变量
var test = "";
var picReady = 1;
//*********************隐藏鼠标***********************
$(function () {
    var timer;
    var hidding = false;
    $(document).mousemove(function () {
        event.stopPropagation();
        if (hidding) {
            hidding = false;
            return;
        }
        if (timer) {
            clearTimeout(timer);
            timer = 0;
        }
        $('html').css({
            cursor: ''
        });
        timer = setTimeout(function () {
            hidding = true;
            $('html').css({
                cursor: 'none'
            });
        }, 10000)
    });
});
//********************开始小恒TV************************
window.onload = function () {
    //****************测试代码************************
    //S.init();
    //    $("#twoPic .cont .img img").eq(1).load(function(){
    //       console.log(new Date()); 
    //    });
    //测试本地循环
//    if (0) {
//        test = setInterval(function () {
//            nextPage();
//        }, 6000);
//    }

//**********************初始化*****************************
    //ajax初始化
    $.ajaxSetup({ cache: false }) 
    //显示版本号 持续1分钟
    $("#ver").html(Ver);
    setTimeout(function(){
        $("#ver").remove();
    },60*1000)
    //获取Terminal 门店ID 全局变量 用于回执， 回执函数在 nextPage()
    setTimeout(function () {
        var myurl = GetQueryString("terminal");
        if (myurl != null && myurl.toString().length > 1) {
            Terminal = GetQueryString("terminal");
        }
    }, 100);
    //停止loading 删除元素
    clearInterval(marqueeInterval[0]);
    clearInterval(marqueeInterval[1]);
    $("#loading").remove();
    //设置各个模块是否启用，用于nextPage()无参数执行
    for (var i = 0; i < AllPage.length; i++) {
        (function (n) {
            $(".pt-page")[n].enable = AllPage[n].enable;
        })(i)
    }
    //全屏按钮绑定事件
    $("#fullPageBtn").click(function () {
        if ($(this).attr('first') != '1') {
            //如果第一次 第一次点击全屏执行someting
        }
        requestFullScreen();
        $(this).attr('first', '1');
    });
    //初始化二维码
    var _ewmUrl = "http://weixin.qq.com/r/i0w1LQzEflEBrUhO9xmZ";
    //demo模式
    $('#demoModeEwm').qrcode({
        width: 200
        , height: 200
        , text: _ewmUrl
    });
    //文字二维码
    $('#text .pageEwm').qrcode({
        width: 230
        , height: 230
        , text: _ewmUrl
    });
    //呼吸二维码
    $('#ewm .pageEwm').qrcode({
        width: 360
        , height: 360
        , text: _ewmUrl
    });
    //图片二维码
    $('#onePicBg .pageEwm').qrcode({
        width: 230
        , height: 230
        , text: _ewmUrl
    });
    //云朵二维码
    $('#cloudText .pageEwm').qrcode({
        width: 230
        , height: 230
        , text: _ewmUrl
    });
    //弹幕
    $('#danmu .pageEwm').qrcode({
        width: 180
        , height: 180
        , text: _ewmUrl
    });
    $('#danmu_2 .pageEwm').qrcode({
        width: 180
        , height: 180
        , text: _ewmUrl
    });
    
    //守护进程
    //每15分钟查看 【离线模式】【show】【预加载】三个函数是否在运行，如果没有重启Ajax;
    setInterval(function(){
        daemon();
    },9*60*1000);
    //每20s返回 ping
    setInterval(function(){
        ajaxPing();
    },20*1000)
    //*****************离线列表Ajax*******************
    // ************从服务器获取离线列表****************
    //10s后第一次执行
//   setTimeout(function(){
//       getOffList(); 
//   },10*1000)
    //1小时定期执行
//    setInterval(function () {
//        getOffList();
//    }, 60 * 60 * 1000)
    //拿本地视频列表  
    setTimeout(function () {
        getOffModiveList();
    }, 60 * 1000)
    //2 小时定期执行
    setInterval(function () {
        getOffModiveList();
    }, 2*60 * 60 * 1000)

    
    
    testIp();//Url快捷入口-测试模式--?IP=x
    testMod();//Url快捷入口-测试模式--?Mode=x
    plus();//附加模块   浮条，跑马灯 天气 留言立即显示，---> ./plus.js
    
};
//******************control*********************
//******************test部分*********************
function testIp(ip) {
    var ip = GetQueryString("ip");
    if (ip != null && ip.toString().length > 1) {
        ip = GetQueryString("ip");
    }
    else {
        ip = ""
    }
    if (ip == "debug") {
//        weatherUrl = "http://192.168.3.201/api/show/weather" + window.location.search;
        newsUrl = "http://192.168.3.201/api/show/news" + window.location.search;
    }else if(ip == "test") {
        webUrl = "http://192.168.3.201";
        showUrl = webUrl + "/api/show" + window.location.search;
        nextUrl = webUrl + "/api/show/next" + window.location.search;
        pingUrl = webUrl + "/api/ping" + window.location.search;
        offListUrl = webUrl + "/api/show/default" + window.location.search;
        weatherUrl = webUrl + "/api/show/weather" + window.location.search;
        newsUrl = webUrl + "/api/show/news" + window.location.search;
        resetUrl = webUrl + "/api/demo/reset" + window.location.search;
        receiptUrl =  webUrl + "/api/show/receipt" + window.location.search;
    }
}
function testMod() {
    var mod = GetQueryString("mod");
    if (mod != null && mod.toString().length > 1) {
        mod = GetQueryString("mod");
    }else{
        mod = ""
    }
    if (mod == "test") {
        console.log('测试模式');
        //测试模式            
        $("#testbtn").show();
        webUrl = './';
        showUrl = './test/aja.js';
        nextUrl = './test/ajaNext.js';
        offListUrl = './test/offLine.js';
        getAjax();
    }
    else if (mod == "demo") {
        //demo模式
        console.log('demo模式');
        setTimeout(function () {
            beforePage15();
            nextPage(14);
        }, 3000);
        //鼠标移动出现Demo 二维码
        $("#demoMode").mousemove(function () {
            event.stopPropagation();
            $(this).css("bottom", "10px");
        });
        $("#demoMode").mouseout(function () {
            event.stopPropagation();
            $(this).css("bottom", "-220px");
        });
        setTimeout(function () {
            beforePage12();
            nextPage(11);
        }, 15000);
        //ajax
        setTimeout(function () {
            $.ajax({
                url: resetUrl
                , type: 'post'
                , data: ""
                , timeout: 3000
                , success: function () {}
            });
            setTimeout(function () {
                getAjax();
                $("#demoMode").css('display', 'inline-block');
                //                setTimeout(function () {
                //                    $("#daoJishi").html("");
                //                }, 1000);
            }, 1000)
        }, 35000)
    }
    else {
        //正常模式
        console.log('正常模式');       
        welCome(); //欢迎页 随机一个二维码页面
        setTimeout(function () {
            getAjax();
        }, 1000)
    }
}



//********************************守护进程函数*************************
//如果15分钟一共才执行小于2次 【离线模式】 【getAjax】 [getNextAjax]则认为程序挂了，从正常(离线)模式重启
function daemon(){
    if (daemonNum <= daemonOldNum + 2){
        console.log("%c系统go dead，启动守护进程","background:yellow;color:red;font-size:30px;");
        //禁用预加载页 重新拿数据
        nextData.haveNext = 0;
        //切换模式为正常模式 offLineMod -> if(netErrNum == 0 || offLineModNow == 1 || getOffListNow ==1)return false
        netErrNum = 0;
        offLineModNow = 0;
        getOffListNow =0;
        //停止所有定时器
        clearTimeout(timerNext_1);
        clearTimeout(timerNext_2);
        clearTimeout(timerGetAjax_1);
        clearTimeout(timerGetAjax_2);
        clearTimeout(timerGetAjax_3);
        clearTimeout(timerOffMod_1);
        clearTimeout(timerOffMod_2);
        //重置各种状态
        ajaxNow = 0;
        ajaxNextNow = 0;
        getAjax();
    }else{
        daemonOldNum = daemonNum;
    }
}

//每20s发回ajaxPing 检测是否联网
function ajaxPing() {
    $.ajax({
        url: pingUrl
        , dataType: "json"
        , success: function () {
            //如果断线 隐藏 离线            
            $("#lan").css("background-color", "transparent");        
        }
        , error: function () {
            //如果断线 显示 离线
            $("#lan").css("background-color", "red");
        }
    });
}

//*******************************小恒Tv核心函数********************************

//预加载的数据存放处
var nextData = {
    "page": 1 //not use    
    , "dt": { //预加载拿到的Ajax Data存放处
        "success": true
        , "result": {
            "next": "2"
            , "type": "empty"
            , "data": {
                title: "载入中...."
                , subTitle: "载入中...."
            }
        }
    }
    , "haveNext": 0 //预加载标志位 0 无预加载 1正在预加载处理数据 2预加载数据处理完毕
};


//同组是一样的定时器，只是存在程序的不同地方。理论上同时只有一个，谨慎起见，分开写。
//预加载定时器
var timerNext_1 = "";
var timerNext_2 = "";
//正常加载定时器
var timerGetAjax_1 = "";
var timerGetAjax_2 = "";
var timerGetAjax_3 = "";
//离线模式定时器
var timerOffMod_1 = "";
var timerOffMod_2 = "";


var ajaxNow = 0; //只允许同时存在一个 getAjax（） 
function getAjax() {
    if (ajaxNow == 1) {
        console.log('getAjax已执行:');   
        return false;
    }
    daemonNum++; //用于守护进程daemon()判断死活
    ajaxNow = 1;
    ajaxTime = 3000; //默认下一次Show Api请求时间
    ajaxNext = 1000;//默认下一次Next Api请求时间    
    if (nextData.haveNext == 2) {//如果有预加载直接跳转页然后下一轮ajax
        //下一次正常加载时间
        ajaxTime = nextData.dt.result.next * 1000;
        //下一次预加载时间  （翻页前15秒启动预加载 如果小于15秒 则下一秒开始预加载）
        (ajaxTime - 15000 < 0) ? ajaxNext = 1000: ajaxNext = ajaxTime - 15000;
        //定时器 下一次正常加载
        timerGetAjax_1 = setTimeout(function () {
            //console.log('ajax-succ');
            getAjax();
        }, ajaxTime);
        //定时器 下一次预加载
        timerNext_1 = setTimeout(function () {
            getNextAjax();
        }, ajaxNext);
        //检查数据后翻页 
        if (checkData(nextData.dt, '预加载')) {
            console.log('执行预加载！！！！！！！！！！！！！！！！！！！！！！！！');
            ajaxNow = 0;
            nextData.haveNext = 0;//预加载置空
            ajaxPage(checkData(nextData.dt, '预加载'));
        }
        else {            
            //错误数据 【离线模式】
            console.log("预加载错误数据",nextData.dt);
            ajaxNow = 0;
            nextData.haveNext = 0;//预加载置空    
            return false;
        }
    }
    else {
        //正常加载
        console.log('%c加载 show', 'background:green;color:#fff');
        $.ajax({
            url: showUrl
            , dataType: "json"
            , success: function (data) {
                if (data.success == true) {
                    ajaxTime = data.result.next * 1000;
                    (ajaxTime - 15000 < 0) ? ajaxNext = 1000: ajaxNext = ajaxTime - 15000;
                    //定时器 正常加载
                    timerGetAjax_2  = setTimeout(function () {
                        //console.log('ajax-succ');
                        getAjax();
                    }, ajaxTime);
                    //定时器 预加载
                    timerNext_2 = setTimeout(function () {
                        getNextAjax();
                    }, ajaxNext);
                    //检查数据后翻页
                    if (checkData(data, '正常加载')) {
                        console.log('执行正常加载！！！！！！！！！！！！！！！！！！！！！！！！');
                        $("#notice").addClass("active"); //成功则激活浮条
                        ajaxNow = 0;
                        nextData.haveNext = 0; //预加载置空
                        ajaxPage(checkData(data, '正常加载'));
                    }
                    else {
                        //错误数据 【离线模式】
                        console.log("正常加载数据错误",data);
                        ajaxNow = 0;
                        nextData.haveNext = 0; //预加载置空
                        return false;
                    }
                }
                else {
                    //如果ajax错误，则3s（默认值）后重新开始
                    timerGetAjax_3= setTimeout(function () {
                        console.log('ajax-error');
                        getAjax();
                    }, ajaxTime);
                }
               
            }
            , error: function (data, data2) {
                console.log(data);
                console.log(data2);
                //ajax请求不到 离线模式
                timerOffMod_1 = setTimeout(function () {
                    console.log('net-error');
                    netErrNum = 1;
                    offLineMod();
                }, ajaxTime);
                ajaxNow = 0;
                nextData.haveNext = 0;
            }
        });
    }
    
    
}

var ajaxNextNow = 0; //只允许同时存在一个 getNextAjax（） 
function getNextAjax() {
    if (ajaxNextNow == 1) {
        return false;
    }
    daemonNum++; //守护进程++ 判断死活
    ajaxNextNow = 1;
    console.log('%c预加载 Next', 'background:green;color:#fff');
    $.ajax({
        url: nextUrl
        , dataType: "json"
        , success: function (data) {
            if (data.success == true) {                
                nextData.haveNext = 1; //开始处理预加载数据
                nextData.dt = data; //将预加载的值保存
                //ajaxPage 处理预加载数据， nextData.haveNext = 1不跳转
                if (checkData(nextData.dt, '预加载')) {
                    $("#notice").addClass("active"); //成功则激活浮条
                    ajaxPage(checkData(nextData.dt, '预加载'));
                }
                else {     
                    ajaxNextNow = 0;
                    return false;
                }
            }
            else {
                nextData.haveNext = 0;
            }
            ajaxNextNow = 0;
        }
        , error: function () {
            nextData.haveNext = 0;
            ajaxNextNow = 0;
        }
    });
    
}
//*********************************离线模式函数**********************************
//离线模式播放列表
var offLineArr = [{
     "success": true
     , "result": {
         "next": "20"
         , "type": "ewmWithText"
         , "data": {
             "title": "欢迎来到小恒水饺"
             , "subTitle": ""
             , "ewm": "http://weixin.qq.com/r/i0w1LQzEflEBrUhO9xmZ"
        }
     }
}, {
     "success": true
     , "result": {
         "next": "20"
         , "type": "empty"
         , "data": ""
     }
}];
//临时存放处
var offLineArrTemp = [];
//如果新获取的offLineArr全部错误，则用备份的覆盖
var offLineArrBak = [{
     "success": true
     , "result": {
         "next": "20"
         , "type": "ewmWithText"
         , "data": {
             "title": "欢迎来到小恒水饺"
             , "subTitle": ""
             , "ewm": "http://weixin.qq.com/r/i0w1LQzEflEBrUhO9xmZ"
        }
     }
}, {
     "success": true
     , "result": {
         "next": "20"
         , "type": "empty"
         , "data": ""
     }
}];
//如果新获取的offLineArr全部错误，离线List里面视频也不存在，兜底的二维码
var offLineArrEwm = [{
     "success": true
     , "result": {
         "next": "20"
         , "type": "ewmWithText"
         , "data": {
             "title": "欢迎来到小恒水饺"
             , "subTitle": ""
             , "ewm": "http://weixin.qq.com/r/i0w1LQzEflEBrUhO9xmZ"
        }
     }
}, {
     "success": true
     , "result": {
         "next": "20"
         , "type": "empty"
         , "data": ""
     }
}];



var netErrNum = 0; //小恒tv断网标志位 0正常 1断网
var offLineMovies = 0; //视频离线模式标志位 0未启动  1启动

//离线列表获取函数 -- 后端未开  offListUrl
var getOffListNow = 0; //仅允许同时存在一个getOffList函数 0未运行 1运行
function getOffList() {
    if (getOffListNow == 1){
        return false;
    }
    getOffListNow = 1;    
    $.ajax({
        url: offListUrl
        , dataType: "json"
        , success: function (data) {
            if (data.success) {
                offLineArrTemp = [];
                for (var i = 0; i < data.result.length; i++) {
                    (function (n) {
                        var offAjaxTest = {
                            "success": true
                            , "result": ""
                        }
                        offAjaxTest.result = data.result[n];
                        if (checkData(offAjaxTest, "离线列表","offlineCheak")) {
                            offLineArrTemp.push(offAjaxTest);
                        }
                    })(i)
                }
                if (offLineArrTemp == "") {
                    offLineArr = offLineArrBak;
                }
                console.log('offLineArr:', offLineArr);
            }
            getOffListNow = 0;
        }
        , error: function () {
            console.log("离线文件列表读取失败");
            getOffListNow = 0;
        }
    });
   
}


//mvList 2个小时更新一次，包含时间和文件名
//mvNameList每次进离线模式更新一次 只更新视频文件名 
var mvList = []; //视频详细信息 包含文件名和时间
var mvNameList = [];//只有视频的名字


var listLength = 0;//用于处理视频数组
var tempVideoOnload = 0; //只绑定一次事件 [一次性变量]
//用于更新 mvList 拿文件名和视频时间 2h更新一次
function getOffModiveList() {
    console.log("拿本地视频列表");
    getMvPageToList();
    mvList = [];    
    listLength = 0;
    //绑定事件，用于计算每个视频的时间 只执行一次，避免重复绑定
    //绑定的事件主要内容是:
    //读当前视频的时间，然后listLength++，把下一个视频放入video标签，此时会继续触发这个事件，记录时间，下下一个视频放入video标签，以此递归 直至全部视频读完,过程中会先把数据push给 offLineArrTemp 临时存放，全部读完才一次性给 offLineArr，避免异步执行的离线模式极小概率下读offLineArr导致bug
    if (tempVideoOnload == 0){
        $("#tempVideo")[0].onloadedmetadata = function () {
            var vLength = Math.ceil($("#tempVideo")[0].duration);
            var mv = {};
            mv.name = mvNameList[listLength];
            mv.time = vLength;
            if (vLength < 180 ){
                mvList.push(mv);
            }        
            listLength++;
            if (listLength < mvNameList.length) {
                var mvSrc = NasUrl + mvNameList[listLength];
                $("#tempVideo").attr("src", mvSrc);
            }else{
                $("#tempVideo").removeAttr("src");            
                if ( mvList != ""){                
                    offLineArrTemp = [];
                    for (var k=0; k<mvList.length;k++){               
                        var _mvObj = {
                            "success": true
                            , "result": {
                                "next": mvList[k].time
                                , "type": "movies"
                                , "data": {
                                    "movies":[
                                    {
                                       "name":mvList[k].name,
                                        "ewm":""
                                    }
                                   ]
                                }
                            }
                        }                   
                        offLineArrTemp.push(_mvObj);
                    }
                    offLineArr = offLineArrTemp;
                }else{
                    console.log("没有符合的本地视频，使用备用的二维码模式用于离线模式");               
                    offLineArr = offLineArrEwm;
                }
            }
        }
        tempVideoOnload =1;
    }
    $("#tempVideo").attr("src", NasUrl + mvNameList[listLength]);
}


// 从 本地web服务器 拿视频文件名
//拿ChromeBit WebServer 的 HTML 全部字符串，用正则剔出 *.mp4 文件名，然后写入mvNameList
function getMvPageToList() {
    $.ajax({
        url: NasUrl + "?" + new Date().getTime()
        , type: 'get'
        , data: ""
        , timeout: 300
        , async: false
        , success: function (htmldata) {
            var reg = new RegExp(/addRow\(\".*?mp4/g); 
            var htmlArr = htmldata.match(reg) ;
            for (var i=0; i<htmlArr.length;i++){
                htmlArr[i] = htmlArr[i].substring(8) ;
            }
            mvNameList = [];
            for (var i =0 ;i<htmlArr.length;i++){
                var _txt = htmlArr[i];
                if (_txt.match(".mp4$") != null) {
                    var _name = _txt.split(".mp4")[0];
                    if (stripscript(_name)) {
                        mvNameList.push(_txt);
                    }
                }
                
            }
        }
        , error: function () {
            console.log("Nas挂了");
        }
    });
}


//清理mvList中不存在的视频
function mvNameMakeMvList() {
    for (var i = 0; i < mvList.length; i++) {
        var _mv = mvList[i];
        var _mvHave = 0;
        for (var k = 0; k < mvNameList.length; k++) {
            if (_mv.name  == mvNameList[k]){
                _mvHave = 1;
            }
        }
        if (_mvHave == 0){
            mvList.splice(i,1);
        }
    }
}


//判断特殊字符
function stripscript(s) {
    var pattern = new RegExp("[`~!@#$^&*()=|{}':;',\\[\\].<>/?~！@#￥……&*（）—|{}【】‘；：”“'。，、？]")
    var rs = "";
    for (var i = 0; i < s.length; i++) {
        rs = rs + s.substr(i, 1).replace(pattern, '');
    }
    if (s == rs) {
        rs = true;
    }
    else {
        console.log(rs);
        rs = false;
    }
    return rs;
}


var offLineModNow = 0; //只允许运行一个offLineMod() 0未运行 1运行
var offLineNum = 0; //离线列表 —— 当前播放的 数组下标 offLineArr[offLineNum]
function offLineMod() {
    getMvPageToList(); //从本地web服务器 拿视频文件名
    mvNameMakeMvList();//清理mvList中不存在的视频
    if (netErrNum == 0 || offLineModNow == 1 || getOffListNow ==1) {
        console.log("离线模式已执行");
        return false;
    }
    daemonNum++;
    console.log('%c离线模式-进入 ', 'background:green;color:#fff;');
    offLineModNow = 1;
    $("#notice").removeClass("active");//离线模式关闭横条（跑马灯）
    if (offLineNum < offLineArr.length - 1) {
        offLineNum++;
    }
    else {
        offLineNum = 0;
    }
    var data = offLineArr[offLineNum];
    $.ajax({
        url: showUrl
        , type: 'get'
        , data: ""
        , timeout: 300
        , async: false
        , success: function (d) {     
            if (offLineMovies == 0) {   
                console.log('%c离线模式-跳出 ', 'background:green;color:#fff;');
                netErrNum = 0;
                getAjax(); // getAjax里面已经有延迟3s了。
            }
            else {
                //前台的视频不存在，播放离线的内容
                nextData.haveNext = 0;
                console.log('%c离线模式-跳出失败-前台视频不存在 继续离线模式 ', 'background:#34747;color:#fff;');
                console.log("前台视频",d);
                ajaxPage(data.result);
            }
        }
        , error: function () {
            //没联网，播放离线的内容
            netErrNum = 1;
            nextData.haveNext = 0;
            console.log('%c离线模式-跳出失败-没网', 'background:#34747;color:#fff;');
            ajaxPage(data.result);
        }
    });
    timerOffMod_2 = setTimeout(function () {
        offLineModNow = 0;
        offLineMod();
    }, data.result.next * 1000);
}


//*******************************ajax Data处理函数************************
//用于判断ajax的type跳转到不同页
//如果是预加载数据则仅处理 nextData.dt，不跳转
function ajaxPage(data) {
    //    console.log('ajaxdata:', data);
    if (!data) {
        return false;
    }
    //避免为空时 重复二维码跳转
    if (data.type != 'empty') {
        stayEwm = 0;
    }
    if (data.type == 'oneimage') {
        toOnePicPage(data);
    }
    else if (data.type == 'multipleimages') {
        toTwoPicPage(data);
    }
    else if (data.type == 'map') {
        if (nextData.haveNext == 1 || nextData.haveNext == 0) beforePage2(data);
        if (nextData.haveNext == 2 || nextData.haveNext == 0) nextPage(2, data);
    }
    else if (data.type == 'numtemplate') {
        if (nextData.haveNext == 1 || nextData.haveNext == 0) beforePage6(data);
        setTimeout(function () {
            if (nextData.haveNext == 2 || nextData.haveNext == 0) nextPage(6, data);
        }, 500)
    }
    else if (data.type == 'text') {
        toTextPage(data);
    }
    else if (data.type == 'djs') {
        if (nextData.haveNext == 2 || nextData.haveNext == 0) nextPage(11, data);
    }
    else if (data.type == 'imagesWithOnetitle') {
        toTwoPicOneTextPage(data);
    }
    else if (data.type == 'cloudText') {
        if (nextData.haveNext == 1 || nextData.haveNext == 0) beforePage14(data);
        if (nextData.haveNext == 2 || nextData.haveNext == 0) nextPage(14, data);
    }
    else if (data.type == 'video') {
        toVideoPage(data);
    }
    else if (data.type == 'movies') {
        toMoviesPage(data);
    }
    else if (data.type == 'ewmWithText') {
        toEwmTextPage(data);
    }
    else if (data.type == 'refresh') {
        //        if (nextData.haveNext == 2 || nextData.haveNext == 0) history.go(0);
    }
    else if (data.type == 'goodNight') {
        if (nextData.haveNext == 2 || nextData.haveNext == 0) nextPage(21, data);
    }
    else if (data.type == 'danmu') {
        toDanmuPage(data);
    }
    else if (data.type == 'lottery') {
        toluckPage(data);
    }
    else if (data.type == 'empty') {
        if (stayEwm == 0) {
            welCome();
            stayEwm = 1;
        }
    }
    else {
        //        if (nextData.haveNext == 2 || nextData.haveNext == 0) welCome();
    }
    //重置预加载
    if (nextData.haveNext == 1) {
        nextData.haveNext = 2;
    }
    else {
        nextData.haveNext = 0;
    }
}

//************处理连续相同【type】翻页跳转的函数，避免连续两条同 【type】 时，当前页同时有 【翻出】【翻入】 动画叠加。

var toluckNum = 0;
function toluckPage(data) {
    if (toluckNum > 1) {
        toluckNum = 0;
    }
    switch (toluckNum) {
    case 0:
        if (nextData.haveNext == 1 || nextData.haveNext == 0) beforePage25(data);
        if (nextData.haveNext == 2 || nextData.haveNext == 0) {
            nextPage(25, data);
            toluckNum++;
        }
        break;
    case 1:
        if (nextData.haveNext == 1 || nextData.haveNext == 0) beforePage26(data);
        if (nextData.haveNext == 2 || nextData.haveNext == 0) {
            nextPage(26, data);
            toluckNum++;
        }
        break;
    }
}



var toDanmuNum = 0;
function toDanmuPage(data) {
    if (toDanmuNum > 1) {
        toDanmuNum = 0;
    }
    switch (toDanmuNum) {
    case 0:
        if (nextData.haveNext == 1 || nextData.haveNext == 0) beforePage23(data);
        if (nextData.haveNext == 2 || nextData.haveNext == 0) {
            nextPage(23, data);
            toDanmuNum++;
        }
        break;
    case 1:
        if (nextData.haveNext == 1 || nextData.haveNext == 0) beforePage24(data);
        if (nextData.haveNext == 2 || nextData.haveNext == 0) {
            nextPage(24, data);
            toDanmuNum++;
        }
        break;
    }
}

var toEwmTextNum = 0;
function toEwmTextPage(data) {
    if (toEwmTextNum > 1) {
        toEwmTextNum = 0;
    }
    switch (toEwmTextNum) {
    case 0:
        if (nextData.haveNext == 1 || nextData.haveNext == 0) beforePage19(data);
        if (nextData.haveNext == 2 || nextData.haveNext == 0) {
            nextPage(19, data);
            toEwmTextNum++;
        }
        break;
    case 1:
        if (nextData.haveNext == 1 || nextData.haveNext == 0) beforePage20(data);
        if (nextData.haveNext == 2 || nextData.haveNext == 0) {
            nextPage(20, data);
            toEwmTextNum++;
        }
        break;
    }
}

var toMoviesNum = 0;
function toMoviesPage(data) {
    if (toMoviesNum > 1) {
        toMoviesNum = 0;
    }
    switch (toMoviesNum) {
    case 0:
        if (nextData.haveNext == 1 || nextData.haveNext == 0) beforePage17(data);
        if (nextData.haveNext == 2 || nextData.haveNext == 0)
            if (movieLen) {
                nextPage(17, data);
                toMoviesNum++;
            }
        break;
    case 1:
        if (nextData.haveNext == 1 || nextData.haveNext == 0) beforePage18(data);
        if (nextData.haveNext == 2 || nextData.haveNext == 0)
            if (movieLen_2) {
                nextPage(18, data);
                toMoviesNum++;
            }
        break;
    }
}
var toVideoNum = 0;

function toVideoPage(data) {
    if (toVideoNum > 1) {
        toVideoNum = 0;
    }
    var url = NasUrl + data.data.videoName;
    switch (toVideoNum) {
    case 0:
        if (nextData.haveNext == 1 || nextData.haveNext == 0) beforePage15(data);
        if (nextData.haveNext == 2 || nextData.haveNext == 0) {
            findFile(url, function () {
                nextPage(15, data);
                toVideoNum++;
            }, function () {
                console.log('视频没找到 ' + data.data.videoName);
            })
        }
        break;
    case 1:
        if (nextData.haveNext == 1 || nextData.haveNext == 0) beforePage16(data);
        if (nextData.haveNext == 2 || nextData.haveNext == 0) {
            findFile(url, function () {
                nextPage(16, data);
                toVideoNum++;
            }, function () {
                console.log('视频没找到 ' + data.data.videoName);
            })
        }
        break;
    }
}
var toOnePicNum = 0;

function toOnePicPage(data) {
    if (toOnePicNum > 1) {
        toOnePicNum = 0;
    }
    switch (toOnePicNum) {
    case 0:
        if (nextData.haveNext == 1 || nextData.haveNext == 0) beforePage34(data);
        if (nextData.haveNext == 2 || nextData.haveNext == 0) {
            nextPage(3, data);
            toOnePicNum++;
        }
        break;
    case 1:
        if (nextData.haveNext == 1 || nextData.haveNext == 0) beforePage34_2(data);
        if (nextData.haveNext == 2 || nextData.haveNext == 0) {
            nextPage(12, data);
            toOnePicNum++;
        }
        break;
    }
}
var toTwoPicNum = 0;

function toTwoPicPage(data) {
    if (toTwoPicNum > 1) {
        toTwoPicNum = 0;
    }
    switch (toTwoPicNum) {
    case 0:
        if (nextData.haveNext == 1 || nextData.haveNext == 0) beforePage34(data);
        if (nextData.haveNext == 2 || nextData.haveNext == 0) {
            nextPage(4, data);
            toTwoPicNum++;
        }
        break;
    case 1:
        if (nextData.haveNext == 1 || nextData.haveNext == 0) beforePage34_2(data);
        if (nextData.haveNext == 2 || nextData.haveNext == 0) {
            nextPage(13, data);
            toTwoPicNum++;
        }
        break;
    }
}
var toTwoPicOneTextNum = 0;

function toTwoPicOneTextPage(data) {
    if (toTwoPicOneTextNum > 1) {
        toTwoPicOneTextNum = 0;
    }
    switch (toTwoPicOneTextNum) {
    case 0:
        if (nextData.haveNext == 1 || nextData.haveNext == 0) beforePage10(data);
        if (nextData.haveNext == 2 || nextData.haveNext == 0) {
            nextPage(10, data);
            toTwoPicOneTextNum++;
        }
        break;
    case 1:
        if (nextData.haveNext == 1 || nextData.haveNext == 0) beforePage22(data);
        if (nextData.haveNext == 2 || nextData.haveNext == 0) {
            nextPage(22, data);
            toTwoPicOneTextNum++;
        }
        break;
    }
    //    if (nextData.haveNext == 2 || nextData.haveNext == 0)  toTwoPicNum++;
}
var toTextNum = 0;

function toTextPage(data) {
    if (toTextNum > 1) {
        toTextNum = 0;
    }
    switch (toTextNum) {
    case 0:
        if (nextData.haveNext == 1 || nextData.haveNext == 0) beforePage7(data);
        if (nextData.haveNext == 2 || nextData.haveNext == 0) {
            nextPage(7, data);
            toTextNum++;
        }
        break;
    case 1:
        if (nextData.haveNext == 1 || nextData.haveNext == 0) beforePage8(data);
        if (nextData.haveNext == 2 || nextData.haveNext == 0) {
            nextPage(8, data);
            toTextNum++;
        }
        break;
    }
}

//回执函数 用于 nextPage 播放完成后发送回执
function receiptAjax(obj, time) {
    setTimeout(function () {
        var receipt = JSON.stringify(obj);
        $.ajax({
            url: receiptUrl
            , type: 'post'
            , contentType: "application/json"
            , data: receipt
            , success: function (data) {}
            , error: function (d) {
                console.log('%c回执失败', 'background:#E34747;color:#fff;');
                setTimeout(function () {
                    $.ajax({
                        url: receiptUrl
                        , type: 'post'
                        , contentType: "application/json"
                        , data: receipt
                        , success: function (data) {}
                        , error: function (d) {
                           console.log('%c回执失败 15秒重试失败 ', 'background:#E34747;color:#fff;');
                        }
                    });
                }, 15 * 1000)
            }
        });
    }, time)
}
var lastDataId = "123"; //最近一次不重复的消息ID，随便写，但是不能为空 
//***********************nextPage 翻页函数****************
function nextPage(nt, data) {
    //发送回执
    if (data) {
        //发送回执
        if (!isNaN(data.next) && Terminal != "" && data.id != "" && data.id != null) {
            var receipt = {
                id: data.id
                , terminal: Terminal
                , pageVersion: Ver
            }
            receiptAjax(receipt, data.next * 1 + 5);
        }   
        //如果相同消息则不切换
        if (data.type == "oneimage" || data.type == "text" ||  data.type == "multipleimages" || data.type == "imagesWithOnetitle" ){
            if (data.id && data.id !="" && data.id == lastDataId){
                return false;
            }
            lastDataId = data.id;    
        }
       
    }
    //不带参数时跳转下一页。
    var num_next = "";
    if (isNaN(nt)) {
        var num_all = AllPage.length - 1;
        var nowPage = $(".pt-page-current")[0];
        var _num = "";
        for (var i = 0; i < AllPage.length; i++) {
            (function (n) {
                if (nowPage == $(".pt-page")[n]) {
                    //循环N次
                    num_next = n;
                    for (var j = 0; j < AllPage.length; j++) {
                        if (num_next == num_all) {
                            num_next = 0;
                        }
                        else {
                            num_next = num_next + 1;
                        }
                        if ($(".pt-page")[num_next].enable) {
                            break;
                        }
                    }
                }
            })(i)
        }
    }
    else {
        num_next = nt;
    }
    //跳转页面 67 种效果中随机一种
    PageTransitions.gotoPage(NumRand(67), num_next);
    
//    var nnnnnnnnnnn = 1;
    //    PageTransitions.gotoPage(nnnnnnnnnnn, num_next);
    //    console.log('nnnnnnnnnnn:', nnnnnnnnnnn);
//    if (nnnnnnnnnnn > 4) {
//        nnnnnnnnnnn = 1;
//    }
//    else {
//        nnnnnnnnnnn++;
//    }
    //扫尾修复函数，修复跳转后上一页的遗留问题，例如关闭上一页定时器，清空上一页的Dom WebGl 等。
    fixdom(num_next);
    //初始跳转页的开始动作 afterPageX();
    switch (num_next) {
    case 0:
        afterPage0();
        break;
    case 1:
        break;
    case 2:
        afterPage2();
        break;
    case 3:
        afterPage34();
        break;
    case 4:
        afterPage34();
        break;
    case 5:
        break;
    case 6:
        afterPage6();
        break;
    case 7:
        setTimeout(function () {
            afterPage7();
        }, 100)
        break;
    case 8:
        afterPage8();
        break;
    case 9:
        break;
    case 10:
        afterPage10();
        break;
    case 11:
        afterPage11();
        break;
    case 12:
        afterPage34_2();
        break;
    case 13:
        afterPage34_2();
        break;
    case 14:
        afterPage14();
        break;
    case 15:
        afterPage15();
        break;
    case 16:
        afterPage16();
        break;
    case 17:
        afterPage17();
        break;
    case 18:
        afterPage18();
        break;
    case 19:
        break;
    case 20:
        break;
    case 21:
        afterPage21();
        break;
    case 22:
        afterPage22();
        break;
    case 23:
        afterPage23();
        break;
    case 24:
        afterPage24();
        break;
    case 25:
        setTimeout(function(){
            afterPage25();
        },2000)        
        break;
    case 26:
        setTimeout(function(){
            afterPage26();
        },2000)        
        break;
    }
}
//****************** 文字二维码 ***** id:text *** Page:0 ************
function beforePage0(js) {}

function afterPage0() {
    //随机背景---->Grd.js 
    //haveGrd(obj, qjArr, bjArr)
    // obj    第几页
    // qjArr  当前模块可用的前景数组，从中随机选择 999为置空 可用【】
    // bjArr  当前模块可用的背景数组，从中随机选择 999为置空 可用【0彩虹，1双色渐变，2单色，3单图】
    haveGrd(0, [999], [0, 1, 2]);
// 模拟手动输入效果
//    setTimeout(function () {
//        textPage1();
//    }, 1000);
}

function textPage0() {
    $('#story').typed({
        strings: ["小恒水饺"]
        , typeSpeed: 0
    });
}
//****************** 地图 ***** id:map *** Page:2 ************
function beforePage2(js) {
    var _text = "";
    for (var i = 0; i < js.data.length; i++) {
        _text += js.data[i].username + " <span style='font-size:16px;color:#ccc;'>在</span> " + js.data[i].orderplatform + " <span style='font-size:16px;color:#ccc;'>订购了</span> " + js.data[i].orderinfo + "　　　　　　";
    }
    $('#map marquee').html(_text);
}

function afterPage2() {
    var options = {
        useEasing: true
        , useGrouping: true
        , separator: ','
        , decimal: '.'
        , prefix: '今日,已卖出<br><br>'
        , suffix: ''
    };
    var mapCount = new CountUp("count", 2888, 30580, 0, 4, options);
    setTimeout(function () {
        mapPage2(mapCount);
    }, 1000);
}

function mapPage2(op) {
    var mapCount = op;
    //饺子跳出
    for (var i = 0; i < $(".dot").length; i++) {
        mapDotShow($(".dot")[i]);
    }
    //饺子卖出
    setTimeout(function () {
        for (var i = 0; i < $(".dot").length; i++) {
            mapDotLight($(".dot")[i], 4000);
        }
        mapCount.start();
    }, 1500)
}

function mapDotShow(obj) {
    setTimeout(function () {
        $(obj).css({
            "transform": "rotateY(0deg) rotateX(-75deg)  translateY(-3px)"
        });
        $(obj).removeClass("light");
    }, 500);
    $(obj).addClass("light");
    $(obj).css({
        "transform": "rotateY(0deg) rotateX(-75deg) translateY(-100px)"
    });
}

function mapDotLight(obj, time) {
    $(obj).addClass("light");
    var _t = Math.floor(Math.random() * 300) + 100;
    var _plus = "";
    _timeout();

    function _timeout() {
        _t = Math.floor(Math.random() * 500) + 100; //最大间隔
        _plus = setTimeout(function () {
            mapDotPlus(obj);
            _timeout();
        }, _t);
    }
    //    var _plus = setInterval(function(){
    //        mapDotPlus(obj);          
    //        var _t = Math.floor(Math.random()*4000)+100;
    //        console.log(_t);
    //    },_t);
    var _plusAll = setTimeout(function () {
        clearInterval(_plus);
        clearTimeout(_plusAll);
        $(obj).removeClass("light");
    }, time);
}

function mapDotPlus(obj) {
    var n = Math.round(Math.random() * 100);
    if (n > 50) {
        var _n = Math.round(Math.random() * 5) + 1;
    }
    else if (n > 20 && n <= 50) {
        var _n = Math.round(Math.random() * 10) + 5;
    }
    else if (n > 5 && n <= 20) {
        var _n = Math.round(Math.random() * 10) + 10;
    }
    else {
        var _n = Math.round(Math.random() * 30) + 20;
    }
    var $i = $("<b/>").text("+" + _n);
    //    var x = e.pageX
    //        , y = e.pageY;
    var x = parseInt($(obj).css("left"))
        , y = parseInt($(obj).css("top"))
    $i.css({
        "z-index": 99999
        , "top": y - 40
        , "left": x
        , "position": "absolute"
            //        , "color": "#E94F06"
            
        , "color": "#fff"
        , "font-size": "20px"
            //        , "background":"#fff"
    });
    $("#dotAll").append($i);
    $i.animate({
        "top": y - 180
        , "opacity": 0
    }, 1500, function () {
        $i.remove();
    });
    //    e.stopPropagation();
}
//***************  单图 ********id onePic ******Page-3**********
//***************  双图 ********id twoPic ******Page-4**********
function beforePage34(js) {
    //    $("#onePic img").attr('src',js.data.imageurl);
    //    
    //    $("#onePic .img").attr("style","background: url('"+ js.data.image.url +"') center center no-repeat;");
    //    if ( js.data.image.height>1000 || js.data.image.width>1900 ){
    //        $("#onePic .img").attr('class','img bg');
    //    }else{
    //        $("#onePic .img").attr('class','img sm');
    //    }
    //    $("#onePic h2").html(js.data.title);
    //    $("#onePic p").html(js.data.subTitle); 
    var data = js.data;
    //    txtAnmt('#onePic .txt', 'bounceOutDown');
    //    txtAnmt('#twoPic .txt', 'bounceOutDown');
    if (!$.isArray(data)) {
        $("#onePic .mbl").attr('style', '');
        //        if (data.image.height < 1050 || data.image.width < 1900) {
        //            if (data.image.width / data.image.height > 1.77777) {
        //                $("#onePic .img img").css({
        //                    height: 1080
        //                });
        //            }
        //            else {
        //                $("#onePic .img img").css({
        //                    height: 1080
        //                });
        //            } 
        //        console.log(data);
        var _picUrl = webUrl + data.image.url;
        if (data.image.height < data.image.width) {
            $("#onePic .img").attr('class', 'img sm');
        }
        else {
            $("#onePic .img").attr('class', 'img bg');
        }
        $("#onePic .img").attr('style', "background:url(" + _picUrl + ") no-repeat center center");
        $("#onePic .mbl").attr('style', "background:url(" + _picUrl + ") no-repeat center center");
        if (data.title == "" && data.subTitle == "") {
            $("#onePic .txt").hide();
        }
        else {
            $("#onePic .txt").show();
        }
        if (!data.title) {
            data.title = "";
        }
        if (!data.subTitle) {
            data.subTitle = "";
        }
        $("#onePic .txt h2").html(data.title);
        $("#onePic .txt p").html(data.subTitle);
        if (data.ewm == "") {
            $("#onePic .modEwm").hide();
        }
        else {
            $("#onePic .modEwm").show();
            ewmFloatBR($("#onePic"), data.ewm);
        }
    }
    else {
        $("#twoPic .img img").attr('style', '');
        $("#twoPic .mbl").attr('style', '');
        for (var i = 0; i < 2; i++) {
            (function (n) {
                if (data[n].image.height < 1050 || data[n].image.width < 1900) {
                    if (data[n].image.width > data[n].image.height) {
                        $("#twoPic .img img").eq(n).css({
                            width: 960
                        });
                    }
                    else {
                        $("#twoPic .img img").eq(n).css({
                            height: 1080
                        });
                    } //h-w比较赋值
                    $("#twoPic .cont .img img").eq(n).css({
                        "max-height": '100%'
                    });
                }
                else if (data[n].image.height > 1050 && data[n].image.width > 1900) {
                    $("#twoPic .cont .img img").eq(n).css({
                        "max-height": '9999px'
                    });
                } //如果小于窗口 强行拉伸
                var _picUrl = webUrl + data[n].image.url;
                $("#twoPic .mbl").eq(n).attr('style', "background:url(" + _picUrl + ") no-repeat center center");
                $("#twoPic .img img").eq(n).attr('src', _picUrl);
                if (data[n].title == "" && data[n].subTitle == "") {
                    $("#twoPic .txt").eq(n).hide();
                }
                else {
                    $("#twoPic .txt").eq(n).show();
                }
                $("#twoPic .txt h2").eq(n).html(data[n].title);
                $("#twoPic .txt p").eq(n).html(data[n].subTitle);
                if (data[n].ewm == "") {
                    $("#twoPic .cont").eq(n).find(".modEwm").hide();
                }
                else {
                    $("#twoPic .cont").eq(n).find(".modEwm").show();
                    ewmFloatBR($("#twoPic .cont").eq(n), data[n].ewm);
                }
            })(i)
        }
    }
}

//二维码文字弹跳
function afterPage34() {
    //    setTimeout(function () {
    //        setTimeout(function () {
    //            txtAnmt('#onePic .txtcont', 'bounce');
    //            txtAnmt('#twoPic .txtcont', 'bounce');
    //        }, 1000);
    //                txtAnmt('#onePic .txt', 'bounceInUp');
    //                txtAnmt('#twoPic .txt', 'bounceInUp');
    //    }, 1000);
}

//文字弹跳函数
function txtAnmt(obj, amt) {
    $(obj).addClass(amt);
    setTimeout(function () {
        $(obj).removeClass(amt);
    }, 1000);
}
//***************  增长数字 ********id num ******Page-6**********
var addNum = {
    "next": "60"
    , "type": "numtemplate"
    , "data": {
        "template": "今天卖出${value}水饺"
        , "startnum": 567
        , "addminnum": 10
        , "addmaxnum": 20
        , "interval": 1000
        , "subtitle": "吃饺子是件时尚的事"
        , "siv_time": 60
    }
};
var addnum_siv = ""; //定时器

function beforePage6(js) {
    $("#num p").html(js.data.subTitle);
    var _tmp = js.data.template;
    var _arr = _tmp.split("${value}");
    addNum = {
        option: {
            useEasing: true
            , useGrouping: true
            , separator: ','
            , decimal: '.'
            , prefix: _arr[0] + " "
            , suffix: " " + _arr[1]
        }
        , startnum: js.data.startnum
        , addminnum: js.data.addminnum
        , addmaxnum: js.data.addmaxnum
        , interval: js.data.interval
        , siv_time: js.next
    };
    haveGrd(6, [999], [0, 1, 2]);
}

function afterPage6() {
    //定时增长数字
    setTimeout(function () {
        addnum_siv = setInterval(function () {
            var _num = NumRand(addNum.addmaxnum, addNum.addminnum);
            var mapCount = new CountUp("id_num_h3", addNum.startnum, addNum.startnum + _num, 0, addNum.interval / 1000, addNum.option);
            mapCount.start();
            addNum.startnum = addNum.startnum + _num;
        }, addNum.interval);
        //结束定时器
        setTimeout(function () {
            clearInterval(addnum_siv);
        }, addNum.siv_time * 1000)
    }, 100)
}

//***************  双行文字 ********id text2 ******Page-7**********
function beforePage7(js) {
    $('#text2 .title').css('opacity', '0');
    $('#text2 .subtitle').css('opacity', '0');
    //    $("#text2 .title .textp").html(js.data.title);
    //    $("#text2 .subtitle p").html(js.data.subTitle);
    //title
    var _title = "<p class='textp'>" + js.data.title + "</p>";
    $("#text2 .title").html(_title);
    //subTitle
    if (js.data.subTitle) {}
    else {
        js.data.subTitle = "";
    }
    var texts = js.data.subTitle.toString().split("<br>");
    var ps = "";
    for (var i = 0; i < texts.length; i++) {
        var p = "<p class='textp'>" + texts[i] + "</p>";
        ps += p;
    }
    $("#text2 .subtitle").html(ps);
    //标题在一行 自适应
    var word_w = Math.round($(document).width() / 100);
    if (js.data.title.length > 9) {
        var ftW = (75 / js.data.title.length).toFixed(2);
        if (ftW * word_w < 75) {
            ftW = '67px'
        }
        else {
            ftW = ftW + 'vw';
        }
    }
    else {
        var ftW = '150px';
    }
    $('#text2 .title').css('font-size', ftW);
    haveGrd(7, [999], [0, 1, 2]);
}

function afterPage7() {
    //    var _tt = $('#text2 .title .textp').html();
    //    setTimeout(function(){
    //        animat_text(_tt[0]);
    //    },1000)
    var pArr = $('#text2 .textp');
    for (var i = 0; i < pArr.length; i++) {
        (function (n) {
            animat_text(pArr[n]);
        })(i)
    }
    $('#text2 .title').css('opacity', '1');
    $('#text2 .subtitle').css('opacity', '1');
    var _numP = NumRand(3);
    if (_numP == 1) {
        $('#text2').find('.textp').css('text-align', 'left');
    }
    else if (_numP == 2) {
        $('#text2').find('.textp').css('text-align', 'center');
    }
    else {
        $('#text2').find('.textp').css('text-align', 'right');
    }
    var _numT = NumRand(3);
    if (_numT == 1) {
        $('#text2').find('.title p').css('text-align', 'left');
    }
    else if (_numT == 2) {
        $('#text2').find('.title p').css('text-align', 'center');
    }
    else {
        $('#text2').find('.title p').css('text-align', 'right');
    }
}

function animat_text(cls, inDelay) {
    $(cls).css('opacity', '1');
    var animateClass = ["flash", "bounce", "shake", "tada", "swing", "wobble", "pulse", "flip", "flipInX", "flipInY", "fadeIn", "fadeInUp", "fadeInDown", "fadeInLeft", "fadeInRight", "fadeInUpBig", "fadeInDownBig", "fadeInLeftBig", "fadeInRightBig", "bounceIn", "bounceInDown", "bounceInUp", "bounceInLeft", "bounceInRight", "rotateIn", "rotateInDownLeft", "rotateInDownRight", "rotateInUpLeft", "rotateInUpRight", "rollIn"];
    $(cls).textillate({
        loop: false
        , initialDelay: 100
        , autoStart: false
        , in : {
            effect: animateClass[NumRand(animateClass.length - 1)]
            , delay: 5
            , shuffle: true
        }
        , out: {}
    });
    $(cls).textillate('start');
    //    setTimeout(function () {
    //        $('.subtitle>span>span:empty').remove();
    //        $('.title>span>span:empty').remove();
    //        $('.title .word1').hide();
    //    }, 200);
}

//***************  暗角文字 ********id text3 ******Page-8**********
function beforePage8(js) {
    if (js.data.subTitle) {}
    else {
        js.data.subTitle = "";
    }
    var _title = "<p class='textp'>" + js.data.title + "</p>";
    var _cont = "<p class='textp'>" + js.data.subTitle + "</p>";
    $("#text3 .title").html(_title);
    $("#text3 .subtitle").html(_cont);
}

function afterPage8() {
    $("#text3>div").css('opacity', '1');
    var pArr = $('#text3 .textp');
    for (var i = 0; i < pArr.length; i++) {
        (function (n) {
            animat_text(pArr[n]);
        })(i)
    }
}

//***************  双图单文 ********id twoPicOneText ******Page-10**********
function beforePage10(js) {
    var data = js.data;
    if (data.title == "" && data.subTitle == "") {
        $("#twoPicOneText .txt").hide();
    }
    else {
        $("#twoPicOneText .txt").show();
    }
    $("#twoPicOneText .txt h2").html(data.title);
    $("#twoPicOneText .txt p").html(data.subTitle);
    if (data.ewm == "") {
        $("#twoPicOneText .modEwm").hide();
    }
    else {
        $("#twoPicOneText .modEwm").show();
        ewmFloatBR($("#twoPicOneText"), data.ewm);
    }
    $("#twoPicOneText .img img").attr('style', '');
    $("#twoPicOneText .mbl").attr('style', '');
    for (var i = 0; i < 2; i++) {
        (function (n) {
            if (data.images[n].height < 1050 || data.images[n].width < 1900) {
                if (data.images[n].width > data.images[n].height) {
                    $("#twoPicOneText .img img").eq(n).css({
                        width: 960
                    });
                }
                else {
                    $("#twoPicOneText .img img").eq(n).css({
                        height: 1080
                    });
                } //h-w比较赋值
                $("#twoPicOneText .cont .img img").eq(n).css({
                    "max-height": '100%'
                });
            }
            else if (data.images[n].height > 1050 && data.images[n].width > 1900) {
                $("#twoPicOneText .cont .img img").eq(n).css({
                    "max-height": '9999px'
                });
            } //如果小于窗口 强行拉伸
            var _picUrl = webUrl + data.images[n].url;
            $("#twoPicOneText .mbl").eq(n).attr('style', "background:url(" + _picUrl + ") no-repeat center center");
            $("#twoPicOneText .img img").eq(n).attr('src', _picUrl);
        })(i)
    }
}

function afterPage10() {
    //文字跳动
    //    setTimeout(function () {
    //        setTimeout(function () {
    //            txtAnmt('.txtcont', 'bounce');
    //        }, 1000);
    //        txtAnmt('.txt', 'bounceInUp');
    //    }, 500);
}


//***************  倒计时 ********id daoJishi ******Page-11**********
function beforePage12(js) {

}

function afterPage12() {
    var _dom = "<canvas class='canvas'></canvas>"
    $("#daoJishi canvas").remove();
    $("#daoJishi").append(_dom);
    S.init();
    var xxxxxxxxxx = '3';
    $("#daoJishi input").val(xxxxxxxxxx);
    $('#daoJishi #djsClick').trigger('click');
    var Arr = ['2', '1', '#icon thumbs-up', '小恒水饺'];
    var n = 0;
    var djsItvl = setInterval(function () {
        //                console.log(djsItvl);
        var x = Arr[n];
        //                $("#daoJishi input").val(x);
        //                $('#daoJishi #djsClick').trigger('click');
        S.UI.simulate(x);
        n++;
        if (n > Arr.length - 1) {
            clearInterval(djsItvl);
        }
    }, 3000);
    //    S.UI.simulate('#rectangle|#countdown 10|#icon thumbs-up|小恒水饺');
}

//***************  单图 ********id onePic_2 ******Page-12**********
//***************  双图 ********id twoPic_2 ******Page-13**********
function beforePage34_2(js) {
    var data = js.data;
    if (!$.isArray(data)) {
        $("#onePic_2 .mbl").attr('style', '');
        var _picUrl = webUrl + data.image.url;
        if (data.image.height < data.image.width) {
            $("#onePic_2 .img").attr('class', 'img sm');
        }
        else {
            $("#onePic_2 .img").attr('class', 'img bg');
        }
        $("#onePic_2 .img").attr('style', "background:url(" + _picUrl + ") no-repeat center center");
        $("#onePic_2 .mbl").attr('style', "background:url(" + _picUrl + ") no-repeat center center");
        if (data.title == "" && data.subTitle == "") {
            $("#onePic_2 .txt").hide();
        }
        else {
            $("#onePic_2 .txt").show();
        }
        $("#onePic_2 .txt h2").html(data.title);
        $("#onePic_2 .txt p").html(data.subTitle);
        if (!data.title) {
            data.title = "";
        }
        if (!data.subTitle) {
            data.subTitle = "";
        }
        if (data.ewm == "") {
            $("#onePic_2 .modEwm").hide();
        }
        else {
            $("#onePic_2 .modEwm").show();
            ewmFloatBR($("#onePic_2"), data.ewm);
        }
    }
    else {
        $("#twoPic_2 .img img").attr('style', '');
        $("#twoPic_2 .mbl").attr('style', '');
        for (var i = 0; i < 2; i++) {
            (function (n) {
                if (data[n].image.height < 1050 || data[n].image.width < 1900) {
                    if (data[n].image.width > data[n].image.height) {
                        $("#twoPic_2 .img img").eq(n).css({
                            width: 960
                        });
                    }
                    else {
                        $("#twoPic_2 .img img").eq(n).css({
                            height: 1080
                        });
                    } //h-w比较赋值
                    $("#twoPic_2 .cont .img img").eq(n).css({
                        "max-height": '100%'
                    });
                }
                else if (data[n].image.height > 1050 && data[n].image.width > 1900) {
                    $("#twoPic_2 .cont .img img").eq(n).css({
                        "max-height": '9999px'
                    });
                } //如果小于窗口 强行拉伸
                var _picUrl = webUrl + data[n].image.url;
                $("#twoPic_2 .mbl").eq(n).attr('style', "background:url(" + _picUrl + ") no-repeat center center");
                $("#twoPic_2 .img img").eq(n).attr('src', _picUrl);
                if (data[n].title == "" && data[n].subTitle == "") {
                    $("#twoPic_2 .txt").eq(n).hide();
                }
                else {
                    $("#twoPic_2 .txt").eq(n).show();
                }
                $("#twoPic_2 .txt h2").eq(n).html(data[n].title);
                $("#twoPic_2 .txt p").eq(n).html(data[n].subTitle);
                if (data[n].ewm == "") {
                    $("#twoPic_2 .cont").eq(n).find(".modEwm").hide();
                }
                else {
                    $("#twoPic_2 .cont").eq(n).find(".modEwm").show();
                    ewmFloatBR($("#twoPic_2 .cont").eq(n), data[n].ewm);
                }
            })(i)
        }
    }
}

function afterPage34_2() {
    //文字跳动
    //    setTimeout(function () {
    //        setTimeout(function () {
    //            txtAnmt('#onePic_2 .txtcont', 'bounce');
    //            txtAnmt('#twoPic_2 .txtcont', 'bounce');
    //        }, 1000);
    //                txtAnmt('#onePic_2 .txt', 'bounceInUp');
    //                txtAnmt('#twoPic_2 .txt', 'bounceInUp');
    //    }, 1000);
}

//***************  云上文字 ********id cloudText ******Page-14**********
function beforePage14(js) {
    if (js) {
        $("#cloudText .text").html(js.data.title);
    }
}
function afterPage14() {
    var _dom = "<div id='cloudText_cont'></div>"
    $("#cloudText_cont").remove();
    $("#cloudText .cont").append(_dom);
    cloudTextInit();
}

//***************  单视频 ********id video ******Page-15**********
function beforePage15(js) {
    var url = NasUrl + js.data.videoName;
    $("#video video").attr("src", url);
}

function afterPage15() {
    goTicker(false);
    if ($("#video video")[0].paused) $("#video video")[0].play();
}
//***************  单视频_2 ********id video_2 ******Page-16**********
function beforePage16(js) {
    var url = NasUrl + js.data.videoName;
    $("#video_2 video").attr("src", url);
}

function afterPage16() {
    goTicker(false);
    if ($("#video_2 video")[0].paused) $("#video_2 video")[0].play();
}
//***************  视频列表 ********id movies ******Page-17**********
var moviesList = [];
var movieNum = 0;
var movieLen = 0;

function beforePage17(js) {
    moviesList = [];
    movieNum = 0;
    for (var i = 0; i < js.data.movies.length; i++) {
        (function (n) {
            var url = NasUrl + js.data.movies[n].name;
            findFile(url, function () {
                moviesList.push(js.data.movies[n]);
                js.data.movies[n].verify = true;
            }, function () {
                js.data.movies[n].verify = false;
                console.log('视频没找到 ' + js.data.movies[n].name);
            })
        })(i)
    }
    movieLen = moviesList.length;
    if (movieLen) {
        var url = NasUrl + moviesList[movieNum].name;
        if (moviesList[movieNum].ewm == "") {
            $('#movies .videoEwm').html("");
            $('#movies .videoEwm').hide();
        }
        else {
            $('#movies .videoEwm').show();
            $('#movies .videoEwm').qrcode({
                width: 180
                , height: 180
                , text: moviesList[movieNum].ewm
            });
        }
        $("#movies video").attr("src", url);
    }
}

function afterPage17() {
    goTicker(false);
    if ($("#movies video")[0].paused) $("#movies video")[0].play();
    $("#movies video").unbind('ended').bind('ended', function () {
        movieNum++;
        if (movieNum >= movieLen) movieNum = 0;
        var url = NasUrl + moviesList[movieNum].name;
        $("#movies video").attr("src", url);
        //        $("#movies .container").addClass("active");
        //        setTimeout(function () {
        $('#movies .videoEwm').html("");
        if (moviesList[movieNum].ewm == "") {
            $('#movies .videoEwm').hide();
        }
        else {
            $('#movies .videoEwm').show();
            $('#movies .videoEwm').qrcode({
                width: 180
                , height: 180
                , text: moviesList[movieNum].ewm
            });
        }
        if ($("#movies video")[0].paused) $("#movies video")[0].play();
        //        $("#movies .container").removeClass("active");
        //        }, 2000);
    });
}
//***************  视频列表_2 ********id movies_2 ******Page-18**********
var moviesList_2 = [];
var movieNum_2 = 0;
var movieLen_2 = 0;

function beforePage18(js) {
    moviesList_2 = [];
    movieNum_2 = 0;
    for (var i = 0; i < js.data.movies.length; i++) {
        (function (n) {
            var url = NasUrl + js.data.movies[n].name;
            findFile(url, function () {
                moviesList_2.push(js.data.movies[n]);
                js.data.movies[n].verify = true;
            }, function () {
                js.data.movies[n].verify = false;
                console.log('视频没找到 ' + js.data.movies[n].name);
            })
        })(i)
    }
    movieLen_2 = moviesList_2.length;
    if (movieLen_2) {
        var url = NasUrl + moviesList_2[movieNum_2].name;
        $('#movies_2 .videoEwm').html("");
        if (moviesList_2[movieNum_2].ewm == "") {
            $('#movies_2 .videoEwm').hide();
        }
        else {
            $('#movies_2 .videoEwm').show();
            $('#movies_2 .videoEwm').qrcode({
                width: 180
                , height: 180
                , text: moviesList_2[movieNum_2].ewm
            });
        }
        $("#movies_2 video").attr("src", url);
    }
}

function afterPage18() {
    goTicker(false);
    if ($("#movies_2 video")[0].paused) $("#movies_2 video")[0].play();
    $("#movies_2 video").unbind('ended').bind('ended', function () {
        movieNum_2++;
        if (movieNum_2 >= movieLen_2) movieNum_2 = 0;
        var url = NasUrl + moviesList_2[movieNum_2].name;
        $("#movies_2 video").attr("src", url);
        //        $("#movies_2 .container").addClass("active");
        //        setTimeout(function () {
        $('#movies_2 .videoEwm').html("");
        if (moviesList_2[movieNum_2].ewm == "") {
            $('#movies_2 .videoEwm').hide();
        }
        else {
            $('#movies_2 .videoEwm').show();
            $('#movies_2 .videoEwm').qrcode({
                width: 180
                , height: 180
                , text: moviesList_2[movieNum_2].ewm
            });
        }
        if ($("#movies_2 video")[0].paused) $("#movies_2 video")[0].play();
        //        $("#movies_2 .container").removeClass("active");
        //        }, 2000);
    });
}

//***************  二维码文字【呼吸二维码+文字自定义】 ********id ewmWithText ******Page-19**********
function beforePage19(js) {
    $('#ewmWithText .ewmWithTextPic').html("");
    $('#ewmWithText .ewmWithTextPic').qrcode({
        width: 360
        , height: 360
        , text: js.data.ewm
    });
    $("#ewmWithText .ewmWithTextText").html(js.data.title);
}

function afterPage19() {}

//***************  二维码文字_2【呼吸二维码+文字自定义】 ********id ewmWithText_2 ******Page-20**********
function beforePage20(js) {
    $('#ewmWithText_2 .ewmWithTextPic').html("");
    $('#ewmWithText_2 .ewmWithTextPic').qrcode({
        width: 360
        , height: 360
        , text: js.data.ewm
    });
    $("#ewmWithText_2 .ewmWithTextText").html(js.data.title);
}

function afterPage20() {}


//***************  goodNight ********id goodNight ******Page-21**********
function beforePage21(js) {
  
}

var goodNightTimer = 0 ;
function afterPage21() {
    goodNightTimer = setInterval(function(){
        daemonNum ++;
    },60*1000)
}







//***************  双图单文_2 ********id twoPicOneText_2 ******Page-22**********
function beforePage22(js) {
    var data = js.data;
    if (data.title == "" && data.subTitle == "") {
        $("#twoPicOneText_2 .txt").hide();
    }
    else {
        $("#twoPicOneText_2 .txt").show();
    }
    $("#twoPicOneText_2 .txt h2").html(data.title);
    $("#twoPicOneText_2 .txt p").html(data.subTitle);
    if (data.ewm == "") {
        $("#twoPicOneText_2 .modEwm").hide();
    }
    else {
        $("#twoPicOneText_2 .modEwm").show();
        ewmFloatBR($("#twoPicOneText_2"), data.ewm);
    }
    $("#twoPicOneText_2 .img img").attr('style', '');
    $("#twoPicOneText_2 .mbl").attr('style', '');
    for (var i = 0; i < 2; i++) {
        (function (n) {
            if (data.images[n].height < 1050 || data.images[n].width < 1900) {
                if (data.images[n].width > data.images[n].height) {
                    $("#twoPicOneText_2 .img img").eq(n).css({
                        width: 960
                    });
                }
                else {
                    $("#twoPicOneText_2 .img img").eq(n).css({
                        height: 1080
                    });
                } //h-w比较赋值
                $("#twoPicOneText_2 .cont .img img").eq(n).css({
                    "max-height": '100%'
                });
            }
            else if (data.images[n].height > 1050 && data.images[n].width > 1900) {
                $("#twoPicOneText_2 .cont .img img").eq(n).css({
                    "max-height": '9999px'
                });
            } //如果小于窗口 强行拉伸
            var _picUrl = webUrl + data.images[n].url;
            $("#twoPicOneText_2 .mbl").eq(n).attr('style', "background:url(" + _picUrl + ") no-repeat center center");
            $("#twoPicOneText_2 .img img").eq(n).attr('src', _picUrl);
        })(i)
    }
}

function afterPage22() {
    // 文字跳动
    //    setTimeout(function () {
    //        setTimeout(function () {
    //            txtAnmt('.txtcont', 'bounce');
    //        }, 1000);
    //        txtAnmt('.txt', 'bounceInUp');
    //    }, 500);
}


//***************  弹幕 ********id danmu ******Page-23**********
var danmuColors = ["#33B5E5", "#0099CC", "#AA66CC", "#9933CC", "#99CC00", "#669900", "#FFBB33", "#FF8800", "#FF4444", "#CC0000"]; //颜色库
var danmuImg = ["cute.png","haha.gif","po.gif","heisenberg.png","yaseng.png","mj.gif"];

var danmuArr = [];
var danmuStop = 0; //弹幕 0开启弹幕，1关闭弹幕
function beforePage23(js) {
    danmuArr = js.data;
}

function afterPage23() {
    goTicker(false);
    var CM  = new CommentManager(document.getElementById('commentCanvas'));
    CM.init();
    // 启动播放弹幕（在未启动状态下弹幕不会移动）
    CM.start();
    // 开放 CM 对象到全局这样就可以在 console 终端里操控
    window.CM = CM;
    // 弹幕播放
    if (danmuArr.length>0){
        danmuArrNum = 0;
        danmuStop = 0;
        pushDanmu();        
    }
}

function pushDanmu() {
    if (danmuArr[danmuArrNum]) {
        var cmtItem = {};
        //    var speed = NumRand(10, 3);
        var imgNum = Math.round(Math.random() * (danmuImg.length - 1));
        var imgUrl = "";
//        if (!danmuArr[danmuArrNum].image || danmuArr[danmuArrNum].image == "") {
//            imgUrl = "./img/barrager/" + danmuImg[imgNum];
//        }
//        else if(danmuArr[danmuArrNum].platformCode ){
//            imgUrl
//        }
//        else{
//            imgUrl = danmuArr[danmuArrNum].image;
//        }
//        
        var waimaiText = "";
        if (danmuArr[danmuArrNum].image && danmuArr[danmuArrNum].image !=""){
            imgUrl = danmuArr[danmuArrNum].image;
        }else if (danmuArr[danmuArrNum].platformCode && danmuArr[danmuArrNum].platformCode !=""){
            switch(danmuArr[danmuArrNum].platformCode)
                {
                case "eleme":
                   imgUrl = "./img/barrager/eleme.png";
                    waimaiText = "饿了么用户" + danmuArr[danmuArrNum].userName + ": ";
                  break;
                case "meituan":
                   imgUrl = "./img/barrager/meituan.png";
                    waimaiText = "美团外卖用户" + danmuArr[danmuArrNum].userName + ": ";
                  break;
                case "baidu":
                   imgUrl = "./img/barrager/baidu.png";
                    waimaiText = "百度外卖用户" + danmuArr[danmuArrNum].userName + ": ";
                  break;
                case "weixin":
                   imgUrl = "./img/barrager/weixin.png";
                    waimaiText = "微信用户" + danmuArr[danmuArrNum].userName + ": ";
                  break;
                default:
                    break;
                }
        }else{
            imgUrl = "./img/barrager/" + danmuImg[imgNum];
        }
        
        
        
        var iconStr = '<span class="icon"><img src="' + imgUrl + '"></span>';
        var danmuColorsNum = Math.round(Math.random() * (danmuColors.length - 1));
        var bgColor = danmuColors[danmuColorsNum];
        // 字幕的节点内容
        var _text = waimaiText + danmuArr[danmuArrNum].text.replace(/\r\n/g,"") + " "+ danmuArr[danmuArrNum].createdTime;
        cmtItem.text = iconStr + _text;
        cmtItem.bgColor = bgColor;
        cmtItem.mode = 1;
        cmtItem.dur = Math.floor(Math.random() * 4000 + 8000);
        cmtItem.delay = Math.floor(Math.random() * 2000);
        cmtItem.opacity = 0.8;
        CM.send(cmtItem);
        var launchTime = NumRand(100, 1000)
        danmuArrNum++;
        if (danmuArrNum > danmuArr.length - 1){
            danmuArrNum = 0;
        }
        if (danmuStop == 0) {
            setTimeout(function () {
                pushDanmu();
            }, launchTime)
        }
        else {
            CM.stop();
            CM.clear();
        }
    }
}



//***************  弹幕_2 ********id danmu_2 ******Page-24**********
var danmuArr_2 = [];
var danmuStop_2 = 0 ;  //弹幕_2 0开启弹幕，1关闭弹幕
function beforePage24(js) {
    danmuArr_2 = js.data;   
}

function afterPage24() {
    goTicker(false);
    var CM_2 = new CommentManager(document.getElementById('commentCanvas_2'));
    CM_2.init();
    // 启动播放弹幕（在未启动状态下弹幕不会移动）
    CM_2.start();
    // 开放 CM 对象到全局这样就可以在 console 终端里操控
    window.CM_2 = CM_2;
    // 弹幕播放
    if (danmuArr_2.length>0){
        danmuArrNum_2 = 0;
        danmuStop_2 = 0 ;
        pushDanmu_2();
    }
}

//{"text":"的方式的方法反反复复反复反复", "bgColor":"#23b28b", "icon":"http://face.weiphone.net/data/avatar/000/15/31/95_avatar_big.jpg"}

function pushDanmu_2() {
       if (danmuArr_2[danmuArrNum_2]) {
        var cmtItem = {};
        //    var speed = NumRand(10, 3);
        var imgNum = Math.round(Math.random() * (danmuImg.length - 1));
        var imgUrl = "";
        var waimaiText = "";
        if (danmuArr_2[danmuArrNum_2].image && danmuArr_2[danmuArrNum_2].image !=""){
            imgUrl = danmuArr_2[danmuArrNum_2].image;
        }else if (danmuArr_2[danmuArrNum_2].platformCode && danmuArr_2[danmuArrNum_2].platformCode !=""){
            switch(danmuArr_2[danmuArrNum_2].platformCode)
                {
                case "eleme":
                   imgUrl = "./img/barrager/eleme.png";
                    waimaiText = "饿了么用户" + danmuArr_2[danmuArrNum_2].userName + ": ";
                  break;
                case "meituan":
                   imgUrl = "./img/barrager/meituan.png";
                    waimaiText = "美团外卖用户" + danmuArr_2[danmuArrNum_2].userName + ": ";
                  break;
                case "baidu":
                   imgUrl = "./img/barrager/baidu.png";
                    waimaiText = "百度外卖用户" + danmuArr_2[danmuArrNum_2].userName + ": ";
                  break;
                case "weixin":
                   imgUrl = "./img/barrager/weixin.png";
                    waimaiText = "微信用户" + danmuArr_2[danmuArrNum_2].userName + ": ";
                  break;
                default:
                    break;
                }
        }else{
            imgUrl = "./img/barrager/" + danmuImg[imgNum];
        }
        
        
        
        var iconStr = '<span class="icon"><img src="' + imgUrl + '"></span>';
        var danmuColorsNum = Math.round(Math.random() * (danmuColors.length - 1));
        var bgColor = danmuColors[danmuColorsNum];
        // 字幕的节点内容
        var _text = waimaiText + danmuArr_2[danmuArrNum_2].text.replace(/\r\n/g,"") + " "+ danmuArr_2[danmuArrNum_2].createdTime;
        cmtItem.text = iconStr + _text;
        cmtItem.bgColor = bgColor;
        cmtItem.mode = 1;
        cmtItem.dur = Math.floor(Math.random() * 4000 + 8000);
        cmtItem.delay = Math.floor(Math.random() * 2000);
        cmtItem.opacity = 0.8;
        CM_2.send(cmtItem);
        var launchTime = NumRand(100, 1000)
        danmuArrNum_2++;
        if (danmuArrNum_2 > danmuArr_2.length - 1){
            danmuArrNum_2 = 0;
        }
        if (danmuStop_2 == 0) {
            setTimeout(function () {
                pushDanmu_2();
            }, launchTime)
        }
        else {
            CM_2.stop();
            CM_2.clear();
        }
    }
}

var luckfuck = [
    {"name": "纪念奖", "user": "裴女士", "tel": "139****7571"},
    {"name": "纪念奖", "user": "郑女士", "tel": "151****1889"},
    {"name": "纪念奖", "user": "何女士", "tel": "151****8760"},
    {"name": "纪念奖", "user": "许女士", "tel": "139****6761"},
    {"name": "纪念奖", "user": "荣先生", "tel": "151****4074"},
    {"name": "纪念奖", "user": "卫女士", "tel": "139****1445"},
    {"name": "纪念奖", "user": "单先生", "tel": "139****1848"},
    {"name": "纪念奖", "user": "滑先生", "tel": "151****9587"},
    {"name": "纪念奖", "user": "羊女士", "tel": "139****7950"},
    {"name": "纪念奖", "user": "於先生", "tel": "151****3400"},
    {"name": "纪念奖", "user": "李先生", "tel": "158****8090"},
    {"name": "纪念奖", "user": "杭女士", "tel": "151****8611"},
    {"name": "纪念奖", "user": "杨先生", "tel": "139****2017"},
    {"name": "纪念奖", "user": "吕女士", "tel": "151****9047"},
    {"name": "纪念奖", "user": "龚女士", "tel": "151****8545"},
    {"name": "纪念奖", "user": "孙女士", "tel": "151****1977"},
    {"name": "纪念奖", "user": "左先生", "tel": "139****7518"},
    {"name": "纪念奖", "user": "翁先生", "tel": "139****0177"},
    {"name": "纪念奖", "user": "钱女士", "tel": "158****4325"},
    {"name": "纪念奖", "user": "甄女士", "tel": "151****4666"},
    {"name": "纪念奖", "user": "赵女士", "tel": "151****2224"},
    {"name": "纪念奖", "user": "钱先生", "tel": "139****0948"},
    {"name": "纪念奖", "user": "钮先生", "tel": "139****6746"},
    {"name": "纪念奖", "user": "封先生", "tel": "139****5411"},
    {"name": "纪念奖", "user": "沈女士", "tel": "158****4900"},
    {"name": "纪念奖", "user": "施先生", "tel": "158****1637"},
    {"name": "纪念奖", "user": "陆女士", "tel": "139****0418"},
    {"name": "纪念奖", "user": "赵先生", "tel": "151****5952"},
    {"name": "纪念奖", "user": "王女士", "tel": "158****8544"},
    {"name": "纪念奖", "user": "惠女士", "tel": "139****9449"},
    {"name": "纪念奖", "user": "冯先生", "tel": "151****1137"},
    {"name": "纪念奖", "user": "石女士", "tel": "158****1534"},
    {"name": "纪念奖", "user": "贲先生", "tel": "151****3663"},
    {"name": "纪念奖", "user": "楮先生", "tel": "158****6403"},
    {"name": "纪念奖", "user": "丁女士", "tel": "158****0974"},
    {"name": "纪念奖", "user": "程先生", "tel": "139****7724"},
    {"name": "纪念奖", "user": "邢女士", "tel": "158****6550"},
    {"name": "纪念奖", "user": "张女士", "tel": "151****3787"},
    {"name": "纪念奖", "user": "嵇先生", "tel": "158****1725"},
    {"name": "纪念奖", "user": "韩女士", "tel": "158****2731"},
    {"name": "纪念奖", "user": "吴女士", "tel": "151****7306"}
];
var luckOnePageNum = 28;
//***************  中奖名单_1 ********id luckList_1 ******Page-25**********
var luckPageNextNum_1 = 0;
function beforePage25(js) {    
    var luckAllArr = js.data.lotterys; 
    if (luckAllArr.length<luckOnePageNum) luckAllArr = $.merge(luckAllArr,luckfuck);
    luckPageNextNum_1 = js.next*1000;
    if (luckPageNextNum_1 > 13000) luckPageNextNum_1=luckPageNextNum_1-3000-10000;
    var copy = "<li><span class='luck'>{{prize}}</span> <span class='name'>{{name}}</span> <span class='phone'>{{phone}}</span></li>";   
    var dom = "";
    for (var i=0; i<luckAllArr.length;i++){
        dom += copy.replace(/\{{prize}}/g, luckAllArr[i].name).replace(/\{{name}}/g, luckAllArr[i].user).replace(/\{{phone}}/g, luckAllArr[i].tel);
    }
    $("#luckList_1 .left ul").html(dom);
    $('#luckList_1 .rBtm .ewm').qrcode({
         text: js.data.ewm
    });   
 }
function afterPage25() {
    var wH = $("#luckList_1 .left").height();
    var allH = $("#luckList_1 .left ul")[0].scrollHeight;   
    var sroH = allH-wH;
    setTimeout(function(){
        $("#luckList_1 .left ul").animate({
            scrollTop: sroH
        }, luckPageNextNum_1,"linear");
    },10*1000);   
}


//***************  中奖名单_2 ********id luckList_2 ******Page-26**********
var luckPageNextNum_2 = 0;
function beforePage26(js) {    
    var luckAllArr = js.data.lotterys; 
    if (luckAllArr.length<luckOnePageNum) luckAllArr = $.merge(luckAllArr,luckfuck);
    luckPageNextNum_2 = js.next*1000;
    if (luckPageNextNum_2 > 13000) luckPageNextNum_2=luckPageNextNum_2-3000-10000;
    var copy = "<li><span class='luck'>{{prize}}</span> <span class='name'>{{name}}</span> <span class='phone'>{{phone}}</span></li>";   
    var dom = "";
    for (var i=0; i<luckAllArr.length;i++){
        dom += copy.replace(/\{{prize}}/g, luckAllArr[i].name).replace(/\{{name}}/g, luckAllArr[i].user).replace(/\{{phone}}/g, luckAllArr[i].tel);
    }
    $("#luckList_2 .left ul").html(dom);    
    $('#luckList_2 .rBtm .ewm').qrcode({
         text: js.data.ewm
    });   
 }
function afterPage26() {
    var wH = $("#luckList_2 .left").height();
    var allH = $("#luckList_2 .left ul")[0].scrollHeight;   
    var sroH = allH-wH;
    setTimeout(function(){
         $("#luckList_2 .left ul").animate({
            scrollTop: sroH
        }, luckPageNextNum_2,"linear");
    },10*1000);   
}


//*****************************tool*********工具函数**************
//图文时，二维码浮动在右下角，且文字环绕
function ewmFloatBR(obj, ewm) {
    obj.find(".textEwmSecondRight").html("");
    obj.find(".textEwmSecondRight").qrcode({
        width: 180
        , height: 180
        , text: ewm
    });
    var f = obj.find(".textEwmFirstRight")[0]; // Get div element
    f.style.height = '0px';
    var wh = obj.find(".txt_wrap").height(); // wrapper div height        
    var sh = obj.find(".textEwmSecondRight")[0].offsetHeight; // secondright div height
    f.style.height = wh - sh + 'px';
}

// 仅ajax头部，判断文件是否存在  现仅用于视频，图片无法用head判断存在（后端）
function findFile(url, scc, err) {
    $.ajax({
        url: url
        , type: 'HEAD'
        , timeout: 300
        , async: false
        , success: function () {
            scc();
            return true;
        }
        , error: function () {
            err();
            return false;
        }
    });
}

//生成 n-m 之间的随机整数
function NumRand(n, m) {
    if (!m) {
        m = 0;
    }
    if (n > m){
         return Math.ceil(Math.random() * (n - m) + m);
    }else{
         return Math.ceil(Math.random() * (m - n) + n);
    }
   
}

//修复函数， nextPage()中调用
//修复nextPage()跳转后上一页的遗留问题，如停止计时器等 
function fixdom(num) {
    //bg-Color
    $.each($(".pt-page"), function (i, item) {
        if (i != 2 && i != 5) {
            //            var _n = NumRand(bgColor.length);
            //            var _n2 = NumRand(bgColor.length);
            //            var _bg_tp = bgColor[_n];
            //            var _bg_bm = bgColor[_n2];        
            //            var _bgc = "background:linear-gradient(180deg," + _bg_tp + "," + _bg_bm + ")";
            //            $(item).attr('style','');
            //            $(item).attr('style',_bgc);
        }
    });
    for (var i = 0; i < StopGradientifyArry.length; i++) {
        clearInterval(StopGradientifyArry[i]);
    }
    //page
    if (num != 7) {
        $("#text2>div").css('opacity', '0');
    } //fix文字页切换时一直显示的问题
    if (num != 8) {
        $("#text3>div").css('opacity', '0');
    } //fix文字页切换时一直显示的问题
    if (num != 6) {
        clearInterval(addnum_siv);
    } //切换页面停止计时器    
    if (num != 11) {
        $("#daoJishi canvas").remove();
    }
    if (num != 14) {
        $("#cloudText_cont").remove();
    }
    if (num != 15) {
        if (!$("#video video")[0].paused) $("#video video")[0].pause();
        //        $("#video video").remove();
        //        $("#video").append("<video width='100%' height='100%' preload='none' poster='./slog.png' loop='loop'></video>");
    }
    if (num != 16) {
        if (!$("#video_2 video")[0].paused) $("#video_2 video")[0].pause();
        //        $("#video_2 video").remove();
        //        $("#video_2").append("<video width='100%' height='100%' preload='none' poster='./slog.png'  loop='loop'></video>");
    }
    if (num != 17) {
        if (!$("#movies video")[0].paused) $("#movies video")[0].pause();
        //        $("#movies video").remove();
        //        $("#movies").append("<video width='100%' height='100%' preload='none' poster='./slog.png'></video>");
    }
    if (num != 18) {
        if (!$("#movies_2 video")[0].paused) $("#movies_2 video")[0].pause();
        //        $("#movies_2 video").remove();
        //        $("#movies_2").append("<video width='100%' height='100%' preload='none' poster='./slog.png'></video>");
    }
    if (num != 21) {
       clearInterval(goodNightTimer);
    }
    if (num != 25) {
        $("#luckList_1 .left ul").html("");
        $('#luckList_1 .rBtm .ewm').html("");
    }
    if (num != 26) {
        $("#luckList_2 .left ul").html("");
        $('#luckList_2 .rBtm .ewm').html("");
    }
    
    
    //视频 弹幕 不要跑马灯
    if (num != 15 && num != 16 && num != 17 && num != 18) {
       if (!$("#movies video")[0].paused) $("#movies video")[0].pause();
       if (!$("#movies_2 video")[0].paused) $("#movies_2 video")[0].pause();
        goTicker(true);
    }
    if (num != 23) {
        if (typeof(CM) == "object") {
            danmuStop = 1;
        }
    }
    if (num != 24) {
         if (typeof(CM_2) == "object") {
            danmuStop_2 = 1;
        }
    }
}
//欢迎页
var pageEwmNum = 0;  //初始选择第一个二维码页
function welCome() {
    console.log('二维码页二维码页二维码页二维码页二维码页二维码页二维码页二维码页二维码页二维码页二维码页二维码页二维码页二维码页二维码页二维码页');
    //      nextPage(0); nextPage(9); nextPage(14); nextPage(5);   二维码页
    var _nowPage = "0";
    $(".pt-page").each(function (index, ele) {
        if ($(".pt-page-current")[0] == ele) {
            _nowPage = index;
            return false;
        }
    });
    var pageEwmNumArr = [0, 9];
    if (_nowPage == pageEwmNumArr[pageEwmNum]) {
        pageEwmNum++;
    }
    nextPage(pageEwmNumArr[pageEwmNum]);
    if (pageEwmNum < pageEwmNumArr.length - 1) {
        pageEwmNum++;
    }
    else {
        pageEwmNum = 0;
    }
}

//获取URL参数
function GetQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
}

//全屏函数
function requestFullScreen() {
    var de = document.documentElement;
    if (de.requestFullscreen) {
        de.requestFullscreen();
    }
    else if (de.mozRequestFullScreen) {
        de.mozRequestFullScreen();
    }
    else if (de.webkitRequestFullScreen) {
        de.webkitRequestFullScreen();
    }
}

//检查是否全为空格
function checkBlankSpace(str) {
    if (!isNaN(str)){
        return true;
    }    
    while (str.lastIndexOf(" ") >= 0) {
        str = str.replace(" ", "");
    }
    if (str.length == 0) {
        return false;
    }
    return true;
}

// ajax Data 检查函数
function checkData(data, type, offlineCheak) {
    if (offlineCheak == undefined){
        netErrNum = 0;       
    }
    offLineMovies = 0;   //视频断网模式 0正常，1全部视频没有
    
    if (!data.result) return worryData(data, type, 'data.result');
    var js = data.result;
    if (!js.next) return worryData(data, type, 'data.result.next');
    if (!js.type) {
        return worryData(data, type);
    }
    else if (js.type == 'oneimage') {
        if (!js.data) {
            return worryData(data, type, 'data.result.data oneimage');
        }
        else {
            if (!js.data.image) {
                return worryData(data, type, 'data.result.data.image');
            }
            else {
                if (!js.data.image.url) return worryData(data, type, 'data.result.data.image.url');
                if (js.data.image.url[0]!="/") js.data.image.url= "/"+js.data.image.url;
                //                var _onePicUrl = webUrl + js.data.image.url;
                //                var _onePicHave = 0;                
                //                findFile(_onePicUrl, function () {_onePicHave =1;}, function () {_onePicHave =0;});  
                //                if (_onePicHave == 0) return worryData(data, type, _onePicUrl+' 图片文件都不存在');
                if (!js.data.image.height) return worryData(data, type, 'data.result.data.image.height');
                if (!js.data.image.width) return worryData(data, type, 'data.result.data.image.width');
            }
            if (!js.data.title || !checkBlankSpace(js.data.title)) js.data.title = "";
            if (!js.data.subTitle || !checkBlankSpace(js.data.subTitle)) js.data.subTitle = "";
            if (!js.data.ewm || !checkBlankSpace(js.data.ewm)) js.data.ewm = "";
        }
    }
    else if (js.type == 'multipleimages') {
        if (!js.data || !$.isArray(js.data)) {
            return worryData(data, type, 'data.result.data multipleimages');
        }
        else {
            for (var i = 0; i < js.data.length; i++) {
                if (!js.data[i].image) {
                    return worryData(data, type, 'data.result.data[i].image');
                }
                else {
                    if (!js.data[i].image.url) return worryData(data, type, 'data.result.data[i].image.url');
                    if (js.data[i].image.url[0]!="/") js.data[i].image.url= "/"+js.data[i].image.url;
                    //                    var _twoPicUrl = webUrl + js.data[i].image.url;
                    //                    var _twoPicHave = 0;
                    //                    findFile(_twoPicUrl, function () {_twoPicHave =1;}, function () {_twoPicHave =0;});                
                    //                    if (_twoPicHave == 0) return worryData(data, type, _twoPicUrl+' 图片文件都不存在');
                    if (!js.data[i].image.height) return worryData(data, type, 'data.result.data[i].image.height');
                    if (!js.data[i].image.width) return worryData(data, type, 'data.result.data[i].image.width');
                }
                if (!js.data[i].title || !checkBlankSpace(js.data[i].title)) js.data[i].title = "";
                if (!js.data[i].subTitle || !checkBlankSpace(js.data[i].subTitle)) js.data[i].subTitle = "";
                if (!js.data[i].ewm || !checkBlankSpace(js.data[i].ewm)) js.data[i].ewm = "";
            }
        }
    }
    else if (js.type == 'text' ||js.type == 'cloudText') {
        if (!js.data) {
            return worryData(data, type, 'data.result.data text');
        }
        else {
            if (!js.data.title || !checkBlankSpace(js.data.title)) return worryData(data, type, 'data.result.data.title为空');
            if (!js.data.subTitle || !checkBlankSpace(js.data.subTitle)) js.data.subTitle = "";
        }
    }
    else if (js.type == 'numtemplate') {
        if (!js.data) {
            return worryData(data, type, 'data.result.data numtemplate');
        }
        else {
            if (!js.data.template || js.data.template.toString().indexOf('${value}') == -1) return worryData(data, type, 'data.result.data.template');
            if (!js.data.startnum) return worryData(data, type, 'data.result.data.startnum');
            if (!js.data.addminnum) return worryData(data, type, 'data.result.data.addminnum');
            if (!js.data.addmaxnum) return worryData(data, type, 'data.result.data.addmaxnum');
            if (!js.data.interval) return worryData(data, type, 'data.result.data.interval');
            if (!js.data.subTitle || !checkBlankSpace(js.data.subTitle)) js.data.subTitle = "";
        }
    }
    else if (js.type == 'map') {}
    else if (js.type == 'imagesWithOnetitle') {
        if (!js.data) {
            return worryData(data, type, 'data.result.data imagesWithOnetitle');
        }
        else {
            if (js.data.images && $.isArray(js.data.images)) {
                for (var i = 0; i < js.data.images.length; i++) {
                    if (!js.data.images[i].url) return worryData(data, type, 'data.result.data.images[i].url');
                    if (js.data.images[i].url[0]!="/") js.data.images[i].url= "/"+js.data.images[i].url;
                    //                    var _oTexTwoPicUrl = webUrl + js.data.images[i].url;
                    //                    var _oTexTwoPicHave = 0;
                    //                    findFile(_oTexTwoPicUrl, function () {_oTexTwoPicHave =1;}, function () {_oTexTwoPicHave =0;});                
                    //                    if (_oTexTwoPicHave == 0) return worryData(data, type, _oTexTwoPicUrl+' 图片文件都不存在');
                    if (!js.data.images[i].height) return worryData(data, type, 'data.result.data.images[i].height');
                    if (!js.data.images[i].width) return worryData(data, type, 'data.result.data.images[i].width');
                }
            }
            else {
                return worryData(data, type, 'data.result.data.images');
            }
            if (!js.data.title || !checkBlankSpace(js.data.title)) js.data.title = "";
            if (!js.data.subTitle || !checkBlankSpace(js.data.subTitle)) js.data.subTitle = "";
            if (!js.data.ewm || !checkBlankSpace(js.data.ewm)) js.data.ewm = "";
        }
    }
    else if (js.type == 'video') {}
    else if (js.type == 'movies') {
        if (!js.data) {
            return worryData(data, type, 'data.result.data movies');
        }
        else {
            if (js.data.movies && $.isArray(js.data.movies)) {
                var mList = [];
                for (var i = 0; i < js.data.movies.length; i++) {
                    if (!js.data.movies[i].name) return worryData(data, type, 'data.result.data.movies[i].name');
                    if (!js.data.movies[i].ewm || !checkBlankSpace(js.data.movies[i].ewm)) js.data.movies[i].ewm = "";
                }
                for (var j = 0; j < js.data.movies.length; j++) {
                    (function (n) {
                        var url = NasUrl + js.data.movies[n].name;
                        findFile(url, function () {
                            mList.push(js.data.movies[n].name);
                            js.data.movies[n].verify = true;
                        }, function () {
                            js.data.movies[n].verify = false;
                            console.log('视频没找到 ' + js.data.movies[n].name);
                        })
                    })(j)
                }
                var mLen = mList.length;
                if (offlineCheak == undefined){  
                    offLineMovies = 0; 
                }
                if (!mLen) {
                    if (offlineCheak == undefined){                    
                        console.log('type:', type);
                        netErrNum = 1;
                        offLineMovies = 1;  //视频断网模式 0正常，1全部视频没有
                        offLineMod();
                    }
                    return worryData(data, type, 'data.result.data.movies 列表文件都不存在');
                }
            }
            else {
                return worryData(data, type, 'data.result.data.movies');
            }
        }
    }
    else if (js.type == 'ewmWithText') {
        if (!js.data) {
            return worryData(data, type, 'data.result.data ewmWithText');
        }
        else {
            if (!js.data.ewm || !checkBlankSpace(js.data.ewm)) return worryData(data, type, 'data.result.data.ewm为空');
            if (!js.data.title || !checkBlankSpace(js.data.title)) js.data.title = "";
            if (!js.data.subTitle || !checkBlankSpace(js.data.subTitle)) js.data.subTitle = "";
        }
    }
    else if (js.type == 'danmu') {
        if (!js.data || !$.isArray(js.data)) {
            return worryData(data, type, 'data.result.data danmu');
        }
        else {
            for (var i = 0; i < js.data.length; i++) {             
                if (!js.data[i].title || !checkBlankSpace(js.data[i].title)) js.data[i].title = "";
                if (!js.data[i].image || !checkBlankSpace(js.data[i].image)) js.data[i].image = "";
                if (!js.data[i].platformCode || !checkBlankSpace(js.data[i].platformCode)) js.data[i].platformCode = "";
                if (!js.data[i].userName || !checkBlankSpace(js.data[i].userName)) js.data[i].userName = "";
                if (!js.data[i].createdTime || !checkBlankSpace(js.data[i].createdTime)) js.data[i].createdTime = "";
                if (!js.data[i].score || isNaN(js.data[i].score) || !(js.data[i].score>0 && js.data[i].score <=5) ) js.data[i].score = "5";
            }
        }
    }
    else if (js.type == 'lottery') {
        if (!js.data) {
            return worryData(data, type, 'data.result.data lottery');
        }else{
            if (!js.data.ewm || !checkBlankSpace(js.data.ewm)) js.data.ewm = "";
            if (!js.data.dayOfLottery || !checkBlankSpace(js.data.dayOfLottery)) js.data.dayOfLottery = "";
            if (!js.data.lotterys || !$.isArray(js.data.lotterys)) {
                return worryData(data, type, 'data.result.data.lotterys为空');
            }else{
                for (var i=0; i<js.data.lotterys.length; i++){
                    if (!js.data.lotterys[i].name || !checkBlankSpace(js.data.lotterys[i].name)) js.data.lotterys[i].name = "";
                    if (!js.data.lotterys[i].user || !checkBlankSpace(js.data.lotterys[i].user)) js.data.lotterys[i].user = "";
                    if (!js.data.lotterys[i].tel || !checkBlankSpace(js.data.lotterys[i].tel)) js.data.lotterys[i].tel = "";
                }
            }
        }
    }else{        
        return worryData(data, type, 'data.result.data 未知数据');
    }

    return data.result;

    //如果Ajax Data 错误则输出日志
    function worryData(data, type, txt) {
        if (txt) {
            console.log('%c' + type + ' Data Worry ', 'background:#E34747;color:#fff;', data, txt);
        }
        else {
            console.log('%c' + type + ' Data Worry ', 'background:#E34747;color:#fff;', data);
        }
        return false;
    }
}
