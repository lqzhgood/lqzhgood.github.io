var vertest = "";
var verbj = 0;
$(function () {
    //map     
    $("#map_light").click(function () {
        for (var i = 0; i < $(".dot").length; i++) {
            mapDotLight($(".dot")[i], 5000);
        }
    });
    $("#map_show").click(function () {
        for (var i = 0; i < $(".dot").length; i++) {
            mapDotShow($(".dot")[i]);
        }
    });
    $("#next").click(function () {
        nextPage();
    });
    $(document).keydown(function (e) {
//        console.log(e.keyCode);
        if (e.keyCode == 27) {
            clearInterval(test);
            alert("stop");
        }
        if (e.keyCode == 49) {
            nextPage(0);
        }
        if (e.keyCode == 50) {
            nextPage(1);
        }
        if (e.keyCode == 51) {
            nextPage(2);
        }
        if (e.keyCode == 52) {
            nextPage(3);
        }
        if (e.keyCode == 53) {
            nextPage(4);
        }
        if (e.keyCode == 54) {
            nextPage(5);
        }
        if (e.keyCode == 55) {
            nextPage(6);
        }
        if (e.keyCode == 56) {
            nextPage(7);
        }
        if (e.keyCode == 57) {
            nextPage(8);
        }
        if (e.keyCode == 191){
            $('#next').trigger('click');
        }
        
        //        bianliang
        if (e.keyCode == 69) {
            vertest = map_bl;
            ajaxPage(vertest.result);
        }
        if (e.keyCode == 82) {
            vertest = op_sh;
            ajaxPage(vertest.result);
        }
        if (e.keyCode == 70) {
            vertest = op_sw;
            ajaxPage(vertest.result);
        }
        if (e.keyCode == 86) {
            vertest = op_bw;
            ajaxPage(vertest.result);
        }
        if (e.keyCode == 66) {
            vertest = op_bh;
            ajaxPage(vertest.result);
        }
        if (e.keyCode == 84) {
            vertest = mp_sh;
            ajaxPage(vertest.result);
        }
        if (e.keyCode == 71) {
            vertest = mp_sw;
            ajaxPage(vertest.result);
        }
        if (e.keyCode == 78) {
            vertest = mp_b;
            ajaxPage(vertest.result);
        }
        if (e.keyCode == 73) {
            vertest = txt_s;
            ajaxPage(vertest.result);
        }
        if (e.keyCode == 75) {
            vertest = txt_b;
            ajaxPage(vertest.result);
        }
        if (e.keyCode == 85) {
            vertest = dd;
            ajaxPage(vertest.result);
        }
        if (e.keyCode == 187) {
            if (verbj >3){
                verbj = 0 ;
            }
            var verpageAll = $('.pt-page');
            var verpageNow = $('.pt-page-current')[0];
            var vercc = 0 ;
            for (var i=0; i<verpageAll.length; i++){
                if (verpageAll[i] == verpageNow){
                     vercc = i+1 ;
                    break;
                }
            }
            console.log('verbj:', verbj);
            console.log('vercc:', vercc);
            changeGrd(vercc, 999, verbj);
            verbj ++;
        }
        

    })
});