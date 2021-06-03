var AllJs = "";
var pkJs = "";

$(function () {
    //提示框
    $('[data-toggle="tooltip"]').tooltip();
    //同步窗口
    //全选
    $("#syncSeleAll").on("click",function(){
        var $isCk = $("#syncStores input:checked");
        console.log($isCk);
        if ($isCk.length == 0){
            $("#syncStores input").prop("checked", true);
        }else{
            $("#syncStores input").prop("checked", false);
        }
    });
    $("#syncStores").on("click","input",function(){
        var $allCk = $("#syncStores input");
        var $isCk = $("#syncStores input:checked");
        console.log('$allCk.length:', $allCk.length);
        console.log('$isCk.length:', $isCk.length);
        if ($isCk.length == $allCk.length) {
            $("#syncSeleAll").prop("checked", true);
        }else{
            $("#syncSeleAll").prop("checked",false);
        }
    })
    
    //IOS开关
    $('.checkbox-switch').each(function (index, ele) {
        var _this = this;
        var option = {};
        ($(_this).attr("data-xh-switch") == "true") ? option.checked = true: option.checked = false;
        option.onChange = function () {
            ($(_this).attr("data-xh-switch") == "true") ? $(_this).attr("data-xh-switch", "false"): $(_this).attr("data-xh-switch", "true");
        }
        //标题放大
        if (!$(_this).closest("div").hasClass("title")) {
            option.size = "small";
        }
        //标题按钮联动
        if ($(_this).closest("div").hasClass("panel-heading")) {
            option.onChange = function () {
                ($(_this).attr("data-xh-switch") == "true") ? $(_this).attr("data-xh-switch", "false"): $(_this).attr("data-xh-switch", "true");
                ($(_this).attr("data-xh-switch") == "true") ? $(_this).closest("div").next().slideDown(): $(_this).closest("div").next().slideUp();
                //打印开关--退单打印联动
                if ($(_this).attr("data-xh-obj") == "PrinterEnabled") {
                    if ($(_this).attr("data-xh-switch") == "true") {
                        $(".NewRefundPrintNotifyEnabled").closest(".list-group-item").removeClass("gray").attr("data-original-title", "");
                        $(".NewRefundPrintNotifyEnabled")[0].ck.enable(); 
                    }else{
                        $(".NewRefundPrintNotifyEnabled").closest(".list-group-item").addClass("gray").attr("data-original-title", "不可用，必须启用打印");
                        $(".NewRefundPrintNotifyEnabled")[0].ck.disable(); 
                    }
                }
            }
        }
        //自动打印联动
        if ($(_this).hasClass("AutoPrintEnabled")) {
            option.onChange = function () {
                ($(_this).attr("data-xh-switch") == "true") ? $(_this).attr("data-xh-switch", "false"): $(_this).attr("data-xh-switch", "true");
                if ($(_this).attr("data-xh-switch") == "true") {
                    $(".PrinterName").slideDown();
                }
                else {
                    $(".PrinterName").slideUp();                    
                }
            }
        }
        //后厨打印联动
        if ($(_this).hasClass("KitchenPrinterEnabled")) {
            option.onChange = function () {
                ($(_this).attr("data-xh-switch") == "true") ? $(_this).attr("data-xh-switch", "false"): $(_this).attr("data-xh-switch", "true");
                if ($(_this).attr("data-xh-switch") == "true") {
                    $(".KitchenPrinterName").slideDown();
                    $(".KitchenPrinterPic").slideDown();
                }
                else {
                    $(".KitchenPrinterName").slideUp();
                    $(".KitchenPrinterPic").slideUp();
                }
            }
        }
        _this.ck = new Switch(ele, option);
        _this.ck.toggle();
        _this.ck.toggle();
    });
    //图片文本绑定
    $(".textHasPic").on("keyup", function () {
        var _val = $(this).val();
        var cls = $(this).attr("data-xh-obj");
        $(".picText." + cls).html(_val);
    })
    $(".input-group").on("click", ".glyphicon-pencil", function (e) {
        e.stopPropagation();
        var _this = this;
        $(_this).removeClass("glyphicon-pencil").addClass("glyphicon-floppy-disk");
        $(_this).closest("div").find("input").removeAttr("disabled");
    })
    $(".input-group").on("click", ".glyphicon-floppy-disk", function (e) {
            e.stopPropagation();
            var _this = this;
            $(_this).removeClass("glyphicon-floppy-disk").addClass("glyphicon-pencil");
            var _val = $(_this).closest("div").find("input").val();
            $(_this).closest("div").find("input").attr("disabled", "disabled").attr("data-xh-data", _val);
        })
    //TextInput数据首次赋值
    $(".textInput").each(function (index, ele) {
        var _val = $(ele).attr("data-xh-data");
        $(ele).val(_val);
    });
    $(".gray").on("click",function(){
        return false;
    })

    //table   
    //1.初始化Table
    var oTable = new TableInit();
    oTable.Init();

    //2.初始化表格Button的点击事件
    var oButtonInit = new ButtonInit();
    oButtonInit.Init();
    
    tabelVal();
    
    //套餐-增加
    $("#package").on("click", ".pkAdd", function () {
        var obj = {
            "Name": "请修改名称"
            , "IncludedDishes": []
        }
        pkJs.push(obj);
        pkJs = formartPk(pkJs);
       $('#package').bootstrapTable('load', pkJs);
    });
    //套餐-子表-增加
    $("#package").on("click", ".pkSmAdd", function () {
        var obj ={
            "Name": "请修改名称"
            , "Amount": 1
        }        
        var id = $(this).closest("table")[0].id;
        var index = id.indexOf("_");
        var fzId = id.substring(index+1);
        for (var i=0; i<pkJs.length;i++){
            if (pkJs[i].uniqueId == fzId){
                pkJs[i].IncludedDishes.push(obj);
                pkJs = formartPk(pkJs);
                $('#'+id).bootstrapTable('load', pkJs[i].IncludedDishes);
                break;
            }
        }    
        $("#package>tbody>.danger").removeClass("danger");
        $("#package table .danger").each(function(index,ele){
            $(ele).closest(".detail-view").prev().addClass("danger");
        })
    });


});

