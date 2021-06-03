function plus() {  
    //初始化
    dongZhi();
    setInterval(function(){
        dongZhi();
    },3600*1000)

    //时间
    Date.prototype.format = function (format) {
        if (isNaN(this)) return '';
        var o = {
            'm+': this.getMonth() + 1
            , 'd+': this.getDate()
            , 'h+': this.getHours()
            , 'n+': this.getMinutes()
            , 's+': this.getSeconds()
            , 'S': this.getMilliseconds()
            , 'W': ["日", "一", "二", "三", "四", "五", "六"][this.getDay()]
            , 'q+': Math.floor((this.getMonth() + 3) / 3)
        };
        if (format.indexOf('am/pm') >= 0) {
            format = format.replace('am/pm', (o['h+'] >= 12) ? '下午' : '上午');
            if (o['h+'] >= 12) o['h+'] -= 12;
        }
        if (/(y+)/.test(format)) {
            format = format.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
        }
        for (var k in o) {
            if (new RegExp("(" + k + ")").test(format)) {
                format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
            }
        }
        return format;
    }      
//    Mock.mock('/api/test', {
//        "success":true,
//        "result":{
//            "next":"15",
//            "type":"text",
//            "data":{
//                "title|+1":1,
//                "subTitle":"小恒水饺"
//            }
//        }
//    });
//   
    
    //*********************滚动条*********************
    //**********************左边***************
    //每10s上下滚动一次
    setInterval(function () {
        timeScroll();
    }, 10*1000);
    //开机更新时间
    $(".noticeLeft .time").html(new Date().format("hh:nn"));
    //每分钟更新时间
    setInterval(function () {
        //new Date().format("yyyy-mm-dd hh-nn-ss");
        $(".noticeLeft .time").html(new Date().format("hh:nn"));
    }, 60*1000);  
    //天气API，包含温度和aqi，只有在获取到(一次)成功数据才显示【温度和aqi】，数据错误则1分钟一次，正确1小时一次
    getWeather();
    //*********************右边**************
    //开机获取新闻
    getRollText();
    // 30s 获取一次新闻
    rollTextTimer = setInterval(function(){
       getRollText();
    }, 30*1000)
   
    //右边跑马灯  
    $('#noticeTicker').webTicker({
        height: '65px'
        , startEmpty: false
        , hoverpause: false
        , updatetype: 'reset' //插入模式更新数据（新数据在队列最后，不删除老队列）
    });
    
    //初始化 【留言立即显示弹幕】
    megNow();

//    setInterval(function(){
//        msgPushNow();
//    },3000)
}

var rollTextArr = [];
var rollTextTimer = "";
function getRollText() {
    $.ajax({
        url: newsUrl
        , type: 'GET'
        , error:function(){}
    }).done(function (d) {     
        var data = d;
        if (data.success == true) {
            showRollText(checkNewsData(data,"新闻接口"))
        }
    })
}

var lastRollText = "";
function showRollText(data) {
    if (!data) {
        return false;
    }
//    $("#noticeTicker").webTicker('stop');
    if (JSON.stringify(data.data) && JSON.stringify(data.data) != lastRollText) {
        rollTextArr.push(data.data);
        lastRollText = JSON.stringify(data.data);
        if (rollTextArr.length > 0) {
            if (rollTextArr.length > 10) {
                var rollTextUpNum = rollTextArr.length - 10;
                while (rollTextUpNum--) {
                    rollTextArr.shift();
                }
            }
            var newsLi = "";
            
            for (var i = 0; i < rollTextArr.length; i++) {
                newsLi += "<li> <b>" + rollTextArr[i].title + "</b>" + rollTextArr[i].text + "</li>";
            }
            if (newsLi != ""){      
                $("#noticeTicker").webTicker('update', newsLi, 'swap', true, false);   
            }
            if (rollTextArr == "") {
                $("#notice").removeClass("active");
            }
            else {
                $("#notice").addClass("active");
            }
        }
    }
}

     

function getWeather() {
    $.ajax({
        url: weatherUrl
        , type: 'GET'
        , error: function () {
            //网络错误
            setTimeout(function(){
                getWeather();
            },60*1000);
        }
    }).done(function (d) {
        var data = d;
        if (data.success == true) {
            //aqiAndpo
            var wtLi = "<li class='aqiAndpo'> <span class='aqi'>小恒</span><br><span class='pollution'>Tv</span></li>";
            var wtColor = "#000";
            if (data.result.now.aqi && data.result.now.aqi > 0) {
                var aqi = data.result.now.aqi;
                var pollution = "";
                if (aqi > 0 && aqi < 50) {
                    pollution = "良好";
                    wtColor = "#02E300;"
                }
                else if (aqi >= 50 && aqi < 100) {
                    pollution = "轻度污染";
                    wtColor = "#bfbf18;"
                }
                else if (aqi >= 100 && aqi < 200) {
                    pollution = "中度污染";
                    wtColor = "#FF7E00;"
                }
                else if (aqi >= 200) {
                    pollution = "重度污染";
                    wtColor = "#7E0123;"
                }
                wtLi = "<li class='aqiAndpo'> <span class='aqi'  style='color:" + wtColor + "'>" + aqi + "</span><br><span class='pollution'>" + pollution + "</span>";
            }
            $(".noticeLeft .aqiAndpo").replaceWith(wtLi);
            //weatcherPic 图片模式
//            var wPictLi = "<li class='weatherPic'><span>小恒</span><br><span>Tv</span></li>";
//            if (data.result.now.weatherPic) {
//                wPictLi = "<li class='weatherPic' ><img src='" + data.result.now.weatherPic + "'></li>"
//            }
//            $(".noticeLeft .weatherPic").replaceWith(wPictLi);
            //温度
            var wPictLi = "<li class='weatherPic'><span>小恒</span><span>Tv</span></li>";
            if (data.result.now.temperature && data.result.now.weather ) {
//                wPictLi = "<li class='weatherPic' >" + data.result.now.weatherPic + "</li>"
                wPictLi = "<li class='weatherPic' >" + data.result.now.temperature +"°C " +data.result.now.weather+ "</li>"
            }
            $(".noticeLeft .weatherPic").replaceWith(wPictLi);     
            //第一次获取API成功后才滚动天气
            if (timeScrollOnce == 0) {
               $(".noticeLeft .aqiAndpo").removeClass("disable");
               $(".noticeLeft .weatherPic").removeClass("disable");                
                timeScrollOnce = 1;
            }
            setTimeout(function(){
                getWeather();
            },60*60*1000);
        }
        else {
            //格式错误
             setTimeout(function(){
                getWeather();
            },60*1000);
        }
    })
}

