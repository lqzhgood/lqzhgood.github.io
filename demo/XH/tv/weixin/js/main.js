var PicNum = {
    pic0: {
        id: 0
        , url: ""
    }
    , pic1: {
        id: 0
        , url: ""
    }
    , pic2: {
        id: 0
        , url: ""
    }
};
var showTime = 20;
var TwoPicOneText = 2;
var webUrl = './';
var selfUrl = webUrl + "./self.json";
var storeUrl = webUrl + "./store.json";
// var webUrl = "http://www.f4hd.com";
// var selfUrl = webUrl + "/api/tvrole/self" + window.location.search;
// var storeUrl = webUrl + "/api/terminal" + window.location.search;
var textUrl = webUrl + '/api/show/text' + window.location.search;
var oneImageUrl = webUrl + '/api/show/oneimage' + window.location.search;
var multipleimagesUrl = webUrl + '/api/show/multipleimages' + window.location.search;
var imagesWithOnetitleUrl = webUrl + '/api/show/imagesWithOnetitle' + window.location.search;
var imageUrl = webUrl + '/image' + window.location.search;
var debugUrl = webUrl + '/api/demo' + window.location.search;
var pageMod = "";
var canSendAllTerminal = false;
var terminal = "";


window.onload = function () {
    var c = 0;
    setTimeout(function () {
        $("#loadingStart").css('display', 'none');
    }, 500);
}




//*************************************************************************

