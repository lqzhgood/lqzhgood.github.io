// var WebUrl = "http://139.129.236.139:20003";
// var url =  WebUrl + '/api/waimaiplatform/Order/today' ;

var WebUrl = '.';
var url = WebUrl + './'

var hisTimer = "";
var iN = "";
var all = {
    time: 0,
    data: ""
};
var AjaxTime_refund = 60 * 1000;
var AjaxTime_Table = 15 * 1000;

var searchTimeOut = 200;
var searchNowTime = 0;
var first = 0;
$(function () {
    $("#wrap").slideUp();
    iN = new iNotify({
        effect: 'flash',
        interval: 50,
        message: "有消息拉！2",
        audio: {
            //            file: ['s/msg.mp4','s/msg.mp3','s/msg.wav']
        },
        notification: {
            title: "通知！",
            body: '您来了一条新消息'
        }, onclick: function (e) {
            $("#mainSearch").val("@td");
            btnValue();
            window.focus();
            //            
            event.target.close();
        }, updateFavicon: {
            textColor: "#fff"
            , backgroundColor: "#F90000"
        }
    })

    $(".hisShow").hide();
    //提示框
    $('[data-toggle="tooltip"]').tooltip();
    //下拉框
    $(".ts").each(function (index, ele) {
        $(ele).on("click", function () {
            var key = $(ele).attr("data-val");
            $("#mainSearch").val(key);
            btnValue();
        })
    })
    $("#cloCont").on("click", function () {
        $("#wrap").slideUp();
    })
    //    ls
    // var lSall = localStorage.getItem("kfLSall");
    // if (lSall != null) {
    //     lSall = JSON.parse(lSall);
    //     console.log('本地存储时间:', lSall.showTime);
    //     var today = formatDate(new Date().getTime(), "yyyy-MM-dd");
    //     if (lSall.today == today) {
    //         all = lSall;
    //     } else {
    //         console.log("clear");
    //         localStorage.clear();
    //     }
    // }




    //1.初始化Table
    var oTable = new TableInit();
    oTable.Init();
    //2.初始化Button的点击事件
    var oButtonInit = new ButtonInit();
    oButtonInit.Init();
    $("body").keydown(function (e) {
        if (e.ctrlKey != true) {
            if (e.keyCode == 113) {
                $("#mainSearch").val("");
                btnValue();
            }
            if ((e.keyCode >= 48 && e.keyCode <= 57) || (e.keyCode >= 65 && e.keyCode <= 90) || (e.keyCode >= 96 && e.keyCode <= 105)) {
                if (e.shiftKey && e.keyCode == 50) {
                    $("#mainSearch").val("");
                }
                $("#mainSearch").focus();
            }
        }
    })
    refundingNtf();
});


//$.get(url).success(function(d){console.log(d.result.length)}) 校验数据总长度 今天的总单量


