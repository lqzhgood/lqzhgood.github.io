$(function () {
    $("#inputbtn").click(function () {
        window.location.href = "./3shaiXuan.html"
    });
    $("#paycar").click(function () {
        window.location.href = "./6paycar.html"
    });
    
    $("#inputext").focus();
    //搜索建议 
    $("#inputext").keyup(function () {
        var val = $("#inputext").val();
        if ($("#inputext").val() != "" && event.keyCode != 27) {
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
                    $("#searsub").html(html);
                    $("#searsub").show();
                }
            });
        } else {
            $("#searsub").hide();
        }
    });
    
    $("#searsub").delegate("li", "click", function () {
       window.location.href = "./3shaiXuan.html";
    });
    
     //其他处ESC 点击隐藏
    $(document).keyup(function () {
        if (event.keyCode == 13) {
            $("#inputbtn").trigger("click");
        }else if (event.keyCode == 27) {
            $("#searsub").hide();
        }
    });
    $(document).click(function () {
        if (event.target.tagName == "INPUT") {
            $("#searsub").show();
        } else {
            $("#searsub").hide();
        }
    });

});