$(function () {
    //test
    $("#lan").css("background-color", "transparent");

    //初始化
    //测试入口
    testIp();

    function testIp(ip) {
        var ip = GetQueryString("ip");
        if (ip != null && ip.toString().length > 1) {
            ip = GetQueryString("ip");
        }
        else {
            ip = ""
        }
        if (ip == "test") {
            webUrl = "http://192.168.3.201";
            selfUrl = webUrl + "/api/tvrole/self" + window.location.search;
            storeUrl = webUrl + "/api/terminal" + window.location.search;
            textUrl = webUrl + '/api/show/text' + window.location.search;
            oneImageUrl = webUrl + '/api/show/oneimage' + window.location.search;
            multipleimagesUrl = webUrl + '/api/show/multipleimages' + window.location.search;
            imagesWithOnetitleUrl = webUrl + '/api/show/imagesWithOnetitle' + window.location.search;
            imageUrl = webUrl + '/image' + window.location.search;
            debugUrl = webUrl + '/api/demo' + window.location.search;
        }
        if (ip == "debug") {
            webUrl = "http://192.168.3.242";
            selfUrl = webUrl + "/api/tvrole/self" + window.location.search;
            storeUrl = webUrl + "/api/terminal" + window.location.search;
            textUrl = webUrl + '/api/show/text' + window.location.search;
            oneImageUrl = webUrl + '/api/show/oneimage' + window.location.search;
            multipleimagesUrl = webUrl + '/api/show/multipleimages' + window.location.search;
            imagesWithOnetitleUrl = webUrl + '/api/show/imagesWithOnetitle' + window.location.search;
            imageUrl = webUrl + '/image' + window.location.search;
            debugUrl = webUrl + '/api/demo' + window.location.search;
            Mock.mock(selfUrl, function () {
                var cc = {
                    "result": {
                        "userId": 2
                        , "maxShowCount": 10
                        , "maxShowSecond": 29
                        , "canSendAllTerminal": true
                    }
                    , "targetUrl": null
                    , "success": true
                    , "error": null
                    , "unAuthorizedRequest": false
                    , "__abp": true
                };
                return cc;
            })
            //   data = JSON.parse(data); 119行联动测试
        }
    }


    var myurl = GetQueryString("terminal");
    if (myurl != null && myurl.toString().length > 1) {
        terminal = GetQueryString("terminal");
    } else {
        loginErr("好像你是从奇怪的地方来的？", 3);
    }
    //查询权限
    $.ajax({
        url: selfUrl
        , type: 'get'
        , contentType: 'application/json'
        , data: ""
        , async: false
        , error: function (e) {
            //结束动画
            loginErr("网络错误？", 3);
        }
    }).then(function (data) {
        //        data = JSON.parse(data);
        if (data.success) {
            //验证字段
            if (!checkData(data, "权限数据")) {
                loginErr("权限获取错误？", 3);
                return false;
            }
            if (data.result.canSendAllTerminal) {
                getAllStore();
                $("#storeArr").show();
            }
            if (data.result.maxShowCount) {
                var JrangeObj = {
                    show: true
                    , scale: [1, data.result.maxShowCount]
                    , to: data.result.maxShowCount
                };
                if (data.result.maxShowCount < 2) {
                    $(".numInput").hide();
                } else {
                    jrange(JrangeObj);
                }
            }
            if (data.result.maxShowSecond) {
                //10进制
                //                var _showNum = Math.floor(data.result.maxShowSecond /10 );
                //                var _bgNum = 2;
                //                var copy = "<option>{{_num}}</option>";
                //                var domAll = "";
                //                if ( _showNum <= 2 ){
                //                    _showNum = 2;
                //                    $(".time").hide();
                //                }                
                //                while ( _bgNum <= _showNum ){
                //                    domAll += copy.replace(/\{{_num}}/g, _bgNum*10);
                //                    _bgNum++;
                //                }
                //                $(".setTime").html(domAll);
                //                                
                if (data.result.maxShowSecond < 30) {
                    $(".setTime").html("<option>20</option>");
                    $(".time").hide();
                } else if (data.result.maxShowSecond < 45 && data.result.maxShowSecond >= 30) {
                    $(".setTime").html("<option>20</option><option>30</option>");
                } else {
                    var _showNum = Math.floor((data.result.maxShowSecond - 30) / 15);
                    var copy = "<option>{{_num}}</option>";
                    var domAll = "<option>20</option><option>30</option>";
                    var _bgNum = 1;
                    while (_bgNum <= _showNum) {
                        domAll += copy.replace(/\{{_num}}/g, _bgNum * 15 + 30);
                        _bgNum++;
                    }
                    $(".setTime").html(domAll);
                }



            }
        } else {
            loginErr("权限不足", 3);
        }
    })






    //快捷入口模式 
    testMode();

    //事件
    //检测行数 
    $(".cont").keydown(function () {
        return rowCk();
    })

    $("textarea").bind('input', function () {
        $('section').css('height', 825 + $(".picText").eq(1).height());
    });
    $("textarea").bind('propertychange', function () {
        $('section').css('height', 825 + $(".picText").eq(1).height());
    });
    //    
    //    $('.title').bind('input',function(){
    //         var _id = event.target.id;
    //        var _val = $('#' + _id).val().replace(/^\n+|\n+$/g, '');
    //         $('#' + _id).val(_val);
    //    });         
    //    
    //    $('.title').bind('propertychange',function(){
    //         var _id = event.target.id;
    //        var _val = $('#' + _id).val().replace(/^\n+|\n+$/g, '');
    //         $('#' + _id).val(_val);
    //    });    
    //门店选择
    $("#storeArr .list li").bind("click", function (e) {
        terminal = $(this).attr("data-value");
        if (terminal == "AllTerminal") {
            canSendAllTerminal = true;
        } else {
            canSendAllTerminal = false;
        }
    })

    showTxt('pic0_tx', 'picDiv0', '.title');
    showTxt('pic0_tx', 'picDiv0', '.cont');
    showTxt('pic1_tx', 'picDiv1', '.title', 1);
    showTxt('pic1_tx', 'picDiv1', '.cont', 1);
    showTxt('pic2_tx', 'picDiv2', '.title');
    showTxt('pic2_tx', 'picDiv2', '.cont');
    //控制部分
    $("#btn_tx").click(function (e) {
        e.preventDefault();
        $("#btn_tx").attr("disabled", true);
        var $_this = $(this);
        var Data = AjaxData("text");
        if (Data == false) {
            $("#btn_tx").removeAttr("disabled");
            return false;
        }
        else {
            // 发送等待动画
            loading(true);
            mes('info', '正在发送', 1);
            showTime = $(".page1 .setTime").val();
            Data.showSeconds = showTime;
            Data = JSON.stringify(Data);
            var _url = textUrl;
            $.ajax({
                url: _url
                , type: 'post'
                , contentType: 'application/json'
                , data: Data
                , error: function (e) {
                    //结束动画
                    loading(false);
                    $("#btn_tx").removeAttr("disabled");
                    mes('error', '网络错误  ( ・◇・)？');
                }
            }).then(function (data) {
                //结束动画
                $("#btn_tx").removeAttr("disabled");
                setTimeout(function () {
                    loading(false);
                    if (data.success) {
                        $("#Dom_text .title,#Dom_text .cont").val("");
                        mes('success', '发送成功! \(￣▽￣)/');
                        $_this.toggleClass('active');
                        removeCont('text');
                        setTimeout(function () {
                            $_this.removeClass('active');
                        }, 8000)
                    }
                    else {
                        mes('error', '服务器请求失败  ( ・◇・)？');
                    }
                }, 1000);
                //debug
                if (data.success) {
                    console.log(data.result);
                    var debugData = {};
                    debugData = JSON.stringify(data.result);
                    if (pageMod == "debug") {
                        $.ajax({
                            url: debugUrl
                            , type: 'post'
                            , contentType: 'application/json'
                            , data: debugData
                            , success: {
                            }
                            , error: function (e) { }
                        })
                    }
                }
            })
        }
    });
    $("#btn_pic").click(function (e) {
        e.preventDefault();
        $("#btn_pic").attr("disabled", true);
        var $_this = $(this);
        var Data = AjaxData("picOne");
        if (Data == false) {
            $("#btn_pic").removeAttr("disabled");
            return false;
        }
        else {
            // 发送等待动画
            loading(true);
            showTime = $(".page2 .setTime").val();
            Data.showSeconds = showTime;
            Data = JSON.stringify(Data);
            var _url = oneImageUrl;
            $.ajax({
                url: _url
                , type: 'post'
                , contentType: 'application/json'
                , data: Data
                , error: function (e) {
                    //结束动画
                    loading(false);
                    $("#btn_pic").removeAttr("disabled");
                    mes('error', '网络错误  ( ・◇・)？');
                }
            }).then(function (data) {
                setTimeout(function () {
                    //结束动画
                    loading(false);
                    $("#btn_pic").removeAttr("disabled");
                    if (data.success) {
                        $("#page2PicDom .title,#page2PicDom .cont").val("");
                        mes('success', '发送成功! \(￣▽￣)/');
                        $_this.toggleClass('active');
                        setTimeout(function () {
                            $_this.removeClass('active');
                        }, 8000)
                        removeCont('pic', 'pic0');
                    }
                    else {
                        mes('error', '服务器请求失败  ( ・◇・)？');
                    }
                }, 1000)
                //debug
                if (data.success) {
                    ewmText = "";
                    console.log(data.result);
                    if ($("#ewmText").val()) {
                        var ewmText = $("#ewmText").val();
                    } else {
                        var ewmText = "";
                    }
                    if (data.result.type == "oneimage") {
                        data.result.data.ewm = ewmText;
                    } else if (data.result.type == "multipleimages") {
                        data.result.data[1].ewm = ewmText;
                    } else if (data.result.type == "imagesWithOnetitle") {
                        data.result.data.ewm = ewmText;
                    }
                    $("#ewmText").val("");
                    var debugData = {};
                    debugData = JSON.stringify(data.result);
                    console.log(debugData);
                    if (pageMod == "debug") {
                        $.ajax({
                            url: debugUrl
                            , type: 'post'
                            , contentType: 'application/json'
                            , data: debugData
                            , success: {
                            }
                            , error: function (e) { }
                        })
                    }
                }
            })
        }
    });
    $("#btn_pic_two").click(function (e) {
        e.preventDefault();
        $("#btn_pic_two").attr("disabled", true);
        var $_this = $(this);
        var Data = AjaxData("picTwo");
        if (Data == false) {
            $("#btn_pic_two").removeAttr("disabled");
            return false;
        }
        else {
            // 发送等待动画
            loading(true);
            if (TwoPicOneText == 2) {
                if ($.isArray(Data.images)) {
                    var _url = multipleimagesUrl
                }
                else {
                    var _url = oneImageUrl;
                }
            }
            else {
                if ($.isArray(Data.images)) {
                    var _url = imagesWithOnetitleUrl
                }
                else {
                    var _url = oneImageUrl;
                }
            }
            showTime = $(".page3 .setTime").val();
            Data.showSeconds = showTime;
            Data = JSON.stringify(Data);
            $.ajax({
                url: _url
                , type: 'post'
                , contentType: 'application/json'
                , data: Data
                , error: function (e) {
                    //结束动画
                    loading(false);
                    $("#btn_pic_two").removeAttr("disabled");
                    mes('error', '网络错误  ( ・◇・)？');
                }
            }).then(function (data) {
                setTimeout(function () {
                    //结束动画
                    loading(false);
                    $("#btn_pic_two").removeAttr("disabled");
                    if (data.success) {
                        $("#page3PicDom .title,#page3PicDom .cont").val("");
                        mes('success', '发送成功! \(￣▽￣)/');
                        $_this.toggleClass('active');
                        removeCont('pic', 'pic1');
                        removeCont('pic', 'pic2');
                        setTimeout(function () {
                            $_this.removeClass('active');
                        }, 8000)
                    }
                    else {
                        mes('error', '服务器请求失败  ( ・◇・)？');
                    }
                }, 1000)
                //debug
                if (data.success) {
                    ewmText = "";
                    console.log(data.result);
                    if ($("#ewmText").val()) {
                        var ewmText = $("#ewmText").val();
                    } else {
                        var ewmText = "";
                    }
                    if (data.result.type == "oneimage") {
                        data.result.data.ewm = ewmText;
                    } else if (data.result.type == "multipleimages") {
                        data.result.data[1].ewm = ewmText;
                    } else if (data.result.type == "imagesWithOnetitle") {
                        data.result.data.ewm = ewmText;
                    }
                    $("#ewmText").val("");
                    var debugData = {};
                    debugData = JSON.stringify(data.result);
                    console.log(debugData);
                    if (pageMod == "debug") {
                        $.ajax({
                            url: debugUrl
                            , type: 'post'
                            , contentType: 'application/json'
                            , data: debugData
                            , success: {
                            }
                            , error: function (e) { }
                        })
                    }
                }
            })
        }
    });
    $(".picCtlOne").click(function () {
        if ($(this).hasClass('active')) {
            return false;
        }
        TwoPicOneText = 1;
        $("#twoPicDom .twoForm").removeClass("twoForm");
        $("#twoPicDom #pic2_tx").addClass("noForm");
        $('#twoPicDom .active').removeClass('active');
        $(this).addClass('active');
        var eee = jQuery.Event("keyup");
        eee.keyCode = 50;
        $("#pic2_tx_title").trigger(eee);
        $("#pic1_tx_title").trigger(eee);
    });
    $(".picCtlTwo").click(function () {
        if ($(this).hasClass('active')) {
            return false;
        }
        TwoPicOneText = 2;
        $("#twoPicDom .noForm").removeClass("noForm");
        $("#twoPicDom form").addClass("twoForm");
        $('#twoPicDom .active').removeClass('active');
        $(this).addClass('active');
        var eee = jQuery.Event("keyup");
        eee.keyCode = 50;
        $("#pic1_tx_title").trigger(eee);
        $("#pic2_tx_title").trigger(eee);
    });

    //红X
    $(".removePic0").click(function (e) {
        e.preventDefault();
        $("#picDiv0").removeClass('havePic');
        if ($('#page2PicDom .havePic').length == 1) { }
        removeCont('pic', 'pic0');
    });
    $(".removePic1").click(function (e) {
        e.preventDefault();
        $("#picDiv1").removeClass('havePic');
        if ($('#page3PicDom .havePic').length == 1) { }
        removeCont('pic', 'pic1');
        $("#Wrap_thm_txt").css("display", "none");
        $("#Wrap_thm_txt *").html("");
    });
    $(".removePic2").click(function (e) {
        e.preventDefault();
        $("#picDiv2").removeClass('havePic');
        if ($('#page3PicDom .havePic').length == 1) { }
        removeCont('pic', 'pic2');
    });
    //点击上传图片
    $("#pic0").click(function () {
        this.value = null;
    });
    $("#pic1").click(function () {
        this.value = null;
    });
    $("#pic2").click(function () {
        this.value = null;
    });
    $("#pic0").change(function () {
        uploadPic('pic0');
    });
    $("#pic1").change(function (ev) {
        uploadPic('pic1', ev);
    });
    $("#pic2").change(function (ev) {
        uploadPic('pic2', ev);
    });
});
//function uploadPic(pic, ev) {
//    console.time('图片转bae64');
//    mes('info', '图片上传中', 5);
//    var file = $("#" + pic)[0].files[0];
//    var fileName = file.name;
//    var reader = new FileReader();
//    reader.readAsDataURL(file);
//    reader.onload = function (e) {
//        var image_base64 = this.result;
//        console.timeEnd('图片转bae64');
//        console.time('图片旋转处理，导出base64');
//        var hz = fileName.split('.')[1];
//        var _ir = ImageResizer({
//            resizeMode: "auto"
//            , dataSource: image_base64
//            , dataSourceType: "base64"
//            , maxWidth: 1920 //允许的最大宽度  
//            , maxHeight: 1080 //允许的最大高度。 
//            , onTmpImgGenerate: function (img) {}
//            , success: function (resizeImgBase64, canvas) {
//                if (hz != 'png') {
//                    ImageOrientationFix({
//                        image: resizeImgBase64
//                        , imgType: "base64"
//                        , onFix: function (base64_fix) {
//                            upImgAjax(pic, fileName, base64_fix);
//                        }
//                    });
//                }
//                else {
//                    upImgAjax(pic, fileName, resizeImgBase64);
//                }
//            }
//            , debug: true
//        });
//    }
//}

