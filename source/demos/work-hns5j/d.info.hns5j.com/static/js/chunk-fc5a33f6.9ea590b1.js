(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-fc5a33f6"],{"2f19":function(t,e,l){"use strict";l.r(e);var a=function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticStyle:{height:"calc(100vh - 50px - 34px - 40px)"},attrs:{id:"员工信息编辑"}},[l("div",{staticStyle:{display:"flex",height:"100%"}},[l("div",{staticClass:"left"},t._l(t.tabList,(function(e){return l("div",{key:e,class:e.focus?"tab focus":"tab",on:{click:function(l){return t.chooseTab(e)}}},[t._v(t._s(e.label))])})),0),l("el-card",{staticStyle:{flex:"1 1"},attrs:{"body-style":"padding:0;"}},[l("div",{directives:[{name:"show",rawName:"v-show",value:1==t.tabList[0].focus,expression:"tabList[0].focus == true"}]},[l("div",{staticStyle:{"border-bottom":"1px solid #ebeef5",height:"50px",display:"flex","align-items":"center","padding-left":"15px"}},[l("el-button",{attrs:{type:"primary"}},[t._v("保存")]),l("el-button",[t._v("取消")])],1),l("el-scrollbar",{staticClass:"noX",staticStyle:{height:"calc(100vh - 50px - 34px - 40px - 50px)"}},[l("h2",{staticClass:"title"},[t._v("员工信息")]),l("div",{staticClass:"webFormWrap",staticStyle:{position:"relative"}},[l("webForm",{staticStyle:{margin:"20px"},attrs:{formData:t.formData,mode:"编辑"}}),l("div",{staticClass:"touxiang"},[l("el-upload",{staticClass:"avatar-uploader2",attrs:{"show-file-list":!1}},[t.form.imageUrl?l("img",{staticClass:"avatar2",attrs:{src:t.form.imageUrl}}):l("i",{staticClass:"el-icon-plus avatar-uploader-icon2"})])],1)],1),l("el-card",{staticClass:"my-card",attrs:{shadow:"hover"}},[l("div",[l("el-form",{attrs:{"label-width":"100px"},model:{value:t.form,callback:function(e){t.form=e},expression:"form"}},[l("el-row",[l("el-col",{attrs:{span:12}},[l("el-form-item",{attrs:{label:"身份证正面"}},[l("br"),l("el-upload",{staticClass:"avatar-uploader",attrs:{"show-file-list":!1}},[t.form.imageUrl?l("img",{staticClass:"avatar",attrs:{src:t.form.imageUrl}}):l("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1)],1),l("el-col",{attrs:{span:12}},[l("el-form-item",{attrs:{label:"身份证反面"}},[l("br"),l("el-upload",{staticClass:"avatar-uploader",attrs:{"show-file-list":!1}},[t.form.imageUrl?l("img",{staticClass:"avatar",attrs:{src:t.form.imageUrl}}):l("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1)],1),l("el-col",{attrs:{span:24}},[l("el-form-item",{attrs:{label:"毕业证书"}},[l("el-upload",{staticClass:"upload-demo",attrs:{"file-list":t.fileList,limit:3,multiple:""}},[l("el-button",{attrs:{size:"small",type:"primary"}},[t._v("点击上传")]),l("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[t._v("只能上传jpg文件,文件不能大于1M")])],1)],1)],1)],1)],1)],1)])],1)],1),l("div",{directives:[{name:"show",rawName:"v-show",value:1==t.tabList[1].focus,expression:"tabList[1].focus == true"}],staticStyle:{margin:"10px"}},[l("el-button",{staticStyle:{"margin-bottom":"10px"},attrs:{size:"mini",type:"primary"},on:{click:function(e){t.visible=!0}}},[t._v("新增")]),l("G-Table",{attrs:{data:t.tableData}},[l("el-table-column",{attrs:{align:"center",label:"序号",type:"index"}}),l("el-table-column",{attrs:{label:"事由","min-width":"160",prop:"事由"}}),l("el-table-column",{attrs:{align:"center",label:"奖/惩",prop:"奖惩",width:"100"}}),l("el-table-column",{attrs:{align:"center",label:"奖惩类型",prop:"奖惩类型",width:"160"}}),l("el-table-column",{attrs:{align:"center",label:"获取日期",prop:"获取日期",width:"120"}}),l("el-table-column",{attrs:{align:"center",label:"发文文号",prop:"发文文号",width:"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[l("el-link",{attrs:{type:"primary"}},[t._v(t._s(e.row.发文文号))])]}}])}),l("el-table-column",{attrs:{align:"center",label:"操作",width:"200"}},[[l("el-button",{attrs:{plain:"",type:"primary"},on:{click:function(e){t.visible=!0}}},[t._v("编辑")]),l("el-button",{attrs:{plain:"",size:"mini",type:"danger"}},[t._v("删除")])]],2)],1)],1),l("div",{directives:[{name:"show",rawName:"v-show",value:1==t.tabList[2].focus,expression:"tabList[2].focus == true"}],staticStyle:{margin:"10px"}},[l("el-button",{staticStyle:{"margin-bottom":"10px"},attrs:{size:"mini",type:"primary"},on:{click:function(e){t.visible2=!0}}},[t._v("新增")]),l("G-Table",{attrs:{data:t.tableData2}},[l("el-table-column",{attrs:{align:"center",label:"序号",type:"index"}}),l("el-table-column",{attrs:{label:"工作单位","min-width":"160",prop:"工作单位"}}),l("el-table-column",{attrs:{label:"任职部门",prop:"任职部门",width:"150"}}),l("el-table-column",{attrs:{align:"center",label:"职务",prop:"职务",width:"140"}}),l("el-table-column",{attrs:{align:"center",label:"开始日期",prop:"开始日期",width:"120"}}),l("el-table-column",{attrs:{align:"center",label:"结束日期",prop:"结束日期",width:"120"}}),l("el-table-column",{attrs:{label:"离职原因","min-width":"160",prop:"离职原因"}}),l("el-table-column",{attrs:{align:"center",label:"操作",width:"200"}},[[l("el-button",{attrs:{plain:"",type:"primary"},on:{click:function(e){t.visible2=!0}}},[t._v("编辑")]),l("el-button",{attrs:{plain:"",size:"mini",type:"danger"}},[t._v("删除")])]],2)],1)],1),l("div",{directives:[{name:"show",rawName:"v-show",value:1==t.tabList[3].focus,expression:"tabList[3].focus == true"}],staticStyle:{margin:"10px"}},[l("el-button",{staticStyle:{"margin-bottom":"10px"},attrs:{size:"mini",type:"primary"},on:{click:function(e){t.visible3=!0}}},[t._v("新增")]),l("G-Table",{attrs:{data:t.tableData3}},[l("el-table-column",{attrs:{align:"center",label:"序号",type:"index"}}),l("el-table-column",{attrs:{label:"毕业学校","min-width":"160",prop:"毕业学校"}}),l("el-table-column",{attrs:{align:"center",label:"入学日期",prop:"入学日期",width:"120"}}),l("el-table-column",{attrs:{align:"center",label:"毕业日期",prop:"毕业日期",width:"120"}}),l("el-table-column",{attrs:{align:"center",label:"所学专业",prop:"所学专业",width:"120"}}),l("el-table-column",{attrs:{align:"center",label:"毕业类型",prop:"毕业类型",width:"120"}}),l("el-table-column",{attrs:{label:"获奖及其他情况说明","min-width":"160",prop:"获奖及其他情况说明"}}),l("el-table-column",{attrs:{align:"center",label:"操作",width:"200"}},[[l("el-button",{attrs:{plain:"",type:"primary"},on:{click:function(e){t.visible3=!0}}},[t._v("编辑")]),l("el-button",{attrs:{plain:"",size:"mini",type:"danger"}},[t._v("删除")])]],2)],1)],1),l("div",{directives:[{name:"show",rawName:"v-show",value:1==t.tabList[4].focus,expression:"tabList[4].focus == true"}],staticStyle:{margin:"10px"}},[l("el-button",{staticStyle:{"margin-bottom":"10px"},attrs:{size:"mini",type:"primary"},on:{click:function(e){t.visible4=!0}}},[t._v("新增")]),l("G-Table",{attrs:{data:t.tableData4}},[l("el-table-column",{attrs:{align:"center",label:"序号",type:"index"}}),l("el-table-column",{attrs:{align:"center",label:"姓名",prop:"姓名",width:"160"}}),l("el-table-column",{attrs:{align:"center",label:"与本人关系",prop:"与本人关系",width:"160"}}),l("el-table-column",{attrs:{label:"工作单位","min-width":"180",prop:"工作单位"}}),l("el-table-column",{attrs:{align:"center",label:"联系方式",prop:"联系方式",width:"160"}}),l("el-table-column",{attrs:{align:"center",label:"操作",width:"200"}},[[l("el-button",{attrs:{plain:"",type:"primary"},on:{click:function(e){t.visible4=!0}}},[t._v("编辑")]),l("el-button",{attrs:{plain:"",size:"mini",type:"danger"}},[t._v("删除")])]],2)],1)],1)]),l("el-dialog",{attrs:{visible:t.visible,title:"奖惩记录",width:"25%"},on:{"update:visible":function(e){t.visible=e}}},[l("el-form",{ref:"form",attrs:{model:t.form,"label-width":"110px"}},[l("el-form-item",{attrs:{label:"事由"}},[l("el-input",{attrs:{clearable:"",placeholder:"请输入事由"},model:{value:t.form.事由,callback:function(e){t.$set(t.form,"事由",e)},expression:"form.事由"}})],1),l("el-form-item",{attrs:{label:"奖/惩"}},[l("el-radio-group",{model:{value:t.form.奖惩,callback:function(e){t.$set(t.form,"奖惩",e)},expression:"form.奖惩"}},[l("el-radio",{attrs:{label:"奖励"}}),l("el-radio",{attrs:{label:"惩罚"}})],1)],1),l("el-form-item",{attrs:{label:"获取日期"}},[l("el-date-picker",{staticStyle:{width:"100%"},attrs:{clearable:"",placeholder:"选择日期"},model:{value:t.form.获取日期,callback:function(e){t.$set(t.form,"获取日期",e)},expression:"form.获取日期"}})],1),l("el-form-item",{attrs:{label:"奖惩类型"}},[l("el-select",{staticStyle:{width:"100%"},attrs:{clearable:"",placeholder:"请选择"},model:{value:t.form.奖惩类型,callback:function(e){t.$set(t.form,"奖惩类型",e)},expression:"form.奖惩类型"}},[l("el-option",{attrs:{label:"杰出贡献奖",value:"杰出贡献奖"}})],1)],1),l("el-form-item",{attrs:{label:"发文文号"}},[l("el-input",{attrs:{clearable:"",placeholder:"请输入发文文号"},model:{value:t.form.发文文号,callback:function(e){t.$set(t.form,"发文文号",e)},expression:"form.发文文号"}})],1),l("el-form-item",[l("el-button",{attrs:{type:"primary"},on:{click:function(e){t.visible=!1}}},[t._v("保存")]),l("el-button",{on:{click:function(e){t.visible=!1}}},[t._v("取消")])],1)],1)],1),l("el-dialog",{attrs:{visible:t.visible2,title:"社会经历",width:"25%"},on:{"update:visible":function(e){t.visible2=e}}},[l("el-form",{ref:"form",attrs:{model:t.form,"label-width":"110px"}},[l("el-form-item",{attrs:{label:"工作单位"}},[l("el-input",{attrs:{clearable:"",placeholder:"请输入工作单位"},model:{value:t.form.工作单位,callback:function(e){t.$set(t.form,"工作单位",e)},expression:"form.工作单位"}})],1),l("el-form-item",{attrs:{label:"任职部门"}},[l("el-input",{attrs:{clearable:"",placeholder:"请输入任职部门"},model:{value:t.form.任职部门,callback:function(e){t.$set(t.form,"任职部门",e)},expression:"form.任职部门"}})],1),l("el-form-item",{attrs:{label:"职务"}},[l("el-input",{attrs:{clearable:"",placeholder:"请输入职务"},model:{value:t.form.职务,callback:function(e){t.$set(t.form,"职务",e)},expression:"form.职务"}})],1),l("el-form-item",{attrs:{label:"开始日期"}},[l("el-date-picker",{staticStyle:{width:"100%"},attrs:{clearable:"",placeholder:"选择日期"},model:{value:t.form.开始日期,callback:function(e){t.$set(t.form,"开始日期",e)},expression:"form.开始日期"}})],1),l("el-form-item",{attrs:{label:"结束日期"}},[l("el-date-picker",{staticStyle:{width:"100%"},attrs:{clearable:"",placeholder:"选择日期"},model:{value:t.form.结束日期,callback:function(e){t.$set(t.form,"结束日期",e)},expression:"form.结束日期"}})],1),l("el-form-item",{attrs:{label:"离职原因"}},[l("el-input",{attrs:{placeholder:"请输入离职原因",type:"textarea"},model:{value:t.form.离职原因,callback:function(e){t.$set(t.form,"离职原因",e)},expression:"form.离职原因"}})],1),l("el-form-item",[l("el-button",{attrs:{type:"primary"},on:{click:function(e){t.visible2=!1}}},[t._v("保存")]),l("el-button",{on:{click:function(e){t.visible2=!1}}},[t._v("取消")])],1)],1)],1),l("el-dialog",{attrs:{visible:t.visible3,title:"教育经历",width:"25%"},on:{"update:visible":function(e){t.visible3=e}}},[l("el-form",{ref:"form",attrs:{model:t.form,"label-width":"110px"}},[l("el-form-item",{attrs:{label:"毕业学校"}},[l("el-input",{attrs:{clearable:"",placeholder:"请输入毕业学校全称"},model:{value:t.form.毕业学校,callback:function(e){t.$set(t.form,"毕业学校",e)},expression:"form.毕业学校"}})],1),l("el-form-item",{attrs:{label:"入学日期"}},[l("el-date-picker",{staticStyle:{width:"100%"},attrs:{clearable:"",placeholder:"选择日期"},model:{value:t.form.入学日期,callback:function(e){t.$set(t.form,"入学日期",e)},expression:"form.入学日期"}})],1),l("el-form-item",{attrs:{label:"毕业日期"}},[l("el-date-picker",{staticStyle:{width:"100%"},attrs:{clearable:"",placeholder:"选择日期"},model:{value:t.form.毕业日期,callback:function(e){t.$set(t.form,"毕业日期",e)},expression:"form.毕业日期"}})],1),l("el-form-item",{attrs:{label:"学历"}},[l("el-select",{staticStyle:{width:"100%"},attrs:{clearable:"",placeholder:"请选择"},model:{value:t.form.学历,callback:function(e){t.$set(t.form,"学历",e)},expression:"form.学历"}},t._l(t.hrData.学历,(function(t){return l("el-option",{key:t,attrs:{label:t.value,value:t.value}})})),1)],1),l("el-form-item",{attrs:{label:"所学专业"}},[l("el-select",{staticStyle:{width:"100%"},attrs:{clearable:"",placeholder:"请选择"},model:{value:t.form.所学专业,callback:function(e){t.$set(t.form,"所学专业",e)},expression:"form.所学专业"}},t._l(t.hrData.专业,(function(t){return l("el-option",{key:t,attrs:{label:t.value,value:t.value}})})),1)],1),l("el-form-item",{attrs:{label:"毕业类型"}},[l("el-select",{staticStyle:{width:"100%"},attrs:{clearable:"",placeholder:"请选择"},model:{value:t.form.毕业类型,callback:function(e){t.$set(t.form,"毕业类型",e)},expression:"form.毕业类型"}},t._l(t.hrData.毕业类型,(function(t){return l("el-option",{key:t,attrs:{label:t.value,value:t.value}})})),1)],1),l("el-form-item",{attrs:{label:"获奖及其他情况"}},[l("el-input",{attrs:{placeholder:"请输入获奖及其他情况说明",type:"textarea"},model:{value:t.form.获奖及其他情况,callback:function(e){t.$set(t.form,"获奖及其他情况",e)},expression:"form.获奖及其他情况"}})],1),l("el-form-item",[l("el-button",{attrs:{type:"primary"},on:{click:function(e){t.visible3=!1}}},[t._v("保存")]),l("el-button",{on:{click:function(e){t.visible3=!1}}},[t._v("取消")])],1)],1)],1),l("el-dialog",{attrs:{visible:t.visible4,title:"家庭成员",width:"25%"},on:{"update:visible":function(e){t.visible4=e}}},[l("el-form",{ref:"form",attrs:{model:t.form,"label-width":"110px"}},[l("el-form-item",{attrs:{label:"姓名"}},[l("el-input",{attrs:{clearable:"",placeholder:"请输入姓名"},model:{value:t.form.姓名,callback:function(e){t.$set(t.form,"姓名",e)},expression:"form.姓名"}})],1),l("el-form-item",{attrs:{label:"与本人关系"}},[l("el-input",{attrs:{clearable:"",placeholder:"请输入与本人关系"},model:{value:t.form.与本人关系,callback:function(e){t.$set(t.form,"与本人关系",e)},expression:"form.与本人关系"}})],1),l("el-form-item",{attrs:{label:"工作单位"}},[l("el-input",{attrs:{clearable:"",placeholder:"请输入工作单位"},model:{value:t.form.工作单位,callback:function(e){t.$set(t.form,"工作单位",e)},expression:"form.工作单位"}})],1),l("el-form-item",{attrs:{label:"联系方式"}},[l("el-input",{attrs:{clearable:"",placeholder:"请输入联系方式"},model:{value:t.form.联系方式,callback:function(e){t.$set(t.form,"联系方式",e)},expression:"form.联系方式"}})],1),l("el-form-item",[l("el-button",{attrs:{type:"primary"},on:{click:function(e){t.visible4=!1}}},[t._v("保存")]),l("el-button",{on:{click:function(e){t.visible4=!1}}},[t._v("取消")])],1)],1)],1)],1)])},n=[],o=(l("d3b7"),l("159b"),l("404a")),i=l("df76"),r=l("1d42"),s={name:"hr_员工信息编辑",data:function(){return{hrData:o["a"],visible:!1,visible2:!1,visible3:!1,visible4:!1,tableData:i["a"][0].奖惩记录,tableData2:i["a"][0].社会经历,tableData3:i["a"][0].教育经历,tableData4:i["a"][0].家庭成员,form:{},tabList:[{label:"基本信息",focus:!0},{label:"奖惩记录",focus:!1},{label:"社会经历",focus:!1},{label:"教育经历",focus:!1},{label:"家庭成员",focus:!1}]}},computed:{formData:function(){return[{header:"基本信息",data:[[{label:"员工姓名",content:"安康",span:6},{label:"系统登录名",content:"安康",span:6},{label:"性别",content:"男",span:6,contentType:"select",contentOptions:["男","女"]},{contentType:"none",span:6}],[{label:"身份证",content:"432524198708080058",span:6},{label:"出生日期",content:"1987-08-08",span:6,contentType:"datePicker"},{label:"民族",content:"汉族",contentType:"select",contentOptions:o["a"].民族,span:6},{contentType:"none",span:6}],[{label:"籍贯",content:"湖南娄底",span:6},{label:"户口所在地",content:"湖南省新化县上梅镇梅树村十五组",span:6},{label:"居住地址",content:"湖南省新化县上梅镇梅树村十五组",span:6},{contentType:"none",span:6}],[{label:"政治面貌",content:"群众",contentType:"select",contentOptions:o["a"].政治面貌,span:6},{label:"婚姻状况",content:"已婚",span:6,contentType:"select",contentOptions:["未婚","已婚","丧偶","离婚","再婚"]},{label:"手机号",content:"18072996787",span:6},{contentType:"none",span:6}],[{label:"紧急联系方式",content:"13808468403",span:6},{label:"档案出生",content:"1987-08-08",contentType:"datePicker",span:6},{label:"社保缴纳单位",content:"湖南省第五工程有限公司",contentType:"select",contentOptions:o["a"].社保缴纳单位,span:6},{label:"养老保险编号",content:"4302990003133988",span:6}]]},{header:"工作信息",data:[[{label:"组织层次",content:"项目部",contentType:"select",contentOptions:o["a"].组织层次,span:6},{label:"人事关系单位",content:"湘中分公司",contentType:"select",contentOptions:o["a"].人事关系单位,span:6},{label:"部门",content:"江华姑婆山风电场项目土建施工工程",span:6},{label:"身份",content:"专业技术人员",contentType:"select",contentOptions:o["a"].身份,span:6}],[{label:"工作状态",content:"在岗",contentType:"select",contentOptions:o["a"].工作状态,span:6},{label:"参加工作日期",content:"2013-07-01",contentType:"datePicker",span:6},{label:"入司日期",content:"2013-07-01",contentType:"datePicker",span:6},{label:"职级工种",content:"项目-施工员",contentType:"select",contentOptions:o["a"].职级工种,span:6}],[{label:"岗位",content:"施工员",contentType:"select",contentOptions:o["a"].岗位,span:6},{label:"岗位等级",content:"E2",contentType:"select",contentOptions:o["a"].岗位等级,span:6},{label:"技能等级",content:"二档",contentType:"select",contentOptions:o["a"].技能等级,span:6},{label:"工资标准",content:"6,600",span:6,append:"元"}],[{label:"基础工资",content:"2,574",span:6,append:"元"},{label:"绩效工资",content:"1,386",span:6,append:"元"},{label:"技能工资",content:"2,640",span:6,append:"元"}]]}]}},components:{webForm:r["a"]},methods:{chooseTab:function(t){this.tabList.forEach((function(t){t.focus=!1})),t.focus=!0}}},c=s,p=(l("55af"),l("2877")),b=Object(p["a"])(c,a,n,!1,null,"094db570",null);e["default"]=b.exports},"55af":function(t,e,l){"use strict";l("aaeb")},aaeb:function(t,e,l){}}]);