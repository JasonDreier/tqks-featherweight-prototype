(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["5b2257b4"],{"15fb":function(e,t,i){"use strict";i.r(t);var n=i("582c"),a=i("d5f0");for(var u in a)"default"!==u&&function(e){i.d(t,e,function(){return a[e]})}(u);i("354e");var s=i("2877"),r=Object(s["a"])(a["default"],n["a"],n["b"],!1,null,null,null);r.options.__file="QuestForm.vue",t["default"]=r.exports},"354e":function(e,t,i){"use strict";var n=i("5e6b"),a=i.n(n);a.a},"4d28":function(e,t,i){"use strict";var n=i("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(i("d722")),u=n(i("2b0e")),s=n(i("fb3d")),r=n(i("a378")),l={editors:{classic:s.default},name:"ckeditor"};u.default.use(r.default.plugin,l);var o,c=i("c64e"),d=a.default.service("conversation"),f={data:function(){return{label:"",details:"",url:"",user:this.$store.getters.user}},methods:{doSubmit:function(){var e={};e.nodeId=c(),e.type="quest",e.label=this.label,e.url=this.url,e.details=this.details,e.img="statics/images/ibis/map.png",e.imgsm="statics/images/ibis/map_sm.png",e.creator=this.user._id,e.handle=this.user.handle,e.date=new Date,e.type="map",console.info("QF-1",this.user),console.info("QF-2",e),d.create(e).then(function(e){o.push("/quests")})}},mounted:function(){o=this.$router,this.$store.commit("questView",!1)}};t.default=f},"582c":function(e,t,i){"use strict";var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("q-page",{attrs:{padding:!0}},[i("h6",[e._v("Quest Edit Form")]),i("div",[i("b",[e._v("Subject")]),i("br"),i("q-input",{model:{value:e.label,callback:function(t){e.label=t},expression:"label"}})],1),i("div",[i("b",[e._v("URL")]),e._v(" (Optional)"),i("br"),i("q-input",{model:{value:e.url,callback:function(t){e.url=t},expression:"url"}})],1),i("div",[i("b",[e._v("Details")]),i("br"),i("ckeditor",{attrs:{type:"classic"},model:{value:e.details,callback:function(t){e.details=t},expression:"details"}})],1),i("div",[i("q-btn",{attrs:{label:"Submit"},on:{click:e.doSubmit}}),i("q-btn",{attrs:{label:"Cancel"},on:{click:function(t){return e.$router.replace("/home")}}})],1)])},a=[];n._withStripped=!0,i.d(t,"a",function(){return n}),i.d(t,"b",function(){return a})},"5e6b":function(e,t,i){},d5f0:function(e,t,i){"use strict";i.r(t);var n=i("4d28"),a=i.n(n);for(var u in n)"default"!==u&&function(e){i.d(t,e,function(){return n[e]})}(u);t["default"]=a.a}}]);