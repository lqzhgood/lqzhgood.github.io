window.onload = function () {
//    $("#loading").animate({
//        opacity: 0
//    }, 500, function () {
//        $("#loading").css("display", "none");
//        $("#wrap").css("display", "block").animate({
//            "opacity": "1"
//        }, 500);
//    });
    //    $("#loading").fadeOut(1000);
    //    $("#wrap").fadeIn(1000);
}


var txtObj;
var urlDemo = "demos/";
$(function () {
    var lcolor = ["#ffc0cb", "#9cddd2", "#acd7ed", "#56f9e8"];

    //    右上×号函数
    $(".idTabs span").mouseover(function () {
        $("#shuoming").stop();
        $("#shuoming").show(500);
    });
    $(".idTabs span").mouseout(function () {
        $("#shuoming").stop();
        $("#shuoming").hide(500);
    });

    //    li循环赋值函数
    $(".idTabs>li").each(function (index) {
        var _that = $(this);
        this.an = 0;
        this.lcolor = lcolor[index];

        $(this).click(function () {
            if (this.an == "0") { //如果是当前则不切换
                $(".idTabs>li").each(function (index) {
                    $(this).css("z-index", 5 - index);
                    this.an = 0;
                });
                _that.css("z-index", "10");
                $(".demo").stop();
                $(".demo:visible").slideUp(750, function () {
                    $(".demo").eq(index).slideDown(750);
                });
                $("#strip").animate({
                    width: 1
                }, 750, function () {
                    $("#strip").css("background-color", _that[0].lcolor);
                    $("#strip").animate({
                        width: 550
                    }, 750);
                });
                this.an = 1;
            }
        });
    });

    $(".idTabs>li")[0].an = "1";
    //首页ALL点击标志位置1；

    //    ajax异步调用生成INFO
    getXML();

    function getXML() {
        $.ajax({
            url: "demos/list.xml"
            , async: true
            , cache: true
            , dataType: "xml"
            , success: function (xml) {
                $(xml).find("url").each(function () {
                    var text = $(this).text();
                    //左半边
                    var li = $("<li>").addClass("info").append($("<div>").addClass("infoLeft").append("<a target='_blank' href='" + urlDemo + $(this).text() + "/'>" + $(this).text() + "</a>"));

                    //右半边                    
                    var readme = function (text) {
                        txtObj = "";
                        $.ajax({
                            url: urlDemo + text + "/readme.md"
                            , cache: true
                            , dataType: "text"
                            , async: false
                            , success: function (txt) {
                                txtObj = {
                                    info: txt.substring(0, txt.indexOf("-"))
                                    , guest: txt.substring(txt.indexOf("-") + 1, txt.indexOf("-", txt.indexOf("-") + 1))
                                };
                            }
                            , error: function () {
                                txtObj = "";
                            }
                        });
                    }(text);
                    //输出readme.md内容结束

                    var pinfo = $("<p>").addClass("demoInfo");
                    var pguest = $("<p>").addClass("demoGuest");
                    if (txtObj != "") {
                        var aguest = $("<a>").text(txtObj.guest).attr("target", "_blank").attr("href", urlDemo + $(this).text() + '/readme.md');
                        pinfo.text(txtObj.info);
                        pguest.append(aguest);
                    }
                    li.append($("<div>").addClass("infoRight").append(pinfo).append(pguest));

                    //角标
                    var jburl = "https://github.com/lqzhgood/lqzhgood.github.io/tree/master/demo/demos/" + text + "/";
                    var cor_a = $("<a>").attr("href", jburl).attr("target", "_blank").text("源码");
                    var cor = $("<div>").addClass("corner").append($("<p>").append(cor_a).append($("<span>").addClass("arrow")));
                    li.append(cor);
                    //清除浮动
                    li.addClass("clearfix");

                    if (text.substring(0, text.indexOf("-")) == "CSS" || text.substring(0, text.indexOf("-")) == "HTML") {
                        $("#htmlDemo").append(li);
                    } else if (text.substring(0, text.indexOf("-")) == "JS") {
                        $("#jsDemo").append(li);
                    } else {
                        $("#otherDemo").append(li);
                    }

                    $("#allDemo").append(li.clone(true));;
                    $("#shuoming span").text($("#allDemo li").length)
                });
            }
        });
    }
    $("#loading").animate({
        opacity: 0
    }, 500, function () {
        $("#loading").css("display", "none");
        $("#wrap").css("display", "block").animate({
            "opacity": "1"
        }, 500);
    });
});