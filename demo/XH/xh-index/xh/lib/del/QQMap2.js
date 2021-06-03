/*SOSO Map API beta 1.0.131204.1 @Tencent Research*/
__MapNSImpl__ = {}; __MapNS__ = {}; __MapNSImpl__.Config = { TileVersion: "20130701", DEFAULT_LNG: 116.39712896958922, DEFAULT_LAT: 39.9165275426627, DEFAULT_ZOOMLEVEL: 9, DEFAULT_TILE_SIZE: 256, EARTH_RADIUS: 6378137, BLANK_IMG: "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==", zoomMin: 1, zoomMax: 18, QueryType: { POI: "poi", SYN: "syn", RN: "rn", BUSLS: "busls", BUS: "bus", DT: "dt", DTS: "dts", GEOC: "geoc", RGEOC: "rgeoc", GC: "gc", NAV: "nav", WALK: "walk", POS: "pos", SG: "sg" }, SERVICE_URL: "http://apic.map.qq.com/" };
(function () {
    function c(e) { __MapNSImpl__.Config.domain = e[0] + "/"; __MapNSImpl__.Config.cb = e[1]; __MapNSImpl__.Config.version = e[2] } var s = null; try { throw Error("Get Script Url"); } catch (q) {
        s = q.fileName || q.sourceURL; if (!s && q.stack) s = !window.opera ? (q.stack.match(/at\s+(.*):\d+/) || [null, null])[1] : (q.stack.match(/@(.*):\d+/) || [null, null])[1]; if (!s) {
            var j = document.getElementsByTagName("script"), u = [], i, k; i = 0; for (k = j.length; i < k; i++) { var n = j[i].src; if (n.indexOf("Config.js") != -1 || n.indexOf("main.js") != -1) u.push(n) } if (u.length ===
            1) s = u[0]; else { i = 0; for (k = u.length; i < k; i++) if (u[i].indexOf("map.soso.com") != -1 || u[i].indexOf("map.qq.com") != -1) { s = u[i]; break } }
        }
    } j = ""; if (s) { j = s.substring(0, s.lastIndexOf("/")); if (j.indexOf("common") !== -1) j = s.substring(0, j.lastIndexOf("/")); if (/MSIE (\d+(\.\d+)?)/.test(navigator.userAgent)) if (parseFloat(RegExp.$1) === 6 && j.indexOf("localhost") > 0) j = "http://" + document.domain + "/" + j } (function (e) {
        var b = document, d = b.createElement("style"); d.setAttribute("type", "text/css"); if (d.styleSheet) d.styleSheet.cssText =
        e; else { e = b.createTextNode(e); d.appendChild(e) } e = b.getElementsByTagName("head"); e.length ? e[0].appendChild(d) : b.documentElement.appendChild(d)
    })("@media print{.smnoprint{display:none}}"); __MapNSImpl__.Config.domain = "http://open.map.qq.com/apifiles/v1.0/"; __MapNSImpl__.Config.version = "1"; __MapNSImpl__.Config.cb = ""; (s = window.soso && soso.maps.__load) && s(c)
})(); (function () {
    __MapNSImpl__.Interfaces = { registInterface: function (c, s) { for (var q = {}, j = 0, u = s.length; j < u; j++) q[s[j]] = null; __MapNSImpl__.Interfaces[c] = q } }; __MapNSImpl__.Class = function () {
        for (var c = function () { this.initialize && this.initialize.apply(this, arguments) }, s = {}, q, j = 0, u = arguments.length; j < u; ++j) {
            q = arguments[j]; if (typeof q == "function") { if (j == 0 && u > 1) { s = function () { }; s.prototype = q.prototype; s = new s } q = q.prototype } else { q = q; q.initialize && (c = q.initialize, delete q.initialize) } __MapNSImpl__.Synchronize.copy(s,
            q)
        } s.constructor = c; c.prototype = s; return c
    }; __MapNSImpl__.Synchronize = { fill: function (c, s) { if (c) { for (var q in s) if (q !== "prototype" && s.hasOwnProperty(q) && c[q] === undefined) c[q] = s[q]; return c } else return s }, copy: function (c, s) { if (!s || !c) throw Error("You must provide an object to copy from and to"); for (var q in s) c[q] = s[q] } }
})(); (function (c) {
    function s(a, h, m, p) { if (h < m) { var v; v = p(a[m]); for (var x = h - 1, B = h; B < m; B++) if (p(a[B]) <= v) { x++; var D = a[B]; a[B] = a[x]; a[x] = D } D = a[x + 1]; a[x + 1] = a[m]; a[m] = D; v = x + 1; s(a, h, v - 1, p); s(a, v + 1, m, p) } } function q(a) { a = a || window.event; c.Event.stopEvent(a); return false } !window.console && (window.console = {}, console.log = function () { }); var j = {}; __MapNSImpl__.Util = j; j.Browser = function () {
        var a = navigator.userAgent, h = 0, m = 0, p = 0, v = 0, x = 0, B = 0, D = 0, C = 0, r = 0; if (/opera\/(\d+\.\d)/i.test(a)) m = +RegExp.$1; else if (/msie (\d+\.\d)/i.test(a)) h =
        document.documentMode || +RegExp.$1; else if (/firefox\/(\d+\.\d)/i.test(a)) v = +RegExp.$1; else if (/netscape(\s|\/)(\d+(\.\d+)?)/i.test(a)) B = +RegExp.$1; else if (/(\d+\.\d)?(?:\.\d)?\s+safari\/?(\d+\.\d+)?/i.test(a) && !/chrome/i.test(a) && !/android/i.test(a)) p = +(RegExp.$1 || RegExp.$2); else if (/chrome\/(\d+\.\d)/i.test(a)) x = +RegExp.$1; else if (/android\s(\d+\.\d)/i.test(a)) D = +RegExp.$1; else if (/iPad.*OS\s(\d[_\d]*)/i.test(a)) C = +parseFloat(RegExp.$1.replace(/_/g, ".")); else if (/iphone\sOS\s(\d[_\d]*)/i.test(a)) r =
        +parseFloat(RegExp.$1.replace(/_/g, ".")); else /(BlackBerry).*Version\/([\d.]+)/.test(a) && parseFloat(RegExp.$1); var w = function () { return { ie: h, firefox: v, netscape: B, opera: m, safari: p, chrome: x, android: D, iphone: r, ipad: C, gecko: /gecko/i.test(a) && !/like gecko/i.test(a), webkit: /webkit/i.test(a), isSupportTouch: "ontouchstart" in window || C || r || D } }; try { return w } finally { w = null }
    }(); j.OS = function () {
        var a = navigator.userAgent; a = {
            windows: /\(Windows;/i.test(a), mac: /\(Mac;/i.test(a), linux: /; Linux/i.test(a), iPhone: /\(iPhone;/i.test(a),
            iPod: /\(iPod;/i.test(a), iPad: /\(iPad;/i.test(a), android: /android/i.test(a)
        }; a.iOS = a.iPhone || a.iPod || a.iPad; a.isMobile = a.iOS || a.android; return a
    }; j.sortByGetter = function (a, h) { return s(a, 0, a.length - 1, h) }; var u = null; j.removeNode = function (a) { if (j.Browser().ie) { c.Event.clearListeners(a); u || (u = document.createElement("div")); u.appendChild(a); u.innerHTML = "" } else a && a.parentNode && a.parentNode.removeChild(a) }; var i = [], k = []; j.fetchImage = function (a, h) {
        var m, p, v = false; m = 0; for (p = i.length; m < p; ++m) if (i[m].url ===
        a) { h(i[m].width, i[m].height, a, i[m].image); return i[m].image } m = 0; for (p = k.length; m < p; m++) if (k[m].url === a) { k[m].callbacks.push(h); v = true } if (!v) {
            k.push({ url: a, callbacks: [h] }); var x = new Image, B = function (D, C) { for (var r = 0; r < k.length; r++) if (k[r].url === C) { for (var w = k[r].callbacks, y = 0; y < w.length; y++) w[y](D.width, D.height, C, D); k.splice(r, 1); break } }; m = c.Event; m.addDomListenerOnce(x, "load", function () { i.push({ url: a, width: x.width, height: x.height, image: x }); B(x, a); x = null }); m.addDomListenerOnce(x, "error", function () {
                i.push({
                    url: a,
                    width: 0, height: 0, image: x
                }); h(0, 0, a); B(x, a); x = null
            }); a.indexOf("?"); x.src = a; return x
        }
    }; j.setSize = function (a, h) { if (h.getWidth) { a.style.width = j.formatInput(h.getWidth()); a.style.height = j.formatInput(h.getHeight()) } else { a.style.width = j.formatInput(h[0]); a.style.height = j.formatInput(h[1]) } }; j.setPosition = function (a, h) { if (h.getX) { a.style.left = j.formatInput(h.getX()); a.style.top = j.formatInput(h.getY()) } else { a.style.left = j.formatInput(h[0]); a.style.top = j.formatInput(h[1]) } }; j.setDomCoord = function (a, h) {
        var m =
        a.style; (h[0] || h[0] === 0) && (m.left = h[0] + "px"); (h[1] || h[1] === 0) && (m.top = h[1] + "px"); (h[2] || h[2] === 0) && (m.width = h[2] + "px"); (h[3] || h[3] === 0) && (m.height = h[3] + "px")
    }; j.getChildNodesByTag = function (a, h) { var m = []; for (a = a.firstChild; a;) { a.tagName.toLowerCase() === h && m.push(a); a = a.nextSibling } return m }; j.getCssSpriteImage = function (a, h, m, p, v) {
        var x = function (B, D, C, r) {
            B.width = C; B.height = r; if (j.Browser().ie && j.Browser().ie <= 6 && D.toUpperCase().indexOf(".PNG") > 0) B.style.filter = 'progid:DXImageTransform.Microsoft.AlphaImageLoader(enabled=true, sizingMethod=scale, src="' +
            D + '"'; else B.src = D; B.style.display = ""
        }; if (!m) { m = document.createElement("img"); if (!p) { m.style.cssText = "-moz-user-select:none;-khtml-user-select:none;"; m.unselectable = "on"; p = c.Event; p.addDomListener(m, "selectstart", q); p.addDomListener(m, "dragstart", q) } m.style.position = "absolute"; m.src = __MapNSImpl__.Config.domain + "imgs/transparent.gif" } (function (B, D, C) { B.className = "csssprite"; B.style.display = "none"; if (C) { var r = C.getWidth(); C = C.getHeight(); x(B, D, r, C) } else j.fetchImage(D, function (w, y) { x(B, D, w, y) }) })(m,
        a, v); m.style.left = -h[0] + "px"; m.style.top = -h[1] + "px"; return m
    }; j.setCssSprite = function (a, h, m, p, v, x, B) {
        if (j.Browser().ie && j.Browser().ie <= 6 || B == true) { if (a.style.position != "relative" && a.style.position != "absolute") a.style.position = "relative"; a.style.background = ""; a.style.overflow = "hidden"; x = a.childNodes; B = null; for (var D = 0, C = x.length; D < C; ++D) if (x[D].className == "csssprite") { B = x[D]; break } B = j.getCssSpriteImage(h, m, B, p, v); B.parentNode || a.appendChild(B) } else {
            if (v) {
                p = v.getWidth(); v = v.getHeight(); a.style.width =
                p + "px"; a.style.height = v + "px"
            } if (x) { a.style.position = "absolute"; a.style.left = x.getWidth() + "px"; a.style.top = x.getHeight() + "px" } h && (a.style.backgroundImage = "url(" + h + ")"); a.style.backgroundPosition = -m[0] + "px " + -m[1] + "px"
        }
    }; j.getMouseXY = function (a) {
        var h = []; if (j.Browser().ie) h = [a.clientX + (document.documentElement.scrollLeft || document.body.scrollLeft), a.clientY + (document.documentElement.scrollTop || document.body.scrollTop)]; else if (a.touches) {
            h = null; if (a.targetTouches.length > 0) h = a.targetTouches[0]; else if (a.changedTouches.length >
            0) h = a.changedTouches[0]; h = [h.pageX, h.pageY]
        } else h = [a.pageX, a.pageY]; return h
    }; j.getDomCoordinate = function (a) {
        var h = j.Browser(); if (a.parentNode === null || a.style.display == "none") return [0, 0, 0, 0]; var m = null, p = 0, v = 0, x = a.offsetWidth, B = a.offsetHeight; if (a.getBoundingClientRect && !h.isSupportTouch) { h = a.getBoundingClientRect(); a = Math.max(document.documentElement.scrollTop, document.body.scrollTop); p = h.left + Math.max(document.documentElement.scrollLeft, document.body.scrollLeft); v = h.top + a } else {
            if (document.getBoxObjectFor) {
                h =
                document.getBoxObjectFor(a); p = a.style.borderLeftWidth ? parseInt(a.style.borderLeftWidth) : 0; m = a.style.borderTopWidth ? parseInt(a.style.borderTopWidth) : 0; p = h.x - p; v = h.y - m
            } else { p = a.offsetLeft; v = a.offsetTop; m = a.offsetParent; if (m != a) for (; m;) { p += m.offsetLeft; v += m.offsetTop; m = m.offsetParent } if (h.opera || h.safari && a.style.position == "absolute") { p -= document.body.offsetLeft; v -= document.body.offsetTop } } for (m = a.parentNode ? a.parentNode : null; m && m.tagName != "BODY" && m.tagName != "HTML";) {
                p -= m.scrollLeft; v -= m.scrollTop; m =
                m.parentNode ? m.parentNode : null
            }
        } return [p, v, x, B]
    }; j.getStyle = function (a, h, m) { if (!a) return null; if (document.defaultView && m) { h = h.replace(/[A-Z]/g, function (v) { return "-" + v.toLowerCase() }); try { return document.defaultView.getComputedStyle(a, null).getPropertyValue(h) } catch (p) { return null } } h = h.replace(/-(\D)/g, function (v, x) { return x.toUpperCase() }); if (h == "float") h = j.Browser().ie ? "styleFloat" : "cssFloat"; if (a.currentStyle && m) return a.currentStyle[h]; return a.style ? a.style[h] : undefined }; j.getSize = function (a) {
        var h,
        m; h = j.getStyle(a, "width"); m = j.getStyle(a, "height"); if (h.indexOf("px") === -1) h = 0; if (m.indexOf("px") === -1) m = 0; return { width: parseInt(h) || a.offsetWidth || a.clientWidth, height: parseInt(m) || a.offsetHeight || a.clientHeight }
    }; j.toCamelCase = function () { var a = {}; return function (h) { if (a[h]) return a[h]; else { h = h.replace(/([A-Z]+)/g, function (m, p) { return p.substr(0, 1).toUpperCase() + p.toLowerCase().substr(1, p.length) }).replace(/[\-_\s](.)/g, function (m, p) { return p.toUpperCase() }); return a[h] = h } } }(); j.setStyle = function (a,
    h, m) { var p; a = typeof a === "string" ? document.getElementById(a) : a; if (typeof h === "string") if (m) a.style.cssText = h; else { m = h.split(";"); for (p = 0; p < m.length; p++) { var v = j.toCamelCase(m[p]); a.style[v] = h[x] } } else { if (m) a.style.cssText = ""; for (var x in h) if (h.hasOwnProperty(x)) if (m) p += x + ":" + h[x] + ";"; else { v = j.toCamelCase(x); a.style[v] = h[x] } if (m) a.style.cssText = p } return a }; j.getMouseCoordinate = function (a) {
        var h = []; if (j.Browser().ie) h = [a.clientX + (document.documentElement.scrollLeft || document.body.scrollLeft), a.clientY +
        (document.documentElement.scrollTop || document.body.scrollTop)]; else if (a.touches) { h = null; if (a.targetTouches.length > 0) h = a.targetTouches[0]; else if (a.changedTouches.length > 0) h = a.changedTouches[0]; h = [h.pageX, h.pageY] } else h = [a.pageX, a.pageY]; return h
    }; j.topLeft = function (a) { a = a instanceof String ? document.getElementById(a) : a; if (!a) throw "You have not provided a valid element to topLeft()"; return { x: a.style.left ? parseInt(a.style.left, 10) : 0, y: a.style.top ? parseInt(a.style.top, 10) : 0 } }; j.centerChangedFixDisplayBBox =
    function (a, h) { if (h !== undefined && h !== null) { if (a.lng < h[0]) a.lng = h[0]; else if (a.lng > h[2]) a.lng = h[2]; if (a.lat < h[1]) a.lat = h[1]; else if (a.lat > h[3]) a.lat = h[3] } }; j.isCenterInDisplayBBox = function (a, h, m) { var p = false; if (m !== undefined && m !== null) { if (a > m[0] && h > m[1] && a < m[2] && h < m[3]) p = true } else p = true; return p }; j.setPositionByAlign = function (a, h, m, p) {
        if (a) {
            var v = a.style, x = m.getWidth(); m = m.getHeight(); var B = h % 3; h = Math.floor(h / 3); var D = Math.floor(a.offsetWidth / 2); a = Math.floor(a.offsetHeight / 2); if (B === 1) {
                v.left = p ? Math.floor(p.offsetWidth /
                2) + "px" : "50%"; v.marginLeft = x - D + "px"
            } if (h === 1) { v.top = p ? Math.floor(p.offsetHeight / 2) + "px" : "50%"; v.marginTop = m - a + "px" } if (B === 2) { v.right = x + "px"; v.left = "" } if (B === 0) { v.left = x + "px"; v.right = "" } if (h === 0) { v.top = m + "px"; v.bottom = "" } if (h === 2) { v.bottom = m + "px"; v.top = "" }
        }
    }; var n = { TOP_LEFT: 0, TOP: 1, TOP_RIGHT: 2, LEFT: 3, CENTER: 4, RIGHT: 5, BOTTOM_LEFT: 6, BOTTOM: 7, BOTTOM_RIGHT: 8 }; n.isTop = function (a) { return a < 3 }; n.isMiddle = function (a) { return a > 2 && a < 6 }; n.isBottom = function (a) { return a > 5 }; n.isLeft = function (a) { return a % 3 == 0 }; n.isCenter =
    function (a) { return a % 3 == 1 }; n.isRight = function (a) { return a % 3 == 2 }; j.forEach = function (a, h, m) { if (a) if (a.length) { m = 0; for (var p = a.length; m < p; ++m) h(m, a[m]) } else for (p in a) if (m || !a.hasOwnProperty || a.hasOwnProperty(p)) h(p, a[p]) }; j.callback = function (a, h, m) { m = m || []; return function () { for (var p = m.concat(), v = 0; v < arguments.length; v++) p.push(arguments[v]); h && h.apply(a, p) } }; j.copyObject = function (a, h, m) { j.forEach(a, function (p) { h[p] = a[p] }, m) }; var e = {}; j.capitalInitial = function (a) {
        return e[a] || (e[a] = a.substr(0, 1).toUpperCase() +
        a.substr(1))
    }; var b, d = (new Date).getTime(); __MapNSImpl__.debug = {
        write: function () {
            for (var a = [], h = 0, m = arguments.length; h < m; h++) if (arguments[h] && arguments[h].length) a = a.concat(arguments[h]); else a.push(arguments[h]); a.join(", "); h = document.createElement("div"); h.style.cssText = "border-bottom:1px dashed #e0ecff;line-height:12px;padding:2px 0;height:12px;"; h.innerHTML = '<xmp style="margin:0 80px 0 0;float:left;">' + a + "</xmp>"; a = document.createElement("div"); a.style.cssText = "float:right;"; b = (new Date).getTime();
            a.innerHTML = b - d + " ms"; d = b; h.appendChild(a); var p = document.getElementById("__debug"), v = document.getElementById("__debug_content"); if (!p) {
                p = document.createElement("div"); p.id = "__debug"; p.style.cssText = "position:fixed;*position:absolute;bottom:0;left:2%;width:96%;height:100px;overflow:hidden;z-index:100000;background:#99c661;font-size:11px;"; document.body.appendChild(p); a = document.createElement("div"); a.style.cssText = "height:16px;line-height:16px;background:#88b752;position:relative;"; a.innerHTML = '<span style="margin-left:5px;color:white;font-weight:bold;">Logs</span>';
                m = document.createElement("span"); m.style.cssText = "color:white;cursor:pointer;position:absolute;right:45px;text-decoration:underline;"; m.innerHTML = "Clear"; var x = c.Event; x.addDomListener(m, "click", function () { v.innerHTML = "" }); var B = document.createElement("span"); B.style.cssText = "color:white;cursor:pointer;position:absolute;right:45px;text-decoration:underline;"; B.style.right = "10px"; B.innerHTML = "Hide"; x.addDomListener(B, "click", function () {
                    if (B.innerHTML == "Hide") { B.innerHTML = "Show"; p.style.height = "16px" } else {
                        B.innerHTML =
                        "Hide"; p.style.height = "100px"
                    }
                }); a.appendChild(m); a.appendChild(B); v = document.createElement("div"); v.id = "__debug_content"; v.style.cssText = "height:80px;overflow:auto;background:#99c661;margin:2px 5px;color:#333333;"; p.appendChild(a); p.appendChild(v)
            } p.style.display = ""; v.appendChild(h); v.scrollTop = v.scrollHeight
        }, clear: function () { document.getElementById("__debug_content").innerHTML = "" }
    }; j.lngFrom4326ToProjection = function (a) { return a * 111319.49077777778 }; j.latFrom4326ToProjection = function (a) {
        a = Math.log(Math.tan((90 +
        a) * 0.008726646259971648)) / 0.017453292519943295; a *= 111319.49077777778; return a
    }; j.lngFromProjectionTo4326 = function (a) { return a / 111319.49077777778 }; j.latFromProjectionTo4326 = function (a) { a = a / 111319.49077777778; return a = Math.atan(Math.exp(a * 0.017453292519943295)) * 114.59155902616465 - 90 }; j.wrapXY = function (a, h) { var m; if (h < 0) { m = h % a; h = m !== 0 ? a + m : 0 } else h = h >= a ? h % a : h; return h }; j.getOptimalZoomLevel = function (a, h, m, p, v, x) {
        var B = a.getSouthWest(); a = a.getNorthEast(); var D; for (D = __MapNSImpl__.Config.zoomMax; D >= 0; D--) {
            var C =
            p.fromLatLngToPoint(a, D), r = p.fromLatLngToPoint(B, D), w = Math.abs(r.y - C.y); if (Math.abs(C.x - r.x) <= h + 1 && w <= m + 1) break
        } D = Math.max(D, v); return D = Math.min(D, x)
    }; j.getSeedTileIndex = function (a, h) { var m; m = a.getLng(); var p = a.getLat(), v = Math.pow(2, h + 7), x = v * 2; p = Math.min(Math.max(Math.sin(p * (Math.PI / 180)), -0.9999), 0.9999); m = [v + m * (x / 360), v - 0.5 * Math.log((1 + p) / (1 - p)) * (x / (2 * Math.PI))]; return [m[0], m[1]] }; var f = [], l = []; j.startDrag = function (a, h, m, p) {
        for (var v = j.getMouseCoordinate(p), x = f.length; x--;) if (f[x][0] == h && f[x][1] ==
        m) return; f.push([h, m, v, a]); p.mousePageX = v[0]; p.mousePageY = v[1]; m.dragstart && m.dragstart(p, a)
    }; j.stopDrag = function (a, h, m) { for (var p = 0, v; v = f[p]; p++) if (v[0] === a && v[3] === h) { m && v[1].dragend(m); f.splice(p, 1); p-- } }; j.enableDrag = function (a, h, m, p) {
        var v = false, x = c.Event, B = function (y) {
            v = true; if (y.button !== 2) if (y.touches && y.touches.length > 1) { y = 0; for (var A; A = f[y]; y++) if (A[0] == h) { f.splice(y, 1); y-- } } else {
                A = j.getMouseCoordinate(y); x.preventDefault(y); f.push([h, m, A, a]); y.mousePageX = A[0]; y.mousePageY = A[1]; m.dragstart &&
                m.dragstart(y)
            }
        }; a.length || (a = [a]); for (var D = 0; D < a.length; D++) if (j.Browser().isSupportTouch) x.addDomListener(a[D], "touchstart", B); else { x.addDomListener(a[D], "mousedown", B); x.addDomListener(a[D], "selectstart", function (y) { x.stopEvent(y) }) } B = false; D = 0; for (var C = l.length; D < C; D++) if (l[D] == h) B = true; if (!B) {
            l.push(h); var r = null, w = function (y, A) {
                y = y || window.event; var E = j.getMouseCoordinate(y); y.mousePageX = E[0]; y.mousePageY = E[1]; for (var g = 0, o; o = f[g]; g++) if (o[0] == h) {
                    var t = [E[0] - o[2][0], E[1] - o[2][1]]; if (A) {
                        o[1].dragging &&
                        o[1].dragging(y, t, true); o[1].dragend && o[1].dragend(y, t); f.splice(g, 1); g--
                    } else o[1].dragging && o[1].dragging(y, t)
                } r = null
            }; p = p || 0; B = function (y) { if (!(j.Browser().isSupportTouch && !v)) if (!(r && p != 0)) { w(y); p != 0 && (r = window.setTimeout(function () { r = null }, p)) } }; D = function (y) { v = false; w(y, true) }; if (j.Browser().isSupportTouch) { x.addDomListener(h, "touchmove", B); x.addDomListener(h, "touchend", D) } else { x.addDomListener(h, "mousemove", B); x.addDomListener(h, "mouseup", D) }
        }
    }; j.RPCRequest = function (a, h) {
        var m = document.createElement("script");
        m.type = "text/javascript"; m.charset = "utf-8"; if (j.Browser().ie && j.Browser().ie < 9) m.onreadystatechange = function () { if (m.readyState === "loaded" || m.readyState === "complete") { h && h(); m.onreadystatechange = null; m.removeAttribute("src"); m.parentNode.removeChild(m) } }; else m.onload = function () { h && h(); m.onload = null; m.removeAttribute("src"); m.parentNode.removeChild(m) }; var p = document.getElementsByTagName("head")[0]; if (!p) p = document.body; m.src = a; p.appendChild(m)
    }; j.adapter = function (a, h) {
        return function () {
            var m = Array.prototype.slice.call(arguments,
            0); m.push(this); h.apply(a, m)
        }
    }; j.setCursorStyle = function (a, h, m) {
        try {
            var p = j.Browser(); if (h == "grab") { var v = __MapNSImpl__.Config.domain + "imgs/grab.cur"; h = p.firefox ? "-moz-grab" : "url(" + v + ")" + (p.chrome || p.safari ? " 10 10" : "") + ", " + m } if (h == "grabbing") { var x = __MapNSImpl__.Config.domain + "imgs/grabbing.cur"; h = p.firefox ? "-moz-grabbing" : "url(" + x + ")" + (p.chrome || p.safari ? " 10 10" : "") + ", " + m } m = m || "auto"; var B = h.toLowerCase(); if (B.indexOf(".cur") > 0) if (B.indexOf("url") < 0) h = "url(" + h + ")," + m; if (B == "hand" && !p.ie) h = "pointer";
            a.style.cursor = h; return true
        } catch (D) { return false }
    }; j.setUnSelectable = function (a) { if (j.Browser().ie || window.opera) { var h = c.Event; a.unselectable = "on"; h.addDomListener(a, "selectstart", j.falseFunction); h.addDomListener(a, "dragstart", j.falseFunction) } else { a.style.MozUserSelect = "none"; a.style.WebkitUserSelect = "none" } }; j.falseFunction = function (a) { c.Event.stopEvent(a); return false }; j.setOpacity = function (a, h) {
        if (a) {
            a.style.filter = "progid:DXImageTransform.Microsoft.Alpha(opacity=" + parseInt(h * 100) + ")"; a.style.MozOpacity =
            h; a.style.opacity = h
        }
    }; j.isHtmlControl = function (a) { var h = document.createElement("div"); if (typeof a === "string" || typeof a === "number") return false; try { h.appendChild(a.cloneNode(true)); return a.nodeType == 1 ? true : false } catch (m) { return a == window || a == document } }; j.parseCoords = function (a) {
        a = a.split(","); for (var h = a.length, m = 2; m < h; m++) a[m] = (parseFloat(a[m - 2]) + parseFloat(a[m]) / 1E6).toFixed(6); a[0] = parseFloat(a[0], 10).toFixed(6); a[1] = parseFloat(a[1], 10).toFixed(6); h = []; for (m = 0; m < a.length; m += 2) h.push(new c.LatLng(a[m +
        1], a[m])); return h
    }; j.getNumberInRange = function (a, h, m) { if (h != null) a = Math.max(a, h); if (m != null) a = Math.min(a, m); return a }; j.getLoopNumber = function (a, h, m) { if (a == Number.POSITIVE_INFINITY || a == Number.NEGATIVE_INFINITY) return h; if (a >= h && a <= m) return a; m -= h; return (a % m + m - h) % m + h }; j.radianToDegree = function (a) { return a / (Math.PI / 180) }; j.degreeToRadian = function (a) { return a * (Math.PI / 180) }; j.isEquals = function (a, h) { return Math.abs(a - h) <= 1.0E-9 }; j.domReady = function (a, h) {
        function m() { if (!x) { x = true; a() } } var p = { enableMozDOMReady: true };
        if (h) for (var v in h) p[v] = h[v]; var x = false; if (j.Browser().ie) { (function () { if (!x) { try { document.documentElement.doScroll("left") } catch (B) { setTimeout(arguments.callee, 20); return } m() } })(); window.attachEvent("onload", m) } else {
            if (j.Browser().webkit && j.Browser().webkit < 525) (function () { x || (/loaded|complete/.test(document.readyState) ? m() : setTimeout(arguments.callee, 0)) })(); else if (!j.Browser().firefox || j.Browser().firefox != 2 || p.enableMozDOMReady) document.addEventListener("DOMContentLoaded", function () {
                document.removeEventListener("DOMContentLoaded",
                arguments.callee, false); m()
            }, false); window.addEventListener("load", m, false)
        }
    }; j.containsNode = function (a, h) { return a.contains ? a != h && a.contains(h) : !!(a.compareDocumentPosition(h) & 16) }; j.isInDocument = function (a) { return a && a.parentNode && a.parentNode.nodeType != 11 }; j.pixelDistance = function (a, h) { if (a && h) return Math.round(Math.sqrt(Math.pow(a.getX() - h.getX(), 2) + Math.pow(a.getY() - h.getY(), 2))) }; j.getSupportedProp = function (a) { for (var h = document.documentElement, m = 0; m < a.length; m++) if (typeof h.style[a[m]] == "string") return a[m] };
    j.setZIndex = function (a, h) { a.style.zIndex = h }; j.getCurrentStyle = function (a) { if (a.currentStyle) return a.currentStyle; else if (a.ownerDocument && a.ownerDocument.defaultView) return a.ownerDocument.defaultView.getComputedStyle(a, null) }; j.createDiv = function (a) { var h = document.createElement("div"); h.style.cssText = a; return h }; j.formatInput = function (a) {
        if (typeof a == "number") return a + "px"; else if (typeof a == "string") {
            a = a.replace(RegExp("\\s", "g"), ""); if (/^\d+(px|%)+$/i.exec(a)) return a; if (/^\d+$/.exec(a)) return a +
            "px"; return "0px"
        }
    }; j.thinFunction = function (a, h) { if (typeof h !== "function" || typeof a !== "number" || a < 0) return h; var m = 0, p = null; return function () { clearTimeout(p); var v = this, x = +new Date; if (x - m >= a) { m = x; return h.apply(v, arguments) } else { var B = arguments[0]; if (!(B && (window.Event == B.constructor || window.MouseEvent == B.constructor))) { var D = [].slice.call(arguments, 0); x = a - x + m; p = setTimeout(function () { h.apply(v, D); m = +new Date }, x > 15 ? x : 15) } } } }; c.ALIGN = n; window.log_ = __MapNSImpl__.debug.write
})(__MapNS__); __MapNSImpl__.RC = {}; __MapNSImpl__.RC.NavControl = { zoomIn: "\u653e\u5927", zoomOut: "\u7f29\u5c0f", left: "\u5411\u5de6\u5e73\u79fb", right: "\u5411\u53f3\u5e73\u79fb", up: "\u5411\u4e0a\u5e73\u79fb", down: "\u5411\u4e0b\u5e73\u79fb", ruler: "\u5355\u51fb\u7f29\u653e", slide: "\u62d6\u52a8\u7f29\u653e", zoomLevelTips: { 17: "\u8857", 11: "\u5e02", 8: "\u7701", 4: "\u56fd" } }; __MapNSImpl__.RC.Control = {}; __MapNSImpl__.RC.Control.TencentText = "&copy 2014 Tencent "; __MapNSImpl__.RC.Control.GotoHome = "\u5230\u817e\u8baf\u5730\u56fe\u9996\u9875";
__MapNSImpl__.RC.Control.ScaleText = ["1000\u516c\u91cc", "1000\u516c\u91cc", "1000\u516c\u91cc", "1000\u516c\u91cc", "500\u516c\u91cc", "200\u516c\u91cc", "200\u516c\u91cc", "100\u516c\u91cc", "50\u516c\u91cc", "20\u516c\u91cc", "10\u516c\u91cc", "5\u516c\u91cc", "2\u516c\u91cc", "1\u516c\u91cc", "500\u7c73", "200\u7c73", "200\u7c73", "100\u7c73", "50\u7c73"];
__MapNSImpl__.RC.PolyEditLabel = { start: "\u8d77\u70b9", end: "\u5171", add: "\u5355\u51fb\u9f20\u6807\u6dfb\u52a0\u65b0\u70b9", remove: "\u79fb\u9664\u8be5\u70b9", destroyPolyline: "\u79fb\u9664\u8be5\u6298\u7ebf", destroyPolygon: "\u79fb\u9664\u8be5\u591a\u8fb9\u5f62", drag: "\u62d6\u62fd\u79fb\u52a8\u8be5\u70b9", dragNew: "\u62d6\u62fd\u6dfb\u52a0\u4e00\u4e2a\u65b0\u70b9", drawStart: "\u5355\u51fb\u9009\u62e9\u8d77\u70b9", drawCurrent: "\u5f53\u524d", drawing: "\u5355\u51fb\u5de6\u952e\u7ee7\u7eed\uff0c\u53cc\u51fb\u6216\u53f3\u952e\u7ed3\u675f" };
__MapNSImpl__.RC.Units = { m: "\u7c73", km: "\u516c\u91cc", msec: "\u6beb\u79d2", sec: "\u79d2", min: "\u5206\u949f", hour: "\u5c0f\u65f6" }; __MapNSImpl__.RC.Direction = ["\u4e1c", "\u4e1c\u5317", "\u5317", "\u897f\u5317", "\u897f", "\u897f\u5357", "\u5357", "\u4e1c\u5357"]; __MapNSImpl__.RC.Transfer = ["\u4e58\u5750", "\u7ecf\u8fc7", "\u7ad9", "\u5230\u8fbe", "\u7ec8\u70b9"];
__MapNSImpl__.RC.MapType = { ROADMAP: { name: "\u5730\u56fe", alt: "\u663e\u793a\u8857\u9053\u5730\u56fe" }, SATELLITE: { name: "\u536b\u661f", alt: "\u663e\u793a\u536b\u661f\u5730\u56fe" }, HYBRID: { name: "\u6df7\u5408", alt: "\u663e\u793a\u5e26\u6709\u8857\u9053\u540d\u79f0\u7684\u56fe\u50cf" } };
__MapNSImpl__.RC.TileLayer = { ROADMAP: { name: "\u5730\u56fe", alt: "\u663e\u793a\u8857\u9053\u5730\u56fe" }, SATELLITE: { name: "\u536b\u661f", alt: "\u663e\u793a\u536b\u661f\u5730\u56fe" }, HYBRID: { name: "\u8def\u7f51", alt: "\u663e\u793a\u5e26\u6709\u8857\u9053\u540d\u79f0\u7684\u56fe\u50cf" }, TRAFFIC: { name: "\u8def\u51b5", alt: "\u663e\u793a\u5b9e\u65f6\u8def\u51b5\u7684\u56fe\u50cf" } }; __MapNSImpl__.RC.LatLngOutOfRange = "\u8bf7\u6c42\u7684\u7ecf\u7eac\u5ea6\u4e0d\u5728\u670d\u52a1\u5668\u652f\u6301\u7684\u8303\u56f4\u5185\uff0c\u8bf7\u91cd\u8bd5\uff01"; (function (c) {
    function s(h, m) { var p; if (b.Browser().ie) p = q(h).__events_; else { h.__events_ || (h.__events_ = {}); p = h.__events_ } p[m] || (p[m] = {}); return p[m] } function q(h) { var m; if (h && h.__oid_) m = l.eventObjects[h.__oid_]; if (!m && h) { h.__oid_ = ++f; m = { __events_: {} }; l.eventObjects[h.__oid_] = m } return m } function j(h, m) { var p, v = {}; if (b.Browser().ie) { if (p = q(h)) v = p.__events_ } else v = h.__events_ || {}; if (m) p = v[m] || {}; else { p = {}; for (var x in v) b.copyObject(v[x], p) } return p } function u(h, m) {
        m = m || []; if (Object.prototype.toString.apply(m) !==
        "[object Array]") m = [m]; if (h.target) return h.handler.apply(h.target, m); return null
    } function i(h) { h.bindHandler = function (m) { if ((m = m || window.event) && !m.target) try { m.target = m.srcElement } catch (p) { } var v = u(h, [m]); if (m && m.type === "click") if ((m = m.srcElement) && m.tagName && m.tagName === "A" && m.href === "javascript:void(0)") return false; return v }; return h.bindHandler } function k(h) { if (h && h.type) { this.originalEvent = h; this.type = h.type } else this.type = h; this.timeStamp = (new Date).valueOf(); this.expando = true } function n() { return false }
    function e() { return true } var b = __MapNSImpl__.Util, d = 0, f = 0, l = {}; l.listeners = {}; l.eventObjects = {}; var a = __MapNSImpl__.Class({
        className: "EventListener", initialize: function (h, m, p, v) { this.target = h; this.eventName = m; this.handler = p; this.type = v; this.bindHandler = null; this.id = d++; s(h, m)[this.id] = this; if (b.Browser().ie) l.listeners[this.id] = this }, remove: function () {
            if (this.target) {
                switch (this.type) {
                    case 1: this.target.removeEventListener(this.eventName, this.handler, false); break; case 4: this.target.removeEventListener(this.eventName,
                    this.handler, true); break; case 2: this.target.detachEvent("on" + this.eventName, this.bindHandler); break; case 3: this.target["on" + this.eventName] = null
                } delete s(this.target, this.eventName)[this.id]; delete l.listeners[this.id]; this.target = this.handler = null
            }
        }
    }); l.addListener = function (h, m, p, v) { p = b.callback(h, p, v); return new a(h, m, p, 0) }; l.addListenerOnce = function (h, m, p, v) { var x = null; return x = l.addListener(h, m, function () { p.apply(h, arguments); x && x.remove(); x = null }, v) }; l.removeListener = function (h) { h && h.remove() };
    l.clearListeners = function (h, m) { b.forEach(j(h, m), function (p, v) { v && v.remove() }) }; l.trigger = function (h, m, p) { b.forEach(j(h, m), function (v, x) { x && u(x, p) }) }; l.addDomListener = function (h, m, p, v) {
        p = b.callback(h, p, v); if (h.addEventListener) { v = false; if (m === "focusin") { m = "focus"; v = true } else if (m === "focusout") { m = "blur"; v = true } var x = v ? 4 : 1; h.addEventListener(m, p, v); p = new a(h, m, p, x) } else if (h.attachEvent) {
            if (m === "mouseover" && (!h.tagName || h.tagName.toLowerCase() !== "area")) m = "mouseenter"; else if (m === "mouseout" && (!h.tagName ||
            h.tagName.toLowerCase() !== "area")) m = "mouseleave"; p = new a(h, m, p, 2); h.attachEvent("on" + m, i(p))
        } else { h["on" + m] = p; p = new a(h, m, p, 3) } return p
    }; l.addDomListenerOnce = function (h, m, p, v) { var x = null; return x = l.addDomListener(h, m, function () { p.apply(h, arguments); x && x.remove(); x = null }, v) }; l.stopEvent = function (h) { l.preventDefault(h); l.stopPropagation(h) }; l.preventDefault = function (h) { h = h || window.event; h.returnValue = false; h.preventDefault && h.preventDefault() }; l.stopPropagation = function (h) {
        h = h || window.event; h.cancelBubble =
        true; h.stopPropagation && h.stopPropagation()
    }; l.bindDom = function (h, m, p, v) { v = b.adapter(p, v); return l.addDomListener(h, m, v) }; l.bind = function (h, m, p, v) { return l.addListener(h, m, b.adapter(p, v)) }; l.unload = function () { var h = l.listeners, m; for (m in h) h[m].remove(); l.listeners = null; l.eventObjects = null; (h = window.CollectGarbage) && h() }; l.deposeNode = function (h, m) { if (h) { h.parentNode && !m && h.parentNode.removeChild(h); l.clearListeners(h); for (var p; p = h.firstChild;) l.deposeNode(p) } }; l.fixEvent = function (h) {
        if (h.expando) return h;
        var m = h, p = window.document; h = new k(m); for (var v in m) if (typeof m[v] !== "function") h[v] = m[v]; if (!h.target) h.target = h.srcElement || p; if (h.target.nodeType === 3) h.target = h.target.parentNode; if (!h.relatedTarget && h.fromElement) h.relatedTarget = h.type == "mouseover" || h.type == "mouseenter" ? h.fromElement : h.toElement; if (h.pageX == null && h.clientX != null) {
            m = p.documentElement; p = p.body; h.pageX = h.clientX + (m && m.scrollLeft || p && p.scrollLeft || 0) - (m && m.clientLeft || p && p.clientLeft || 0); h.pageY = h.clientY + (m && m.scrollTop || p && p.scrollTop ||
            0) - (m && m.clientTop || p && p.clientTop || 0)
        } if (!h.which && (h.charCode || h.charCode === 0 ? h.charCode : h.keyCode)) h.which = h.charCode || h.keyCode; if (!h.metaKey && h.ctrlKey) h.metaKey = h.ctrlKey; if (!h.which && h.button !== undefined) h.which = { 1: 1, 4: 2, 2: 3 }[h.button]; return h
    }; k.prototype = {
        preventDefault: function () { this.isDefaultPrevented = e; var h = this.originalEvent; if (h) { h.preventDefault && h.preventDefault(); h.returnValue = false } }, stopPropagation: function () {
            this.isPropagationStopped = e; var h = this.originalEvent; if (h) {
                h.stopPropagation &&
                h.stopPropagation(); h.cancelBubble = true
            }
        }, stopImmediatePropagation: function () { this.isImmediatePropagationStopped = e; this.stopPropagation() }, isDefaultPrevented: n, isPropagationStopped: n, isImmediatePropagationStopped: n
    }; c.Event = l
})(__MapNS__); (function (c) {
    function s(b, d, f, l, a) { q(b)[d] = { target: f, key: l }; a || a || u(b, d) } function q(b) { !b.hasOwnProperty("accessors_") && (b.accessors_ = {}); return b.accessors_ } function j(b) { !b.hasOwnProperty("bindings_") && (b.bindings_ = {}); return b.bindings_ } function u(b, d) { var f = d + n; b[f] ? b[f]() : b.changed(d); k.trigger(b, d.toLowerCase() + n) } var i = __MapNSImpl__.Util, k = c.Event, n = "_changed", e = __MapNSImpl__.Class({
        initialize: function () {
            var b = {}; this.set = function (d, f) {
                var l = q(this)[d]; if (l) {
                    var a = l.target; l = l.key; var h = "set" +
                    i.capitalInitial(l); a[h] ? a[h](f) : a.set(l, f)
                } else { a = b[d]; b[d] = f; u(this, d, a) }
            }; this.get = function (d) { var f = q(this)[d]; if (f) { d = f.target; f = f.key; var l = "get" + i.capitalInitial(f); return d[l] ? d[l]() : d.get(f) } else return b[d] }
        }, setValues: function (b) { for (var d in b) { var f = b[d], l = "set" + q(d); this[l] ? this[l](f) : this.set(d, f) } }, notify: function (b) { var d = q(this); if (d.hasOwnProperty(b)) { b = d[b]; b.target.notify(b.key) } else u(this, b) }, bindTo: function (b, d, f, l) {
            f = f || b; this.__checker__ = this.__checker__ || {}; if (this.__checker__[b] !==
            this.__checker__[f]) throw Error("Can not bind properties of different type."); this.unbind(b); var a = f.toLowerCase() + n, h = this; j(this)[b] = k.addListener(d, a, function () { u(h, b) }); s(this, b, d, f, l)
        }, bindsTo: function (b, d, f, l) { f = f || []; for (var a = 0, h = b.length; a < h; a++) this.bindTo(b[a], d, f[a] || null, l) }, unbind: function (b) { var d = j(this)[b]; if (d) { delete j(this)[b]; k.removeListener(d); d = this.get(b); delete q(this)[b]; this[b] = d } }, unbindAll: function (b) { for (var d = 0, f = b.length; d < f; d++) this.unbind(b[d]) }, changed: function () { }
    });
    e.publicProperties = function (b, d) { i.forEach(d, function (f) { var l = "get" + i.capitalInitial(f); b.prototype[l] = function () { return this.get(f) }; l = "set" + i.capitalInitial(f); b.prototype[l] = function (a) { var h = d[f]; if (h && !h(a)) throw Error("Invalid value or type for property <" + (f + (">: " + a))); this.set(f, a) } }) }; e.prototype.setOptions = e.prototype.setValues; e.prototype.unbinds = e.prototype.unbindAll; e.union = function () {
        var b = arguments, d = b.length; return function () {
            for (var f = 0; f < d; ++f) if (b[f].apply(this, arguments)) return true;
            return false
        }
    }; e.checkers = {
        isNull: function (b) { return b === null || b === undefined }, isBoolean: function (b) { return b === !!b }, isArray: function (b) { return Object.prototype.toString.apply(b) === "[object Array]" }, isObject: function (b) { return Object.prototype.toString.apply(b) === "[object Object]" }, isString: function (b) { return typeof b === "string" }, isHtmlControl: function (b) { return i.isHtmlControl(b) }, isNumber: function (b) { return typeof b === "number" }, checkInterface: function (b) {
            return function (d) {
                var f = true, l; for (l in b) if (b.hasOwnProperty(l) &&
                d && typeof d[l] !== "function") f = false; return f
            }
        }, isInstanceOf: function (b) { return function (d) { return d instanceof b } }
    }; e.checkers.isBoolOrNull = e.union(e.checkers.isBoolean, e.checkers.isNull); e.checkers.isStringOrNull = e.union(e.checkers.isString, e.checkers.isNull); e.checkers.isNumberOrNull = e.union(e.checkers.isNumber, e.checkers.isNull); e.checkers.checkInterfaceOrNull = e.union(e.checkers.checkInterfaces, e.checkers.isNull); e.checkers.isInstanceOfOrNull = e.union(e.checkers.isInstanceOf, e.checkers.isNull);
    c.MVCObject = e
})(__MapNS__); (function (c) {
    __MapNSImpl__.Interfaces.registInterface("Point", ["getX", "getY", "equals"]); var s = __MapNSImpl__.Class({
        initialize: function (q, j) { this.x = q - 0; this.y = j - 0 }, getX: function () { return this.x }, getY: function () { return this.y }, equals: function (q) { return this.getX() === q.getX() && this.getY() === q.getY() }, add: function (q) { var j = this.clone(); j.x += q.x; j.y += q.y; return j }, multiplyBy: function (q) { return new s(this.x * q, this.y * q) }, subtract: function (q) { var j = this.clone(); j.x -= q.x; j.y -= q.y; return j }, lerp: function (q,
        j) { j = Math.min(1, j); j = Math.max(0, j); var u = 1 - j; return new s(this.x * u + q.x * j, this.y * u + q.y * j) }, clone: function () { return new s(this.x, this.y) }, midpoint: function (q) { return new s((this.x + q.x) * 0.5, (this.y + q.y) * 0.5) }, toString: function () { return this.getX() + ", " + this.getY() }
    }); c.Point = s
})(__MapNS__); (function (c) {
    function s(q, j, u, i) { this.red = q; this.green = j; this.blue = u; this.alpha = parseInt(i) >= 0 ? i : 1 } s.prototype = { toRGB: function () { return "rgb(" + [this.red, this.green, this.blue].join(",") + ")" }, toRGBA: function () { return "rgba(" + [this.red, this.green, this.blue, this.alpha].join(",") + ")" }, toHex: function () { return "#" + (16777216 + (this.red << 16) + (this.green << 8) + this.blue).toString(16).slice(1) }, toInt: function () { return this.red << 16 | this.green << 8 | this.blue }, toString: function () { return this.toRGBA() } }; s.fromHex = function (q) {
        if (q.substring(0,
        1) === "#") q = q.substr(1); var j = q.length === 3 ? 1 : 2, u = q.substr(0 * j, j), i = q.substr(1 * j, j); q = q.substr(2 * j, j); if (j === 1) { u += u; i += i; q += q } u = parseInt(u, 16); i = parseInt(i, 16); q = parseInt(q, 16); return new s(u, i, q, 1)
    }; c.Color = s
})(__MapNS__); (function (c) { __MapNSImpl__.Interfaces.registInterface("Size", ["getWidth", "getHeight", "equals"]); c.Size = __MapNSImpl__.Class({ initialize: function (s, q) { this.width = s; this.height = q }, getWidth: function () { return this.width }, getHeight: function () { return this.height }, equals: function (s) { return this.getWidth() === s.getWidth() && this.getHeight() === s.getHeight() }, toString: function () { return this.getWidth() + ", " + this.getHeight() } }) })(__MapNS__); (function (c) {
    var s = c.Point, q = __MapNSImpl__.Class({
        initialize: function (j) { this.minX = this.minY = Number.MAX_VALUE; this.maxX = this.maxY = -Number.MAX_VALUE; if (j && j.length) { for (var u = [], i = [], k = j.length; k--;) { u.push(j[k].x); i.push(j[k].y) } this.minX = Math.min.apply(Math, u); this.maxX = Math.max.apply(Math, u); this.minY = Math.min.apply(Math, i); this.maxY = Math.max.apply(Math, i) } this.min = new s(this.minX, this.minY); this.max = new s(this.maxX, this.maxY) }, isEmpty: function () { return !(this.minX < this.maxX && this.minY < this.maxY) },
        equals: function (j) { if (!j) return false; return this.minX == j.minX && this.minY == j.minY && this.maxX == j.maxX && this.maxY == j.maxY }, containsBounds: function (j) { return j.minX > this.minX && j.maxX < this.maxX && j.minY > this.minY && j.maxY < this.maxY }, containsPoint: function (j) { return j.x >= this.minX && j.x <= this.maxX && j.y >= this.minY && j.y <= this.maxY }, intersects: function (j) {
            if (!(this.isEmpty() || j.isEmpty())) if (!(j.maxX < this.minX || j.minX > this.maxX || j.maxY < this.minY || j.minY > this.maxY)) {
                var u = Math.min(this.maxX, j.maxX), i = Math.min(this.maxY,
                j.maxY); return new q([new s(Math.max(this.minX, j.minX), Math.max(this.minY, j.minY)), new s(u, i)])
            }
        }, getCenter: function () { return new s((this.minX + this.maxX) / 2, (this.minY + this.maxY) / 2) }, extend: function (j) { if (j) { this.minX = Math.min(this.minX, j.x); this.maxX = Math.max(this.maxX, j.x); this.minY = Math.min(this.minY, j.y); this.maxY = Math.max(this.maxY, j.y) } this.min.x = this.minX; this.min.y = this.minY; this.max.x = this.maxX; this.max.y = this.maxY }, toString: function () { return this.minX + "," + this.minY + "," + this.maxX + "," + this.maxY }
    });
    c.Bounds = q
})(__MapNS__); (function () {
    function c(f) { for (var l = 0, a; a = k[l]; l++) if (f === a[0]) return a; return null } var s = __MapNS__.Event, q = __MapNS__.Point, j = __MapNSImpl__.Config, u = __MapNS__.MVCObject, i = __MapNSImpl__.Util, k = [], n = false, e = __MapNSImpl__.Class(u, {
        initialize: function () { u.apply(this); this.renderTime_ = null }, redraw: function () {
            var f = (new Date).getTime(), l = false; if (this.renderTime_) { if (f - this.renderTime > 100) { this.renderTime = f; l = true } } else { this.renderTime = f; l = true } var a = this; if (l) a.render ? a.render() : a.draw(); else if (!this.renderTimer_) this.renderTimer_ =
            setTimeout(function () { a.render ? a.render() : a.draw(); delete a.renderTimer_ }, 0)
        }, triggerMouseEvent: function (f, l) { l.latLng = this.getMouseLatLng(l); l.qLatLng = this.getMouseLatLng(l); var a = this.get("model_"); a && s.trigger(a, f, [l]) }, registMouseEvents: function (f, l) {
            for (var a = this.get("model_"), h = 0, m = l.length; h < m; h++) {
                var p = function (D, C, r) {
                    return function (w) {
                        var y = D.get("mapCanvasProjection_"); if (D instanceof __MapNS__.Polyline && w.__point__ && y) D && (w.latLng = y.fromDivPixelToLatLng(w.__point__)); else {
                            y = C.getMouseLatLng(w);
                            w.latLng = y; w.qLatLng = y; w.qLngLat = y
                        } if (r == "click") { var A = {}; A = s.fixEvent(w); if (!D.clickTimer_) D.clickTimer_ = setTimeout(function () { D.firstTouche && (D.firstTouche = null); D.secondTouche && (D.secondTouche = null); clearTimeout(D.clickTimer_); D.clickTimer_ = null; D && s.trigger(D, r, [A]) }, 200) } else { if (r == "dblclick") if (D.clickTimer_) { clearTimeout(D.clickTimer_); D.clickTimer_ = null } D && s.trigger(D, r, [w]) }
                    }
                }; if (l[h] === "click") {
                    c(a) || k.push([a, false, null, false, this]); var v = function (D) {
                        return function (C) {
                            if (!(C.touches &&
                            C.touches.length !== 1)) { var r = i.getMouseCoordinate(C), w = c(D); w[1] = false; w[2] = r; w[3] = C.button === 2; p(w[0], w[4], "mousedown")(C) }
                        }
                    }; i.Browser().isSupportTouch ? s.addDomListener(f, "touchstart", v(a)) : s.addDomListener(f, "mousedown", v(a)); if (!n) {
                        n = true; v = function (D) { for (var C = 0, r; r = k[C]; C++) if (r[2] && !r[3]) { var w = i.getMouseCoordinate(D); if (r[2][0] !== w[0] || r[2][1] !== w[1]) r[1] = true } }; var x = function (D) {
                            for (var C = 0, r; r = k[C]; C++) {
                                var w = r[0].get("clickable") !== false; if (r[2] && !r[1] && w) {
                                    w = i.getMouseCoordinate(D); if (r[0].firstTouche &&
                                    D.touches) { r[0].secondTouche = new q(w[0], w[1]); if (i.pixelDistance(r[0].firstTouche, r[0].secondTouche) < 20 && D.touches) { r[0].firstTouche = null; r[0].secondTouche = null; p(r[0], r[4], "dblclick")(D); break } } else r[0].firstTouche = new q(w[0], w[1]); if (D.button === 2) p(r[0], r[4], "rightclick")(D); else r[0].clickTimer_ || p(r[0], r[4], "click")(D)
                                } r[2] = null
                            }
                        }, B = document; if (i.Browser().isSupportTouch) { s.addDomListener(B, "touchmove", v); s.addDomListener(B, "touchend", x) } else {
                            s.addDomListener(B, "mousemove", v); s.addDomListener(B,
                            "mouseup", x)
                        }
                    }
                } else s.addDomListener(f, l[h], p(a, this, l[h]))
            }
        }, getMouseLatLng: function (f) { var l = this.get("map_") || this.get("map"); if (l) return l.get("mapCanvasProjection_").fromContainerPixelToLatLng(this.getMouseContainerPixel(f), true); return null }, getMouseContainerPixel: function (f) { var l = this.get("map_") || this.get("map"); if (l) { f = i.getMouseCoordinate(f); l = l.get("mapContainer_"); l = i.getDomCoordinate(l); return new q(f[0] - l[0], f[1] - l[1]) } return null }, draw: function () { }
    }), b = {}, d = []; e.loadView = function (f,
    l) {
        b[f] || (b[f] = { status: 0, models: [], view: null }); switch (b[f].status) {
            case 2: new b[f].view(l); break; case 0: b[f].status = 1; b[f].models.push(l); var a = ""; if (j.loader) a = "modules/" + f + "/"; d.push(f); i.RPCRequest(j.domain + a + f + "View.js?v=" + __MapNSImpl__.Config.version, function () {
                var h = 0, m = 0, p = false; h = 0; for (m = d.length; h < m; h++) {
                    var v = null, x = b[d[h]]; if (d[h] === f) { v = b[f]; p = true } else if (p && x.view && x.status === 3) v = x; if (v) { v.status = 2; x = 0; for (var B = v.models.length; x < B; x++) new v.view(v.models[x]) } if (!p && !b[d[h]].view) {
                        b[f].status =
                        3; break
                    }
                }
            }); break; case 1: b[f].models.push(l)
        }
    }; e.setView = function (f, l) { b[f].view = l; if (b[f].status !== 2) b[f].status = 2 }; e.getView = function (f) { return !!b[f].view }; __MapNS__.MVCView = e
})(); (function (c) {
    var s = c.Event, q = __MapNSImpl__.Class(c.MVCObject, {
        initialize: function (j) { c.MVCObject.apply(this); this.elems = j || []; this.set("length", this.elems.length) }, getAt: function (j) { return this.elems[j] }, forEach: function (j) { for (var u = 0, i = this.get("length") ; u < i; ++u) if (j(this.elems[u], u) === false) break }, setAt: function (j, u) { this.elems.splice(j, 0, u); this.set("length", this.elems.length); s.trigger(this, "insert_at", [j, u]) }, insertAt: function (j, u) {
            this.elems.splice(j, 0, u); this.set("length", this.elems.length);
            s.trigger(this, "insert_at", [j, u])
        }, removeAt: function (j) { var u = this.elems[j]; this.elems.splice(j, 1); this.set("length", this.elems.length); s.trigger(this, "remove_at", [j, u]); return u }, push: function (j) { this.insertAt(this.elems.length, j); return this.elems.length }, pop: function (j) { if (j) for (var u = 0; u < this.elems.length; u++) if (j == this.elems[u]) return this.removeAt(u); return this.removeAt(this.elems.length - 1) }, exists: function (j) { if (j) for (var u = 0; u < this.elems.length; u++) if (j == this.elems[u]) return true; return false },
        clear: function () { this.elems.length = 0; this.set("length", 0) }, getArray: function () { return this.elems }
    }); c.MVCArray = q; c.MVCObject.publicProperties(q, { length: 0 })
})(__MapNS__); (function (c) {
    function s() { for (var e = (new Date).getTime(), b = 0, d = j.length; b < d; b++) { var f = j[b]; if (f && f.get("time_")) { var l = f.get("current"); if (l < 0) break; var a = f.get("duration"); f.get("fps"); l > a && (l = a); f.frame(l); if (l >= a) { f.stop(); break } f.set("current", (e - f.get("time_")) / 1E3) } } } var q = c.Event, j = [], u = null, i = __MapNSImpl__.Util, k = function () {
        return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (e) {
            window.setTimeout(e,
            1E3 / 60)
        }
    }(), n = function (e, b) { function d() { if ((new Date).getTime() - f >= b) { e.call(); f = (new Date).getTime() } l.value = k(d) } if (!window.requestAnimationFrame && !window.webkitRequestAnimationFrame && !window.oRequestAnimationFrame && !window.msRequestAnimationFrame) return window.setInterval(e, b); var f = (new Date).getTime(), l = {}; l.value = k(d); return l }; c.Animation = __MapNSImpl__.Class(c.MVCObject, {
        initialize: function (e) { c.MVCObject.apply(this); e = e || {}; e.duration = e.duration || 0; e.fps = 40; this.setValues(e) }, prepare: function () { return true },
        start: function (e) { if (this.prepare()) { this.stop(true); var b = this.get("fps"); this.set("current", 0.1 / b); !e && q.trigger(this, "start"); this.set("status", 1); j.push(this); this.set("time_", (new Date).getTime()); u || (u = i.Browser().isSupportTouch ? n(s, 1E3 / b) : window.setInterval(s, 1E3 / b)); s() } }, stop: function (e) {
            this.set("time_", null); for (var b = 0, d = j.length; b < d; b++) if (j[b] === this) { j.splice(b, 1); break } if (j.length === 0) {
                if (i.Browser().isSupportTouch) {
                    if (u) {
                        b = u; d = b.value; window.cancelAnimationFrame ? window.cancelAnimationFrame(d) :
                        window.webkitCancelRequestAnimationFrame ? window.webkitCancelRequestAnimationFrame(d) : window.oCancelRequestAnimationFrame ? window.oCancelRequestAnimationFrame(d) : window.msCancelRequestAnimationFrame ? window.msCancelRequestAnimationFrame(d) : clearInterval(b)
                    }
                } else u && window.clearInterval(u); u = null
            } this.set("status", 0); this.set("current", -1); !e && q.trigger(this, "end")
        }, getStatus: function () { return this.get("status") }, frame: function () { }
    }); c.Animation.BOUNCE = 0; c.Animation.DROP = 1; c.Animation.JUMP = 2; c.Animation.POP =
    3; c.Fx = __MapNSImpl__.Class(c.Animation, {
        initialize: function (e) { e = e || {}; e.begins = e.begins || []; e.ends = e.ends || []; e.duration = e.duration || 0; e.callback = e.callback || function () { }; e.fps = e.fps || 60; e.method = e.method || c.Fx.linear; c.MVCObject.apply(this); this.setValues(e) }, isBeginEqualsEnd: function () { for (var e = this.get("begins"), b = this.get("ends"), d = true, f = 0, l = e.length; f < l; f++) if (e[f] !== b[f]) { d = false; break } return d }, prepare: function () { return !this.isBeginEqualsEnd() }, getValues: function (e) {
            var b = this.get("begins"),
            d = this.get("ends"), f = this.get("method"), l = this.get("duration"), a = [], h = [], m, p; m = 0; for (p = b.length; m < p; ++m) { var v = d[m] - b[m], x; if (l != 0) { x = f(e, b[m], v, l); var B = e - 1 / this.get("fps"); B < 0 && (B = 0); v = x - f(B, b[m], v, l) } else { x = d[m]; v = v } a.push(x); h.push(v) } return { values: a, steps: h }
        }, frame: function (e) { var b = this.getValues(e); e = b.steps; b = b.values; for (var d = true, f = 0, l = e.length; f < l; f++) if (e[f] !== 0) { d = false; break } d || this.qFxFrame(b, e) }, qFxFrame: function (e, b) { var d = this.get("callback"); d && d(e, b) }
    }); c.CssFx = __MapNSImpl__.Class(c.Fx,
    {
        initialize: function (e) { e = e || {}; e.items = e.items || []; e.duration = e.duration || 0; e.fps = e.fps || 60; e.method = e.method || c.Fx.linear; c.MVCObject.apply(this); this.setValues(e) }, prepare: function () { for (var e = this.get("items"), b = [], d = [], f = 0, l = e.length; f < l; ++f) { var a = e[f]; b = b.concat(a.begins); d = d.concat(a.ends) } this.set("begins", b); this.set("ends", d); return !this.isBeginEqualsEnd() }, qFxFrame: function (e) {
            for (var b = this.get("items"), d = 0, f = 0, l = b.length; f < l; ++f) {
                var a = b[f], h = a.styles, m = a.units; a = a.element; for (var p =
                0, v = h.length; p < v; ++p) { a.style[h[p]] = parseInt(e[d], 10) + m[p]; d++ }
            }
        }
    }); c.Fx.linear = function (e, b, d, f) { return d * e / f + b }; c.Fx.easeInQuad = function (e, b, d, f) { return d * (e /= f) * e + b }; c.Fx.easeOutQuad = function (e, b, d, f) { return -d * (e /= f) * (e - 2) + b }; c.Fx.easeInOutQuad = function (e, b, d, f) { return (e /= f / 2) < 1 ? d / 2 * e * e + b : -d / 2 * (--e * (e - 2) - 1) + b }; c.Fx.easeInCubic = function (e, b, d, f) { return d * Math.pow(e / f, 3) + b }; c.Fx.easeOutCubic = function (e, b, d, f) { return d * (Math.pow(e / f - 1, 3) + 1) + b }; c.Fx.easeInQuart = function (e, b, d, f) {
        return d * (e /= f) * e *
        e * e + b
    }; c.Fx.easeOutQuart = function (e, b, d, f) { return -d * ((e = e / f - 1) * e * e * e - 1) + b }; c.Fx.easeInOutCubic = function (e, b, d, f) { return (e /= f / 2) < 1 ? d / 2 * Math.pow(e, 3) + b : d / 2 * (Math.pow(e - 2, 3) + 2) + b }; c.Fx.easeInSine = function (e, b, d, f) { return d * (1 - Math.cos(e / f * (Math.PI / 2))) + b }; c.Fx.easeOutSine = function (e, b, d, f) { return d * Math.sin(e / f * (Math.PI / 2)) + b }; c.Fx.easeInOutSine = function (e, b, d, f) { return d / 2 * (1 - Math.cos(Math.PI * e / f)) + b }; c.Fx.easeInExpo = function (e, b, d, f) { return d * Math.pow(2, 10 * (e / f - 1)) + b }; c.Fx.easeOutExpo = function (e, b,
    d, f) { return d * (-Math.pow(2, -10 * e / f) + 1) + b }; c.Fx.easeInOutExpo = function (e, b, d, f) { return (e /= f / 2) < 1 ? d / 2 * Math.pow(2, 10 * (e - 1)) + b : d / 2 * (-Math.pow(2, -10 * --e) + 2) + b }; c.Fx.easeInCirc = function (e, b, d, f) { return d * (1 - Math.sqrt(1 - (e /= f) * e)) + b }; c.Fx.easeOutCirc = function (e, b, d, f) { return d * Math.sqrt(1 - (e /= f - 1) * e) + b }; c.Fx.easeInOutCirc = function (e, b, d, f) { return (e /= f / 2) < 1 ? d / 2 * (1 - Math.sqrt(1 - e * e)) + b : d / 2 * (Math.sqrt(1 - (e -= 2) * e) + 1) + b }; c.Fx.easeInOutBack = function (e, b, d, f, l) {
        if (l == undefined) l = 2; if ((e /= f / 2) < 1) return d / 2 * e * e * (((l *=
        1.525) + 1) * e - l) + b; return d / 2 * ((e -= 2) * e * (((l *= 1.525) + 1) * e + l) + 2) + b
    }; c.Fx.easeInBack = function (e, b, d, f, l) { if (l == undefined) l = 20; return d * (e /= f) * e * ((l + 1) * e - l) + b }; c.Fx.easeOutBack = function (e, b, d, f, l) { if (l == undefined) l = 20; return d * ((e = e / f - 1) * e * ((l + 1) * e + l) + 1) + b }
})(__MapNS__); (function (c) {
    function s() { if (!d) for (var g = 0, o = null; o = B[g++];) if (o.isSupported && o.isSupported()) { d = o; break } return d } function q(g, o) { this.shapes = new l; this.container = g; this.eventTarget = o || g; var t = this, z = []; m.addListener(this.shapes, "length_changed", function () { if (this.get("length") === 0) t.disableEventListener(z); else z[0] || t.enableEventListener(z) }) } function j(g) { this.bridge = g; this._transformStack = []; this._flatness = 3; this._lastY = this._lastX = 0; this._arrY = this._arrX = null; this.isbegin = false } function u() {
        this.element =
        this.transform = this.strokeLinecap = this.strokeLinejoin = this.strokeDashStyle = this.strokeWidth = this.strokeColor = this.fillColor = null
    } function i() { this.container = this.element = this.pathData = this._transform = null } function k(g) { this.container = g; this.element = document.createElement("canvas"); this.element.width = 0; this.element.height = 0; this.element.style.position = "absolute"; this.element.style.pointerEvents = "none"; this._canvas = this.element.getContext("2d"); this._commands = null } function n() {
        this.element = this.pathData =
        this.container = null
    } function e(g, o) { this.x = g; this.y = o } function b(g, o, t) { this.points = g || []; this.bounds = null; this.pointsNum = g.length; this.childSegs = null; this.width = Math.max(o, b.Config.minBufferWidth); this.index = t || 0 } var d = null, f = c.MVCObject, l = c.MVCArray, a = __MapNSImpl__.Synchronize, h = __MapNSImpl__.Util, m = c.Event, p = c.Color, v = c.Point, x = c.Bounds, B = [i, n, k], D = { StrokeLinejoin: { DEFAULT: "round", ROUND: "round", BEVEL: "bevel", MITER: "miter" }, StrokeLinecap: { DEFAULT: "butt", BUTT: "butt", FLAT: "flat", SQUARE: "square", ROUND: "round" } };
    q.prototype = {
        enableEventListener: function () {
            function g(H, I, M, U) { var V = this; I = c.Event.addDomListener(I, M, function () { U.apply(V, arguments) }); H.push(I) } function o(H, I) { I = I || document.body; var M = h.getMouseCoordinate(H), U = h.getDomCoordinate(I); return new v(M[0] - U[0], M[1] - U[1]) } function t(H, I) {
                var M = null, U = null; I.forEach(function (V) { var W = null; if (V.get("visible") && V.bounds && V.bounds.containsPoint(H) && (W = V.isMouseIn(H)) && (!M || M.get("zIndex") <= V.get("zIndex"))) { M = V; U = W } }); if (M) if (U) M._mouseCoord = U; else delete M._mouseCoord;
                return M
            } function z() { clearTimeout(P); P = null } function F(H) { var I = this.container; if (O) { var M = o(H, this.container); clearTimeout(P); H = m.fixEvent(H); P = setTimeout(function () { S(O, "mouseout", H, M); O = null; h.setCursorStyle(I.parentNode, "", "auto") }, 0) } } function G(H) { if (!(H.touches && H.touches.length !== 1)) { L = true; R = false; var I = o(H, this.container), M = O || t(I, this.shapes); M && S(M, "mousedown", H, I) } } function K(H) {
                L = false; var I = o(H, this.container), M = O || t(I, this.shapes); if (M) {
                    S(M, "mouseup", H, I); if (!R) {
                        H = m.fixEvent(H); H.clickPoint =
                        I; H.clickShape = M; Q.push(H); if (!T && Q.length === 1) T = setTimeout(J, 200)
                    }
                }
            } function J() { var H = Q.shift(), I = Q.shift(); H && I ? S(H.clickShape, "dblclick", H, H.clickPoint) : S(H.clickShape, "click", H, H.clickPoint); if (Q[0]) setTimeout(arguments.callee, 200); else T = null } function N(H) {
                if (L) R = true; var I = o(H, this.container), M = t(I, this.shapes); if (M) {
                    I = M._mouseCoord ? new v(M._mouseCoord[0], M._mouseCoord[1]) : I; H.__point__ = I; if (M !== O) {
                        O && S(O, "mouseout", H, I); S(M, "mouseover", H, I); O = M; h.setCursorStyle(this.container.parentNode, M.get("cursor"),
                        "auto")
                    } S(M, "mousemove", H, I)
                } else if (O) { M = O._mouseCoord ? new v(O._mouseCoord[0], O._mouseCoord[1]) : I; H.__point__ = M; S(O, "mouseout", H, M); O = null; h.setCursorStyle(this.container.parentNode, "", "auto") }
            } function S(H, I, M, U) { U = H._mouseCoord || [U.x, U.y]; m.trigger(H, I, [M, U]) } var O = null, L = false, R = false, Q = [], T = null, P = null; return h.Browser().isSupportTouch ? function (H) { var I = this.eventTarget; g.call(this, H, I, "touchstart", G); g.call(this, H, I, "touchend", K) } : function (H) {
                var I = this.eventTarget; g.call(this, H, I, "mousedown",
                G); g.call(this, H, I, "click", K); g.call(this, H, I, "mousemove", N); g.call(this, H, I, "mouseout", F); g.call(this, H, I, "mouseover", z)
            }
        }(), disableEventListener: function (g) { for (; g[0];) c.Event.removeListener(g.pop()) }, draw: function (g) { var o = false; this.shapes.forEach(function (t) { if (t === g) { o = true; return false } }); if (!o) { this.shapes.push(g); g.get("canvas") !== this && g.set("canvas", this) } }, erase: function (g) {
            if (g) {
                var o = this.shapes, t = null; o.forEach(function (z, F) { if (z === g) { t = o.removeAt(F); return false } }); t && t.set("canvas",
                null)
            }
        }, clear: function () { for (var g = this.shapes, o = null; o = g.pop() ;) o.set("canvas", null) }
    }; var C = __MapNSImpl__.Class(f, {
        initialize: function () { f.call(this); this.element = null; this.token = +new Date; var g = new (s()); this.graphics = new j(g); var o = this, t = false; g.ready(function () { if (!t) { t = true; G && G() } }); if (!t) { var z = 0, F = this.render, G = function () { if (t) { o.render = F; G = F = null; if (z > 0) { o.render(); z = 0 } } else z++ }; o.render = G } }, getShape: function () { return this.element }, setDefaultOptions: function (g) {
            var o = {
                fillColor: new p(255,
                255, 255, 0.5), strokeColor: new p(23, 145, 252, 1), strokeWidth: 2, strokeDashStyle: "solid", strokeLinejoin: "round", strokeLinecap: "butt", zIndex: 0, transform: null, visible: true, cursor: ""
            }; g = a.fill(g, o); this.setOptions(g)
        }, changed: function (g) { g === "viewbox_" || g === "cursor" || (g === "strokeWeight" ? this.set("strokeWidth", this.get("strokeWeight")) : this.render()) }, visible_changed: function () { var g = this.get("visible"); if (this.element) this.element.style.display = g === false ? "none" : "" }, canvas_changed: function () {
            var g = this.get("canvas");
            if (g) { g.draw(this); this.render(); this._canvas = g } else if (this.element) { this.graphics.clear(); this.element = null; if (this._canvas) { this._canvas.erase(this); delete this._canvas } }
        }, draw: function () { throw Error("subclasses must override the Shape.draw method"); }, isRender: function () { return true }, isMouseIn: function () { return false }, render: function () {
            var g = this.graphics, o = this.get("canvas"); if (!(!g || !o || !this.isRender())) {
                g.beginRender(o.container); if (o = this.get("fillColor")) {
                    var t = this.get("fillOpacity"); if (typeof o ===
                    "string") o = p.fromHex(o); if (typeof t === "number") o.alpha = t
                } if (t = this.get("strokeColor")) { var z = this.get("strokeOpacity"); if (typeof t === "string") t = p.fromHex(t); if (typeof z === "number") t.alpha = z } g.setFillColor(o); g.setStrokeColor(t); o = parseInt(this.get("strokeWidth")); g.setStrokeWidth(o); g.setStrokeDashStyle(this.get("strokeDashStyle")); g.setStrokeLinejoin(this.get("strokeLinejoin")); g.setStrokeLinecap(this.get("strokeLinecap")); this.draw(g); this.element = g.endRender(this.get("viewbox_")); this.notify("visible");
                this.bounds = g.getBounds(); if (this.element && this.element.nodeType) this.element.style.zIndex = this.get("zIndex")
            }
        }
    }), r = __MapNSImpl__.Class(C, {
        type: "path", initialize: function (g, o) { C.call(this); o = a.fill(o, { startArrow: null, endArrow: null }); o.fillColor = null; o.points = g; var t = this; c.Event.addListener(this, "points_changed", function () { t._arrSegNode = null }); this.setDefaultOptions(o) }, getCacheSegs_: function () {
            var g = this._arrSegNode; if (!g) {
                var o = this.get("points"); if (o) {
                    g = []; for (var t = 0, z = o.length; t < z; t++) g.push(new b(o[t],
                    this.get("strokeWidth")))
                } this._arrSegNode = g
            } return g
        }, isMouseIn: function (g) { if (this.get("canvas")) { var o = this.getCacheSegs_(); if (o) { for (var t = null, z = 0; z < o.length; z++) if (t = o[z].getPointOnLine(g)) break; return t } } }, startArrow_changed: function () { var g = this._sArrow, o = this.get("startArrow"), t = this.get("points"); if (o && t) { t = t[0].slice(0, 2); this._sArrow = g = this._drawArrow(g, t[0], t, o) } else if (g) { this._eraseArrow(g); this._sArrow = null } }, endArrow_changed: function () {
            var g = this._eArrow, o = this.get("endArrow"), t =
            this.get("points"); if (o && t) { var z = t.length, F = t[z - 1].length; t = t[z - 1].slice(F - 2, F); this._eArrow = g = this._drawArrow(g, t[1], t, o) } else if (g) { this._eraseArrow(g); this._eArrow = null }
        }, _drawArrow: function (g, o, t, z) {
            if (!g) { g = new A(null, null, 0); g.bindTo("visible", this); g.bindTo("canvas", this) } t = Math.atan2(t[1][0] - t[0][0], -t[1][1] - -t[0][1]); t = (t < 0 ? Math.PI * 2 + t : t) * 180 / Math.PI; g.set("size", this.get("strokeWidth") * 4); g.set("fillColor", this.get("strokeColor")); var F = this.get("strokeOpacity"); F >= 0 && g.set("fillOpacity",
            F); g.set("style", z); g.set("angle", t); g.set("position", o); g.set("cursor", this.get("cursor")); return g
        }, _eraseArrow: function (g) { if (g) { g.unbind("visible"); g.unbind("canvas"); g.set("canvas", null) } }, draw: function (g) { if (g) { var o = this.get("points"); if (o) { for (var t = 0, z = o.length; t < z; t++) for (var F = 0, G = o[t], K = G.length; F < K; F++) g[!F ? "movetoAbs" : "linetoAbs"](G[F][0], G[F][1]); this.notify("startArrow"); this.notify("endArrow") } } }
    }), w = __MapNSImpl__.Class(C, {
        type: "circle", initialize: function (g, o, t) {
            C.call(this); t = t ||
            {}; t.center = g; t.radius = o; this.setDefaultOptions(t)
        }, isMouseIn: function (g) { var o = this.get("center"), t = this.get("radius"); if (!this.get("canvas") || !o || !t) return false; else { var z = g.x; g = g.y; return Math.sqrt(Math.pow(Math.abs(z - o[0]), 2) + Math.pow(Math.abs(g - o[1]), 2)) <= t ? [z, g] : false } }, draw: function (g) { if (g) { var o = this.get("center"), t = this.get("radius"); if (!o || !t) g.movetoAbs(0, 0); else { var z = o[0] + t, F = o[0] - t; g.movetoAbs(F, o[1]); g.arcAbs(t, t, 0, 1, 0, z, o[1]); g.arcAbs(t, t, 0, 1, 0, F, o[1]) } } }
    }), y = __MapNSImpl__.Class(C,
    {
        type: "area", initialize: function (g, o) { C.call(this); o = o || {}; o.points = g; var t = this; c.Event.addListener(this, "points_changed", function () { t._segNode = null }); this.setDefaultOptions(o) }, getCacheSeg_: function () { var g = this._segNode; if (!g) { var o = this.get("points"); if (o) { o = o[0]; o.push([o[0][0], o[0][1]]); g = new b(o, this.get("strokeWidth")) } this._segNode = g } return g }, isMouseIn: function (g) {
            var o = this.get("points"); if (!this.get("canvas") || !o) return false; else {
                o = o[0]; for (var t = false, z = null, F = g.x, G = g.y, K = -1, J = o.length,
                N = J - 1; ++K < J; N = K) (o[K][1] <= G && G < o[N][1] || o[N][1] <= G && G < o[K][1]) && F < (o[N][0] - o[K][0]) * (G - o[K][1]) / (o[N][1] - o[K][1]) + o[K][0] && (t = !t); if (!t && this.type === "area") if (o = this.getCacheSeg_()) z = o.getPointOnLine(g); return t ? [F, G] : z || false
            }
        }, draw: function (g) { if (g) { var o = this.get("points"); if (o) { for (var t = 0, z = o.length; t < z; t++) for (var F = 0, G = o[t], K = G.length; F < K; F++) g[!F ? "movetoAbs" : "linetoAbs"](G[F][0], G[F][1]); g.closePath() } } }
    }), A = __MapNSImpl__.Class(y, {
        type: "arrow", initialize: function (g, o, t, z) {
            t = {
                fillColor: new p(0,
                0, 255), size: 16, strokeWidth: 1, strokeColor: new p(255, 255, 255), zIndex: 999, style: "Classic"
            }; z = a.fill(z, t); z.position = g; z.angle = o; y.call(this, null, z)
        }, angle_changed: function () { this.updatePoints() }, position_changed: function () { this.updatePoints() }, size_changed: function () { this.updatePoints() }, style_changed: function () { this.updatePoints() }, updatePoints: function () {
            var g = this.get("angle"), o = this.get("position"), t = Math.max(this.get("size"), 14), z = this.get("style"); z = z ? z.toUpperCase() : "CLASSIC"; z = A.STYLES[z]; var F =
            []; if (o && typeof g === "number" && t && z) { g = g * Math.PI / 180 - Math.PI / 2; var G = o[0], K = o[1]; t = t / 2; var J = G + Math.cos(g) - G, N = K + Math.sin(g) - K, S = Math.sqrt(Math.pow(J, 2) + Math.pow(N, 2)); g = function (O, L, R, Q) { var T = J / S, P = N / S; return [Math.floor(T * R + -P * Q + O), Math.floor(P * R + T * Q + L)] }; for (G = 0; G < z.length; G++) F.push(g(o[0], o[1], z[G][0] * t / 5, z[G][1] * t / 5)) } this.set("points", F.length ? [F] : null)
        }, draw: function (g) {
            if (g) {
                var o = this.get("points"); if (o) {
                    o = o[0]; for (var t = 0, z = o.length; t < z; t++) g[!t ? "movetoAbs" : "linetoAbs"](o[t][0], o[t][1]);
                    if (this.get("style").toUpperCase() === "OPEN") { if (o = this.get("fillColor")) { t = this.get("fillOpacity"); if (typeof o === "string") o = p.fromHex(o); if (typeof t === "number") o.alpha = t } g.setStrokeColor(o); g.setStrokeWidth(2); g.setFillColor(null) } else g.closePath()
                } else g.movetoAbs(0, 0)
            }
        }
    }); A.STYLES = { CLASSIC: [[-6, 0], [-10, 5], [0, 0], [-10, -5]], BLOCK: [[0, 0], [-6, 4], [-6, -4]], DIAMOND: [[4, 0], [0, 4], [-4, 0], [0, -4]], OPEN: [[-5, 4], [0, 0], [-5, -4]] }; j.prototype._hasMethod = function (g) {
        return this.bridge != null && typeof this.bridge[g] ===
        "function"
    }; j.prototype._invoke = function (g) { if (this._hasMethod(g)) if (arguments.length > 2) throw Error("Graphics._invoke only supports one or two arguments"); else return arguments.length == 1 ? this.bridge[g]() : this.bridge[g](arguments[1]) }; j.prototype.beginRender = function (g) { if (!this.isbegin) { this._lastY = this._lastX = 0; this._arrX = []; this._arrY = []; this.isbegin = true; return this._invoke("beginRender", g) } }; j.prototype.endRender = function (g) {
        if (this.isbegin) {
            this.isbegin = false; var o = null; if (this._arrX.length) {
                o =
                Math.min.apply(Math, this._arrX); var t = Math.max.apply(Math, this._arrX), z = Math.min.apply(Math, this._arrY), F = Math.max.apply(Math, this._arrY); o = new x([new v(o, z), new v(t, F)]); if (g) o = o.intersects(g); g = Math.max(20, this._strokeWidth); o.minX -= g; o.minY -= g; o.maxX += g; o.maxY += g
            } this._bounds = o; return this._invoke("endRender", this._bounds)
        }
    }; j.prototype.clear = function () { this._invoke("clear") }; j.prototype.getBounds = function () { return this._bounds }; j.prototype.renderPathData = function (g) {
        var o = this.bridge; if (o != null) if (this._hasMethod("renderPathData")) o.renderPathData(g);
        else { if (this._pathParser == null) { this._pathParser = new PathParser; this._pathParser.setHandler(this) } this._pathParser.parseData(g) }
    }; j.prototype.setFillColor = function (g) { this._invoke("setFillColor", g) }; j.prototype.setStrokeColor = function (g) { this._invoke("setStrokeColor", g) }; j.prototype.setStrokeWidth = function (g) { this._invoke("setStrokeWidth", g); this._strokeWidth = g }; j.prototype.setStrokeDashStyle = function (g) { this._invoke("setStrokeDashStyle", g) }; j.prototype.setStrokeLinejoin = function (g) {
        this._invoke("setStrokeLinejoin",
        g)
    }; j.prototype.setStrokeLinecap = function (g) { this._invoke("setStrokeLinecap", g) }; j.prototype.arcAbs = function (g, o, t, z, F, G, K) {
        var J = this.bridge; if (J != null && (this._lastX != G || this._lastY != K)) {
            var N, S, O, L, R; if (g != 0 || o != 0) {
                var Q = (this._lastX - G) * 0.5; L = (this._lastY - K) * 0.5; O = t * Math.PI / 180; R = Math.cos(O); var T = Math.sin(O); O = Q * R + L * T; Q = Q * -T + L * R; L = O * O; var P = Q * Q, H = L / (g * g) + P / (o * o); if (H > 1) { H = Math.sqrt(H); g *= H; o *= H } H = g * g; var I = o * o; P = H * P; L = I * L; H = H * I - P - L; P = H < 1.0E-6 ? 0 : Math.sqrt(H / (P + L)); if (z == F) P = -P; L = P * g * Q / o; P = P * -o *
                O / g; N = L * R - P * T + (this._lastX + G) * 0.5; S = L * T + P * R + (this._lastY + K) * 0.5; T = new e(1, 0); R = new e(O - L, Q - P); Q = new e(-O - L, -Q - P); O = T.angleBetween(R); L = R.angleBetween(Q); if (!F && L > 0) L -= 360; else if (F && L < 0) L += 360; R = O + L
            } var M = function (Y) { return new v(N + Math.cos(Y) * g, S + Math.sin(Y) * o) }, U = function (Y, $) { var aa = (Y + $) * 0.5, Z = M(Y), ba = M(aa), ca = M($), da = e.fromPoints(Z, ba); Z = e.fromPoints(Z, ca); if (da.perpendicular(Z).length() > V) { U(Y, aa); W.push(ba); U(aa, $) } else W.push(ba) }, V = this._flatness; Q = Math.PI / 180; T = O * Q; P = R * Q; var W = []; Q = M(T);
            W.push(Q); U(T, P); T = M(P); W.push(T); if (this._hasMethod("arcTo")) J.arcTo(g, o, t, z, F, G, K); else if (t === 0 && this._hasMethod("arcToByRect")) { t = N - g; z = S - o; L = N + g; H = S + o; Q = Math.PI / 180; T = O * Q; P = R * Q; Q = M(T); O = M(P); J.arcToByRect(F, t, z, L, H, Q.x, Q.y, O.x, O.y) } else if (this._hasMethod("quadraticCurveTo")) {
                if (O != R) {
                    t = L > 0 ? 1 : -1; F = t * 45; z = t * Math.floor(L / 45); I = O * Math.PI / 180; for (t = 0; t < z; t++) {
                        T = (O + F) * Math.PI / 180; H = g * Math.cos(I) + N; P = o * Math.sin(I) + S; Q = g * Math.cos(T) + N; L = o * Math.sin(T) + S; var X = (I + T) * 0.5; I = g * Math.cos(X) + N; X = o * Math.sin(X) +
                        S; H = 2 * (I - 0.25 * H - 0.25 * Q); P = 2 * (X - 0.25 * P - 0.25 * L); J.quadraticCurveTo(H, P, Q, L); O += F; I = T
                    } if (O != R) { T = R * Math.PI / 180; H = g * Math.cos(I) + N; P = o * Math.sin(I) + S; Q = g * Math.cos(T) + N; L = o * Math.sin(T) + S; X = (I + T) * 0.5; I = g * Math.cos(X) + N; X = o * Math.sin(X) + S; H = 2 * (I - 0.25 * H - 0.25 * Q); P = 2 * (X - 0.25 * P - 0.25 * L); J.quadraticCurveTo(H, P, Q, L) }
                }
            } else if (this._hasMethod("lineTo")) { t = 0; for (F = W.length; t < F; t++) J.lineTo(W[t].x, W[t].y) } t = 0; for (F = W.length; t < F; t++) { this._arrX.push(W[t].x); this._arrY.push(W[t].y) }
        } this._lastX = G; this._lastY = K; this._lastCommand =
        "A"
    }; j.prototype.arcRel = function (g, o, t, z, F, G, K) { this.arcAbs(g, o, t, z, F, this._lastX + G, this._lastY + K) }; j.prototype.linetoAbs = function (g, o) { this.bridge != null && this._hasMethod("lineTo") && this.bridge.lineTo(g, o); this._lastX = g; this._lastY = o; this._lastCommand = "L"; this._arrX.push(g); this._arrY.push(o) }; j.prototype.linetoRel = function (g, o) { this.linetoAbs(this._lastX + g, this._lastY + o) }; j.prototype.movetoAbs = function (g, o) {
        this.bridge != null && this._hasMethod("moveTo") && this.bridge.moveTo(g, o); this._firstX = g; this._firstY =
        o; this._lastX = g; this._lastY = o; this._lastCommand = "M"; this._arrX.push(g); this._arrY.push(o)
    }; j.prototype.movetoRel = function (g, o) { this.movetoAbs(this._lastX + g, this._lastY + o) }; j.prototype.closePath = function () { this._invoke("close"); this._lastX = this._firstX; this._lastY = this._firstY; this._lastCommand = "Z" }; u.prototype = {
        beginRender: function () { }, endRender: function () { }, moveTo: function () { }, lineTo: function () { }, close: function () { }, clear: function () { }, setFillColor: function (g) { this.fillColor = g }, setStrokeColor: function (g) {
            this.strokeColor =
            g
        }, setStrokeWidth: function (g) { this.strokeWidth = g }, setStrokeDashStyle: function (g) { this.strokeDashStyle = g }, setStrokeLinejoin: function (g) { g = !g ? "" : (g + "").toUpperCase(); this.strokeLinejoin = D.StrokeLinejoin[g] || D.StrokeLinejoin.DEFAULT }, setStrokeLinecap: function (g) { g = !g ? "" : (g + "").toUpperCase(); if (g === "BUTT" && this.type === "vml") g = "FLAT"; else if (g === "FLAT" && this.type !== "vml") g = "BUTT"; this.strokeLinecap = D.StrokeLinecap[g.toUpperCase()] || D.StrokeLinecap.DEFAULT }, ready: function (g) { g && g() }
    }; i.prototype = new u;
    i.prototype.type = "svg"; i.svgns = "http://www.w3.org/2000/svg"; i.prototype._addCommand = function (g, o) { if (!(g === "z" && !this._lastCommand)) { for (var t = [], z = g == this._lastCommand, F = this._lastCommand == "M" && g == "L", G = 0; G < o.length; G++) t[G] = o[G]; z || F ? this.pathData.push(t.join(",")) : this.pathData.push(g + t.join(",")); this._lastCommand = g } }; i.prototype.beginRender = function (g) { this.pathData = []; this.container = g; this._lastCommand = null }; i.prototype._getViewboxByBounds = function (g) {
        var o = [0, 0, 0, 0]; if (g && !g.isEmpty()) {
            o[0] =
            Math.round(g.minX); o[1] = Math.round(g.minY); o[2] = Math.round(Math.abs(g.maxX - g.minX)); o[3] = Math.round(Math.abs(g.maxY - g.minY))
        } return o
    }; i.prototype.endRender = function (g) {
        var o = this.pathData.join(" "), t = this.element, z = null; if (this.fillColor != null || this.strokeColor != null && this.strokeWidth > 0) {
            if (!t) {
                t = this.element = document.createElementNS(i.svgns, "svg"); t.style.cssText = "position:absolute;"; t.setAttribute("version", "1.1"); t.setAttribute("baseProfile", "full"); t.setAttribute("pointer-events", "none"); z = document.createElementNS(i.svgns,
                "path"); z.setAttribute("pointer-events", "auto"); t._path = z
            } if (g) { z = this._getViewboxByBounds(g); g = t.style; g.position = "absolute"; g.left = z[0] + "px"; g.top = z[1] + "px"; g.width = z[2] + "px"; g.height = z[3] + "px"; t.setAttribute("viewBox", z.join(" ")) } z = t._path; z.setAttributeNS(null, "d", o || "M 0,0 0,0"); if (this.fillColor != null) { if (this.fillColor instanceof p) { o = this.fillColor.toHex(); z.setAttributeNS(null, "fill-opacity", this.fillColor.alpha) } else o = this.fillColor; z.setAttributeNS(null, "fill", o) } else z.setAttributeNS(null,
            "fill", "none"); if (this.strokeColor != null && this.strokeWidth > 0) { if (this.strokeColor instanceof p) { o = this.strokeColor.toHex(); z.setAttributeNS(null, "stroke-opacity", this.strokeColor.alpha) } else o = this.strokeColor; z.setAttributeNS(null, "stroke", o); o = parseInt(this.strokeWidth, 10); z.setAttributeNS(null, "stroke-width", o); if (g = this.strokeDashStyle) { if (g === "dash") g = o + "," + o * 2; z.setAttribute("stroke-dasharray", g) } } z.setAttribute("stroke-linejoin", this.strokeLinejoin); z.setAttribute("stroke-linecap", this.strokeLinecap);
            if (this.transform != null) { o = this.transform.getTransformText(); z.setAttributeNS(null, "transform", o) } z.parentNode || t.appendChild(z); this.container && this.container.appendChild(t); return t
        }
    }; i.prototype.arcTo = function () { this._addCommand("A", arguments) }; i.prototype.curveTo = function () { this._addCommand("C", arguments) }; i.prototype.lineTo = function () { this._addCommand("L", arguments) }; i.prototype.moveTo = function () { this._addCommand("M", arguments) }; i.prototype.quadraticCurveTo = function () { this._addCommand("Q", arguments) };
    i.prototype.close = function () { this._addCommand("z", arguments) }; i.prototype.clear = function () { this.element && this.element.parentNode && this.element.parentNode.removeChild(this.element) }; i.isSupported = function () { var g = false; if (document.createElementNS) g = document.createElementNS(i.svgns, "svg").x != null; return g }; k.prototype = new u; k.prototype.type = "canvas"; k.prototype.setStrokeDashStyle = function (g) { this.strokeDashStyle = g; this.curveTo = this.quadraticCurveTo = false }; k.prototype._addCommand = function (g, o) {
        this._commands.push({
            command: g,
            args: o
        })
    }; k.prototype.beginRender = function (g) { this.clear(); this._canvas.beginPath(); this._commands = []; this._dashIndex = 0; if (g) this.container = g }; k.prototype.endRender = function (g) {
        if (this.fillColor != null || this.strokeColor != null && this.strokeWidth > 0) {
            var o = this.element; if (g) { var t = Math.abs(g.maxY - g.minY), z = g.minX, F = g.minY; o.width = Math.abs(g.maxX - g.minX); o.height = t; g = o.style; g.left = z + "px"; g.top = F + "px" } if (this._commands) {
                var G, K; g = [5, 5]; o = 0; t = this._commands.length; for (var J; o < t; o++) {
                    J = this._commands[o];
                    switch (J.command) { case "curveTo": J.args[5] -= F; J.args[4] -= z; case "quadraticCurveTo": J.args[3] -= F; J.args[2] -= z; case "lineTo": case "moveTo": J.args[1] -= F; J.args[0] -= z } if (this.strokeDashStyle === "dash") { var N = J.args[0], S = J.args[1]; if (J.command === "lineTo") { J.command = "dashedLine"; J.args = [G, K, N, S, g] } G = N; K = S } this._canvas[J.command].apply(this._canvas, J.args)
                }
            } if (this.fillColor != null) { this._canvas.fillStyle = this.fillColor instanceof p ? this.fillColor.toRGBA() : this.fillColor; this._canvas.fill() } if (this.strokeColor !=
            null && this.strokeWidth > 0) { this._canvas.strokeStyle = this.strokeColor instanceof p ? this.strokeColor.toRGBA() : this.strokeColor; this._canvas.lineWidth = this.strokeWidth; this._canvas.lineCap = this.strokeLinecap; this._canvas.lineJoin = this.strokeLinejoin; this._canvas.stroke() } this.container && this.container.appendChild(this.element)
        } return this.element
    }; k.prototype.lineTo = function (g, o) { this._addCommand("lineTo", [g, o]) }; k.prototype.moveTo = function (g, o) { this._addCommand("moveTo", [g, o]) }; k.prototype.curveTo = function (g,
    o, t, z, F, G) { this._addCommand("bezierCurveTo", [g, o, t, z, F, G]) }; k.prototype.quadraticCurveTo = function (g, o, t, z) { this._addCommand("quadraticCurveTo", [g, o, t, z]) }; k.prototype.close = function () { this._addCommand("closePath") }; k.prototype.clear = function () { if (this.element) { this._canvas.clearRect(0, 0, this.element.width, this.element.height); this.element.parentNode && this.element.parentNode.removeChild(this.element) } if (this._command) this._command = [] }; k.isSupported = function () {
        var g = document.createElement("canvas"),
        o = false; if (g.getContext != null) o = g.getContext("2d") != null; return o
    }; var E = window.CanvasRenderingContext2D && CanvasRenderingContext2D.prototype; if (E && E.lineTo) E.dashedLine = function (g, o, t, z, F) { F || (F = [5, 5]); var G = F.length; t = t - g; z = z - o; var K = Math.abs(t) > Math.abs(z), J = K ? z / t : t / z; this.moveTo(g, o); for (var N = Math.sqrt(t * t + z * z), S = 0; N >= 0.1;) { var O = Math.min(N, F[S % G]), L = Math.sqrt(O * O / (1 + J * J)); if (K) { if (t < 0) L = -L; g += L; o += J * L } else { if (z < 0) L = -L; g += J * L; o += L } this[S % 2 == 0 ? "lineTo" : "moveTo"](g, o); N -= O; S++ } }; n.prototype = new u;
    n.prototype.type = "vml"; n.prototype.beginRender = function (g) { this.pathData = []; if (g) this.container = g }; n.prototype.endRender = function () {
        if (this.fillColor != null || this.strokeColor != null && this.strokeWidth > 0) {
            var g = this.element, o = null, t = null; if (!g) { this.container.insertAdjacentHTML("beforeEnd", '<v:shape style="width:1px;height:1px;position:absolute;display:inline-block;"><v:stroke></v:stroke><v:fill></v:fill></v:shape>'); g = this.element = this.container.lastChild; g.coordsize = "1 1" } t = g.firstChild; o = g.lastChild;
            if (this.fillColor != null) { g.filled = true; if (this.fillColor instanceof p) { o.color = this.fillColor.toHex(); o.opacity = this.fillColor.alpha } else { o.color = this.fillColor; o.opacity = 1 } } else g.filled = false; if (this.strokeColor != null && this.strokeWidth > 0) { if (this.strokeColor instanceof p) { t.color = this.strokeColor.toHex(); t.opacity = this.strokeColor.alpha } else { t.color = this.strokeColor; t.opacity = 1 } o = parseInt(this.strokeWidth, 10); t.weight = o + "px"; if (o = this.strokeDashStyle) { if (o === "dash") o = "1,1"; t.dashstyle = o } } else t.setAttribute("on",
            false); t.joinstyle = this.strokeLinejoin; t.endcap = this.strokeLinecap; g.path = this.pathData.join(" ") || "m0,0"; if (this.container && (!g.parentNode || g.parentNode !== this.container)) this.container.appendChild(g); return g
        }
    }; n.prototype.curveTo = function (g, o, t, z, F, G) { g = Math.round(g); o = Math.round(o); t = Math.round(t); z = Math.round(z); F = Math.round(F); G = Math.round(G); this.pathData.push("c" + [g, o, t, z, F, G].join(",")) }; n.prototype.lineTo = function (g, o) { g = Math.round(g); o = Math.round(o); this.pathData.push("l" + g + "," + o) }; n.prototype.moveTo =
    function (g, o) { g = Math.round(g); o = Math.round(o); this.pathData.push("m" + g + "," + o) }; n.prototype.arcToByRect = function (g, o, t, z, F, G, K, J, N) { g = g === 0 ? "at " : "wr "; o = Math.round(o); t = Math.round(t); z = Math.round(z); F = Math.round(F); G = Math.round(G); K = Math.round(K); J = Math.round(J); N = Math.round(N); this.pathData.push(g + [o, t, z, F, G, K, J, N].join(",")) }; n.prototype.close = function () { this.pathData.push("x") }; n.prototype.clear = function () { this.element && this.element.parentNode && this.element.parentNode.removeChild(this.element) };
    n.prototype.ready = function (g) { if (n.initialized !== true) (n._queue || (n._queue = [])).push(function (o) { return function () { o() } }(g)); if (n.initialized !== "loading") { n.initialized = "loading"; (function () { try { document.namespaces.v || document.namespaces.add("v", "urn:schemas-microsoft-com:vml", "#default#VML"); n.initialized = true; delete n.prototype.ready; for (var o = n._queue, t = null; t = o.shift() ;) t(); delete n._queue } catch (z) { setTimeout(arguments.callee, 100) } })() } }; n.isSupported = function () {
        var g = /msie (\d+\.\d+)/i.test(navigator.appVersion) ?
        document.documentMode || +RegExp.$1 : 0; return g && g >= 6
    }; e.prototype.angleBetween = function (g) { var o = Math.acos((this.x * g.x + this.y * g.y) / (Math.sqrt(this.x * this.x + this.y * this.y) * Math.sqrt(g.x * g.x + g.y * g.y))); if (this.x * g.y - g.x * this.y < 0) o = -o; return 180 * o / Math.PI }; e.prototype.dot = function (g) { return this.x * g.x + this.y * g.y }; e.prototype.perpendicular = function (g) { g = this.project(g); g.x = this.x - g.x; g.y = this.y - g.y; return g }; e.prototype.project = function (g) { var o = g.dot(this) / g.dot(g); return g.scale(o) }; e.prototype.scale =
    function (g) { return new e(this.x * g, this.y * g) }; e.prototype.isZeroVector = function () { return this.x == 0 && this.y == 0 }; e.prototype.length = function () { return Math.sqrt(this.x * this.x + this.y * this.y) }; e.fromPoints = function (g, o) { return new e(o.x - g.x, o.y - g.y) }; b.Config = { maxChildPoints: 10, minBufferWidth: 10 }; b.prototype = {
        getBounds: function () {
            if (this.bounds) return this.bounds; else if (this.points) {
                for (var g = [], o = [], t = this.pointsNum; t--;) { g.push(this.points[t][0]); o.push(this.points[t][1]) } t = Math.min.apply(Math, g) - this.width;
                var z = Math.min.apply(Math, o) - this.width; g = Math.max.apply(Math, g) + this.width; o = Math.max.apply(Math, o) + this.width; return this.bounds = new c.Bounds([new v(t, z), new v(g, o)])
            }
        }, getChildSegs: function () { if (this.childSegs) return this.childSegs; else if (this.pointsNum > b.Config.maxChildPoints) { var g = parseInt(this.pointsNum / 2); return this.childSegs = [new b(this.points.slice(0, g), this.width, this.index), new b(this.points.slice(g - 1, this.pointsNum), this.width, this.index + g - 1)] } }, getPointOnLine: function (g) {
            var o = this.getBounds(),
            t = null; if (o && o.containsPoint(g)) if (o = this.getChildSegs()) for (var z = 0; z < 2; z++) { if (t = o[z].getPointOnLine(g)) break } else {
                t = this.points; var F = [g.x, g.y]; g = Number.MAX_VALUE; var G, K, J, N, S, O, L, R; o = F[0]; F = F[1]; for (var Q = 1, T = t.length; Q < T; Q++) {
                    J = t[Q - 1]; N = t[Q]; if (J && N) {
                        S = J[0]; O = J[1]; L = N[0]; R = N[1]; if (J[0] !== N[0]) { J = (R - O) / (L - S); N = R - J * L; J = Math.abs(J * o + N - F) / Math.sqrt(J * J + 1) } else J = Math.abs(o - L); N = Math.pow(R - O, 2) + Math.pow(L - S, 2); L = Math.pow(R - F, 2) + Math.pow(L - o, 2); S = Math.pow(O - F, 2) + Math.pow(S - o, 2); O = Math.pow(J, 2); R =
                        L - O + S - O; if (R > N) J = Math.sqrt(Math.min(L, S)); if (g === null || g > J) { K = Math.sqrt(S - O) / Math.sqrt(N); G = Math.sqrt(L - O) / Math.sqrt(N); g = J; z = Q } g = Math.min(g, J)
                    }
                } if (g <= this.width) { if (K > 1) K = 1; if (G > 1) K = 0; g = t[z - 1][1] - t[z][1]; G = t[z - 1][0] - (t[z - 1][0] - t[z][0]) * K; K = t[z - 1][1] - g * K; t = [G, K, z - 1] } else t = void 0; if (t) t[2] += this.index
            } return t
        }
    }; c.Canvas = q; c.CanvasShape = C; c.CanvasPolyline = r; c.CanvasCircle = w; c.CanvasPolygon = y; c.CanvasArrow = A
})(__MapNS__); (function (c) {
    function s(j, u, i) { i = i || 0; for (var k = j.length; i < k; i++) if (j[i] === u) return i; return -1 } var q = c.Event; c.Copyright = function (j, u, i, k, n) { this.text = j; this.bounds = u; this.minZoom = i; this.maxZoom = k || Number.MAX_VALUE; this.exclude = n }; c.CopyrightCollection = __MapNSImpl__.Class({
        initialize: function (j, u) { this.cpcol = []; this.prefix = j; this.defCopyright = u }, addCopyright: function (j) { this.cpcol.push(j); q.trigger(this, "newcopyright", [j]) }, getCopyrights: function (j, u) {
            for (var i = [], k, n = 0; n < this.cpcol.length; n++) {
                k =
                this.cpcol[n]; var e = k.text; if (k.exclude && u >= k.minZoom && u <= k.maxZoom) if (k.bounds.intersects(j)) { i = [this.defCopyright.text]; break } else s(i, e) < 0 && i.push(e); else u >= k.minZoom && u <= k.maxZoom && k.bounds.intersects(j) && s(i, e) < 0 && i.push(e)
            } if (this.defCopyright && !i.length) i = [this.defCopyright.text]; return i
        }, getCopyrightNotice: function (j, u) { var i = this.getCopyrights(j, u); if (i.length === 0) return null; return (typeof this.prefix === "string" ? this.prefix + " " : "") + i.join(", ") }
    })
})(__MapNS__); (function (c) {
    var s = __MapNSImpl__.Util; c.Lng = __MapNSImpl__.Class({
        initialize: function (q, j) { if (q == -180 && j != 180) q = 180; if (j == -180 && q != 180) j = 180; this.minX = q; this.maxX = j }, isEmpty: function () { return this.minX - this.maxX == 360 }, intersects: function (q) { var j = this.minX, u = this.maxX; if (this.isEmpty() || q.isEmpty()) return false; if (j > u) return q.minX > q.maxX || q.minX <= u || q.maxX >= j; else { if (q.minX > q.maxX) return q.minX <= u || q.maxX >= j; return q.minX <= u && q.maxX >= j } }, contains: function (q) {
            if (q == -180) q = 180; var j = this.minX, u = this.maxX;
            return this.minX > this.maxX ? (q >= j || q <= u) && !this.isEmpty() : q >= j && q <= u
        }, extend: function (q) { if (!this.contains(q)) if (this.isEmpty()) this.minX = this.maxX = q; else if (this.distance(q, this.minX) < this.distance(this.maxX, q)) this.minX = q; else this.maxX = q }, equals: function (q) { if (this.isEmpty()) return q.isEmpty(); return Math.abs(q.minX - this.minX) % 360 + Math.abs(q.maxX - this.maxX) % 360 <= 1.0E-9 }, distance: function (q, j) { var u = j - q; if (u >= 0) return u; return j + 180 - (q - 180) }, center: function () {
            var q = (this.minX + this.maxX) / 2; if (this.minX >
            this.maxX) q = s.getLoopNumber(q, -180, 180); return q
        }
    })
})(__MapNS__); (function (c) {
    c.Lat = __MapNSImpl__.Class({
        initialize: function (s, q) { this.minY = s; this.maxY = q }, isEmpty: function () { return this.minY > this.maxY }, intersects: function (s) { var q = this.minY, j = this.maxY; return q <= s.minY ? s.minY <= j && s.minY <= s.maxY : q <= s.maxY && q <= j }, contains: function (s) { return s >= this.minY && s <= this.maxY }, extend: function (s) { if (this.isEmpty()) this.maxY = this.minY = s; else if (s < this.minY) this.minY = s; else if (s > this.maxY) this.maxY = s }, equals: function (s) {
            if (this.isEmpty()) return s.isEmpty(); return Math.abs(s.minY -
            this.minY) + Math.abs(this.maxY - s.maxY) <= 1.0E-9
        }, center: function () { return (this.maxY + this.minY) / 2 }
    })
})(__MapNS__); (function (c) {
    var s = __MapNSImpl__.Util; __MapNSImpl__.Interfaces.registInterface("LatLng", ["getLng", "getLat", "equals", "toUrlValue"]); c.LatLng = __MapNSImpl__.Class({
        initialize: function (q, j, u) { q -= 0; j -= 0; if (!u) { q = s.getNumberInRange(q, -90, 90); j = s.getLoopNumber(j, -180, 180) } this.lng = j; this.lat = q }, getLng: function () { return this.lng }, getLat: function () { return this.lat }, equals: function (q) { if (!q) return false; return s.isEquals(this.getLat(), q.getLat()) && s.isEquals(this.getLng(), q.getLng()) }, getDistanceTo: function (q) {
            var j =
            function (k) { return Math.PI / 180 * k }, u = j(q.getLat() - this.getLat()), i = j(q.getLng() - this.getLng()); q = Math.sin(u / 2) * Math.sin(u / 2) + Math.cos(j(this.getLat())) * Math.cos(j(q.getLat())) * Math.sin(i / 2) * Math.sin(i / 2); return 6378137 * 2 * Math.asin(Math.min(1, Math.sqrt(q)))
        }, toUrlValue: function (q) { q = q || 6; return this.getLat().toFixed(q) + "," + this.getLng().toFixed(q) }, toString: function () { return this.getLat() + ", " + this.getLng() }
    })
})(__MapNS__); (function (c) {
    var s = c.LatLng, q = c.Lng, j = c.Lat, u = __MapNSImpl__.Util; c.LatLngBounds = __MapNSImpl__.Class({
        initialize: function (i, k) { if (i && !k) k = i; if (i) { var n = u.getNumberInRange(i.getLat(), -90, 90), e = u.getNumberInRange(k.getLat(), -90, 90); this.lat = new j(n, e); n = i.getLng(); e = k.getLng(); if (e - n >= 360) this.lng = new q(-180, 180); else { n = u.getLoopNumber(n, -180, 180); e = u.getLoopNumber(e, -180, 180); this.lng = new q(n, e) } } else { this.lat = new j(1, -1); this.lng = new q(180, -180) } }, getCenter: function () {
            return new s(this.lat.center(),
            this.lng.center())
        }, getNorthEast: function () { return new s(this.lat.maxY, this.lng.maxX, true) }, getSouthWest: function () { return new s(this.lat.minY, this.lng.minX, true) }, intersects: function (i) { return this.lat.intersects(i.lat) && this.lng.intersects(i.lng) }, union: function (i) { if (!i.isEmpty()) { this.extend(i.getNorthEast()); this.extend(i.getSouthWest()); return this } }, equals: function (i) { if (!i) return false; return this.lat.equals(i.lat) && this.lng.equals(i.lng) }, contains: function (i) {
            var k = this.getSouthWest, n = this.getNorthEast,
            e; if (i instanceof c.LatLngBounds) { e = i.getSouthWest(); i = i.getNorthEast(); return e.lat >= k.lat && i.lat <= n.lat && e.lng >= k.lng && i.lng <= n.lng } else return this.lat.contains(i.getLat()) && this.lng.contains(i.getLng())
        }, isEmpty: function () { return this.lat.isEmpty() || this.lng.isEmpty() }, extend: function (i) { if (this.isEmpty()) { var k = i.getLat(); i = i.getLng(); this.lat = new j(k, k); this.lng = new q(i, i) } else { this.lat.extend(i.getLat()); this.lng.extend(i.getLng()); return this } }, toString: function () {
            return this.getSouthWest() +
            ", " + this.getNorthEast()
        }
    })
})(__MapNS__); (function (c) { c.LatLngCircles = __MapNSImpl__.Class({ initialize: function (s, q) { this.private_ = { center: null, radius: null }; this.private_.center = s; this.private_.radius = q }, getCenter: function () { return this.private_.center }, getRadius: function () { return this.private_.radius } }) })(__MapNS__); (function (c) {
    var s = __MapNSImpl__.Synchronize, q = __MapNSImpl__.Config, j = c.Size, u = c.MVCObject, i = u.checkers; c.MapType = __MapNSImpl__.Class({
        initialize: function (k) {
            var n = { name: "", layers: null, projection: new c.Projection, alt: "", maxZoom: q.zoomMax, minZoom: q.zoomMin, radius: 6378137, tileSize: new j(256, 256), system: false, fullLoad: true }; k = s.fill(k, n); this.layers = k.layers; this.projection = k.projection; this.name = k.name; this.alt = k.alt; this.minZoom = k.minZoom; this.maxZoom = k.maxZoom; this.tileSize = k.tileSize; this.radius =
            k.radius; this.fullLoad = k.fullLoad; this.system = k.system
        }, getCopyrights: function (k, n) { var e = this.layers, b = "", d, f; for (f = e.length; f--;) if ((d = e[f].getCopyright(k, n)) && b.indexOf(d) === -1) b += b === "" ? d : " " + d; return b }
    }); c.MapTypeId = { ROADMAP: "roadmap", HYBRID: "hybrid", SATELLITE: "satellite" }; c.MapTypeRegistry = __MapNSImpl__.Class(u, {
        initialize: function () { u.apply(this) }, set: function (k, n) {
            if (n != null && !(n && i.isNumber(n.maxZoom) && n.tileSize && n.tileSize.width && n.tileSize.height)) throw Error("\u5b9e\u73b0 soso.maps.MapType \u6240\u9700\u7684\u503c");
            return u.prototype.set.apply(this, arguments)
        }
    })
})(__MapNS__); (function (c) {
    function s(e) { return e && e.width && e.height ? e : typeof e === "number" ? new k(e, e) : new k(i.DEFAULT_TILE_SIZE, i.DEFAULT_TILE_SIZE) } function q(e, b, d) { var f = n, l; l = e.width; b = b; if (b < 0) { b = b % l; b = b !== 0 ? l + b : 0 } else b = b >= l ? b % l : b; l = b; e = e.height; d = d; if (d < 0) { d = d % e; d = d !== 0 ? e + d : 0 } else d = d >= e ? d % e : d; return new f(l, d) } function j(e, b, d) { e = 1 << e; return q(new k(e, e), b, d) } var u = c.LatLng, i = __MapNSImpl__.Config, k = c.Size, n = c.Point; c.Projection = __MapNSImpl__.Class({
        initialize: function () { }, fromPointToLatLng: function (e, b,
        d, f) { var l = s(f); f = Math.PI * i.EARTH_RADIUS; var a = Math.pow(2, Math.floor(b)); b = a + (a * 2 - a) * (b % 1); a = f * 2; a = { x: a / l.width / b, y: a / l.height / b }; d || (e = q(new k(b * l.width, b * l.height), e.x, e.y)); l = e.x * a.x - f; b = e.y * a.y - f; b = -b; e = l / f * 180; f = b / f * 180; f = 180 / Math.PI * (2 * Math.atan(Math.exp(f * Math.PI / 180)) - Math.PI / 2); return new u(f, e, d) }, fromLatLngToPoint: function (e, b, d) { d = s(d); var f = Math.sin(e.lat * Math.PI / 180); return new n((e.lng + 180) / 360 * d.width * Math.pow(2, b), (0.5 - Math.log((1 + f) / (1 - f)) / (4 * Math.PI)) * d.height * Math.pow(2, b)) }, fromLatLngToTile: function (e,
        b, d) { d = s(d); e = this.fromLatLngToPoint(e, b, d); return j(b, Math.floor(e.x / d.width), Math.floor(e.y / d.height), d) }, fromTileToLatLng: function (e, b, d) { d = s(d); e = j(b, e.x, e.y, d); return this.fromPointToLatLng(new n(e.x * d.width, e.y * d.height), b, false, d) }
    })
})(__MapNS__); (function (c) {
    function s(u, i, k, n) { var e = u.get("projection"), b = u.get("width") / 2, d = u.get("height") / 2; k = k || u.get("center"); u = u.get("zoom"); b = i.getX() - b; i = i.getY() - d; d = e.fromLatLngToPoint(k, u); return e.fromPointToLatLng(new j(d.x + b, d.y + i), u, n) } function q(u, i, k) { var n = u.get("projection"), e = u.get("width") / 2, b = u.get("height") / 2; k = k || u.get("center"); u = u.get("zoom"); i = n.fromLatLngToPoint(i, u); k = n.fromLatLngToPoint(k, u); n = i.getX() - k.getX(); i = i.getY() - k.getY(); return new j(e + n, b + i) } var j = c.Point; c.MapCanvasProjection =
    __MapNSImpl__.Class(c.MVCObject, { initialize: function () { c.MVCObject.apply(this) }, fromContainerPixelToLatLng: function (u, i) { return s(this, u, null, i) }, fromLatLngToContainerPixel: function (u) { return q(this, u) }, fromDivPixelToLatLng: function (u) { var i = this.get("origin"); return s(this, u, i) }, fromLatLngToDivPixel: function (u) { var i = this.get("origin"); return q(this, u, i) } })
})(__MapNS__); (function (c) {
    var s = __MapNSImpl__.Synchronize; c.Overlay = __MapNSImpl__.Class(c.MVCView, {
        initialize: function (q) { c.MVCObject.apply(this); q = s.fill(q, { noClip: true, smoothFactor: 1 }); this.setOptions(q) }, getPanes: function () {
            return this.get("mapPane_") ? {
                mapPane: this.get("mapPane_"), overlayLayer: this.get("overlayLayer_"), overlayShadow: this.get("overlayShadow_"), overlayImage: this.get("overlayImage_"), floatShadow: this.get("floatShadow_"), overlayMouseTarget: this.get("overlayMouseTarget_"), floatPane: this.get("floatPane_"),
                canvas: this.get("canvas_")
            } : null
        }, draw: function () { }, setMap: function (q) { this.set("map", q) }, getMap: function () { return this.get("map") }, getProjection: function () { var q = this.get("map"); return q && q.get("mapCanvasProjection_") }, construct: function () { }, destroy: function () { }, map_changed: function () {
            var q = this.get("map"), j = ["viewbox_", "originPosition_", "mapPane_", "overlayLayer_", "overlayShadow_", "canvas_", "overlayImage_", "floatShadow_", "overlayMouseTarget_", "floatPane_", "overlayRedraw_", "layerRedraw_", "mapCanvasProjection_"];
            if (q) this.bindsTo(j, q); else { this.destroy(); this.set("constructed_", false); this.unbindAll(j) }
        }, overlayRedraw__changed: function () { if (this.get("originPosition_")) { if (!this.get("constructed_")) { this.construct(); this.set("constructed_", true) } this.draw() } }, layerRedraw__changed: function () { this.set("originalPoints_", null) }
    })
})(__MapNS__); (function (c) {
    var s = c.MVCObject.checkers, q = __MapNSImpl__.Interfaces, j = __MapNSImpl__.Util, u = __MapNSImpl__.Synchronize; c.Control = __MapNSImpl__.Class(c.MVCObject, {
        initialize: function (i) { c.MVCObject.apply(this); var k = { content: "", margin: new c.Size(0, 0), align: 0, visible: true, zIndex: 0 }; i = u.fill(i, k); k = i.map; i.map = null; this.setOptions(i); k && this.set("map", k) }, controlContainer__changed: function () {
            var i = this.get("controlContainer_"); if (i) {
                var k = document.createElement("div"); k.style.cssText = "position:absolute;z-index:" +
                this.get("zIndex") + ";"; i.appendChild(k); this.set("container_", k)

            }
        }, changed: function (i) { if (i === "align" || i === "margin" || i === "style" || i === "viewWidth_" || i === "viewHeight_" || i === "content") this.redraw(); if (i === "visible" && this.get("container_")) if (this.get(i)) this.get("container_").style.display = ""; else this.get("container_").style.display = "none" }, redraw: function () { var i = this.get("container_"); j.setPositionByAlign(i, this.get("align"), this.get("margin")); this.draw && this.draw() }, content_changed: function () { this.notify("container_") },
        container__changed: function () { var i = this.get("content"), k = this.get("container_"); if (i && k) { if (typeof i === "string") k.innerHTML = i; else if (i.parentNode != k) { k.innerHTML = ""; k.appendChild(i) } this.redraw() } k && this.notify("visible") }, map_changed: function () {
            var i = this.get("map"); if (i) { this.bindTo("controlContainer_", i, "mapContainer_"); this.bindTo("viewWidth_", i); this.bindTo("viewHeight_", i); this.construct && this.construct() } else {
                i = this.get("controlContainer_"); var k = this.get("container_"); i && k && i.removeChild(k);
                this.destroy && this.destroy(); this.unbind("controlContainer_"); this.unbind("viewWidth_"); this.unbind("viewHeight_")
            }
        }
    }); s = { content: null, margin: s.checkInterface(q.Size), align: s.isNumber, zIndex: s.isNumber, visible: s.isBoolean, map: null }; c.MVCObject.publicProperties(c.Control, s)
})(__MapNS__); (function (c) {
    var s = __MapNSImpl__.Util, q = __MapNSImpl__.Config, j = c.LatLng, u = c.MVCObject, i = c.LatLngBounds; c.BaseService = __MapNSImpl__.Class(u, {
        initialize: function () { this.queryType = ""; u.apply(this) }, send: function (k, n) {
            var e = q.SERVICE_URL; if (this.queryType === "geoc" || this.queryType === "rgeoc") e = e + this.queryType + "/?" + k.join("&") + "&output=jsonp&fr=mapapi"; else { k.push("qt=" + this.queryType); e = e + "?" + k.join("&") + "&output=jsonp&fr=mapapi" } var b = c.ObjectLoader.get(); c.Event.bind(b, "loaded", this, function () {
                return function (d) {
                    this.onResult({
                        object: d,
                        request: n.request, callback: n.callback
                    })
                }
            }.call(this)); b.request(e)
        }, fromProjectionToLatLng: function (k, n) { var e = s.latFromProjectionTo4326(n), b = s.lngFromProjectionTo4326(k); return new j(e, b) }, fromSegmentToPath: function (k) { k = k.split(";"); for (var n = [], e = new i, b = 0, d = k.length; b < d; b++) { var f = k[b].split(","); f = new j(f[1], f[0]); n.push(f); e.extend(f) } return { path: n, bounds: e } }, fromDestToPoi: function (k) {
            var n = new c.Poi; n.id = k.uid; n.name = k.query || k.name; n.latLng = new j(k.pointy, k.pointx); n.type = k.poitype; n.address =
            k.addr || ""; return n
        }, fromDestToString: function (k) { var n = []; if (!checkers.isNull(k)) { checkers.isInstanceOf(j)(k) && (n.push(1), n.push(""), n.push(k.getLng() + "," + k.getLat()), n.push("")); checkers.isString(k) && (n.push(2), n.push(""), n.push(""), n.push(encodeURIComponent(k))); checkers.isInstanceOf(c.Poi)(k) && (n.push(1), n.push(""), n.push(k.latLng.getLng() + "," + k.latLng.getLat()), n.push(encodeURIComponent(k.name))) } return n.join("$$") }, fromDistToString: function (k) {
            var n = ""; if (k > 0 && k <= 10) n = k + __MapNSImpl__.RC.Units.m;
            else if (k > 10) n = k < 1E3 ? (k / 10).toFixed(1) * 10 + __MapNSImpl__.RC.Units.m : (k / 1E3).toFixed(1) + __MapNSImpl__.RC.Units.km; return n
        }, fromTimeToString: function (k) { var n = ""; if (k > 0 && k < 60) n = k + __MapNSImpl__.RC.Units.min; else if (k > 60) n = Math.floor(k / 60) + __MapNSImpl__.RC.Units.hour + this.fromTimeToString(k - Math.floor(k / 60) * 60); return n }
    }); c.Poi = function () { }; c.Distance = function () { this.text = ""; this.value = 0 }; c.Duration = function () { this.text = ""; this.value = 0 }; c.Turning = function () { this.text = ""; this.latLng = null }; c.Region = function () { };
    c.PoiType = { NORMAL: 0, BUS_STATION: 1, SUBWAY_STATION: 2, BUS_LINE: 3, DISTRICT: 4, DOCK: "DOCK" }
})(__MapNS__); (function (c) {
    var s = c.MVCObject.checkers, q = c.MVCObject, j = c.Event, u = __MapNSImpl__.Synchronize; c.Paging = __MapNSImpl__.Class(q, {
        initialize: function (i) { q.apply(this); i = u.fill(i, { pageIndex: 1, pageSize: 3, totalRows: 10, data: {}, container: null }); this.setOptions(i) }, pageUndate: function (i) {
            for (var k = Math.ceil(this.get("totalRows") / this.get("pageSize")), n = this.get("panel") ; this.get("panel").hasChildNodes() ;) { j.clearListeners(n.firstChild, "click"); n.removeChild(n.firstChild) } i > 1 && this.addNewAnchor("\u4e0a\u4e00\u9875",
            3); if (k <= 5) for (n = 1; n <= k; n++) i == n ? this.addNewAnchor("[" + n + "]") : this.addNewAnchor(n); else {
                if (i <= 3) { for (n = 1; n < i; n++) this.addNewAnchor(" " + n + ""); this.addNewAnchor("[" + i + "]"); for (n = i + 1; n <= 5; n++) this.addNewAnchor(" " + n + ""); this.addNewAnchor("\u5c3e\u9875", 2) } if (i > 3 && i <= k - 3) { this.addNewAnchor("\u9996\u9875", 1); this.addNewAnchor(" " + (i - 2) + ""); this.addNewAnchor(" " + (i - 1) + ""); this.addNewAnchor(" [" + i + "]"); this.addNewAnchor(" " + (i + 1) + ""); this.addNewAnchor(" " + (i + 2) + ""); this.addNewAnchor("\u5c3e\u9875", 2) } if (i >
                k - 3) { this.addNewAnchor("\u9996\u9875", 1); for (n = k - 4; n < i; n++) this.addNewAnchor(" " + n + ""); this.addNewAnchor("[" + i + "]"); for (n = i + 1; n <= k; n++) this.addNewAnchor(" " + n + "") }
            } i < k && this.addNewAnchor("\u4e0b\u4e00\u9875", 4)
        }, getPageIndexByPageText: function (i) {
            var k, n = i.innerHTML; this.get("pageIndex") == undefined && this.set("pageIndex", 0); if (i.specialIndex) switch (i.specialIndex) {
                case 1: k = 1; break; case 2: k = Math.ceil(this.get("totalRows") / this.get("pageSize")); break; case 3: k = parseInt(this.get("pageIndex")); break; case 4: k =
                parseInt(this.get("pageIndex")) + 2
            } else if (n || n > -1) k = parseInt(n.match(/\d+/g)[0]); return k
        }, addNewAnchor: function (i, k) { var n = document.createElement("a"); n.innerHTML = " " + i + " "; n.href = "javascript:void(0);"; n.style.textDecoration = "none"; k && (n.specialIndex = k); var e = this; j.addDomListener(n, "click", function (b) { j.preventDefault(b); e.set("pageIndex", e.getPageIndexByPageText(this) - 1); e.set("pageTarget", true) }); this.get("panel").appendChild(n) }
    }); q.publicProperties(c.Paging, {
        pageIndex: s.isNumber, pageSize: s.isNumber,
        totalRows: s.isNumber, panel: s.isHtmlControlOrNull
    })
})(__MapNS__); (function (c) {
    function s() { this.HEADER = document.getElementsByTagName("head")[0] } var q = __MapNSImpl__.Util, j = c.Event, u = __MapNSImpl__.Synchronize, i = 0; s.prototype.request = function (k, n) {
        n = u.fill(n, { jsonp: true, objName: "OLR", charset: "gbk" }); this.objName = n.objName; this.charset = n.charset; if (n.jsonp) { this.callback = "cb" + ((new Date).getTime() + i++).toString(36); k += "&cb=" + this.callback; this.objName = n.objName + this.callback; var e = this; window[this.callback] = function (b) { window[e.objName] = b } } k += "&t=" + (new Date).getTime();
        if (!this.jsFile) {
            this.jsFile = document.createElement("script"); this.jsFile.setAttribute("type", "text/javascript"); this.jsFile.setAttribute("charset", this.charset); this.jsFile.src = k; this.HEADER.appendChild(this.jsFile); if (q.Browser().ie && q.Browser().ie < 9) { j.bindDom(this.jsFile, "readystatechange", this, q.callback(this, this.onReadyStateChange, [this.callback])); this.fixIeOnError(k) } else { j.bindDom(this.jsFile, "load", this, q.callback(this, this.onLoad, [this.callback])); j.bindDom(this.jsFile, "error", this, this.onError) } window.opera &&
            this.fixOperaOnError(k)
        } this.running = true
    }; s.prototype.onLoad = function (k) { var n; if (window[this.objName]) n = window[this.objName]; n ? j.trigger(this, "loaded", [n]) : j.trigger(this, "error", []); try { window[k] && delete window[k]; window[this.objName] && delete window[this.objName] } catch (e) { } this.remove() }; s.prototype.onError = function () { j.trigger(this, "error", []); this.remove() }; s.prototype.onReadyStateChange = function (k) { this.jsFile && /loaded|complete/.test(this.jsFile.readyState) && this.onLoad(k) }; s.get = function () {
        var k,
        n; if (!s.objects) s.objects = []; n = s.objects; for (var e = 0, b = n.length; e < b; e++) if (n[e].running === false) { k = n[e]; j.clearListeners(k); n.splice(e, b - e); break } if (!k) { k = new s; s.objects.push(k); return k } k.running = true; return k
    }; s.prototype.remove = function () { if (this.jsFile) { this.jsFile.removeAttribute("src"); this.jsFile.parentNode.removeChild(this.jsFile); this.running = false; delete this.jsFile } }; s.prototype.fixOperaOnError = function (k) {
        k = '<script src="' + k + '" ' + (document.dispatchEvent ? "onload" : "onreadystatechange") +
        '="this.ownerDocument.z = 1"><\/script>'; var n = document.createElement("iframe"); n.style.display = "none"; this.HEADER.appendChild(n); var e = n.contentDocument, b = this; n.onload = function () { e.z != 1 && b.onError(); n.onload = null; this.HEADER.removeChild(this) }; try { e.write(k); e.close() } catch (d) { }
    }; s.prototype.fixIeOnError = function () { var k = this; setTimeout(function () { k.onError() }, 3E3) }; c.ObjectLoader = s
})(__MapNS__); (function (c) {
    var s = __MapNSImpl__.Config, q = c.MVCObject, j = c.MVCView, u = c.Size, i = c.LatLngBounds, k = c.LatLng, n = q.checkers, e = __MapNSImpl__.RC.TileLayer, b = __MapNSImpl__.Synchronize; n.isTileGridLayer = function (f) { if (typeof f.getTileImageUrl === "function" || typeof f.getTileUrl === "function") return true; return false }; var d = 0; c.TileLayer = __MapNSImpl__.Class(q, {
        initialize: function (f) {
            q.apply(this); var l = {
                tileUrlTemplate: "", tileSubdomains: "", copyrights: null, name: "", alt: "", isPng: false, tileSize: new u(256, 256), opacity: 1,
                maxZoom: s.zoomMax, minZoom: s.zoomMin, zIndex: d++, retryCount: 2, errorUrl: s.domain + "imgs/404.png"
            }; f = b.fill(f, l); this.setOptions(f); j.loadView("TileLayer", this)
        }, getCopyright: function (f, l) { return this.get("copyrights_").getCopyrightNotice(f, l) }, changed: function (f) {
            if (f == "map") if (f = this.get("map")) {
                var l = f.layers; this.set("map_", f); l.exists(this) || l.push(this); var a = l.getLength(); if (a > 1) if (this.get("base")) { for (var h = 0; h < a; h++) { var m = l.getAt(h); m != this && m.set("base", false) } f.set("baseLayer", this) } else this.get("zIndex") ==
                "0" && this.set("zIndex", d++); else { this.set("base", true); f.set("baseLayer", this) }
            } else if (f = this.get("map_")) { l = f.layers; l.exists(this) && this.get("map_").layers.pop(this); if (l.getLength() == 1) { f = l.getAt(0); f.get("zIndex") == "0" && f.set("base", true) } }
        }, getTileUrl: function (f, l) {
            var a = f.getX(), h = f.getY(), m = s.domain + "imgs/transparent.gif", p = this.get("tileUrlTemplate"), v = this.get("tileSubdomains"); if (p) { m = p.replace(/\{x\}/, a); m = m.replace(/\{y\}/, h); m = m.replace(/\{z\}/, l) } if (v) {
                p = v.split(","); if (p.length) m =
                m.replace(/\{s\}/, p[Math.abs(a + h) % p.length])
            } return m
        }
    }); q.publicProperties(c.TileLayer, { zIndex: n.isNumber, name: n.isString, opacity: n.isNumber, map: null, minZoom: n.isNumber, maxZoom: n.isNumber }); c.RoadMapLayer = __MapNSImpl__.Class(c.TileLayer, {
        initialize: function (f) {
            var l = new i(new k(-90, -180), new k(90, 180)), a = new c.CopyrightCollection("- GS(2014)6026\u53f7&nbsp;&nbsp;Data&copy; "); a.addCopyright(new c.Copyright("NavInfo", l, 1)); f = b.fill(f, {
                tileUrlTemplate: "http://{s}.map.gtimg.com/maptilesv3/{z}/{dx}/{dy}/{x}_{y}.png?version=" +
                __MapNSImpl__.Config.TileVersion, tileSubdomains: "p0,p1,p2,p3", copyrights: a, name: e.ROADMAP.name, alt: e.ROADMAP.alt, minZoom: 1, maxZoom: 18, base: true
            }); c.TileLayer.apply(this, [f])
        }, getTileImageUrl: function (f, l, a) {
            var h = s.tileDomains, m = s.domain + "imgs/transparent.gif"; tileUrlTemplate = this.get("tileUrlTemplate"); tileSubdomains = this.get("tileSubdomains"); h = tileSubdomains.split(","); var p = h.length, v = this.get("tileSize").getHeight(); l = (1 << a + Math.floor(256 / v / 2)) - 1 - l; v = l.toString(); p = v.charAt(v.length - 1) % p; if (tileUrlTemplate) {
                m =
                tileUrlTemplate.replace(/\{x\}/, f); m = m.replace(/\{y\}/, l); m = m.replace(/\{z\}/, a); m = m.replace(/\{dx\}/, Math.floor(f / 16)); m = m.replace(/\{dy\}/, Math.floor(l / 16))
            } if (h.length) m = m.replace(/\{s\}/, h[p]); return m
        }
    }); c.SatelliteLayer = __MapNSImpl__.Class(c.RoadMapLayer, {
        initialize: function (f) {
            var l = new i(new k(-90, -180), new k(90, 180)); l = new c.CopyrightCollection("- GS(2014)", new c.Copyright('6026\u53f7&nbsp;&nbsp;Imagery&copy; <a href="http://www.chinasiwei.com" style="text-decoration:none;color:#000" target="_blank">DigitalGlobe & Chinasiwei</a>',
            l, 1, 18)); for (var a = [[123.62915, 41.253032, 124.013672, 41.418015], [125.112305, 43.683764, 125.617676, 44.134913], [112.796631, 27.732161, 113.148193, 28.430053], [119.685059, 31.559815, 120.113525, 32.063956], [103.787842, 30.448674, 104.47998, 31.024694], [106.325684, 29.32472, 106.688232, 29.907329], [121.409912, 38.754083, 121.970215, 39.249271], [100.085449, 25.522615, 100.415039, 25.691038], [124.628906, 46.339343, 125.233154, 46.912751], [118.377686, 37.335224, 118.883057, 37.553288], [112.994385, 22.82682, 113.203125, 23.200961], [119.135742,
            25.928407, 119.4104, 26.234302], [114.77417, 25.671236, 115.10376, 25.987675], [113.137207, 22.512557, 113.620605, 23.543845], [106.523438, 26.332807, 106.875, 26.775039], [126.364746, 45.251688, 127.012939, 45.836454], [110.083008, 19.621892, 110.577393, 20.107523], [119.981689, 29.964453, 120.476074, 30.60955], [117.037354, 31.634676, 117.432861, 32.03602], [127.397461, 50.169862, 127.628174, 50.324423], [111.401367, 40.5472, 112.027588, 41.137296], [114.334717, 22.907803, 114.521484, 23.221155], [119.685059, 49.167339, 119.86084, 49.28214],
            [130.187988, 46.672056, 130.627441, 46.920255], [113.071289, 35.137879, 113.477783, 35.380093], [116.685791, 36.527295, 117.25708, 36.897194], [100.733643, 21.932855, 100.843506, 22.044913], [112.115479, 30.240086, 112.401123, 30.42973], [115.784912, 29.573457, 116.125488, 29.783449], [114.213867, 34.687428, 114.510498, 34.930979], [102.480469, 24.696934, 102.974854, 25.314236], [115.861816, 39.376772, 117.191162, 40.413496], [103.392334, 35.791083, 104.106445, 36.235412], [90.999756, 29.544788, 91.362305, 29.745302], [115.817871, 36.332828,
            116.191406, 36.571424], [111.434326, 35.986896, 111.63208, 36.146747], [104.633789, 31.391158, 104.842529, 31.569175], [129.385986, 44.425934, 129.836426, 44.746733], [115.609131, 28.526622, 116.125488, 28.921631], [118.432617, 31.728167, 119.344482, 32.500496], [108.204346, 22.593726, 108.522949, 22.978624], [120.717773, 31.868228, 120.9375, 32.110496], [121.322021, 29.726222, 121.68457, 30.040566], [119.399414, 26.598351, 119.630127, 26.74561], [101.590576, 26.460738, 101.920166, 26.657278], [130.792236, 45.675482, 131.022949, 45.912944],
            [119.32251, 35.290469, 119.6521, 35.56798], [121.091309, 30.732393, 121.981201, 31.503629], [116.630859, 23.221155, 116.828613, 23.5237], [120.509033, 29.916852, 120.629883, 30.164126], [123.178711, 41.508577, 123.815918, 42.073762], [114.23584, 37.883525, 114.763184, 38.169114], [119.981689, 30.60955, 120.926514, 32.026706], [82.880859, 46.672056, 83.221436, 46.822617], [112.324219, 37.631635, 112.697754, 38.08269], [121.190186, 28.459033, 121.68457, 28.8158], [116.828613, 38.85682, 117.608643, 39.461644], [122.047119, 43.53262, 122.409668,
            43.739352], [118.959961, 36.527295, 119.344482, 36.826875], [121.937256, 37.387617, 122.332764, 37.561997], [113.928223, 30.353916, 114.510498, 30.845647], [87.176514, 43.548548, 87.813721, 44.127028], [118.026123, 24.417142, 118.256836, 24.647017], [112.005615, 31.914868, 112.280273, 32.166313], [113.741455, 22.09582, 114.510498, 22.816694], [108.48999, 34.089061, 109.193115, 34.51561], [101.568604, 36.412442, 101.942139, 37.07271], [113.708496, 33.916013, 113.928223, 34.125448], [117.037354, 34.116352, 117.399902, 34.397845], [129.375, 42.835696,
            129.715576, 42.988576], [121.05835, 37.309014, 121.618652, 37.72728], [111.159668, 30.637912, 111.357422, 30.817346], [105.842285, 38.272689, 106.578369, 38.702659], [110.874023, 34.930979, 111.126709, 35.155846], [117.388916, 34.732584, 117.784424, 35.05698], [117.58667, 24.467151, 117.696533, 24.5771], [113.422852, 34.587997, 113.917236, 34.976002], [121.981201, 29.888281, 122.178955, 30.088108], [106.864014, 27.62514, 106.962891, 27.771051], [107.061768, 34.288992, 107.457275, 34.488448], [109.599609, 40.472024, 110.203857, 40.822124], [116.499023,
            23.594194, 116.751709, 23.735069], [117.597656, 40.797177, 118.223877, 41.219986], [101.447754, 24.946219, 101.634521, 25.105497], [124.321289, 40.061257, 124.453125, 40.187267], [113.609619, 22.745789, 114.071045, 23.251441], [109.775391, 39.639538, 110.181885, 39.951859], [115.64209, 32.759562, 116.026611, 33.045508], [106.600342, 30.42973, 106.699219, 30.505484], [93.372803, 42.771211, 93.757324, 42.940339], [106.875, 32.990236, 107.138672, 33.220308], [118.212891, 29.621221, 118.388672, 29.745302], [120.772705, 40.647304, 121.091309, 40.921814],
            [98.206787, 39.664914, 98.503418, 39.918163], [126.375732, 43.691708, 126.793213, 44.048116], [120.981445, 41.013066, 121.223145, 41.236511], [98.371582, 39.664914, 98.701172, 39.83385], [75.893555, 39.376772, 76.091309, 39.546412], [84.748535, 45.251688, 84.968262, 45.667805], [119.003906, 34.506557, 119.256592, 34.705493], [100.151367, 26.784847, 100.349121, 26.971038], [109.193115, 24.246965, 109.544678, 24.467151], [112.258301, 34.443159, 112.609863, 34.822823], [103.776855, 29.993002, 103.875732, 30.135626], [105.974121, 30.666266, 106.33667,
            30.987028], [112.467041, 32.925707, 112.642822, 33.073131], [113.126221, 33.660353, 113.477783, 33.83392], [120.234375, 35.95133, 120.563965, 36.500805], [119.487305, 39.808536, 119.707031, 40.078071], [123.793945, 47.115, 124.233398, 47.546872], [103.699951, 25.423431, 103.875732, 25.582085], [111.104736, 34.687428, 111.30249, 34.849875], [109.368896, 18.135412, 109.544678, 18.552532], [117.850342, 28.381735, 118.015137, 28.497661], [123.178711, 41.508577, 124.123535, 42.073762], [106.281738, 38.925229, 106.501465, 39.087436], [116.861572,
            35.986896, 117.235107, 36.306272], [117.905273, 39.393755, 118.476562, 39.88445], [89.01123, 42.892064, 89.373779, 43.084937], [109.379883, 34.415973, 109.56665, 34.551811], [120.52002, 27.858504, 120.838623, 28.120439], [102.513428, 37.83148, 102.722168, 38.00482], [111.247559, 23.433009, 111.368408, 23.543845], [99.645996, 27.751608, 99.755859, 27.868217], [102.183838, 27.80021, 102.359619, 27.965295], [109.379883, 36.518466, 109.588623, 36.677231], [104.436035, 28.661671, 104.743652, 28.83505], [114.356689, 27.76133, 114.477539, 27.887639],
            [113.005371, 29.276816, 113.225098, 29.496988], [110.072021, 22.543001, 110.236816, 22.705255], [110.412598, 29.027355, 110.577393, 29.190533], [110.247803, 21.156238, 110.423584, 21.330315], [105.150146, 37.422526, 105.303955, 37.570705], [117.91626, 36.615528, 118.300781, 36.967449], [122.783203, 40.913513, 123.244629, 41.211722], [105.842285, 26.194877, 105.974121, 26.283565], [114.071045, 35.942436, 114.455566, 36.191092], [122.783203, 45.521744, 122.969971, 45.690833], [106.567383, 23.795398, 106.710205, 23.926013], [117.224121, 32.833443,
            117.58667, 33.082337], [111.610107, 28.892779, 111.796875, 29.190533], [113.708496, 34.116352, 113.928223, 34.288992], [112.983398, 36.111253, 113.225098, 36.279707], [117.751465, 31.559815, 118.059082, 31.681433], [112.939453, 25.720735, 113.170166, 25.859224], [121.047363, 29.983487, 121.376953, 30.287532], [113.060303, 39.918163, 113.455811, 40.20405], [97.261963, 37.274053, 97.470703, 37.422526], [104.282227, 31.062345, 104.468994, 31.222197], [109.379883, 30.211608, 109.56665, 30.363396], [121.322021, 29.602118, 121.68457, 30.040566], [109.423828,
            23.008964, 109.720459, 23.221155], [110.192871, 25.185059, 110.390625, 25.363882], [106.171875, 35.924645, 106.380615, 36.093499], [121.124268, 31.868228, 121.223145, 31.914868], [100.766602, 36.73008, 100.964355, 36.81808], [114.071045, 36.332828, 114.620361, 36.668419], [130.177002, 47.189712, 130.429688, 47.494937], [115.64209, 37.675125, 115.784912, 37.788081], [112.532959, 26.735799, 112.730713, 27.039557], [114.642334, 23.584126, 114.818115, 23.875792], [116.938477, 32.546813, 117.125244, 32.713355], [114.730225, 30.306503, 114.98291,
            30.533877], [114.873047, 30.021544, 115.125732, 30.287532], [123.991699, 50.34546, 124.244385, 50.50644], [120.574951, 30.543339, 120.9375, 30.987028], [116.224365, 23.422928, 116.564941, 23.614329], [119.981689, 30.60955, 120.926514, 32.10119], [112.148438, 30.939924, 112.280273, 31.090574], [119.542236, 28.988922, 119.729004, 29.219302], [112.324219, 37.448697, 112.873535, 38.08269], [130.759277, 45.182037, 131.132812, 45.413876], [117.597656, 36.164488, 117.784424, 36.27085], [121.069336, 28.748397, 121.289062, 28.969701], [118.092041, 34.831841,
            118.630371, 35.254591], [94.317627, 29.573457, 94.449463, 29.735762], [119.827881, 28.372069, 119.981689, 28.497661], [119.388428, 31.353637, 119.575195, 31.512996], [105.314941, 28.83505, 105.46875, 28.950476], [111.038818, 37.439974, 111.258545, 37.588119], [116.004639, 24.20689, 116.169434, 24.367114], [118.432617, 31.494262, 119.344482, 32.500496], [106.54541, 35.46067, 106.940918, 35.630512], [118.894043, 25.344026, 119.080811, 25.582085], [114.884033, 35.684072, 115.114746, 35.85344], [121.585693, 31.774878, 121.717529, 31.868228], [112.840576,
            23.614329, 113.170166, 23.795398], [108.555908, 21.912471, 108.720703, 22.044913], [118.78418, 28.844674, 118.981934, 29.00814], [120.498047, 27.683528, 120.838623, 28.120439], [117.575684, 26.204734, 117.685547, 26.303264], [109.830322, 33.779147, 110.050049, 33.952474], [115.378418, 34.161818, 115.839844, 34.587997], [110.621338, 32.481963, 110.819092, 32.787275], [131.000977, 46.581518, 131.231689, 46.702202], [124.266357, 43.060861, 124.508057, 43.253205], [126.936035, 46.596619, 127.056885, 46.672056], [105.501709, 30.410782, 105.655518,
            30.581179], [113.280029, 31.653381, 113.499756, 31.812229], [121.036377, 31.363018, 121.245117, 31.550453], [119.882812, 32.091883, 120.135498, 32.212801], [119.838867, 32.314991, 120.047607, 32.611616], [105.666504, 34.461277, 105.864258, 34.633208], [108.896484, 34.85889, 109.017334, 34.948991], [125.881348, 41.640078, 126.079102, 41.836828], [106.710205, 39.512517, 106.918945, 39.75788], [118.311768, 31.194008, 118.498535, 31.512996], [113.005371, 40.930115, 113.214111, 41.087632], [114.246826, 29.783449, 114.389648, 29.916852], [113.873291,
            30.86451, 113.994141, 30.977609], [115.960693, 43.858297, 116.191406, 44.00862], [114.23584, 36.958671, 114.620361, 37.142803], [113.7854, 35.191767, 114.082031, 35.424868], [112.642822, 38.333039, 112.82959, 38.496594], [118.66333, 30.883369, 118.828125, 30.996446], [119.882812, 33.100745, 120.563965, 33.578015], [111.884766, 21.749296, 112.027588, 21.932855], [119.674072, 32.119801, 119.882812, 32.29642], [119.333496, 32.259265, 119.520264, 32.481963], [128.759766, 47.591346, 129.012451, 47.886881], [119.685059, 31.297328, 119.882812, 31.456782],
            [109.544678, 38.169114, 109.885254, 38.393339], [111.972656, 22.867318, 112.115479, 22.998852], [112.390137, 22.907803, 112.565918, 23.211058], [103.623047, 27.264396, 103.798828, 27.391278], [119.333496, 32.045333, 119.520264, 32.259265], [113.236084, 22.370396, 113.554688, 22.674847], [101.623535, 32.833443, 101.755371, 32.98102], [88.000488, 47.776252, 88.231201, 47.960502], [105.490723, 38.771216, 105.864258, 38.933776], [108.984375, 32.667125, 109.083252, 32.722599], [116.938477, 30.571721, 117.015381, 30.666266], [104.084473, 36.456636,
            104.249268, 36.606709], [99.085693, 25.035839, 99.261475, 25.175117], [107.29248, 40.680638, 107.523193, 40.855371], [117.740479, 37.22158, 118.103027, 37.509726], [82.001953, 44.8325, 82.155762, 44.972571], [115.697021, 33.779147, 115.839844, 33.916013], [116.685791, 38.186387, 117.081299, 38.43638], [120.311279, 41.50035, 120.60791, 41.656497], [118.773193, 42.122673, 119.157715, 42.423457], [117.399902, 30.581179, 117.608643, 30.751278], [118.267822, 32.23139, 118.465576, 32.398516], [113.455811, 23.412847, 113.752441, 23.654588], [116.191406,
            37.352693, 116.378174, 37.588119], [104.501953, 35.5054, 104.754639, 35.666222], [120.256348, 32.805745, 120.377197, 32.934929], [120.124512, 29.200123, 120.333252, 29.363027], [116.268311, 27.907058, 116.466064, 28.07198], [121.508789, 41.918629, 121.728516, 42.09007], [122.255859, 40.354917, 122.409668, 40.472024], [80.002441, 32.417066, 80.200195, 32.583849], [105.765381, 32.352123, 105.974121, 32.519026], [119.981689, 29.592565, 120.476074, 30.60955], [114.224854, 35.666222, 114.378662, 35.826721], [115.290527, 35.065973, 115.675049, 35.442771],
            [102.875977, 34.930979, 103.007812, 35.05698], [118.959961, 33.477272, 120.465088, 37.335224], [114.433594, 36.826875, 114.620361, 36.923548], [117.290039, 38.298559, 117.498779, 38.565348], [112.994385, 22.471955, 113.203125, 22.745789], [114.916992, 27.019984, 115.10376, 27.186242], [102.11792, 38.43638, 102.370605, 38.591114], [112.774658, 35.43382, 112.994385, 35.576917], [117.191162, 29.267233, 117.25708, 29.32472], [116.520996, 35.353216, 116.696777, 35.469618], [119.509277, 31.60661, 119.729004, 32.063956], [107.874756, 26.509905, 108.017578,
            26.637639], [86.088867, 41.607228, 86.275635, 41.804078], [120.465088, 36.774092, 120.563965, 36.914764], [103.721924, 29.487425, 103.820801, 29.649869], [123.156738, 41.178654, 123.365479, 41.343825], [124.980469, 42.85986, 125.211182, 43.020714], [119.53125, 30.173625, 119.761963, 30.334954], [99.931641, 23.825551, 100.250244, 23.986253], [103.040771, 35.5054, 103.238525, 35.710838], [116.422119, 31.681433, 116.608887, 31.830899], [104.655762, 26.49024, 105.007324, 26.667096], [104.798584, 33.330528, 104.985352, 33.449777], [116.894531, 24.996016,
            117.13623, 25.22482], [111.939697, 27.654338, 112.071533, 27.790491], [110.841064, 21.596151, 110.983887, 21.71868], [103.260498, 23.311991, 103.425293, 23.473324], [118.114014, 26.55905, 118.300781, 26.716174], [104.996338, 29.51611, 105.128174, 29.64032], [121.992188, 41.087632, 122.2229, 41.253032], [103.787842, 30.448674, 104.47998, 31.024694], [101.99707, 36.438961, 102.216797, 36.589068], [113.752441, 27.57646, 113.928223, 27.722436], [117.751465, 34.252676, 118.114014, 34.425036], [101.008301, 23.019076, 101.074219, 23.120154], [107.501221,
            35.621582, 107.677002, 35.791083], [118.399658, 24.836596, 118.740234, 25.055745], [114.433594, 36.826875, 114.620361, 36.923548], [120.72876, 29.935895, 120.926514, 30.078601], [115.301514, 22.644432, 115.422363, 22.806567], [113.455811, 24.657002, 113.7854, 24.886436], [111.379395, 27.15692, 111.522217, 27.313214], [124.639893, 45.05024, 124.958496, 45.274886], [112.357178, 39.266284, 112.489014, 39.419221], [118.135986, 33.815666, 118.377686, 34.070862], [116.883545, 33.578015, 117.026367, 33.715202], [117.729492, 30.845647, 117.927246, 31.024694],
            [106.12793, 37.935533, 106.325684, 38.091337], [114.016113, 32.063956, 114.224854, 32.268555], [118.256836, 34.252676, 118.476562, 34.569906], [114.840088, 27.76133, 115.059814, 27.887639], [115.19165, 40.438586, 115.598145, 40.697299], [102.930908, 29.964453, 103.018799, 30.012031], [113.477783, 37.805444, 113.686523, 37.970185], [122.025146, 40.5472, 34682.266846, 40.75558], [81.166992, 43.874138, 81.375732, 44.024422], [111.51123, 26.372185, 111.687012, 26.500073], [102.44751, 24.266997, 102.612305, 24.417142], [113.752441, 23.200961, 113.884277,
            23.332168], [114.587402, 40.588928, 115.026855, 41.004775], [120.377197, 37.326489, 120.465088, 37.431251], [114.576416, 33.532237, 114.730225, 33.706063], [113.03833, 27.76133, 113.225098, 27.916767], [104.688721, 29.295981, 104.864502, 29.468297], [104.589844, 30.078601, 104.699707, 30.164126], [113.444824, 22.044913, 113.620605, 22.370396], [115.3125, 38.771216, 115.675049, 38.976492], [106.677246, 31.765537, 106.853027, 31.914868], [115.861816, 39.376772, 117.191162, 40.413496], [109.02832, 21.381475, 109.193115, 21.545066]], h = 0, m = a.length; h <
            m; h++) { var p = a[h]; p = new i(new k(p[1], p[0]), new k(p[3], p[2])); l.addCopyright(new c.Copyright('6026\u53f7&nbsp;&nbsp;Imagery&copy; <a href="http://www.east-dawn.com.cn/" style="text-decoration:none;color:#000" target="_blank">Eastdawn</a>', p, 12, 15, true)) } f = b.fill(f, { tileUrlTemplate: "http://{s}.map.gtimg.com/sateTiles/{z}/{dx}/{dy}/{x}_{y}.jpg?version=" + __MapNSImpl__.Config.TileVersion, tileSubdomains: "p0,p1,p2,p3", copyrights: l, name: e.SATELLITE.name, alt: e.SATELLITE.alt, base: true }); c.TileLayer.apply(this,
            [f])
        }
    }); c.HybridLayer = __MapNSImpl__.Class(c.RoadMapLayer, { initialize: function (f) { var l = new i(new k(-90, -180), new k(90, 180)), a = new c.CopyrightCollection("&nbsp;&nbsp;Data&copy; "); a.addCopyright(new c.Copyright("NavInfo", l, 1)); f = b.fill(f, { tileUrlTemplate: "http://{s}.map.gtimg.com/sateTranTilesv3/{z}/{dx}/{dy}/{x}_{y}.png?version=" + __MapNSImpl__.Config.TileVersion, tileSubdomains: "p0,p1,p2,p3", copyrights: a, name: e.HYBRID.name, alt: e.HYBRID.alt }); c.TileLayer.apply(this, [f]) } }); c.TrafficLayer = __MapNSImpl__.Class(c.TileLayer,
    { initialize: function (f) { f = b.fill(f, { name: e.TRAFFIC.name, minZoom: 1, maxZoom: 18, alt: e.TRAFFIC.alt }); c.TileLayer.apply(this, [f]) }, getTileUrl: function (f, l) { var a = f.getX(), h = f.getY(); return "http://rtt2.map.qq.com/live/" + l + "/" + Math.floor(a / 10) + "/" + Math.floor(h / 10) + "/" + a + "_" + h + ".png" } }); c.TileGridLayer = c.TileLayer
})(__MapNS__); (function (c) {
    var s = __MapNSImpl__.Util, q = __MapNSImpl__.Config, j = __MapNSImpl__.RC.MapType, u = __MapNSImpl__.Interfaces, i = c.MVCObject.checkers; s.Browser(); var k = i.checkInterface(u.LatLng), n = c.Event, e = c.MapType, b = c.MapTypeId, d = c.MapTypeRegistry, f = c.Size, l = c.Point, a = c.LatLng, h = c.LatLngBounds, m = c.Bounds, p = c.MVCArray, v = c.MVCObject, x = c.MVCView, B = __MapNSImpl__.Synchronize, D = __MapNSImpl__.Class(v, {
        initialize: function (r, w) {
            v.apply(this); var y = {
                __hideLogo__: false, __disablegesture__: false, center: new a(q.DEFAULT_LAT,
                q.DEFAULT_LNG), zoomLevel: q.DEFAULT_ZOOMLEVEL, maxZoom: q.zoomMax, minZoom: q.zoomMin, backgroundColor: "", cursor: "default", draggingCursor: "grabbing", draggable: true, scrollWheel: true, zoomInByDblClick: true, keyBoard: true, animation: true, mapTypeId: b.ROADMAP, boundary: null, autoPan: false, __clip_padding__: 1.5
            }; w = B.fill(w, y); this.layers = new p; this.controls = new p; this.overlays = new p; this.mapTypes = new d; this.fromPixelToLngLat = this.fromPixelToLatLng; this.fromLngLatToPixel = this.fromLatLngToPixel; this.fromContainerPixelToLngLat =
            this.fromContainerPixelToLatLng; this.fromLngLatToContainerPixel = this.fromLatLngToContainerPixel; y = new c.MapCanvasProjection; y.bindTo("center", this, "center"); y.bindTo("width", this, "viewWidth_"); y.bindTo("height", this, "viewHeight_"); y.bindTo("zoom", this, "zoomLevel"); y.bindTo("origin", this, "origin_"); var A = new c.RoadMapLayer, E = new c.SatelliteLayer, g = new c.HybridLayer; this.mapTypes.set(b.ROADMAP, new e({ name: j.ROADMAP.name, alt: j.ROADMAP.alt, layers: [A], fullLoad: false, system: true })); this.mapTypes.set(b.SATELLITE,
            new e({ name: j.SATELLITE.name, alt: j.SATELLITE.alt, layers: [E], system: true })); this.mapTypes.set(b.HYBRID, new e({ name: j.HYBRID.name, alt: j.HYBRID.alt, layers: [E, g], system: true })); if (A = w.boundary) { A = A.getCenter(); w.center = A } if (A = this.mapTypes.get(w.mapTypeId)) { E = 0; for (g = A.layers.length; E < g; E++) this.layers.push(A.layers[E]) } this.set("lastZoom", w.zoomLevel); this.set("targetZoom", w.zoomLevel); this.setOptions(w); r = typeof r == "object" ? r : document.getElementById(r); this.set("container_", r); this.notifyResize(); this.set("projection",
            A && A.projection || new c.Projection); y.bindTo("projection", this); y.set("map", this); this.set("mapCanvasProjection_", y); x.loadView("Map", this); var o = this; n.addListener(this.layers, "remove_at", function (t, z) { if (o.get("loaded")) z.get("map") && z.set("map", null); else { var F = o.mapTypes.get(o.get("mapTypeId")); F && (F.layers.length = 0) } }); n.addListener(this.layers, "insert_at", function (t, z) { function F() { setTimeout(function () { z.set("map", G); z.get("loaded") || F() }, 0) } var G = z.get("map") || o; F() }); setInterval(s.callback(this,
            this.notifyResize), 10)
        }, getViewSize: function () { return new f(this.get("viewWidth_"), this.get("viewHeight_")) }, getBounds: function () { if (this.get("projection")) { var r = this.get("mapCanvasProjection_"), w = this.get("viewWidth_"), y = this.get("viewHeight_"); y = r.fromContainerPixelToLatLng(new l(0, y), true); r = r.fromContainerPixelToLatLng(new l(w, 0), true); return new h(y, r) } }, moveTo: function (r, w, y) {
            if (k(r)) {
                var A = this.get("boundary"); if (A) {
                    var E = this.get("mapCanvasProjection_"); this.get("zoomLevel"); var g = this.get("viewWidth_"),
                    o = this.get("viewHeight_"), t = E.fromLatLngToContainerPixel(A.getNorthEast()); A = E.fromLatLngToContainerPixel(A.getSouthWest()); var z = E.fromLatLngToContainerPixel(r); r = z.getX(); z = z.getY(); var F = t.getX(); t = t.getY(); var G = A.getX(); A = A.getY(); r = E.fromContainerPixelToLatLng(new l(Math.abs(F - G) > g ? Math.min(Math.max(r, G + g / 2), F - g / 2) : (F + G) / 2, Math.abs(A - t) > o ? Math.min(Math.max(z, t + o / 2), A - o / 2) : (t + A) / 2))
                } g = this.get("center"); E = true; if (!g || !this.get("animation") || w || !x.getView("Map")) E = false; else {
                    E = this.get("mapCanvasProjection_");
                    w = E.fromLatLngToContainerPixel(g); g = E.fromLatLngToContainerPixel(r); E = w.getX() - g.getX(); w = w.getY() - g.getY(); E = !(Math.abs(E) > this.get("viewWidth_") || Math.abs(w) > this.get("viewHeight_"))
                } if (E && !y) this.set("animation_", { type: "move", center: r }); else { !y && this.set("animation_", null); this.set("center", r) }
            } else throw Error("Map center should be a LatLng.");
        }, moveBy: function (r, w) {
            if (i.checkInterface(u.Size)(r)) {
                if (r.getWidth() !== 0 || r.getHeight() !== 0) {
                    var y = this.get("center"), A = this.get("mapCanvasProjection_");
                    y = A.fromLatLngToContainerPixel(y); var E = y.getX() - r.getWidth(); y = y.getY() - r.getHeight(); E = new l(E, y); this.moveTo(A.fromContainerPixelToLatLng(E, !w), w)
                }
            } else throw Error("Move by new a Size type offset.");
        }, fitBounds: function (r, w, y) {
            w = w || { left: 0, right: 0, top: 0, bottom: 0 }; var A = parseInt(w.left) || 0 + parseInt(w.right) || 0, E = parseInt(w.top) || 0 + parseInt(w.bottom) || 0, g = A / 2; A = this.get("viewWidth_") - A; var o = this.get("viewHeight_") - E; E = this.get("projection"); var t = this.get("minZoom"), z = this.get("maxZoom"); A = s.getOptimalZoomLevel(r,
            A, o, E, t, z); r = r.getCenter(); r = E.fromLatLngToPoint(r, A); r.x = r.x - parseInt(w.left) + g; r.y = r.y + parseInt(w.top) - g; r = E.fromPointToLatLng(r, A); this.set("center", r); this.set("zoomLevel", y || A); this.set("lastZoom", y || A)
        }, getFitBoundsZoomLevel: function (r, w) { var y = this.get("viewWidth_"), A = this.get("viewHeight_"), E = this.get("projection"), g = this.get("minZoom"), o = this.get("maxZoom"); if (w) { y = w.getWidth(); A = w.getHeight() } return s.getOptimalZoomLevel(r, y, A, E, g, o) }, zoomIn: function (r, w, y) {
            var A = this.getZoomLevel() + 1; this.set("targetZoom",
            A); this.zoomTo(A, r, w, y)
        }, zoomOut: function (r, w, y) { var A = this.getZoomLevel() - 1; this.set("targetZoom", A); this.zoomTo(A, r, w, y) }, zoomTo: function (r, w, y, A) {
            r = Math.round(r); r = Math.max(r, this.get("minZoom")); r = Math.min(r, this.get("maxZoom")); if (r === this.get("zoomLevel")) w && this.moveTo(w); else {
                var E = r - this.getZoomLevel(); A = this.get("animation") && !A; var g = w || this.get("center"), o = this.get("mapCanvasProjection_"); g = o.fromLatLngToContainerPixel(g); this.set("focusPixel", g); var t = this.get("zoomAnimation_"); if ((!t ||
                t.getStatus() !== 1) && A) (t = this.getBaseLayer()) && t.notify("exchange_"); t = g.getX(); var z = g.getY(); if (t < 0 || t > this.get("viewWidth_") || z < 0 || z > this.get("viewHeight_")) A = false; t = this.get("originPosition_"); this.set("zoomLevel", r); if (w) if (y) { w = o.fromLatLngToContainerPixel(w); z = this.getCenter(); z = o.fromLatLngToContainerPixel(z); r = z.getX() + w.getX() - g.getX(); w = z.getY() + w.getY() - g.getY(); r = new l(r, w); w = o.fromContainerPixelToLatLng(r); this.moveTo(w, true) } else this.set("center", w); A && t || x.getView("Map") ? this.set("animation_",
                { type: "zoom", delta: E, focusPixel: g, originPosition: t, isInPlace: y }) : this.set("animation_", null)
            }
        }, notifyResize: function () {
            var r = this.get("container_"), w = s.getCurrentStyle(r), y = r.offsetWidth, A = r.offsetHeight; r = w && parseInt(w.width); w = w && parseInt(w.height); r = isNaN(r) || !r ? y : y || r; w = isNaN(w) || !w ? y : A || w; y = this.getViewSize(); if (!(y.getWidth() == r && y.getHeight() == w)) {
                var E = this.get("center") && this.get("projection") && this.get("mapCanvasProjection_"); A = null; y = this.get("mapCanvasProjection_"); if (E) {
                    var g = new l(r /
                    2, w / 2); g = y.fromContainerPixelToLatLng(g); A = [r - this.get("viewWidth_"), w - this.get("viewHeight_")]
                } this.set("viewWidth_", r); this.set("viewHeight_", w); n.trigger(this, "resize"); if (E) { if (r = this.get("origin_")) { r = y.fromLatLngToContainerPixel(r); r = new l(r.getX() + A[0] / 2, r.getY() + A[1] / 2); this.set("origin_", y.fromContainerPixelToLatLng(r)) } this.set("center", g) }
            }
        }, getDistance: function (r, w) {
            if (!r || !w) return 0; if (!k(r) || !k(w)) throw Error("Start and end must be __MapNS__.LatLng object."); var y = function (g) {
                return Math.PI /
                180 * g
            }, A = y(r.getLat() - w.getLat()), E = y(r.getLng() - w.getLng()); y = Math.sin(A / 2) * Math.sin(A / 2) + Math.cos(y(w.getLat())) * Math.cos(y(r.getLat())) * Math.sin(E / 2) * Math.sin(E / 2); return 6378137 * 2 * Math.asin(Math.min(1, Math.sqrt(y)))
        }, fromLatLngToPixel: function (r) { return this.get("mapCanvasProjection_").fromLatLngToDivPixel(r) }, fromPixelToLatLng: function (r) { return this.get("mapCanvasProjection_").fromDivPixelToLatLng(r) }, fromLatLngToContainerPixel: function (r) { return this.get("mapCanvasProjection_").fromLatLngToContainerPixel(r) },
        fromContainerPixelToLatLng: function (r) { return this.get("mapCanvasProjection_").fromContainerPixelToLatLng(r) }, getCenter: function () { return this.get("center") }, setCenter: function (r) { this.moveTo(r, true) }, getZoomLevel: function () { return this.get("zoomLevel") }, getProjection: function () { return this.get("projection") }, setZoomLevel: function (r) { this.zoomTo(r, null, null, true) }, setBoundary: function (r) { this.setCenter(r && r.getCenter()) }, getBaseLayer: function () { return this.get("baseLayer") }, getViewbox: function () {
            var r =
            this.get("mapCanvasProjection_"), w = this.get("__clip_padding__"), y = this.getCenter(); if (r && y) { var A = this.get("viewWidth_") * w; w = this.get("viewHeight_") * w; r = r.fromLatLngToDivPixel(y); y = r.x + A; var E = r.y + w; return new m([new l(r.x - A, r.y - w), new l(y, E)]) }
        }, getDrawBounds: function () {
            var r = this.get("projection"); if (r) {
                var w = this.get("__clip_padding__"), y = this.get("zoomLevel"), A = this.get("viewWidth_") * w; w = this.get("viewHeight_") * w; var E = this.getCenter(), g = r.fromLatLngToPoint(E, y); E = g.getX(); var o = g.getY(); g = new l(E -
                A, o + w); A = new l(E + A, o - w); w = r.fromPointToLatLng(g, y); r = r.fromPointToLatLng(A, y); return new h(w, r)
            }
        }
    }), C = { backgroundColor: i.isString, cursor: i.isString, draggingCursor: i.isString, scrollWheel: i.isBoolean, zoomInByDblClick: i.isBoolean, keyBoard: i.isBoolean, animation: i.isBoolean, draggable: i.isBoolean, autoPan: i.isBoolean, boundary: i.isInstanceOf(h), mapTypeId: i.isStringOrNull }; v.publicProperties(D, C); c.Map = D
})(__MapNS__); (function (c) {
    var s = c.MVCObject.checkers, q = __MapNSImpl__.Config, j = __MapNSImpl__.Synchronize, u = c.MVCView, i = c.Overlay; c.InfoWindow = __MapNSImpl__.Class(i, {
        initialize: function (k) {
            i.apply(this); k = j.fill(k, {
                visible: true, content: "", style: {
                    url: q.domain + "imgs/infowindow_default.png", top_left: [0, 0, 10, 10], bottom_right: [600, 430, 10, 10], margin: [20, 10], width_range: [200, 560], height_range: [80, 440], offset: [-3, 0], stem: { x: [65, 100, 43], y: 484, align: c.ALIGN.CENTER, offset: 0 }, close: {
                        url: q.domain + "imgs/infowindow_close_default.png",
                        coordinate: [0, 0, 13, 13], align: c.ALIGN.TOP_RIGHT, margin: [8, 8]
                    }, shadow: { url: q.domain + "imgs/infowindow_shadow_default.png", top_left: [343, 142], bottom_right: [641, 452], stem: { x: [97, 127, 44], y: 484, offset: [-6, -2], blur: 5 } }
                }, zIndex: 0, position: null, target: null, autoMove: true
            }); this.setOptions(k); u.loadView("InfoWindow", this)
        }, open: function (k, n) { this.set("position", n); this.set("content", k); this.set("visible", true) }, close: function () { this.set("visible", false) }, reset: function () { this.notify("content") }, construct: function () {
            this.set("panes_",
            this.getPanes())
        }, destroy: function () { this.notify("destroy_"); this.set("panes_", null) }, draw: function () { this.notify("draw_") }
    }); c.MVCObject.publicProperties(c.InfoWindow, { visible: s.isBoolean, content: null, zIndex: s.isNumber, autoMove: s.isBoolean, style: null, position: null, target: null, animation: null }); c.InfoWindow.Animation = { POP: 0 }
})(__MapNS__); (function () {
    var c = __MapNS__.MVCObject.checkers, s = __MapNS__.Overlay, q = __MapNS__.MVCView, j = __MapNS__.MVCObject, u = __MapNSImpl__.Synchronize; __MapNS__.Polyline = __MapNSImpl__.Class(s, {
        initialize: function (i) {
            s.apply(this); i = u.fill(i, { path: [], strokeColor: "#1791fc", strokeWeight: 4, fillOpacity: 0.2, strokeOpacity: 0.8, strokeDashStyle: "solid", startArrow: null, endArrow: null, strokeLinejoin: "round", strokeLinecap: "round", editable: false, hasLabel: false, zIndex: 0, cursor: "", simplify: true, visible: true }); this.setValues(i);
            q.loadView("Polygon", this)
        }, construct: function () { this.set("panes_", this.getPanes()); this.notify("construct_") }, draw: function () { this.notify("draw_") }, destroy: function () { this.notify("destroy_"); this.set("panes_", null) }, getBounds: function () {
            var i = this.get("path"), k = null; if (i && i.length !== 0) {
                var n = i[0].getLng(), e = i[0].getLat(); k = n; for (var b = e, d = 1, f = i.length; d < f; d++) { var l = i[d].getLng(), a = i[d].getLat(); l > k && (k = l); a > b && (b = a); l < n && (n = l); a < e && (e = a) } i = new __MapNS__.LatLng(e, n); k = new __MapNS__.LatLng(b, k); k =
                new __MapNS__.LatLngBounds(i, k)
            } return k
        }
    }); c = { path: null, strokeColor: j.union(c.isInstanceOf(__MapNS__.Color), c.isString, c.isNull), strokeWeight: c.isNumber, strokeOpacity: c.isNumber, strokeDashStyle: c.isString, startArrow: c.isString, endArrow: c.isString, strokeLinejoin: c.isString, strokeLinecap: c.isString, cursor: c.isString, editable: c.isBoolean, hasLabel: c.isBoolean, zIndex: c.isNumber, simplify: c.isBoolean, visible: c.isBoolean }; j.publicProperties(__MapNS__.Polyline, c)
})(); (function (c) {
    var s = c.MVCObject.checkers, q = c.Polyline, j = c.MVCObject, u = __MapNSImpl__.Synchronize; c.Polygon = __MapNSImpl__.Class(q, { initialize: function (k) { k = u.fill(k, { strokeWeight: 2, filled: true }); q.apply(this, [k]); this.set("fillColor", k.fillColor || "#1791fc") } }); var i = j.union(s.isInstanceOf(c.Color), s.isString, s.isNull); j.publicProperties(c.Polygon, {
        path: null, strokeColor: i, strokeWeight: s.isNumber, strokeOpacity: s.isNumber, strokeDashStyle: s.isString, cursor: s.isString, zIndex: s.isNumber, visible: s.isBoolean,
        fillColor: i, fillOpacity: s.isNumber, simplify: s.isBoolean, editable: s.isBoolean
    })
})(__MapNS__); (function (c) {
    var s = c.MVCObject.checkers, q = c.MVCView, j = c.MVCObject, u = c.Overlay, i = c.LatLng, k = __MapNSImpl__.Synchronize; c.Circle = __MapNSImpl__.Class(u, {
        initialize: function (e) { u.apply(this); var b = { center: new c.LatLng(0, 0), radius: 0, strokeColor: new c.Color(23, 145, 252, 0.8), strokeWeight: 1, fillColor: new c.Color(23, 145, 252, 0.2), strokeDashStyle: "solid", zIndex: 0, cursor: "", visible: true }; e = k.fill(e, b); this.setValues(e); q.loadView("Circle", this) }, construct: function () { this.set("panes_", this.getPanes()); this.notify("construct_") },
        draw: function () { this.notify("draw_") }, destroy: function () { this.notify("destroy_"); this.set("panes_", null) }, getBounds: function () { var e = this.get("center"), b = this.get("radius"), d = null, f = e.getLat(); if (e) if (b <= 0) d = new c.LatLngBounds(new c.LatLng(e.getLat(), e.getLng()), new c.LatLng(e.getLat(), e.getLng())); else { var l = b / 6378137, a = l * 180 / Math.PI; b = f + a; d = f - a; a = Math.asin(l / 2 / Math.cos(f * Math.PI / 180)) * 360 / Math.PI; f = e.getLng() + a; e = e.getLng() - a; d = new c.LatLngBounds(new c.LatLng(d, e), new c.LatLng(b, f)) } return d }
    });
    var n = j.union(s.isInstanceOf(c.Color), s.isString, s.isNull); s = { center: j.union(s.isInstanceOf(i), s.isNull), radius: s.isNumber, strokeColor: n, fillColor: n, strokeWeight: s.isNumber, strokeOpacity: s.isNumber, fillOpacity: s.isNumber, strokeDashStyle: s.isString, cursor: s.isString, zIndex: s.isNumber, visible: s.isBoolean }; j.publicProperties(c.Circle, s)
})(__MapNS__); (function (c) {
    var s = __MapNSImpl__.Util, q = c.Point, j = c.Size, u = c.MVCObject, i = __MapNSImpl__.Interfaces, k = c.MVCObject.checkers; c.MarkerImage = __MapNSImpl__.Class(u, { initialize: function (b, d, f, l, a, h, m) { u.apply(this); this.set("origin_", l || new q(0, 0)); this.set("size_", d || a); this.set("anchor_", f || new q(0, 0)); this.set("scaledSize_", a); this.set("url_", b); this.set("offset_", h); this.set("printable_", m); new e(this) } }); var n = u.union(k.checkInterface(i.Size), k.isNull); i = u.union(k.checkInterface(i.Point), k.isNull); c.MVCObject.publicProperties(c.MarkerImage,
    { url_: k.isString, size_: n, origin_: i, anchor_: i, scaledSize_: n }); var e = __MapNSImpl__.Class(u, { initialize: function (b) { u.apply(this); this.bindsTo(["origin_", "size_", "anchor_", "scaledSize_", "ready_", "url_"], b) }, url__changed: function () { var b = this, d = this.get("url_"); s.fetchImage(d, function (f, l) { if (f !== 0 && l !== 0) { b.get("size_") || b.set("size_", new j(f, l)); b.set("ready_", true) } }) } }); c.MarkerShape = __MapNSImpl__.Class(u, { initialize: function (b, d) { u.apply(this); this.set("coord_", b); this.set("type_", d) } })
})(__MapNS__); (function (c) {
    var s = c.MVCObject.checkers, q = __MapNSImpl__.Interfaces, j = __MapNSImpl__.Util, u = c.Size, i = c.ALIGN, k = c.MVCObject, n = __MapNSImpl__.Synchronize; c.MarkerDecoration = __MapNSImpl__.Class(k, { initialize: function (d) { k.apply(this); var f = { align: i.CENTER, zIndex: 0, margin: new u(0, 0) }; d = n.fill(d, f); this.setOptions(d); new b(this) } }); var e = k.union(s.isString, s.isNull, s.isNumber, s.isHtmlControl); k.publicProperties(c.MarkerDecoration, { content: e, margin: s.checkInterface(q.Size), marker: null }); var b = __MapNSImpl__.Class(c.MVCObject,
    {
        initialize: function (d) { k.apply(this); this.set("model_", d); this.bindsTo(["content", "align", "margin", "marker"], d) }, iconDom__changed: function () { var d = this.get("container_"), f = this.get("iconDom_"); if (d && d.parentNode) try { d.parentNode.removeChild(d) } catch (l) { } if (!d) { d = document.createElement("div"); d.style.cssText = "position:absolute;"; this.set("container_", d) } if (f) { f.appendChild(d); this.notify("content"); this.draw() } }, marker_changed: function () {
            var d = this.get("marker"); this.unbind("iconDom_"); d ? this.bindTo("iconDom_",
            d) : this.notify("iconDom_")
        }, content_changed: function () { var d = this.get("container_"), f = this.get("content"); if (d && f) { d.innerHTML = ""; if (j.isHtmlControl(f)) d.appendChild(f); else d.innerHTML = f; this.draw() } }, changed: function (d) { if (d === "align" || d === "margin") this.draw() }, draw: function () { this.get("container_") && j.setPositionByAlign(this.get("container_"), this.get("align"), this.get("margin"), this.get("iconDom_")) }
    })
})(__MapNS__); (function (c) {
    function s() { return m = m || new f(u.domain + "imgs/marker.png", new k(22, 34), new n(11, 34), new n(0, 0)) } function q() { return p = p || new f(u.domain + "imgs/marker.png", new k(51, 39), new n(18, 34), new n(22, 0)) } function j() { return v = v || new c.MarkerShape([7, 0, 13, 0, 17, 1, 22, 7, 22, 8, 22, 14, 21, 16, 20, 18, 18, 19, 15, 22, 13, 25, 12, 26, 12, 28, 11, 31, 11, 33, 10, 33, 10, 29, 9, 28, 9, 26, 8, 25, 0, 15, 0, 7], "poly") } var u = __MapNSImpl__.Config, i = c.Overlay, k = c.Size, n = c.Point, e = c.MVCObject, b = c.MVCView, d = c.Animation, f = c.MarkerImage, l = __MapNSImpl__.Interfaces,
    a = c.MVCObject.checkers, h = __MapNSImpl__.Synchronize, m = null, p = null, v = null, x = null; c.Marker = __MapNSImpl__.Class(i, {
        initialize: function (r) {
            i.apply(this); r = h.fill(r, { icon: null, shadow: null, shape: null, dragTargetIcon: null, title: "", cursor: "pointer", clickable: true, visible: true, zIndex: 0, flat: false, dragAnimation: 1, altitude_: 0, background: "", draggable: false }); !r.icon && (r.icon = s(), r.shadow && (r.shadow = q()), r.shape = j()); if (r.draggable) {
                var w = r, y; if (!(y = r.dragTargetIcon)) y = x = x || new f(u.domain + "imgs/target.png", new k(16,
                16), new n(8, 8), new n(0, 0)); w.dragTargetIcon = y
            } this.setOptions(r); b.loadView("Marker", this)
        }, construct: function () { this.set("panes_", this.getPanes()) }, destroy: function () { if (this.get("panes_")) { this.set("dragEvent_", false); this.notify("destroy_"); this.set("panes_", null) } }, draw: function () { this.notify("draw_") }, startDrag: function (r) { this.set("dragEvent_", r) }, stopDrag: function () { this.set("dragEvent_", false) }, changed: function (r) {
            var w = this.get(r); switch (r) {
                case "animation": this.set("animationType_", w); break;
                case "shadow": case "icon": case "dragTargetIcon": if (r === "icon") if (this.get("icon") === null) { this.unbind(r + "Ready_"); this.set("icon", s()); this.set("shadow", q()); break } else if (this.get("icon") !== s()) { this.get("shadow") === q() && this.set("shadow", null); this.get("shape") === j() && this.set("shape", null) } this.unbind(r + "Ready_"); w && this.bindTo(r + "Ready_", w, "ready_")
            }
        }
    }); c.Marker.Animation = { BOUNCE: 0, DROP: 1, JUMP: 2, STICK: 3 }; var B = e.union(function (r) { return r === d.BOUNCE || r === d.DROP || r === d.JUMP || r === d.STICK }, a.isNull),
    D = e.union(a.isInstanceOf(f), a.isNull), C = e.union(a.isInstanceOf(c.MarkerShape), a.isNull); l = { position: e.union(a.checkInterface(l.LatLng), a.isNull), icon: D, title: a.isStringOrNull, shadow: D, dragTargetIcon: D, shape: C, cursor: a.isString, zIndex: a.isNumber, visible: a.isBoolean, clickable: a.isBoolean, flat: a.isBoolean, draggable: a.isBoolean, background: a.isStringOrNull, animation: B }; e.publicProperties(c.Marker, l)
})(__MapNS__); (function (c) {
    var s = c.Point, q = __MapNSImpl__.Interfaces, j = c.MVCObject, u = c.MVCView, i = j.checkers, k = c.Overlay, n = __MapNSImpl__.Synchronize; c.Label = __MapNSImpl__.Class(k, {
        initialize: function (f) { k.apply(this); var l = { offset: new s(0, 0), style: { border: "solid 1px #999", fontSize: "12px", padding: "2px", backgroundColor: "#fff" }, visible: true, opacity: 1, content: "" }; f = n.fill(f, l); this.setOptions(f); u.loadView("Label", this) }, construct: function () { this.set("panes_", this.getPanes()) }, destroy: function () {
            this.notify("destroy_");
            this.set("panes_", null)
        }, draw: function () { this.notify("draw_") }, changed: function (f) { this.get(f) }
    }); var e = j.union(i.checkInterface(q.LatLng), i.isInstanceOf(c.Marker), i.isNull), b = j.union(i.isString, i.isNull, i.isNumber, i.isHtmlControl), d = j.union(i.isObject, i.isString, i.isNull); q = j.union(i.checkInterface(q.Point), i.checkInterface(q.Size), i.isNull); j.publicProperties(c.Label, { style: d, position: e, offset: q, content: b, zIndex: i.isNumberOrNull, opacity: i.isNumber, visible: i.isBoolean })
})(__MapNS__); (function (c) {
    var s = c.LatLngBounds, q = c.MVCObject.checkers, j = __MapNSImpl__.Synchronize, u = c.MVCView, i = c.Overlay; c.GroundOverlay = __MapNSImpl__.Class(i, { initialize: function (k) { i.apply(this); k = j.fill(k, { visible: true, opacity: 1 }); this.setOptions(k); u.loadView("GroundOverlay", this) }, construct: function () { this.set("panes_", this.getPanes()) }, destroy: function () { this.notify("destroy_"); this.set("panes_", null) }, draw: function () { this.notify("draw_") } }); s = c.MVCObject.union(q.checkInterface(s), q.isNull); c.MVCObject.publicProperties(c.GroundOverlay,
    { zIndex: q.isNumberOrNull, opacity: q.isNumber, visible: q.isBoolean, imageUrl: q.isStringOrNull, bounds: s })
})(__MapNS__); (function (c) {
    function s(r, w, y) {
        var A = document.createElement("div"); A.style.cssText = "position:absolute;overflow:hidden;z-index:1;opacity:0.01;filter:alpha(opacity=1);cursor:pointer"; var E = document.createElement("img"); E.style.cssText = "position:absolute;-moz-user-select:none;-khtml-user-select:none;border:none;"; E.unselectable = "on"; var g = function (o) { n.stopEvent(o); return false }; n.addDomListener(E, "selectstart", g); n.addDomListener(E, "dragstart", g); A.appendChild(E); E.src = w; w = "qimgmapnavcontrol" + m++; g =
        null; E.setAttribute("usemap", "#" + w); i.setSize(E, y); i.setSize(A, y); if (k.ie && k.ie < 9) { E.setAttribute("useMap", "#" + w); g = document.createElement('<map name="' + w + '"></map>') } else { g = document.createElement("map"); g.setAttribute("name", w) } A.appendChild(g); r.appendChild(A); return g
    } function q(r, w, y) { var A = document.createElement("area"); A.href = "javascript:void(0)"; r.appendChild(A); A.setAttribute("shape", "poly"); A.setAttribute("coords", w.join(",")); A.style.cursor = "pointer"; y && (A.title = y); return A } function j(r,
    w, y, A) { var E = function (g) { return function () { a(r, y, A[g]) } }; n.addDomListener(w, "mouseover", E(1)); n.addDomListener(w, "mouseout", E(0)); n.addDomListener(w, "mouseup", E(1)); n.addDomListener(w, "mousedown", E(2)) } function u(r, w, y) {
        var A = y.get("minZoom"), E = y.get("maxZoom"), g = y.get("zoomLevelTips"), o; for (o in g) {
            var t = parseInt(o); if (t >= A && t <= E) {
                var z = p.levelTips[w], F = document.createElement("div"); F.style.position = "absolute"; F.style.cssText = "line-height:12px;font-size:12px;position:absolute;color:#fff;padding-left:" +
                (w == "left" ? "2px" : "9px") + ";padding-top:" + (k.ie && k.ie == 6 ? "1px" : "0px"); i.setSize(F, [z[2], z[3]]); a(F, p.url, z); z = document.createElement("span"); z.style.position = "absolute"; z.innerHTML = g[o]; F.appendChild(z); w === "right" ? F.style.left = "34px" : F.style.left = "-16px"; F.style.bottom = 9 * (t - A) - 3 + "px"; r.appendChild(F); n.addDomListener(F, "click", function (G) { return function () { y.get("map").zoomTo(G) } }(t))
            }
        }
    } var i = __MapNSImpl__.Util, k = i.Browser(), n = c.Event, e = __MapNSImpl__.Interfaces, b = c.MVCObject.checkers, d = __MapNSImpl__.Config,
    f = __MapNSImpl__.RC.NavControl, l = __MapNSImpl__.Synchronize, a = i.setCssSprite, h = i.setDomCoord, m = 0, p = {
        url: d.domain + "imgs/ctrls.png", background: [0, 121, 44, 44], downhover: [44, 121, 44, 44], lefthover: [88, 121, 44, 44], uphover: [132, 121, 44, 44], righthover: [176, 121, 44, 44], downpress: [220, 121, 44, 44], leftpress: [264, 121, 44, 44], uppress: [308, 121, 44, 44], rightpress: [352, 121, 44, 44], inback: [0, 69, 23, 25], outback: [0, 95, 23, 25], inhover: [26, 69, 23, 25], outhover: [26, 95, 23, 25], inpress: [53, 69, 23, 25], outpress: [53, 95, 23, 25], slideback: [170,
        76, 24, 13], slidehover: [170, 92, 24, 13], slidepress: [170, 107, 24, 13], ruler: [84, 0, 8, 9], heat: [92, 0, 8, 9], levelTips: { right: [139, 54, 25, 16], left: [112, 54, 25, 16] }
    }, v = [22, 22, 8, 8, 2, 16, 0, 26, 2, 36, 8, 44], x = [22, 22, 44, 8, 50, 16, 52, 26, 50, 36, 44, 44], B = [22, 22, 8, 8, 16, 2, 26, 0, 36, 2, 44, 8], D = [22, 22, 8, 44, 16, 50, 26, 52, 36, 50, 44, 44], C = __MapNSImpl__.Class(c.Control, {
        initialize: function (r) {
            r = l.fill(r, { style: c.NavigationControlStyle.DEFAULT, maxZoom: d.zoomMax, minZoom: d.zoomMin, zoomLevelTips: f.zoomLevelTips }); c.Control.apply(this, [r]); this.set("content",
            this.getControlDom())
        }, getControlDom: function () {
            var r = this.get("map"); if (r) {
                var w = this.get("minZoom") || r.get("minZoom"), y = this.get("maxZoom") || r.get("maxZoom"); r = document.createElement("div"); var A = document.createElement("div"); A.style.cssText = "position:relative;margin-bottom:10px;"; var E = document.createElement("div"); E.style.cssText = "position:absolute;z-index:0;"; var g = p.background; i.setSize(A, [g[2], g[3]]); i.setSize(E, [g[2], g[3]]); a(E, p.url, g); A.appendChild(E); r.appendChild(A); var o = s(A, p.url, [g[2],
                g[3]]); A = q(o, v, f.left); j(E, A, p.url, [p.background, p.lefthover, p.leftpress]); g = q(o, x, f.right); j(E, g, p.url, [p.background, p.righthover, p.rightpress]); var t = q(o, B, f.up); j(E, t, p.url, [p.background, p.uphover, p.uppress]); o = q(o, D, f.down); j(E, o, p.url, [p.background, p.downhover, p.downpress]); E = document.createElement("div"); E.style.cssText = "position:relative;margin-left:11px;cursor:pointer;"; E.title = f.zoomIn; var z = document.createElement("div"); z.style.cssText = "position:relative;margin-left:11px;cursor:pointer;";
                z.title = f.zoomOut; var F = p.inback, G = p.outback; i.setSize(E, [F[2], F[3]]); i.setSize(z, [G[2], G[3]]); a(E, p.url, F); a(z, p.url, G); F = [p.outback, p.outhover, p.outpress]; j(E, E, p.url, [p.inback, p.inhover, p.inpress]); j(z, z, p.url, F); r.appendChild(E); F = document.createElement("div"); F.style.cssText = "position:relative;cursor:pointer;"; var K = p.ruler, J = p.heat; i.setSize(F, [0, (y - w + 1) * K[3] + 1]); var N = document.createElement("div"); N.style.cssText = "position:absolute;cursor:pointer;"; N.title = f.ruler; for (var S = -2; S < y - w; S++) {
                    var O =
                    document.createElement("div"); i.setSize(O, [K[2], K[3]]); a(O, p.url, K); N.appendChild(O)
                } G = document.createElement("div"); G.style.cssText = "position:absolute;cursor:pointer;"; G.title = f.ruler; for (S = -2; S < y - w; S++) { O = document.createElement("div"); i.setSize(O, [J[2], J[3]]); a(O, p.url, J); G.appendChild(O) } i.setSize(N, [K[2], (y - w + 1) * K[3]]); h(N, [17, -2]); i.setSize(G, [J[2], (y - w + 1) * J[3]]); h(G, [17, -2]); var L = document.createElement("div"); L.style.position = "absolute"; L.style.margin = "auto 0px"; L.title = f.slide; J = p.slideback;
                i.setSize(L, [J[2], J[3]]); a(L, p.url, J); h(L, [10, K[3]]); j(L, L, p.url, [p.slideback, p.slidehover, p.slidepress]); var R = document.createElement("div"); R.style.display = "none"; r.appendChild(F); F.appendChild(N); F.appendChild(G); F.appendChild(L); F.appendChild(R); r.appendChild(z); var Q = this; K = function (H) {
                    return function () {
                        var I = Q.get("map"); if (I) {
                            var M = Q.get("viewHeight_") / 3, U = Q.get("viewWidth_") / 3, V = null; switch (H) {
                                case 4: I.zoomIn(); break; case 5: I.zoomOut(); break; case 0: V = new c.Size(0, M); break; case 1: V = new c.Size(0,
                                -M); break; case 2: V = new c.Size(U, 0); break; case 3: V = new c.Size(-U, 0); break; case 6: Q.resume()
                            } V && I.moveBy(V)
                        }
                    }
                }; var T; Q = this; var P = function (H, I) { return function () { if (T) { window.clearTimeout(T); T = null } if (Q.getCurrentStyle().style === 3) if (I === "none") T = setTimeout(function () { H.style.display = I; T = null }, 1E3); else { H.style.display = I; T = null } } }; n.addDomListener(t, "click", K(0)); n.addDomListener(o, "click", K(1)); n.addDomListener(A, "click", K(2)); n.addDomListener(g, "click", K(3)); n.addDomListener(E, "click", K(4)); n.addDomListener(z,
                "click", K(5)); n.addDomListener(F, "mouseover", P(R, "")); n.addDomListener(E, "mouseover", P(R, "")); n.addDomListener(z, "mouseover", P(R, "")); n.addDomListener(R, "mouseover", P(R, "")); n.addDomListener(F, "mouseout", P(R, "none")); n.addDomListener(E, "mouseout", P(R, "none")); n.addDomListener(z, "mouseout", P(R, "none")); n.addDomListener(R, "mouseout", P(R, "none")); n.addListener(this, "zoomlevel_changed", function () { P(R, "")(); P(R, "none")() }); A = function (H, I) {
                    if (!I || I[0] !== 0 || I[1] !== 0) {
                        var M = i.getMouseXY(H), U = i.getDomCoordinate(N);
                        M = (1 - (M[1] - U[1]) / (U[3] - 9)) * (y - w) + w + 1; Q.get("map").zoomTo(Math.floor(M)); Q.zoomLevel_changed()
                    }
                }; n.addDomListener(N, "click", A); n.addDomListener(G, "click", A); i.enableDrag(L, F, { dragging: function (H, I) { if (I[0] !== 0 || I[1] !== 0) { var M = i.getMouseXY(H), U = i.getDomCoordinate(N), V = Q.get("slideStart_"), W = Q.get("slideEnd_"); M = M[1] - U[1] + V - 11; M < -2 && (M = -2); M >= W - 9 && (M = W - 9); L.style.top = M + "px"; Q.setHeat(M, U[3]) } }, dragend: A }); return r
            }
        }, setHeat: function (r) {
            var w = this.get("slideStart_") - 2; r = (r - w) / 9; r = r > 0 ? r : 0; w = this.get("heat_").getElementsByTagName("div");
            for (var y = 0; y < w.length; y++) if (y <= r) { if (w[y]) w[y].style.visibility = "hidden" } else if (w[y]) w[y].style.visibility = "visible"
        }, getCurrentStyle: function () {
            var r = this.get("style"), w = this.get("content"), y, A, E = 0, g = this.get("maxZoom") - this.get("minZoom"), o = p.background[3] + p.inback[3] + p.outback[3] + 12; g = p.background[3] + p.inback[3] + p.outback[3] + g * p.ruler[3] + 12; var t = p.background[3] + 16; if (w.parentNode && w.parentNode.parentNode && w.parentNode.style) {
                A = i.getDomCoordinate(w); w = i.getDomCoordinate(w.parentNode.parentNode);
                y = A[1] - w[1]; A = A[0] - w[0]
            } if (r === 0) { r = this.get("viewHeight_") - y; r = r < o ? 1 : r < g ? 2 : 3; r !== this.get("currentStyle") && this.set("currentStyle", r) } if (this.get("viewWidth_") - A < t) E = 1; return { style: r, type: E }
        }, draw: function () {
            var r = this.get("content"), w = this.get("map"); if (r && w) {
                w = this.getCurrentStyle(); var y = w.style, A = r.firstChild, E = A.nextSibling.nextSibling, g = E.firstChild; r = g.nextSibling; var o = r.nextSibling; tips = o.nextSibling; if (y == 1) { A.style.display = "none"; E.style.display = "none" } else A.style.display = ""; if (y == 2) E.style.display =
                "none"; if (y == 3) { E.style.display = ""; this.set("slideStart_", 0); y = g.offsetHeight; if (k.ie && k.ie <= 6) y -= 9; this.set("slideEnd_", y); this.set("slide_", o); this.set("heat_", r) } w = w.type; if (tips.childNodes.length) tips.innerHTML = ""; w == 1 ? u(tips, "left", this) : u(tips, "right", this); this.zoomLevel_changed()
            }
        }, zoomLevel_changed: function () {
            var r = this.get("zoomLevel"), w = this.get("slideEnd_"), y = this.get("minZoom"), A = this.get("maxZoom"), E = this.get("slideStart_") - 2; if (typeof r !== "undefined" && typeof w !== "undefined") {
                y = (r - y) /
                (A - y + 1); r = this.get("slide_"); w = w - Math.round(y * (w - E) + 9); r.style.top = w + "px"; this.setHeat(w)
            }
        }, maxZoom_changed: function () { this.get("maxZoom") && this.set("content", this.getControlDom()) }, minZoom_changed: function () { this.get("minZoom") && this.set("content", this.getControlDom()) }, save: function () { var r = this.getMap(); if (r) { this.set("center_", r.getCenter()); this.set("zoomLevel_", r.getZoomLevel()) } }, resume: function () { var r = this.getMap(), w = this.get("center_"); r && w && r.zoomTo(this.get("zoomLevel_"), w) }, construct: function () {
            var r =
            this.getMap(); this.bindTo("zoomLevel", r); this.bindTo("maxZoom", r); this.bindTo("minZoom", r); this.save()
        }, destroy: function () { var r = this.getMap(), w = this.get("content"); if (r && w) { w.parentNode.removeChild(w); this.unbind("zoomLevel", r); this.unbind("minZoom", r); this.unbind("maxZoom", r); this.set("center_", null); this.set("zoomLevel_", null) } }
    }); c.NavigationControlStyle = { DEFAULT: 0, SMALL: 1, NORMAL: 2, LARGE: 3 }; e = {
        content: null, margin: b.checkInterface(e.Size), align: b.isNumber, style: b.isNumber, zoomLevelTips: b.isObject,
        map: null
    }; c.NavigationControl = C; c.MVCObject.publicProperties(C, e)
})(__MapNS__); (function (c) {
    var s = __MapNSImpl__.Synchronize, q = c.Control; c.CopyrightControl = __MapNSImpl__.Class(q, {
        initialize: function (j) {
            var u = document.createElement("span"); u.style.cssText = "display:block;*width:1%;height:15px;font:11px arial,simsun;white-space:nowrap;filter:alpha(opacity=60 finishopacity=30 style=1 startx=0,starty=0,finishx=200,finishy=20) progid:DXImageTransform.Microsoft.gradient(startcolorstr=#FFFFFF,endcolorstr=#FFFFFF,gradientType=1);background-image:-moz-linear-gradient(right center , rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.45) 50px);background-image:-o-linear-gradient(right , rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.45) 50px);background-image:-webkit-gradient(linear,100 100,80 20,from(rgba(255, 255, 255, 0)),to(rgba(255, 255, 255, 0.45)))";
            u.innerHTML = __MapNSImpl__.RC.Control.TencentText; j = s.fill(j, { content: u, zIndex: 10 }); q.apply(this, [j])
        }, draw: function () { var j = this.get("content"), u = this.get("map"), i = u.layers; if (i) { var k = []; u = u.getBounds(); for (var n = this.get("zoomLevel"), e = 0; e < i.getLength() ; e++) { var b = i.getAt(e).get("copyrights"); if (b) (b = b.getCopyrightNotice(u, n)) && k.push(b) } i = this.get("copySpan"); if (!i) { i = document.createElement("span"); j.appendChild(i); this.set("copySpan", i) } i.innerHTML = k.join(",") } }, changed: function (j) { switch (j) { case "zoomLevel": case "center": case "baseLayer": this.redraw() } },
        construct: function () { var j = this.get("map"); this.bindTo("zoomLevel", j); this.bindTo("center", j); this.bindTo("baseLayer", j) }, destroy: function () { var j = this.get("map"); this.unbind("zoomLevel", j); this.unbind("center", j); this.unbind("baseLayer", j) }
    })
})(__MapNS__); (function (c) {
    var s = __MapNSImpl__.Synchronize, q = c.Event, j = c.Size, u = c.MapTypeId, i = c.MVCObject.checkers, k = __MapNSImpl__.Util, n = k.Browser(), e = c.Control; c.MapTypeControlStyle = { DEFAULT: 0, DROPDOWN_MENU: 1, HORIZONTAL_BAR: 2 }; e = __MapNSImpl__.Class(e, {
        initialize: function (b) { var d = { mapTypeIds: [u.ROADMAP, u.SATELLITE, u.HYBRID], align: c.ALIGN.TOP_RIGHT, margin: new j(5, 5), style: c.MapTypeControlStyle.DEFAULT }; b = s.fill(b, d); c.Control.apply(this, [b]) }, getControlDom: function () {
            function b(g, o) {
                for (var t = 0; t < g.layers.length; t++) {
                    var z =
                    g.layers[t]; if (!z.get("base")) {
                        var F = document.createElement("div"); F.style.cssText = "font-size:13px;padding:3px 8px 1px 1px;_padding-right:2px;;background-color: white;font-family: Arial, sans-serif;line-height:18px;text-align:left;font-size:13px;width:46px"; F.title = z.get("alt"); var G = "cb_" + p + "_" + t, K = g.fullLoad ? "checked" : "", J = "top"; if (n.ie) J = n.ie > 6 ? "baseline" : "middle"; F.innerHTML = "<span><input id=" + G + " " + K + ' style = "cursor: pointer;" type="checkbox"/></span><label for=' + G + ' style="color:#333;vertical-align: ' +
                        J + ';cursor: pointer;">' + z.get("name") + "</label>"; o.appendChild(F); k.setUnSelectable(F); (function (N, S) { q.addDomListener(F, "click", function () { document.getElementById(S).checked ? N.setMap(d) : N.setMap(null) }) })(z, G)
                    }
                }
            } var d = this.get("map"); if (d) {
                var f = document.createElement("div"); f.style.cssText = "cursor:pointer;"; for (var l = this.get("mapTypeIds"), a = {}, h = [], m, p = 0, v = l.length; p < v; p++) {
                    var x = l[p], B = d.mapTypes.get(x); if (v > 1 && x == u.HYBRID) m = B; else {
                        var D = document.createElement("div"); D.style.cssText = "float:left;";
                        var C = p > 0 ? "border-left:0px" : "", r = n.ie ? "1px" : "0px", w = document.createElement("div"); w.style.cssText = "color: #333;font-size:13px;border:1px solid #717B87;padding:1px 6px;-webkit-box-shadow: rgba(0, 0, 0, 0.398438) 0px 2px 4px;box-shadow: rgba(0, 0, 0, 0.398438) 0px 2px 4px;background-color: white;min-width:30px;font-family: Arial, sans-serif;line-height:20px;padding-top:" + r + ";text-align:center;overflow: hidden;" + C; w.title = B.alt; w.innerHTML = B.name; if (d.get("mapTypeId") == x || l.toString().indexOf(u.HYBRID >
                        -1) && d.get("mapTypeId") == u.HYBRID && x == u.SATELLITE) w.style.fontWeight = "bold"; h.push(w); k.setUnSelectable(w); D.appendChild(w); C = document.createElement("div"); C.style.cssText = "color: #333;font-size:13px;background-color:#fff;border: 1px solid #717B87;position: absolute;-webkit-box-shadow: rgba(0, 0, 0, 0.398438) 0px 2px 4px;box-shadow: rgba(0, 0, 0, 0.398438) 0px 2px 4px;text-align: left;line-height:20px;z-index:-1;display:none;top:20px;left:" + p * 30 + "px;"; (function (g, o) {
                            q.addDomListener(w, "click", function () {
                                m &&
                                g == u.SATELLITE ? d.setMapTypeId(u.HYBRID) : d.setMapTypeId(g); for (var t = 0; t < h.length; t++) { h[t].style.color = "#333"; h[t].style.fontWeight = "normal" } this.style.color = "#000"; this.style.fontWeight = "bold"; for (t = 0; t < l.length; t++) { var z = l[t]; if (a[z]) a[z].style.display = "none" } if (a[g].childNodes.length) { a[g].style.display = ""; t = a[g].getElementsByTagName("input"); z = o.fullLoad ? "checked" : ""; for (var F = 0; F < t.length; F++) t[F].checked = z }
                            }); q.addDomListener(w, "mouseover", function () {
                                if (d.get("mapTypeId") == g || d.get("mapTypeId") ==
                                u.HYBRID && g == u.SATELLITE) if (a[g].childNodes.length) a[g].style.display = "block"; this.style.backgroundColor = "#E7E8E7"
                            }); q.addDomListener(w, "mouseout", function () { this.style.background = "#FFF"; A && clearTimeout(A); A = setTimeout(function () { if (!E) a[g].style.display = "none" }, 2E3) })
                        })(x, B); var y, A, E; q.addDomListener(C, "mouseover", function (g) { if (k.containsNode(this, g.target || g.srcElement)) { E = true; y && clearTimeout(y); this.style.display = "block" } }); q.addDomListener(C, "mouseout", function () {
                            var g = this; E = false; y = setTimeout(function () {
                                g.style.display =
                                "none"
                            }, 1E3)
                        }); a[x] = C; b(B, C); D.appendChild(C); f.appendChild(D)
                    }
                } m && b(m, a[u.SATELLITE]); return f
            }
        }, construct: function () { this.bindTo("loaded", this.getMap()) }, loaded_changed: function () { this.get("loaded") && this.set("content", this.getControlDom()) }, destroy: function () { var b = this.getMap(), d = this.get("content"); if (b && d) { d.parentNode.removeChild(d); this.unbind("mapTypeId") } }
    }); i = { content: null, mapTypeIds: i.isInstanceOf(j), align: i.isNumber, style: i.isNumber, map: null }; c.MapTypeControl = e; c.MVCObject.publicProperties(e,
    i)
})(__MapNS__); (function (c) {
    var s = c.MVCObject.checkers, q = c.Control; MVCObject = c.MVCObject; Synchronize = __MapNSImpl__.Synchronize; c.ScaleControl = __MapNSImpl__.Class(q, {
        initialize: function (j) {
            j = Synchronize.fill(j, { textColor: "#333333", barColor: "#333333", printable: true }); var u = document.createElement("div"); u.style.width = "100px"; var i = document.createElement("div"), k = document.createElement("div"); i.style.cssText = "font:11px arial,simsun;color:" + j.textColor + ";text-align:center;"; k.style.cssText = "position:relative;height:8px;width:84px;";
            var n = document.createElement("div"); n.style.cssText = "position:absolute;border:1px solid #ffffff;width:1px;height:6px;background:" + j.barColor + ";font-size:0;line-height:0;"; n.style.left = 0; var e = document.createElement("div"); e.style.cssText = n.style.cssText; e.style.left = "81px"; var b = document.createElement("div"); b.style.cssText = n.style.cssText; b.style.left = "2px"; b.style.width = "80px"; b.style.height = "2px"; b.style.top = "2px"; b.style.borderLeft = "none"; b.style.borderRight = "none"; k.appendChild(n); k.appendChild(e);
            k.appendChild(b); u.appendChild(i); u.appendChild(k); j.content = u; q.apply(this, [j]); this.set("text", i); this.set("rl", n); this.set("rr", e); this.set("rm", b)
        }, construct: function () { var j = this.get("map"); this.bindTo("center", j); this.bindTo("zoomLevel", j) }, destroy: function () { this.unbind("center"); this.unbind("zoomLevel") }, getResolution: function () { var j = this.get("center"), u = this.get("zoomLevel"); if (j && u) return Math.abs(156543.04 * Math.cos(j.getLat() * Math.PI / 180)) / Math.pow(2, u) }, getRoundNum: function (j) {
            var u =
            Math.pow(10, (Math.floor(j) + "").length - 1); j = j / u; j = j >= 10 ? 10 : j >= 5 ? 5 : j >= 2 ? 2 : 1; return u * j
        }, getScaleWidth: function (j) { return Math.round(125 * j) - 10 }, changed: function (j) {
            var u = this.get("rr"), i = this.get("rl"), k = this.get("rm"), n = this.get("text"); switch (j) {
                case "zoomLevel": case "center": if (!this.get("zoomLevel") || !this.get("center")) return; this.get("center").getLat(); this.get("zoomLevel"); j = this.getResolution() * 125; i = this.getRoundNum(j); j = this.getScaleWidth(i / j); i = i < 1E3 ? i + " \u7c73" : i / 1E3 + " \u516c\u91cc"; if (n) n.innerHTML =
                i; if (n) { n.style.width = j + 4 + "px"; k.style.width = j + "px"; u.style.left = j + 1 + "px" } break; case "textColor": if (n) { j = this.get("textColor"); n.style.color = j } break; case "barColor": if (u && k && i) { j = this.get("barColor"); u.style.backgroundColor = j; i.style.backgroundColor = j; k.style.backgroundColor = j }
            } this.redraw()
        }
    }); MVCObject.publicProperties(c.ScaleControl, { textColor: s.isString, barColor: s.isString })
})(__MapNS__); (function (c) {
    var s = __MapNSImpl__.Util, q = __MapNSImpl__.Synchronize, j = c.Event, u = []; c.ContextMenuControl = __MapNSImpl__.Class(c.Control, {
        initialize: function (i) {
            i = q.fill(i, { map: null, zIndex: 100 }); var k = document.createElement("div"), n = document.createElement("div"); n.style.cssText = "position:absolute;z-index:1;border:1px solid #A8B7D2;background:#FFFFFF;display:none;padding:4px 0px 4px 0px;margin:0px 0px;-moz-box-shadow:2px 2px 8px #A8B7D2;-webkit-box-shadow:2px 2px 8px #A8B7D2;"; var e = document.createElement("div");
            e.style.cssText = "position:absolute;background:black;opacity:0.2;filter:alpha(opacity=20);border:1px solid #A8B7D2;display:none;"; var b = document.createElement("table"); b.cellSpacing = "0"; b.cellPadding = "0"; var d = document.createElement("tbody"); b.appendChild(d); n.appendChild(b); k.appendChild(n); k.appendChild(e); i.content = k; c.Control.apply(this, [i]); this.set("tbody_", d); this.set("menu_", n); this.set("shadow_", e); this.set("targets_", []); this.set("items_", []); this.set("itemIndex_", 0); var f = this; i = function () { f.hide() };
            j.addDomListener(document.body.parentNode || document.body, "click", i); j.addDomListener(document.body.parentNode || document.body, "contextmenu", i); j.addDomListener(n, "click", function (l) { j.stopEvent(l) })
        }, construct: function () { this.destroy(); var i = this.get("map"); if (i) { var k = this; this.set("listener_", j.addListener(i, "mousedown", function () { k.hide() })); u.push(this) } }, destroy: function () { for (var i = 0, k; k = u[i]; i++) if (k === this) { u.splice(i, 1); break } this.get("listener_") && j.removeListener(this.get("listener_")) },
        hide: function () { this.get("menu_").style.display = "none"; this.get("shadow_").style.display = "none" }, show: function (i) {
            var k = this.get("map"); if (k) {
                this.set("position", i.qLatLng || null); var n = k.get("mapContainer_"); n = s.getDomCoordinate(n); i = s.getMouseCoordinate(i); var e = new c.Point(i[0] - n[0], i[1] - n[1]), b = this.get("menu_"); i = b.style; n = this.get("shadow_").style; i.display = ""; var d = b.offsetWidth; b = b.offsetHeight; k = k.getViewSize(); var f = e.getX(); e = e.getY(); if (f - d >= 0 && f + d > k.getWidth()) f -= d; if (e - b >= 0 && e + b > k.getHeight()) e -=
                b; i.left = f + "px"; i.top = e + "px"; if (s.Browser().ie !== 0) { n.left = f + 1 + "px"; n.top = e + 1 + "px"; n.width = d + "px"; n.height = b + "px"; n.display = "" } for (k = 0; i = u[k]; k++) i !== this && i.hide()
            }
        }, addTarget: function (i) { for (var k = this.get("targets_"), n = 0, e; e = k[n]; n++) if (e.target === i) return; n = { target: i, listener: null }; var b = this; n.listener = j.addListener(i, "contextmenu", function (d) { b.show(d); j.stopEvent(d); return false }); k.push(n) }, removeTarget: function (i) {
            for (var k = this.get("targets_"), n = 0, e; e = k[n]; n++) if (e.target === i) {
                j.removeListener(e.listener);
                k.splice(n, 1); break
            }
        }, addSeparator: function () { this.get("items_").push({ content: "separator", type: 1 }); var i = this.get("itemIndex_") + 1; this.set("itemIndex_", i); this.renderItems(); return i - 1 }, addItem: function (i, k) { this.get("items_").push({ content: i, handler: k, type: 0 }); var n = this.get("itemIndex_") + 1; this.set("itemIndex_", n); this.renderItems(); return n - 1 }, removeItem: function (i) { var k = this.get("items_"); k[i] && (k[i].content = null); this.renderItems() }, disableItem: function (i) {
            var k = this.get("items_"); k[i] && (k[i].disabled =
            true); this.renderItems()
        }, enableItem: function () { var i = this.get("items_"); i[index] && (i[index].disabled = false); this.renderItems() }, renderItems: function () {
            for (var i, k, n = this, e = this.get("items_"), b = e.length - 1; b >= 0; --b) if (e[b].content) {
                if (e[b].dom) k = e[b].dom; else { i = document.createElement("tr"); k = document.createElement("td"); i.appendChild(k); k.style.cssText = "white-space:nowrap;font-size:12px;color:#4B6AA3;"; e[b].dom = k; this.get("tbody_").appendChild(i) } j.clearListeners(k); if (e[b].type == 0) {
                    k.innerHTML = e[b].content;
                    k.style.padding = "3px 18px"; k.style.margin = "0px 0px"; k.style.lineHeight = "18px"; if (e[b].disabled) { k.style.color = "#999999"; k.style.cursor = "default" } else { k.style.color = "#4B6AA3"; k.style.cursor = "pointer"; j.addDomListener(k, "mouseover", function () { this.style.color = "#4B6AA3"; this.style.background = "#E9EDF4" }); j.addDomListener(k, "mouseout", function () { this.style.color = "#4B6AA3"; this.style.background = "#FFFFFF" }); j.addDomListener(k, "click", function (d) { return function (f) { n.hide(); d && d(f, n.get("position")); j.stopEvent(f) } }(e[b].handler)) }
                } else {
                    k.height =
                    "1px"; k.style.background = "#E6ECF4"
                }
            } else { (i = e[b].dom) && __MapNSImpl__.Util.removeNode(i.parentNode); e[b] = null } e = this.get("shadow_").style; b = this.get("menu_"); e.width = b.offsetWidth + "px"; e.height = b.offsetHeight + "px"
        }
    })
})(__MapNS__); (function (c) {
    var s = __MapNSImpl__.Synchronize, q = c.Event, j = __MapNSImpl__.Config, u = c.Control; c.ZoomHintControl = __MapNSImpl__.Class(u, {
        initialize: function (i) {
            var k = "background-image:url(" + (j.domain + "imgs/ctrls.png") + ");background-repeat:no-repeat;overflow:hidden;font-size:1px; position:absolute;width:7px;height:7px;", n = ['<div style="position:absolute;z-index:0;top:0px;left:0px;overflow:hidden;display:none;">']; n.push('<div style="' + k + 'top:0;left:0;"></div>'); n.push('<div style="' + k + 'top:0;right:0;"></div>');
            n.push('<div style="' + k + 'bottom:0;left:0;"></div>'); n.push('<div style="' + k + 'bottom:0;right:0;"></div>'); n.push("</div>"); n = n.join(""); i = s.fill(i, { content: n, zIndex: 0 }); u.apply(this, [i])
        }, getControlDom: function () {
            var i = "background-image:url(" + (j.domain + "imgs/ctrls.png") + ");background-repeat:no-repeat;overflow:hidden;font-size:1px; position:absolute;width:7px;height:7px;", k = ['<div style="position:absolute;z-index:0;top:0px;left:0px;overflow:hidden;display:none;">']; k.push('<div style="' + i + 'top:0;left:0;"></div>');
            k.push('<div style="' + i + 'top:0;right:0;"></div>'); k.push('<div style="' + i + 'bottom:0;left:0;"></div>'); k.push('<div style="' + i + 'bottom:0;right:0;"></div>'); k.push("</div>"); return k = k.join("")
        }, draw: function () {
            var i = this.get("targetZoom"), k = this.get("zoomLevel") - i; if (k !== 0) {
                var n = this.get("content"), e = this.get("map"), b = this.get("container_"); i = this.get("focusPixel"); if (n && i && e) {
                    b = b.lastChild; n = this.get("zoomAnimation"); var d = e.get("moveAnimation_"); d && d.stop(); var f = k > 0 ? true : false; k = Math.ceil(f ? 60 :
                    120); d = Math.max(30, k / (4 / 3)); var l = b.style; l.width = k + "px"; l.height = d + "px"; l.display = ""; b = b.children; if (f) { b[0].style.backgroundPosition = "0 0"; b[1].style.backgroundPosition = "-7px 0"; b[2].style.backgroundPosition = "0 -7px"; b[3].style.backgroundPosition = "-7px -7px" } else { b[0].style.backgroundPosition = "-7px -7px"; b[1].style.backgroundPosition = "0 -7px"; b[2].style.backgroundPosition = "-7px 0"; b[3].style.backgroundPosition = "0 0" } this.set("position", i); l.left = i.x - k + "px"; l.top = i.y - d + "px"; if (!n) {
                        var a = this; n = new c.Fx({
                            duration: 0.3,
                            fps: 40, method: c.Fx.easeInQuad, callback: function (h) { var m = a.get("position"); l.width = h[0] + "px"; l.height = h[1] + "px"; l.left = m.x - h[0] / 2 + "px"; l.top = m.y - h[1] / 2 + "px" }
                        }); this.set("zoomAnimation", n); q.addListener(n, "end", function () { setTimeout(function () { l.display = "none"; e.get("viewWidth"); e.get("viewHeight"); a.set("focusPixel", null) }, 200) })
                    } if (f) { i = [k, d]; b = [2 * k, 2 * d] } else { i = [k, d]; b = [k / 2, d / 2] } n.set("begins", i); n.set("ends", b); n.start()
                }
            }
        }, changed: function (i) { switch (i) { case "zoomLevel": this.redraw() } }, construct: function () {
            var i =
            this.get("map"); this.destroy(); if (i) { this.set("content", this.getControlDom()); this.bindTo("focusPixel", i); this.bindTo("zoomLevel", i); this.bindTo("targetZoom", i) }
        }, destroy: function () { var i = this.getMap(), k = this.get("content"); i && k && k.parentNode && k.parentNode.removeChild(k); this.unbind("focusPixel"); this.unbind("zoomLevel"); this.unbind("targetZoom"); this.unbind("zoomAnimation"); this.set("focusPixel", null); this.set("zoomLevel", null); this.set("zoomAnimation", null) }
    })
})(__MapNS__); (function (c) {
    var s = __MapNSImpl__.Util, q = c.Event, j = c.MVCObject.checkers, u = c.Point, i = c.Size, k = c.Control, n = c.Map, e = __MapNSImpl__.Synchronize; c.OverviewMap = __MapNSImpl__.Class(MVCObject, {
        initialize: function (b, d) {
            MVCObject.apply(this); d = e.fill(d, { center: null, zoom: null, zoomAdd: 4 }); this.setOptions(d); this.set("container_", b); var f = new n(b, { __hideLogo__: true, zoomInByDblClick: false, draggable: false, scrollWheel: false }); d.center && f.setDraggable(false); this.set("miniMap", f); var l = "border-width:1px;border-style:solid;border-color:#88F #115 #115 #88F;position:absolute;",
            a = s.createDiv(l); s.setUnSelectable(a); new k({ map: f, content: a }); l = "border:1px solid #44B;overflow:hidden;width:100%;height:100%"; var h = s.createDiv(l); a.appendChild(h); l = "background-color:#66C;width:100%;height:100%"; l = s.createDiv(l); s.setOpacity(l, 0.3); h.appendChild(l); h = a.cloneNode(true); new k({ map: f, content: h }); s.setOpacity(h.firstChild.firstChild, 0); s.setCursorStyle(h, "grab", "default"); this.set("rectBorder", a); this.set("rectBack", h); this.enable()
        }, initRect: function () {
            var b = this.get("map"), d = this.get("miniMap"),
            f = b.getBounds(), l = d.get("mapCanvasProjection_"), a = l.fromLatLngToContainerPixel(f.getSouthWest()); f = l.fromLatLngToContainerPixel(f.getNorthEast()); l = b.get("lastZoom") - b.get("zoomLevel"); l = l > 0 ? l << 2 : 1; a = [(f.x - a.x) / l, (a.y - f.y) / l]; f = d.getViewSize(); var h = b.getViewSize(); l = f.getWidth() / h.getWidth(); h = f.getHeight() / h.getHeight(); l = [10 / l, 12 / h]; f = [f.getWidth() / 2, f.getHeight() / 2]; if (a[0] < l[0]) a[0] = l[0]; if (a[1] < l[1]) a[1] = l[1]; if (a[0] > f[0]) a[0] = f[0]; if (a[1] > f[1]) a[1] = f[1]; this.set("rectSize", a); this.set("units",
            Math.pow(2, d.getZoomLevel() - b.getZoomLevel())); f = this.get("rectBack"); l = this.get("rectBorder"); if (b.get("zoomLevel") <= 3) { f.style.display = "none"; l.style.display = "none" } else { f.style.display = ""; l.style.display = "" } b = b.getCenter(); d.set("center", b); d.set("zoomLevel", this.get("detalZoom")); this.setRectPosition(f, b); s.setSize(f, a); this.setRectPosition(l, b); s.setSize(l, a)
        }, setRectPosition: function (b, d) {
            var f = this.get("rectSize"), l = this.get("miniMap"); if (f) {
                l = l.get("mapCanvasProjection_").fromLatLngToContainerPixel(d);
                s.setPosition(b, [l.x - f[0] / 2, l.y - f[1] / 2])
            }
        }, onMapMove: function () { var b = this.get("map"); this.get("miniMap"); if (b) { var d = b.get("zooming_"); b.get("zoomAnimation_"); d || this.setRectPosition(this.get("rectBorder"), b.getCenter()); (b = this.get("dragLatLng")) && this.setRectPosition(this.get("rectBack"), b) } }, onMapMoveEnd: function (b) { var d = this.get("miniMap"), f = this.get("map"), l = this.get("detalZoom"); if (b && (b == "m_drag" || b == "m_auto" || b == "m_zoom")) d.zoomTo(l, f.getCenter()); d.zoomTo(l) }, onRectMouseDown: function (b) {
            q.stopEvent(b);
            this.resetRect(b); this.get("dragObject") && this.onRectMouseUp(b); var d = this.get("rectBack"); s.setCursorStyle(d, "grabbing", "move"); this.set("dragObject", { startPosition: [parseInt(d.style.left), parseInt(d.style.top)], preMove: [0, 0], startPoint: [b.clientX, b.clientY], timeout: window.setInterval(s.callback(this, this.onRectMouseMove), 16), moveListener: q.bindDom(document, "mousemove", this, this.onRectMouseMove), upListener: q.bindDom(document, "mouseup", this, this.onRectMouseUp) })
        }, onRectMouseMove: function (b) {
            var d;
            if (typeof b != "object") d = this.get("dragEvent"); else this.set("dragEvent", [b.clientX, b.clientY]); if (d) { b = this.get("dragObject"); s.setPosition(this.get("rectBack"), this.getDragPoint(d)); d = this.get("miniMap"); var f = d.getViewSize(), l = this.get("moveSize"), a = d.get("mapCanvasProjection_"); f = new u(f.getWidth() / 2 + l[0], f.getHeight() / 2 + l[1]); a = a.fromContainerPixelToLatLng(f); d.setCenter(a); b.preMove[0] += l[0]; b.preMove[1] += l[1] }
        }, getDragPoint: function (b) {
            var d = this.get("dragObject"), f = this.get("rectSize"); b = [d.startPosition[0] -
            d.startPoint[0] + b[0], d.startPosition[1] - d.startPoint[1] + b[1]]; d = [0, 0]; var l = this.get("miniMap").getViewSize(); if (b[0] < 0) { b[0] = 0; d[0] = -2 } if (b[1] < 0) { b[1] = 0; d[1] = -2 } if (b[0] > l.getWidth() - f[0]) { b[0] = l.getWidth() - f[0] - 3; d[0] = 2 } if (b[1] > l.getHeight() - f[1]) { b[1] = l.getHeight() - f[1] - 3; d[1] = 2 } this.set("moveSize", d); return b
        }, onRectMouseUp: function (b) {
            q.stopEvent(b); var d = this.get("rectBack"); s.setCursorStyle(d, "grab", "default"); d = this.get("dragObject"); q.removeListener(d.moveListener); q.removeListener(d.upListener);
            window.clearInterval(d.timeout); b = this.getDragPoint([b.clientX, b.clientY]); var f = this.get("miniMap"), l = f.getViewSize(), a = f.get("mapCanvasProjection_"); l = new u(l.getWidth() / 2 + b[0] - d.startPosition[0], l.getHeight() / 2 + b[1] - d.startPosition[1]); this.set("dragLatLng", a.fromContainerPixelToLatLng(l)); f.moveBy(new i(-b[0] + d.startPosition[0], -b[1] + d.startPosition[1])); f = this.get("map"); a = this.get("units"); f.moveBy(new i((-b[0] + d.startPosition[0] + d.preMove[0]) * a, (-b[1] + d.startPosition[1] + d.preMove[1]) * a)); this.set("dragEvent",
            null); this.set("dragObject", null)
        }, resetRect: function (b) { var d = this.get("miniMap"), f = this.get("map"); if (f) { this.set("dragLatLng", null); d = d.getCenter(); var l = f.get("zooming_"); if (b && !l && (b == "m_drag" || b == "m_auto" || b == "m_zoom")) f.moveTo(d) } }, changed: function (b) { this.get("miniMap"); var d = this.get("map"), f = this.get("zoomAdd"); switch (b) { case "zoomLevel": b = d.get("zoomLevel") - f; if (b <= 0) b = f + b; else if (b <= f) b = f; this.set("detalZoom", b) } }, enable: function () {
            var b = this.get("listeners"); if (!b) {
                b = this.get("rectBack");
                var d = this.get("miniMap"), f = this.get("map"); if (f) { b = [q.bindDom(b, "mousedown", this, this.onRectMouseDown), q.bind(f, "moveend", this, this.onMapMoveEnd), q.bind(f, "resize", this, this.initRect), q.bind(f, "center_changed", this, this.onMapMove), q.bind(d, "center_changed", this, this.onMapMove), q.bind(d, "mouseup", this, this.initRect), q.bind(d, "moveend", this, this.resetRect)]; this.set("listeners", b); this.bindTo("center", f); this.bindTo("zoomLevel", f); this.initRect() }
            }
        }, disable: function () {
            var b, d = this.get("listeners");
            if (d) { for (; b = d.pop() ;) q.removeListener(b); this.set("listeners", null); this.unbind("zoomLevel") }
        }
    }); c.MVCObject.publicProperties(c.OverviewMap, { visible: j.isBoolean, map: null })
})(__MapNS__); (function (c) {
    var s = __MapNSImpl__.Synchronize, q = __MapNSImpl__.Util, j = __MapNSImpl__.Config, u = c.Event, i = c.Size, k = c.ALIGN, n = c.OverviewMap, e = q.setCssSprite; Control = c.Control; var b = {
        url: j.domain + "imgs/ctrls.png", "0": { open: [37, 33, 20, 20], close: [37, 13, 20, 20] }, "1": { open: [111, 12, 20, 20], close: [131, 13, 20, 20] }, "2": { open: [19, 33, 20, 20], close: [19, 13, 20, 20] }, "3": { open: [111, 32, 20, 20], close: [130, 32, 20, 20] }, "4": { open: [37, 33, 20, 20], close: [37, 13, 20, 20] }, "5": { open: [131, 32, 20, 20], close: [112, 32, 20, 20] }, "6": {
            open: [56, 33, 20,
            20], close: [56, 13, 20, 20]
        }, "7": { open: [131, 13, 20, 20], close: [111, 12, 20, 20] }, "8": { open: [0, 33, 20, 20], close: [0, 14, 20, 20] }
    }; c.OverviewMapControl = __MapNSImpl__.Class(Control, {
        initialize: function (d) { var f = { align: 8, size: new i(120, 120), zoomAdd: 4, padding: 4, opened: true }; d = s.fill(d, f); Control.apply(this, [d]) }, getControlDom: function () {
            var d = "verflow:hidden;", f = q.createDiv(d), l = function (m) { u.stopEvent(m); return false }; u.addDomListener(f, "mousewheel", l); u.addDomListener(f, "DOMMouseScroll", l); q.setZIndex(f, 800); d = "overflow:hidden;background-color:#fff;border:solid 1px #979797;position:absolute;";
            l = q.createDiv(d); f.appendChild(l); this.set("resizeDiv", l); var a = this.get("size"), h = this.get("padding"); d = q.createDiv(d); q.setSize(d, a); q.setPosition(d, [h, h]); l.appendChild(d); this.set("mapDiv", d); a = [a.width + h * 2, a.height + h * 2]; q.setSize(f, [a[0] + 2, a[1] + 2]); q.setSize(l, a); l = document.createElement("div"); l.style.position = "absolute"; q.setCursorStyle(l, "pointer"); u.bindDom(l, "click", this, this.changeView); u.addDomListener(l, "dblclick", u.stopEvent); u.addDomListener(l, "mousedown", u.stopEvent); q.setZIndex(l,
            1E4); f.appendChild(l); q.setSize(l, [20, 20]); this.set("button", l); return f
        }, changeView: function () {
            var d = this.get("slideAnimation"), f = this.get("resizeDiv"), l = this.get("content"), a = this.get("button"), h = this.get("opened"); this.get("map"); var m = this; if (!d) {
                d = new c.Fx({ duration: 0.3, fps: 60, method: c.Fx.easeInQuad, callback: function (x) { var B = m.get("align"); if (B != k.TOP && B != k.BOTTOM) f.style.width = x[0] + "px"; if (B != k.RIGHT && B != k.LEFT) f.style.height = x[1] + "px" } }); this.set("slideAnimation", d); u.addListener(d, "end",
                function () { var x = !m.get("opened"); m.set("opened", x); var B = d.get("ends"), D = m.get("align"); if (x) { e(a, b.url, b[D].close); if (D == k.RIGHT || D == k.LEFT) B = [0, B[1]]; else if (D == k.TOP || D == k.BOTTOM) B = [B[0], 0] } else { e(a, b.url, b[D].open); B = D == k.RIGHT || D == k.LEFT ? [0, v[1] + 2] : D == k.TOP || D == k.BOTTOM ? [v[0] + 2, 0] : [B[0] + 2, B[1] + 2] } q.setSize(l, B) })
            } var p, v = this.get("size"); p = this.get("padding"); v = [v.width + p * 2, v.height + p * 2]; if (h) { h = [v[0], v[0]]; p = [0, 0] } else { h = [0, 0]; p = [v[0], v[0]] } d.set("begins", h); d.set("ends", p); d.start()
        }, draw: function () {
            var d =
            this.get("content"), f = this.get("map"); if (d && d.parentNode) {
                var l = this.get("mapDiv"), a = this.get("button"), h = this.get("overviewMap"); if (!h) { h = new n(l, { map: f }); this.set("overviewMap", h) } f = this.get("align"); d = d.parentNode.style; l = l.style; h = this.get("resizeDiv"); var m = this.get("padding"); if (d) {
                    var p = this.get("opened"), v = this.get("size"); m = this.get("padding"); v = [v.width + m * 2, v.height + m * 2]; if (p) e(a, b.url, b[f].close); else {
                        e(a, b.url, b[f].open); v = f == k.RIGHT || f == k.LEFT ? [0, v[1]] : f == k.TOP || f == k.BOTTOM ? [v[0], 0] :
                        [0, 0]; q.setSize(h, v)
                    } p = f == 4 ? 0 : f; q.setPositionByAlign(h, p, new i(0, 0)); q.setPositionByAlign(a, p, new i(0, 0)); switch (f) {
                        case k.BOTTOM_RIGHT: d.right = "-1px"; d.bottom = "-1px"; l.left = m + m / 2 + "px "; l.top = m + m / 2 + "px"; break; case k.TOP_LEFT: d.left = "-1px"; d.top = "-1px"; l.left = m - m / 2 - 2 + "px "; l.top = m - m / 2 - 2 + "px"; break; case k.TOP_RIGHT: d.right = "-1px"; d.top = "-1px"; l.left = m + m / 2 + "px "; l.top = m - m / 2 - 2 + "px"; break; case k.BOTTOM_LEFT: d.left = "-1px"; d.bottom = "-1px"; l.left = m - m / 2 - 2 + "px "; l.top = m + m / 2 + "px"; break; case k.RIGHT: d.right =
                        "-2px"; l.left = m + m / 2 - 1 + "px "; l.top = m - m / 2 + 1 + "px"; break; case k.LEFT: d.left = "-2px"; l.left = m - m / 2 - 1 + "px "; l.top = m - m / 2 + 1 + "px"; break; case k.TOP: d.top = "-2px"; l.left = m + "px "; l.top = m - m / 2 + "px"; break; case k.BOTTOM: d.bottom = "-2px"; l.left = m + "px "; l.top = m + m / 2 + "px"
                    }
                }
            }
        }, construct: function () { var d = this.get("map"); this.destroy(); d && this.set("content", this.getControlDom()) }, destroy: function () {
            var d = this.getMap(), f = this.get("content"); if (d && f && f.parentNode) {
                q.removeNode(f); if (d = this.get("overviewMap")) {
                    d.set("map", null);
                    d.disable(); this.set("overviewMap", null)
                }
            }
        }
    })
})(__MapNS__); (function (c) { c.GeocoderResult = function () { this.location = null; this.address = ""; this.addressComponents = { streetNumber: "", street: "", district: "", city: "", province: "" }; this.similarResults = null } })(__MapNS__); (function (c) { c.GeocoderStatus = { ERROR: "ERROR", INVALID_REQUEST: "INVALID_REQUEST", OK: "OK", UNKNOWN_ERROR: "UNKNOWN_ERROR", NO_RESULTS: "NO_RESULTS", OVER_QUERY_LIMIT: "OVER_QUERY_LIMIT" } })(__MapNS__); (function (c) {
    var s = c.BaseService, q = c.GeocoderResult, j = c.LatLng, u = c.GeocoderStatus; c.Geocoder = __MapNSImpl__.Class(s, {
        initialize: function () { s.apply(this); this.queryType = "geoc" }, geocode: function (i, k) { i && this.request({ request: i, callback: k }) }, request: function (i) {
            var k = c.MVCObject.checkers, n = i.request, e = [], b = n.address; n = n.location; if (!k.isNull(b) && !k.isNull(n)) { if (k.isString(b)) { this.queryType = "geoc"; e.push("addr=" + encodeURIComponent(b)) } } else {
                if (k.isString(b)) { this.queryType = "geoc"; e.push("addr=" + encodeURIComponent(b)) } if (k.isInstanceOf(j)(n) ||
                k.isInstanceOf(j)(b)) { n = n || b; this.queryType = "rgeoc"; k = n.getLng(); b = n.getLat(); b = new c.LatLng(b, k); k = b.getLng(); b = b.getLat(); e.push("lnglat=" + k + "," + b) }
            } this.send(e, i)
        }, onResult: function (i) {
            var k = i.callback, n = i.request, e = i.object; i = new q; if (e) {
                var b = e.info; e = e.detail; var d; d = b.error; switch (b.type) {
                    case 45: if (d == -2) d = u.NO_RESULTS; else if (d == 0) {
                        var f = e.name || "", l = e.city || "", a = e.province || "", h = e.district || ""; i.address = a + l + h + f; i.location = new j(e.pointy, e.pointx); i.similarity = e.similarity; i.pcd_conflict_flag =
                        e.pcd_conflict_flag; i.gps_type = e.gps_type; i.addressComponents = { street: f, district: h, city: l, province: a, country: e.country || "\u4e2d\u56fd" }; i.similarResults = []; d = u.OK
                    } else if (d == -1) d = u.ERROR; else if (d == -3) d = u.OVER_QUERY_LIMIT; break; case 46: if (d == -2) d = u.NO_RESULTS; else {
                        var m = e.results, p = m.length; if (p) {
                            var v = ""; for (var x = e = b = d = "", B = 0; B < p; B++) { var D = m[B]; switch (D.dtype) { case "AD": v = D.name; break; case "ST": b = D.name; break; case "ST_NO": d = D.name; break; case "TOWN": e = D.name; break; case "VILLAGE": x = D.name } } i.address =
                            v.replace(/,/g, "") + (d ? d : b ? b : e + x); i.location = n.location; n = v.split(","); if (n.length == 4) { f = n[0]; a = n[1]; l = n[2]; h = n[3] } if (n.length == 3) { f = n[0]; a = n[1]; l = n[1]; h = n[2] } i.addressComponents = { village: x, town: e, streetNumber: d, street: b, district: h, city: l, province: a, country: f }; d = u.OK
                        } else d = u.NO_RESULTS
                    } break; case 1E4: d = u.ERROR; break; case 10004: d = u.INVALID_REQUEST; break; default: d = u.UNKNOWN_ERROR
                }
            } k && k(i, d); delete k
        }
    })
})(__MapNS__); (function (c) { c.SearchMode = { NORMAL: "NORMAL", BUS: "BUS" } })(__MapNS__); (function (c) { c.SearchResult = function () { this.pois = []; this.totalNum = 0; this.pageCapacity = 10; this.pageIndex = 0; this.cityList = null } })(__MapNS__); (function (c) { c.SearchStatus = { ERROR: "ERROR", INVALID_REQUEST: "INVALID_REQUEST", OK: "OK", UNKNOWN_ERROR: "UNKNOWN_ERROR", NO_RESULTS: "NO_RESULTS", REGIONS: "REGIONS", CITIES: "CITIES" } })(__MapNS__); (function (c) {
    var s = c.MVCObject.checkers, q = c.Event, j = __MapNSImpl__.Util, u = c.Paging, i = c.MVCObject, k = __MapNSImpl__.Synchronize, n = c.Marker; j.Browser(); var e = c.MarkerDecoration; c.SearchRenderer = __MapNSImpl__.Class(i, {
        initialize: function (b) { i.apply(this); b = k.fill(b, { map: null, searchResult: null, markerOptions: {}, autoViewport: true, panel: null }); this.set("markers", []); this.setOptions(b) }, renderExcute: function () { if (this.get("paging")) { this.get("paging").setPageSize(this.get("searchResult").pageCapacity); this.get("paging").setTotalRows(this.get("searchResult").totalNum) } this.pageTurning(this.get("searchResult").pageIndex) },
        clearOverlays: function (b) { for (var d; d = b.pop() ;) { q.clearListeners(d, "click"); d.setMap(null) } }, clearMarkers: function () { this.get("markers") && this.clearOverlays(this.get("markers")) }, clearPanel: function () { for (var b = this.get("panel") ; b && b.hasChildNodes() ;) b.removeChild(b.firstChild); this.set("poiLiArray", null); this.get("poiOl"); this.get("pageContainer") }, clearPanelContent: function () {
            for (var b = this.get("poiOl") ; b && b.hasChildNodes() ;) { q.clearListeners(b.firstChild, "click"); b.removeChild(b.firstChild) } for (b =
            this.get("pageContainer") ; b && b.hasChildNodes() ;) { q.clearListeners(b.firstChild, "click"); b.removeChild(b.firstChild) }
        }, pageTurning: function (b) {
            var d = this.get("searchResult").pois, f = new c.LatLngBounds, l; this.initForPageTurning(); this.noResultHandler(d.length); for (l = 0; l < d.length; l++) {
                f.extend(d[l].latLng); this.get("markers")[l].setMap(this.get("map")); this.get("markers")[l].setPosition(d[l].latLng); var a = d[l], h = a.name, m; switch (a.type) {
                    case 0: m = a.address; break; case 1: m = "\u516c\u4ea4\u8f66\u7ad9"; break;
                    case 2: m = "\u5730\u94c1\u7ad9"; break; case 3: m = ""; break; case 4: m = ""
                } this.get("poiLiArray")[l].childNodes[0].innerHTML = h + ":    "; this.get("poiLiArray")[l].childNodes[0].style.fontWeight = "bold"; this.get("poiLiArray")[l].childNodes[1].innerHTML = m; this.get("poiLiArray")[l].style.visibility = "visible"; this.get("autoViewport") && this.get("map").fitBounds(f)
            } for (; l < this.get("poiLiArray").length;) {
                this.get("poiLiArray")[l].childNodes[0].innerHTML = ""; this.get("poiLiArray")[l].childNodes[1].innerHTML = ""; this.get("poiLiArray")[l].style.visibility =
                "hidden"; this.get("markers")[l].setMap(null); l++
            } this.get("paging").pageUndate(b + 1)
        }, noResultHandler: function (b) { this.get("errorDiv").style.display = b == 0 ? "block" : "none" }, onMarkerClick: function (b, d) { var f = [[this.get("searchResult").pois[b], d, b]]; q.trigger(this, "item_clicked", f) }, onMouseOver: function (b, d) { var f = [[this.get("searchResult").pois[b], d, b]]; q.trigger(this, "item_mouseover", f) }, onMouseOut: function (b, d) { var f = [[this.get("searchResult").pois[b], d, b]]; q.trigger(this, "item_mouseout", f) }, getMarkers: function () { return this.get("markers") },
        initForPageTurning: function () {
            if (!this.get("poiLiArray")) {
                for (var b = [], d = [], f = 0; f < this.get("searchResult").pois.length; f++) {
                    var l = document.createElement("li"), a = document.createElement("span"), h = document.createElement("span"); l.appendChild(a); l.appendChild(h); l.style.cursor = "pointer"; this.get("poiOl").appendChild(l); b.push(l); a = this.get("markerOptions"); a.map = this.get("map"); a = new n(a); new e({ content: f + 1, margin: new c.Size(0, -4), align: c.ALIGN.CENTER, marker: a }); d.push(a); this.set("eventIndex", f); this.get("searchResult");
                    q.bind(a, "click", this, j.callback(this, this.onMarkerClick, [f, a])); q.bindDom(l, "click", a, function () { q.trigger(this, "click") }); q.bind(a, "mouseover", this, j.callback(this, this.onMouseOver, [f, a])); q.bindDom(l, "mouseover", a, function () { q.trigger(this, "mouseover") }); q.bind(a, "mouseout", this, j.callback(this, this.onMouseOut, [f, a])); q.bindDom(l, "mouseout", a, function () { q.trigger(this, "mouseout") })
                } this.set("poiLiArray", b); this.set("markers", d)
            }
        }, initForPanel: function () {
            var b = this.get("panel"), d = document.createElement("ol"),
            f = document.createElement("div"), l = document.createElement("div"); l.innerHTML = "\u5f53\u524d\u641c\u7d22\u65e0\u7ed3\u679c\u3002"; l.style.color = "red"; l.style.display = "none"; this.set("errorDiv", l); l = new u; l.set("pageTarget", true); l.set("panel", f); this.set("paging", l); this.get("paging").get("tempID"); this.set("pageContainer", f); this.set("poiOl", d); this.set("initEnd", true); b.appendChild(this.get("errorDiv")); b.appendChild(this.get("poiOl")); b.appendChild(this.get("pageContainer"))
        }, updatePanel: function () {
            this.clearPanel();
            null == this.get("panel") ? this.clearPanelContent() : this.initForPanel()
        }, changed: function (b) { switch (b) { case "map": this.get("map") || this.get("markers") && this.clearOverlays(this.get("markers")); break; case "panel": this.updatePanel(); break; case "markerOptions": this.get("markerOptions") && (this.get("markerOptions").zIndex = 1) } }, searchResult_changed: function () {
            var b = this.get("searchResult") ? this.get("searchResult").pageIndex : 0; if (this.get("searchResult")) {
                var d = this.get("oldPageCapacity"), f = this.get("searchResult").pois.length;
                !d && this.set("oldPageCapacity", f); if (f != d) { this.clearMarkers(); this.clearPanel(); this.initForPanel(); this.set("oldPageCapacity", f) }
            } q.trigger(this, "pageIndex_changed", [b])
        }, getLiNum: function (b) { for (var d = b.parentNode.getElementsByTagName("li"), f = 0, l = 0; l < d.length; l++) if (b == d[l]) { f = l; break } return f }
    }); s = { map: s.isInstanceOfOrNull, panel: s.isHtmlControlOrNull, searchResult: s.isInstanceOf(c.searchResult), markerOptions: s.isObject, autoViewport: s.isBoolean }; i.publicProperties(c.SearchRenderer, s)
})(__MapNS__); (function (c) {
    var s = c.BaseService, q = c.MVCObject, j = c.LatLng, u = c.LatLngCircles, i = c.LatLngBounds, k = c.SearchResult, n = c.Poi, e = c.Region, b = c.SearchMode, d = c.SearchStatus, f = __MapNSImpl__.Config, l = c.Geocoder, a = __MapNSImpl__.Synchronize, h = c.MVCObject.checkers, m = []; c.SearchService = __MapNSImpl__.Class(s, {
        initialize: function (p) { s.apply(this); this.defaultCapacity = 10; this.defaultPage = 0; this.queryType = f.QueryType.POI; p = a.fill(p, { renderer: null }); this.setOptions(p) }, search: function (p, v) { p && this.request({ request: p, callback: v }) },
        setPageForRender: function (p) { var v = this.get("request"); if (p > -1) v.pageIndex = p; return v }, getNewIndex: function (p, v, x, B) { return B ? parseInt(this.get("totalNum") / x) : Math.floor(Math.floor((p * v + 1 + p * (v + 1)) / 2) / x) }, isLastPageIndex: function (p, v, x) { return parseInt(x / p) == v }, request: function (p) {
            var v = q.checkers, x = p.request, B = x.dataProvider, D = x.keyword, C = x.region, r = x.level || 11, w = x.noquery, y = x.forceBounds, A = x.searchMode, E = [], g = ""; this.set("request", x); if (null == this.get("oldCapacity")) this.set("oldCapacity", x.pageCapacity ||
            this.defaultCapacity); if (this.get("renderer")) { var o = x.pageCapacity || this.defaultCapacity, t = x.pageIndex || this.defaultPage; if (this.get("oldCapacity") != o) { var z = this.isLastPageIndex(this.get("oldCapacity"), t, this.get("totalNum")); x.pageIndex = this.getNewIndex(this.get("oldCapacity"), t, o, z); this.set("oldCapacity", o) } } if (!v.isNull(B)) if (v.isString(B)) { o = B.split(";"); t = o.length; if (t > 1) for (B = 0; B < t; B++) g += "||" + encodeURIComponent(o[B]) + "||"; else g = "||" + encodeURIComponent(B) + "||" } var F; if (v.isNull(C)) E.push("c=1");
            else {
                if (v.isString(C)) { E.push("c=" + encodeURIComponent(C)); E.push("l=" + r) } this.queryType = f.QueryType.POI; if (!A || A === b.NORMAL) {
                    if (v.isInstanceOf(i)(C)) { this.queryType = f.QueryType.SYN; o = C.getSouthWest(); B = C.getNorthEast(); F = o.getLng(); o = o.getLat(); t = B.getLng(); B = B.getLat(); E.push("b=" + F + "," + o + "," + t + "," + B); F = C.getCenter(); if (!y) this.queryType = f.QueryType.POI; E.push("l=" + r) } if (v.isInstanceOf(u)(C)) {
                        this.queryType = f.QueryType.RN; F = C.getCenter(); r = C.getRadius(); y = F.getLng(); B = F.getLat(); E.push("px=" + y);
                        E.push("py=" + B); E.push("r=" + r); if (w || D == "*") { D = "*"; E.push("lc=8&ro=1") }
                    }
                }
            } if (v.isString(D)) { w = encodeURIComponent(D); if (g) { E.push("sp=1"); w = D + g } E.push("wd=" + w) } D = x.pageIndex || this.defaultPage; x = x.pageCapacity || this.defaultCapacity; if (A === b.BUS) { this.queryType = "busls"; E.push("tp=0") } E.push("pn=" + D); E.push("rn=" + x); if (v.isInstanceOf(i)(C) || v.isInstanceOf(u)(C)) {
                var G = new l; x = { location: F }; m.push([x, this.queryType, E, p]); var K = this, J = function () {
                    var N = m.shift(); N && G.geocode(N[0], function (S) {
                        K.queryType =
                        N[1]; E.push("c=" + encodeURIComponent(S.addressComponents.city || 1)); J(); K.send(N[2], N[3])
                    })
                }; J()
            } else this.send(E, p)
        }, onResult: function (p) {
            var v = p.callback, x = p.request, B = p.object; p = new k; if (B) {
                var D = B.info; B = B.detail; var C; switch (D.type) {
                    case 6: case 11: case 16: case 17: case 49: var r = B.pois; C = B.city; var w = r.length, y = []; if (w) {
                        for (B = 0; B < w; B++) {
                            var A = new n, E = r[B]; A.id = E.uid; A.name = E.name; A.latLng = new j(E.pointy, E.pointx); if (!x.searchMode || x.searchMode === b.NORMAL) E.addr && (A.address = E.addr); !C && (C = { cname: x.region });
                            C.cname && (A.city = C.cname); E.phone && (A.phone = E.phone); E.zip && (A.postcode = E.zip); E.classes && (A.category = E.classes); A.type = E.poitype; y.push(A)
                        } p.pois = y; p.pageIndex = x.pageIndex || this.defaultPage; p.pageCapacity = x.pageCapacity || this.defaultCapacity; p.totalNum = D.total; x = new e; x.name = C.cname; x.code = C.ccode; x.level = C.level; x.position = new j(C.pointy, C.pointx); p.region = x; p.cityList = [{ city: C.cname, resultNums: D.total }]; C = d.OK
                    } else C = d.NO_RESULTS; break; case 8: x = B.result; D = []; for (B = 0; B < x.length; B++) {
                        C = x[B]; r = C.cities;
                        if (r.length) for (w = 0; w < r.length; w++) { C = r[w]; D.push({ city: C.cname, resultNums: C.cnum }) } else D.push({ city: C.cname, resultNums: C.cnum })
                    } p.cityList = D; C = d.CITIES; break; case 9: D = B.area; C = B.children; r = B.parent; x = new e; w = new e; w.code = r.ccode; w.name = r.cname; x.parent = w; x.name = D.cname; x.code = D.ccode; x.level = D.level; x.position = new j(D.pointy, D.pointx); x.brief = B.brief; D = []; B = 0; for (r = C && C.length; B < r; B++) { w = C[B]; y = new e; y.name = w.cname; y.code = w.ccode; D.push(y) } x.children = D; p.region = x; C = d.REGIONS; break; case 1E4: C = d.ERROR;
                        break; case 10004: C = d.INVALID_REQUEST; break; default: C = d.UNKNOWN_ERROR
                }
            } if (null != this.get("renderer")) { this.set("totalNum", p.totalNum); this.get("renderer").set("searchResult", p); this.get("renderer").renderExcute() } v && v(p, C); delete v
        }, changed: function (p) {
            switch (p) {
                case "renderer": if (this.get("renderer")) { this.get("renderer").get("paging").bindTo("pageIndex", this); this.get("renderer").get("paging").bindTo("pageTarget", this); this.get("renderer").bindTo("initEnd", this) } break; case "pageTarget": this.get("pageTarget") &&
                this.search(this.setPageForRender(this.get("pageIndex"))); break; case "initEnd": this.unbind("pageTarget"); this.get("renderer").get("paging").bindTo("pageTarget", this); this.unbind("pageIndex"); this.get("renderer").get("paging").bindTo("pageIndex", this)
            }
        }
    }); q.publicProperties(c.SearchService, { renderer: h.isInstanceOfOrNull })
})(__MapNS__); (function (c) { c.LineStatus = { ERROR: "ERROR", INVALID_REQUEST: "INVALID_REQUEST", OK: "OK", UNKNOWN_ERROR: "UNKNOWN_ERROR", NO_RESULTS: "NO_RESULTS" } })(__MapNS__); (function (c) { c.LineType = { SUBWAY: 2, BUS: 1, FERRY: "FERRY" } })(__MapNS__); (function (c) { c.LineResult = function () { this.type = this.name = this.id = ""; this.distance = 0; this.price = this.etime = this.stime = ""; this.time = this.stationNum = 0; this.to = this.from = ""; this.path = null; this.stations = [] } })(__MapNS__); (function (c) {
    var s = c.BaseService, q = c.LatLng, j = c.LatLngBounds, u = c.LineResult, i = c.Poi, k = c.LineStatus, n = c.MVCObject.checkers; c.LineService = __MapNSImpl__.Class(s, {
        initialize: function () { s.apply(this); this.queryType = Config.QueryType.DT }, detail: function (e, b) { e && this.request({ request: e, callback: b }) }, request: function (e) { var b = e.request.lineId, d = []; n.isString(b) && d.push("uid=" + b); d.push("tp=3"); this.send(d, e) }, onResult: function (e) {
            var b = e.callback, d = e.object; e = new u; if (d) {
                var f = d.detail; switch (d.info.type) {
                    case 18: d =
                    f.poi; bounds = new j; if (d) { e.id = d.uid; e.name = d.name; e.type = d.poitype; e.distance = d.dist; e.stime = d.stime; e.etime = d.etime; e.price = d.price; e.stationNum = d.snum; e.from = d.from; e.to = d.to; f = this.fromSegmentToPath(d.points); e.path = f.path; e.bounds = f.bounds; f = 0; for (var l = d.stations, a = l.length; f < a; f++) { d = new i; var h = l[f]; d.id = h.uid; d.type = h.poitype; d.name = h.name; d.latLng = new q(h.pointy, h.pointx); e.stations.push(d) } f = k.OK } else f = k.NO_RESULTS; break; case 1E4: f = k.ERROR; break; case 10004: f = k.INVALID_REQUEST; break; default: f =
                    k.UNKNOWN_ERROR
                }
            } b && b(e, f); delete b
        }
    })
})(__MapNS__); (function (c) { c.StationStatus = { ERROR: "ERROR", INVALID_REQUEST: "INVALID_REQUEST", OK: "OK", UNKNOWN_ERROR: "UNKNOWN_ERROR", NO_RESULTS: "NO_RESULTS" } })(__MapNS__); (function (c) { c.StationResult = function () { this.type = this.name = this.id = ""; this.latLng = null; this.lines = [] } })(__MapNS__); (function (c) {
    var s = c.BaseService, q = c.LatLng, j = c.StationResult, u = c.LineResult, i = c.StationStatus; checkers = c.MVCObject.checkers; Util = __MapNSImpl__.Util; c.StationService = __MapNSImpl__.Class(s, {
        initialize: function () { s.apply(this); this.queryType = Config.QueryType.DT }, detail: function (k, n) { k && this.request({ request: k, callback: n }) }, request: function (k) { var n = k.request.stationId, e = []; checkers.isString(n) && e.push("uid=" + n); e.push("tp=1"); this.send(e, k) }, onResult: function (k) {
            var n = k.callback, e = k.object; k = new j;
            if (e) { var b = e.detail; switch (e.info.type) { case 19: e = b.poi; b = e.lines; var d = b.length; if (d) { for (var f = 0; f < d; f++) { var l = new u, a = b[f]; l.id = a.uid; l.name = a.name; l.stime = a.stime; l.etime = a.etime; l.from = a.from; l.to = a.to; k.lines.push(l) } k.id = e.uid; k.name = e.name; k.type = e.poitype; k.latLng = new q(e.pointy, e.pointx); b = i.OK } else b = i.NO_RESULTS; break; case 1E4: b = i.ERROR; break; case 10004: b = i.INVALID_REQUEST; break; default: b = i.UNKNOWN_ERROR } } n && n(k, b); delete n
        }
    })
})(__MapNS__); (function (c) { c.DirectionsPolicy = { LEAST_TIME: 0, AVOID_HIGHWAYS: 1, LEAST_DISTANCE: 2, REAL_TRAFFIC: 3, PREDICT_TRAFFIC: 4 } })(__MapNS__); (function (c) { c.DirectionsTravelMode = { DRIVING: "DRIVING", WALKING: "WALKING" } })(__MapNS__); (function (c) { c.DirectionsResult = function () { this.routes = []; this.policy = 0; this.end = this.start = null } })(__MapNS__); (function (c) { c.DirectionsRoute = function () { this.bounds = null; this.legs = []; this.distance = this.duration = null } })(__MapNS__); (function (c) { c.DirectionsLeg = function () { this.duration = this.distance = null; this.steps = []; this.path = []; this.start_address = ""; this.start_location = null; this.end_address = ""; this.end_location = null } })(__MapNS__); (function (c) { c.DirectionsStep = function () { this.duration = this.distance = null; this.path = []; this.roadname = ""; this.end_location = this.start_location = null; this.instructions = ""; this.placemarks = []; this.cities = []; this.turning = null } })(__MapNS__); (function (c) { c.DirectionsStatus = { ERROR: "ERROR", INVALID_REQUEST: "INVALID_REQUEST", OK: "OK", UNKNOWN_ERROR: "UNKNOWN_ERROR", NO_RESULTS: "NO_RESULTS", MULTI_DESTINATION: "MULTI_DESTINATION" } })(__MapNS__); (function (c) {
    var s = c.BaseService, q = c.DirectionsResult, j = c.DirectionsStatus, u = c.DirectionsPolicy, i = c.DirectionsTravelMode, k = c.DirectionsRoute, n = c.DirectionsLeg, e = c.DirectionsStep, b = c.LatLng, d = c.Distance, f = c.Duration, l = c.Turning, a = c.Poi, h = c.LatLngBounds, m = __MapNSImpl__.Config, p = __MapNSImpl__.Util; c.DirectionsService = __MapNSImpl__.Class(c.BaseService, {
        initialize: function () { s.apply(this); this.routeIndex = 0; this.queryType = m.QueryType.NAV }, route: function (v, x) { v && this.request({ request: v, callback: x }) }, request: function (v) {
            var x =
            v.request, B = x.region, D = []; checkers.isString(B) && D.push("c=" + encodeURIComponent(B)); B = x.end; var C = x.time, r = x.time, w = x.policy; D.push("start=" + this.fromDestToString(x.start)); D.push("dest=" + this.fromDestToString(B)); !r && (r = x.travelMode = i.DRIVING); switch (r) { case "DRIVING": this.queryType = m.QueryType.NAV; break; case "WALKING": this.queryType = m.QueryType.WALK } !w && (w = x.policy = u.LEAST_TIME); if (C && (w === u.REAL_TRAFFIC || w === u.PREDICT_TRAFFIC)) D.push("time=" + C); D.push("cond=" + w); this.send(D, v)
        }, onResult: function (v) {
            var x =
            v.callback, B = v.request, D = v.object; v = new q; if (D) {
                var C = D.info, r = D.detail, w = 0, y; for (y in r) w++; if (!w) C.type = 1E4; switch (C.type) {
                    case 44: var A = r.route[0]; w = p.parseCoords(A.coors); y = A.distance; A = A.segmentList; var E = r.bounds; r = A && A.length; var g = new k, o = E.split(","); E = new b(o[1], o[0]); o = new b(o[3], o[2]); E = new h(E, o); o = new n; if (r) {
                        var t = new d; t.text = this.fromDistToString(D.distance); t.value = y; D = new f; D.text = this.fromTimeToString(C.time); D.value = C.time; o.distance = t; o.duration = D; o.path = w; for (y = 0; y < r; y++) {
                            var z =
                            A[y], F = new e, G = z.coorStart; G = w.slice(G, G + z.coorNum); if (y == 0) { o.start_address = z.roadName; o.start_location = G[0] } if (y == r - 1) { o.end_address = z.roadName; o.end_location = G[G.length - 1] } var K = new d; K.text = this.fromDistToString(z.roadLength); K.value = z.roadLength; F.distance = K; K = new f; K.text = this.fromTimeToString(parseInt(z.driveTime)); K.value = parseInt(z.driveTime); F.duration = K; K = new l; K.text = z.action; K.latLng = G[G.length - 1]; for (var J = z.kp, N = [], S = 0, O = J.length; S < O; S++) {
                                var L = new a, R = J[S]; L.name = R.name; L.latLng = new b(R.pointy,
                                R.pointx); N.push(L)
                            } F.roadname = z.roadName; F.start_location = G[0]; F.end_location = G[G.length - 1]; F.instructions = z.textInfo; F.path = G; F.turning = K; F.cities = z.cities; F.placemarks = N; o.steps.push(F)
                        } g.bounds = E; g.distance = t; g.duration = D; g.legs.push(o); v.start = this.fromDestToPoi(C.start); v.end = this.fromDestToPoi(C.dest); v.traffic = !!C.navtraffic; v.policy = B.policy; v.routes.push(g); C = j.OK
                    } else C = j.NO_RESULTS; break; case 21: B = r.start; C = r.dest; v.start = []; y = 0; for (w = B ? B.length : 0; y < w; y++) { A = B[y]; v.start.push(this.fromDestToPoi(A)) } v.end =
                    []; y = 0; for (w = C ? C.length : 0; y < w; y++) { A = C[y]; v.end.push(this.fromDestToPoi(A)) } C = j.MULTI_DESTINATION; break; case 1E4: C = j.ERROR; break; case 10004: C = j.INVALID_REQUEST; break; default: C = j.UNKNOWN_ERROR
                }
            } x && x(v, C); delete x
        }
    })
})(__MapNS__); (function (c) { c.ActionType = { BUS: "BUS", SUBWAY: "SUBWAY", WALK: "WALK" } })(__MapNS__); (function (c) { c.TransferAction = function () { } })(__MapNS__); (function (c) { c.TransferResult = function () { this.plans = []; this.policy = 0; this.city = ""; this.end = this.start = null } })(__MapNS__); (function (c) { c.TransferPlan = function () { this.actions = []; this.bounds = {}; this.lines = []; this.walks = []; this.stations = []; this.distance = this.duration = null } })(__MapNS__); (function (c) { c.TransferPolicy = { LEAST_TIME: 0, LEAST_TRANSFER: 1, LEAST_WALKING: 2, MOST_ONE: 3, NO_SUBWAY: 4 } })(__MapNS__); (function (c) { c.TransferStatus = { ERROR: "ERROR", INVALID_REQUEST: "INVALID_REQUEST", OK: "OK", UNKNOWN_ERROR: "UNKNOWN_ERROR", NO_RESULTS: "NO_RESULTS", NO_SUPPORT: "NO_SUPPORT", MULTI_DESTINATION: "MULTI_DESTINATION" } })(__MapNS__); (function (c) {
    var s = c.BaseService, q = c.LatLng, j = c.LatLngBounds, u = c.Poi, i = c.LineResult, k = c.TransferResult, n = c.TransferPlan, e = c.TransferStatus, b = c.TransferPolicy, d = c.TransferAction, f = c.ActionType, l = c.LineType, a = c.DirectionsLeg, h = c.DirectionsStep, m = c.Distance, p = c.Duration, v = c.Turning, x = c.MVCObject.checkers, B = __MapNSImpl__.RC.Transfer, D = __MapNSImpl__.Config; c.TransferService = __MapNSImpl__.Class(s, {
        initialize: function () { s.call(this); this.queryType = D.QueryType.BUS }, plan: function (C, r) {
            C && this.request({
                request: C,
                callback: r
            })
        }, request: function (C) { var r = C.request, w = r.region, y = []; x.isString(w) && y.push("c=" + encodeURIComponent(w)); w = r.end; var A = r.policy; y.push("start=" + this.fromDestToString(r.start)); y.push("dest=" + this.fromDestToString(w)); !A && (A = r.policy = b.LEAST_TIME); x.isNull(A) || (A === b.NO_SUBWAY ? y.push("nosub=" + A) : y.push("cond=" + A)); this.send(y, C) }, onResult: function (C) {
            var r = C.callback, w = C.request, y = C.object; C = new k; if (y) {
                var A = y.info; y = y.detail; C.city = w.region; C.policy = w.policy; switch (A.type) {
                    case 15: var E =
                    y.length, g = []; if (E) {
                        for (w = 0; w < E; w++) {
                            var o = new n, t = y[w], z = t.intervals, F = t.trans, G = [], K = [], J = [], N = [], S = new j, O = 0, L = 0, R = 0; for (t = F.length; R < t; R++) {
                                var Q = new d, T = [], P = null; if (R > 0) {
                                    var H = z[R - 1][0]; P = new i; P.id = H.uid; P.name = H.name; P.type = H.type; T.push(B[0] + P.name); var I = new m; I.value = H.distance; I.text = this.fromDistToString(H.distance); P.distance = I; P.stationNum = H.station_num; T.push(B[1] + P.stationNum + B[2]); I = new p; I.value = H.time; I.text = this.fromTimeToString(H.time); P.duration = I; I = this.fromSegmentToPath(H.segment);
                                    P.path = I.path; P.bounds = I.bounds; S.union(I.bounds); G.push(P); O += H.distance; L += H.time; Q.data = P
                                } I = F[R]; var M, U = this.fromTranToLeg_(I); if (R == 0) { M = this.fromTranToStation_(I.geton); H = z[R][0]; M.type = H.type; J.push(M) } if (R > 0 && R < t - 1) { M = this.fromTranToStation_(I.getoff); H = z[R - 1][0]; M.type = H.type; J.push(M); M = this.fromTranToStation_(I.geton); H = z[R][0]; M.type = H.type; J.push(M); T.push(B[3] + I.getoff.name) } if (R == t - 1) { M = this.fromTranToStation_(I.getoff); H = z[R - 1][0]; M.type = H.type; J.push(M); T.push(B[3] + I.getoff.name) } if (P) {
                                    P.from =
                                    F[R - 1].geton.name; P.to = F[R].getoff.name; Q.instructions = T.join("\uff0c"); Q.type = f.BUS; if (P.type == l.SUBWAY) Q.type = f.SUBWAY; N.push(Q)
                                } if (U.distance.value) { Q = new d; T = []; T.push(U.steps[0].instructions); T.push(B[3] + (I.geton.name ? I.geton.name : B[4])); Q.instructions = T.join("\uff0c"); Q.data = U; Q.type = f.WALK; N.push(Q) } K.push(U)
                            } o.actions = N; o.lines = G; o.bounds = S; o.walks = K; o.stations = J; t = new m; t.value = O; t.text = this.fromDistToString(O); o.distance = t; t = new p; t.value = L; t.text = this.fromTimeToString(L); o.duration = t; g.push(o);
                            C.plans = g; C.start = this.fromDestToPoi(A.start); C.end = this.fromDestToPoi(A.dest)
                        } A = e.OK
                    } else A = e.NO_RESULTS; break; case 14: A = y.start; y = y.dest; C.start = []; w = 0; for (t = A ? A.length : 0; w < t; w++) { E = A[w]; C.start.push(this.fromDestToPoi(E)) } C.end = []; w = 0; for (t = y ? y.length : 0; w < t; w++) { E = y[w]; C.end.push(this.fromDestToPoi(E)) } A = e.MULTI_DESTINATION; break; case 1E4: A = e.ERROR; break; case 10004: A = e.INVALID_REQUEST; break; case 10006: A = e.NO_SUPPORT; break; default: A = e.UNKNOWN_ERROR
                }
            } r && r(C, A); delete r
        }, fromTranToStation_: function (C) {
            var r =
            new u; r.id = C.uid; r.name = C.name; r.latLng = new q(C.pointy, C.pointx); return r
        }, fromTranToLeg_: function (C) {
            var r = new a, w = new p, y = new m, A = C.walk; w.value = A.time; w.text = this.fromTimeToString(A.time); r.duration = w; y.value = A.distance; y.text = this.fromDistToString(A.distance); r.distance = y; var E = this.fromSegmentToPath(A.segment); r.path = E.path; var g = C.getoff; r.start_address = g.name; g = new q(g.pointy, g.pointx); r.start_location = g; C = C.geton; r.end_address = C.name; var o = new q(C.pointy, C.pointx); r.end_location = o; C = new h;
            C.distance = y; C.duration = w; C.start_location = g; C.end_location = o; w = new v; w.text = __MapNSImpl__.RC.Direction[A.direction]; w.latLng = g; C.turning = w; C.instructions = y.value ? "\u5411" + w.text + "\u6b65\u884c\u7ea6" + C.distance.text : ""; C.path = E.path; r.steps.push(C); return r
        }
    })
})(__MapNS__); (function (c) { c.LocationMode = { CLIENT_IP: "CLIENT_IP", AREA_CODE: "AREA_CODE", LATLNG: "LATLNG", W3C_LOCATION: "W3C_LOCATION" } })(__MapNS__); (function (c) { c.GeolocationStatus = { ERROR: "ERROR", INVALID_REQUEST: "INVALID_REQUEST", OK: "OK", UNKNOWN_ERROR: "UNKNOWN_ERROR", NO_RESULTS: "NO_RESULTS" } })(__MapNS__); (function (c) { c.GeolocationResult = function () { this.name = ""; this.detail = this.latLng = null } })(__MapNS__); (function (c) {
    var s = c.BaseService, q = c.LatLng, j = c.LocationMode, u = c.GeolocationResult, i = c.GeolocationStatus, k = c.MVCObject.checkers, n = __MapNSImpl__.Config; c.Geolocation = __MapNSImpl__.Class(s, {
        initialize: function () { s.apply(this); this.queryType = n.QueryType.POS }, position: function (e, b) { e && this.request({ request: e, callback: b }) }, request: function (e) {
            var b = e.request, d = b.keyword; b = b.locationMode; var f = [], l = ""; if (d !== "" && !k.isNull(d)) {
                if (k.isString(d)) if (b) if (b === j.CLIENT_IP) l = "ip"; else if (b === j.AREA_CODE) l = "acode";
                else { if (b === j.LATLNG) l = "lonlat" } else l = this.checkIP_(d) ? "ip" : "acode"; else if (k.isInstanceOf(q)(d)) { d = d.getLng() + "," + d.getLat(); l = "lonlat" } f.push("wd=" + d); f.push("tp=" + l)
            } else this.queryType = "gc"; this.send(f, e)
        }, onResult: function (e) {
            var b = e.callback, d = e.object; e = new u; if (d) {
                var f = d.detail; switch (d.info.type) {
                    case 4: case 31: d = f.cname; var l = f.path; if (d) {
                        e.name = d; e.latLng = new q(f.pointy, f.pointx); f = []; if (l) {
                            l.length == 4 && (f = [l[3] ? l[3].cname : "", l[2] ? l[2].cname : "", l[1] ? l[1].cname : "", l[0] ? l[0].cname : ""]);
                            l.length == 3 && (f = [l[2] ? l[2].cname : "", l[1] ? l[1].cname : "", l[0] ? l[0].cname : ""]); l.length == 2 && (f = [l[1] ? l[1].cname : "", l[0] ? l[0].cname : ""]); l.length == 1 && (f = [l[0] ? l[0].cname : ""]); e.detail = f.join(",")
                        } f = i.OK
                    } else f = i.NO_RESULTS; break; case 1E4: f = i.ERROR; break; case 10004: f = i.INVALID_REQUEST; break; default: f = i.UNKNOWN_ERROR
                }
            } b && b(e, f); delete b
        }, checkIP_: function (e) { return /^(([01]?[\d]{1,2})|(2[0-4][\d])|(25[0-5]))(\.(([01]?[\d]{1,2})|(2[0-4][\d])|(25[0-5]))){3}$/.test(e) }
    })
})(__MapNS__); (function (c) { c.SuggestionMode = { NORMAL: "NORMAL", BUS: "BUS", DISTRICT: "DISTRICT" } })(__MapNS__); (function (c) { c.SuggestionStatus = { ERROR: "ERROR", INVALID_REQUEST: "INVALID_REQUEST", OK: "OK", UNKNOWN_ERROR: "UNKNOWN_ERROR", NO_RESULTS: "NO_RESULTS" } })(__MapNS__); (function (c) { c.SuggestionResult = function () { } })(__MapNS__); (function (c) {
    var s = c.BaseService, q = c.SuggestionResult, j = c.SuggestionStatus, u = __MapNSImpl__.Config, i = c.SuggestionMode; c.Suggestion = __MapNSImpl__.Class(s, {
        initialize: function () { s.apply(this); this.queryType = u.QueryType.SG }, complete: function (k, n) { k && this.request({ request: k, callback: n }) }, request: function (k) {
            var n = k.request, e = n.suggestionMode, b = n.keyword; n = n.region; var d = []; if (checkers.isNull(n)) d.push("c=1"); else checkers.isString(n) ? d.push("c=" + encodeURIComponent(n)) : d.push("c=1"); b !== "" && !checkers.isNull(b) &&
            d.push("wd=" + encodeURIComponent(b)); if (checkers.isNull(e)) d.push("tp=0"); else { e === i.NORMAL && d.push("tp=0"); e === i.BUS && d.push("tp=1"); e === i.DISTRICT && d.push("tp=2") } this.send(d, k)
        }, onResult: function (k) {
            var n = k.callback, e = k.object; k = []; if (e) {
                var b = e.detail; switch (e.info.type) {
                    case 5: if (e = b && b.length) {
                        for (var d = 0; d < e; d++) {
                            var f = b[d], l = new q, a = f.name, h = f.place, m = f.show, p = f.type, v = f.city.path; l.id = f.uid; l.text = a; l.region = h; l.highlight_text = m; l.poi_type = p; var x; if (v) {
                                v.length == 4 && (x = [v[3] ? v[3].cname : "",
                                v[2] ? v[2].cname : "", v[1] ? v[1].cname : "", v[0] ? v[0].cname : ""]); v.length == 3 && (x = [v[2] ? v[2].cname : "", v[1] ? v[1].cname : "", v[0] ? v[0].cname : ""]); v.length == 2 && (x = [v[1] ? v[1].cname : "", v[0] ? v[0].cname : ""]); v.length == 1 && (x = [v[0] ? v[0].cname : ""]); l.district = x.join(",")
                            } k.push(l)
                        } b = j.OK
                    } else b = j.NO_RESULTS; break; case 1E4: b = j.ERROR; break; case 10004: b = j.INVALID_REQUEST; break; default: b = j.UNKNOWN_ERROR
                }
            } n && n(k, b); delete n
        }
    })
})(__MapNS__); (function (c) { c.PoiStatus = { ERROR: "ERROR", INVALID_REQUEST: "INVALID_REQUEST", OK: "OK", UNKNOWN_ERROR: "UNKNOWN_ERROR", NO_RESULTS: "NO_RESULTS" } })(__MapNS__); (function (c) {
    var s = c.BaseService, q = c.LatLng, j = c.Poi, u = c.PoiStatus; checkers = c.MVCObject.checkers; Config = __MapNSImpl__.Config; Util = __MapNSImpl__.Util; c.PoiService = __MapNSImpl__.Class(s, {
        initialize: function () { s.apply(this); this.queryType = Config.QueryType.DTS }, detail: function (i, k) { i && this.request({ request: i, callback: k }) }, request: function (i) { var k = i.request.poiId, n = []; checkers.isString(k) && n.push("uids=" + k); n.push("tp=0"); n.push("num=10"); this.send(n, i) }, onResult: function (i) {
            var k = i.callback, n = i.object;
            i = []; if (n) {
                var e = n.detail; switch (n.info.type) {
                    case 60: n = e.pois; if (e = n.length) {
                        for (var b = 0; b < e; b++) {
                            var d = new j, f = n[b]; d.id = f.uid; d.name = f.name; d.latLng = new q(f.pointy, f.pointx); f.addr && (d.address = f.addr); f.phone && (d.phone = f.phone); d.type = f.poitype; f.zip && (d.postcode = f.zip); f.classes && (d.category = f.classes); f.average_price && (d.average_price = f.average_price); f.comment_num && (d.comment_num = f.comment_num); f.comment_level && (d.comment_level = f.comment_level); f.special_rec && (d.special_rec = f.special_rec); f.src &&
                            (d.source = f.src); i.push(d)
                        } e = u.OK
                    } else e = u.NO_RESULTS; break; case 1E4: e = u.ERROR; break; case 10004: e = u.INVALID_REQUEST; break; default: e = u.UNKNOWN_ERROR
                }
            } k && k(i, e); delete k
        }
    })
})(__MapNS__); (function () {
    QQMap = __MapNS__; QQMapImpl = __MapNSImpl__; (function (c, s) { if (typeof c == "string") { for (var q = c.split("."), j = window, u = 0; u < q.length; u++) { var i = q[u]; j[i] || (j[i] = {}); j = j[i] } for (; q = s.pop() ;) { j[q] = __MapNS__[q]; QQMap["Q" + q] = __MapNS__[q] } } })("soso.maps", ["Point", "Size", "Bounds", "Color", "ALIGN", "LatLng", "LatLngBounds", "LatLngCircles", "Fx", "CssFx", "Animation", "ObjectLoader", "MVCObject", "Event", "MVCArray", "Overlay", "Control", "MapType", "MapTypeId", "MapTypeRegistry", "Projection", "MapCanvasProjection", "TileLayer",
    "TileGridLayer", "RoadMapLayer", "SatelliteLayer", "HybridLayer", "TrafficLayer", "InfoWindow", "Polygon", "Polyline", "Circle", "MarkerImage", "MarkerShape", "MarkerDecoration", "Marker", "Label", "GroundOverlay", "ContextMenuControl", "Copyright", "CopyrightCollection", "CopyrightControl", "NavigationControl", "NavigationControlStyle", "ScaleControl", "MapTypeControl", "ZoomHintControl", "OverviewMapControl", "Map", "Poi", "Distance", "Duration", "Turning", "Region", "PoiType", "SearchMode", "SearchStatus", "SearchResult", "SearchService",
    "SearchRenderer", "PoiStatus", "PoiResult", "PoiService", "LineType", "LineStatus", "LineResult", "LineService", "StationStatus", "StationResult", "StationService", "ActionType", "TransferAction", "TransferStatus", "TransferPolicy", "TransferPlan", "TransferResult", "TransferService", "DirectionsTravelMode", "DirectionsPolicy", "DirectionsStatus", "DirectionsLeg", "DirectionsRoute", "DirectionsResult", "DirectionsService", "DirectionsStep", "Geocoder", "GeocoderResult", "GeocoderStatus", "LocationMode", "GeolocationStatus", "GeolocationResult",
    "Geolocation", "SuggestionMode", "SuggestionStatus", "SuggestionResult", "Suggestion"]); Util.domReady(function () { var c = (new Date).getTime(), s = window[c] = new Image; s.onload = s.onerror = function () { window[c] = null }; s.src = "http://ping.map.qq.com/call?from=webapi&version=1.0&tmp=" + c.toString(36); s = null; (s = __MapNSImpl__.Config.cb) && eval('"use strict";' + ("window." + s) + "()") })
})();