(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["bd1ba9b0"],{"0910":function(e,t,a){"use strict";a.r(t);var i=a("2b1a"),n=a("6ec0");for(var r in n)"default"!==r&&function(e){a.d(t,e,function(){return n[e]})}(r);a("4ed1");var s=a("2877"),l=Object(s["a"])(n["default"],i["a"],i["b"],!1,null,null,null);l.options.__file="ProfileForm.vue",t["default"]=l.exports},"2b1a":function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-page",{attrs:{padding:!0}},[a("h6",[e._v("Profile Edit Form")]),a("div",[a("b",[e._v("Email")]),a("br"),a("q-input",{attrs:{type:"email"},model:{value:e.myEmail,callback:function(t){e.myEmail=t},expression:"myEmail"}}),a("br")],1),a("div",[a("b",[e._v("Full Name")]),a("br"),a("q-input",{model:{value:e.myName,callback:function(t){e.myName=t},expression:"myName"}}),a("br")],1),a("div",[a("b",[e._v("Homepage URL")]),e._v(" (Optional)"),a("br"),a("q-input",{model:{value:e.myUrl,callback:function(t){e.myUrl=t},expression:"myUrl"}}),a("br")],1),a("div",[a("b",[e._v("Password")]),a("br"),a("q-input",{attrs:{type:"password"},model:{value:e.myPassword,callback:function(t){e.myPassword=t},expression:"myPassword"}})],1),a("div",[a("q-btn",{attrs:{label:"Submit"},on:{click:e.doSubmit}}),a("q-btn",{attrs:{label:"Cancel"},on:{click:function(t){return e.$router.replace("/home")}}})],1)])},n=[];i._withStripped=!0,a.d(t,"a",function(){return i}),a.d(t,"b",function(){return n})},"412a":function(e,t,a){"use strict";var i=a("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(a("d722")),r=n.default.service("users"),s={data:function(){return{myId:"",myEmail:"",myName:"",myUrl:"",myPassword:"",thisUser:null}},methods:{doSubmit:function(){var e=this,t=this.thisUser,a={};t.homepage!==this.myUrl&&(a.homepage=this.myUrl),t.email!==this.myEmai&&(a.email=this.myEmail),t.fullname!==this.myName&&(a.fullname=this.myName),""!==this.myPassword&&(a.password=this.myPassword),r.patch(t._id,a).then(function(t){e.$router.push("/home")})}},mounted:function(){var e=this;this.$store.commit("questView",!1),this.myId=this.$route.params.id,r.get(this.myId).then(function(t){e.thisUser=t,e.myEmail=t.email,e.myName=t.fullname,e.myUrl=t.homepage})}};t.default=s},"4ed1":function(e,t,a){"use strict";var i=a("c76f"),n=a.n(i);n.a},"6ec0":function(e,t,a){"use strict";a.r(t);var i=a("412a"),n=a.n(i);for(var r in i)"default"!==r&&function(e){a.d(t,e,function(){return i[e]})}(r);t["default"]=n.a},c76f:function(e,t,a){}}]);