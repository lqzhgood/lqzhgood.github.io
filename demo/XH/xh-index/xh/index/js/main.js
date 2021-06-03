var jsUrl = "./xh/jsonp/sto_info2.js";


var mode = false;
var mob = false;
var mm_open = false;
var nowDate = new Date().getTime();

//window.onload = function () {
//    var ldst = setInterval(function () {
//        if (document.readyState == "complete") {
//            document.getElementById("ldWrap").style.display = "inline";
//            document.getElementById("loading").style.display = "none";
//            clearInterval(ldst);
//        }
//    }, 300)
//}





function moveNet() {
    if (mode) {
        $('.net').removeClass('fix');
    }
    else {
        $('.net').addClass('fix');
    }
    mode = !mode;
    setTimeout("moveNet()", 300);
}
$(function () {
    if (/Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        mob = true;
    }
    var chrome = /chrom(e|ium)/.test(navigator.userAgent.toLowerCase());
    var opened = false;
    if (chrome) {
        moveNet();
    }
    //console.log ("mobile: "+ mob);
    //	$('.chef1').click(function(){
    //		if (!opened){
    //			
    //			$('.chef1 .close-chef').css({ 'opacity' : '1'}, function(){});
    //
    //			if (mob) {
    //				$('.chef-holder').css({ 'margin-left' : '6%'}, function(){}); 
    //			} else { 
    //				$('.chef1').addClass('chef-active');
    //				$('.chef-holder').css({ 'margin-left' : '0px'}, function(){});
    //				$('.chef2').css({ 'width' : '20%'}, function(){}); 
    //			}
    //
    //			opened = true;
    //		}else{
    //			
    //			$('.close-chef').css({ 'opacity' : '0'}, function(){});
    //
    //			if (mob) {
    //				$('.chef-holder').css({ 'margin-left' : '-100%'}, function(){}); 
    //			} else {
    //				$('.chef1 , .chef2').removeClass('chef-active');
    //				$('.chef-holder').css({ 'margin-left' : '-34%'}, function(){});
    //				$('.chef1 , .chef2').css({ 'width' : '32.5%'}, function(){});
    //			}
    //			
    //
    //
    //			opened = false;
    //		}
    //	});
    //
    //	$('.chef2').click(function(){
    //		if (!opened){
    //			
    //			
    //			$('.chef2 .close-chef').css({ 'opacity' : '1'}, function(){});
    //
    //			if (mob) {
    //				$('.chef-holder').css({ 'margin-left' : '-203%'}, function(){}); 
    //			} else {
    //				$('.chef2').addClass('chef-active'); 
    //				$('.chef-holder').css({ 'margin-left' : '-62%'}, function(){});
    //				$('.chef1').css({ 'width' : '20%'}, function(){});
    //			}
    //			opened = true;
    //		}else{
    //			
    //			$('.close-chef').css({ 'opacity' : '0'}, function(){});
    //
    //			if (mob) {
    //				$('.chef-holder').css({ 'margin-left' : '-100%'}, function(){}); 
    //			} else {
    //				$('.chef1 , .chef2').removeClass('chef-active');
    //				$('.chef-holder').css({ 'margin-left' : '-34%'}, function(){});
    //				$('.chef1 , .chef2').css({ 'width' : '32.5%'}, function(){});
    //			}
    //			opened = false;
    //		}
    //	});
    //    
     $('#slider').nivoSlider();

    $('.chef1, .chef2').click(function () {
        window.open('./xh/index/PartnerShip/PartnerShip.html');
    })
    $('.open_menu').click(function () {
        if (!mm_open) {
            $('.mob_menu').animate({
                'bottom': '-12px'
            }, 500);
            mm_open = true;
        }
        else {
            $('.mob_menu').animate({
                'bottom': '-295px'
            }, 500);
            mm_open = false;
        }
    });
    $('.menu-home').click(function () {
        $("body, html").animate({
            scrollTop: $(".about").position().top
        }, 2000);
        if (mm_open) {
            $('.mob_menu').animate({
                'bottom': '-295px'
            }, 500);
            mm_open = false;
        };
    });
    $('.menu-chef').click(function () {
        $("body, html").animate({
            scrollTop: $(".chef").position().top
        }, 2000);
        if (mm_open) {
            $('.mob_menu').animate({
                'bottom': '-295px'
            }, 500);
            mm_open = false;
        };
    });
    $('.menu-team').click(function () {
        $("body, html").animate({
            scrollTop: $(".team").position().top
        }, 2000);
        if (mm_open) {
            $('.mob_menu').animate({
                'bottom': '-295px'
            }, 500);
            mm_open = false;
        };
    });
    $('.menu-events').click(function () {
        $("body, html").animate({
            scrollTop: $(".events").position().top
        }, 2000);
        if (mm_open) {
            $('.mob_menu').animate({
                'bottom': '-295px'
            }, 500);
            mm_open = false;
        };
    });
    //	$('.menu-contact').click(function(){
    //		$("body, html").animate({ scrollTop: $(".contact").position().top },2000);
    //		if (mm_open){ $('.mob_menu').animate({ 'bottom' : '-295px' },500); mm_open = false; };
    //	});
    $('.menu-contact').click(function () {
        var pos_top = $(".contact").position().top - $(".chef-holder").height() - 90;
        $("body, html").animate({
            scrollTop: pos_top
        }, 2000);
        if (mm_open) {
            $('.mob_menu').animate({
                'bottom': '-295px'
            }, 500);
            mm_open = false;
        };
    });
    $('.event-btn1').click(function () {
        $('.event-holder').css({
            'margin-left': '-104.5%'
        }, function () {});
    });
    $('.event-btn2').click(function () {
        $('.event-holder').css({
            'margin-left': '-8.5%'
        }, function () {});
    });
    $('.event-btn3').click(function () {
        $('.event-holder').css({
            'margin-left': '-200.5%'
        }, function () {});
    });
    //逻辑
    $("#wx_text").click(function () {
        $("#ewm_wx").toggleClass("plus");
    });
    $(window).scroll(function () {
            $("#ewm_wx").removeClass("plus");
        })
        //DOM
    $.getJSON(jsUrl, function (data) {
        getStMap(data);
        getDom(data);
        resStoSize();
    
    });
    
    
    //焦点图    
    var jdt_w = $("#Jdt_Dom").width();
    var jdt_h = $("#Jdt_Dom").height();
    var img_n = $("#Jdt_Dom img").length - 2;
    var jdt_all_w = jdt_w * img_n;
    $("#Jdt_Dom ul").width(jdt_all_w);
    $("#Jdt_Dom #jdt_img img").width(jdt_w);
    $("#jdt_lf").click(function () {
        movePicLeft();
    });
    $("#jdt_rt").click(function () {
        movePicRight();
    });

    function movePicRight() {
        if (parseInt($("#Jdt_Dom ul").css("right")) > jdt_w * (img_n - 2)) {
            $("#Jdt_Dom ul").animate({
                right: 0
            }, 500)
        }
        else {
            $("#Jdt_Dom ul").animate({
                right: "+=" + jdt_w
            }, 500)
        }
    }

    function movePicLeft() {
        if (parseInt($("#Jdt_Dom ul").css("right")) < 20) {
            $("#Jdt_Dom ul").animate({
                right: jdt_all_w - jdt_w
            }, 500)
        }
        else {
            $("#Jdt_Dom ul").animate({
                right: "-=" + jdt_w
            }, 500)
        }
    }
    
    setInterval(function(){
        movePicRight() ;
    },3000)
    
    $(window).resize(function(){
        resStoSize();
    });
        
    
    $("#sto_rt").click(function(){
        var leftPos = $('#storesWrap').scrollLeft();
        $("#storesWrap").animate({scrollLeft: leftPos + 400}, 800);
    });
   
   $("#sto_lf").click(function(){
         var rightPos = $('#storesWrap').scrollLeft();
        $("#storesWrap").animate({scrollLeft: rightPos - 400}, 800);
    });
})