var TableInit = function () {
    var oTableInit = new Object();
    //初始化Table
    oTableInit.Init = function () {
        //菜品
        $('#food').bootstrapTable({
            url: './all.js',         //请求后台的URL（*）
            method: 'get',                      //请求方式（*）
            toolbar: '#toolbar',                //工具按钮用哪个容器
            cache: false,                       //是否使用缓存，默认为true，所以一般情况下需要设置一下这个属性（*）
            pagination: false,                   //是否显示分页（*）
            sortable: false,                     //是否启用排序
            sortOrder: "asc",                   //排序方式
            queryParams: oTableInit.queryParams,//传递参数（*）
            responseHandler:function(data){
                AllJs = data;
                pkJs = formartPk(AllJs.pk);
                var d = data.cp
               d.sort(by("Sort"));
              //处理排序  
               $.each(d,function(index,ele){
                   ele.uniqueId = "xhId" + index;
                   (ele.IsKitchenDish == "true")?ele.IsKitchenDish = "√":ele.IsKitchenDish = "X";
                   (ele.IsDineInDish == "true")?ele.IsDineInDish = "√":ele.IsDineInDish = "X";
               })
                return d;
            },
            sidePagination: "client",           //分页方式：client客户端分页，server服务端分页（*）
            pageNumber:1,                       //初始化加载第一页，默认第一页
            pageSize: 10,                       //每页的记录行数（*）
            pageList: [10, 25, 50, 100],        //可供选择的每页的行数（*）
            search: true,                       //是否显示表格搜索，此搜索是客户端搜索，不会进服务端，所以，个人感觉意义不大
            strictSearch: false,
            showColumns: true,                  //是否显示所有的列
            showRefresh: true,                  //是否显示刷新按钮
            minimumCountColumns: 2,             //最少允许的列数
            clickToSelect: true,                //是否启用点击选中行
//            height: 500,                        //行高，如果没有设置height属性，表格自动根据记录条数觉得表格高度
            uniqueId: "uniqueId",                     //每一行的唯一标识，一般为主键列
            showToggle:false,                    //是否显示详细视图和列表视图的切换按钮
            showPaginationSwitch:false,          //是否显示所有数据按钮
            cardView: false,                    //是否显示详细视图
            rowAttributes:function(row,index){
            },
            onLoadSuccess:function(){
                oTableInit.pk();
            },
            filterControl:true,
            filterShowClear:false,
            filterStartsWithSearch:true,
            reorderableRows:true,
            useRowAttrFunc:true,
            onReorderRowsDrag:function(table,row){
            },
            onReorderRowsDrop:function(table,row){
                updateRows();
            },   
            showExport:true,
            exportOptions:{
                ignoreColumn:[0],
                onCellData: function(cell, row, col, data) {
//                    console.log(cell);
//                    console.log('row:', row);
//                    console.log('col:', col);
//                    console.log('data:', data);
                    if (row == 0 ){
                        return cell[0].outerText.replace(/\n/g, '')
                    }else{
                        return data;
                    }
                    
                }
            },
            columns: [{
                checkbox: true,
                order:'asc',
                field:"checkbox"
            }, {
                field: 'Sort',
                title: '序号',
                searchable:false,
                class:"Sort"
            }, {
                field: 'Name',
                title: '名称',
                filterControl:"input",
                class:"Name",
                editable:{
                    emptytext: "-"
                    , validate: function (value) { //字段验证
                        if (!$.trim(value)) {
                            return '不能为空';
                        }
                    }
                }
            }, {
                field: 'Keywords',
                title: '关键词',
                filterControl:"input",
                class:"Keywords",
                titleTooltip:"关键词用 英文 逗号 隔开",
                editable:{
                    emptytext: "-"
                    , validate: function (value) { //字段验证
                        if (!$.trim(value)) {
                            return '不能为空';
                        }
                    }
                }                
            }, {
                field: 'IsKitchenDish',
                title: '后厨',
                filterControl:"select",
                class:"IsKitchenDish",
                editable:{
                    emptytext: "-"
                    , type: "select"
                    , source: [{value: "X", text: "X"}, {value: "√", text: "√"}]
                    , showbuttons : false
                }               
            }, {
                field: 'IsDineInDish',
                title: '堂食',
                filterControl:"select",
                class:"IsDineInDish",
                editable:{
                    emptytext: "-"
                    , type: "select"
                    , source: [{value: "X", text: "X"}, {value: "√", text: "√"}]
                    , showbuttons : false
                }
            },{
                field: 'DineInPrice',
                title: '原价',
                filterControl:"select",
                class:"DineInPrice",
                editable:{
                    emptytext: "-"
                    , validate: function (value) { //字段验证
                        if (!$.trim(value)) {
                            return '不能为空';
                        }
                        if (isNaN(value)) {
                            return '只能为数字';
                        }
                    }
                }     
            } ]
            ,onEditableSave: function (field, row, oldValue, $el) {
//                console.log('field:', field);
//                console.log('row:', row);
//                console.log('oldValue:', oldValue);
//                console.log('$el:', $el);
                if (field == "Keywords"){
                    row.Keywords = row.Keywords.replace(" ",",").replace("　",",").replace("，",",");
                    $('#food').bootstrapTable('updateCell', {index: row.Sort-1,field:field,value:row.Keywords});
                }
            }
        });
        
    };

    
    //套餐
    oTableInit.pk = function () {
        $('#package').bootstrapTable({
            data: pkJs
            , toolbar: '#pktoolbar', //工具按钮用哪个容器
            cache: false, //是否使用缓存，默认为true，所以一般情况下需要设置一下这个属性（*）
            pagination: false, //是否显示分页（*）
            sortable: false, //是否启用排序
            sortOrder: "asc", //排序方式
            detailView: true, //显示详细列表
            detailFormatter: function (index, row, $detail) {
//                oTableInit.InitSubTable(index, row, $detail);
            }
            , onExpandRow: function (index, row, $detail) {
                oTableInit.InitSubTable(index, row, $detail);
            }
            , sidePagination: "client", //分页方式：client客户端分页，server服务端分页（*）
            search: false, //是否显示表格搜索，此搜索是客户端搜索，不会进服务端，所以，个人感觉意义不大
            strictSearch: false, //全匹配搜索
            showColumns: false, //是否显示所有的列
            showRefresh: false, //是否显示刷新按钮
            uniqueId: "uniqueId", //每一行的唯一标识，一般为主键列
            showToggle: false, //是否显示详细视图和列表视图的切换按钮
            showPaginationSwitch: false, //是否显示所有数据按钮
            rowAttributes: function (row, index) {},
            rowStyle:function(row,index) {
                var strclass = "";
                if (row.pkName == "请修改名称"){
                    strclass =  "danger";
                }
                return {
                    classes: strclass
                }
            }            
            , columns: [{
                field: 'SortPk',
                title: '序号隐藏',
                searchable:false,
                class:"SortPkHide"
            },{
                field: 'pkName'
                , title: '套餐名称'
                , class: "pkName"
                , align : "center"
                , editable:{
                    emptytext: "-"
                    , validate: function (value) { //字段验证
                        if (!$.trim(value)) {
                            return '不能为空';
                        }
                    }
                }
            },{
                field: 'pkOperate'
                , title:  '<a class="pkAdd" href="javascript:void(0)" title="Like"><i class="glyphicon glyphicon-plus"></i></a>'
                , align: 'center'
                , events: {
                    'click .pkRemove': function (e, value, row, index) {
                        $("#package").bootstrapTable('removeByUniqueId',row.uniqueId);
                    }
                }
                , formatter: function (value, row, index) {
                    return [
                                '<a class="pkRemove removeBtn" href="javascript:void(0)" title="Remove">'
                                , '<i class="glyphicon glyphicon-remove"></i>'
                                , '</a>'
                            ].join('');
                }
            }
               ]
            , onEditableSave: function (field, row, oldValue, $el) {    
//                $("#package>tbody>.danger").removeClass("danger");
//                $("#package table .danger").each(function (index, ele) {
//                    $(ele).closest(".detail-view").prev().addClass("danger");
//                })
            }
        }); 
    }
    
    
    //子表格
    oTableInit.InitSubTable = function (index, row, $detail) {
      var parentid = row.pkName;
      var cur_table = $detail.html('<table id=pkSmTable_' + row.uniqueId + '></table>').find('table');
      $(cur_table).bootstrapTable({
          data: pkJs[index].IncludedDishes
          , uniqueId: "uniqueId"
          , rowStyle: function (row, index) {
              var strclass = "";
              if (row.pkSmName == "请修改名称") {
                  strclass = "danger";
              }
              return {
                  classes: strclass
              }
          }
          , columns: [{
                field: 'SortPkSm',
                title: '序号隐藏',
                searchable:false,
                class:"SortPkHide"
            },{
              field: 'pkSmName'
              , title: '菜单名称'
              , align : "center"
              , editable: {
                  emptytext: "-"
                  , placement: "right"
                  , validate: function (value) { //字段验证
                      if (!$.trim(value)) {
                          return '不能为空';
                      }
                  }
              }
            }, {
              field: 'Amount'
              , title: '数量'
              , align : "center"
              , editable:{
                    emptytext: "-"
                    , validate: function (value) { //字段验证
                        if (!$.trim(value)) {
                            return '不能为空';
                        }
                        if (isNaN(value)) {
                            return '只能为数字';
                        }
                    }
                }     
            }, {
              field: 'pkSmOperate'
              , title: '<a class="pkSmAdd" href="javascript:void(0)" title="Like"><i class="glyphicon glyphicon-plus"></i></a>'
              , align: 'center'
              , events: {
                  'click .pkSmRemove': function (e, value, row, index) {
                      $("#pkSmTable_" + row.pkFzID).bootstrapTable('removeByUniqueId', row.uniqueId);
                      var nowData = $("#pkSmTable_" + row.pkFzID).bootstrapTable('getData');
                      if (nowData == "") {
                          $("#pkSmTable_" + row.pkFzID).bootstrapTable('removeAll');
                          $("#package").bootstrapTable('removeByUniqueId', row.pkFzID);
                      }
                      $("#package>tbody>.danger").removeClass("danger");
                      $("#package table .danger").each(function (index, ele) {
                          $(ele).closest(".detail-view").prev().addClass("danger");
                      })
                  }
              }
              , formatter: function (value, row, index) {
                  return [
                                    '<a class="pkSmRemove removeBtn" href="javascript:void(0)" title="Remove">'
                                    , '<i class="glyphicon glyphicon-remove"></i>'
                                    , '</a>'
                                ].join('');
              }
        }]
        ,onEditableSave: function (field, row, oldValue, $el) {    
            $("#package>tbody>.danger").removeClass("danger");
            $("#package table .danger").each(function (index, ele) {
                $(ele).closest(".detail-view").prev().addClass("danger");
            })
        }
      });
  };
    
    //得到查询的参数
    oTableInit.queryParams = function (params) {
        var temp = {   //这里的键的名字和控制器的变量名必须一直，这边改动，控制器也需要改成一样的
            limit: params.limit,   //页面大小
            offset: params.offset,  //页码
            departmentname: $("#txt_search_departmentname").val(),
            statu: $("#txt_search_statu").val()
        };
        return temp;
    };
    return oTableInit;
};



