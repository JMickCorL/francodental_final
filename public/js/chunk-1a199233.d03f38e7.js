(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1a199233"],{"191c":function(t,e,a){"use strict";var n=a("c73e"),i=a.n(n);i.a},"3b52":function(t,e,a){t.exports=a.p+"img/logodental.102899e1.png"},"4a45":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"review-experience"},[a("navbar"),a("br"),t._v(" "),a("br"),a("b-container",{attrs:{id:"contenedor"}},[a("b-row",[a("b-col",[a("img",{attrs:{align:"right",id:"img-wcu",src:t.review.imageURL}})]),a("b-col",[a("table",{staticClass:"table table-borderless"},[a("thead",[a("tr",[a("th",{staticStyle:{"font-size":"20px",color:"#000000"},attrs:{scope:"col"}},[a("b",[t._v(t._s(t.review.service))])])])]),a("thead",[a("tr",[a("th",{staticStyle:{"font-size":"16px",color:"#6F51C7"},attrs:{scope:"col"}},[a("b",[t._v(t._s(t.review.cliente))])])])]),a("tbody",[a("tr",[a("td",{staticStyle:{"font-size":"16px",color:"#828282"}},[t._v(" "+t._s(t.review.description)+" ")])])])])])],1)],1),a("div",{staticClass:"container",attrs:{id:"contenedor2"}},[t._m(0),a("div",{staticClass:"comments-container"},[a("ul",{staticClass:"comments-list",attrs:{id:"comments-list"}},t._l(t.comment,(function(e){return a("li",{key:e.id},[a("div",{staticClass:"comment-main-level"},[t._m(1,!0),a("div",{staticClass:"comment-box"},[a("div",{staticClass:"comment-head"},[a("h6",{staticClass:"comment-name by-author"},[a("p",[t._v(t._s(e.name.toUpperCase()))])]),a("span",[t._v(" | "+t._s(e.date))])]),a("div",{staticClass:"comment-content"},[t._v(" "+t._s(e.text)+" ")])])])])})),0)])]),a("div",{staticClass:"container",staticStyle:{width:"800px",height:"110px"},attrs:{id:"contenedor3"}},[a("h2",{attrs:{id:"subtitle"}},[t._v("Write us your opinion!")]),a("div",[a("b-form-group",{attrs:{id:"fieldset-1",description:"Let us know your name.",label:"Enter your name","label-for":"input-1","invalid-feedback":t.invalidFeedback,"valid-feedback":t.validFeedback,state:t.state}},[a("b-form-input",{attrs:{id:"input-1",state:t.state,trim:""},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}})],1),a("b-form-textarea",{attrs:{id:"textarea",placeholder:"Enter something...",rows:"3","max-rows":"6",maxlength:"1500",state:t.validation},model:{value:t.text,callback:function(e){t.text=e},expression:"text"}}),a("b-form-invalid-feedback",{attrs:{state:t.validation}},[t._v(" You have not left a comment ")]),a("b-form-valid-feedback",{attrs:{state:t.validation}},[t._v(" Looks Good. ")]),a("div",{attrs:{id:"enviar-comentario"}},[a("b-button",{attrs:{id:"btn-enviar-comentario",size:"lg",pill:"",type:"submit"},on:{click:t.addcomment}},[t._v("LEAVE YOUR COMMENTS")])],1)],1)])],1)},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h4",[a("b",[t._v("CUSTOMER EVALUATIONS")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"comment-avatar"},[n("img",{attrs:{src:a("cc1c"),alt:"teeth-photo"}})])}],s=(a("b0c0"),a("9d8d")),o={data:function(){return{name:"",text:"",reference:this.$route.params.id,review:{},comment:[]}},created:function(){this.init(),this.init2()},computed:{id:function(){return this.$route.params.id},validation:function(){return this.text.length>60&&this.text.length<1500},state:function(){return this.name.length>=10},invalidFeedback:function(){return this.name.length>10?"":this.name.length>0?"Enter at least 10 characters":"Please enter something"},validFeedback:function(){return!0===this.state?"Thank you":""}},methods:{addcomment:function(){this.axios.post("http://localhost:3000/comment/"+this.id,{name:this.name,text:this.text,reference:this.comment.id}).then((function(t){console.log("obtenidos satisfactoriamente"+t.data)})).catch((function(t){console.log("error innesperado"+t.response)}))},init:function(){var t=this;this.axios.get("/Reviews/"+this.id).then((function(e){t.review=e.data})).catch((function(t){console.log("error"+t)}))},init2:function(){var t=this;this.axios("/comment/"+this.id).then((function(e){t.comment=e.data})).catch((function(t){console.log("error: "+t)}))}},components:{navbar:s["a"]}},c=o,r=(a("191c"),a("2877")),l=Object(r["a"])(c,n,i,!1,null,"0ad129cb",null);e["default"]=l.exports},"576a":function(t,e,a){"use strict";var n=a("b214"),i=a.n(n);i.a},"9d8d":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"navigation-bar"},[n("b-navbar",{attrs:{toggleable:"lg",id:"navbar"}},[n("b-navbar-toggle",{attrs:{id:"navbar",target:"nav-collapse"}}),n("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[n("ul",{staticClass:"nav justify-content-center fixed-top",staticStyle:{background:"#F9F9F9"}},[n("b-navbar-nav",[n("b-nav-item",{attrs:{to:{name:"Reviews"}}},[t._v("Reviews")]),n("b-nav-item",{attrs:{to:{name:"ContactUs"}}},[t._v("Contact Us")]),n("b-nav-item",{attrs:{to:{name:"Index"}}},[n("a",{staticClass:"nav-link",attrs:{id:"image-a",to:{name:"index"}}},[n("img",{attrs:{id:"logodental",alt:"Logo De Franco",src:a("3b52")}})])]),n("b-nav-item",{attrs:{to:{name:"Services"}}},[t._v("Services")]),n("b-nav-item",{attrs:{to:{name:"AboutUs"}}},[t._v("About Us")])],1)],1)])],1)],1)},i=[],s={data:function(){return{}}},o=s,c=(a("576a"),a("2877")),r=Object(c["a"])(o,n,i,!1,null,"502cb458",null);e["a"]=r.exports},b0c0:function(t,e,a){var n=a("83ab"),i=a("9bf2").f,s=Function.prototype,o=s.toString,c=/^\s*function ([^ (]*)/,r="name";n&&!(r in s)&&i(s,r,{configurable:!0,get:function(){try{return o.call(this).match(c)[1]}catch(t){return""}}})},b214:function(t,e,a){},c73e:function(t,e,a){},cc1c:function(t,e,a){t.exports=a.p+"img/013-crown.4ee0e1f2.png"}}]);
//# sourceMappingURL=chunk-1a199233.d03f38e7.js.map