var TableInit = function () {
    var oTableInit = new Object();
    //初始化Table
    oTableInit.Init = function () {
        $('#food').bootstrapTable({
            // url: WebUrl + '/api/waimaiplatform/Order/today?lastTime=' + all.time, //请求后台的URL（*）
            url: './today.json',
            method: 'get', //请求方式（*）
            cache: false, //是否使用缓存
            pagination: false, //是否显示分页（*）
            sortable: false, //是否启用排序
            striped: true, //            showRefresh:true,
            responseHandler: function (data) {
                var d = [];
                if (data.success) {
                    d = data.result
                    if (all.data == "") {
                        all.data = JSON.parse(JSON.stringify(d));
                    } else {
                        $.each(d, function (index, ele) {
                            for (var i = all.data.length - 1; i >= 0; i--) {
                                if (ele.id == all.data[i].id) {
                                    all.data.splice(i, 1);
                                }
                            }
                        });
                        all.data = JSON.parse(JSON.stringify(d.concat(all.data)));
                        d = JSON.parse(JSON.stringify(all.data));
                    }
                    $.each(d, function (index, ele) {
                        for (var k in ele) {
                            var nkey = k[0].toLocaleLowerCase() + k.substring(1);
                            ele[nkey] = ele[k];
                        }
                        if (ele.IsRefund) ele.refundStatus = 1;
                        //转码
                        ele.stationName = decodeURIComponent(ele.stationName);
                        ele.customerName = decodeURIComponent(ele.customerName);
                        ele.address = decodeURIComponent(ele.address);
                        ele.stationName = ele.stationName.replace("小恒水饺", "").replace("(", "").replace(")", "").replace("（", "").replace("）", "");
                        ele.lastModificationTime_paixu = new Date(ele.lastModificationTime).getTime();
                        ele.uniqueId = "xhkf" + index;
                        ele.sequenceOrderId = ele.sequenceOrderId.toUpperCase();
                        if (ele.isCashOrderDisplay == "否") ele.isCashOrderDisplay = "";
                        if (ele.orderTime) ele.orderTime = formatDate(ele.orderTime);
                        if (ele.transporterName) ele.transporterName = ele.transporterName.replace("百度", "").replace("饿了么", "").replace("美团", "");
                        if (ele.orderPaid) ele.orderPaid = '<span class="big">' + ele.orderPaid.toString().split('.').join('.</span><span class="small">');
                        if (new Date(ele.expectTime).getTime() < 946656000000) ele.expectTime = "";
                        (ele.refundStatus == 1) ? ele.refundStatus = "退" : ele.refundStatus = "";
                        var dom = "";
                        $.each(ele.orderDetailList, function (index, ele) {
                            ele.amount = ele.Amount;
                            ele.name = ele.Name;
                            var txt = "<b>" + ele.amount + ": </b>" + ele.name + "<br/>"
                            dom += txt;
                        })
                        ele.orderDetailListText = dom;
                    })
                    d.sort(by("lastModificationTime_paixu"));
                    if (d.length > 0) {
                        var dateKey = d[0].lastModificationTime_paixu;
                        all.today = formatDate(new Date(dateKey).getTime(), "yyyy-MM-dd");
                        all.showTime = formatDate(new Date(dateKey).getTime(), "yyyy-MM-dd hh:mm:ss");
                        all.time = formatDate(new Date(dateKey).getTime(), "yyyy-MM-dd hh:mm:ss").replace(" ", "%20").replace(":", "%3A").replace(":", "%3A");
                    }
                    // localStorage.setItem("kfLSall", JSON.stringify(all));
                    $("#sumAll").text("Sum: " + d.length);
                    $("#upTime").text(all.showTime);
                }
                return d;
            }
            , rowStyle: function (row, index) {
                var strclass = "halign";
                if (row.refundStatus == "退") {
                    strclass += ' danger';
                }
                return {
                    classes: strclass
                }
            }, uniqueId: "uniqueId"
            , sidePagination: "client"
            , search: true
            , strictSearch: false
            , searchTimeOut: searchTimeOut
            , rowAttributes: function (row, index) { }
            , onSearch: function (valText) {
                hightLighText("food", valText);
                console.info('SearchTime:', new Date().getTime() - searchTimeOut - searchNowTime + " ms");
                //                $("#scTime").html(new Date().getTime()-searchTimeOut-searchNowTime + " ms");
            }
            , onLoadSuccess: function () {
                var valText = $("#foodWrap .pull-right.search input").val();
                valText = $.trim(valText).replace(/\s+/g, ' ');
                //历史动态刷新
                //                var _hisArr = valText.split(" ");
                //                if (_hisArr[0].toLowerCase() == "@ls" && _hisArr.length >= 2) {
                //                    _hisArr.shift();
                //                    var hisText = _hisArr.join("");
                //                    $(".hisShow").show();
                //                    clearTimeout(hisTimer);
                //                    hisTimer = setTimeout(function () {
                //                        hisTabel(hisText);
                //                    }, 500)
                //                }                
                hightLighText("food", valText);
                //刷新
                setTimeout(function () {
                    //如果到第二天且没关机，判断时间清空LS
                    // var lSall = localStorage.getItem("kfLSall");
                    // if (lSall != null) {
                    //     lSall = JSON.parse(lSall);
                    //     var today = formatDate(new Date().getTime(), "yyyy-MM-dd");
                    //     if (lSall.today != today) {
                    //         console.log("晚上没关机，清空昨天的LS");
                    //         localStorage.clear();
                    //         all.data = "";
                    //         all.time = "";
                    //         all.showTime = "";
                    //     }
                    // }
                    $('#food').bootstrapTable('refresh', {
                        // url: WebUrl + '/api/waimaiplatform/Order/today?lastTime=' + all.time,
                        url: './today.json',
                        silent: true
                    });
                }, AjaxTime_Table);
            }
            , onLoadError: function () {
                setTimeout(function () {
                    $('#food').bootstrapTable('refresh', {
                        // url: WebUrl + '/api/waimaiplatform/Order/today?lastTime=' + all.time,
                        url: './today.json',
                        silent: true
                    });
                }, AjaxTime_Table);
            }
            , columns: [{
                field: 'stationName'
                , align: "center"
                , halign: "center"
                , title: '分店'
                , class: "stationName"
                , searchable: false
            }, {
                field: 'sequenceOrderId'
                , align: "center"
                , halign: "center"
                , title: '订单号'
                , class: "sequenceOrderId"
            }, {
                field: 'customerName'
                , align: "center"
                , halign: "center"
                , title: '姓名'
                , class: "customerName"
                , searchable: false
            }, {
                field: 'mobileNumber'
                , align: "center"
                , halign: "center"
                , title: '电话'
                , class: "mobileNumber"
            }, {
                field: 'orderPaid'
                , align: "center"
                , halign: "center"
                , title: '金额'
                , class: "orderPaid"
                , searchable: false
            }, {
                field: 'isCashOrderDisplay'
                , align: "center"
                , halign: "center"
                , title: '到付'
                , class: "isCashOrderDisplay"
                , searchable: false
            }, {
                field: 'orderDetailListText'
                , align: "left"
                , halign: "center"
                , title: '订单详情'
                , class: "orderDetailListText"
                , searchable: false
            }, {
                field: 'memo'
                , align: "center"
                , halign: "center"
                , title: '客户备注'
                , class: "memo"
            }, {
                field: 'stationMemo'
                , align: "center"
                , halign: "center"
                , title: '站点备注'
                , class: "stationMemo"
            }, {
                field: 'orderTime'
                , align: "center"
                , halign: "center"
                , title: '下单时间'
                , class: "orderTime"
                , searchable: false
            }, {
                field: 'expectTime'
                , align: "center"
                , halign: "center"
                , title: '预定时间'
                , class: "expectTime"
                , searchable: false
            }, {
                field: 'transporterName'
                , align: "center"
                , halign: "center"
                , title: '配送员'
                , class: "transporterName"
                , searchable: false
            }, {
                field: 'transporterMobile'
                , align: "center"
                , halign: "center"
                , title: '配送员电话'
                , class: "transporterMobile"
                , searchable: false
            }, {
                field: 'refundStatus'
                , align: "center"
                , halign: "center"
                , title: '正在退款'
                , class: "refundStatus"
            }, {
                field: 'address'
                , align: "center"
                , halign: "center"
                , title: '地址'
                , class: "address"
                , searchable: false
            }, {
                field: 'id'
                , align: "center"
                , halign: "center"
                , title: '平台单号'
                , class: "id"
            }]
        });
    };
    return oTableInit;
};


