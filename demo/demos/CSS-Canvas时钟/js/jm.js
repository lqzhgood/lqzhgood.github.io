var ang = 180;

$(function () {
    $('.toggle').click(function (e) {
        e.preventDefault(); // The flicker is a codepen thing
        $(this).toggleClass('toggle-on');
//        on_off == "on" ? on_off = "off" : on_off = "on";
        if ( on_off == "on" ){
            on_off = "off";
            color =  "#ccc";
        }else {
            on_off = "on";
            color =  "rgb(0,102,153)";
        }
    });
    
    $("#ryWrap").click(function(){
        $("#ry").css("transform","rotate("+ang+"deg)");
        if (ang%360 == 0){
            $("body").css("backgroundColor","#fff");
        }else {
             $("body").css("backgroundColor","#141219");
        }
        ang+=180;        
    });

    $("#mode span").click(function (e) {
        e.preventDefault();
        $(".sele").removeClass("sele");
        $(this).addClass("sele");
        mode = e.target.id;
        endTime = new Date().getTime() + 360000000;
        startTime = new Date().getTime();
        timeZt = 0;
        alt = 1;
        if (e.target.id == "ticking"){
            $("#dateInput").slideDown(500).css("display","inline-block");
        }else{
            $("#dateInput").slideUp(500);
        }
    });
    
    $(".year").click(function(){
        $(".year").toggleClass("xz");
        if ($("#year").css("width")== '1px'){
            $("#year").stop();
            $("#year").val("Say Hi");
            $("#year").animate({width:40},500);
            $(".year").animate({opacity:0},250,function(){                
                $(".year").html("Y");
                 $(".year").css({fontSize:12});
                $(".year").animate({opacity:1},250);
            });
        }else if ($("#year").css("width")== '40px'){
            $("#year").stop();
            $("#year").animate({width:1},500,function(){
                $("#year").val("");
            });
            $(".year").animate({opacity:0},250,function(){
                $(".year").html("+");
                $(".year").css({fontSize:14});
                $(".year").animate({opacity:1},250);
            });
        }        
    });
    
    $("#go").click(function(){
        timeZt = 0;
        alt = 1;
        //on按钮
        $('.toggle').addClass('toggle-on');
        on_off = "on";
        color =  "rgb(0,102,153)";
        //按下效果
        $("#go").css({"backgroundColor":"rgb(122, 167, 208)"}).animate({height:20},100,function(){
            $("#go").css({"backgroundColor":"#B9D9F5"});
        });    
        //时间处理
        var h = $("#hour").val()*3600;
        var m = $("#minute").val()*60;
        var s = $("#sec").val()*1; //必须要转化为数字 
        if ( h>=0 && h/3600<=99 && m>=0 && m/60 <= 60 && s>=0&& s<=60){
            if ($("#chek")[0].checked){
                //选中则为日期
                var yNow = new Date().getFullYear();
                var mNow = new Date().getMonth();
                var dNow = new Date().getDate();
                var hNow = new Date().getHours;
                var toNow = new Date(yNow,mNow,dNow).getTime();
                var lossNow = new Date().getTime() - toNow;            
                if ((h+m+s)*1000 > lossNow){
                    endTime = (h+m+s)*1000 +toNow ;
                }else{
                    endTime = (h+m+s)*1000 +toNow + 86400000; //低于当前时间自动增加24小时
                }            
            }else{
                //没选中则为时间
            endTime = (h+m+s)*1000 + new Date().getTime() ;
            }
        }else{
            $("#info").html("输入不正确");
        }
    });
	
	$("#go").mouseover(function(){
		if ( $("#go").css("cursor") == "pointer"){
			$("#dateInput input[type='text']").addClass("focus");
		}
	});
	
	$("#go").mouseout(function(){
		$("#dateInput input[type='text']").removeClass("focus");
	});
    
	$("#dateInput input[type=text]").focusin(function(e){
		$(this).addClass("focus");
		$(this).trigger("keyup");
	});
	
	$("#dateInput input[type=text]").focusout(function(e){
		$(this).removeClass("focus");
		if ($("#hour").val() == ""){
			$("#hour").val("0");
		}
		if ($("#minute").val() == ""){
			$("#minute").val("0");
		}
		if ($("#sec").val() == ""){
			$("#sec").val("0");
		}
	});
	
    $("#dateInput input[type=text]").keyup(function(e){
        if(e.target.id == "hour" ){            
            if ( !($(this).val() >=0  && $(this).val() <= 99)){
                $("#info_h").html("H: 请输入 0-99 之间的数字");
                $(this).addClass("worry");
                $("#go").addClass("goWorry");
            }else{
                $("#info_h").html("");
                $(this).removeClass("worry");
				if ($("#info_h").html()=="" &&$("#info_m").html()==""&&$("#info_s").html()==""){
			   $("#go").removeClass("goWorry");
		}
            }
        }
        if(e.target.id == "minute" || e.target.id == "sec"){
            if ( !($(this).val() >=0  && $(this).val() <= 60)){
                $(this).addClass("worry");
                $("#go").addClass("goWorry");
				if (this.id == "minute"){
					$("#info_m").html("M: 请输入 0-60 之间的数字");
				}else if (this.id == "sec"){
					$("#info_s").html("S: 请输入 0-60 之间的数字");
				}
            }else{
                if (this.id == "minute"){
					$("#info_m").html("");
				}else if (this.id == "sec"){
					$("#info_s").html("");
				}
                $(this).removeClass("worry");
				if ($("#info_h").html()=="" &&$("#info_m").html()==""&&$("#info_s").html()==""){
			   $("#go").removeClass("goWorry");
		}
            }
        }
    });

});