var start = -1;
// var webUrl = "http://www.f4hd.com";
// var messageboardUrl = webUrl + "/api/messageboard";
var webUrl = './';
var messageboardUrl = './';
$(function () {



    testIp();

    $(".mes").focus();
    function testIp() {
        var ip = GetQueryString("ip");
        if (ip != null && ip.toString().length > 1) {
            ip = GetQueryString("ip");
        }
        else {
            ip = ""
        }
        if (ip == "test") {
            webUrl = "http://192.168.3.201";
            messageboardUrl = webUrl + "/api/messageboard";
        }
        if (ip == "debug") {
            webUrl = "http://192.168.3.242";
            messageboardUrl = webUrl + "/api/messageboard";
        }
    }
    var storeUrl = GetQueryString("terminal");
    if (!storeUrl) {
        alert("你好像是从奇怪的地方来的？");
        $("body").addClass("blur");
    }

    $("fieldset label").click(function () {
        start = $(this).prev().val();
    });
    $("fieldset input").click(function () {
        start = $(this).val();
    });
    $("#btn_tx").click(function (e) {
        e.preventDefault();
        $("#btn_tx").attr("disabled", true);
        var $_this = $(this);
        var mesText = $(".mes").val();
        var checkData = 0;
        var myurl = GetQueryString("terminal");

        if (!checkBlankSpace(mesText) || mesText == "") {
            console.log("obj");
            checkData = 1;
            mes('error', "请输入留言");
            $("#btn_tx").removeAttr("disabled");
            return false;
        }
        if (!(start > 0 && start <= 5)) {
            checkData = 1;
            mes('error', "请给我们打分");
            $("#btn_tx").removeAttr("disabled");
            return false;
        }
        if (myurl != null && myurl.toString().length > 1) {
            var terminal = GetQueryString("terminal");
        } else {
            checkData = 1;
            mes('error', "请从正确的入口进入");
            $("#btn_tx").removeAttr("disabled");
            return false;
        }
        if (checkData == 0) {
            //ajax
            loading(true);
            var _url = messageboardUrl
            console.log(_url);
            var data = {
                text: mesText
                , score: start
                , Terminal: terminal
            };
            data = JSON.stringify(data);
            console.log(data);
            $.ajax({
                url: _url
                , type: 'post'
                , contentType: 'application/json'
                , data: data
                , error: function (e) {
                    //结束动画
                    loading(false);
                    $("#btn_tx").removeAttr("disabled");
                    mes('error', '网络错误  ( ・◇・)？');
                }
            }).then(function (data) {
                setTimeout(function () {
                    //结束动画
                    loading(false);
                    $("#btn_tx").removeAttr("disabled");
                    if (data.success) {
                        $(".cont .mes").val("");
                        $("fieldset input").eq(0).trigger("click");
                        mes('success', '发送成功! \(￣▽￣)/');
                        $_this.toggleClass('active');
                        setTimeout(function () {
                            $_this.removeClass('active');
                        }, 8000)
                    }
                    else {
                        mes('error', '服务器请求失败  ( ・◇・)？');
                    }
                }, 1000)
            })
        }
    })
});

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

function loading(kg) {
    if (kg) {
        $('#wrap').addClass('blur');
        $("body").css('pointer-events', 'none');
        $("#loading").css({
            'opacity': 1
            , 'z-index': '999'
        });
    }
    else {
        $('#wrap').removeClass('blur');
        $("body").css('pointer-events', 'all');
        $("#loading").css({
            'opacity': 0
            , 'z-index': '-1'
        });
    }
}

function checkBlankSpace(str) {
    if (!isNaN(str)) {
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

function GetQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
}