var ButtonInit = function () {
    var oInit = new Object();
    var postdata = {};
    oInit.Init = function () {
        //封装传值
        $("#mainSearch").on('keyup', function () {
            btnValue()
        })
        //发票
        $("#btn_fp").on("click", function (e) {
            $("#mainSearch").val("@fp");
            btnValue();
        });
        $("#btn_tj").on('click', function () {
            //            var winBox = window.open("./count.html","popup",{width:600,height:500,left:300,top:100,menubar:"no",toolbar:"no",status:"no"});
            //            winBox.resizeTo( 500, 500);
            //            winBox.moveTo (1350,100); //Chrome1080p 有地址栏 刚好在关闭按钮上
            getCount();
            $("#wrap").slideToggle();
        });
        $("#btn_his").on("click", function () {
            var valText = $("#mainSearch").val();
            valText = $.trim(valText).replace(/\s+/g, ' ');
            hisTabel(valText);
            $(".hisShow").show();
        });
        $("#btn_qb").on("click", function () {
            $("#mainSearch").val("");
            btnValue();
        })
        $("#btn_td").on("click", function () {
            $("#mainSearch").val("@td");
            btnValue();
        })
    };
    return oInit;
};

function btnValue() {
    searchNowTime = new Date().getTime();
    $("tbody").unhighlight();
    var $searchObj = $("#foodWrap .pull-right.search input");
    var valText = $("#mainSearch").val();
    valText = $.trim(valText).replace(/\s+/g, ' ');
    //提示框
    $(".dropdown-menu").unhighlight();
    $(".dropdown-menu .hide").removeClass("hide");
    if (valText[0] == "@") {
        $(".searchInfo").addClass("open");
        $(".dropdown-menu").highlight(valText.substr(0, 3));
        $(".dropdown-menu .ts").each(function (index, ele) {
            if ($(ele).find(".highlight").length == 0) $(ele).addClass("hide");
        })

    } else {
        $(".searchInfo").removeClass("open");
    }



    if (valText.toLowerCase() == "@td" || valText == "@退单" || valText == "@退") valText = "退";
    if (valText.toLowerCase() == "@fp" || valText == "@发票") valText = "@ls 发票";
    //统计
    if (valText.toLowerCase() == "@tj" || valText == "@统计") {
        $("#btn_tj").trigger("click");
        $("#mainSearch").val("");
        valText = "";
    }
    //历史
    var _hisArr = valText.split(" ");
    if ((_hisArr[0].toLowerCase() == "@ls" || _hisArr[0] == "@历史") && _hisArr.length >= 2) {
        _hisArr.shift();
        var hisText = _hisArr.join("");
        $(".hisShow").show();
        clearTimeout(hisTimer);
        hisTimer = setTimeout(function () {
            hisTabel(hisText);
        }, 500)
        //        valText = "";
    }
    else {
        $(".hisShow").hide();
    }





    $searchObj.val(valText).trigger("keyup");
    if (valText == "") {
        $("#btn_his").addClass("disabled"); //禁用历史
    }
    else {
        $("#btn_his").removeClass("disabled"); //启用历史
    }
    if ((_hisArr[0].toLowerCase() == "@ls" || _hisArr[0] == "@历史") && _hisArr.length == 1) {
        $("#btn_his").addClass("disabled"); //禁用历史
    }
}