function resStoSize() {
    //门店排序
    var stall_h = $("#stoAll").height();
    var num_sto = $(".sto").length;
    var num_h = Math.floor(stall_h / 130);
    var num_w = Math.ceil(num_sto / num_h);
    var win_w = $(document).width();
    var stall_w = num_w * 390;
    if (stall_w < win_w) {
        $("#stoAll").width(win_w);
        $("#stoSco").width(win_w);
        $("#sto_lf,#sto_rt").hide();
    }
    else {
        $("#stoAll").width(stall_w);
        $("#stoSco").width(stall_w);
        $("#sto_lf,#sto_rt").show();
    }
}


var copy = "<div class='sto'><h3 {{copy_mod_nop}}>{{sto_name}}</h3><div class='sto_row'><div class='sto_ad'>地址： </div><div class='sto_ad_cont'>{{sto_adr}}</div></div>{{copy_mod_ph}}</div>";
var copy_mod_ph = "<div class='sto_row'><div class='sto_ph'>电话： </div><div class='sto_ph_cont'>{{sto_phone}}</div></div>" ;
var copy_mod_nop = "class='{{cls}}'" ;

function getDom(data) {
    var _dom = "";
    for (var i = 0; i < data.length; i++) {
        if (data[i].IsTakeoutOnly != true){
            copy_mod_ph = "<div class='sto_row'><div class='sto_ph'>电话： </div><div class='sto_ph_cont'>{{sto_phone}}</div></div>" ;
            copy_mod_nop = "class='{{cls}}'" ;
            if (data[i].Phone == ""){
                copy_mod_ph ="";
            }else{
    //            if (data[i].Phone.substring(0,2) == "400"){
    //                 var _ph = data[i].Phone.substring(0,3) + "-" + data[i].Phone.substring(4,6) + "-" +data[i].Phone.substring(7);
    //                console.log(_ph);
    //            }

                if (data[i].Phone.substring(0,3) == "400"){
                    var _ph = data[i].Phone.substring(0,3) + "-" + data[i].Phone.substring(3,6) + "-" +data[i].Phone.substring(6);
                    data[i].Phone = _ph ;
                }
                copy_mod_ph = copy_mod_ph.replace(/\{{sto_phone}}/g, data[i].Phone)
            }
            var stDtAr = data[i].EstablishmentDate.split("-");
            var stDt = new Date(stDtAr[1] + "/" + stDtAr[2] + "/" + stDtAr[0]).getTime();
            if (stDt > nowDate) {
                copy_mod_nop = copy_mod_nop.replace(/\{{cls}}/g, "wyy");
            }else{
                copy_mod_nop = "";
            }
            _dom += copy.replace(/\{{sto_name}}/g, data[i].Name).replace(/\{{sto_adr}}/g, data[i].Address).replace(/\{{copy_mod_ph}}/g, copy_mod_ph).replace(/\{{copy_mod_nop}}/g, copy_mod_nop);
        }
    }
    $("#stoAll").html(_dom);
}

