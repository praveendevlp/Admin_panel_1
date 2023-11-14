"use strict";(self.webpackChunkcoreui_free_angular_admin_template=self.webpackChunkcoreui_free_angular_admin_template||[]).push([[820],{2820:(N,d,o)=>{o.r(d),o.d(d,{NotificationsModule:()=>v});var p=o(6895),h=o(7136),t=o(1571),f=o(5830),g=o(7241),n=o(433),c=o(8423);const u=function(){return{standalone:!0}},m=[{path:"",component:(()=>{class e{constructor(s,i){this.api=s,this.util=i,this.title="",this.descriptions="",this.sendTo=1}ngOnInit(){}sendToAll(){const s={title:this.title,message:this.descriptions};this.util.show(),this.api.post_private("v1/notification/sendToAllUsers",s).then(i=>{console.log(i),this.util.hide(),this.util.success(this.util.translate("Notification sent")),this.title="",this.descriptions=""},i=>{console.log(i),this.util.hide(),this.util.apiErrorHandler(i)}).catch(i=>{console.log(i),this.util.hide(),this.util.apiErrorHandler(i)})}sendToUsers(){const s={title:this.title,message:this.descriptions};this.util.show(),this.api.post_private("v1/notification/sendToUsers",s).then(i=>{console.log(i),this.util.hide(),this.util.success(this.util.translate("Notification sent")),this.title="",this.descriptions=""},i=>{console.log(i),this.util.hide(),this.util.apiErrorHandler(i)}).catch(i=>{console.log(i),this.util.hide(),this.util.apiErrorHandler(i)})}sendToStores(){const s={title:this.title,message:this.descriptions};this.util.show(),this.api.post_private("v1/notification/sendToStores",s).then(i=>{console.log(i),this.util.hide(),this.util.success(this.util.translate("Notification sent")),this.title="",this.descriptions=""},i=>{console.log(i),this.util.hide(),this.util.apiErrorHandler(i)}).catch(i=>{console.log(i),this.util.hide(),this.util.apiErrorHandler(i)})}sendToDrivers(){const s={title:this.title,message:this.descriptions};this.util.show(),this.api.post_private("v1/notification/sendToDrivers",s).then(i=>{console.log(i),this.util.hide(),this.util.success(this.util.translate("Notification sent")),this.title="",this.descriptions=""},i=>{console.log(i),this.util.hide(),this.util.apiErrorHandler(i)}).catch(i=>{console.log(i),this.util.hide(),this.util.apiErrorHandler(i)})}sendNotifications(){return console.log(this.title,this.descriptions,this.sendTo),""==this.title||null==this.title||""==this.descriptions||null==this.descriptions?(this.util.error(this.util.translate("All Fields are required")),!1):1==this.sendTo?(this.sendToAll(),!1):(2==this.sendTo&&this.sendToUsers(),3==this.sendTo&&this.sendToStores(),void(4==this.sendTo&&this.sendToDrivers()))}}return e.\u0275fac=function(s){return new(s||e)(t.Y36(f.s),t.Y36(g.f))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-notifications"]],decls:32,vars:22,consts:[["type","ball-scale-multiple"],[1,"animated","fadeIn"],[1,"row"],[1,"col-lg-12"],[1,"card"],[1,"card-header"],[1,"card-body"],[1,"col-sm-12"],[1,"form-group"],["type","text",1,"form-control",3,"ngModelOptions","ngModel","placeholder","ngModelChange"],["type","text","rows","6",1,"form-control",3,"ngModelOptions","ngModel","placeholder","ngModelChange"],["name","select",1,"form-control",3,"ngModel","ngModelChange"],[3,"value"],["type","button",1,"btn","btn-success",3,"click"]],template:function(s,i){1&s&&(t._UZ(0,"ngx-spinner",0),t.TgZ(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5),t._uU(6),t.qZA(),t.TgZ(7,"div",6)(8,"div",2)(9,"div",7)(10,"div",8)(11,"label"),t._uU(12),t.qZA(),t.TgZ(13,"input",9),t.NdJ("ngModelChange",function(a){return i.title=a}),t.qZA()(),t.TgZ(14,"div",8)(15,"label"),t._uU(16),t.qZA(),t.TgZ(17,"textarea",10),t.NdJ("ngModelChange",function(a){return i.descriptions=a}),t.qZA()(),t.TgZ(18,"div",8)(19,"label"),t._uU(20),t.qZA(),t.TgZ(21,"select",11),t.NdJ("ngModelChange",function(a){return i.sendTo=a}),t.TgZ(22,"option",12),t._uU(23),t.qZA(),t.TgZ(24,"option",12),t._uU(25),t.qZA(),t.TgZ(26,"option",12),t._uU(27),t.qZA(),t.TgZ(28,"option",12),t._uU(29),t.qZA()()(),t.TgZ(30,"button",13),t.NdJ("click",function(){return i.sendNotifications()}),t._uU(31),t.qZA()()()()()()()()),2&s&&(t.xp6(6),t.hij(" ",i.util.translate("Send Notifications")," "),t.xp6(6),t.Oqu(i.util.translate("Notification Title")),t.xp6(1),t.Q6J("ngModelOptions",t.DdM(20,u))("ngModel",i.title)("placeholder",i.util.translate("Notification Title")),t.xp6(3),t.Oqu(i.util.translate("Notification Details")),t.xp6(1),t.Q6J("ngModelOptions",t.DdM(21,u))("ngModel",i.descriptions)("placeholder",i.util.translate("Notification Details")),t.xp6(3),t.Oqu(i.util.translate("Send Notification To")),t.xp6(1),t.Q6J("ngModel",i.sendTo),t.xp6(1),t.Q6J("value",1),t.xp6(1),t.hij("",i.util.translate("All")," "),t.xp6(1),t.Q6J("value",2),t.xp6(1),t.hij("",i.util.translate("Users")," "),t.xp6(1),t.Q6J("value",3),t.xp6(1),t.hij("",i.util.translate("Stores")," "),t.xp6(1),t.Q6J("value",4),t.xp6(1),t.hij("",i.util.translate("Drivers")," "),t.xp6(2),t.hij(" ",i.util.translate("Submit"),""))},dependencies:[n.YN,n.Kr,n.Fj,n.EJ,n.JJ,n.On,c.Ro],styles:['@charset "UTF-8";']}),e})()}];let T=(()=>{class e{}return e.\u0275fac=function(s){return new(s||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[h.Bz.forChild(m),h.Bz]}),e})(),v=(()=>{class e{}return e.\u0275fac=function(s){return new(s||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[p.ez,T,n.u5,c.ef]}),e})()}}]);