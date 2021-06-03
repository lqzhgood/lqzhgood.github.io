$(function () {
     $("#menutag li").mousemove(function () {
        $(".navsele").attr("class", "");
        $(this).addClass("navsele");
    });
    
    $("#menuleft").mousemove(function () {
        $("#menulist").show();
    });
    $("#menuleft").mouseout(function () {
        $("#menulist").hide();
    });

    $("#menulist").mouseover(function () {
        $("#menulist").show();
        $("#menuright").show();
    });
    $("#menulist").mouseout(function () {
        $("#menulist").hide();
         $("#menuright").hide();
    });

    $("#menuright").mouseover(function () {
        $("#menuright").show();
         $("#menulist").show();
    });
    $("#menuright").mouseout(function () {
        $("#menuright").hide();
        $("#menulist").hide();
    });
//    
//    $("#sj a").click(function(){
//        $("#sj .sxrightaslec").removeClass("sxrightaslec");
//        $(this).addClass("sxrightaslec");
//    });
//    
    $("#sj a,#pp a,#pmcc a,#czxt a,#wlzs a").click(function(){
        $(this).closest("div").find(".sxrightaslec").removeClass("sxrightaslec");
        $(this).addClass("sxrightaslec");
    });
    
    $(".itemright a,#sxrighttop dt a").unbind();

});