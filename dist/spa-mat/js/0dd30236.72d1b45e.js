(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["0dd30236"],{1494:function(e,t,n){"use strict";var a=n("1f73"),l=n.n(a);l.a},"1f73":function(e,t,n){},4891:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("q-page",{staticClass:"flex flex-left",attrs:{padding:!0}},[n("div",[n("h6",[e._v("Connections Form")]),e._v("\n        Id: "+e._s(e.id)),n("br"),e._v("\n        Label: "+e._s(e.label)),n("br"),n("br"),n("hr"),n("q-select",{attrs:{options:e.options},on:{input:e.onValueChange},model:{value:e.selection,callback:function(t){e.selection=t},expression:"selection"}}),e._v(" "+e._s(e.sourceLabel)+"\n        "),n("q-btn",{attrs:{label:"Create Relation"},on:{click:e.doSubmit}}),n("q-btn",{attrs:{label:"Cancel"},on:{click:function(t){return e.$router.replace("/home")}}})],1)])},l=[];a._withStripped=!0,n.d(t,"a",function(){return a}),n.d(t,"b",function(){return l})},5840:function(e,t,n){"use strict";n.r(t);var a=n("dfa9"),l=n.n(a);for(var o in a)"default"!==o&&function(e){n.d(t,e,function(){return a[e]})}(o);t["default"]=l.a},"87b7":function(e,t,n){"use strict";n.r(t);var a=n("4891"),l=n("5840");for(var o in l)"default"!==o&&function(e){n.d(t,e,function(){return l[e]})}(o);n("1494");var u=n("2877"),r=Object(u["a"])(l["default"],a["a"],a["b"],!1,null,null,null);r.options.__file="ConnectionNodeForm.vue",t["default"]=r.exports},dfa9:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={props:["id","label"],data:function(){return{sourceId:null,targetId:null,sourceLabel:null,targetLabel:null,selection:null,options:[{label:"Source",value:"source"},{label:"Target",value:"target"}]}},methods:{doSubmit:function(){},onValueChange:function(){alert(this.$data.selection)}},mounted:function(){this.$data.sourceId=id,this.$data.sourceLabel=label}};t.default=a}}]);