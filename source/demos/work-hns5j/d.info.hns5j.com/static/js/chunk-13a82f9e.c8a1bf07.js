(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-13a82f9e"],{"2ad0":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("G-Table",{attrs:{data:t.tableData}},[a("el-table-column",{attrs:{align:"center",label:"日期",prop:"日期",width:"140px"}}),a("el-table-column",{attrs:{align:"right",label:"变更单价",prop:"变更单价"}}),a("el-table-column",{attrs:{align:"right",label:"变更数量",prop:"变更数量"}}),a("el-table-column",{attrs:{align:"right",label:"变更总额",width:"120px"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.row;return[t._v(t._s(t._f("price")(a.变更单价*a.变更数量,"元")))]}}])}),a("el-table-column",{attrs:{align:"center",label:"变更人",prop:"变更人"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.row;return[a("el-link",{attrs:{type:"primary"},on:{click:function(e){t.GFN.to("/人力/员工档案/员工信息查看").in()}}},[t._v(t._s(n.变更人))])]}}])})],1)},r=[],l={name:"",data:function(){return{tableData:[{"日期":"2020/07/01 11:33:12","变更单价":"3900","变更数量":"400","变更人":"李王金"},{"日期":"2020/04/01 15:13:12","变更单价":"3700","变更数量":"400","变更人":"张齐天"}]}}},c=l,i=a("2877"),o=Object(i["a"])(c,n,r,!1,null,"302ab1b9",null);e["a"]=o.exports},"4f2a":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-card",{attrs:{"body-style":"padding:0"}},[a("div",{staticClass:"header",attrs:{slot:"header"},slot:"header"},["目标"!==t.mode?a("el-button",{staticClass:"changeMode",attrs:{plain:"",type:"success"},on:{click:function(e){t.dataMode="end_dict"===t.dataMode?"end_part":"end_dict"}}},[t._v("🔀 切换模式")]):t._e(),a("h1",{staticStyle:{"text-align":"center"}},[a("span",{staticStyle:{"text-decoration":"underline"}},[t._v(t._s(t.tree_type.substr(2)))]),t._v("分项统计表 ")]),t.$slots.projectName?a("el-row",[a("el-col",{attrs:{span:10}},[t._t("projectName",[t._v("-")])],2),a("el-col",{staticClass:"price",attrs:{span:14,align:"right"}})],1):t._e()],1),a("G-Table",{ref:"tableHeader",staticClass:"预算表格 header",class:t.mode,attrs:{data:t.countAll,print:""}},[a("el-table-column",{key:Math.random(),attrs:{width:t.width.index,align:"center",label:"序号"}},[[a("b",[t._v("合计")])]],2),a("el-table-column",{key:Math.random(),attrs:{width:t.width.name,"class-name":"分项名称","header-align":"center",label:"分项名称",prop:"label"}}),a("el-table-column",{key:Math.random(),attrs:{width:t.width.unit,align:"center",label:"单位"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.row;return[a("span",[t._v(t._s(n.单位))])]}}])}),a("el-table-column",{key:Math.random(),attrs:{"header-align":"center",label:"数量"}},t._l(t.curr_dict_量,(function(e){return a("el-table-column",{key:e,attrs:{label:e,align:"right","header-align":"center"},scopedSlots:t._u([{key:"default",fn:function(n){var r=n.row;return[a("span",{staticStyle:{opacity:"0"}},[t._v(t._s(t._f("price")(r[e],"无",2)))])]}}],null,!0)})})),1),a("el-table-column",{key:Math.random(),attrs:{"header-align":"center",label:"单价"}},t._l(t.curr_dict_单价,(function(e){return a("el-table-column",{key:e,attrs:{label:e,align:"right","header-align":"center"},scopedSlots:t._u([{key:"default",fn:function(n){var r=n.row;return[a("span",{staticStyle:{opacity:"0"}},[t._v(t._s(t._f("price")(r[e],"无",2)))])]}}],null,!0)})})),1),a("el-table-column",{key:Math.random(),attrs:{"header-align":"center",label:"合价"}},t._l(t.curr_dict_合价,(function(e){return a("el-table-column",{key:e,attrs:{label:e,align:"right","header-align":"center"},scopedSlots:t._u([{key:"default",fn:function(n){var r=n.row;return[a("span",[t._v(t._s(t._f("price")(r[e],"无",2)))])]}}],null,!0)})})),1),["预算","全部"].includes(t.mode)?a("el-table-column",{key:Math.random(),attrs:{"header-align":"center",label:"合价差"}},[["预算","全部"].includes(t.mode)?a("el-table-column",{key:Math.random(),attrs:{align:"right","header-align":"center",label:"预算-责任"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.row;return[a("span",[t._v(t._s(t._f("price")((n.预算合价-n.责任合价).toFixed(2),"无",2)))])]}}],null,!1,1343543025)}):t._e(),["全部"].includes(t.mode)?a("el-table-column",{key:Math.random(),attrs:{align:"right","header-align":"center",label:"责任-实际"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.row;return[a("span",[t._v(t._s(t._f("price")((n.责任合价-n.实际合价).toFixed(2),"无",2)))])]}}],null,!1,731964121)}):t._e()],1):t._e()],1),a("el-scrollbar",{staticClass:"noX",style:"height:"+t.mainTableHeight},[a("G-Table",{staticClass:"预算表格 main",class:t.dataMode,attrs:{data:t.table_data,"row-class-name":t.tableRowClassName,"show-header":!1,"tree-props":{children:"children",hasChildren:"hasChildren"},"default-expand-all":"",print:"","row-key":"flatName"}},[a("el-table-column",{key:Math.random(),attrs:{width:t.width.index,label:"序号"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.row,n=e.column,r=e.$index;return[t._v(t._s(t.indexMethod(a,n,r)))]}}])}),a("el-table-column",{key:Math.random(),attrs:{width:t.width.name,"class-name":"分项名称",label:"分项名称",prop:"label"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.row;return["HPB300 直径6.5mm"===n.label?a("div",[a("el-popover",{attrs:{placement:"right",trigger:"hover",width:"600"}},[a("table_变更"),a("el-tag",{staticClass:"tag",attrs:{slot:"reference",type:"primary"},slot:"reference"},[t._v("变")])],1),a("span",[t._v(t._s(n.label))])],1):a("span",[t._v(t._s(n.label))])]}}])}),a("el-table-column",{key:Math.random(),attrs:{width:t.width.unit,align:"center",label:"单位"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.row;return[a("span",[t._v(t._s(n.单位))])]}}])}),a("el-table-column",{key:Math.random(),attrs:{"header-align":"center",label:"数量"}},t._l(t.curr_dict_量,(function(e){return a("el-table-column",{key:e,attrs:{label:e,align:"right","header-align":"center"},scopedSlots:t._u([{key:"default",fn:function(n){var r=n.row;return 3==r.level||"end_part"==t.dataMode&&2==r.level?[e.startsWith("实际")&&3===r.level?[t._v("-")]:[a("el-tooltip",{attrs:{content:r.flatName,effect:"dark",placement:"top"}},["查看"===t.action?a("span",[t._v(t._s(t._f("price")(r.data[e],"无",2)))]):a("el-input",{model:{value:r.data[e+("新增"==t.action?"_EDIT":"")],callback:function(a){t.$set(r.data,e+("新增"==t.action?"_EDIT":""),a)},expression:"row.data[`${vv}${action=='新增'?'_EDIT':''}`]"}})],1)]]:void 0}}],null,!0)})})),1),a("el-table-column",{key:Math.random(),attrs:{"header-align":"center",label:"单价"}},t._l(t.curr_dict_单价,(function(e){return a("el-table-column",{key:e,attrs:{label:e,align:"right","header-align":"center"},scopedSlots:t._u([{key:"default",fn:function(n){var r=n.row;return 3==r.level||"end_part"==t.dataMode&&2==r.level?[e.startsWith("实际")&&3===r.level?[t._v("-")]:[a("el-tooltip",{attrs:{content:r.flatName,effect:"dark",placement:"top"}},["查看"===t.action?a("span",[t._v(t._s(t._f("price")(r.data[e],"无",2)))]):a("el-input",{model:{value:r.data[e+("新增"==t.action?"_EDIT":"")],callback:function(a){t.$set(r.data,e+("新增"==t.action?"_EDIT":""),a)},expression:"row.data[`${vv}${action=='新增'?'_EDIT':''}`]"}})],1)]]:void 0}}],null,!0)})})),1),a("el-table-column",{key:Math.random(),attrs:{"header-align":"center",label:"合价"}},t._l(t.curr_dict_合价,(function(e){return a("el-table-column",{key:e,attrs:{label:e,align:"right","header-align":"center"},scopedSlots:t._u([{key:"default",fn:function(n){var r=n.row;return 3==r.level||"end_part"==t.dataMode&&2==r.level?[e.startsWith("实际")&&3===r.level?[t._v("-")]:[a("el-tooltip",{attrs:{content:r.flatName,effect:"dark",placement:"top"}},["查看"===t.action?a("span",[t._v(t._s(t._f("price")(r.data[e],"无",2)))]):a("el-input",{model:{value:r.data[e+("新增"==t.action?"_EDIT":"")],callback:function(a){t.$set(r.data,e+("新增"==t.action?"_EDIT":""),a)},expression:"row.data[`${vv}${action=='新增'?'_EDIT':''}`]"}})],1)]]:void 0}}],null,!0)})})),1),["预算","全部"].includes(t.mode)?a("el-table-column",{key:Math.random(),attrs:{"header-align":"center",label:"合价差"}},[["预算","全部"].includes(t.mode)?a("el-table-column",{key:Math.random(),attrs:{align:"right","header-align":"center",label:"预算-责任"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.row;return[a("span",[t._v(t._s(t._f("price")((n.data.预算合价-n.data.责任合价).toFixed(2),"无",2)))])]}}],null,!1,3479957265)}):t._e(),["全部"].includes(t.mode)?a("el-table-column",{key:Math.random(),attrs:{align:"right","header-align":"center",label:"责任-实际"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.row;return[a("span",[t._v(t._s(t._f("price")((n.data.责任合价-n.data.实际合价).toFixed(2),"无",2)))])]}}],null,!1,3471511769)}):t._e()],1):t._e()],1)],1)],1)},r=[],l=(a("13d5"),a("d3b7"),a("b64b"),a("ac1f"),a("00b4"),a("b680"),a("a9e3"),a("d81d"),a("da62")),c=a.n(l),i=a("5afb"),o=a("2ad0"),u={name:"",mounted:function(){var t=this;this.$nextTick((function(){t.$refs.tableHeader.$children[0].doLayout()}))},props:{tree_type:{type:String,default:"📦 主要材料"},mode:{type:String,default:"预算"},action:{type:String,default:"编辑"},mainTableHeight:{type:String,default:"auto"}},data:function(){return{dataMode:"end_part",width:{index:"90px",name:"200px",unit:"40px"}}},computed:{countAll:function(){return[this.table_data.reduce((function(t,e){for(var a=0,n=Object.keys(e.data);a<n.length;a++){var r=n[a];/合价$/.test(r)?(t[r]||(t[r]=0),t[r]=1*(Number(t[r])+Number(e.data[r])).toFixed(2)):t[r]=e.data[r]}return t}),{})]},curr_dict:function(){switch(this.mode){case"预算":return["预算","责任"];case"目标":return["责任","目标"];default:return["预算","责任","目标","实际"]}},curr_dict_list:function(){return this.curr_dict.map((function(t){return{label:t,children:["".concat(t,"量"),"".concat(t,"单价"),"".concat(t,"合价")]}}))},"curr_dict_量":function(){return this.curr_dict.map((function(t){return"".concat(t,"量")}))},"curr_dict_单价":function(){return this.curr_dict.map((function(t){return"".concat(t,"单价")}))},"curr_dict_合价":function(){return this.curr_dict.map((function(t){return"".concat(t,"合价")}))},table_data:function(){switch(this.tree_type){case"📦 主要材料":return"end_part"===this.dataMode?i["材料采购"].partData.end:i["材料采购"].partData.middle;case"🏗️ 设备租赁":return this.dataMode,[];case"👷 劳务分包":return this.dataMode,[];case"🔬 专业分包":return this.dataMode,[];default:return[]}}},methods:{indexMethod:function(t,e,a){var n="";switch(t.level){case 1:n=c.a.cn.encodeS(t.index);break;case 2:n=t.index;break;default:n=t.index+")";break}return n},tableRowClassName:function(t){var e=t.row;t.rowIndex;return"level-".concat(e.level)}},components:{"table_变更":o["a"]}},s=u,d=(a("7420"),a("2877")),h=Object(d["a"])(s,n,r,!1,null,"87665042",null);e["a"]=h.exports},"538e":function(t,e){t.exports={ch:"零一二三四五六七八九",ch_u:"個十百千萬億",ch_f:"負",ch_d:"點"}},7420:function(t,e,a){"use strict";a("ed4b")},"772f":function(t,e,a){var n=a("a055"),r=a("92be");function l(t,e){return{encodeS:function(e,a){return a=r.extend({ww:!0,tenMin:!0},a),n.CL.call(t,e,a)},encodeB:function(t,a){return a=r.extend({ww:!0},a),n.CL.call(e,t,a)},decodeS:function(){return n.unCL.apply(t,arguments)},decodeB:function(){return n.unCL.apply(e,arguments)},toMoney:function(t,a){return a=r.extend({ww:!0},a),n.toMoney.call(e,t,a)}}}t.exports=l},"92be":function(t,e,a){"use strict";var n=/^([+-])?0*(\d+)(\.(\d+))?$/,r=/^([+-])?0*(\d+)(\.(\d+))?e(([+-])?(\d+))$/i,l=e.e2ten=function(t){var e=r.exec(t.toString());if(!e)return t;var a=e[2],n=e[4]||"",l=e[5]?+e[5]:0;if(l>0){var c=n.substr(0,l);c=c.length<l?c+new Array(l-c.length+1).join("0"):c,n=n.substr(l),a+=c}else{l=-l;var i=a.length-l;i=i<0?0:i;var o=a.substr(i,l);o=o.length<l?new Array(l-o.length+1).join("0")+o:o,a=a.substring(0,i),n=o+n}return a=""==a?"0":a,("-"==e[1]?"-":"")+a+(n?"."+n:"")};e.getNumbResult=function(t){var e=n.exec(t.toString());if(!e&&r.test(t.toString())&&(e=n.exec(l(t.toString()))),e)return{int:e[2],decimal:e[4],minus:"-"==e[1],num:e.slice(1,3).join("")}},e.centerArray=function t(e,a){if(e.splice.apply(e,[0,a.length].concat(a.splice(0,a.length))),arguments.length>2){var n=[].slice.call(arguments,2);n.unshift(e),t.apply(null,n)}return e};var c=e.hasAttr=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)};e.extend=function(t){for(var e,a=arguments[0]||{},n=Array.prototype.slice.call(arguments,1),r=0;r<n.length;r++){var l=n[r];for(e in l)c(l,e)&&(a[e]=l[e])}return a},e.getDigit=function(t){return t>=5?4*(t-4)+4:t},e.unshiftZero=function(t,e){if(null==e&&(e=1),!(e<=0))for(;e--;)t.unshift(0)},e.clearZero=function(t,e,a){if(null==t)return"";var n=~"*.?+$^[](){}|\\/".indexOf(e)?"\\"+e:e,r=new RegExp("^"+n+"+"),l=new RegExp(n+"+$"),c=new RegExp(n+"{2}","g");return t=t.toString(),"^"==a&&(t=t.replace(r,"")),a&&"$"!=a||(t=t.replace(l,"")),a&&"nto1"!=a||(t=t.replace(c,e)),t}},a055:function(t,e,a){var n=a("92be");function r(t,e){var a=n.getNumbResult(t);if(!a)return t;e=e||{};var r=this.ch,l=this.ch_u,c=this.ch_f||"",i=this.ch_d||".",o=r.charAt(0),u=a.int,s=a.decimal,d=a.minus,h="",f="",_=d?c:"",p=function t(a,c,i){a=n.getNumbResult(a).int;var u="",s=arguments.length>1?arguments[1]:e.tenMin,d=a.length;if(1==d)return r.charAt(+a);if(d<=4)for(var h=0,f=d;f--;){var _=+a.charAt(h);u+=s&&2==d&&0==h&&1==_?"":r.charAt(_),u+=_&&f?l.charAt(f):"",h++}else{var p=a.length/4>>0,b=a.length%4;while(0==b||!l.charAt(3+p))b+=4,p--;var m=a.substr(0,b),g=a.substr(b);u=t(m,s)+l.charAt(3+p)+("0"==g.charAt(0)?o:"")+t(g,g.length>4&&s)}return u=n.clearZero(u,o),u};if(s){s=n.clearZero(s,"0","$");for(var b=0;b<s.length;b++)f+=r.charAt(+s.charAt(b));f=f?i+f:""}if(h=p(u),e.ww&&l.length>5){var m=l.charAt(4),g=l.charAt(5),v=h.lastIndexOf(g);~v&&(h=h.substring(0,v).replace(new RegExp(g,"g"),m+m)+h.substring(v))}return _+h+f}function l(t){t=t.toString();var e=t.split(this.ch_d),a=e[0].replace(this.ch_f,""),r=e[1],l=!!~e[0].indexOf(this.ch_f),c=this.ch_u.charAt(1),i=this.ch_u.charAt(4),o=this.ch_u.charAt(5);a=a.replace(new RegExp(i+"{2}","g"),o);for(var u=a.split(""),s=0,d=0,h=[],f=[],_=[],p=0;p<u.length;p++){var b=u[p],m=0,g=0;if(~(m=this.ch.indexOf(b)))m>0&&_.unshift(m);else if(~(g=this.ch_u.indexOf(b))){var v=n.getDigit(g);s>g?(n.unshiftZero(_,v),n.centerArray(f,_)):g>=d?(0==p&&(_=[1]),n.centerArray(h,f,_),h.length>0&&n.unshiftZero(h,v),d=g):(0==_.length&&c==b&&(_=[1]),n.centerArray(f,_),n.unshiftZero(f,n.getDigit(g)),s=g)}}n.centerArray(h,f,_).reverse(),0==h.length&&h.push(0);var y=0;if(r){h.push("."),y="0.";for(p=0;p<r.length;p++)y+=this.ch.indexOf(r.charAt(p)),h.push(this.ch.indexOf(r.charAt(p)));y=+y}return l&&h.unshift("-"),parseFloat(h.join(""))}function c(t,e){var a={ww:!0,complete:!1,outSymbol:!0,unOmitYuan:!1},l=n.getNumbResult(t),c=this.ch.charAt(0);if(e="object"==typeof e?e:{},!l)return t;e=n.extend(a,e);var i=l.int,o=l.decimal||"",u=e.outSymbol?this.m_t:"",s=l.minus?this.ch_f:"",d="";if(e.complete){for(var h=1;h<this.m_u.length;h++)d+=r.call(this,o.charAt(h-1)||"0")+this.m_u.charAt(h);s+=r.call(this,i,e)+this.m_u.charAt(0)}else{var f=e.unOmitYuan||"0"!==i;if(o=o.substr(0,this.m_u.length-1),o=n.clearZero(o,"0","$"),o){var _;for(h=0;h<this.m_u.length-1;h++)o.charAt(h)&&"0"!=o.charAt(h)&&(d+=r.call(this,o.charAt(h))+this.m_u.charAt(h+1),_=!1),"0"!==o.charAt(h)||_||(0==h&&"0"===i||(d+=c),_=!0)}!f&&d||(s+=r.call(this,i,e)+this.m_u.charAt(0)+(l.decimal?"":this.m_z))}return u+s+d}t.exports={CL:r,unCL:l,toMoney:c}},a8bb:function(t,e){t.exports={ch:"零一二三四五六七八九",ch_u:"个十百千万亿",ch_f:"负",ch_d:"点"}},da62:function(t,e,a){var n=a("a055"),r=(a("92be"),a("772f")),l={s:a("a8bb"),b:a("f4fd"),hk_s:a("538e"),hk_b:a("ef41")},c=function(t){this.lang=t,this.encode=function(){return n.CL.apply(t,arguments)},this.decode=function(){return n.unCL.apply(t,arguments)},this.toMoney=function(){return n.toMoney.apply(t,arguments)}};c.langs=l,c.cn=r(l.s,l.b),c.hk=r(l.hk_s,l.hk_b),t.exports=c},ed4b:function(t,e,a){},ef41:function(t,e){t.exports={ch:"零壹貳參肆伍陸柒捌玖",ch_u:"個拾佰仟萬億",ch_f:"負",ch_d:"點",m_t:"$",m_z:"整",m_u:"圓角分"}},f4fd:function(t,e){t.exports={ch:"零壹贰叁肆伍陆柒捌玖",ch_u:"个拾佰仟万亿",ch_f:"负",ch_d:"点",m_t:"人民币",m_z:"整",m_u:"元角分"}}}]);