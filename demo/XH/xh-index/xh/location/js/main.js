var jsUrl = "./jsonp/sto_info2.js?" + new Date().getTime();
//var locUrl = "./jsonp/sto_range.js";
var myPos = {
    lat: 39.90594
    , lng: 116.455698
};
var stores = []; //原始数组
var stList = []; //最终门店数组
var nowMin = new Date().getHours() * 60 + new Date().getMinutes();
var nowDate = new Date().getTime();
$(function () {
    //    navigator.geolocation.getCurrentPosition(success, err, {
    //        timeout: 2000
    //    });
    var geolocation = new qq.maps.Geolocation("HJFBZ-SFKP5-GQII7-QEWU3-TWW26-3MF3C", "myapp");
    geolocation.getLocation(success, err, {
        timeout: 2000
        , failTipFlag: true
    });
    //***************************************************************
    //定位地址--未找到采用天安门   
    //                lat: 39.908864
    //            , lng: 116.397443
    ///点击事件
    $("#addr").click(function (e) {
        $("#map").toggleClass("plus");
        $("#add").toggleClass("xz");
        $("#lh").toggleClass("xl");
    });
    $("#lh").click(function (e) {
        $("#map").toggleClass("plus");
        $("#add").toggleClass("xz");
        $("#lh").toggleClass("xl");
    });
    $("#add").click(function (e) {
        $("#map").toggleClass("plus");
        $("#add").toggleClass("xz");
        $("#lh").toggleClass("xl");
    });
    $("#map").click(function () {
        event.stopPropagation();
    });
});
//定位获取位置
function success(position) {
    var latitude = position.lat;
    var longitude = position.lng;
    if (latitude == null || longitude == null) {
        myPos = {
            lat: 39.90594
            , lng: 116.455698
        }
    }
    else {
        myPos = {
            lat: latitude
            , lng: longitude
        }
    }
    getDom();
    getAddr();
};

function err() {
    getDom();
}

