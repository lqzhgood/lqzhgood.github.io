JQui建立表单样式-两种函数传参的办法，彻底理解函数的定义-20160514-


    精简代码好爽啊，比原版少了80多行代码~~ 嘎嘎
         函数传参的两种办法～ 
            1） 当方法没有参数时， 赋值可以直接用 onclick = 方法名 复制代码 代码如下:    //
            window.onload = function () {
                $('btnTest').onclick = test;
            }
            function test() {
                alert(val);
            }
              直接赋值，不执行。 当事件激活 相当于激活事件函数          


            2） 当方法有参数时， 用 onclick = 方法名(参数) 时就有错了， 需要在方法名前面加
            function () 复制代码 代码如下:
            window.onload = function () {
                $('btnTest').onclick = function () {
                    test(1)
                };
            }
            function test(val) {
                alert(val);
            }
                    赋值一个匿名函数A同上， 通过匿名执行B， 相当于激活事件函数A变相激活B。

        函数都是DO SOMETHING。 如果直接赋值  x.onload=fn(); 则是将函数返回值赋给 onload了。
        如果要计算出函数值，则必须执行函数， 则相当于 执行到这一行时就运行了函数，而不是 通过onload事件激活函数