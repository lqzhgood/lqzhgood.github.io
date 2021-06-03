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
    
    $("#menuleft").mousemove(function () {
        $("#menulist").show();
    });
    $("#menuleft").mouseout(function () {
        $("#menulist").hide();
    });

    $("#menulist").mouseover(function () {
        $("#menulist").show();
        $("#menuright").show();
    });
    $("#menulist").mouseout(function () {
        $("#menulist").hide();
         $("#menuright").hide();
    });

    $("#menuright").mouseover(function () {
        $("#menuright").show();
         $("#menulist").show();
    });
    $("#menuright").mouseout(function () {
        $("#menuright").hide();
        $("#menulist").hide();
    });

});