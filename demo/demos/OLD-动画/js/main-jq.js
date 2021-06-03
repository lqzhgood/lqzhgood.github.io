var clix = {
    head: 0
    , eyes: 0
    , nose: 0
    , mouth: 0
};

var light = {
    lightning1: 0
    , lightning2: 0
    , lightning3: 0
, };

var timer1, timer2, timer3;

$(document).ready(function () {
    $("#pic_box").children().each(function () {
        $(this).click(dj);
    });
    goLightning();
    //获得焦点 开始定时器
    window.onfocus = goLightning;
    //失焦 停止动画
    window.onblur = stopLightning;

    $("#btnRandom").click(faceRandom);
    $("#btnReset").click(faceReset);
});

function faceRandom() {
    $(".face").each(function () {
        var num = Math.floor(Math.random() * 10);
        while (clix[this.id] == num) {
            var num = Math.floor(Math.random() * 10);
        }
        clix[this.id] = num;
        $(this).animate({
            left: -367 * num + "px"
        }, 500);


    });
}

function faceReset() {
    $(".face").each(function () {
        clix[this.id] = 0;
        $(this).animate({
            left: "0px"
        }, 500);
    })
}

function goLightning() {
    timer1 = setInterval("lightning($('#lightning1'))", 4000);
    timer2 = setInterval("lightning($('#lightning2'))", 5000);
    timer3 = setInterval("lightning($('#lightning3'))", 7000);
}

function stopLightning() {
    clearInterval(timer1);
    clearInterval(timer2);
    clearInterval(timer3);
}

function dj() {
    obj = this;
    if (clix[obj.id] < 9) {
        clix[obj.id]++;
        $(obj).animate({
            left: "-=367px"
        }, 500);
    } else {
        clix[obj.id] = 0;
        $(obj).animate({
            left: "0px"
        }, 500);
    }
}

function lightning(obj) {
    $(obj[0]).fadeIn(250).fadeOut(250);
    light[obj[0].id]++;
    document.title = light.lightning1 + " " + light.lightning2 + " " + light.lightning3;
}