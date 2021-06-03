$(document).ready(function () {
    var FREQ = 10000;
    var repeat = true;
    var timer;
    getxxxxx();
    startAJAXcalls();
    showFREQ();

    $("#btnStart").click(function () {
        repeat = true;
        startAJAXcalls();
        showFREQ();
    });

    $("#btnStop").click(function () {
        clearTimeout(timer);
        repeat = false;
        $("#freq").html("Pause");
    });

    $("#addRunner").submit(function () {
        return false;
    })

    $("#btnSave").click(creatRunner);

    function creatRunner() {
        //        var data = $("#addRunner :input").serializeArray();
        //        $.post($("#addRunner").attr("action"),data,function(json){
        //            if (json.status == "fail"){
        //                alert(json.message);
        //            }
        //            if (json.status == "success"){
        //                alert(json.message);
        //                clearInput();
        //            }
        //        },"json")
        //      SQL存储改为本地存储        
        var timer = new Date().getTime();
        var data = {
             FN: $("#addRunner input:eq(0)").val()
            , LN: $("#addRunner input:eq(1)").val()
            , gender: $("#ddlGender").val()
            , min: $("#addRunner input:eq(2)").val()
            , sec: $("#addRunner input:eq(3)").val()
        , };
        data.name="run"+timer;
        var runnerArray = getrunnerArray();
        runnerArray.push(data);
        localStorage.setItem("runnerArray", JSON.stringify(runnerArray));

        showrunnerArray();
    }

    function showrunnerArray() {
        var runnerArray = getrunnerArray();
        for (var i = 0; i < runnerArray.length; i++) {
            var runValue = $("<li>").text("Name: " + runnerArray[i].FN + " " + runnerArray[i].LN + " Time: " + runnerArray[i].min + ":" + runnerArray[i].sec + " " + runnerArray[i].gender);
            runValue.attr("class",runnerArray[i].name);            
            runValue.click(function () {
                for (var j = 0; j < runnerArray.length; j++) {
                    if (runnerArray[j].name == this.className) {
                        runnerArray.splice(j, 1);
                        localStorage.setItem("runnerArray", JSON.stringify(runnerArray));
                    }
                }
                $("." + this.className).remove();
            });
            if (runnerArray[i].gender == "m") {
                $("#finishers_m").append(runValue);
            } else if (runnerArray[i].gender == "f") {
                $("#finishers_f").append(runValue);
            }
            $("#finishers_all").append(runValue.clone(true));
        }
    }

    function getrunnerArray() {
        var runnerArray = localStorage["runnerArray"];
        if (!runnerArray) {
            runnerArray = [];
            localStorage.setItem("runnerArray", JSON.stringify(runnerArray));
        } else {
            runnerArray = JSON.parse(runnerArray);
        }
        return runnerArray;
    }

    function clearInput() {
        $("#addRunner :input").each(function () {
            $(this).val("");
        });
    }

    function showFREQ() {
        $("#freq")[0].innerHTML = "refreshes time: " + FREQ / 1000;
    }

    function getxxxxx() {
        $.ajax({
            url: "finishers.xml"
            , cache: false
            , dataType: "xml"
            , success: function (xml) {
                $("#finishers_m").empty();
                $("#finishers_f").empty();
                $("#finishers_all").empty();
                $(xml).find("runner").each(function () {
                    var info = "<li> Name: " + $(this).find("fname").text() + " " + $(this).find("lname").text() + ". Time: " + $(this).find("time").text() + " " + $(this).find("gender").text() + "</li>";
                    if ($(this).find("gender").text() == "m") {
                        $("#finishers_m").append(info);
                    }
                    if ($(this).find("gender").text() == "f") {
                        $("#finishers_f").append(info);
                    }
                    $("#finishers_all").append(info);
                });
                getTime();
                showrunnerArray();
                //                showTime();
            }
        });
    }

    function startAJAXcalls() {
        if (repeat) {
            clearTimeout(timer);
            timer = setTimeout(function () {
                getxxxxx();
                startAJAXcalls();
            }, FREQ);
        }
    }

    function getXMLRACERS() {
        startAJAXcalls();
    }

    function getTime() {
        var a_p = "";
        var d = new Date();
        var curr_hour = d.getHours();

        (curr_hour < 12) ? a_p = "AM": a_p = "PM";
        (curr_hour == 0) ? curr_hour = 12: curr_hour = curr_hour;
        (curr_hour > 12) ? curr_hour = curr_hour - 12: curr_hour = curr_hour;

        var curr_min = d.getMinutes().toString();
        var curr_sec = d.getSeconds().toString();

        if (curr_min.length == 1) {
            curr_min = "0" + curr_min;
        }
        if (curr_sec.length == 1) {
            curr_sec = "0" + curr_sec;
        }

        $('#updatedTime').html(curr_hour + ":" + curr_min + ":" + curr_sec + " " + a_p);
    }

    function showTime() {
        //   PHP方式获取时间
        $("#updatedTime").load("time.php");
    }
});