function uploadPic(pic, ev) {
    $(".Sub button").attr("disabled", true);
    console.time('图片转bae64');
    mes('info', '图片上传中', 555.5);
    setTimeout(function () {
        var file = $("#" + pic)[0].files[0];
        var fileName = file.name;
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function (e) {
            var image_base64 = this.result;
            console.timeEnd('图片转bae64');
            console.time('图片旋转处理，导出base64');
            var hz = fileName.split('.')[1];
            if (hz != 'png') {
                ImageOrientationFix({
                    image: image_base64
                    , imgType: "base64"
                    , onFix: function (base64_str) {
                        upImgAjax(pic, fileName, base64_str);
                    }
                });
            }
            else {
                upImgAjax(pic, fileName, image_base64);
            }
        }
    }, 500);
}

function upImgAjax(pic, fileName, base64) {
    var file64 = "";
    var nohd_file64 = "";
    file64 = base64;
    nohd_file64 = file64.split(",")[1];
    var picObj = {
        base64: nohd_file64
        , fileName: fileName
    }
    console.timeEnd('图片旋转处理，导出base64');
    console.time('序列化时间');
    picObj = JSON.stringify(picObj);
    //    var fd = new FormData();
    //    fd.append('pic', file);    
    console.timeEnd('序列化时间');
    console.time('ajax发送时间');
    var _url = imageUrl;
    $.ajax({
        url: _url
        , data: picObj
        , cache: false
        , datatype: 'json'
        , contentType: "application/json; charset=utf-8"
        , type: 'POST'
        , success: function (data) {
            $(".Sub button").removeAttr("disabled");
            console.timeEnd('ajax发送时间');
            console.time('ajax回调处理页面');
            if (data.success) {
                PicNum[pic].id = data.result.id;
                PicNum[pic].url = webUrl + '/' + data.result.url;
                //设置缩略图
                $("#" + pic).closest('a').css('background', 'url(' + file64 + ') center center no-repeat');
                $("#" + pic).closest('a').prev().css('background', '#1E6743 url(' + file64 + ') center center no-repeat');
                $("#" + pic).closest('a').css('background', 'url(' + file64 + ') center center no-repeat');
                $("#" + pic).closest('a').prev().css('background', '#1E6743 url(' + file64 + ') center center no-repeat');
                $("#" + pic).closest('div').addClass('havePic');
                console.log($("#" + pic).closest('div'));
                mes('success', '图片上传成功', 3);
            }
            else {
                mes('error', '服务器请求失败  ( ・◇・)？');
            }
            console.timeEnd('ajax回调处理页面');
        }
        , error: function () {
            $(".Sub button").removeAttr("disabled");
            mes('error', '网络错误  ( ・◇・)？');
        }
    });
}