function hisTabel(key) {
    if (key == "") return false;
    key = key.toUpperCase();
    $('#his').bootstrapTable('destroy');
    $('#his').bootstrapTable({
        // url: WebUrl + '/api/waimaiplatform/Order/history?Search=' + key, //请求后台的URL（*）
        url: './his.json',
        method: 'get', //请求方式（*）
        cache: false, //是否使用缓存，默认为true，所以一般情况下需要设置一下这个属性（*）
        pagination: false, //是否显示分页（*）
        sortable: false, //是否启用排序
        striped: true, //            showRefresh:true,
        responseHandler: function (data) {
            var d = [];
            if (data.success) {
                d = data.result;
                $.each(d, function (index, ele) {
                    for (var k in ele) {
                        var nkey = k[0].toLocaleLowerCase() + k.substring(1);
                        ele[nkey] = ele[k];
                    }
                    if (ele.IsRefund) ele.refundStatus = 1;
                    ele.uniqueId = "xhkf_his_" + index;
                    ele.sequenceOrderId = ele.sequenceOrderId.toUpperCase();
                    ele.stationName = ele.stationName.replace("小恒水饺", "").replace("(", "").replace(")", "").replace("（", "").replace("）", "");
                    if (ele.isCashOrderDisplay == "否") ele.isCashOrderDisplay = "";
                    if (ele.orderTime) ele.orderTime = formatDate(ele.orderTime);
                    if (ele.transporterName) ele.transporterName = ele.transporterName.replace("百度", "").replace("饿了么", "").replace("美团", "");
                    if (ele.orderPaid) ele.orderPaid = '<span class="big">' + ele.orderPaid.toString().split('.').join('.</span><span class="small">');
                    if (new Date(ele.expectTime).getTime() < 946656000000) ele.expectTime = "";
                    (ele.refundStatus == 1) ? ele.refundStatus = "退" : ele.refundStatus = "";
                    var dom = "";
                    $.each(ele.orderDetailList, function (index, ele) {
                        ele.amount = ele.Amount;
                        ele.name = ele.Name;
                        var txt = "<b>" + ele.amount + ": </b>" + ele.name + "<br/>"
                        dom += txt;
                    })
                    ele.orderDetailListText = dom;
                })
            }
            return d;
        }
        , rowStyle: function (row, index) {
            var strclass = "halign";
            if (row.refundStatus == "退") {
                strclass += ' danger';
            }
            return {
                classes: strclass
            }
        }
        , uniqueId: "uniqueId"
        , sidePagination: "client"
        , search: false
        , strictSearch: false
        , rowAttributes: function (row, index) { }
        , onLoadSuccess: function () {
            var valText = key
            hightLighText("his", valText);
        }
        , columns: [{
            field: 'stationName'
            , align: "center"
            , halign: "center"
            , title: '分店'
            , class: "stationName"
        }, {
            field: 'sequenceOrderId'
            , align: "center"
            , halign: "center"
            , title: '订单号'
            , class: "sequenceOrderId"
        }, {
            field: 'customerName'
            , align: "center"
            , halign: "center"
            , title: '姓名'
            , class: "customerName"
        }, {
            field: 'mobileNumber'
            , align: "center"
            , halign: "center"
            , title: '电话'
            , class: "mobileNumber"
        }, {
            field: 'orderPaid'
            , align: "center"
            , halign: "center"
            , title: '金额'
            , class: "orderPaid"
        }, {
            field: 'isCashOrderDisplay'
            , align: "center"
            , halign: "center"
            , title: '到付'
            , class: "isCashOrderDisplay"
        }, {
            field: 'orderDetailListText'
            , align: "left"
            , halign: "center"
            , title: '订单详情'
            , class: "orderDetailListText"
        }, {
            field: 'memo'
            , align: "center"
            , halign: "center"
            , title: '客户备注'
            , class: "memo"
        }, {
            field: 'stationMemo'
            , align: "center"
            , halign: "center"
            , title: '站点备注'
            , class: "stationMemo"
        }, {
            field: 'orderTime'
            , align: "center"
            , halign: "center"
            , title: '下单时间'
            , class: "orderTime"
        }, {
            field: 'expectTime'
            , align: "center"
            , halign: "center"
            , title: '预定时间'
            , class: "expectTime"
        }, {
            field: 'transporterName'
            , align: "center"
            , halign: "center"
            , title: '配送员'
            , class: "transporterName"
        }, {
            field: 'transporterMobile'
            , align: "center"
            , halign: "center"
            , title: '配送员电话'
            , class: "transporterMobile"
        }, {
            field: 'refundStatus'
            , align: "center"
            , halign: "center"
            , title: '正在退款'
            , class: "refundStatus"
        }, {
            field: 'address'
            , align: "center"
            , halign: "center"
            , title: '地址'
            , class: "address"
        }, {
            field: 'id'
            , align: "center"
            , halign: "center"
            , title: '平台单号'
            , class: "id"
        }]
    });
}




