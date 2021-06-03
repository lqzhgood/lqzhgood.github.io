$(function () {
    $("#fullpage").fullpage({
        verticalCentered: false
        , anchors: ['page1', 'page2', 'page3', 'page4']
        , navigation: true
        , navigationTooltips: ['它，终于来了', '真正与你贴近的个人设备', '非同一般的精准计时', '在三个特点鲜明的系列中找到你的风格']
        , afterLoad: function (link, index) {
            switch (index) {
            case 1:
                $(".section1 h1").css("transform", "scale(1.5)");
                $('.section1 p').css('margin-top', '5%');
                break;
            case 2:
                $('.section2 h1').css("transform", "scale(0.7)");
                break;
            case 3:
                $('.section3 h1').css('margin-left', '+=1500');
                $('.section3 p').css('margin-left', '-=1500');
                break;
            case 4:
                $('.section4 img.pic').css("transform", "rotate(-360deg)");
            default:
                break;
            }
        }, //恢复
        onLeave: function (index,nextIndex) {
            switch (index) {
            case 1:
                $(".section1 h1").css("transform", "scale(1)");
                $('.section1 p').css('margin-top', '800px');
                break;
            case 2:
                $('.section2 h1').css("transform", "scale(1)");
                break;
            case 3:
                $('.section3 h1').css('margin-left', '-=1500px');
                $('.section3 p').css('margin-left', '+=1500px');
                break;
            case 4:
                $('.section4 img.pic').css("transform", "rotate(0deg)");
                break;
            default:
                break;
            }
        }
    });
});