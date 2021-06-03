 $(window).on("load", function () {
     waterfall()
     var dataInt = {
         'data': [{
             'src': '1.jpg'
                }, {
             'src': '2.jpg'
                }, {
             'src': '3.jpg'
                }, {
             'src': '4.jpg'
                }, {
             'src': '5.jpg'
                }, {
             'src': '6.jpg'
                }, {
             'src': '7.jpg'
                }, {
             'src': '8.jpg'
                }, {
             'src': '9.jpg'
                }, {
             'src': '10.jpg'
                }, {
             'src': '11.jpg'
                }, {
             'src': '12.jpg'
                }, {
             'src': '13.jpg'
                }, {
             'src': '14.jpg'
                }, {
             'src': '15.jpg'
                }]
     };

     window.onscroll = function () {
         if (checkscrollside()) {
             $.each(dataInt.data, function (index, value) {
                 var divDom = $("<div>").addClass('pin').css("position", "absolute").appendTo($("#main"));
                 var div2Dom = $("<div>").addClass('box').appendTo(divDom);
                 $("<img>").attr('src', './images/' + value.src).appendTo(div2Dom);
             })
             movePic2();
         }
     }
 });

 function waterfall() {
     //固定在原位置
     $(".pin").each(function () {
             this.h = $(this).offset().top;
             this.w = $(this).offset().left;
             $(this).css({
                 'top': this.h,
                 'left': this.w
             });
         })
         //移动到中部位置
     $(".pin").css("position", "absolute");
     $(".pin").each(function (index, value) {
         var wH = (Math.floor($(window).height() / 2 - $(value).outerHeight() / 2));
         var wW = (Math.floor($(window).width() / 2 - $(value).outerWidth() / 2));
         var pinH = $(value).offset().top;
         var pinW = $(value).offset().left;
         $(value).animate({
             "left": wW + Math.floor(Math.random() * 400 - 200),
             'top': wH + Math.floor(Math.random() * 400 - 200)
         }, 1000);
     })
     movePic();
 } //waterfall

 function checkscrollside() {
     var lastH = $('.pin').last().offset().top;
     var douH = $(document).scrollTop();
     var winH = $(window).height();
     return (lastH < douH + winH) ? true : false;
 } //checkscrollside

 //开场发牌排列
 function movePic() {
     var pinW = $(".pin").eq(0).outerWidth();
     var col = Math.floor($(window).width() / pinW);
     var hArray = [];
     $(".pin").each(function (index, value) {
         if (index < col) {
             hArray.push($(this).outerHeight());
         }
     });
     var pinNun = $(".pin").length;
     picAnm(0, hArray, pinNun, col, pinW)

 } //movePic

 //链式动画发牌
 function picAnm(i, Array, sum, col, pinW) {
     if (i < sum) {
         var $obj = $(".pin").eq(i);
         var minH = Math.min.apply('none', Array);
         var arrIndex = $.inArray(minH, Array);
         var pinH = $obj.outerHeight();
         if (i < col) {
             $obj.animate({
                 'top': 0,
                 left: i * pinW
             }, 200, function () {
                 i += 1;
                 picAnm(i, Array, sum, col, pinW);
             });
         } else {
             $obj.animate({
                 'top': minH,
                 'left': arrIndex * pinW
             }, 200, function () {
                 Array[arrIndex] += pinH;
                 i += 1;
                 picAnm(i, Array, sum, col, pinW);
             });
         }

     }
 }

 //滚动条排列
 function movePic2() {
     var pinW = $(".pin").eq(0).outerWidth();
     var col = Math.floor($(window).width() / pinW);
     var hArray = [];

     $(".pin").each(function (index, value) {
         if (index < col) {
             $(this).animate({
                 'top': 0,
                 left: index * pinW
             });
             hArray.push($(this).outerHeight());
         } else {
             var minH = Math.min.apply('none', hArray);
             var arrIndex = $.inArray(minH, hArray);
             var pinH = $(this).outerHeight();
             $(this).css({
                 'top': minH,
                 'left': arrIndex * pinW
             });
             hArray[arrIndex] += pinH;
         }
     })
 } //movePic