function hightLighText(id, valText) {
    //电话号码加-
    $("#" + id + " tbody td.mobileNumber").each(function (index, ele) {
        var text = $(ele).text();
        $(ele).html(text.slice(0, 3) + "-" + text.slice(3, 7) + "-" + text.slice(-4));
    });
    $("#" + id + " tbody td.transporterMobile").each(function (index, ele) {
        var text = $(ele).text();
        $(ele).html(text.slice(0, 3) + "-" + text.slice(3, 7) + "-" + text.slice(-4));
    });
    var arr = valText.split("");
    var arrNum = arr.length;
    var arrNumMax = arr.length;
    var arrText = [];
    if (!isNaN(valText) && arr.length > 1 && arr.length <= 11) {
        while (arrNum--) {
            if (arrNum > 0) {
                var n = arrNum - arrNumMax;
                var _n = "";
                var _text = valText.substr(0, arrNum) + "-" + valText.substr(n);
                if (arr.length >= 5 && arrNum + 4 < arrNumMax) {
                    if (n + 4 < 0) {
                        _n = valText.substr(n + 4);
                    }
                    var _text = valText.substr(0, arrNum) + "-" + valText.substr(arrNum, 4) + "-" + _n;
                }
                arrText.push(_text);
            }
        }
    }

    $("#" + id + " tbody .sequenceOrderId").highlight(valText);
    $("#" + id + " tbody .memo").highlight(valText);
    $("#" + id + " tbody .stationMemo").highlight(valText);
    $("#" + id + " tbody .refundStatus").highlight(valText);
    $("#" + id + " tbody .id").highlight(valText);
    $("#" + id + " tbody .mobileNumber").highlight(valText);
    $.each(arrText, function (index, ele) {
        $("#" + id + " tbody .mobileNumber").highlight(ele);
    });
    //    $(ele).find(".sequenceOrderId").find(".highlight").length == 
    //去除多余平台单号
    if (id != "his") {
        if (valText != "") {
            $("#" + id + " tbody tr.halign").each(function (index, ele) {
                if ($(ele).find(".memo").find(".highlight").length == 0 && $(ele).find(".stationMemo").find(".highlight").length == 0 && $(ele).find(".refundStatus").find(".highlight").length == 0 && $(ele).find(".mobileNumber").find(".highlight").length == 0) {
                    var uniqueid = $(ele).attr("data-uniqueid");
                    var thisRowObj = $("#" + id).bootstrapTable('getRowByUniqueId', uniqueid);
                    var upValText = valText.toUpperCase();
                    if (thisRowObj.id != valText && thisRowObj.sequenceOrderId != upValText) {
                        var indexNum = $(ele).attr("data-index");
                        $("#" + id).bootstrapTable('hideRow', {
                            index: indexNum
                            , uniqueid: uniqueid
                        });
                    }
                    else {
                        $(ele).highlight(valText);
                    }
                }
            });
        }
    }
}