function AjaxData(type) {
    if (type == 'text') {
        var $div = $("#Dom_text");
        var tt = $div.find('.title').val().trim();
        if (tt == undefined || tt == "") {
            mes('error', '请输入文本标题 (￣▽￣") ');
            $("#fm_tx_title").val("");
            document.getElementById("fm_tx_title").focus();
            return false;
        }
        var data = {
            title: tt
            , subTitle: ""
            , showCount: ""
        };
        var cont = $div.find('.cont').val().replace(/^\n+|\n+$/g, "").replace(/(\n){1,}/g, "<br>");
        if (cont != null) {
            data.subTitle = cont;
        }
        var showNum = $('.page1 .single-slider').val();
        if (showNum != null) {
            data.showCount = showNum;
        }
    }
    else if (type == 'picOne') {
        if (PicNum.pic0.id == 0) {
            mes('error', '请选择至少一张图片 （￣工￣lll）');
            return false;
        }
        else if (PicNum.pic0.id != 0) {
            var $div = $("#pic0_tx");
            var data = {
                imageId: PicNum.pic0.id
                , title: ""
                , subTitle: ""
                , showCount: ""
            }
            var tt = $div.find('.title').val().trim();
            var cont = $div.find('.cont').val().replace(/^\n+|\n+$/g, "").replace(/(\n){1,}/g, "<br>");
            if (tt != null) {
                data.title = tt;
            }
            if (cont != null) {
                data.subTitle = cont;
            }
            var showNum = $('.page2 .single-slider').val();
            if (showNum != null) {
                data.showCount = showNum;
            }
        }
    }
    else if (type == 'picTwo') {
        if (TwoPicOneText == 1) {
            if (PicNum.pic1.id == 0 && PicNum.pic2.id == 0) {
                mes('error', '请选择至少一张图片 （￣工￣lll）');
                return false;
            }
            else if (PicNum.pic1.id != 0 && PicNum.pic2.id == 0) {
                var $div = $("#pic1_tx");
                var data = {
                    imageId: PicNum.pic1.id
                    , title: ""
                    , subTitle: ""
                    , showCount: ""
                }
                var tt = $div.find('.title').val();
                var cont = $div.find('.cont').val().replace(/^\n+|\n+$/g, "").replace(/(\n){1,}/g, "<br>");
                if (tt != null) {
                    data.title = tt;
                }
                if (cont != null) {
                    data.subTitle = cont;
                }
                var showNum = $('.page3 .single-slider').val();
                if (showNum != null) {
                    data.showCount = showNum;
                }
            }
            else if (PicNum.pic1.id == 0 && PicNum.pic2.id != 0) {
                var $div = $("#pic1_tx");
                var data = {
                    imageId: PicNum.pic2.id
                    , title: ""
                    , subTitle: ""
                    , showCount: ""
                }
                var tt = $div.find('.title').val();
                var cont = $div.find('.cont').val().replace(/^\n+|\n+$/g, "").replace(/(\n){1,}/g, "<br>");
                if (tt != null) {
                    data.title = tt;
                }
                if (cont != null) {
                    data.subTitle = cont;
                }
                var showNum = $('.page3 .single-slider').val();
                if (showNum != null) {
                    data.showCount = showNum;
                }
            }
            else if (PicNum.pic1.id != 0 && PicNum.pic2.id != 0) {
                //PIC1
                var $div = $("#pic1_tx");
                var data = {
                    images: [PicNum.pic1.id, PicNum.pic2.id]
                    , title: ""
                    , subTitle: ""
                    , showCount: ""
                }
                var tt = $div.find('.title').val();
                var cont = $div.find('.cont').val().replace(/^\n+|\n+$/g, "").replace(/(\n){1,}/g, "<br>");
                if (tt != null) {
                    data.title = tt;
                }
                if (cont != null) {
                    data.subTitle = cont;
                }
                var showNum = $('.page3 .single-slider').val();
                if (showNum != null) {
                    data.showCount = showNum;
                }
            }
        }
        if (TwoPicOneText == 2) {
            if (PicNum.pic1.id == 0 && PicNum.pic2.id == 0) {
                mes('error', '请选择至少一张图片 （￣工￣lll）');
                return false;
            }
            else if (PicNum.pic1.id != 0 && PicNum.pic2.id == 0) {
                var $div = $("#pic1_tx");
                var data = {
                    imageId: PicNum.pic1.id
                    , title: ""
                    , subTitle: ""
                    , showCount: ""
                }
                var tt = $div.find('.title').val();
                var cont = $div.find('.cont').val().replace(/^\n+|\n+$/g, "").replace(/(\n){1,}/g, "<br>");
                if (tt != null) {
                    data.title = tt;
                }
                if (cont != null) {
                    data.subTitle = cont;
                }
                var showNum = $('.page3 .single-slider').val();
                if (showNum != null) {
                    data.showCount = showNum;
                }
            }
            else if (PicNum.pic1.id == 0 && PicNum.pic2.id != 0) {
                var $div = $("#pic2_tx");
                var data = {
                    imageId: PicNum.pic2.id
                    , title: ""
                    , subTitle: ""
                    , showCount: ""
                }
                var tt = $div.find('.title').val();
                var cont = $div.find('.cont').val().replace(/^\n+|\n+$/g, "").replace(/(\n){1,}/g, "<br>");
                if (tt != null) {
                    data.title = tt;
                }
                if (cont != null) {
                    data.subTitle = cont;
                }
                var showNum = $('.page3 .single-slider').val();
                if (showNum != null) {
                    data.showCount = showNum;
                }
            }
            else if (PicNum.pic1.id != 0 && PicNum.pic2.id != 0) {
                //PIC1
                var $div = $("#pic1_tx");
                var data1 = {
                    imageId: PicNum.pic1.id
                    , title: ""
                    , subTitle: ""
                }
                var tt = $div.find('.title').val();
                var cont = $div.find('.cont').val().replace(/^\n+|\n+$/g, "").replace(/(\n){1,}/g, "<br>");
                if (tt != null) {
                    data1.title = tt;
                }
                if (cont != null) {
                    data1.subTitle = cont;
                }
                //PIC2
                var $div = $("#pic2_tx");
                var data2 = {
                    imageId: PicNum.pic2.id
                    , title: ""
                    , subTitle: ""
                }
                var tt = $div.find('.title').val();
                var cont = $div.find('.cont').val().replace(/^\n+|\n+$/g, "").replace(/(\n){1,}/g, "<br>");
                if (tt != null) {
                    data2.title = tt;
                }
                if (cont != null) {
                    data2.subTitle = cont;
                }
                //ALL
                var data = {
                    images: []
                    , showCount: ""
                };
                data.images.push(data1);
                data.images.push(data2);
                var showNum = $('.page3 .single-slider').val();
                if (showNum != null) {
                    data.showCount = showNum;
                }
            }
        }
    }
    data.canSendAllTerminal = canSendAllTerminal;
    data.terminal = terminal;
    console.log('%cAjaxData:', "color:#fff;background:green", data);
    return data;
}
//showTxt('pic1_tx', 'picDiv1', '.title');
function showTxt(txtObj, picObj, type, tpot) {
    if (type == '.title') {
        var obj = 'h5';
    }
    else {
        var obj = 'p';
    }
    $("#" + txtObj + " " + type).keyup(function (e) {
        if ((e.keyCode > 47 && e.keyCode < 58) || (e.keyCode > 64 && e.keyCode < 91) || e.keyCode == 8) {
            var num = $(this).val().length;
            var numAll = $("#" + txtObj + " .title").val().length + $("#" + txtObj + " .cont").val().length;
            //            var txt = new String("X").repeat(num);
            var txt = $("#" + txtObj + " " + type).val().replace(/^\n+|\n+$/g, "").replace(/(\n){1,}/g, "<br>");
            if (obj == 'h5') {
                $("#" + picObj + " .pic_thm_txt " + obj).html(txt);
            }
            else {
                var $p = $("<p>").html(txt);
                $("#" + picObj + " .pic_thm_txt " + obj).replaceWith($p);
            }
            if (txtObj == "pic1_tx") {
                if (obj == 'h5') {
                    $('.picWrap #Wrap_thm_txt ' + obj).html(txt);
                }
                else {
                    var $p = $("<p>").html(txt);
                    $('.picWrap #Wrap_thm_txt ' + obj).replaceWith($p);
                }
            }
            if (TwoPicOneText == 2) {
                $('.picWrap #Wrap_thm_txt').css('display', 'none');
                if (num > 0) {
                    $("#" + picObj + " .pic_thm_txt").css('display', 'block');
                }
                else if (numAll == 0) {
                    $("#" + picObj + " .pic_thm_txt").css('display', 'none');
                }
            }
            else {
                if ($("#picDiv1").hasClass('havePic')) {
                    if (num > 0) {
                        $("#twoPicDom .pic_thm_txt").css('display', 'none');
                        $('.picWrap #Wrap_thm_txt').css('display', 'block');
                    }
                    else if (numAll == 0) {
                        $('.picWrap #Wrap_thm_txt').css('display', 'none');
                    }
                }
            }
        }
    });
}
//removeCont('pic', 'pic2');
function removeCont(type, pic) {
    if (type == 'text') {
        $("#Dom_text .title").val("");
        $("#Dom_text .cont").val("");
    }
    else if (type == 'pic') {
        $("#" + pic + "_tx").find('.title').val('');
        $("#" + pic + "_tx").find('.cont').val('');
        PicNum[pic].id = 0;
        $("#" + pic).closest('a').css('background', 'none');
        $("#" + pic).closest('a').prev().css('background', 'none');
        $("#" + pic).closest('div').removeClass('havePic');
        $("#" + pic + "_thm_txt h5").html("");
        $("#" + pic + "_thm_txt p").html("");
        $("#" + pic + "_thm_txt").css('display', 'none');
        if (pic == 'pic2' && TwoPicOneText == 1) {
            $("#Wrap_thm_txt" + " h5").html("");
            $("#Wrap_thm_txt" + " p").html("");
            $("#Wrap_thm_txt").css('display', 'none');
        }
    }
}



