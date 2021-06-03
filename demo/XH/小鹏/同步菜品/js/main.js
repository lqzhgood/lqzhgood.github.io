// var WebUrl = "http://139.129.236.139:20003";
var WebUrl = './'
var allFood = [];
var allCategory = {};

$(function () {
    $('[data-toggle="tooltip"]').tooltip();
    //关闭下一个
    $(".submit").on("click", function () {
        var _$this = $(this);
        _$this.closest(".col-md-12").next().find(".close").trigger("click");
    });
    //标题数据绑定
    $(".sourceStore").on("click", function () {
        var text1 = $(this).find("select").eq(0).val();
        var text2 = $(this).find("select").eq(1).val();
        var text = "你要从 <b>" + text1 + "</b> 的 <b>" + text2 + "</b>";
        $(".sourceStore").find(".title_text").html(text);
    });
    $(".sourceWares").on("click", function () {
        var _this = this;
        waresEvent();
    });
    $(".postWares").on("click", function () {
        var $sele = $(this).find("input:checkbox:checked");
        var text = "";
        $sele.each(function (index, ele) {
            text += " <b>" + $(ele).attr("data-val-xh") + "</b> |"
        });
        text = "到 " + text;
        $(".postWares").find(".title_text").html(text);
    });
    $(".postStore").on("click", function () {
        var $sele = $(this).find("#storeListCk input");
        var $seleCk = $(this).find("#storeListCk input:checkbox:checked");
        var $seleO2O = $(".postStore").find("#storeListCk .O2O input");
        var $seleO2OCk = $(".postStore").find("#storeListCk .O2O input:checkbox:checked");

        var text = "";
        if ($sele.length == $seleCk.length) {
            text = "的 【全部店】";
        } else if ($seleO2O.length == $seleO2OCk.length) {
            text = "的 全部【O2O店】";
            var _temp = 0;
            $seleCk.each(function (index, ele) {
                if ($(ele).closest("label").hasClass("O2O") == false) {
                    if (_temp == 0) {
                        text = text + " 和<br>";
                        _temp = 1;
                    }
                    text += " <b>" + $(ele).attr("data-val-name") + "</b> |"
                }
            });
        } else {
            $seleCk.each(function (index, ele) {
                text += " <b>" + $(ele).attr("data-val-name") + "</b> |"
            });
            text = "的 " + text;
        }
        $(this).find(".title_text").html(text);
    });

    $("#confirm").on("click", function () {
        confirmBox();
    });
    //额外的事件
    srcWarBodyInputEvent(); //按钮全选事件
    //选择门店更新食物
    $("#plaListSele").on("change", function () {
        initFood();
    });
    $("#storeListSele").on("change", function () {
        initFood();
    });

    //门店选择 ALL-O2O-MENDIAN
    $("#sto_sele_all").on("click", function () {
        var $sele = $(".postStore").find("#storeListCk input");
        var $seleCk = $(".postStore").find("#storeListCk input:checkbox:checked");
        var $seleO2O = $(".postStore").find("#storeListCk .O2O input");
        var $seleO2OCk = $(".postStore").find("#storeListCk .O2O input:checkbox:checked");
        if ($sele.length != $seleCk.length) {
            $("#sto_sele_O2O").prop("checked", true);
            $sele.each(function (index, ele) {
                $(ele).prop("checked", true);
            })
        } else {
            $("#sto_sele_O2O").prop("checked", false);
            $sele.each(function (index, ele) {
                $(ele).prop("checked", false);
            })
        }
    });

    $("#sto_sele_O2O").on("click", function () {
        var $sele = $(".postStore").find("#storeListCk input");
        var $seleCk = $(".postStore").find("#storeListCk input:checkbox:checked");
        var $seleO2O = $(".postStore").find("#storeListCk .O2O input");
        var $seleO2OCk = $(".postStore").find("#storeListCk .O2O input:checkbox:checked");
        $sele.each(function (index, ele) {
            $(ele).prop("checked", false);
        })
        $("#sto_sele_all").prop("checked", false);
        if ($seleO2O.length != $seleO2OCk.length) {
            $seleO2O.each(function (index, ele) {
                $(ele).prop("checked", true);
            })
        } else {
            $seleO2O.each(function (index, ele) {
                $(ele).prop("checked", false);
            })
        }
    });
    $(".postStore #storeListCk").on("click", "input", function () {
        var $sele = $(".postStore").find("#storeListCk input");
        var $seleCk = $(".postStore").find("#storeListCk input:checkbox:checked");
        var $seleO2O = $(".postStore").find("#storeListCk .O2O input");
        var $seleO2OCk = $(".postStore").find("#storeListCk .O2O input:checkbox:checked");
        if ($seleO2O.length == $seleO2OCk.length) {
            $("#sto_sele_O2O").prop("checked", true);
        } else {
            $("#sto_sele_O2O").prop("checked", false);
        }
        if ($sele.length == $seleCk.length) {
            $("#sto_sele_all").prop("checked", true);
        } else {
            $("#sto_sele_all").prop("checked", false);
        }
    })

    $(".sourceWares #footSeleBtn").on("click", function (e) {
        var type = $(".sourceWares #foodType input:checkbox");
        var typeCk = $(".sourceWares #foodType input:checkbox:checked");
        if (typeCk.length == 0) {
            alert("请选择类型");
            return false;
        }
        var typeIdArr = [];
        $.each(typeCk, function (index, ele) {
            typeIdArr.push("cId_" + $(ele).attr("data-val-xh"));
        });
        var attr = $(".sourceWares #foodAttr input:checkbox");
        var attrCk = $(".sourceWares #foodAttr input:checkbox:checked");
        if (attrCk.length == 0) {
            alert("请选择项目");
            return false;
        }
        var attrArr = [];
        attrCk.each(function (index, ele) {
            attrArr.push($(ele).attr("data-val-xh"));
        });
        $("#footSeleBtn").html("选择中").attr("class", "btn btn-warning");
        setTimeout(function () {
            //清空所有选项
            if ($("#waresSeleAll").prop("checked")) {
                $("#waresSeleAll").trigger("click");
            } else {
                $("#waresSeleAll").trigger("click");
                $("#waresSeleAll").trigger("click");
            }
            var $allSele = $("#sourceWaresCont #allFood tbody tr").not(".sele").find("input:checkbox:checked");
            if (typeIdArr.length == type.length && attrArr.length == attr.length) {
                $("#waresSeleAll").trigger("click");
            } else if (typeIdArr.length != type.length && attrArr.length == attr.length) {
                $.each(typeIdArr, function (index, ele) {
                    $(".sourceWares #allFood tbody ." + ele + " .sele input").trigger("click");
                })
            } else if (typeIdArr.length == type.length && attrArr.length != attr.length) {
                $.each(attrArr, function (index, ele) {
                    $(".sourceWares #allFood thead ." + ele + " input").trigger("click");
                })
            } else {
                $.each(typeIdArr, function (index, ele) {
                    $.each(attrArr, function (index2, ele2) {
                        $(".sourceWares #allFood tbody ." + ele + " ." + ele2 + " input").trigger("click");
                        //                        $(".sourceWares #allFood tbody ." + ele + " ."+ele2+" input").prop("checked",true);
                    })
                })
            }
            //情况快速选择
            $(".sourceWares #foodType input").each(function (index, ele) {
                $(ele).prop("checked", false);
            })
            $(".sourceWares #foodAttr input").each(function (index, ele) {
                $(ele).prop("checked", false);
            })
            $("#footSeleBtn").html("选择成功").attr("class", "btn btn-success");
            setTimeout(function () {
                $("#footSeleBtn").html("选择").attr("class", "btn btn-info");
            }, 2000)
        }, 100)
    })

    //初始化数据
    initAjax();
})

