webpackJsonp([1],{0:function(t,s){},"4Nc0":function(t,s,e){t.exports=e.p+"static/img/avatar5.e42f007.jpg"},"9CJT":function(t,s,e){t.exports=e.p+"static/img/avatar6.8d63613.jpg"},"9Wbg":function(t,s,e){t.exports=e.p+"static/img/avatar7.e8de873.jpg"},Dd0t:function(t,s,e){t.exports=e.p+"static/img/avatar9.23a7b44.jpg"},NHnr:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=e("7+uW"),i={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},staticRenderFns:[]};var n=e("VU/8")({name:"App"},i,!1,function(t){e("er11")},null,null).exports,o=e("/ocq"),c=e("DmT9"),r=e.n(c),l={name:"socket",data:function(){return{socket:"",socket_id:"",local_users:[],message_list:[],dialogVisible:!0,nick_name:"",mysel_url:"",input_text:"",is_first:!0,user_avatar:[{url:e("pEZi")},{url:e("jWzA")},{url:e("nkjE")},{url:e("VoS7")},{url:e("4Nc0")},{url:e("9CJT")},{url:e("9Wbg")},{url:e("kpH5")},{url:e("Dd0t")},{url:e("URTH")}]}},methods:{submitName:function(){this.nick_name||this.nick_name.trim()?(this.dialogVisible=!1,this.connectSocket()):this.$message({showClose:!0,message:"填写昵称",type:"error"})},addUser:function(t,s,e,a){this.local_users.push({name:t,id:s,url:e,status:a})},sendMessage:function(){this.socket.emit("send-message",{name:this.nick_name,message:this.input_text,url:this.mysel_url}),this.input_text=""},connectSocket:function(){var t=this,s=this,e=this.user_avatar[Math.floor(9*Math.random())].url;this.socket.emit("adduser",{name:s.nick_name,url:e,socket_id:this.socket.id}),this.socket_id=this.socket.id,this.mysel_url=e,this.socket.on("adduser-todom",function(t){t.forEach(function(t){s.local_users.find(function(s){return s.id===t.id})||(t.status=t.name===s.nick_name?1:0,s.local_users.push(t),s.is_first||s.$notify.success({title:"提示",message:t.name+"加入聊天啦^_^",showClose:!1,duration:2e3}))}),s.is_first=!1}),this.socket.on("send-message-todom",function(e){e.status=e.name===s.nick_name?1:0,s.message_list.push(e),t.$nextTick(function(){t.$refs.area.scrollTop=t.$refs.area.scrollHeight})}),this.socket.on("user-disconnect",function(e){s.local_users.forEach(function(t){e.find(function(s){return s.id===t.id})||s.$notify.error({title:"提示",message:t.name+"离开了聊天o(╥﹏╥)o",showClose:!1,duration:2e3})}),t.local_users=e.map(function(t){return{name:t.name,id:t.id,url:t.url,status:t.name===s.nick_name?1:0}})})}},mounted:function(){},created:function(){this.socket=r()("ws://localhost:5000/")}},u={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("el-row",{staticClass:"box"},[e("el-col",{staticClass:"user-list",attrs:{span:7}},t._l(t.local_users,function(s,a){return e("div",{key:a,class:["user",{myself:s.status}]},[e("div",{staticClass:"user-img"},[e("img",{attrs:{src:s.url,alt:""}})]),t._v(" "),e("div",{staticClass:"user-name"},[t._v(t._s(s.name))])])}),0),t._v(" "),e("el-col",{staticClass:"chat-content",attrs:{span:17}},[e("div",{ref:"area",staticClass:"content-area"},[e("div",{staticClass:"num"},[t._v("在线"+t._s(t.local_users.length)+"人")]),t._v(" "),t._l(t.message_list,function(s,a){return e("div",{key:a,class:["info",{myself:s.status}]},[s.status?t._e():[e("div",{staticClass:"avatar"},[e("img",{attrs:{src:s.url,alt:""}})]),t._v(" "),e("div",{staticClass:"message"},[e("div",{staticClass:"nick-name"},[t._v(t._s(s.name))]),t._v(" "),e("div",{staticClass:"text"},[t._v(t._s(s.message))])])],t._v(" "),s.status?[e("div",{staticClass:"message"},[e("div",{staticClass:"nick-name"},[t._v(t._s(s.name))]),t._v(" "),e("div",{staticClass:"text-right"},[t._v(t._s(s.message))])]),t._v(" "),e("div",{staticClass:"avatar"},[e("img",{attrs:{src:s.url,alt:""}})])]:t._e()],2)})],2),t._v(" "),e("div",{staticClass:"input-area"},[e("el-input",{staticClass:"input",attrs:{placeholder:"请输入内容"},model:{value:t.input_text,callback:function(s){t.input_text=s},expression:"input_text"}}),t._v(" "),e("el-button",{staticClass:"send-btn",attrs:{type:"primary"},on:{click:t.sendMessage}},[t._v("发送")])],1)])],1),t._v(" "),e("el-dialog",{attrs:{title:"请输入昵称",visible:t.dialogVisible,width:"35%","close-on-press-escape":!1,"close-on-click-modal":!1,"show-close":!1},on:{"update:visible":function(s){t.dialogVisible=s}}},[e("el-input",{attrs:{placeholder:"请输入昵称",maxlength:"10","show-word-limit":""},model:{value:t.nick_name,callback:function(s){t.nick_name=s},expression:"nick_name"}}),t._v(" "),e("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[e("el-button",{attrs:{type:"primary"},on:{click:t.submitName}},[t._v("确 定")])],1)],1)],1)},staticRenderFns:[]};var d=e("VU/8")(l,u,!1,function(t){e("cwKL")},"data-v-5ba82083",null).exports;a.default.use(o.a);var m=new o.a({routes:[{path:"/",name:"socket",redirect:"/socket-demo"},{path:"/socket-demo",name:"socket",component:d}]}),p=e("zL8q");e("tvR6");a.default.use(p.Dialog),a.default.use(p.Input),a.default.use(p.Button),a.default.use(p.Row),a.default.use(p.Col),a.default.config.productionTip=!1,a.default.prototype.$message=p.Message,a.default.prototype.$notify=p.Notification,new a.default({el:"#app",router:m,components:{App:n},template:"<App/>"})},URTH:function(t,s,e){t.exports=e.p+"static/img/avatar10.35c4c40.jpg"},VoS7:function(t,s,e){t.exports=e.p+"static/img/avatar4.e66ca47.jpg"},cwKL:function(t,s){},er11:function(t,s){},jWzA:function(t,s,e){t.exports=e.p+"static/img/avatar2.c1387ac.jpg"},kpH5:function(t,s,e){t.exports=e.p+"static/img/avatar8.e4d2cda.jpg"},nkjE:function(t,s,e){t.exports=e.p+"static/img/avatar3.61ef88f.jpg"},pEZi:function(t,s,e){t.exports=e.p+"static/img/avatar1.a1c957c.jpg"},tvR6:function(t,s){}},["NHnr"]);
//# sourceMappingURL=app.b357f9e7bd3e4e28d018.js.map