function getStMap(data) {
    //添加地图
    document.getElementById("map").innerHTML = "";
    var myMap = new qq.maps.Map(document.getElementById("map"), {
        center: new qq.maps.LatLng(39.90594, 116.455698), //39.90594, 116.455698地图初始化以建外东区为中心
        //        center: new qq.maps.LatLng(39.843340, 116.495419),
        zoom: 11
        , scrollwheel: false
        
    });
    //定位图标
    var infoWin = new qq.maps.InfoWindow({
        map: myMap
    });
    var latlngs = [];
    for (var i = 0; i < data.length; i++) {
      (function (n) {
          var stDtAr = data[n].EstablishmentDate.split("-");
          var stDt = new Date(stDtAr[1] + "/" + stDtAr[2] + "/" + stDtAr[0]).getTime();
          var _st_latlng = new qq.maps.LatLng(data[n].Latitude, data[n].Longitude);
          var marker = new qq.maps.Marker({
              position: _st_latlng
              , map: myMap
              , content: '文本标注'
          });
          if (stDt > nowDate) {
              var _name = data[n].Name + "(即将开业)";
          }
          else {
              var _name = data[n].Name;
          }
          if (data[n].TakeoutUrl != "") {
              var _tkUrl = "<div style='text-align:center;white-space:nowrap;margin-left:0;color:#333;'>" + _name + "<br><a target='_blank' href='" + data[n].TakeoutUrl + "'><img src='./xh/index/img/ico_wm.png' height='40px'></a></div>";
          }
          else {
              var _tkUrl = "<div style='text-align:center;white-space:nowrap;margin-left:0;color:#333;'>" + _name + "</div>";
          }
          qq.maps.event.addListener(marker, 'click', function () {
              infoWin.open();
              infoWin.setContent(_tkUrl);
              infoWin.setPosition(_st_latlng);
          });
//          var label = new qq.maps.Label({
//              position: _st_latlng
//              , map: myMap
//              , content: data[n].Name
//          });
          var anchor = new qq.maps.Point(0, 39)
              , size = new qq.maps.Size(42, 68)
              , origin = new qq.maps.Point(0, 0)
              , markerIcon = new qq.maps.MarkerImage("./xh/index/map_ico.png", size, origin, anchor);
          marker.setIcon(markerIcon);
      })(i);
    }
    //范围图层
    for (var j = 0; j < data.length; j++) {
        var path1 = [];
        if (data[j].TakeoutArea) {
            for (var k = 0; k < data[j].TakeoutArea.length; k++) {
                var _path_la = data[j].TakeoutArea[k].Latitude;
                var _path_lg = data[j].TakeoutArea[k].Longitude;
                var _path_map = new qq.maps.LatLng(_path_la, _path_lg);
                path1.push(_path_map);
            }
        }
        var polygon = new qq.maps.Polygon({
            map: myMap
            , path: path1
            , strokeColor: new qq.maps.Color("##D45370", 0.5)
            , fillColor: qq.maps.Color.fromHex("#D45370", 0.5)
        });
    }

}

