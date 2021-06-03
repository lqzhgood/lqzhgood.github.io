放大镜-JQ实现的放大镜库-20160614

食用方法
        
先引入 jquery 库
然后引入本库

建立 ID名为 fdj 的DIV
其中包含  div#fdjimg > img 

以下参数必须指定。
        
         fdj({
                divH: "300" //小图DIV-fdjimg高
                , divW: "200"//小图DIV-fdjimg宽
                ,divborder :"1px solid #ccc" //小图DIV边框
                , divBigW: "400" //大图DIV宽，高按照小图等比放大
                , divZsSize: "100"//遮罩大小
            });