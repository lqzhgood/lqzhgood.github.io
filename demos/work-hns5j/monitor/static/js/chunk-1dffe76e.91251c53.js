(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1dffe76e"],{"01a0":function(e,t,n){},"0d6d":function(e,t,n){var r=n("d3f4"),i=n("67ab").onFreeze;n("5eda")("freeze",(function(e){return function(t){return e&&r(t)?e(i(t)):t}}))},"1f2b":function(e,t,n){},"2f21":function(e,t,n){"use strict";var r=n("79e5");e.exports=function(e,t){return!!e&&r((function(){t?e.call(null,(function(){}),1):e.call(null)}))}},"2fdb":function(e,t,n){"use strict";var r=n("5ca1"),i=n("d2c8"),a="includes";r(r.P+r.F*n("5147")(a),"String",{includes:function(e){return!!~i(this,e,a).indexOf(e,arguments.length>1?arguments[1]:void 0)}})},"386d":function(e,t,n){n("214f")("search",1,(function(e,t,n){return[function(n){"use strict";var r=e(this),i=void 0==n?void 0:n[t];return void 0!==i?i.call(n,r):new RegExp(n)[t](String(r))},n]}))},"3b2b":function(e,t,n){var r=n("7726"),i=n("5dbc"),a=n("86cc").f,o=n("9093").f,s=n("aae3"),c=n("0bfb"),l=r.RegExp,u=l,f=l.prototype,d=/a/g,p=/a/g,m=new l(d)!==d;if(n("9e1e")&&(!m||n("79e5")((function(){return p[n("2b4c")("match")]=!1,l(d)!=d||l(p)==p||"/a/i"!=l(d,"i")})))){l=function(e,t){var n=this instanceof l,r=s(e),a=void 0===t;return!n&&r&&e.constructor===l&&a?e:i(m?new u(r&&!a?e.source:e,t):u((r=e instanceof l)?e.source:e,r&&a?c.call(e):t),n?this:f,l)};for(var h=function(e){e in l||a(l,e,{configurable:!0,get:function(){return u[e]},set:function(t){u[e]=t}})},b=o(u),v=0;b.length>v;)h(b[v++]);f.constructor=l,l.prototype=f,n("2aba")(r,"RegExp",l)}n("7a56")("RegExp")},4263:function(e,t,n){"use strict";n("01a0")},"55dd":function(e,t,n){"use strict";var r=n("5ca1"),i=n("d8e8"),a=n("4bf8"),o=n("79e5"),s=[].sort,c=[1,2,3];r(r.P+r.F*(o((function(){c.sort(void 0)}))||!o((function(){c.sort(null)}))||!n("2f21")(s)),"Array",{sort:function(e){return void 0===e?s.call(a(this)):s.call(a(this),i(e))}})},"59bf":function(e,t,n){"use strict";n("b59d")},6256:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-container",attrs:{id:"detail-list"}},[n("AddNowBox",{ref:"BindForm"}),e._v(" "),n("DialogForm",{ref:"DialogForm"}),e._v(" "),n("div",{staticClass:"toolbar"},[n("div",{staticClass:"mainBtns"},[n("el-button",{attrs:{size:"mini",plain:""},on:{click:e.clearSearch}},[e._v("清除所有过滤器")]),e._v(" "),n("el-button-group",[n("el-button",{attrs:{type:"primary",icon:"el-icon-circle-plus-outline",title:"新建项目"},on:{click:function(t){return e.modifyProject("")}}}),e._v(" "),n("el-button",{attrs:{type:"primary",icon:"el-icon-share",title:"导出表格"},on:{click:e.exportProject}})],1)],1),e._v(" "),n("div",{staticClass:"search"},[n("div",{staticClass:"row"},[n("el-input",{staticClass:"name",attrs:{placeholder:"请输入内容",size:"mini",clearable:"",autofocus:""},model:{value:e.search.name,callback:function(t){e.$set(e.search,"name","string"===typeof t?t.trim():t)},expression:"search.name"}},[n("template",{slot:"prepend"},[e._v("工程名称")])],2),e._v(" "),n("el-input",{staticClass:"des",attrs:{placeholder:"请输入内容",size:"mini",clearable:"",autofocus:""},model:{value:e.search.des,callback:function(t){e.$set(e.search,"des","string"===typeof t?t.trim():t)},expression:"search.des"}},[n("template",{slot:"prepend"},[e._v("项目情况")])],2),e._v(" "),n("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"指没有接入 【监控平台】 的项目",placement:"bottom"}},[n("el-checkbox",{model:{value:e.search.unRegionUuid,callback:function(t){e.$set(e.search,"unRegionUuid","string"===typeof t?t.trim():t)},expression:"search.unRegionUuid"}},[e._v("未接入")])],1),e._v(" "),n("el-checkbox",{model:{value:e.search.unBranch,callback:function(t){e.$set(e.search,"unBranch","string"===typeof t?t.trim():t)},expression:"search.unBranch"}},[e._v("无分公司")])],1),e._v(" "),n("div",{staticClass:"row btns"},[n("el-checkbox-group",{staticClass:"install",attrs:{size:"mini"},model:{value:e.search.install,callback:function(t){e.$set(e.search,"install","string"===typeof t?t.trim():t)},expression:"search.install"}},[n("el-checkbox-button",{attrs:{label:4}},[e._v("已装已接")]),e._v(" "),n("el-checkbox-button",{attrs:{label:2}},[e._v("已装未接")]),e._v(" "),n("el-checkbox-button",{attrs:{label:1}},[e._v("未安装")])],1),e._v(" "),n("el-checkbox-group",{staticClass:"cState",attrs:{size:"mini"},model:{value:e.search.cState,callback:function(t){e.$set(e.search,"cState","string"===typeof t?t.trim():t)},expression:"search.cState"}},[n("el-checkbox-button",{attrs:{label:4}},[e._v("全部在线")]),e._v(" "),n("el-checkbox-button",{attrs:{label:2}},[e._v("部分在线")]),e._v(" "),n("el-checkbox-button",{attrs:{label:1}},[e._v("全部离线")])],1)],1),e._v(" "),n("div",{staticClass:"row"},[n("el-select",{ref:"branchsSelect",staticClass:"branchs",attrs:{multiple:"",placeholder:"请选择分公司",size:"mini",clearable:""},on:{change:e.selectOneEveryChange},model:{value:e.search.branchs,callback:function(t){e.$set(e.search,"branchs","string"===typeof t?t.trim():t)},expression:"search.branchs"}},e._l(e.branchs,(function(e){return n("el-option",{key:e,attrs:{label:e,value:e}})})),1)],1)])]),e._v(" "),n("div",{staticClass:"info"},[n("el-card",{staticClass:"box",attrs:{shadow:"hover"}},[n("span",[n("el-tag",[e._v("总计：")]),e._v("\n                "+e._s(e.filterTable.length)+"\n            ")],1)]),e._v(" "),n("el-card",{staticClass:"box",attrs:{shadow:"hover"}},[n("el-tag",[e._v("新的项目：")]),e._v("\n            "+e._s(e.newProjectFilter?e.newProjectFilter.length:0)+"\n            "),e._l(e.newProjectFilter,(function(t){return n("el-link",{key:t.regionUuid,staticClass:"unImport",attrs:{type:"success"},on:{click:function(n){return e.bindNewProject(t)}}},[e._v(e._s(t.shortName))])})),e._v(" "),n("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"手动同步 [海康威视] 平台",placement:"top"}}),e._v(" "),n("el-button",{attrs:{icon:"el-icon-refresh-right",circle:"",size:"mini",loading:e.loading.syncBeginTask},on:{click:e.ajaxSyncBeginTask}})],2)],1),e._v(" "),n("el-table",{ref:"filterTable",staticClass:"table",attrs:{data:e.filterTable,stripe:!0,"row-key":"_id","default-sort":{prop:"index",order:"descending"}}},[n("el-table-column",{attrs:{type:"expand"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.row;return[n("keep-alive",[r.region?n("Expand",{attrs:{scope:r}}):n("span",[e._v("-")])],1)]}}])}),e._v(" "),n("el-table-column",{attrs:{type:"index",width:"40px",align:"center",sortable:""}}),e._v(" "),n("el-table-column",{attrs:{label:"在线率","class-name":"install",align:"right",width:"80px"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.row;return[r.region?n("el-tooltip",{staticClass:"item",attrs:{effect:"dark",placement:"top",content:r.region.camerasState.count.online+" / "+r.region.camerasState.count.total}},[n("span",[n("span",{staticClass:"icon"},[n("a-icon",{attrs:{type:"video-camera",theme:"twoTone",twoToneColor:e.mapStateColor(r.region.camerasState)}})],1),e._v("\n                        "+e._s(e._f("percentSymbol")(r.region.camerasState.percent.online))+"\n                    ")])]):n("span",[e._v("-")])]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"项目简称"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.row;return[n("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:r.shortName,placement:"top"}},[n("el-tag",{attrs:{"disable-transitions":""}},[n("span",[e._v(e._s(r.shortName))])])],1)]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"项目全称"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.row;return[n("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:r.fullName,placement:"top"}},[n("el-tag",{attrs:{"disable-transitions":""}},[n("span",[e._v(e._s(r.fullName))])])],1)]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"分公司"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.row;return[n("el-tag",{attrs:{type:"info","disable-transitions":""}},[n("span",[e._v(e._s(r.branch))])])]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"标签"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.row;return[r.install?e._e():n("el-tag",{attrs:{size:"mini",type:"danger"}},[e._v("未安装")]),e._v(" "),r.install&&!r.regionUuid?n("el-tag",{attrs:{size:"mini",type:"warning"}},[e._v("已装未接")]):e._e()]}}])}),e._v(" "),n("el-table-column",{staticClass:"des",attrs:{label:"项目情况",prop:"des"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.row,i=t.$index;return[r.edit?[n("el-input",{staticClass:"edit-input",attrs:{size:"mini",circle:"",disabled:r.loading,width:"100%"},on:{blur:function(t){return e.cancelEdit(r)}},nativeOn:{keypress:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.confirmEdit(r)}},model:{value:r.des,callback:function(t){e.$set(r,"des","string"===typeof t?t.trim():t)},expression:"row.des"}}),e._v(" "),n("el-link",{staticClass:"cancel-btn",attrs:{type:"success"},nativeOn:{click:function(t){return e.confirmEdit(r)}}},[n("i",{staticClass:"el-icon-check el-icon--right"})])]:[n("el-link",{on:{click:function(t){return e.beginEdit(t,r,i)}}},[e._v("\n                        "+e._s(r.des)+"\n                        "),n("i",{staticClass:"el-icon-edit el-icon--right"})])]]}}])}),e._v(" "),n("el-table-column",{staticClass:"remark",attrs:{label:"项目备注",prop:"remark"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.row;return[n("pre",[e._v(e._s(r.remark))])]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"操作",width:"auto"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.row;return[n("el-button",{attrs:{type:"primary",size:"mini",circle:"",icon:"el-icon-edit-outline"},on:{click:function(t){return e.modifyProject(r)}}}),e._v(" "),n("el-popover",{attrs:{placement:"top",width:"160"},model:{value:r._confirmDel,callback:function(t){e.$set(r,"_confirmDel","string"===typeof t?t.trim():t)},expression:"row._confirmDel"}},[n("p",[e._v("确定要删除吗？")]),e._v(" "),n("div",{staticStyle:{"text-align":"right",margin:"0"}},[n("el-button",{attrs:{size:"mini",type:"text"},on:{click:function(e){r._confirmDel=!1}}},[e._v("取消")]),e._v(" "),n("el-button",{attrs:{size:"mini",type:"danger",loading:e.loading.del},on:{click:function(t){return e.ajaxDelProject(r)}}},[e._v("删除")])],1),e._v(" "),n("el-button",{attrs:{slot:"reference",size:"mini",type:"danger",icon:"el-icon-delete",circle:""},slot:"reference"})],1)]}}])})],1)],1)},i=[],a=(n("6762"),n("2fdb"),n("3b2b"),n("7f7f"),n("386d"),n("55dd"),n("2909")),o=n("37b6"),s=n("7cf8"),c=n("c0f46"),l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-tabs",{staticClass:"encoders",attrs:{type:"border-card","tab-position":"left"}},e._l(e.mergeEC,(function(t){return n("el-tab-pane",{key:t.encoderUuid,attrs:{label:t.encoderName,lazy:!0}},[n("el-form",{staticClass:"encoderInfo",attrs:{"label-position":"left",inline:""}},[n("el-form-item",{attrs:{label:"设备名称"}},[n("span",[e._v(e._s(t.encoderName))])]),e._v(" "),n("el-form-item",{attrs:{label:"设备类型"}},[n("span",[e._v(e._s(t.encoderModelName))])]),e._v(" "),n("el-form-item",{attrs:{label:"IP地址"}},[n("el-link",{attrs:{underline:!1},on:{click:function(n){return e.GFn.openLink("https://ip.cn/?ip="+t.encoderIp)}}},[n("span",[e._v(e._s(t.encoderIp))]),e._v(" "),n("i",{staticClass:"el-icon-search el-icon--right"})])],1),e._v(" "),n("el-form-item",{attrs:{label:"对讲通道"}},[n("span",[e._v(e._s(t.visIntercomChanNum))])]),e._v(" "),n("el-form-item",{attrs:{label:"资源权限集"}},[n("span",[e._v(e._s(t.resAuths))])]),e._v(" "),n("el-form-item",{attrs:{label:"设备UUID"}},[n("el-link",{attrs:{underline:!1},on:{click:function(n){return e.GFn.copy(t.encoderUuid)}}},[n("span",{staticClass:"encoderUuid"},[e._v(e._s(t.encoderUuid))]),e._v(" "),n("i",{staticClass:"el-icon-copy-document el-icon--right"})])],1)],1),e._v(" "),n("el-divider",[n("i",{staticClass:"el-icon-video-camera"})]),e._v(" "),n("el-card",{attrs:{shadow:"never","body-style":{padding:"15px"}}},[n("div",{staticClass:"cameraWrap"},e._l(t.cameras,(function(t){return n("div",{key:t.cameraUuid,staticClass:"camera"},[n("el-popover",{attrs:{trigger:"hover",placement:"top",transition:"","popper-class":"projectList-cameraInfo-box"}},[n("p",[n("span",{staticClass:"label"},[e._v("设备名称:")]),e._v("\n                            "+e._s(t.cameraName)+"\n                        ")]),e._v(" "),n("p",[n("span",{staticClass:"label"},[e._v("检查时间:")]),e._v("\n                            "+e._s(e._f("timeFmt")(t.check.lastTime))+"\n                        ")]),e._v(" "),n("p",[n("span",{staticClass:"label"},[e._v("检查延迟:")]),e._v("\n                            "+e._s(e._f("delayFmt")(t.check.delay))+"\n                        ")]),e._v(" "),n("p",[n("span",{staticClass:"label"},[e._v("检查状态:")]),e._v("\n                            "+e._s(t.check.code)+"\n                        ")]),e._v(" "),n("p",[n("span",{staticClass:"label"},[e._v("检查信息:")]),e._v("\n                            "+e._s(t.check.msg)+"\n                        ")]),e._v(" "),n("p",[n("span",{staticClass:"label"},[e._v("设备类型:")]),e._v("\n                            "+e._s(t.cameraTypeName)+"\n                        ")]),e._v(" "),n("p",[n("span",{staticClass:"label"},[e._v("摄像头ID:")]),e._v(" "),n("el-button",{staticStyle:{zoom:"0.5"},attrs:{icon:"el-icon-document-copy",circle:"",size:"mini"},on:{click:function(n){return e.copyText(t.cameraUuid)}}})],1),e._v(" "),n("p",[n("span",{staticClass:"label"},[e._v("立即检查:")]),e._v(" "),n("el-button",{staticStyle:{zoom:"0.5"},attrs:{icon:"el-icon-refresh",circle:"",size:"mini",loading:e.loading.refreshDelay},on:{click:function(n){return e.refreshDelay(t)}}})],1),e._v(" "),n("div",{staticClass:"name-wrapper",attrs:{slot:"reference"},slot:"reference"},[n("DotState",{attrs:{type:e.delayMap(t.check.delay)}}),e._v(" "),n("span",{staticClass:"name"},[e._v(e._s(t.cameraName))])],1)])],1)})),0)])],1)})),1)},u=[],f=(n("8e6e"),n("ac6a"),n("456d"),n("ade3")),d=(n("0d6d"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",{staticClass:"dot",class:e.type})}),p=[],m={name:"",data:function(){return{}},props:["type"]},h=m,b=(n("e582"),n("2877")),v=Object(b["a"])(h,d,p,!1,null,"1f05e204",null),g=v.exports;function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function k(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(Object(n),!0).forEach((function(t){Object(f["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var j={name:"",data:function(){return{loading:{refreshDelay:!1}}},props:{scope:{type:Object,required:!0,default:{}}},computed:{encoders:function(){return this.scope.region.encoders},cameras:function(){return this.scope.region.cameras},mergeEC:function(){for(var e=Object.freeze(Object.assign([],this.encoders)),t=Object.freeze(Object.assign([],this.cameras)),n=0;n<e.length;n++){var r=e[n];r.cameras=[];for(var i=0;i<t.length;i++){var a=t[i];r.encoderUuid==a.encoderUuid&&r.cameras.push(a)}}return e}},methods:{refreshDelay:function(e){var t=this;this.loading.refreshDelay||(this.loading.refreshDelay=!0,Object(s["c"])(e.cameraUuid).then((function(t){e.check=k({},t.result.check)})).catch((function(e){console.log("err",e)})).finally((function(){t.loading.refreshDelay=!1})))},delayMap:function(e){var t=e/1e3;return t<0?"":t<10?"success":t<30?"warning":"error"},copyText:function(e){Object(c["copy"])(e)}},components:{DotState:g}},x=j,w=(n("f29e"),n("4263"),Object(b["a"])(x,l,u,!1,null,"0a98b3e6",null)),C=w.exports,O=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("el-dialog",{attrs:{title:e.title,visible:e.open,"close-on-click-modal":!1,"close-on-press-escape":!1,"destroy-on-close":"",fullscreen:!e.isPc},on:{close:e.closeDialog}},[n("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules}},[n("el-form-item",{attrs:{label:"项目简称","label-width":e.width,prop:"shortName"}},[n("el-input",{attrs:{autocomplete:"off",clearable:""},model:{value:e.form.shortName,callback:function(t){e.$set(e.form,"shortName","string"===typeof t?t.trim():t)},expression:"form.shortName"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"项目全称","label-width":e.width,prop:"fullName"}},[n("el-input",{attrs:{autocomplete:"off",clearable:""},model:{value:e.form.fullName,callback:function(t){e.$set(e.form,"fullName","string"===typeof t?t.trim():t)},expression:"form.fullName"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"分公司","label-width":e.width,prop:"branch"}},[n("el-select",{attrs:{placeholder:"请选择分公司",clearable:"",filterable:""},model:{value:e.form.branch,callback:function(t){e.$set(e.form,"branch","string"===typeof t?t.trim():t)},expression:"form.branch"}},e._l(e.branchs,(function(e){return n("el-option",{key:e,attrs:{label:e,value:e}})})),1)],1),e._v(" "),n("el-form-item",{attrs:{label:"状态描述","label-width":e.width,prop:"des"}},[n("el-input",{attrs:{autocomplete:"off",clearable:""},model:{value:e.form.des,callback:function(t){e.$set(e.form,"des","string"===typeof t?t.trim():t)},expression:"form.des"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"监控平台绑定","label-width":e.width,prop:"regionUuid"}},[n("el-select",{attrs:{placeholder:"请选择平台区域",disabled:e.loading.regions,clearable:"",filterable:""},model:{value:e.form.regionUuid,callback:function(t){e.$set(e.form,"regionUuid","string"===typeof t?t.trim():t)},expression:"form.regionUuid"}},e._l(e.regions,(function(e){return n("el-option",{key:e.regionUuid,attrs:{label:e.name,value:e.regionUuid}})})),1),e._v(" "),n("el-button",{attrs:{icon:"el-icon-refresh",circle:"",size:"mini",loading:e.loading.regions},on:{click:function(t){return e.ajaxRegions()}}})],1),e._v(" "),n("el-form-item",{attrs:{label:"已安装","label-width":e.width,prop:"install"}},[n("el-switch",{model:{value:e.form.install,callback:function(t){e.$set(e.form,"install","string"===typeof t?t.trim():t)},expression:"form.install"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"备注","label-width":e.width,prop:"remark"}},[n("el-input",{attrs:{type:"textarea",autosize:"",placeholder:"请输入备注"},model:{value:e.form.remark,callback:function(t){e.$set(e.form,"remark",t)},expression:"form.remark"}})],1)],1),e._v(" "),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:function(t){e.open=!1}}},[e._v("取消")]),e._v(" "),n("el-button",{attrs:{type:"primary",loading:e.loading.project},nativeOn:{click:function(t){return e.projectModify(t)}}},[e._v("提交")])],1)],1)],1)},S=[],N=function(){return{_id:null,fullName:"",shortName:"",branch:"",des:"",regionUuid:"",install:!1,remark:""}},$=function(){return Object.keys(N())},D={name:"",created:function(){0===this.regions.length&&this.ajaxRegions()},data:function(){return{isPc:o["d"].isPc,title:"",open:!1,branchs:o["a"],loading:{regions:!1,project:!1},form:N(),width:"120px",rules:{shortName:[{required:!0,message:"请输入简称",trigger:"change"}],branch:[{required:!0,message:"请选择分公司",trigger:"change"}]}}},computed:{regions:function(){return this.$store.state.monitor.regions}},watch:{"form.regionUuid":function(e){this.form.install=!!e}},methods:{projectModify:function(){var e=this,t=this.submitForm();t&&!this.loading.project&&(this.loading.project=!0,this.form.fullName||(this.form.fullName=this.form.shortName),this.form.regionUuid&&(this.form.install=!0),Object(s["s"])(this.form).then((function(t){e.$message({message:"".concat(e.title,"成功 ").concat(e.form.shortName),type:"success"}),e.$store.dispatch("monitor/ajaxIndex"),e.open=!1})).catch((function(e){console.log("err",e)})).finally((function(){e.loading.project=!1})))},ajaxRegions:function(){var e=this;this.loading.regions||(this.loading.regions=!0,Object(s["p"])().then((function(t){e.$store.commit("monitor/SET_Regions",t.result)})).catch((function(e){console.log("err",e)})).finally((function(){e.loading.regions=!1})))},openForm:function(e){this.open=!0,e?(this.title="修改项目",this.form=_.pick(e,$())):this.title="新建项目"},closeDialog:function(){this.form=N(),this.open=!1},submitForm:function(){var e=!1;return this.$refs.form.validate((function(t){if(e=t,!t)return!1})),e}}},U=D,E=Object(b["a"])(U,O,S,!1,null,"0dddb7ea",null),P=E.exports,F=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("el-dialog",{staticClass:"bind",attrs:{title:"绑定项目 "+e.project.fullName,visible:e.open,"destroy-on-close":""},on:{close:e.closeDialog}},[n("div",{staticClass:"search"},[n("el-input",{attrs:{placeholder:"请输入项目名称",clearable:""},model:{value:e.search,callback:function(t){e.search="string"===typeof t?t.trim():t},expression:"search"}})],1),e._v(" "),e.unRegionByBranch?n("div",{staticClass:"unRegion"},e._l(e.unRegionByBranch,(function(t,r){return n("div",{key:r},[n("el-divider",[e._v(e._s(r))]),e._v(" "),e._l(t,(function(t){return n("el-button",{key:t._id,staticClass:"project",on:{click:function(n){return e.bindProject(t)}}},[e._v("\n                    "+e._s(t.shortName)+"\n                ")])}))],2)})),0):e._e(),e._v(" "),n("el-divider",[n("i",{staticClass:"el-icon-office-building"})]),e._v(" "),n("div",{staticClass:"create"},[n("el-button",{staticStyle:{width:"100%"},attrs:{type:"primary"},on:{click:function(t){return e.bindProject()}}},[e._v("新建项目")])],1)],1)],1)},z=[],B=n("2ef0"),T=n.n(B),R={name:"",data:function(){return{search:"",open:!1,project:{},DialogForm:{}}},computed:{projects:function(){return this.$store.state.monitor.projects},unRegion:function(){return this.projects.filter((function(e){return!e.regionUuid}))},filterUnRegion:function(){var e=this;return this.unRegion.filter((function(t){return t.shortName.includes(e.search)}))},unRegionByBranch:function(){return T.a.groupBy(this.filterUnRegion,"branch")}},methods:{bindProject:function(e){if(e){var t=Object.assign({},e);t.shortName=this.project.shortName,t.regionUuid=this.project.regionUuid,this.project=t}this.DialogForm.openForm(this.project),this.open=!1},openForm:function(e,t){this.open=!0,this.project=e,this.DialogForm=t,this.search=e.shortName.substr(-2)},closeDialog:function(){this.open=!1,this.project={}}}},I=R,A=(n("8ea0"),Object(b["a"])(I,F,z,!1,null,"7710ab21",null)),q=A.exports,M={name:"detail-list",mounted:function(){this.clearSearch()},data:function(){return{search:{name:"",des:"",branchs:[],install:[4,2,1],cState:[4,2,1],unRegionUuid:!1,unBranch:!1},branchs:o["a"],loading:{del:!1,syncBeginTask:!1},open:!1,formType:"新建项目"}},computed:{syncConfig:function(){return this.$store.state.monitor.syncConfig},mLoading:function(){return this.$store.state.monitor.mLoading},table:function(){var e=Object(a["a"])(this.$store.state.monitor.projects);return e.sort((function(e,t){return new Date(t.meta.createdAt)-new Date(e.meta.createdAt)}))},newProjectFilter:function(){var e=this;return this.syncConfig.needAddProject?this.syncConfig.needAddProject.filter((function(t){return!e.table.some((function(e){return t.regionUuid==e.regionUuid}))})):[]},filterTable:function(){var e=this.search,t=e.name,n=e.des,r=e.branchs,i=e.install,a=e.cState,o=e.unRegionUuid,s=e.unBranch;return this.table.filter((function(e){var c=new RegExp(t),l=!t||c.test(e.fullName)||c.test(e.shortName),u=new RegExp(n),f=!n||u.test(e.des),d=0==r.length||r.includes(e.branch),p=i.reduce((function(e,t,n,r){return e+t}),0),m={4:e.install&&e.regionUuid,2:e.install&&!e.regionUuid,1:!e.install},h=7==p||4==p&&m[4]||2==p&&m[2]||1==p&&m[1]||6==p&&(m[4]||m[2])||5==p&&(m[4]||m[1])||3==p&&(m[2]||m[1]),b=e.region?e.region.camerasState.percent:{},v=b.online,g=a.reduce((function(e,t,n,r){return e+t}),0),_={4:100==v,2:v<100&&v>0,1:0==v},y=(7==p||0==p||4==p)&&(7==g||4==g&&_[4]||2==g&&_[2]||1==g&&_[1]||6==g&&(_[4]||_[2])||5==g&&(_[4]||_[1])||3==g&&(_[2]||_[1])),k=!0;o&&e.regionUuid&&(k=!1);var j=!0;return s&&e.branch&&(k=!1),l&&f&&d&&h&&y&&k&&j})).sort((function(e,t){return"公司本部"===e.branch?-1:1}))}},methods:{bindNewProject:function(e){this.$refs.BindForm.openForm(e,this.$refs.DialogForm)},ajaxSyncBeginTask:function(){var e=this;this.loading.syncBeginTask||(this.loading.syncBeginTask=!0,Object(s["t"])().then((function(t){e.ajaxSyncConfig(),e.$message.success("同步成功")})).catch((function(){})).finally((function(){e.loading.syncBeginTask=!1})))},ajaxSyncConfig:function(){this.$store.dispatch("monitor/ajaxSyncConfig")},clearSearch:function(){this.search={name:"",des:"",branchs:[],install:[4,2,1],cState:[4,2,1]}},beginEdit:function(e,t,n){var r=this;t.edit=!t.edit,this.$nextTick((function(){var e=r.$refs.filterTable.$el.querySelectorAll(".el-table__row")[n];e.querySelector("input").focus()}))},cancelEdit:function(e){var t=this;setTimeout((function(){e.loading||(e.edit=!1,e.des=e._originalDes,t.$message({message:"已取消修改",type:"warning"}))}),150)},confirmEdit:function(e){var t=this;e.loading||(e.loading=!0,Object(s["s"])({_id:e._id,des:e.des}).then((function(n){e.edit=!1,e._originalDes=e.des,t.$message({message:"修改成功",type:"success"})})).catch((function(e){console.log("err",e)})).finally((function(){setTimeout((function(){e.loading=!1}),150)})))},modifyProject:function(e){this.$refs.DialogForm.openForm(e)},ajaxDelProject:function(e){var t=this;this.loading.del||(this.loading.del=!0,Object(s["j"])({_id:e._id}).then((function(n){t.$message({message:"删除成功 ".concat(e.shortName),type:"success"}),t.$store.dispatch("monitor/ajaxIndex")})).catch((function(e){console.log("err",e)})).finally((function(){t.loading.del=!1})))},mapStateColor:function(e){var t=e.percent;return 100==t.online?o["b"].green:0==t.online?o["b"].red:"-"==t.online?o["b"].gray:o["b"].yellow},selectOneEveryChange:function(e,t){this.$refs.branchsSelect.blur()},exportProject:function(){var e=this.filterTable.reduce((function(e,t,n,r){var i="";return t.install||(i="未安装"),t.install&&!t.regionUuid&&(i="已装未接"),"".concat(e).concat(t.fullName,"\t").concat(t.shortName,"\t").concat(t.branch,"\t").concat(i,"\t").concat(t.des,'\t"').concat(t.remark,'"\r\n')}),"项目全称\t项目简称\t分公司\t标签\t项目情况\t项目备注\r\n");Object(c["copy"])(e)},test:function(e){console.log("v",e)}},filters:{installFilter:function(e){return e?"success":"warning"},percentSymbol:function(e){return"-"!=e?e+" %":"-"}},components:{Expand:C,DialogForm:P,AddNowBox:q}},L=M,G=(n("59bf"),Object(b["a"])(L,r,i,!1,null,"7b4cfa96",null));t["default"]=G.exports},6762:function(e,t,n){"use strict";var r=n("5ca1"),i=n("c366")(!0);r(r.P,"Array",{includes:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}}),n("9c6c")("includes")},"67ab":function(e,t,n){var r=n("ca5a")("meta"),i=n("d3f4"),a=n("69a8"),o=n("86cc").f,s=0,c=Object.isExtensible||function(){return!0},l=!n("79e5")((function(){return c(Object.preventExtensions({}))})),u=function(e){o(e,r,{value:{i:"O"+ ++s,w:{}}})},f=function(e,t){if(!i(e))return"symbol"==typeof e?e:("string"==typeof e?"S":"P")+e;if(!a(e,r)){if(!c(e))return"F";if(!t)return"E";u(e)}return e[r].i},d=function(e,t){if(!a(e,r)){if(!c(e))return!0;if(!t)return!1;u(e)}return e[r].w},p=function(e){return l&&m.NEED&&c(e)&&!a(e,r)&&u(e),e},m=e.exports={KEY:r,NEED:!1,fastKey:f,getWeak:d,onFreeze:p}},"6f5f":function(e,t,n){},"7a56":function(e,t,n){"use strict";var r=n("7726"),i=n("86cc"),a=n("9e1e"),o=n("2b4c")("species");e.exports=function(e){var t=r[e];a&&t&&!t[o]&&i.f(t,o,{configurable:!0,get:function(){return this}})}},"8ea0":function(e,t,n){"use strict";n("af09")},af09:function(e,t,n){},b59d:function(e,t,n){},e582:function(e,t,n){"use strict";n("1f2b")},f29e:function(e,t,n){"use strict";n("6f5f")}}]);