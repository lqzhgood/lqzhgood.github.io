(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0b69057e"],{"0d51":function(e,t,n){"use strict";n("c6d1")},"386d":function(e,t,n){n("214f")("search",1,(function(e,t,n){return[function(n){"use strict";var i=e(this),a=void 0==n?void 0:n[t];return void 0!==a?a.call(n,i):new RegExp(n)[t](String(i))},n]}))},"652f":function(e,t,n){"use strict";t["a"]={shortcuts:[{text:"今天",onClick:function(e){var t=new Date,n=new Date;e.$emit("pick",[n,t])}},{text:"最近一周",onClick:function(e){var t=new Date,n=new Date;n.setTime(n.getTime()-6048e5),e.$emit("pick",[n,t])}},{text:"最近一个月",onClick:function(e){var t=new Date,n=new Date;n.setTime(n.getTime()-2592e6),e.$emit("pick",[n,t])}},{text:"最近三个月",onClick:function(e){var t=new Date,n=new Date;n.setTime(n.getTime()-7776e6),e.$emit("pick",[n,t])}},{text:"未来一周",onClick:function(e){var t=new Date,n=new Date;n.setTime(n.getTime()+6048e5),e.$emit("pick",[n,t])}},{text:"未来一个月",onClick:function(e){var t=new Date,n=new Date;n.setTime(n.getTime()+2592e6),e.$emit("pick",[n,t])}},{text:"未来三个月",onClick:function(e){var t=new Date,n=new Date;n.setTime(n.getTime()+7776e6),e.$emit("pick",[n,t])}}]}},beb7:function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-container",attrs:{id:"check-list"}},[n("div",{staticClass:"toolbar"},[n("div",{staticClass:"btns"},[n("el-button",{attrs:{size:"mini"},on:{click:e.resetSearch}},[e._v("清除所有过滤器")]),e._v(" "),n("el-button-group",[n("el-button",{attrs:{type:"primary",icon:"el-icon-circle-plus-outline",title:"新建项目"},on:{click:function(t){return e.modify()}}})],1)],1),e._v(" "),n("div",{staticClass:"search"},[n("div",{staticClass:"row"},[n("div",{staticClass:"block"},[n("span",[e._v("创建时间")]),e._v(" "),n("el-date-picker",{attrs:{size:"mini",type:"daterange",align:"right","unlink-panels":"","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期","picker-options":e.pickerOptions},model:{value:e.search.creatTimeRange,callback:function(t){e.$set(e.search,"creatTimeRange",t)},expression:"search.creatTimeRange"}})],1),e._v(" "),n("div",{staticClass:"block"},[n("span",[e._v("整改期限")]),e._v(" "),n("el-date-picker",{attrs:{size:"mini",type:"daterange",align:"right","unlink-panels":"","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期","picker-options":e.pickerOptions},model:{value:e.search.rectifyTimeRange,callback:function(t){e.$set(e.search,"rectifyTimeRange",t)},expression:"search.rectifyTimeRange"}})],1)]),e._v(" "),n("div",{staticClass:"row"},[n("el-input",{staticClass:"index",attrs:{placeholder:"请输入内容",size:"mini",clearable:!0,autofocus:""},model:{value:e.search.index,callback:function(t){e.$set(e.search,"index","string"===typeof t?t.trim():t)},expression:"search.index"}},[n("template",{slot:"prepend"},[e._v("\n                        编号\n                    ")])],2),e._v(" "),n("el-input",{staticClass:"pId",attrs:{placeholder:"请输入内容",size:"mini",clearable:!0,autofocus:""},model:{value:e.search.pName,callback:function(t){e.$set(e.search,"pName","string"===typeof t?t.trim():t)},expression:"search.pName"}},[n("template",{slot:"prepend"},[e._v("\n                        工程名称\n                    ")])],2),e._v(" "),n("el-input",{staticClass:"des",attrs:{placeholder:"请输入内容",size:"mini",clearable:!0,autofocus:""},model:{value:e.search.des,callback:function(t){e.$set(e.search,"des","string"===typeof t?t.trim():t)},expression:"search.des"}},[n("template",{slot:"prepend"},[e._v("\n                        问题描述\n                    ")])],2),e._v(" "),n("el-checkbox",{model:{value:e.search.onlyNotRectify,callback:function(t){e.$set(e.search,"onlyNotRectify","string"===typeof t?t.trim():t)},expression:"search.onlyNotRectify"}},[e._v("只显示未整改")])],1),e._v(" "),n("div",{staticClass:"row"},[n("el-select",{ref:"branchsSelect",staticClass:"branchs",attrs:{multiple:"",placeholder:"请选择分公司",size:"mini",clearable:""},on:{change:e.selectOneEveryChange},model:{value:e.search.branchs,callback:function(t){e.$set(e.search,"branchs","string"===typeof t?t.trim():t)},expression:"search.branchs"}},e._l(e.branchs,(function(e){return n("el-option",{key:e,attrs:{label:e,value:e}})})),1)],1)])]),e._v(" "),n("div",{staticClass:"info"},[n("el-card",{staticClass:"box",attrs:{shadow:"hover"}},[n("span",[n("el-tag",[e._v("总计：")]),e._v("\n                "+e._s(e.total)+"\n            ")],1)])],1),e._v(" "),n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading.checkList,expression:"loading.checkList"}],ref:"filterTable",staticClass:"table",attrs:{"row-key":"_id",data:e.checkList,stripe:!0,"highlight-current-row":!0,lazy:!0},on:{"cell-dblclick":e.cellCopy,"row-click":e.expanRow}},[n("el-table-column",{attrs:{type:"expand"},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.row;return[n("p",[n("span",[e._v("_id:")]),e._v(" "),n("el-link",{on:{click:function(t){return e.GFn.copy(i._id)}}},[e._v("\n                        "+e._s(i._id)+"\n                        "),n("i",{staticClass:"el-icon-document-copy el-icon--right"})])],1),e._v(" "),e._l(i.imgs,(function(t){return n("el-card",{key:t._id,staticClass:"imgWrap",attrs:{shadow:"hover"}},[n("el-image",{staticClass:"img",attrs:{src:e.GFn.getImg(t.uri),"preview-src-list":[e.GFn.getImg(t.uri)],fit:"cover"}})],1)}))]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"编号",prop:"index",width:"120"},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.row;return[n("div",{domProps:{innerHTML:e._s(e.oneLine(i))}})]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"时间",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:e._f("timeFmt")(t.row.meta.createdAt),placement:"top"}},[n("span",[e._v(e._s(e._f("timeFmt")(t.row.meta.updatedAt)))])])]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"项目全称"},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.row;return i.Project?[n("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:i.Project.fullName,placement:"top"}},[n("el-tag",{attrs:{"disable-transitions":""}},[n("span",[e._v(e._s(i.Project.shortName))])])],1)]:void 0}}],null,!0)}),e._v(" "),n("el-table-column",{attrs:{label:"分公司",width:"140px"},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.row;return i.Project?[n("el-tag",{attrs:{type:"info"}},[n("span",[e._v(e._s(i.Project.branch))])])]:void 0}}],null,!0)}),e._v(" "),n("el-table-column",{attrs:{label:"问题描述",prop:"des","show-overflow-tooltip":!0}}),e._v(" "),n("el-table-column",{attrs:{label:"整改时限",prop:"rectifyDay",width:"120px"},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.row;return[i.rectifyDay?n("el-tag",{attrs:{type:e.map_rectifyDay(i.rectifyDay)}},[n("span",[e._v(e._s(e._f("dayFmt")(i.rectifyDay)))])]):e._e()]}}])}),e._v(" "),n("el-table-column",{attrs:{prop:"tag",label:"标签",width:"100",filters:[{text:"家",value:"家"},{text:"公司",value:"公司"}],"filter-method":e.filterTag,"filter-placement":"bottom-end"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.rectify?e._e():n("el-tag",{attrs:{type:"danger","disable-transitions":""}},[e._v("未整改")])]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"操作",width:"180",align:"right"},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.row;return[i.rectify?e._e():n("el-popover",{attrs:{placement:"top",width:"160"},model:{value:i._confirmZg,callback:function(t){e.$set(i,"_confirmZg","string"===typeof t?t.trim():t)},expression:"row._confirmZg"}},[n("p",[e._v("确定通过整改吗？")]),e._v(" "),n("div",{staticStyle:{"text-align":"right",margin:"0"}},[n("el-button",{attrs:{size:"mini",type:"text"},on:{click:function(e){i._confirmZg=!1}}},[e._v("取消")]),e._v(" "),n("el-button",{attrs:{size:"mini",type:"success",loading:i.loading},on:{click:function(t){return e.rectify(i)}}},[e._v("\n                            通过\n                        ")])],1),e._v(" "),n("el-button",{attrs:{slot:"reference",size:"mini",type:"success",icon:"el-icon-check",circle:""},slot:"reference"})],1),e._v(" "),i.rectify?e._e():n("el-button",{attrs:{size:"mini",type:"warning",icon:"el-icon-edit-outline",circle:""},on:{click:function(t){return e.modify(i)}}}),e._v(" "),n("el-popover",{attrs:{placement:"top",width:"160"},model:{value:i._confirmDel,callback:function(t){e.$set(i,"_confirmDel","string"===typeof t?t.trim():t)},expression:"row._confirmDel"}},[n("p",[e._v("确定要删除吗？")]),e._v(" "),n("div",{staticStyle:{"text-align":"right",margin:"0"}},[n("el-button",{attrs:{size:"mini",type:"text"},on:{click:function(e){i._confirmDel=!1}}},[e._v("取消")]),e._v(" "),n("el-button",{attrs:{size:"mini",type:"danger",loading:i.loading},on:{click:function(t){return e.delCheck(i)}}},[e._v("\n                            删除\n                        ")])],1),e._v(" "),n("el-button",{attrs:{slot:"reference",size:"mini",type:"danger",icon:"el-icon-delete",circle:""},slot:"reference"})],1),e._v(" "),n("router-link",{attrs:{target:"_blank",to:"/pdf/check/"+i.index}},[n("el-button",{attrs:{size:"mini",type:"primary",icon:"el-icon-link",circle:""}})],1)]}}])})],1),e._v(" "),n("div",{staticClass:"row",staticStyle:{"text-align":"right"}},[n("el-pagination",{attrs:{"current-page":e.page,"page-sizes":[20,40,100,200],"page-size":e.limit,layout:"total, sizes, prev, pager, next, jumper",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)],1)},a=[],r=(n("8e6e"),n("ac6a"),n("456d"),n("ade3")),c=(n("386d"),n("7cf8")),s=n("37b6"),o=n("652f");function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){Object(r["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var f={name:"check-list",mounted:function(){var e=this;this.$nextTick((function(){e.resetSearch()}))},data:function(){return{searchTimer:0,loading:{checkList:!1},search:{},searchTmp:{index:null,pName:null,des:null,onlyNotRectify:!1,creatTimeRange:null,rectifyTimeRange:null,branchs:[]},page:1,limit:20,checkList:[],total:-1,branchs:s["a"],pickerOptions:o["a"]}},computed:{searchParams:function(){var e=this.search,t={},n={};return e.index&&(t.index=e.index),e.des&&(t.des=e.des),e.onlyNotRectify&&(t.rectify={$ne:!0}),e.creatTimeRange&&(t["meta.createdAt"]={$gte:e.creatTimeRange[0],$lte:e.creatTimeRange[1]}),e.rectifyTimeRange&&(t.rectifyDay={$gte:e.rectifyTimeRange[0],$lte:e.rectifyTimeRange[1]}),e.pName&&(n["$or"]=[{"Project.fullName":e.pName},{"Project.shortName":e.pName}]),e.branchs&&0!=e.branchs.length&&(n["Project.branch"]={$in:e.branchs}),{query:t,queryPopulate:n}},checkForm:function(){return this.$store.state.monitor.checkForm}},watch:{searchParams:{handler:function(){this.searchDebounce()},deep:!0}},methods:{handleSizeChange:function(e){this.limit=e,this.searchDebounce()},handleCurrentChange:function(e){this.page=e,this.searchDebounce()},searchDebounce:function(){var e=this;clearTimeout(this.searchTimer),this.searchTimer=setTimeout((function(){e.ajaxcheckList()}),500)},ajaxcheckList:function(){var e=this;this.loading.checkList||(this.loading.checkList=!0,Object(c["g"])(u(u({},this.searchParams),{},{page:this.page,limit:this.limit})).then((function(t){e.checkList=t.result.list.map((function(e){return e.loading=!1,e._confirmDel=!1,e._confirmZg=!1,e.rectifyDay&&(e.rectifyDay=new Date(e.rectifyDay)),e})),e.total=t.result.total})).catch((function(e){console.log("err",e)})).finally((function(){e.loading.checkList=!1})))},modify:function(e){e?this.checkForm.openForm(Object.assign(e,{pId:e.Project._id,cId:e.cameraUuid}),this.ajaxcheckList):this.checkForm.openForm(null,this.ajaxcheckList)},rectify:function(e){var t=this;e.loading||(e.loading=!0,Object(c["e"])({_id:e._id,rectify:!0}).then((function(n){t.$message.success("整改通过"),e._confirmZg=!1,t.ajaxcheckList()})).catch((function(e){console.log("err",e)})).finally((function(){e.loading=!1})))},delCheck:function(e){var t=this;e.loading||(e.loading=!0,Object(c["f"])({_id:e._id}).then((function(n){t.$message.success("删除成功"),e._confirmDel=!1,t.ajaxcheckList()})).catch((function(e){console.log("err",e)})).finally((function(){e.loading=!1})))},resetDateFilter:function(){this.$refs.filterTable.clearFilter("date")},clearFilter:function(){this.$refs.filterTable.clearFilter()},formatter:function(e,t){return e.address},filterTag:function(e,t){return t.tag===e},filterHandler:function(e,t,n){var i=n["property"];return t[i]===e},cellCopy:function(e,t,n,i){"_id"==t.property&&this.GFn.copy(n.innerText)},map_rectifyDay:function(e){return e-Date.now()>0?"info":"danger"},expanRow:function(e,t,n){"操作"==t.label?this.$refs.filterTable.toggleRowExpansion(e,!0):this.$refs.filterTable.toggleRowExpansion(e)},resetSearch:function(){this.search=u({},this.searchTmp)},oneLine:function(e){return'<span class="index">'.concat((e.index+"").substr(0,8),"</span><span>").concat((e.index+"").substr(8),"</span>")},selectOneEveryChange:function(){this.$refs.branchsSelect.blur()}}},p=f,d=(n("0d51"),n("2877")),h=Object(d["a"])(p,i,a,!1,null,"2423901e",null);t["default"]=h.exports},c6d1:function(e,t,n){}}]);