function refundingNtf() {
    // $.get(WebUrl + "/api/waimaiplatform/Order/refunding").success(function (data) {
    $.get("./refunding.json").success(function (data) {
        if (data.success) {
            var d = data.result;
            //去除非当日退单
            for (var i = d.length - 1; i >= 0; i--) {
                if (new Date(d[i].orderTime).getTime() < new Date(all.today).getTime() - 8 * 3600 * 1000) {
                    d.splice(i, 1);
                    console.log(i);
                }
            }
            if (d.length != 0) {
                $("#badgeTd").addClass("red").html(d.length);
                var text = "有 " + d.length + " 个退单";
                var numE = 0;
                var odE = "";
                var numM = 0;
                var odM = "";
                var numB = 0
                var odB = "";
                var bodyText = "";
                $.each(d, function (index, ele) {
                    switch (ele.platformName) {
                        case "饿了么":
                            numE++;
                            odE += ele.sequenceOrderId + " ";
                            break;
                        case "美团":
                            numM++;
                            odM += ele.sequenceOrderId + " ";
                            break;
                        case "百度":
                            numB++;
                            odB += ele.sequenceOrderId + " ";
                            break;
                    }
                });
                if (numE != 0) bodyText += "************ 饿了么 " + numE + " 个 ************\r" + odE + "\r";
                if (numM != 0) bodyText += "************ 美团 " + numM + " 个 ************\r" + odM + "\r";
                if (numB != 0) bodyText += "************ 百度 " + numB + " 个 ************\r" + odB + "\r";
                iN.setFavicon(d.length).notify({
                    title: text,
                    body: bodyText
                })
            } else {
                $("#badgeTd").removeClass("red").html(d.length);
                $("#newundefined").attr("href", "./img/0.png");
            }
        }
        setTimeout(function () {
            refundingNtf();
        }, AjaxTime_refund)
    }).error(function () {
        setTimeout(function () {
            refundingNtf();
        }, AjaxTime_refund)
    })
}



