 var key2 = ["a", "b", "c"];
 var key3 = ["d", "e", "f"];
 var key4 = ["g", "h", "i"];
 var key5 = ["j", "k", "l"];
 var key6 = ["m", "n", "o"];
 var key7 = ["p", "q", "r", "s"];
 var key8 = ["t", "u", "v"];
 var key9 = ["w", "x", "y", "z"];
 var keyNum = 0;
//    var simpPY = T9_pinyin_st;
 var words = [
     {
         en: "Alipay"
         , cn: "支 付 宝"
         , py: "Zhi Fu Bao"

     },
     {
         en : "Angry Bird",
         cn: "愤 怒 的 小 鸟",
         py :"Feng Nu De Xiao Niao"
     },
     {
         en : "Love",
         cn: "爱 情",
         py :"Ai Qing"
     },
     {
         en : "Virus",
         cn: "病 毒",
         py :"Bing Du"
     },
     {
         en : "Grass",
         cn: "小 草",
         py :"Xiao Cao"
     },
     {
         en : "Bank",
         cn: "银 行",
         py :"Yin Hang"
     },
     {
         en : "Walk",
         cn: "行 走",
         py :"Xing Zou"
     },
     {
         en : "Swan",
         cn: "天 鹅",
         py :"Tian E"
     },
     {
         en : "A Dog",
         cn: "一 只 狗",
         py :"Yi Zhi Gou"
     },
     {
         en : "Bitchy",
         cn: "矫 情",
         py :"Jiao Qing"
     }
 ];
 $(function () {
     //处理无用的键盘UI
     $(".none").css("background","#ccc");
     $(".del").click(function(){
         history.go(0);
     });
     $.each(words, function (index, value) {
         console.log(this.cn.split(" "));
         var endiv = $("<div>").addClass("en");
         var cndiv = $("<div>").addClass("cn");
         var pydiv = $("<div>").addClass("pinyin");
         $("<span>").text(this.en).appendTo(endiv);
         var cnArray = this.cn.split(" ");
         $.each(cnArray,function(index,value){
             $("<span>").text(value).appendTo(cndiv);
         })         
         var pyArray = this.py.split(" ");
         $.each(pyArray,function(index,value){
             $("<span>").text(value).appendTo(pydiv);
         })            
         var li = $("<li>").append(endiv).append(cndiv).append(pydiv);
         $("#input ul").append(li);
         
         
     });


     for (var i = 2; i < 10; i++) {
         (function (i) {
             $(".key[code=" + i + "]").click(function () {
                 onkey(eval("key" + i), i);
             });
         })(i);
     }

 });

 function onkey(key, numKey) {
     //输入了哪些数字
     $("#inputNum").text($("#inputNum").text() + " " + numKey);
     //循环每个DIV.CN
     if (keyNum == 0) {
         var haha = $(".cn");
     } else {
         var haha = $(".cn").parent("li").not(".noneli").find(".cn");
     }
     haha.each(function (index, value) {
         var bzw = 1;
         //循环查找单个CN中的每个SPAN
         if (keyNum == 0) {
             var _this = $(this).find("span");
             console.log(_this);
         } else {
             var _this = $(this).find(".pybold:last").next();
             console.log(_this);
         }
         var _this2 = $(this).find("span"); //定位汉字SPAN位置，同步给PINYIN
         _this.each(function (index, value) {
             var word = $(this).text();
             for (var i = 0; i < key.length; i++) {
                 var find = $.inArray(word, T9_pinyin_st[key[i]]);
                 if (find > -1) {
                     $(this).addClass("pybold");
                     var nub = (_this2).index($(this));
                     $(this).closest("li").find(".pinyin span").eq(nub).addClass("pybold");
                     bzw = 0;
                     return false; //如果该行找到则跳出
                 }
             }
         });
         if (bzw == 1) {
             $(this).closest("li").addClass("noneli");
         }
     });



     //隐藏其他的元素

     keyNum += 1;
 }




 function onkey2(key) {
     keyNum += 1;
     console.log(key);
     for (var i = 0; i < key.length; i++) {
         $(".pinyin span").each(function (index, value) {
             var fkey = $(this).text().substring(0, 1);
             if (fkey == key[i]) {
                 $(this).addClass("pybold");
                 $(".cn span").eq(index).addClass("pybold");
                 $(this).closest("li").addClass("keyNum" + keyNum);
             }
         });
     }
     //隐藏其他的元素
     $("#input li").not(":first,.keyNum" + keyNum).css("opacity", "0.1");
 }