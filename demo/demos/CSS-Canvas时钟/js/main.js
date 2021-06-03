//画布高宽
var canW = 1300;
var canH = 568;
//边距
var mar_top = 60;
var mar_left = 30;
//小球相关
var Radius = 8;
var numArr = [];
var numArrNew = [];
var balls = [];
var color = "rgb(0,102,153)"; //背景球颜色
var colors = ["#33B5E5", "#0099CC", "#AA66CC", "#9933CC", "#99CC00", "#669900", "#FFBB33", "#FF8800", "#FF4444", "#CC0000"]; //前台球颜色库
//控制
var alt = 1;
var on_off = "on"
var mode = "clock"; // clock ticking timer
var timeZt = 0; //暂停记时
//倒计时 ticking
//var endTime = new Date(2016, 5, 25, 12, 05, 00).getTime();
var endTime = new Date().getTime() + 360000000;
//计时器 timer
var startTime = new Date().getTime();



window.onload = function () {
    //自适应监听
//    $(window).resize(function(){
//        if (mode == "clock"){
//            window.location.reload();
//        }
//    });
    
    document.getElementsByTagName("body")[0].style.height = document.documentElement.clientHeight * 0.8 + 'px';
    canW = document.body.clientWidth || document.documentElement.clientWidth;
    canH = document.body.clientHeight *0.8 || document.documentElement.clientHeight *0.8;
    mar_top = Math.round(canH / 4);
    mar_left = Math.round(canW / 9);
    Radius = Math.round(canW * 4 / 5 / 116) - 1; //58个球     


    var canvas = document.getElementById("canvas");
    canvas.width = canW;
    canvas.height = canH;
    var context = canvas.getContext("2d");
    //初始化时间数组
    numArr = getNumArr(numArr);

    setInterval(function () {
        render(context);
        update(context);
    }, 50);
}


//时间  
function render(ctx) {
    //清除画布
    ctx.clearRect(0, 0, canW, canH);
    //绘制球
    var f_w_s = 0;
    for (var i = 0; i < numArr.length; i++) {
        draw(mar_left + f_w_s, mar_top, numArr[i], ctx, {
            "color": color
        });
        //计算偏移距离 
        var f_w = 0;
        if (numArr[i] != "mh") {
            f_w = 2 * (Radius + 1) * (7 + 1);
        } else {
            f_w = 2 * (Radius + 1) * (4 + 1);
        }
        f_w_s += f_w;
    }
}

//彩色小球
function update(ctx) {
    numArrNew = getNumArr(numArrNew);
    //记录不一样的球
    if (on_off == "on" && numArrNew[numArrNew.length - 1] != numArr[numArr.length - 1]) { //数组是对象，不能直接比较  比较秒即可      
        var f_w_s = 0;
        for (var i = 0; i < numArrNew.length; i++) {
            var f_w = 0;
            if (numArr[i] != numArrNew[i]) {
                //如果不一样就把这个球画出来并传入drop参数让Dram函数写入数组
                draw(mar_left + f_w_s, mar_top, numArr[i], ctx, {
                    "drop": 1
                });
            }
            if (numArr[i] != "mh") {
                f_w = 2 * (Radius + 1) * (7 + 1);
            } else {
                f_w = 2 * (Radius + 1) * (4 + 1);
            }
            f_w_s += f_w;
        }
    }
    if (on_off == "on") {
        numArr = numArrNew.concat();
    }
    updateBalls(ctx);
}

function updateBalls(ctx) {
    for (var i = 0; i < balls.length; i++) {
        balls[i].x += balls[i].vx;
        balls[i].y += balls[i].vy;
        balls[i].vy += balls[i].g;
        if (balls[i].y + Radius >= canH) {
            balls[i].y = canH - Radius;
            balls[i].vy = -balls[i].vy * 0.75;
        }
        ctx.beginPath();
        ctx.arc(balls[i].x, balls[i].y, Radius, 0, 2 * Math.PI);
        ctx.fillStyle = balls[i]["color"];
        ctx.fill();
    }
    var cnt = 0;
    for (var i = 0; i < balls.length; i++) {
        if (balls[i].x + Radius > 0 && balls[i].x - Radius < canW) {
            balls[cnt++] = balls[i];
        }
    }
    while (balls.length > Math.min(600, cnt)) {
        //    while (balls.length > cnt) {
        balls.pop();
    }

    if (balls.length > 600) {
        console.log("溢出！调高数组宽度 " + balls.length);
    }
}


//画球 参数 圆心xy 传入字符 画布 颜色
function draw(x, y, num, ctx, option) {
    for (var i = 0; i < dzzt[num].length; i++) {
        for (var j = 0; j < dzzt[num][i].length; j++) {
            if (dzzt[num][i][j] == 1) {
                ctx.beginPath();
                ctx.arc(x + (j * 2 + 1) * (Radius + 1), y + (i * 2 + 1) * (Radius + 1), Radius, 0, 2 * Math.PI);
                if (option["color"]) {
                    ctx.fillStyle = option["color"];
                } else {
                    var colRom = colors[Math.round(Math.random() * (colors.length - 1))];
                    ctx.fillStyle = colRom;
                }
                ctx.fill();
                //将掉落球的参数写入数组
                if (option.drop) {
                    var oneBall = {
                        "x": x + (j * 2 + 1) * (Radius + 1)
                        , "y": y + (i * 2 + 1) * (Radius + 1)
                        , "g": 1.5 + Math.random()
                        , "vx": Math.pow(-1, Math.ceil(Math.random() * 10)) * 4
                        , "vy": -5
                        , "color": colRom
                    }
                    balls.push(oneBall);
                } //掉落球结束
            }
        }
    }
}

//计算时间数组
function getNumArr(arr) {
    if (mode == "clock") {
        var time = new Date();
        var h = time.getHours();
        var m = time.getMinutes();
        var s = time.getSeconds();
    } else {
        if (mode == "ticking") {
            if (on_off == "off") {
                timeZt += 50;
            }
            var time = (endTime - new Date().getTime() + timeZt) / 1000;
            if (time < 0) {
                time = 0;
                if (alt == 1) {
                    alert("午时已到 ╮(~▽~)╭");
                    alt = 0;
                }
            }
        } else if (mode == "timer") {
            if (on_off == "off") {
                timeZt += 50;
            }
            var time = (new Date().getTime() - startTime - timeZt) / 1000;
            if (time > 360000) {
                time = 359999;
                if (alt == 1) {
                    alert("你上天啦 ヽ(✿゜▽゜)ノ");
                    alt = 0;
                }
            }
        }
        var h = Math.floor(time / 3600);
        var m = Math.floor(time % 3600 / 60)
        var s = Math.floor(time % 60);
    }
    //清空数组
    arr.length = 0;
    arr.push(Math.floor(h / 10));
    arr.push(Math.floor(h % 10));
    arr.push("mh");
    arr.push(Math.floor(m / 10));
    arr.push(Math.floor(m % 10));
    arr.push("mh");
    arr.push(Math.floor(s / 10));
    arr.push(Math.floor(s % 10));
    return arr;
}