function waresEvent(_this) {
    var allItem = $(".sourceWares #allFood tbody tr");
    allItem.each(function (index, ele) {
        var bzText = "";
        var sall = $(ele).find(".sall input:checkbox:checked").length;
        var pic = $(ele).find(".pic input:checkbox:checked").length;
        var price = $(ele).find(".price input:checkbox:checked").length;
        var stock = $(ele).find(".stock input:checkbox:checked").length;
        //        var boxNum = $(ele).find(".boxNum input:checkbox:checked").length;
        //        var boxPrice = $(ele).find(".boxPrice input:checkbox:checked").length;
        var description = $(ele).find(".description input:checkbox:checked").length;
        (sall > 0) ? bzText += "Y" : bzText += "N";
        (pic > 0) ? bzText += "Y" : bzText += "N";
        (price > 0) ? bzText += "Y" : bzText += "N";
        (stock > 0) ? bzText += "Y" : bzText += "N";
        //        (boxNum > 0)? bzText += "Y" :bzText += "N";
        //        (boxPrice > 0)? bzText += "Y" :bzText += "N";
        (description > 0) ? bzText += "Y" : bzText += "N";
        ele.bzText = bzText;
    });

    var sortText = "";
    for (var key in allCategory) {
        if (allCategory.hasOwnProperty(key)) {
            var trCls = $(".sourceWares tbody ." + key);
            allCategory[key].canSort = true;
            trCls.each(function (index, ele) {
                allCategory[key].bzText = ele.bzText;
                if (ele.bzText != "NNNNN") {
                    if (trCls[0].bzText != ele.bzText) {
                        allCategory[key].canSort = false;
                        return false;
                    }
                }
                else {
                    allCategory[key].canSort = false;
                    return false;
                }
            })
            if (allCategory[key].canSort == true) {
                var sortCopy = "";
                var bzArr = allCategory[key].bzText.split("");
                var sortAttr = "";
                $.each(bzArr, function (index, ele) {
                    if (ele == "Y") {
                        var attName = "";
                        sortAttr += $("#allFood thead th").not(".sele").not(".categoryName").not(".name").not(".boxNum").not(".boxPrice").eq(index).attr("data-val-name") + " | ";
                    }
                })
                if (sortAttr != "");
                sortText += '<div class="row text-left"><div class="col-md-9 col-md-offset-3"> 【全部】' + allCategory[key].cName + ' : <b>' + sortAttr + '</b></div></div>';
            }
        }
    }

    var textTr = sortText;
    allItem.each(function (index, ele) {
        var textInpt = "";
        var $seleCk = $(ele).find("td").not(".sele").find("input:checkbox:checked");
        if ($seleCk.length > 0 && allCategory[ele.className].canSort == false) {
            $seleCk.each(function (index, ele) {
                textInpt += $(ele).attr("data-val-name") + " | ";
            });
            textTr += '<div class="row text-left"><div class="col-md-9 col-md-offset-3">' + $(ele).find(".categoryName").html() + ' - ' + $(ele).find(".name").html() + ": <b>" + textInpt + '</b></div></div>';
        }
    });
    $(".sourceWares").find(".title_text").html("同步");
    $(".sourceWares").find(".allWares").html(textTr);
}