var timeScrollOnce = 0;
function timeScroll() {
    if ($(".logoTicker").scrollTop() > $(".logoTicker")[0].scrollHeight / 2) {
        $(".logoTicker").scrollTop("60");
    }
    $(".logoTicker").animate({
        scrollTop: "+=60"
    }, 500);
}



var stopTickerTimer = 0;
var stopTickerNum = 0;
function goTicker(state) {
    if (state) {
        clearInterval(stopTickerTimer);
        $(".noticeRight .tickerWrap").removeClass("stop");
        $(".noticeRight .replaceText").addClass("stop");
        clearInterval(rollTextTimer);
        rollTextTimer = setInterval(function () {
            getRollText();
        }, 30 * 1000);
        if (stopTickerTimer != 0){
            $("#noticeTicker").webTicker('cont');
        }       
    }
    else {
        stopTickerTimer = setInterval(function(){
            var _text=$(".tickerWrap #noticeTicker li").eq(stopTickerNum).html();
            if (_text == ""){
                stopTickerNum++;
                if ( stopTickerNum < $(".tickerWrap #noticeTicker li").length ){
                    stopTickerNum++;
                }else{
                    stopTickerNum = 0;
                }            
                _text=$(".tickerWrap #noticeTicker li").eq(stopTickerNum).html();
            }
            $(".noticeRight .replaceText").html(_text);
            if ( stopTickerNum < $(".tickerWrap #noticeTicker li").length ){
                stopTickerNum++;
            }else{
                stopTickerNum = 0;
            }            
        },20*1000)        
        $(".noticeRight .tickerWrap").addClass("stop");
        $(".noticeRight .replaceText").removeClass("stop");
        clearInterval(rollTextTimer);
        $("#noticeTicker").webTicker('stop');
    }
}


function checkNewsData(data, objType, offlineCheak) { 
    if (!data.result) return worryData(data, objType, 'data.result');
    var js = data.result;
//    if (!js.next) return worryData(data, objType, 'data.result.next');
    if (!js.type) {
        return worryData(data, objType);
    }    
    else if (js.type == 'news') {
        if (!js.data) {
            return worryData(data, objType, 'data.result.data text');
        }
        else {
            if (!js.data.title || !checkBlankSpace(js.data.title)) js.data.title = "";
            if (!js.data.text || !checkBlankSpace(js.data.text)) return worryData(data, objType, 'data.result.data.text 为空');
        }        
    }else if (js.type == 'empty') {
        return false;
    }
    else{
        return worryData(data, objType, 'data.result.data 错误数据');
    }
    
    return data.result;

    function worryData(data, objType, txt) {
        if (txt) {
            console.log('%c' + objType + ' Data Worry ', 'background:#E34747;color:#fff;', data, txt);
        }
        else {
            console.log('%c' + objType + ' Data Worry ', 'background:#E34747;color:#fff;', data);
        }
        return false;
    }
}




function dongZhi() {
    var date1 = 1482249600000;
    var totalSecs = ( date1 - new Date().getTime() ) / 1000;
    var days = Math.floor(totalSecs / 3600 / 24);
    $("#notice .dongZhiDay").html(days);
}


function megNow() {
    var mes  = new CommentManager(document.getElementById('danmuNow'));
    mes.init();
    mes.start();
    window.mes = mes;
}

function msgPushNow() {
    var cmtItem = {};
    //随机头像
    var imgNum = Math.round(Math.random() * (danmuImg.length - 1));
    var imgUrl = "./img/barrager/" + danmuImg[imgNum];
    var iconStr = '<span class="icon"><img src="' + imgUrl + '"></span>';
    //随机弹幕颜色
    var danmuColorsNum = Math.round(Math.random() * (danmuColors.length - 1));
    var bgColor = danmuColors[danmuColorsNum];
    // 字幕的节点内容
    var _text = "测试文本";
    cmtItem.text = iconStr + _text;
    cmtItem.bgColor = bgColor;
    cmtItem.mode = 1;
    cmtItem.dur = Math.floor(Math.random() * 4000 + 8000);
    cmtItem.delay = Math.floor(Math.random() * 2000);
    cmtItem.opacity = 0.8;
    mes.send(cmtItem);
}