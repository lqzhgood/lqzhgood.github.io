 $(document).ready(function () {
     hideCode();
     $("#main div").click(checkForCode);

     //增加点击蒙版样式
     //主流做法应该是建立CSS类样式，JS为DOM增加改变样式，做到复用，减少（JS)代码
     //            $("#main div").each(function(){
     //                this.style.opacity=0.5;
     //                this.onmouseover=function(){
     //                    this.style.opacity=1;
     //                }
     //                this.onmouseout=function(){
     //                    this.style.opacity=0.5;
     //                }                
     //            });            
     $("#main div").addClass("no_hover");
     $("#main div").hover(
         function () {
             $(this).removeClass("no_hover");
         },
         function () {
             $(this).addClass("no_hover");
         }
     );


     function getRandom(num) {
         var my_num = Math.floor(Math.random() * num);
         return my_num;
     }

     function hideCode() {
         var numRand = getRandom(4);
         $("#main div").each(function (index, value) {
             if (numRand == index) {
                 $(this).append("<span id='has_discount'></span>");
                 return false;
             }
         });
     }

     function checkForCode() {
         var discount;
         //                if ($.contains(this, document.getElementById("has_discount"))) {
         if ($.contains(this, $("#has_discount")[0])) {
             var my_num = getRandom(100);
             discount = "<p> CODE:" + my_num + "%</p>";
         } else {
             discount = "<p>sorry</p>";
         }

         $("#main div").each(function () {
             if ($.contains(this, $("#has_discount")[0])) {
                 $(this).addClass("discount");
             } else {
                 $(this).addClass("no_discount");
             }
             $(this).unbind();
             $(this).removeClass("no_hover");
         });

         //                $(this).append(discount);
         //原生JS
         //                    var domm = document.createElement("p");
         //                    domm.innerHTML = discount + "%";
         //                    this.appendChild(domm);

         $("#result").append(discount);
     }
 });