function getCount() {
    var storeArr = [];
    var overArr = [];
    var copy = ' <tr><td class="store">{{name}}</td><td class="num">{{num}}</td><td class="refund">{{refund}}</td><td class="cont">{{cont}}</td></tr>';
    var arr = all.data;
    for (var i = 0; i < arr.length; i++) {
        arr[i].stationName = arr[i].StationName;
        arr[i].stationName = decodeURIComponent(arr[i].stationName);
        arr[i].stationName = arr[i].stationName.replace("小恒水饺", "").replace("(", "").replace(")", "").replace("（", "").replace("）", "");
        var name = arr[i].stationName;
        if (storeArr.indexOf(name) == -1) storeArr.push(name);
    }
    for (var i = 0; i < storeArr.length; i++) {
        var obj = {
            name: storeArr[i]
            , cont: 0
            , num: 0
            , refund: 0
        }
        overArr.push(obj);
    }
    //                    for (var i=0; i<arr.length;i++){
    //                        if (arr[i].isRefund == true){
    //                            console.log(arr[i].stationName);
    //                        }
    //                    }
    for (var i = 0; i < arr.length; i++) {
        arr[i].stationName = arr[i].StationName;
        arr[i].orderPaid = arr[i].OrderPaid;
        var storeName = arr[i].stationName;
        var index = storeArr.indexOf(storeName);
        overArr[index].cont = overArr[index].cont + arr[i].orderPaid;
        overArr[index].num += 1;
        if (arr[i].isRefund == true) overArr[index].refund += 1;
    }
    overArr.sort(by("num"));
    var dom = "";
    var sumNum = 0;
    var sumRefund = 0;
    var sumCont = 0;
    for (var i = 0; i < overArr.length; i++) {
        overArr[i].cont = overArr[i].cont.toFixed(2);
        dom += copy.replace(/\{{name}}/g, overArr[i].name).replace(/\{{num}}/g, overArr[i].num).replace(/\{{refund}}/g, overArr[i].refund).replace(/\{{cont}}/g, overArr[i].cont);
        sumCont += overArr[i].cont * 1;
        sumNum += overArr[i].num;
        sumRefund += overArr[i].refund;
    }
    $("#wrap tbody").html(dom);
    $("#wrap #sumCont").html(sumCont.toFixed(2));
    $("#wrap #sumNum").html(sumNum);
    $("#wrap #sumRefund").html(sumRefund);
}



//tool
//格式化日期,
function formatDate(d, format) {
    var date = new Date(d);
    var paddNum = function (num) {
        num += "";
        return num.replace(/^(\d)$/, "0$1");
    }
    //指定格式字符
    var cfg = {
        yyyy: date.getFullYear() //年 : 4位         
        , yy: date.getFullYear().toString().substring(2) //年 : 2位    
        , M: date.getMonth() + 1 //月 : 如果1位的时候不补0   
        , MM: paddNum(date.getMonth() + 1) //月 : 如果1位的时候补0   
        , d: date.getDate() //日 : 如果1位的时候不补0          
        , dd: paddNum(date.getDate()) //日 : 如果1位的时候补0  
        , hh: date.getHours() //时            
        , mm: paddNum(date.getMinutes()) //分  
        , ss: paddNum(date.getSeconds()) //秒
    }
    format || (format = "MM-dd hh:mm");
    return format.replace(/([a-z])(\1)*/ig, function (m) {
        return cfg[m];
    });
}
var by = function (name) {
    return function (p, o) {
        var a, b;
        if (typeof o === "object" && typeof p === "object" && o && p) {
            a = o[name];
            b = p[name];
            if (a === b) {
                return 0;
            }
            if (typeof a === typeof b) {
                return a < b ? -1 : 1;
            }
            return typeof a < typeof b ? -1 : 1;
        }
        else {
            throw ("error");
        }
    }
}