function confirmBox() {
    $("#goSync").removeAttr("disabled");
    //.sourceStoreConfirm
    var text1 = $(".sourceStore").find("select").eq(0).val();
    var text2 = $(".sourceStore").find("select").eq(1).val();
    var sourceStoreText = '<p>你要从 <kbd>' + text1 + '</kbd> 的 <kbd>' + text2 + '</kbd> 同步以下内容</p>';
    $("#go .sourceStoreConfirm").html(sourceStoreText);
    //.sourceWaresConfirm
    var allItem = $(".sourceWares tbody tr");
    if (allItem.find("td input:checkbox:checked").length == 0) {
        $("#goSync").attr("disabled", "disabled");
    }
    //一套带走
    var sortText = "";
    for (var key in allCategory) {
        if (allCategory.hasOwnProperty(key)) {
            var trCls = $(".sourceWares tbody ." + key);
            allCategory[key].canSort = true;
            trCls.each(function (index, ele) {
                allCategory[key].bzText = ele.bzText;
                if (ele.bzText != "NNNNN") {
                    if (trCls[0].bzText != ele.bzText) {
                        allCategory[key].canSort = false;
                        return false;
                    }
                }
                else {
                    allCategory[key].canSort = false;
                    return false;
                }
            })
            if (allCategory[key].canSort == true) {
                var sortCopy = "";
                var bzArr = allCategory[key].bzText.split("");
                var sortAttr = "";
                $.each(bzArr, function (index, ele) {
                    if (ele == "Y") {
                        var attName = "";
                        sortAttr += '<kbd>' + $("#allFood thead th").not(".sele").not(".categoryName").not(".name").not(".boxNum").not(".boxPrice").eq(index).attr("data-val-name") + '</kbd> | ';
                    }

                })
                if (sortAttr != "");
                sortText += '<a href="##" class="list-group-item"><h4 class="list-group-item-heading"> 【全部】' + allCategory[key].cName + '</h4><p class="list-group-item-text">' + sortAttr + '</p></a>';
            }
        }
    }

    var textTr = sortText;
    //剩下的
    allItem.each(function (index, ele) {
        var textInpt = "";
        var $sele = $(ele).find("td").not(".sele").find("input:checkbox:checked");
        $sele.each(function (index, ele) {
            textInpt += '<kbd>' + $(ele).attr("data-val-name") + '</kbd> | ';
        });
        if ($sele.length > 0 && allCategory[ele.className].canSort == false) {
            textTr += '<a href="##" class="list-group-item"><h4 class="list-group-item-heading">' + $(ele).find(".name").html() + '</h4><p class="list-group-item-text">' + textInpt + '</p></a>';
        }
    });
    //骨头都没剩下怎么办
    if (textTr != "") {
        $("#go .sourceWaresConfirm").find(".list-group").html(textTr);
    } else {
        $("#go .sourceWaresConfirm").find(".list-group").html('<p class="text-center"> <span style="color:red">没有选择菜品</span></p>');
    };
    //.postWaresConfirm    
    var text = "";
    var $postWares = $(".postWares input:checkbox:checked");
    $postWares.each(function (index, ele) {
        text += '<kbd>' + $(ele).attr("data-val-xh") + "</kbd> | "
    });
    if ($postWares.length == 0) {
        $("#goSync").attr("disabled", "disabled");
    }
    var postWaresText = '<p>到  ' + text + ' </p>';
    if ($postWares.length > 0) {
        $("#go .postWaresConfirm").html(postWaresText);
    } else {
        $("#go .postWaresConfirm").html('<p> <span style="color:red">没有选择同步平台</span></p>');
    }
    //.postStoreConfirm
    var $sele = $(".postStore").find("#storeListCk input");
    var $seleCk = $(".postStore").find("#storeListCk input:checkbox:checked");
    var $seleO2O = $(".postStore").find("#storeListCk .O2O input");
    var $seleO2OCk = $(".postStore").find("#storeListCk .O2O input:checkbox:checked");
    var text = "";
    var $postStore = $(".postStore #storeListCk input:checkbox:checked");
    if ($postStore.length == 0) {
        $("#goSync").attr("disabled", "disabled");
    }
    if ($sele.length == $seleCk.length) {
        text = "<kbd>【全部店】</kbd>";
    } else if ($seleO2O.length == $seleO2OCk.length) {
        text = "<kbd>全部【O2O店】 </kbd>";
        var _temp = 0;
        $seleCk.each(function (index, ele) {
            if ($(ele).closest("label").hasClass("O2O") == false) {
                if (_temp == 0) {
                    text += "和<br>";
                    _temp = 1;
                }
                text += " <kbd>" + $(ele).attr("data-val-name") + "</kbd> |"
            }
        });
    } else {
        $seleCk.each(function (index, ele) {
            text += " <kbd>" + $(ele).attr("data-val-name") + "</kbd> |"
        });
        text = '<p>的  ' + text + ' </p>';
    }
    var postStoreText = text;
    if ($postStore.length > 0) {
        $("#go .postStoreConfirm").html(postStoreText);
    } else {
        $("#go .postStoreConfirm").html('<p><span style="color:red">没有选择同步门店</span> </p>');
    }


    var allFoods = [];
    allItem.each(function (index, ele) {
        var $sele = $(ele).find("td").not(".sele").find("input:checkbox:checked");
        var food = {};
        var change = {};
        $sele.each(function (index, ele) {
            food = $(ele).closest("tr")[0].xh;
            var key = $(ele).closest("td")[0].className.replace("canCk ", "").replace(" active", "");
            if (key == "sall") key = "all";
            change[key] = true;
        });
        if (!isOwnEmpty(change)) {
            food.change = change;
            allFoods.push(food);
        }
    });

    console.log('allFoods:', allFoods);


    var platformsCode = "";
    $("#storeListSele option").each(function (index, ele) {
        if (ele.selected == true) {
            platformsCode = $(ele).attr("data-code-xh");
            return true;
        }
    });
    console.log('platformsCode:', platformsCode);
    var shopCode = "";
    $("#plaListSele option").each(function (index, ele) {
        if (ele.selected == true) {
            shopCode = $(ele).attr("data-code-xh");
            return true;
        }
    });
    console.log('shopCode:', shopCode);


    var platforms = [];
    $postWares.each(function (index, ele) {
        platforms.push($(ele).attr("data-code-xh"));
    })
    console.log('platforms:', platforms);
    var shopCodes = [];
    $seleCk.each(function (index, ele) {
        shopCodes.push($(ele).attr("data-val-xh"));
    })
    console.log('shopCodes:', shopCodes);

}

