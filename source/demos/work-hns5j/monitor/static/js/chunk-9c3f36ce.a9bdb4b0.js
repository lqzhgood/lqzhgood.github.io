(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9c3f36ce"],{"1c3f":function(t,e,n){},"634f":function(t,e,n){"use strict";n("7aae")},"7aae":function(t,e,n){},9406:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"dashboard-container"},[n("top-count",{attrs:{projects:t.projects,stateType:t.stateType}}),t._v(" "),n("el-divider",[n("i",{staticClass:"el-icon-mobile-phone"})]),t._v(" "),n("el-row",{attrs:{gutter:20}},[n("el-col",{attrs:{span:24,xs:24}},[n("branch-count",{staticClass:"x",attrs:{check:t.check,checkType:t.checkType,checkTypeToggle:t.checkTypeToggle}})],1)],1)],1)},s=[],c=(n("8e6e"),n("ac6a"),n("456d"),n("ade3")),r=n("7cf8"),i=n("2f62"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-row",{attrs:{gutter:20}},[n("el-col",{attrs:{span:12,xs:24}},[n("el-card",{staticClass:"box",attrs:{shadow:"hover"}},[n("div",{staticClass:"header",attrs:{slot:"header"},slot:"header"},[n("span",[t._v("项目部")])]),t._v(" "),n("div",{staticClass:"statistic"},[n("div",{staticClass:"label"},[t._v("总计")]),t._v(" "),n("el-link",{staticClass:"count",attrs:{href:"/query/online",target:"_blank"}},[t._v(t._s(t.install.length))])],1),t._v(" "),n("div",{staticClass:"statistic"},[n("div",{staticClass:"label"},[t._v("在线")]),t._v(" "),n("el-link",{staticClass:"count",attrs:{href:"/query/online",target:"_blank"}},[t._v("\n                    "+t._s(t.install.length-t.pOffline)+"\n                ")])],1),t._v(" "),n("div",{staticClass:"statistic"},[n("div",{staticClass:"label"},[t._v("离线")]),t._v(" "),n("el-link",{staticClass:"count",attrs:{href:"/query/online",target:"_blank"}},[t._v(t._s(t.pOffline))])],1)])],1),t._v(" "),n("el-col",{attrs:{span:12,xs:24}},[n("el-card",{staticClass:"box",attrs:{shadow:"hover"}},[n("div",{staticClass:"header",attrs:{slot:"header"},slot:"header"},[n("span",[t._v("摄像头")])]),t._v(" "),n("div",{staticClass:"statistic"},[n("div",{staticClass:"label"},[t._v("总计")]),t._v(" "),n("el-link",{staticClass:"count",attrs:{href:"/query/online",target:"_blank"}},[t._v(t._s(t.camerasState.total))])],1),t._v(" "),n("div",{staticClass:"statistic"},[n("div",{staticClass:"label"},[t._v("在线")]),t._v(" "),n("el-link",{staticClass:"count",attrs:{href:"/query/online",target:"_blank"}},[t._v(t._s(t.camerasState.online))])],1),t._v(" "),n("div",{staticClass:"statistic"},[n("div",{staticClass:"label"},[t._v("离线")]),t._v(" "),n("el-link",{staticClass:"count",attrs:{href:"/query/online",target:"_blank"}},[t._v(t._s(t.camerasState.offline))])],1)])],1)],1)},l=[],u={name:"",data:function(){return{}},props:{projects:{type:Array,default:function(){return[]}},stateType:{type:String,default:"hkvs"}},computed:{countType:function(){return"hkvs"==this.stateType?"count_hkvs":"count"},percentType:function(){return"hkvs"==this.stateType?"percent_hkvs":"count"},install:function(){return this.projects.filter((function(t){return t.regionUuid}))},pOffline:function(){var t=this;return this.install.reduce((function(e,n){return e+(100==n.region.camerasState[t.percentType].offline?1:0)}),0)},camerasState:function(){var t=this;return this.install.reduce((function(e,n){var a=n.region.camerasState[t.countType];return e.total+=a.total,e.online+=a.online,e.offline+=a.offline,e}),{total:0,online:0,offline:0})}}},h=u,p=(n("634f"),n("2877")),f=Object(p["a"])(h,o,l,!1,null,"23a40c78",null),v=f.exports,d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"branch-count"})},b=[],y=n("3eba"),k=n.n(y),_=(n("c037"),n("007d"),n("b11c"),n("627c"),n("0b4b"),n("37b6")),g={name:"",mounted:function(){this.initCharts()},data:function(){return{chart:null}},props:{check:{type:Array,default:[]},checkType:{type:String},checkTypeToggle:{type:Function}},computed:{typeTitle:function(){return"隐患通知单统计 - "+("branch"===this.checkType?"分公司":"项目")},branchs:function(){return this.$store.state.monitor.branchs},legendArr:function(){return this.check.map((function(t){return t._id}))},checkData:function(){return this.check.map((function(t,e){return t.value=t.total,t.name=t._id,t.itemStyle={normal:{color:_["e"][e%(_["e"].length-1)]}},t}))},options:function(){var t=this;return{backgroundColor:"rgba(255, 255, 255,0.8)",toolbox:{show:!0,feature:{myTool1:{show:!0,title:"切换【项目】或【分公司】",icon:"./img/icon/change.png",onclick:function(){t.checkTypeToggle()}},mark:{show:!0},dataView:{show:!0,readOnly:!1},magicType:{show:!0,type:["pie","funnel"]},restore:{show:!0},saveAsImage:{show:!0}}},calculable:!0,tooltip:{trigger:"item",formatter:"{a}<br/>{b}: {c}"},title:{text:this.typeTitle,left:"center",top:10,textStyle:{color:"#333"}},legend:{icon:"circle",x:"center",y:"8%",data:this.legendArr,textStyle:{color:"#333"}},series:[{name:"隐患通知单",type:"pie",radius:[37,155],avoidLabelOverlap:!1,startAngle:0,center:["50.1%","60%"],roseType:"area",selectedMode:"single",label:{normal:{show:!0,formatter:"{c} 次"},emphasis:{show:!0}},labelLine:{normal:{show:!0,smooth:!1,length:20,length2:10},emphasis:{show:!0}},data:this.checkData}]}}},watch:{options:function(t){this.setOptions(this.options)}},methods:{initCharts:function(){this.chart=k.a.init(this.$el),this.setOptions()},setOptions:function(){this.chart.setOption(this.options)}}},m=g,C=(n("ce19"),Object(p["a"])(m,d,b,!1,null,"0a2a2a86",null)),O=C.exports;function T(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function w(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?T(Object(n),!0).forEach((function(e){Object(c["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):T(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var j={name:"Dashboard",mounted:function(){this.ajaxCheckStatistical()},data:function(){return{stateType:"hkvs",checkRes:{},checkType:"branch"}},computed:w(w(w({},Object(i["b"])(["name"])),Object(i["b"])(["projects"])),{},{check:function(){return this.checkRes[this.checkType]||[]}}),components:{topCount:v,branchCount:O},methods:{checkTypeToggle:function(){this.checkType="branch"===this.checkType?"project":"branch"},ajaxCheckStatistical:function(){var t=this;Object(r["h"])().then((function(e){t.checkRes=e.result})).catch((function(){}))}}},x=j,S=(n("af69"),Object(p["a"])(x,a,s,!1,null,"0302c4e8",null));e["default"]=S.exports},af69:function(t,e,n){"use strict";n("1c3f")},ce19:function(t,e,n){"use strict";n("e7eb")},e7eb:function(t,e,n){}}]);