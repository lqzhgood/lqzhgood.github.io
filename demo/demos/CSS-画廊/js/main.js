    var left = [];
    var right = [];
    var all = [];
    var mode = {
            "mode": "around"
            , "around": ""
            , "ring": {
                "r": "500"
                , "jd": "20"
            }
        }
        // around 为两边随机
        //ring为环形 r为半径
    var timer;

    $(function () {
        //        最低分辨率适配
        //        if (1000 > document.body.clientWidth * 0.98) {
        //            $("#wrap").css({
        //                width: "1000px"
        //                , margin: "0 "+ (document.body.clientWidth/2-500) + "px"
        //            });
        //        }
        //        初始化变量 
        mode.ring.jd = Math.ceil(360 / (data.length - 1));
        //初始化DOM
        //    var mb = $("#wrap").html();
        var mb = "<div class='photo' id='photo_{{id}}'><div class='photoWrap'><div class='page zm'><div class='img'><img src='./img/{{photo}}' alt=''></div><p class='name'>{{name}}</p></div><div class='page fm'><p class='cont'>{{cont}}}</p></div></div></div>";
        var html = "";
        var nav = "";
        //随机一个居中
        var _sj = numRdm(0, (data.length - 1));
        for (var i = 0; i < data.length; i++) {
            nav += "<span id='nav_" + i + "'></span>";
            if (i != _sj) {
                html += mb.replace("{{photo}}", data[i].img).replace("{{id}}", i).replace("{{name}}", data[i].caption).replace("{{cont}}", data[i].desc);
            } else {
                html += mb.replace("{{photo}}", data[i].img).replace("{{id}}", i).replace("{{name}}", data[i].caption).replace("{{cont}}", data[i].desc).replace("class='photo'", "class='photo photoCenter'");
            }
        }
        //初始化首张
        // 节能减排        
        // $(".photo").eq(_sj).addClass("photoCenter");
        $("#wrap").html(html + "<div id='nav'>" + nav + "</div>");
        lx();
        run();
        //加特技 为了有个冒泡效果，nav就不 节能减排了。
        $(".photoCenter").css({
            paddingBottom: "200px"
        });
        $("#nav span").eq(_sj).addClass("sp_Sel");
        //点击元素-不在中央则移动元素，在中央则翻转元素
        $(".photo").click(function () {
            //判断是否为当前居中图片
            if (this.className.indexOf("photoCenter") == -1) {
                run(this);
                $(".photoCenter").css({
                    paddingBottom: "0"
                });
            } else {
                var navId = "nav_" + this.id.split("_")[1];
                if (this.className.indexOf("photofm") == -1) {
                    $(this).addClass("photofm");
                    $("#" + navId).addClass("sp_Sel_Bak");
                } else {
                    $(this).removeClass("photofm");
                    $("#" + navId).removeClass("sp_Sel_Bak");
                }
            }
        });
        //导航切换按钮
        $("#nav span").click(function () {
            var elemId = "photo_" + this.id.split("_")[1];
            var phtoId = $(".photoCenter").eq(0).attr("id");
            //判断点击是否为当前居中的图片
            if (elemId == phtoId) {
                //是否为背面
                if ($(this).attr("class").indexOf("sp_Sel_Bak") == -1) {
                    $(this).addClass("sp_Sel_Bak");
                    $("#" + phtoId).addClass("photofm");
                } else {
                    $(this).removeClass("sp_Sel_Bak");
                    $("#" + phtoId).removeClass("photofm");
                }

            } else {
                run($("#" + elemId)[0]);
            }

        });
        //模式切换按钮
        $("#logo span").click(function () {
            if (this.id == "around") {
                this.id = "ring";
                mode.mode = "ring";
                ringTimer();
            } else {
                this.id = "around";
                mode.mode = "around";
                $(".photoXz").removeClass("photoXz");
                clearInterval(timer);
            }
            $(".photo").attr("style", "");
            run();
        });

        //
        $(".photo").mouseover(function () {
            if (mode.mode == "ring" && this.className.indexOf("photoCenter") == -1) {
                clearInterval(timer);
            }
        });
        $(".photo").mouseout(function () {
            if (mode.mode == "ring" && this.className.indexOf("photoCenter") == -1) {
                ringTimer();
            }

        });

    });

    //旋转定时器
    function ringTimer() {
        timer = setInterval(function () {
            console.log(123);
            $.each(all, function (index) {
                if (this != $(".photoCenter").attr("id")) {
                    var jdddd = $("#" + this).attr("style").match(/\({1}\d*deg\){1}/)[0].match(/\d+/g)[0];
                    $("#" + this).css({
                        transform: "rotate(" + (jdddd * 1 + 1) + "deg)"
                    });
                }
            });
        }, 200)
    }

    //移动元素
    function run(elem) {
        if (elem) {
            $(".photo").removeClass("photofm");
            $("#nav span").removeClass("sp_Sel_Bak");
            $(".photoCenter").removeClass("photoCenter");
            $(elem).addClass("photoCenter");
            _id = elem.id;
            _navId = "nav_" + _id.split("_")[1];
            $(".sp_Sel").removeClass("sp_Sel");
            $("#" + _navId).addClass("sp_Sel");
            //            $(elem).attr("style","");
            $(elem).css({
                paddingBottom: 0
                , transform: "scale(1.3) rotate(0deg)"
                , top: "50%"
                , transformOrigin: "50% 50% 0px"
                , zIndex: ""
            })
        }
        if (mode.mode == "around") {
            //移动范围
            var w = $("#wrap").width();
            var h = $("#wrap").height();
            var pw = $(".photo").eq(0).outerHeight();
            var ph = $(".photo").eq(0).outerWidth();
            var range = {
                left: {
                    x: [0, w / 2 - pw * 2 / 3]
                    , y: [0, h]
                }
                , right: {
                    x: [w / 2 + pw * 2 / 3, w]
                    , y: [0, h]
                }
                , reg: [-160, 160]
            };
            //随机移动左右两边的对象

            $.each(left, function () {
                if (this != $(".photoCenter").attr("id")) {
                    $("#" + this).css({
                        top: numRdm(range.left.y[0], range.left.y[1]) + "px"
                        , left: numRdm(range.left.x[0], range.left.x[1]) + "px"
                        , transform: "rotate(" + numRdm(range.reg[0], range.reg[1]) + "deg)"
                    });
                } else {
                    $("#" + this).attr("style", "");
                }
            });
            $.each(right, function () {
                if (this != $(".photoCenter").attr("id")) {
                    $("#" + this).css({
                        top: numRdm(range.right.y[0], range.right.y[1]) + "px"
                        , left: numRdm(range.right.x[0], range.right.x[1]) + "px"
                        , transform: "rotate(" + numRdm(range.reg[0], range.reg[1]) + "deg)"
                    });
                } else {
                    $("#" + this).attr("style", "");
                }
            });

        } else if (mode.mode == "ring") {
            var r = mode.ring.r;
            if (r > $(".photo").eq(0).width() / 2) {
                r = r - $(".photo").eq(0).width() / 2;
            } else {
                r = r * 1 + $(".photo").eq(0).width() / 2;
            }
            var i = 0;
            $.each(all, function (index) {
                if (this != $(".photoCenter").attr("id")) {
                    $("#" + this).addClass("photoXz");
                    $("#" + this).css({
                        transform: "rotate(" + mode.ring.jd * i + "deg)"
                        , top: 50 % -r
                        , transformOrigin: "50% " + (r * 1 + $(".photo").eq(0).outerHeight()) + "px 0px"
                        , zIndex: i + 1
                    });
                    i++;
                }
            });
        }
    };

    //乱序
    function lx() {
        var s = data.length;
        for (var i = 0; i < s; i++) {
            right.push($(".photo").eq(i).attr("id"));
            all.push($(".photo").eq(i).attr("id"));
        }
        if (!Array.prototype.lx) {
            Array.prototype.lx = function () {
                for (var j, x, i = this.length; i; j = parseInt(Math.random() * i), x = this[--i], this[i] = this[j], this[j] = x);
                return this;
            };
        }
        //分割
        right.lx();
        all.lx();
        left = right.splice(0, Math.ceil(data.length / 2));

    }

    function numRdm(min, max) {
        return Math.ceil(Math.random() * (max - min)) + min;
    }