function srcWarBodyInputEvent() {
    //    $(".sourceWares table").on("click","td",function(){
    //        event.stopPropagation();
    //        console.log($(this).find("input").prop("checked"));
    //        if ($(this).find("input").prop("checked")){
    //            $(this).find("input").prop("checked",false);
    //        }else{
    //            $(this).find("input").prop("checked",true);
    //        }
    //        
    //    });

    $(".sourceWares #allFood").on("click", "input", function (e) {
        //        console.log(123);
        //            e.stopPropagation();
        var _this = this;
        var _$thisSele = $(_this);
        var _tagName = $(this).closest(".table-Type")[0].tagName;
        if (_tagName == "THEAD") {
            if ($(this).closest("th").hasClass("sele")) {
                var allCheck = $("#sourceWaresCont #allFood input:checkbox").not("#waresSeleAll");
                if (_$thisSele.is(':checked') == true) {
                    allCheck.each(function (index, ele) {
                        $(ele).prop("checked", "checked");
                    });
                }
                else {
                    allCheck.each(function (index, ele) {
                        $(ele).removeAttr("checked");
                    });
                }
            }
            else {
                //列
                var allCheckClass = _$thisSele.closest("th").attr("class");
                var allCheck = $("." + allCheckClass).filter("td").find("input");
                if (_$thisSele.is(':checked') == true) {
                    allCheck.each(function (index, ele) {
                        $(ele).prop("checked", "checked");
                    });
                }
                else {
                    allCheck.each(function (index, ele) {
                        $(ele).removeAttr("checked");
                    });
                }
            }
            //判断行
            $("#sourceWaresCont #allFood tbody tr").each(function (index, ele) {
                var _$allCheck = $(ele).find("td").not(".sele").find("input");
                var _$allChecked = $(ele).find("td").not(".sele").find("input:checkbox:checked");
                if (_$allCheck.length == _$allChecked.length) {
                    $(ele).find(".sele").find("input").prop("checked", "checked");
                }
                else {
                    $(ele).find(".sele").find("input").removeAttr("checked");
                }
            });
        }
        else if (_tagName == "TBODY") {
            if ($(this).closest("td").hasClass("sele")) {
                //checkbox最左边全选                    
                var allCheck = _$thisSele.closest("tr").find("td").not(".sele").find("input");
                if (_$thisSele.is(':checked') == true) {
                    allCheck.each(function (index, ele) {
                        $(ele).prop("checked", "checked");
                    });
                }
                else {
                    allCheck.each(function (index, ele) {
                        $(ele).removeAttr("checked");
                    });
                }
            }
            else {
                //checkbox内容
                //行
                var _$thisRow = $(_this).closest("tr").find("td");
                var _$thisRowAll = _$thisRow.not(".sele").find("input");
                var _$thisRowCheck = _$thisRow.not(".sele").find("input:checkbox:checked");
                if (_$thisRowAll.length == _$thisRowCheck.length) {
                    _$thisRow.eq(0).find("input").prop("checked", "checked");
                }
                else {
                    _$thisRow.eq(0).find("input").removeAttr("checked");
                }
                //列
                var _$thisCol = $(_this).closest("td");
                var _$thisColClass = _$thisCol.attr("class");
                var _$thisColAll = $("." + _$thisColClass).filter("td").find("input");
                var _$thisColCheck = $("." + _$thisColClass).filter("td").find("input:checkbox:checked");
                if (_$thisColAll.length == _$thisColCheck.length) {
                    $("." + _$thisColClass).eq(0).find("input").prop("checked", "checked");
                }
                else {
                    $("." + _$thisColClass).eq(0).find("input").removeAttr("checked");
                }
            }
            $("#sourceWaresCont #allFood thead th").each(function (index, ele) {
                if (index != 0) {
                    var theClass = ele.className;
                    var _$allCheck = $("." + theClass).filter("td").find("input");
                    var _$allChecked = $("." + theClass).filter("td").find("input:checkbox:checked");
                    if (_$allCheck.length == _$allChecked.length) {
                        $(ele).find("input").prop("checked", "checked");
                    }
                    else {
                        $(ele).find("input").removeAttr("checked");
                    }
                }
            });
        }
        var $allCheck = $("#sourceWaresCont #allFood input:checkbox").not("#waresSeleAll");
        var $allChecked = $("#sourceWaresCont #allFood input:checkbox:checked").not("#waresSeleAll");
        $("#sourceWaresCont #allFood .active").removeClass("active");
        $allChecked.each(function (index, ele) {
            $(ele).closest("td").addClass("active");
        });



        if ($allCheck.length == $allChecked.length) {
            $("#waresSeleAll").prop("checked", "checked");
        }
        else {
            $("#waresSeleAll").removeAttr("checked");
        }
    })
}



