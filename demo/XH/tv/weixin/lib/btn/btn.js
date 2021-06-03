$(function () {
    button = $('.Sub button');
    button.click(function (e) {
        var _this = $(this)
        e.preventDefault();
        _this.toggleClass('active');
        setTimeout(function () {
            mes('success', '发送成功! \(￣▽￣)/');
            setTimeout(function () {
                _this.toggleClass('active');
            }, 5000)
        }, 3000)
    });
    $(window).resize(function (e) {
        button.removeClass('active');
    });
    
    
    
        //test
    $("#btn_test").click(function(){
        mes('error','出错啦!  ( ・◇・)？');
    });
    
    
});