//
// document.onreadystatechange = function () {
//     if (document.readyState == "complete") {
//        document.getElementById("ldWrap").style.display = "inline";
//        document.getElementById("loading").style.display = "none";
//     }
// }
//                

//$(function () {
//    $('<img/>').attr('src', './xh/index/assets/gifs/GIF25s.gif').load(function () {
//        $(this).remove(); // prevent memory leaks as @benweet suggested
//        $(".home").css({
//            "background-image":"url('./xh/index/assets/gifs/GIF25s.gif')"
//        });
//         document.getElementById("ldWrap").style.display = "inline";
//        document.getElementById("loading").style.display = "none";
//    });
//});
 
// 
//$(function () {
//    var num = 0;
//    var loader = document.getElementById("loader")
//    var content = document.getElementById("imgs");
//    var loader_num = document.getElementById("loader_num");
//
//    function imgLoad(img) {
//        var img_length = document.images.length;
//        
//        
//        console.log( img.src);
//        //“data-自定义属性”符合HTML5标准， 自带的dataset属性虽然与getAttribute性能没什么大区别，但方便简洁，可读性高，不过目前兼容性一般。
//        img.src = img.src;
//        //将百分比数字放在setTimeout()中实时变换数字    
//        setTimeout(function () {
//                loader_num.textContent = Math.ceil((num) / (img_length) * 100) + "%";
//                num++;
//                if (num < img_length) {
//                    imgLoad(document.images[num]);
//                }
//                else {
//                    loader.style.display = "none";
//                    content.style.display = "block";
//                }
//            }, 100) //设置百分比数字变换间隔
//    }
//    imgLoad(document.images[num]);
//});
// $(function () {
//
// })
// 
// 
 
 
 
 
 
 
 
 