function initAjax() {
    // $.get(WebUrl + "/api/waimaiplatform/Shop/list").success(function (data) {
    $.get(WebUrl + "list.json").success(function (data) {
        if (data.success) {
            var dom = "";
            var dom2 = "";
            var copy = '<option data-id-xh={{id}} data-code-xh={{code}}>{{name}}</option>';
            var copy2 = '<label for="sto_{{id}}" class="checkbox-inline {{storeType}}"><input type="checkbox" id="sto_{{id}}" data-val-xh="{{code}}" data-val-name="{{name}}"> {{name}} </label>';
            var d = data.result;
            $.each(d, function (index, ele) {
                var storeType = "";
                if (ele.type == 1) storeType = "O2O";
                ele.name = ele.name.replace("小恒水饺", "").replace("(", "").replace(")", "").replace("（", "").replace("）", "");
                dom += copy.replace(/\{{id}}/g, ele.id).replace(/\{{code}}/g, ele.code).replace(/\{{name}}/g, ele.name);
                dom2 += copy2.replace(/\{{id}}/g, ele.id).replace(/\{{code}}/g, ele.code).replace(/\{{name}}/g, ele.name).replace(/\{{storeType}}/g, storeType);
            })
            $("#storeListSele").html(dom);
            $("#storeListCk").html(dom2);
            initFood();
        }
    }).error(function () {
        alert("无法获取门店,请稍后刷新重试");
    })
}