function getDom() {
    stores = [];
    stList = [];
    //获取位置
    $.ajax({
        url: jsUrl
        , async: false
        , cache: true
        , dataType: "text"
        , success: function (data) {
            //处理数组排序 输出排序好的 stList[]
            var posArr = [];
            stores = JSON.parse(data);
            //更新地图数据
            for (var i = 0; i < stores.length; i++) {
                if (stores[i].IsTakeoutOnly == false || stores[i].IsTakeoutOnly == "") {
                    //                                            if (1) {
                    //*************************位置计算****************
                    if (stores[i].Latitude == "" || stores[i].Latitude == null) {
                        var wz = -1; //无经纬度标记-1
                    }
                    else {
                        var wz = getDistance(myPos.lat, myPos.lng, stores[i].Latitude, stores[i].Longitude); //距离计算
                    }
                    stores[i].pos = wz;
                    //*************************营业时间计算****************
                    var stStArr = stores[i].StoreOpenTime.split(":")
                    var stClArr = stores[i].StoreCloseTime.split(":")
                    var stStMin = stStArr[0] * 60 + stStArr[1] * 1;
                    var stClMin = stClArr[0] * 60 + stClArr[1] * 1;
                    var stDtAr = stores[i].EstablishmentDate.split("-");
                    var stDt = new Date(stDtAr[1] + "/" + stDtAr[2] + "/" + stDtAr[0]).getTime();
                    //未营业的打上标记
                    if (nowMin <= stStMin || nowMin > stClMin) {
                        stores[i].optm = 1; //不在营业时间
                    }
                    if (stDt > nowDate) {
                        stores[i].edtm = 1; //未开业
                    }
                    //根据不同距离加上不同css
                    if (wz - 1000 < 0 && wz >= 0) {
                        stores[i].poss = ForDight(wz);
                        stores[i].cls = "cd-pic car";
                    }
                    else if (wz > 10000) {
                        stores[i].poss = ForDight(wz);
                        stores[i].cls = "cd-pic air";
                    }
                    else if (wz != -1) {
                        stores[i].poss = ForDight(wz);
                        stores[i].cls = "cd-pic tra";
                    }
                    if (stores[i].optm == 1 || stores[i].edtm == 1) {
                        stores[i].cls = "cd-pic not";
                    }
                    if (wz == -1) {
                        stores[i].poss = " ";
                        stores[i].cls = "cd-pic not";
                    }
                    if (wz != -1) {
                        posArr.push(wz);
                    }
                }
            }
            posArr.sort(function (a, b) {
                return a - b;
            });
            var optmList = [];
            for (var i = 0; i < posArr.length; i++) {
                for (var j = 0; j < stores.length; j++) {
                    if (posArr[i] == stores[j].pos) {
                        stList.push(stores[j]);
                        break;
                    }
                }
            }
            for (var i = 0; i < stores.length; i++) {
                if (stores[i].pos == -1) {
                    stList.push(stores[i]);
                }
            }
            var _doms = "";
            for (var i = 0; i < stList.length; i++) {
                (function (n) {
                    _doms += getHtmlSt(stList[i]);
                })(i);
            }
            $("#store").html(_doms);
            getStMap(stores);
        }
        , error: function () {
            console.log("net-err");
        }
    });
}
//构建HTML
function getHtmlSt(obj) {
    var _copy = "<li><div class='{{cls}}'> <span>{{st_pos}}</span> <img src='' alt=''> </div><div class='cd-cont {{NOT}}'><div class='cont-top'><p class='st_na'>{{st_na}}</p></div><div class='cont-main'><p class='st_ph'><a href='tel:{{st_ph}}}'>{{st_ph}}</a></p><p class='st_ad'>{{st_ad}}</p></div><div class='cont-btm clearfix'><p class='st_ot {{timeout}}'>{{st_time}}</p>{{_mod_map}}{{_mod_meituan}}</div></div></li>";
    ///123123
    var _copy_mod_map = "<a class='st_btn st_map' target='_blank' href='http://3gimg.qq.com/lightmap/v1/marker/?marker=coord:{{st_lat}},{{st_lng}};title:{{st_na}};addr:{{st_ad}}&key=HJFBZ-SFKP5-GQII7-QEWU3-TWW26-3MF3C&referer=tengxun&ch=uri-api&ADTAG=uri-api.other'>查看地图</a>";
    var _copy_mod_meituan = "<a class='st_btn st_wm' target='_blank' href='{{st_wm_url}}'>美团外卖</a>";
    var _dom = "";
    if (obj.pos == -1) {
        _copy_mod_map = "";
    }
    else {
        _copy_mod_map = _copy_mod_map.replace(/\{{st_lat}}/g, obj.Latitude).replace(/\{{st_lng}}/g, obj.Longitude).replace(/\{{st_na}}/g, obj.Name).replace(/\{{st_ad}}/g, obj.Address);
    }
    if (obj.TakeoutUrl == "" || obj.TakeoutUrl == null) {
        _copy_mod_meituan = "";
    }
    else {
        _copy_mod_meituan = _copy_mod_meituan.replace(/\{{st_wm_url}}/g, obj.TakeoutUrl)
    }
    if (obj.edtm == 1) {
        var _st_tm_ar = obj.EstablishmentDate.split("-");
        var st_tm = " " + _st_tm_ar[1] + " 月 " + _st_tm_ar[2] + " 日 ";
    }
    else {
        var st_tm = obj.StoreOpenTime + " - " + obj.StoreCloseTime;
    }
    _copy = _copy.replace(/\{{_mod_map}}/g, _copy_mod_map).replace(/\{{_mod_meituan}}/g, _copy_mod_meituan);
    _dom = _copy.replace(/\{{st_pos}}/g, obj.poss).replace(/\{{st_na}}/g, obj.Name).replace(/\{{st_ph}}/g, obj.Phone).replace(/\{{st_ad}}/g, obj.Address).replace(/\{{st_lat}}/g, obj.Latitude).replace(/\{{st_lng}}/g, obj.Longitude).replace(/\{{st_time}}/g, st_tm).replace(/\{{cls}}/g, obj.cls);
    if (obj.optm == 1 && obj.edtm != 1) {
        _dom = _dom.replace(/\{{NOT}}/g, "notontime-notwork").replace(/\{{timeout}}/g, "notontime");
    }
    else if (obj.edtm == 1) {
        _dom = _dom.replace(/\{{NOT}}/g, "notontime-notwork").replace(/\{{timeout}}/g, "notbgtime");
    }
    else {}
    return _dom;
}
//***************************************************************
//根据地位返回地址
function getAddr() {
    var data = {　　　　　　
        location: myPos.lat + "," + myPos.lng
        , key: "HJFBZ-SFKP5-GQII7-QEWU3-TWW26-3MF3C"
        , get_poi: 0　　　　
    };
    var url = "http://apis.map.qq.com/ws/geocoder/v1/?";
    data.output = "jsonp";
    $.ajax({
        type: "get"
        , async: true
        , dataType: 'jsonp'
        , data: data
        , jsonp: "callback"
        , jsonpCallback: "QQmap"
        , url: url
        , success: function (json) {
            $("#addr").text(json.result.address).addClass("getAr");
        }
        , error: function (err) {
            console.log("tx服务端错误，请刷新浏览器后重试")
        }
    });
}
//***************************************************************
//计算位置
function getDistance(lat1, lng1, lat2, lng2) {
    var dis = 0;
    var radLat1 = toRadians(lat1);
    var radLat2 = toRadians(lat2);
    var deltaLat = radLat1 - radLat2;
    var deltaLng = toRadians(lng1) - toRadians(lng2);
    var dis = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(deltaLat / 2), 2) + Math.cos(radLat1) * Math.cos(radLat2) * Math.pow(Math.sin(deltaLng / 2), 2)));
    return parseInt(dis * 6378137);

    function toRadians(d) {
        return d * Math.PI / 180;
    }
}
//有效数字
function ForDight(ds) {
    if (ds < 100) {
        return "小于100米";
    }
    else if (ds < 1000) {
        return Math.round(ds / 100) + "00 米";
    }
    else {
        return Math.round(ds / 1000) + " 公里";
    }
}
//***************************map.js*******************************
function getStMap(data) {
    //添加地图
    document.getElementById("map").innerHTML = "";
    var myMap = new qq.maps.Map(document.getElementById("map"), {
        center: new qq.maps.LatLng(39.910263, 116.563568), //39.90594, 116.455698地图初始化以建外东区为中心
        //        center: new qq.maps.LatLng(39.843340, 116.495419),
        zoom: 11
    });
    //定位图标
    var infoWin = new qq.maps.InfoWindow({
        map: myMap
    });
    var latlngs = [];
    for (var i = 0; i < data.length; i++) {
        (function (n) {
            if (data[n].edtm == 1) {
                var _name = data[n].Name + "(即将开业)";
                console.log(data[n].Name);
            }
            else {
                var _name = data[n].Name;
            }
            var _st_latlng = new qq.maps.LatLng(data[n].Latitude, data[n].Longitude);
            var marker = new qq.maps.Marker({
                position: _st_latlng
                , map: myMap
            });
            if (data[n].TakeoutUrl != "") {
                var _tkUrl = "<div style='text-align:center;white-space:nowrap;margin-left:0;line-height:20px;'>" + _name + "<br><a target='_blank' href='" + data[n].TakeoutUrl + "'><img src='./location/img/ico_wm.png' height='40px'></a></div>";
            }
            else {
                var _tkUrl = "<div style='text-align:center;white-space:nowrap;margin-left:0;line-height:20px;'>" + _name + "</div>";
            }
            qq.maps.event.addListener(marker, 'click', function () {
                infoWin.open();
                infoWin.setContent(_tkUrl);
                infoWin.setPosition(_st_latlng);
            });
        })(i);
    }
    //范围图层
    for (var j = 0; j < data.length; j++) {
        var path1 = [];
        if (data[j].TakeoutArea) {
            for (var k = 0; k < data[j].TakeoutArea.length; k++) {
                var _path_la = data[j].TakeoutArea[k].Latitude;
                var _path_lg = data[j].TakeoutArea[k].Longitude;
                var _path_map = new qq.maps.LatLng(_path_la, _path_lg);
                path1.push(_path_map);
            }
        }
        var polygon = new qq.maps.Polygon({
            map: myMap
            , path: path1
            , strokeColor: new qq.maps.Color("##D45370", 0.5)
            , fillColor: qq.maps.Color.fromHex("#D45370", 0.5)
        });
    }
    //    $.getJSON(locUrl, function (LocData) {
    //        for (var stoLoc in LocData) {
    //            if (LocData.hasOwnProperty(stoLoc)) {
    //                var path1 = [];
    //                for (var i = 0; i < LocData[stoLoc].length; i++) {
    //                    var _path_lalg = LocData[stoLoc][i].split(",");
    //                    var _path_la = _path_lalg[0];
    //                    var _path_lg = _path_lalg[1];
    //                    var _path_map = new qq.maps.LatLng(_path_la, _path_lg);
    //                    path1.push(_path_map);
    //                }
    //                var polygon = new qq.maps.Polygon({
    //                    map: myMap
    //                    , path: path1
    //                    , strokeColor: new qq.maps.Color("##D45370", 0.5)
    //                    , fillColor: qq.maps.Color.fromHex("#D45370", 0.5)
    //                });
    //            }
    //        }
    //    });
}