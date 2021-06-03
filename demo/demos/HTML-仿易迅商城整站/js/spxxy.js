$(function () {
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

    $("#move1").click(function () {
        $("#spmainrightspjs").show();
        $(".spmainnavsele").removeClass("spmainnavsele");
        $(this).addClass("spmainnavsele");
    });
    $("#move2").click(function () {
        $("#spmainrightspjs").hide();
        $(".spmainnavsele").removeClass("spmainnavsele");
        $(this).addClass("spmainnavsele");
    });
    $(function () {
        fdj({
            divH: "340" //小图DIV-fdjimg高


            
            , divW: "310" //小图DIV-fdjimg宽


            
            , divborder: "0px solid #ccc" //小图DIV边框


            
            , divBigW: "400" //大图DIV宽，高按照小图等比放大


            
            , divZsSize: "100" //遮罩大小
        });
    });

    $("#sptop #spimg #spimgs div").click(function () {
        $(".spimgdivsele").removeClass("spimgdivsele");
        $(this).addClass("spimgdivsele");
        obj = $(this).find("img");
        var picUrl = obj.attr("src");
        $("#sptop #spimg #spimgl #fdjimg img").attr("src", picUrl);
    });

    $("#spxxys span").click(function () {
        $("#spxxys .spxxselespan").removeClass("spxxselespan");
        $(this).addClass("spxxselespan");
        $("#spxxxz span").html($(".spxxselespan").eq(0).html() + "|" + $(".spxxselespan").eq(1).html());
    });
    $("#spxxgg span").click(function () {
        $("#spxxgg .spxxselespan").removeClass("spxxselespan");
        $(this).addClass("spxxselespan");
        $("#spxxxz span").html($(".spxxselespan").eq(0).html() + "|" + $(".spxxselespan").eq(1).html());
    });
    $("#spxxsl span:contains('-')").click(function () {
        var objval = $("#spxxsl input").val();
        if (objval > 1) {
            $("#spxxsl input").val(objval - 1);
        }
    });
    $("#spxxsl span:contains('+')").click(function () {
        var objval = $("#spxxsl input").val();
        if (objval < 9) {
            $("#spxxsl input").val(objval * 1 + 1);
        }
    });
});