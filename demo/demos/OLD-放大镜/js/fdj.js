 function fdj(cs) {
     //初始化变量
     var imgH = cs.divH * 0.7
         ,imgW = cs.divW * 0.7
         , divY = $("#fdjimg").offset().top
         , divX = $("#fdjimg").offset().left
         , divBigH = Math.floor(cs.divH / cs.divW * cs.divBigW+ 50)
         , ImgUrl = $("#fdjimg>img").attr("src");


     //初始化样式
     $("#fdj").css({
         position: "relative"
     });
     $("#fdjimg").css({
         height: cs.divH
         , width: cs.divW
         , border: cs.divborder
         , display: "table-cell"
         , verticalAlign: "middle"
         , textAlign: "center"
         , padding: "20px"
         , zIndex: "10"
     });
     $("#fdjimg>img").css({
         maxWidth: imgW,
         maxHeight: imgH
     });

     //初始化放大的DIV
     var divBig = $("<div>").attr("id", "fdjBigImg")
         , BigW = $("#fdjimg").outerWidth() * 1 + 20 + "px"; //*1转化为数字
     divBig.css({
         position: "absolute"
         , left: BigW
         , top: "0"
         , width: cs.divBigW
         , height: divBigH
         , overflow: "hidden"
         , background: 'url(' + ImgUrl + ') no-repeat'
         , display: "none"
     });
     divBig.appendTo($("#fdj"));

     //初始化遮罩DIV
     var divZs = $("<div>").attr("id", "fdjZz");
     divZs.css({
         position: "absolute"
         , width: cs.divZsSize
         , height: cs.divZsSize
         , background: "#ccc"
         , opacity: 0.5
         , top: 0
         , left: 0
         , display: "none"
     });
     divZs.appendTo($("#fdj"));

     // 确定图片IDV最终长宽
     var divOutH = $("#fdjimg").outerHeight()
         , divOutW = $("#fdjimg").outerWidth();

     //放大镜函数
    $("#fdj").mousemove(function (e) { 
         ImgUrl = $("#fdjimg>img").attr("src");
          divBig.css({
              background: 'url(' + ImgUrl + ') no-repeat'
        });
         
         if (e.pageX - cs.divZsSize / 2 - divX < 0) {
             divZsX = 0;

         } else if (e.pageX - cs.divZsSize / 2 - divX > divOutW - cs.divZsSize) {
             divZsX = divOutW - cs.divZsSize;
         } else {
             divZsX = e.pageX - cs.divZsSize / 2 - divX;
         }

         if (e.pageY - cs.divZsSize / 2 - divY < 0) {
             divZsY = 0;
         } else if (e.pageY - cs.divZsSize / 2 - divY > divOutH - cs.divZsSize) {
             divZsY = divOutH - cs.divZsSize;
         } else {
             divZsY = e.pageY - cs.divZsSize / 2 - divY;
         }
         //遮罩位置
         $("#fdjZz").css({
             top: divZsY
             , left: divZsX
         });
         //放大图移动
         var divBigOutX = $("#fdjBigImg").outerWidth()
             , divBigOutY = $("#fdjBigImg").outerHeight()
             , divBigX = Math.floor(divZsX / divOutW * divBigOutX)
             , divBigY = Math.floor(divZsY / divOutH * divBigOutY);

         $("#fdjBigImg").css({
             backgroundPositionX: -divBigX
             , backgroundPositionY: -divBigY
         });
     });
     //移出隐藏
     $(document).mousemove(function (e) {
         if (e.pageX > divX && e.pageX < (divX + divOutW) && e.pageY > divY && e.pageY < (divY + divOutH)) {
             $("#fdjZz").show();
             $("#fdjBigImg").show();
         } else {
             $("#fdjZz").hide();
             $("#fdjBigImg").hide();
         }
     });
 }