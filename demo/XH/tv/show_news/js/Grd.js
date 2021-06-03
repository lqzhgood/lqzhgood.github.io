    //haveGrd(obj, qjArr, bjArr)
    // obj    第几页
    // qjArr  当前模块可用的前景数组，从中随机选择 999为置空 可用【】
    // bjArr  当前模块可用的背景数组，从中随机选择 999为置空 可用【0彩虹，1双色渐变，2单色，3单图】
function haveGrd(obj, qjArr, bjArr) {
    if (qjArr[0] == 999) {
        var qj = 999;
    }
    else {
        var _num1 = Math.round(Math.random() * (qjArr.length - 1));
        var qj = qjArr[_num1];
    }
    if (bjArr[0] == 999) {
        var bj = 999;
    }
    else {
        var _num2 = Math.round(Math.random() * (bjArr.length - 1));
        var bj = bjArr[_num2];
    }
    changeGrd(obj, qj, bj)
}

//
function changeGrd(PgNm, qj, bj) {
//    console.log(PgNm+" "+qj+" "+bj);
    var PicObj = $(".pt-page").eq(PgNm);
    PicObj.attr('style','color:#fff !important;');
    PicObj.find('.mode_Qj').replaceWith("<div class='mode_Qj'></div>");
    PicObj.find('.mode_Bj').replaceWith("<div class='mode_Bj'></div>");
    setTimeout(function(){
         //qj
        switch (qj) {
        case 0:
            showEwm(PicObj);
            break;
        case 1:
            break;
        }
        //bj
        switch (bj) {
        case 0:
            rainbow(PicObj);
            break;
        case 1:
            twoGradient(PicObj);
            break;
        case 2:
            sgCol(PicObj);
            break;
        case 3:
            sgPic(PicObj);
            break;
        case 4:
    //        addBlackAngular(PicObj);
            break;
        }       
    },200)

}
//qj
//function addBlackAngular($obj) {
//    $obj.find('.mode_Qj').css({
//        'background': '#f7f7f7 url(./mod/All/Grd/qj.png) center center no-repeat'
//        , 'background-size': 'cover'
//    })
//}
function showEwm($obj){    
     $obj.find('.mode_Qj').css({
       'background': 'url(./mod/All/Grd/ewm.png) center 600px no-repeat'
         , 'background-size': '300'
    })
}
//bj
function rainbow($obj) {
    $obj.find('.mode_Bj').gradientify({
        gradients: [
            {
                start: [49, 76, 172]
                , stop: [242, 159, 191]
            }
            , {
                start: [255, 103, 69]
                , stop: [240, 154, 241]
            }
            , {
                start: [33, 229, 241]
                , stop: [235, 236, 117]
            }]
    });
}

function twoGradient($obj) {
    var colorArr = [['#1A2980','#26D0CE'],['#4B79A1','#283E51'],['#BE93C5','#7BC6CC'],['#4DA0B0','#D39D38'],['#43cea2','#185a9d'],['#134E5E','#71B280'],['#02AAB0','#00CDAC'],['#1F1C2C','#928DAB'],['#5C258D','#4389A2'],['#24C6DC','#514A9D']];
    var _deg = NumRand(360);
    var _num = NumRand(colorArr.length - 1);
    var color = "linear-gradient(" + _deg + "deg, " + colorArr[_num][0] + " 0%, " + colorArr[_num][1] + " 100%)";
    $obj.find('.mode_Bj').css({
        background: color
    });
}
//var dddddd = 0;
function sgCol($obj){
    var colorArr = [["#58979D","#CDE0DC"],['#fff','#0ac2d2']];
//    var colorArr = [["#E98682","#F8E0C8"],["#58979D","#CDE0DC"],["#7A5499","#C7B9D3"],["#FFB03A","#FCEFA5"],['#588F27','#A9CF54'],['#01A2A6','#29D9C2'],['#FE4365','#FC9D9A'],['#334A94','#83C3F2'],['#fff','#0ac2d2'],['#fff','#7bb7fa'],['#fff','#f6b93c'],['#fff','fdc162']];
//    var colorArr = ['#0ac2d2','#7bb7fa','#f6b93c','#60d7a9','#121015','#fdc162','#fd6a62','#f68dbb'];
    var _num = Math.round(Math.random()*(colorArr.length-1));
//    var _num = dddddd;
    $obj.attr('style','color:'+ colorArr[_num][0] +' !important;');    
    $obj.find('.mode_Bj').css({
        background: colorArr[_num][1]
    });
//    dddddd++;
}


function sgPic($obj) {
    $obj.find('.mode_Bj').css({
        'background': 'url(./mod/All/Grd/bj.jpg) center center no-repeat'
        , 'background-size': 'cover'
    });
}