function initFood() {
    $(".sourceWares tbody").html("");
    $(".allWares").html("");
    $(".sourceWares #foodType form").html("");
    $(".sourceWares input").each(function (index, ele) {
        $(ele).prop("checked", false);
    })
    restBtnClass(".sourceStore .submit");
    $(".sourceStore .submit").addClass("btn-warning").attr("disabled", "disabled").html("loading...");
    var key = "";
    $("#storeListSele option").each(function (index, ele) {
        if (ele.selected == true) {
            key = $(ele).attr("data-code-xh");
            return true;
        }
    });
    var plaCode = "";
    $("#plaListSele option").each(function (index, ele) {
        if (ele.selected == true) {
            plaCode = $(ele).attr("data-code-xh");
            return true;
        }
    });

    // $.get("http://139.129.236.139:20003/api/waimaiplatform/Menu?WaimaiPlatform=" + plaCode + "&ShopCode=" + key).success(function (data) {
    $.get("./food.json").success(function (data) {
        if (data.success) {
            var d = data.result;
            allFood = d;
            var foodArr = [];
            $.each(d.items, function (index, ele) {
                $.each(ele.foods, function (index2, ele2) {
                    ele2.categoryName = ele.category.name;
                })
                Array.prototype.push.apply(foodArr, ele.foods);
            })
            //类型
            allCategory = {};
            $.each(foodArr, function (index, ele) {
                var cIdArr = allCategory["cId_" + ele.categoryId];
                if (!cIdArr || !$.isArray(cIdArr)) {
                    allCategory["cId_" + ele.categoryId] = [];
                    allCategory["cId_" + ele.categoryId].cName = ele.categoryName;
                    allCategory["cId_" + ele.categoryId].cId = ele.categoryId;
                } else {
                    allCategory["cId_" + ele.categoryId].push(ele)
                }
            })
            var cText = '<div class="checkbox"><label>  <input type="checkbox" data-val-xh="{{categoryId}}"> {{categoryName}}</label></div>';
            var cDom = "";
            $.each(allCategory, function (index, ele) {
                cDom += cText.replace(/\{{categoryId}}/g, ele.cId).replace(/\{{categoryName}}/g, ele.cName);
            })
            $(".sourceWares #foodType form").html(cDom);
            var copy = '<td class="sele"><input type="checkbox"> </td><td class="categoryName">{{categoryName}}</td><td class="name" data-val-xh="{{name}}">{{name}}</td><td class="canCk sall" data-val-xh="全部">    <label class="checkbox-inline" data-toggle="tooltip" data-placement="bottom" title="此【全部】包含不可见属性的全部，解释权在【侣哥】"><input type="checkbox" data-val-name="全部">全部</label></td><td class="canCk pic" data-val-xh="{{pic}}"><label class="checkbox-inline"><input type="checkbox" data-val-name="图片"><img src="{{pic}}" alt=""> </label></td><td class="canCk price" data-val-xh="{{price}}"><label class="checkbox-inline">    <input type="checkbox" data-val-name="价格">{{price}}</label></td><td class="canCk stock" data-val-xh="{{stock}}"><label class="checkbox-inline">    <input type="checkbox" data-val-name="库存">{{stock}}</label></td><td class="canCk boxNum" data-val-xh="{{boxNum}}">{{boxNum}}</td><td class="canCk boxPrice" data-val-xh="{{boxPrice}}">{{boxPrice}}</td><td class="canCk description" data-val-xh="{{description}}"><label class="checkbox-inline">    <input type="checkbox" data-val-name="描述">{{description}}</label></td><td class="edit"><button class="glyphicon glyphicon-edit "></button></td>'
            var dom = "";
            var js = data.data;
            console.log('foodArr', foodArr);
            for (var i = 0; i < foodArr.length; i++) {
                var obj = $('<tr>');
                //                var obj = $('<tr data-val-xh="{{categoryName}}" data-val-platformId="{{platformId}}" data-val-categoryId="{{categoryId}}" >');
                //tr上要挂类型
                obj[0].xh = foodArr[i];
                obj[0].oXh = foodArr[i];
                obj.categoryId = foodArr[i].categoryId;
                obj.addClass("cId_" + foodArr[i].categoryId);
                var text = copy.replace(/\{{categoryName}}/g, foodArr[i].categoryName).replace(/\{{name}}/g, foodArr[i].name).replace(/\{{pic}}/g, foodArr[i].pic).replace(/\{{price}}/g, foodArr[i].price).replace(/\{{stock}}/g, foodArr[i].stock).replace(/\{{boxNum}}/g, foodArr[i].boxNum).replace(/\{{boxPrice}}/g, foodArr[i].boxPrice).replace(/\{{description}}/g, foodArr[i].description);
                obj.html(text);
                $(".sourceWares tbody").append(obj);
            }
            $('.sourceWares #allFood [data-toggle="tooltip"]').tooltip();
            restBtnClass(".sourceStore .submit");
            $(".sourceStore .submit").addClass("btn-success").html("确定");
        } else {
            var msg = data.error.message;
            restBtnClass(".sourceStore .submit");
            $(".sourceStore .submit").addClass("btn-danger").attr("disabled", "disabled").html(msg);
        }
    }).error(function (d1, d2) {
        restBtnClass(".sourceStore .submit");
        $(".sourceStore .submit").addClass("btn-danger").attr("disabled", "disabled").html("门店菜品获取错误");
        console.log(d1);
        console.log(d2);
    });
}


