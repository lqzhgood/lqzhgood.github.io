$(function () {
    $("#wechat").mouseover(function () {
        if ($(document).width() > 736) {
            $("#wcPic").stop().slideDown();
        }
    });
    $("#wechat").mouseout(function () {
        if ($(document).width() > 736) {
            $("#wcPic").stop().slideUp();
        }
    });
       $('#slider').nivoSlider();
});