function formartPk(data) {
    var d = data
    $.each(d, function (index, ele) {
        ele.uniqueId = "xhId_pk" + index;
        ele.pkName = ele.Name;
        $.each(ele.IncludedDishes, function (index_sm, ele_sm) {
            ele_sm.uniqueId = "xhId_pk" + index + "_sm" + index_sm;
            ele_sm.pkSmName = ele_sm.Name;
            ele_sm.pkFzID = ele.uniqueId;
        });
    })
    return d
}


function updateRows() {
    $("#food tbody tr").each(function (index, ele) {
        var id = $(ele).attr("data-uniqueid");
        var obj = $('#food').bootstrapTable('getRowByUniqueId', id);
        obj.Sort = index + 1;
        $('#food').bootstrapTable('updateRow', {
            index: index
            , row: obj
        });
    })
}

var ButtonInit = function () {
    var oInit = new Object();
    var postdata = {};
    oInit.Init = function () {
        //删除按钮
        $("#btn_delete").on('click', function () {
            var seleRows = $("#food").bootstrapTable('getSelections');
            if (seleRows != "") {
                $.each(seleRows, function (index, ele) {
                    $('#food').bootstrapTable('removeByUniqueId', ele.uniqueId);
                })
            }
            else {
                alert("没有选择任何行");
            }
        });
        //增加
        //增加-保存
        $("#foodAddSave").on("click", function () {
            var bootstrapValidator = $("#addRow").data('bootstrapValidator');
            bootstrapValidator.validate();
            if (bootstrapValidator.isValid()) {
                var index = $("#addSort").val();
                var IsKitchenDish = $("#addIsKitchenDish").is(':checked');
                (IsKitchenDish) ? IsKitchenDish = "√": IsKitchenDish = "X";
                var IsDineInDish = $("#addIsDineInDish").is(':checked');
                (IsDineInDish) ? IsDineInDish = "√": IsDineInDish = "X";
                var Keywords =  $("#addKeywords").val().replace(" ",",").replace("　",",").replace("，",",");
                var obj = {
                    Sort: index
                    , Name: $("#addName").val()
                    , Keywords:Keywords
                    , IsKitchenDish: IsKitchenDish
                    , IsDineInDish: IsDineInDish
                    , DineInPrice: $("#addDineInPrice").val()
                    , uniqueId: "xhId" + $("#food tbody tr").length
                }
                $('#food').bootstrapTable('insertRow', {
                    index: index-1
                    , row: obj
                });
                updateRows();
                $("#foodAdd").modal("toggle");
            }
            else {
                return false;
            }
        });        
    };
    return oInit;
};

function tabelVal() {
    $('#addRow').bootstrapValidator({
        message: 'This value is not valid'
        , feedbackIcons: { /*input状态样式图片*/
            valid: 'glyphicon glyphicon-ok'
            , invalid: 'glyphicon glyphicon-remove'
            , validating: 'glyphicon glyphicon-refresh'
        }
        , fields: { /*验证：规则*/
            sort: { //验证input项：验证规则
                message: 'The sort is not valid'
                , validators: {
                    notEmpty: { //非空验证：提示消息
                        message: '序号不能为空'
                    }
                    ,between:{
                        min:1,
                        max:99
                    }
                }
            }
            , username: {
                message: 'The username is not valid'
                , validators: {
                    notEmpty: {
                        message: '名称不能为空'
                    }
                }
            }
            , keyWords: {
                message: 'The keyWords is not valid'
                , validators: {
                    notEmpty: {
                        message: '名称不能为空'
                    }
                }
            }
            , price: {
                message: 'The price is not valid'
                , validators: {
                    notEmpty: {
                        message: '名称不能为空'
                    }
                }
            }
        }
    })
}















 var by = function (name) {
            return function ( o, p) {
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