function restBtnClass(objText) {
    $(objText).removeClass("btn-success").removeClass("btn-warning").removeClass("btn-danger").removeAttr("disabled");
}

function isOwnEmpty(obj) {
    for (var name in obj) {
        if (obj.hasOwnProperty(name)) {
            return false;
        }
    }
    return true;
};

//var copy = ' <td class="sele"><input type="checkbox"> </td><td class="name" data-val-xh="{{name}}">{{name}}</td><td class="pic" data-val-xh="{{pic}}" > <label class="checkbox-inline">    <input type="checkbox" data-val-name="图片"><img src="{{pic}}" alt=""></label></td><td class="stock" data-val-xh="{{stock}}"><label class="checkbox-inline">    <input type="checkbox" data-val-name="库存">{{stock}}</label></td><td class="price" data-val-xh="{{price}}"><label class="checkbox-inline">    <input type="checkbox" data-val-name="价格">{{price}}</label></td><td class="edit"><button class="glyphicon glyphicon-edit "></button></td>';

//
//function test() {
//    $.ajax({
//        url: "./test.js"
//        , dataType: "json"
//        , success: function (data) {
//            var dom = "";
//            var js = data.data;
//            for (var i = 0; i < js.length; i++) {
//                var obj = $("<tr>");
//                //tr上要挂类型
//                obj[0].xh = js[i];
//                obj[0].oXh = js[i];
//                var text = copy.replace(/\{{pic}}/g, js[i].pic).replace(/\{{stock}}/g, js[i].stock).replace(/\{{price}}/g, js[i].price).replace(/\{{name}}/g, js[i].name);
//                obj.html(text);
//                $(".sourceWares tbody").append(obj);
//            }
//        }
//        , error: function () {
//            console.log(123);
//        }
//    })
//}