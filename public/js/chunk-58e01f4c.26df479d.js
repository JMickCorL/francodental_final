(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-58e01f4c"],{"2e51":function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"index"},[e("navbar"),e("div",{staticClass:"container"},[t._m(0),e("div",{staticClass:"row"},t._l(t.review,(function(a){return e("div",{key:a.id,staticClass:"flip-card"},[e("router-link",{attrs:{to:"/ReviewExperience/"+a._id}},[e("div",{staticClass:"flip-card-inner"},[e("div",{staticClass:"flip-card-front"},[e("img",{staticStyle:{width:"250px",height:"370px"},attrs:{src:a.imageURL,alt:"photogirl"}})]),e("div",{staticClass:"flip-card-back"},[e("br"),t._v(" "),e("br"),t._v(" "),e("br"),t._v(" "),e("br"),t._v(" "),e("br"),t._v(" "),e("br"),e("h4",[t._v(" "+t._s(a.title)+" ")]),e("p",[t._v(" "+t._s(a.cliente)+" ")])])])])],1)})),0)])],1)},i=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"title"},[e("h1",[e("b",[t._v("Experiences of our patients")])])])}],s=e("9d8d"),r={data:function(){return{review:[],fd:"5ebb735b1b3c35570c18faad"}},created:function(){this.init()},methods:{init:function(){var t=this;this.axios.get("/Reviews").then((function(a){t.review=a.data})).catch((function(t){console.log("error: "+t)}))}},components:{navbar:s["a"]}},c=r,o=(e("cefe"),e("2877")),l=Object(o["a"])(c,n,i,!1,null,"4b6c3ef7",null);a["default"]=l.exports},"3b52":function(t,a,e){t.exports=e.p+"img/logodental.102899e1.png"},"576a":function(t,a,e){"use strict";var n=e("b214"),i=e.n(n);i.a},"9d8d":function(t,a,e){"use strict";var n=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"navigation-bar"},[n("b-navbar",{attrs:{toggleable:"lg",id:"navbar"}},[n("b-navbar-toggle",{attrs:{id:"navbar",target:"nav-collapse"}}),n("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[n("ul",{staticClass:"nav justify-content-center fixed-top",staticStyle:{background:"#F9F9F9"}},[n("b-navbar-nav",[n("b-nav-item",{attrs:{to:{name:"Reviews"}}},[t._v("Reviews")]),n("b-nav-item",{attrs:{to:{name:"ContactUs"}}},[t._v("Contact Us")]),n("b-nav-item",{attrs:{to:{name:"Index"}}},[n("a",{staticClass:"nav-link",attrs:{id:"image-a",to:{name:"index"}}},[n("img",{attrs:{id:"logodental",alt:"Logo De Franco",src:e("3b52")}})])]),n("b-nav-item",{attrs:{to:{name:"Services"}}},[t._v("Services")]),n("b-nav-item",{attrs:{to:{name:"AboutUs"}}},[t._v("About Us")])],1)],1)])],1)],1)},i=[],s={data:function(){return{}}},r=s,c=(e("576a"),e("2877")),o=Object(c["a"])(r,n,i,!1,null,"502cb458",null);a["a"]=o.exports},b214:function(t,a,e){},cefe:function(t,a,e){"use strict";var n=e("f672"),i=e.n(n);i.a},f672:function(t,a,e){}}]);
//# sourceMappingURL=chunk-58e01f4c.26df479d.js.map