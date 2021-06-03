$(function () {
    var chatList = getNameList("chat");
    for (var i = 0; i < chatList.length; i++) {
        var $fullMsg = $("<li>").addClass(chatList[i].name).append($("<span>").text(chatList[i].chat));
        $("#chat").append($fullMsg);
    }

    addPeo();
    $("body").keyup(function(e){
        if (e.keyCode == 13){
            $("#btnsend").trigger("click");
        }
    });

    $("#btnsend").click(function () {
        var nameValue = $("#nameInput").val();
        var txtValue = $("#txtInput").val();
        if (nameValue == "") {
            alert("请输入姓名");
        } else if (txtValue == "") {
            alert("请输入内容");
        } else {
            addMsg();
            addPeo();
            $(" :input").val("");
            $("#nameInput").focus();
        }
    });
});

function getNameList(value) {
    var nameLsDate = localStorage.getItem(value);
    if (nameLsDate == null) {
        nameLsDate = [];
    } else {
        nameLsDate = JSON.parse(nameLsDate);
    }
    return nameLsDate;
}


function addPeo() {
    $("#people li").remove();
    var nameList = getNameList("nameList");
    for (var i = 0; i < nameList.length; i++) {
        var nameValue = nameList[i];
        var peoListName = $("<span>").addClass("peoListName").text(nameValue);
        var peoListDiv = $("<div>")
        var btnDel = $("<button>").addClass("del").text("x")
        btnDel.click(function () {
            var name = $(this).closest("li").attr("class");
            $("[class$=" + name + "]").remove();
            var nameRemove = getNameList("nameList");
            nameRemove.splice($.inArray(name,nameRemove),1);
            localStorage.setItem("nameList",JSON.stringify(nameRemove));
            var chatRemove = getNameList("chat");
            console.log(chatRemove[1]["name"]);
           
            for(var i=chatRemove.length-1;i>-1;i--){
                if(chatRemove[i].name == name){
                    chatRemove.splice(i,1);
                }
            }
            localStorage.setItem("chat",JSON.stringify(chatRemove));
        })
        var btnUp = $("<button>").addClass("up").text("^");
        btnUp.click(function () {
            $(this).closest("li").insertBefore($(this).closest("li").prev());
        });
        var btnDown = $("<button>").addClass("down").text("v")
        btnDown.click(function () {
            $(this).closest("li").insertAfter($(this).closest("li").next());
        });
        peoListDiv.append(btnDel).append(btnUp).append(btnDown);
        $("#people").append($("<li>").addClass(nameValue).append(peoListName).append(peoListDiv));
    }
}

function addMsg() {
    var dates = new Date();
    var years = dates.getFullYear();
    var month = dates.getMonth() + 1;
    var days = dates.getDate();
    var hours = dates.getHours();
    var minutes = dates.getMinutes();
    var seconds = dates.getSeconds();
    var timeTable = years + "年" + month + "月" + days + "日" + hours + ":" + minutes + ":" + seconds;

    var $people_Name = $("#nameInput").val();
    var nameList = getNameList("nameList");
    if (nameList.indexOf($people_Name) == -1) {
        nameList.push($people_Name);
        localStorage.setItem("nameList", JSON.stringify(nameList));
    }

    var $Msg = $people_Name + " 于" + timeTable + "留言道:" + $("#txtInput").val();
    var $fullMsg = $("<li>").addClass($people_Name).append($("<span>").text($Msg));
    var peoChat = getNameList("chat");
    var msObj = {
        name: $people_Name
        , chat: $Msg
    }
    peoChat.push(msObj);
    localStorage.setItem("chat", JSON.stringify(peoChat));
    
    $("#chat").append($fullMsg);
}