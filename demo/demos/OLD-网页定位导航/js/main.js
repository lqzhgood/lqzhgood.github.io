       $(function () {
           $(document).scroll(function () {
               var top = $(document).scrollTop();
               var moveId = ""
                   //获取到当前ID
               $(".item").each(function () {
                   var _this = $(this);
                   if (top > _this.offset().top - 300) {
                       moveId = "#" + _this.attr("id");
                   } else {
                       return false;
                   }
               })
               console.log($(".current").attr("href"));

               if (moveId != "" && ($(".current").attr("href") != moveId)) {
                   $(".current").removeClass("current");
                   $("#menu").find("[href=" + moveId + "]").addClass("current");
               }


           });
       });