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
                        width: '100%'
                    }, 750);
                });
                this.an = 1;
            }
        });
    });
    //首页ALL点击标志位置1；
    $(".idTabs>li")[0].an = "1";

    getJs();
    function getJs() {
        var mb = "<li class='info clearfix'><div class='infoLeft'><a target='_blank' href='demos/{{name}}/'>{{name}}</a></div><div class='infoRight'><p class='demoInfo'>{{title}}</p><p class='demoGuest'><a target='_blank' href='demos/{{name}}/readme.md'>{{cont}}</a></p></div><div class='corner'><p><a href='https://github.com/lqzhgood/lqzhgood.github.io/tree/master/demo/demos/{{name}}/' target='_blank'>源码</a><span class='arrow'></span></p></div></li>"
        var keyArry = Object.keys(list);
        //计算demo总数        
        var sum = 0;
        var allDom = ""
            , vueDom = ''
            , htmlDom = ""
            , jsDom = ""
            , othDom = "";
        for (var i = 0; i < keyArry.length; i++) {
            var contArr = list[keyArry[i]];
            sum += contArr.length;
            for (var j = 0; j < contArr.length; j++) {
                var _dom = "";
                _dom = mb.replace(/\{{name}}/g, contArr[j].name).replace(/\{{title}}/g, contArr[j].title).replace(/\{{cont}}/g, contArr[j].cont);
                allDom += _dom;
                if (keyArry[i] == "HTML" || keyArry[i] == "CSS") {
                    htmlDom += _dom;
                }
                else if (keyArry[i] == "Vue") {
                    vueDom += _dom;
                }
                else if (keyArry[i] == "JS") {
                    jsDom += _dom;
                }
                else {
                    othDom += _dom;
                }
            }
        }

        //写入DOM
        $("#allDemo").html(allDom);
        $("#vueDemo").html(vueDom);
        $("#htmlDemo").html(htmlDom);
        $("#jsDemo").html(jsDom);
        $("#otherDemo").html(othDom);
        $("#shuoming span").text(sum);
        //隐藏lodding
        $("#loading").animate({
            opacity: 0
        }, 500, function () {
            $("#loading").css("display", "none");
            $("#wrap").css("display", "block").animate({
                "opacity": "1"
            }, 500);
        });
    }
});