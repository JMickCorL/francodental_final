(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3e198cc4"],{"259c":function(t,e,n){"use strict";var a=n("444d"),i=n.n(a);i.a},"3b52":function(t,e,n){t.exports=n.p+"img/logodental.102899e1.png"},"444d":function(t,e,n){},"4a45":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"review-experience"},[n("navbar"),n("br"),t._v(" "),n("br"),n("b-container",[n("b-row",[n("b-col",[n("img",{attrs:{align:"right",id:"img-wcu",src:t.review.imageURL}})]),n("b-col",[n("table",{staticClass:"table table-borderless"},[n("thead",[n("tr",[n("th",{staticStyle:{"font-size":"20px",color:"#000000"},attrs:{scope:"col"}},[n("b",[t._v(t._s(t.review.service))])])])]),n("thead",[n("tr",[n("th",{staticStyle:{"font-size":"16px",color:"#6F51C7"},attrs:{scope:"col"}},[n("b",[t._v(t._s(t.review.cliente))])])])]),n("tbody",[n("tr",[n("td",{staticStyle:{"font-size":"16px",color:"#828282"}},[t._v(" "+t._s(t.review.description)+" ")])])])])])],1)],1),n("div",{staticClass:"container"},[t._m(0),n("div",{staticClass:"comments-container"},[n("ul",{staticClass:"comments-list",attrs:{id:"comments-list"}},t._l(t.comment,(function(e){return n("li",{key:e.id},[n("div",{staticClass:"comment-main-level"},[t._m(1,!0),n("div",{staticClass:"comment-box"},[n("div",{staticClass:"comment-head"},[n("h6",{staticClass:"comment-name by-author"},[n("p",[t._v(t._s(e.name.toUpperCase()))])]),n("span",[t._v(" | "+t._s(e.date))])]),n("div",{staticClass:"comment-content"},[t._v(" "+t._s(e.text)+" ")])])])])})),0)])]),n("div",{staticClass:"container",staticStyle:{width:"800px",height:"110px"}},[n("h2",{attrs:{id:"subtitle"}},[t._v("Write us your opinion!")]),n("div",[n("b-form-group",{attrs:{id:"fieldset-1",description:"Let us know your name.",label:"Enter your name","label-for":"input-1","invalid-feedback":t.invalidFeedback,"valid-feedback":t.validFeedback,state:t.state}},[n("b-form-input",{attrs:{id:"input-1",state:t.state,trim:""},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}})],1),n("b-form-textarea",{attrs:{id:"textarea",placeholder:"Enter something...",rows:"3","max-rows":"6",maxlength:"1500",state:t.validation},model:{value:t.text,callback:function(e){t.text=e},expression:"text"}}),n("b-form-invalid-feedback",{attrs:{state:t.validation}},[t._v(" Your comment must be 1500 characters long. ")]),n("b-form-valid-feedback",{attrs:{state:t.validation}},[t._v(" Looks Good. ")]),n("div",{attrs:{id:"enviar-comentario"}},[n("b-button",{attrs:{id:"btn-enviar-comentario",size:"lg",pill:"",type:"submit"},on:{click:t.addcomment}},[t._v("LEAVE YOUR COMMENTS")])],1)],1)])],1)},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h4",[n("b",[t._v("CUSTOMER EVALUATIONS")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"comment-avatar"},[a("img",{attrs:{src:n("cc1c"),alt:"teeth-photo"}})])}],s=(n("b0c0"),n("d3b7"),n("9d8d")),o={data:function(){return{name:"",text:"",reference:this.$route.params.id,review:{},comment:[]}},created:function(){this.init(),this.init2()},computed:{id:function(){return this.$route.params.id},validation:function(){return this.text.length>4&&this.text.length<13},state:function(){return this.name.length>=4},invalidFeedback:function(){return this.name.length>4?"":this.name.length>0?"Enter at least 4 characters":"Please enter something"},validFeedback:function(){return!0===this.state?"Thank you":""}},methods:{addcomment:function(){this.axios.post("http://localhost:3000/comment/"+this.id,{name:this.name,text:this.text,reference:this.comment.id}).then((function(t){console.log("obtenidos satisfactoriamente"+t.data)})).catch((function(t){console.log("error innesperado"+t.response)}))},init:function(){var t=this;fetch("http://localhost:3000/Reviews/"+this.id).then((function(t){return t.json()})).then((function(e){return t.review=e}))},init2:function(){var t=this;fetch("http://localhost:3000/comment/"+this.id).then((function(t){return t.json()})).then((function(e){return t.comment=e}))}},components:{navbar:s["a"]}},c=o,r=(n("259c"),n("2877")),l=Object(r["a"])(c,a,i,!1,null,"5eee55e0",null);e["default"]=l.exports},"5a36":function(t,e,n){},"947a":function(t,e,n){"use strict";var a=n("5a36"),i=n.n(a);i.a},"9d8d":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"navigation-bar"},[a("b-navbar",{attrs:{id:"navbar"}},[a("ul",{staticClass:"nav justify-content-center fixed-top",staticStyle:{background:"#F9F9F9"}},[a("b-nav-item",{attrs:{to:{name:"Reviews"}}},[t._v("Reviews")]),a("b-nav-item",{attrs:{to:{name:"ContactUs"}}},[t._v("Contact Us")]),a("b-nav-item",{attrs:{to:{name:"Index"}}},[a("a",{staticClass:"nav-link",attrs:{id:"image-a",to:{name:"index"}}},[a("img",{attrs:{id:"logodental",alt:"Logo De Franco",src:n("3b52")}})])]),a("b-nav-item",{attrs:{to:{name:"Services"}}},[t._v("Services")]),a("b-nav-item",{attrs:{to:{name:"AboutUs"}}},[t._v("About Us")])],1)])],1)},i=[],s={data:function(){return{}}},o=s,c=(n("947a"),n("2877")),r=Object(c["a"])(o,a,i,!1,null,"35f50624",null);e["a"]=r.exports},b0c0:function(t,e,n){var a=n("83ab"),i=n("9bf2").f,s=Function.prototype,o=s.toString,c=/^\s*function ([^ (]*)/,r="name";a&&!(r in s)&&i(s,r,{configurable:!0,get:function(){try{return o.call(this).match(c)[1]}catch(t){return""}}})},cc1c:function(t,e,n){t.exports=n.p+"img/013-crown.4ee0e1f2.png"}}]);
//# sourceMappingURL=chunk-3e198cc4.b3462cb1.js.map