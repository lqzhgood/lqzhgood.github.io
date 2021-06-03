$(function () {

    var url = window.location.href;
    if (url.indexOf("#logout") != -1) {
        $("#login").hide();
        $("#logout").show();
        $(".logsele").removeClass("logsele");
        $("#logoutBtn").addClass("logsele");
    };


    $("#loginBtn").mouseover(function () {
        $("#login").show();
        $("#logout").hide();
        $(".logsele").removeClass("logsele");
        $(this).addClass("logsele");
    });
    $("#logoutBtn").mouseover(function () {
        $("#login").hide();
        $("#logout").show();
        $(".logsele").removeClass("logsele");
        $(this).addClass("logsele");
    });

    $("#loginform").validate({

        rules: {
            username: {
                required: true
                , minlength: 6
                , maxlength: 16
            }
            , password: {
                required: true
                , minlength: 0
                , maxlength: 16
            }
        }
        , messages: {
            username: {
                required: "请填写用户名"
                , minlength: "用户名少于6位"
                , maxlength: "用户名最多16位"
            }
            , password: {
                required: "请填写密码"
                , maxlength: "密码最大16位"
            }
        },submitHandler:function(){
            alert("登录成功");
        },highlight:function(elem,errorclass,validCLass){
            $(elem).css({border:"1px solid red"})
        },unhighlight:function(elem,errorclass,validCLass){
            $(elem).css({border:"1px solid #E5E5E5"})
        }
    });
    $("#logoutform").validate({
        rules: {
            username: {
                required: true
                , minlength: 6
                , maxlength: 16
            }
            , zcpassword: {
                required: true
                , minlength: 0
                , maxlength: 16
            }
            , repassword: {
                equalTo: "#zcpassword"
            }
            , email: {
                required: true
                , email: true
            }
            , checknow: {
                required: true
            }
        }
        , messages: {
            username: {
                required: "请填写用户名"
                , minlength: "用户名少于6位"
                , maxlength: "用户名最多16位"
            }
            , zcpassword: {
                required: "请填写密码"
                , maxlength: "密码最大16位"
            }
            , repassword: {
                equalTo: "密码输入不一致"
            }
            , email: {
                required: "请填写邮箱",
                email: "请输入正确的邮箱"
            }
            , checknow: {
                required: "X"
            }
        },submitHandler:function(){
            alert("注册成功");
        },highlight:function(elem,errorclass,validCLass){
            $(elem).css({border:"1px solid red"})
        },unhighlight:function(elem,errorclass,validCLass){
            $(elem).css({border:"1px solid #E5E5E5"})
        }
    });



});