function testMode() {
    var mode = GetQueryString("mode");
    if (mode != null && mode.toString().length > 1) {
        mode = GetQueryString("mode");
    } else {
        mode = ""
    }
    switch (mode) {
        case 'mod':
            $(".mod").show();
            $("section").height('1300px');
            break;
        case 'p':
            $('.fontawesome-camera-retro').trigger('click');
            break;
        case 'pp':
            $('.fontawesome-calendar').trigger('click');
            break;
        case 'demo':
            $(".numInput").css('display', 'none');
            setTimeout(function () {
                $("ts").html("发送");
            }, 300)
            $('.numInput input').jRange('setValue', '1');
            modQuickInput();
            //间隔20秒
            break;
        case 'egg':
            $("h2>img").attr('src', './img/egg/rm.jpg');
            $("h2>text").html('听说你们要上电视');
            $("#loading p").html('谁让你发啦!');
            rmNum = 0;
            break;
        case 'debug':
            $(".numInput").css('display', 'none');
            setTimeout(function () {
                $("ts").html("发送");
            }, 300)
            $('.numInput input').jRange('setValue', '1');
            $("#debug").show();
            pageMod = "debug";
            //间隔20秒
            break;
    }
}
function modQuickInput() {
    //文字模板
    $(".mod_wel").click(function () {
        $("#fm_tx_title").val('欢迎');
        $("#fm_tx_cont").val('欢迎 XXX 光临小恒水饺');
        $("#fm_tx_cont").focus();
        setTimeout(function () {
            $('#fm_tx_cont')[0].select();
            $('#fm_tx_cont')[0].setSelectionRange(2, 7);
        }, 200)
    });
    $(".mod_com").click(function () {
        $("#fm_tx_title").val('入职');
        $("#fm_tx_cont").val('欢迎 XXX 入职小恒水饺');
        $("#fm_tx_cont").focus();
        setTimeout(function () {
            $('#fm_tx_cont')[0].select();
            $('#fm_tx_cont')[0].setSelectionRange(2, 7);
        }, 200)
    });
    $(".mod_not").click(function () {
        $("#fm_tx_title").val('通知');
        $("#fm_tx_cont").val('下午 XXX 开会');
        $("#fm_tx_cont").focus();
        setTimeout(function () {
            $('#fm_tx_cont')[0].select();
            $('#fm_tx_cont')[0].setSelectionRange(2, 7);
        }, 200)
    });
    //单图
    $(".mod_gdUse").click(function () {
        $("#pic0_tx_title").val('最佳员工');
        $("#pic0_tx_cont").val('本月的最佳员工是 XXX ');
        $("#pic0_tx_cont").focus();
        setTimeout(function () {
            $('#pic0_tx_cont')[0].select();
            $('#pic0_tx_cont')[0].setSelectionRange(8, 13);
        }, 200)
    });
    //双图
    $(".mod_nwUse").click(function () {
        $('.picCtlTwo').trigger('click');
        $("#pic1_tx_title").val('新员工');
        $("#pic1_tx_cont").val('欢迎新员工 XXX 加入小恒水饺');
        $("#pic2_tx_title").val('新员工');
        $("#pic2_tx_cont").val('欢迎新员工 XXX 加入小恒水饺');
        setTimeout(function () {
            $('#pic1_tx_cont')[0].select();
            $('#pic1_tx_cont')[0].setSelectionRange(5, 10);
        }, 200)
    });
}

