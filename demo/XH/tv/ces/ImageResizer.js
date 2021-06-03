(function ($) {
    var props = ['Width', 'Height']
        , prop;
    while (prop = props.pop()) {
        (function (natural, prop) {
            $.fn[natural] = (natural in new Image()) ? function () {
                return this[0][natural];
            } : function () {
                var node = this[0]
                    , img, value;
                if (node.tagName.toLowerCase() === 'img') {
                    img = new Image();
                    img.src = node.src, value = img[prop];
                }
                return value;
            };
        }('natural' + prop, prop.toLowerCase()));
    }
}(jQuery));
/** 
 * 这是基于html5的前端图片工具，压缩工具。 
 */



function getImgNaturalDimensions(img, callback) {
    var nWidth, nHeight;
    if (img.naturalWidth) { // 现代浏览器
        nWidth = img.naturalWidth
        nHeight = img.naturalHeight
        alert('HTML5方法');
    } else { // IE6/7/8
        alert('低级写法')
        var image = new Image()
        image.src = img.src
         console.log(image.width, image.height);
            $("#test").html( "IOS---" + image.width);
        image.onload = function() {
//            callback(image.width, image.height);
           
        }
    }
    return [nWidth, nHeight]
}



var ImageResizer = function (opts) {
    var settings = {
        resizeMode: "auto" //压缩模式，总共有三种  auto,width,height auto表示自动根据最大的宽度及高度等比压缩，width表示只根据宽度来判断是否需要等比例压缩，height类似。  
            
        , dataSource: "" //数据源。数据源是指需要压缩的数据源，有三种类型，image图片元素，base64字符串，canvas对象，还有选择文件时候的file对象。。。  
            
        , dataSourceType: "image" //image  base64 canvas  
            
        , maxWidth: 150 //允许的最大宽度  
            
        , maxHeight: 200 //允许的最大高度。  
            
        , onTmpImgGenerate: function (img) {} //当中间图片生成时候的执行方法。。这个时候请不要乱修改这图片，否则会打乱压缩后的结果。  
            
        , success: function (resizeImgBase64, canvas) {} //压缩成功后图片的base64字符串数据。  
            
        , debug: false //是否开启调试模式。  
    };
    var appData = {};
    $.extend(settings, opts);
    var _debug = function (str, styles) {
        if (settings.debug == true) {
            if (styles) {
                console.log(str, styles);
            }
            else {
                console.log(str);
            }
        }
    };
    var innerTools = {
        getBase4FromImgFile: function (file, callBack) {
                var reader = new FileReader();
                reader.onload = function (e) {
                    var base64Img = e.target.result;
                    //var $img = $('<img>').attr("src", e.target.result)  
                    //$('#preview').empty().append($img)  
                    if (callBack) {
                        callBack(base64Img);
                    }
                };
                reader.readAsDataURL(file);
            }
            //--处理数据源。。。。将所有数据源都处理成为图片图片对象，方便处理。  
            
        , getImgFromDataSource: function (datasource, dataSourceType, callback) {
                var _me = this;
                var img1 = new Image();
                if (dataSourceType == "img" || dataSourceType == "image") {
                    img1.src = $(datasource).attr("src");
                    if (callback) {
                        callback(img1);
                    }
                }
                else if (dataSourceType == "base64") {
                    img1.src = datasource;
                    if (callback) {
                        callback(img1);
                    }
                }
                else if (dataSourceType == "canvas") {
                    img1.src = datasource.toDataURL("image/jpeg");
                    if (callback) {
                        callback(img1);
                    }
                }
                else if (dataSourceType == "file") {
                    _me.getBase4FromImgFile(function (base64str) {
                        img1.src = base64str;
                        if (callback) {
                            callback(img1);
                        }
                    });
                }
            }
            //计算图片的需要压缩的尺寸。当然，压缩模式，压缩限制直接从setting里面取出来。  
            
        , getResizeSizeFromImg: function (img) {
                var _img_info = {
                    w: $(img)[0].naturalWidth
                    , h: $(img)[0].naturalHeight
                };
                console.log('$(img)[0]:', $(img)[0].naturalWidth);
//                $("#test").html( "IOS" + getImgNaturalDimensions(img));
                 getImgNaturalDimensions(img);
     
                console.log("真实尺寸：");
                console.log(_img_info);
                var _resize_info = {
                    w: 0
                    , h: 0
                };
                if (_img_info.w <= settings.maxWidth && _img_info.h <= settings.maxHeight) {
                    return _img_info;
                }
                var _percent_scale = parseFloat(_img_info.w / _img_info.h);
                if (settings.resizeMode == "auto") {                    
                    var _size1 = {
                        w: 0
                        , h: 0
                    };
                    var _size_by_mw = {
                        w: settings.maxWidth
                        , h: parseInt(settings.maxWidth / _percent_scale, 10)
                    };
                    var _size_by_mh = {
                        w: parseInt(settings.maxHeight * _percent_scale, 10)
                        , h: settings.maxHeight
                    };
                    if (_size_by_mw.h <= settings.maxHeight) {
                        return _size_by_mw;
                    }
                    if (_size_by_mh.w <= settings.maxWidth) {
                        return _size_by_mh;
                    }
                    return {
                        w: settings.maxWidth
                        , h: settings.maxHeight
                    };
                }
                if (settings.resizeMode == "width") {
                    if (_img_info.w <= settings.maxWidth) {
                        return _img_info;
                    }
                    var _size_by_mw = {
                        w: settings.maxWidth
                        , h: parseInt(settings.maxWidth / _percent_scale, 10)
                    };
                    return _size_by_mw;
                }
                if (settings.resizeMode == "height") {
                    if (_img_info.h <= settings.maxHeight) {
                        return _img_info;
                    }
                    var _size_by_mh = {
                        w: parseInt(settings.maxHeight * _percent_scale, 10)
                        , h: settings.maxHeight
                    };
                    return _size_by_mh;
                }
            }
            //--将相关图片对象画到canvas里面去。  
            
        , drawToCanvas: function (img, theW, theH, realW, realH, callback) {
            var canvas = document.createElement("canvas");
            canvas.width = theW;
            canvas.height = theH;
            var ctx = canvas.getContext('2d');
            ctx.drawImage(img, 0, //sourceX,  
                0, //sourceY,  
                realW, //sourceWidth,  
                realH, //sourceHeight,  
                0, //destX,  
                0, //destY,  
                theW, //destWidth,  
                theH //destHeight  
            );
            //--获取base64字符串及canvas对象传给success函数。  
            var base64str = canvas.toDataURL("image/png");
            if (callback) {
                callback(base64str, canvas);
            }
        }
    };
    //--开始处理。  
    (function () {
        innerTools.getImgFromDataSource(settings.dataSource, settings.dataSourceType, function (_tmp_img) {
            setTimeout(function(){
                var __tmpImg = _tmp_img;
                settings.onTmpImgGenerate(_tmp_img);
                //--计算尺寸。  
                var _limitSizeInfo = innerTools.getResizeSizeFromImg(__tmpImg);
                console.log('_limitSizeInfo:', _limitSizeInfo);
                var _img_info = {
                    w: $(__tmpImg)[0].naturalWidth
                    , h: $(__tmpImg)[0].naturalHeight
                };
                innerTools.drawToCanvas(__tmpImg, _limitSizeInfo.w, _limitSizeInfo.h, _img_info.w, _img_info.h, function (base64str, canvas) {
                    settings.success(base64str, canvas);
                });
            },1000)
        });
    })();
    var returnObject = {};
    return returnObject;
};