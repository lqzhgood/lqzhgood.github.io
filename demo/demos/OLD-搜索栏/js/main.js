$(function () {
    $("#panel input").focus();
    //切换list
    $("#list").mouseover(function () {
        $("#list li").show();
    });
    $("#list li").mouseout(function () {
        $("#list li[class!=li_bgc]").hide();
    });
    

    $("#list li").click(function () {
        $("#list li").removeClass("li_bgc").hide();
        $(this).addClass("li_bgc").show();
    });


    //搜索建议 
    $("#panel input").keyup(function () {
        var val = $("#panel input").val();
        if ($("#panel input").val() != "" && event.keyCode != 27) {
            $.ajax({
                url: "http://suggest.taobao.com/sug"
                , data: {
                    "q": val
                    , "code": "utf-8"
                }
                , dataType: "jsonp"
                , jsonp: "callback"
                , type: "get"
                , success: function (data) {
                    var html = "";
                    for (var i = 0; i < data.result.length; i++) {
                        html += "<li>" + data.result[i][0] + "</li>";
                    }
                    $("#suggest ul").html(html);
                    $("#suggest ul").show();
                }
            });
        } else {
            $("#suggest ul").hide();
        }

    });



    $("#suggest ul").delegate("li", "click", function () {
        var tab = $(".li_bgc").text();
        if (tab == "宝 贝") {
            location.href = "https://s.taobao.com/search?q=" + $(this).text();
        } else if (tab == "店 铺") {
            location.href = "https://shopsearch.taobao.com/search?q=" + $(this).text();
        }
    });
    
    //其他处ESC 点击隐藏
    $(document).keyup(function () {
        if (event.keyCode == 13) {
            $("#panel button").trigger("click");
        }else if (event.keyCode == 27) {
            $("#suggest ul").hide();
        }
    });
    $(document).click(function () {
        if (event.target.tagName == "INPUT") {
            $("#suggest ul").show();
        } else {
            $("#suggest ul").hide();
        }
    });
    $("#panel button").click(function () {
        var tab = $(".li_bgc").text();
        if (tab == "宝 贝") {
            location.href = "https://s.taobao.com/search?q=" + $(this).text();
        } else if (tab == "店 铺") {
            location.href = "https://shopsearch.taobao.com/search?q=" + $(this).text();
        }
    });
});