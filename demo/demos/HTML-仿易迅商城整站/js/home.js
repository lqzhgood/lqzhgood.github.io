$(function () {

    myFocus.set({
        id: 'banner', //焦点图盒子ID
        pattern: 'mF_shutters', //风格应用的名称
        time: 3, //切换时间间隔(秒)
        trigger: 'click', //触发切换模式:'click'(点击)/'mouseover'(悬停)
        width: 810, //设置图片区域宽度(像素)
        height: 335, //设置图片区域高度(像素)
        txtHeight: '0' //文字层高度设置(像素),'default'为默认高度，0为隐藏
    });
    $("#menutag li").mousemove(function () {
        $(".navsele").attr("class", "");
        $(this).addClass("navsele");
    });
    
    $("#menulist dl").mousemove(function () {
        $(".menusale").attr("class", "");
        $(this).addClass("menusale");
        $("#menuright").removeClass("hide");
    });
    
    $("#menulist dl").mouseout(function () {
         $(".menusale").attr("class", "");
    });
    
    $("#menulist dl").mouseout(function () {
        $("#menuright").addClass("hide");
    });
    var time0 = setInterval(function () {
        movepic(0);
    }, 3000);
    var time1 = setInterval(function () {
        movepic(1);
    }, 3000);

    $(".movespan span").click(function () {
        var yy = $(".movespan").index($(this).closest('.movespan'));
        clearInterval(time0);
        clearInterval(time1);
        var zz = $(this).index() - 1;
        $(this).closest("dt").find(".movepic")[0]["num"] = zz;
        $(this).closest("dt").find(".picsele").removeClass("picsele");
        $(this).addClass("picsele");
        
        movepic(yy);
        time0 = setInterval(function () {
            movepic(0);
        }, 3000);
        time1 = setInterval(function () {
            movepic(1);
        }, 3000);


    });


    function movepic(num) {
        var $obj = $(".movepic").eq(num);
        if (!$obj[0]["num"]) {
            $obj[0]["num"] = 0;
        }
        if ($obj.css("left") == "-380px") {
            $obj.animate({
                "left": "0px"
            }, 1000, function () {
                $(".movespan").eq(num).find("span").removeClass("picsele");
                $(".movespan").eq(num).find("span").eq($obj[0]["num"]).addClass("picsele");
            });
        } else {
            $obj.animate({
                "left": -190 * ($obj[0]["num"] + 1)
            }, 1000, function () {
                $(".movespan").eq(num).find("span").removeClass("picsele");
                $(".movespan").eq(num).find("span").eq($obj[0]["num"]).addClass("picsele");
            });
        }
        if ($obj[0]["num"] == 2) {
            $obj[0]["num"] = 0;
        } else {
            $obj[0]["num"]++;
        }
    }
});