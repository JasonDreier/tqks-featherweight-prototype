(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["e7896502"],{"0714":function(t,n,e){"use strict";var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("q-page",{staticClass:"flex flex-center",attrs:{padding:!0}},[e("div",[t.stillLoading?t._e():e("div",{staticClass:"column items-center"},[e("h6",[t._v(t._s(t.cms.title))]),e("div",{domProps:{innerHTML:t._s(t.cms.body)}})]),e("q-inner-loading",{attrs:{visible:t.stillLoading}},[e("q-spinner-gears",{attrs:{size:"50px",color:"primary"}})],1)],1)])},r=[];i._withStripped=!0,e.d(n,"a",function(){return i}),e.d(n,"b",function(){return r})},"333f":function(t,n,e){},"3f6c":function(t,n,e){"use strict";var i=e("4ea4");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0,e("7f7f");var r=i(e("3156")),o=e("2f62"),u={computed:(0,r.default)({},(0,o.mapGetters)("configuration",{currentConfig:"getCopy"}),{stillLoading:function(){return!(this.currentConfig&&this.currentConfig.cms)},cms:function(){if(this.stillLoading)return null;this.$route.name;var t=this.currentConfig.cms.pages.filter(function(t){var n=t.slug;return n===n})[0];return t},authenticated:function(){return null!==this.$store.getters.user}}),mounted:function(){this.$store.commit("questView",!1),this.fetchCurrentConfiguration(1).then(function(t){console.log("Got config",t)}),this.$store.commit("questView",!1)},methods:(0,r.default)({},(0,o.mapActions)("configuration",{fetchCurrentConfiguration:"get"}))};n.default=u},bc13:function(t,n,e){"use strict";e.r(n);var i=e("0714"),r=e("edfd");for(var o in r)"default"!==o&&function(t){e.d(n,t,function(){return r[t]})}(o);e("cb34");var u=e("2877"),s=Object(u["a"])(r["default"],i["a"],i["b"],!1,null,null,null);s.options.__file="Home.vue",n["default"]=s.exports},cb34:function(t,n,e){"use strict";var i=e("333f"),r=e.n(i);r.a},edfd:function(t,n,e){"use strict";e.r(n);var i=e("3f6c"),r=e.n(i);for(var o in i)"default"!==o&&function(t){e.d(n,t,function(){return i[t]})}(o);n["default"]=r.a}}]);