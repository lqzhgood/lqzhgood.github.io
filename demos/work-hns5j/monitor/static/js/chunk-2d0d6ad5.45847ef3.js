(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d6ad5"],{7424:function(e,n,t){"use strict";t.r(n);var a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"app-container",attrs:{id:"setting"}},[t("el-tabs",{model:{value:e.activePage,callback:function(n){e.activePage=n},expression:"activePage"}},[t("el-tab-pane",{attrs:{label:"检查状态",name:"CameraChecker",lazy:!0}},[t("CameraChecker")],1),e._v(" "),t("el-tab-pane",{attrs:{label:"其他",name:"其他"}},[e._v("其他")])],1)],1)},c=[],i=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading.getCheckConfig,expression:"loading.getCheckConfig"}]},[t("el-card",{staticClass:"box-card",attrs:{"body-style":"{padding:0}",shadow:"hover"}},[t("el-button",{directives:[{name:"show",rawName:"v-show",value:!e.checkConfig.work,expression:"!checkConfig.work"}],attrs:{type:"success",icon:"el-icon-refresh"},on:{click:e.ajaxToggleCheckWork}},[e._v("开启")]),e._v(" "),t("el-button",{directives:[{name:"show",rawName:"v-show",value:e.checkConfig.work,expression:"checkConfig.work"}],attrs:{type:"danger",icon:"el-icon-refresh"},on:{click:e.ajaxToggleCheckWork}},[e._v("停止")]),e._v(" "),t("el-button",{attrs:{type:"primary",icon:"el-icon-refresh"},on:{click:e.ajaxCheckConfig}},[e._v("刷新")]),e._v(" "),t("hr"),e._v(" "),t("el-form",{staticClass:"table",attrs:{"label-position":"left","label-width":"150px"}},[t("el-form-item",{attrs:{label:"正在检查"}},[t("span",[e._v(e._s(e.checkConfig.work))])]),e._v(" "),t("el-form-item",{attrs:{label:"实时并发总计"}},[t("span",[e._v(e._s(e.checkConfig.currentChecker))])]),e._v(" "),t("el-form-item",{attrs:{label:"更新检查列表"}},[t("span",[e._v(e._s(e.checkConfig.isGetNeedCheckArr))])]),e._v(" "),e.checkConfig.needCheckArr?t("el-form-item",{attrs:{label:"当前进度"}},[t("el-tag",{attrs:{effect:"plain"}},[e._v(e._s(parseInt(e.checkConfig.nextCheckNum/e.checkConfig.needCheckArr.length*100))+"%")]),e._v(" "),t("span",[e._v(e._s(e.checkConfig.nextCheckNum)+" / "+e._s(e.checkConfig.needCheckArr.length))])],1):e._e()],1)],1)],1)},o=[],r=t("7cf8"),l={name:"CameraChecker",mounted:function(){this.ajaxCheckConfig()},data:function(){return{loading:{getCheckConfig:!1},checkConfig:{}}},methods:{ajaxCheckConfig:function(){var e=this;this.loading.getCheckConfig||(this.loading.getCheckConfig=!0,Object(r["n"])().then((function(n){e.checkConfig=n.result})).catch((function(e){})).finally((function(){e.loading.getCheckConfig=!1})))},ajaxToggleCheckWork:function(){var e=this;this.loading.getCheckConfig||(this.loading.getCheckConfig=!0,Object(r["u"])().then((function(n){e.checkConfig=n.result})).catch((function(e){})).finally((function(){e.loading.getCheckConfig=!1})))}}},s=l,h=t("2877"),g=Object(h["a"])(s,i,o,!1,null,"b3b6dd76",null),C=g.exports,f={name:"setting",data:function(){return{activePage:"CameraChecker"}},components:{CameraChecker:C}},k=f,d=Object(h["a"])(k,a,c,!1,null,"2942c87c",null);n["default"]=d.exports}}]);