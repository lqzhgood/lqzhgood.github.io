function $(element){
	// 获取 DOM 对象的短写，如果你在用 jQuery 也可以采用类似的方法
	return document.getElementById(element);
};

window.addEventListener('load', function(){
	// 在窗体载入完毕后再绑定
	var CM = new CommentManager($('my-comment-stage'));
	CM.init();
	
	// 先启用弹幕播放（之后可以停止）
	CM.start();
	
	// 绑定按钮们
	$('btnLoadTimeline').addEventListener('click', function(e){
		e.preventDefault(); // 抑制默认操作
		var danmakuTimeline = [
			{
				"mode":1,
				"text":"Hello World",
				"stime":0,
				"size":25,
				"color":0xffffff
			}
		];
		CM.load(danmakuTimeline);
	});
	
	$('btnInsertTimeline').addEventListener('click', function(e){
		e.preventDefault(); // 抑制默认操作
//		var danmaku = {
//			"mode":2,
//			"text":"Hello CommentCoreLibrary",
//			"stime":1000,
//			"size":30,
//			"color":0xff0000,
//            "y":0.2,
//            "absolute":false,
//            "duration":1000
//		};
       	var danmaku = {
			"mode":7,
			"text":"Hello CommentCoreLibrary",
			"stime":1000,
			"size":30,
            "opacity":1,
			"color":0xff0000,
            "duration":4000,
            "x":0,
            "y":50,
            "rotateZ":0,
            "rotateY":0,
            "movable":true,
            "toX":100,
            "toY":100,
            "moveDuration":3000
		};
		CM.send(danmaku);
	});
	
	var startTime = 0, iVal = -1;
	$('btnTimer').addEventListener('click', function(e){
		e.preventDefault(); // 抑制默认操作
		startTime = Date.now(); // 设定起始时间
		if(iVal >= 0){
			clearInterval(iVal); // 如果之前就有定时器，把它停掉
		}
		//建立新的定时器
		iVal = setInterval(function(){
			var playTime = Date.now() - startTime; // 用起始时间和现在时间的差模拟播放
			CM.time(playTime); // 通报播放时间
			$('txPlayPos').textContent = playTime; // 显示播放时间
		}, 100); // 模拟播放器每 100ms 通报播放时间
	});
	
	// 开放 CM 对象到全局这样就可以在 console 终端里操控
	window.CM = CM;
    var test = {
        
    }
});



function getCmtDataList() {
    var cmtArr = [];

    // 可以使用jsonp获取服务器的字幕数据
    /*$.ajax({
        type : 'GET',
        url : 'http://192.168.9.67/test.php',
        dataType : 'jsonp',
        data : {sid : 100},
        success : function(data) {
            cmtArr = data.dataList;

            if (cmtArr && cmtArr.length > 0) {
                sendMsg(cmtArr);
            }
        }
    });*/

    // 测试数据
    cmtArr = [
        {"text":"大家期待什么新品啊", "bgColor":"#424448", "icon":"http://face.weiphone.net/data/avatar/000/15/31/95_avatar_big.jpg"},
        {"text":"会有什么惊喜吗？", "bgColor":"#424448", "icon":"http://face.weiphone.net/data/avatar/000/15/31/95_avatar_big.jpg"},
        {"text":"等待中。。", "bgColor":"#23b28b", "icon":"http://face.weiphone.net/data/avatar/000/15/31/95_avatar_big.jpg"},
        {"text":"会有什么新产品呢？", "bgColor":"#424448", "icon":"http://face.weiphone.net/data/avatar/000/15/31/95_avatar_big.jpg"},
        {"text":"定时执行", "bgColor":"#23b28b", "icon":"http://face.weiphone.net/data/avatar/000/15/31/95_avatar_big.jpg"},
        {"text":"1123333446红咖喱的非农房价", "bgColor":"#ec4262", "icon":"http://face.weiphone.net/data/avatar/000/15/31/95_avatar_big.jpg"},
        {"text":"测试接口发评论00", "bgColor":"#ec4262", "icon":"http://face.weiphone.net/data/avatar/000/15/31/95_avatar_big.jpg"},
        {"text":"测试接口发评论00", "bgColor":"#3dbbc0", "icon":"http://face.weiphone.net/data/avatar/000/15/31/95_avatar_big.jpg"},
        {"text":"啊啊啊啊啊啊啊哦哦哦诶IEIE恩家报表出具", "bgColor":"#ec4262", "icon":"http://face.weiphone.net/data/avatar/000/15/31/95_avatar_big.jpg"},
        {"text":"的方式的方法反反复复反复反复", "bgColor":"#23b28b", "icon":"http://face.weiphone.net/data/avatar/000/15/31/95_avatar_big.jpg"}
    ]

    sendMsg(cmtArr);
}


function sendMsg(cmtArr) {

    for (var i=0; i<cmtArr.length; i++) {
        var cmtItem = cmtArr[i],
            iconStr = '';

        if (cmtItem.icon && cmtItem.icon.length > 0) {
            iconStr = '<span class="icon"><img src="'+ cmtItem.icon +'"></span>';
        }

        // 字幕的节点内容
        cmtItem.text = iconStr + cmtItem.text;
        cmtItem.mode = 1;
        cmtItem.dur = Math.floor(Math.random()*4000 + 4000);

        CM.send(cmtItem);
    }
}

function cmtController() {
    getCmtDataList();

    setTimeout(function(){
        cmtController();
    }, 5000);
}