function checkData(data, type) {
    if (!data.result) return worryData(data, type, 'data.result');
    var js = data.result;
    if (!js.maxShowCount && isNaN(js.maxShowCount) && !js.maxShowCount > 0) return worryData(data, type, 'data.result.maxShowCount');
    if (!js.maxShowSecond && isNaN(js.maxShowSecond) && !js.maxShowSecond > 0) return worryData(data, type, 'data.result.maxShowSecond');
    if (!js.canSendAllTerminal && typeof (js.canSendAllTerminal) != "boolean") return worryData(data, type, 'data.result.canSendAllTerminal');
    return data.result;

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

function getAllStore() {
    $.ajax({
        url: storeUrl
        , type: 'get'
        , contentType: 'application/json'
        , data: ""
        , async: false
        , error: function (e) {
            //结束动画
            loginErr("权限获取错误 无法获取门店", 3);
        }
    }).then(function (data) {
        if (data.success) {
            var copy = "<option value='{{store_key}}'>{{store_name}}</option>";
            var domAll = "<option value='AllTerminal'>所有门店</option>";
            for (var i = 0; i < data.result.length; i++) {
                (function (n) {
                    domAll += copy.replace(/\{{store_key}}/g, data.result[n].key).replace(/\{{store_name}}/g, data.result[n].name);
                })(i)
            }
            $("#storeArr>select").html(domAll);
            $('.storeSelect').niceSelect();
            var _comeDom = $("#storeArr .list").find("li[data-value='" + terminal + "']");
            if (_comeDom.length != 0) {
                _comeDom.trigger('click').trigger('click');
            } else {
                canSendAllTerminal = true;
            }

        }
    })
}


//滑条
function jrange(obj) {
    $('.page1 .single-slider').jRange({
        from: 1
        , to: obj.to
        , step: 1
        , scale: obj.scale
        , format: '%s'
        , width: 400
        , showLabels: true
        , showScale: true
        , onstatechange: function () {
            var _val = "显示 " + $(".page1 .single-slider").val() + " 次";
            $(".page1 ts").html(_val);
        }
        , ondragend: function () { }
    });
    $('.page2 .single-slider').jRange({
        from: 1
        , to: obj.to
        , step: 1
        , scale: obj.scale
        , format: '%s'
        , width: 400
        , showLabels: true
        , showScale: true
        , onstatechange: function () {
            var _val = "显示 " + $(".page2 .single-slider").val() + " 次";
            $(".page2 ts").html(_val);
        }
        , ondragend: function () { }
    });
    $('.page3 .single-slider').jRange({
        from: 1
        , to: obj.to
        , step: 1
        , scale: obj.scale
        , format: '%s'
        , width: 400
        , showLabels: true
        , showScale: true
        , onstatechange: function () {
            var _val = "显示 " + $(".page3 .single-slider").val() + " 次";
            $(".page3 ts").html(_val);
        }
        , ondragend: function () { }
    });
};




function mes(type, text, time) {
    if (!time) {
        time = 5;
    }
    $("body").overhang({
        type: type
        , message: text
        , duration: time
    });
}

function loading(kg, text) {
    if (kg) {
        if (text) {
            $("#loading p").text(text);
        } else {
            $("#loading p").text("正在上传");
        }
        $('canvas,section').addClass('blur');
        $("body").css('pointer-events', 'none');
        $("#loading").css({
            'opacity': 1
            , 'z-index': '999'
        });
    }
    else {
        $('.blur').removeClass('blur');
        $("body").css('pointer-events', 'all');
        $("#loading").css({
            'opacity': 0
            , 'z-index': '-1'
        });
    }
}

function getOrientation(file, callback) {
    var reader = new FileReader();
    reader.onload = function (e) {
        var view = new DataView(e.target.result);
        if (view.getUint16(0, false) != 0xFFD8) return callback(-2);
        var length = view.byteLength
            , offset = 2;
        while (offset < length) {
            var marker = view.getUint16(offset, false);
            offset += 2;
            if (marker == 0xFFE1) {
                if (view.getUint32(offset += 2, false) != 0x45786966) return callback(-1);
                var little = view.getUint16(offset += 6, false) == 0x4949;
                offset += view.getUint32(offset + 4, little);
                var tags = view.getUint16(offset, little);
                offset += 2;
                for (var i = 0; i < tags; i++)
                    if (view.getUint16(offset + (i * 12), little) == 0x0112) return callback(view.getUint16(offset + (i * 12) + 8, little));
            }
            else if ((marker & 0xFF00) != 0xFF00) break;
            else offset += view.getUint16(offset, false);
        }
        return callback(-1);
    };
    reader.readAsArrayBuffer(file.slice(0, 64 * 1024));
}

function rowCk() {
    if (event.keyCode == 13 || event.keyCode == 32) {
        var _id = event.target.id;
        var _val = $('#' + _id).val().replace(/^\n+|\n+$/g, '');
        var _valArr = _val.match(/\n/g);
        if (_valArr == null) {
            var _num = 1;
        }
        else {
            var _num = _valArr.length + 1;
        }
        if (_num >= 4) {
            return false;
        }
        $('#' + _id).val(_val);
        return true;
    }
}

function GetQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
}

function loginErr(text, time) {
    loading(true, text);
    setTimeout(function () {
        //        window.location.href = "http://weixin.qq.com/r/i0w1LQzEflEBrUhO9xmZ";
    }, time * 1000)
}


//egg
var rmNum = 0;
var eggck = 0;
$(function () {
    $("h2>img").click(function () {
        if (eggck == 1) {
            return false;
        }
        eggck = 1;
        $("h2>img").removeClass('amtclick');
        $("h2>img").offsetWidth = $("h2>img").offsetWidth;
        $("h2>img").addClass('amtclick');
        setTimeout(function () {
            $("h2>img").removeClass('amtclick');
            eggck = 0;
        }, 1000);
        rmNum++;
        console.log(rmNum);
        if (rmNum > 22) {
            $("h2>img").attr('src', './img/egg/rm.jpg');
            $("h2>text").html('听说你们要上电视');
            $("#loading p").html('谁让你发啦!');
            rmNum = 0;
        }
    });
})