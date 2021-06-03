var JsUrl = "./jsonp/menu.js?" + new Date().getTime();


var mb = "<li class='clearfix'> <span class='name'>{{name}}</span><span class='pri'>{{pri}}</span></li>"
$(function () {
    var jzDom = ""
        , lcDom = ""
        , ylDom = "";
    $.getJSON(JsUrl, function (data) {
        for (var i = 0; i < data.length; i++) {
            if (data[i].type == "饺子") {
                jzDom += mb.replace(/\{{name}}/g, data[i].name).replace(/\{{pri}}/g, data[i].price);
            }
            else if (data[i].type == "凉菜") {
                lcDom += mb.replace(/\{{name}}/g, data[i].name).replace(/\{{pri}}/g, data[i].price);
            }
            else if (data[i].type == "饮料") {
                ylDom += mb.replace(/\{{name}}/g, data[i].name).replace(/\{{pri}}/g, data[i].price);
            }
        }
        $("#no1 ul").html(jzDom);
        $("#no2 ul").html(lcDom);
        $("#no3 ul").html(ylDom);
    });
});