(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-35dab622"],{"3b52":function(e,t,a){e.exports=a.p+"img/logodental.102899e1.png"},"3b66":function(e,t,a){"use strict";var i=a("d79e"),n=a.n(i);n.a},"576a":function(e,t,a){"use strict";var i=a("b214"),n=a.n(i);n.a},"9d8d":function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"navigation-bar"},[i("b-navbar",{attrs:{toggleable:"lg",id:"navbar"}},[i("b-navbar-toggle",{attrs:{id:"navbar",target:"nav-collapse"}}),i("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[i("ul",{staticClass:"nav justify-content-center fixed-top",staticStyle:{background:"#F9F9F9"}},[i("b-navbar-nav",[i("b-nav-item",{attrs:{to:{name:"Reviews"}}},[e._v("Reviews")]),i("b-nav-item",{attrs:{to:{name:"ContactUs"}}},[e._v("Contact Us")]),i("b-nav-item",{attrs:{to:{name:"Index"}}},[i("a",{staticClass:"nav-link",attrs:{id:"image-a",to:{name:"index"}}},[i("img",{attrs:{id:"logodental",alt:"Logo De Franco",src:a("3b52")}})])]),i("b-nav-item",{attrs:{to:{name:"Services"}}},[e._v("Services")]),i("b-nav-item",{attrs:{to:{name:"AboutUs"}}},[e._v("About Us")])],1)],1)])],1)],1)},n=[],r={data:function(){return{}}},o=r,l=(a("576a"),a("2877")),s=Object(l["a"])(o,i,n,!1,null,"502cb458",null);t["a"]=s.exports},b0c0:function(e,t,a){var i=a("83ab"),n=a("9bf2").f,r=Function.prototype,o=r.toString,l=/^\s*function ([^ (]*)/,s="name";!i||s in r||n(r,s,{configurable:!0,get:function(){try{return o.call(this).match(l)[1]}catch(e){return""}}})},b214:function(e,t,a){},d635:function(e,t,a){e.exports=a.p+"img/010-approve.a1e89722.png"},d79e:function(e,t,a){},e9bb:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"contactus"},[i("navbar"),e._m(0),e._m(1),i("br"),e._m(2),i("br"),e._v(" "),i("br"),i("b-container",{staticClass:"consultation-input"},[i("b-form",{on:{submit:function(t){return t.stopPropagation(),t.preventDefault(),e.onSubmit(t)}}},[i("b-row",[i("b-col",[i("b-form-group",{attrs:{id:"example-input-group-1","label-for":"example-input-1"}},[i("b-form-input",{attrs:{id:"example-input-1",name:"example-input-1",state:e.validateState("name"),"aria-describedby":"input-1-live-feedback",placeholder:"Enter your name"},model:{value:e.$v.form.name.$model,callback:function(t){e.$set(e.$v.form.name,"$model",t)},expression:"$v.form.name.$model"}}),i("b-form-invalid-feedback",{attrs:{id:"input-1-live-feedback"}},[e._v("This is a required field and must be at least 3 characters.")])],1),i("b-form-group",{attrs:{id:"example-input-group-1","label-for":"example-input-1"}},[i("b-form-input",{attrs:{id:"example-input-1",name:"example-input-1",state:e.validateState("email"),"aria-describedby":"input-1-live-feedback",type:"email",placeholder:"Enter your email"},model:{value:e.$v.form.email.$model,callback:function(t){e.$set(e.$v.form.email,"$model",t)},expression:"$v.form.email.$model"}}),i("b-form-invalid-feedback",{attrs:{id:"input-1-live-feedback"}},[e._v(" This is a required field. ")])],1),i("b-form-group",{attrs:{id:"example-input-group-1","label-for":"example-input-1"}},[i("b-form-textarea",{attrs:{id:"example-input-1",name:"example-input-1",state:e.validateState("message"),"aria-describedby":"input-1-live-feedback",rows:"3","max-rows":"6",placeholder:"Enter your message"},model:{value:e.$v.form.message.$model,callback:function(t){e.$set(e.$v.form.message,"$model",t)},expression:"$v.form.message.$model"}}),i("b-form-invalid-feedback",{attrs:{id:"input-1-live-feedback"}},[e._v(" This is a required field. ")])],1)],1),i("b-col",[i("b-form-group",{attrs:{id:"example-input-group-1","label-for":"example-input-1"}},[i("b-form-input",{attrs:{id:"example-input-1",name:"example-input-1",state:e.validateState("lastname"),"aria-describedby":"input-1-live-feedback",placeholder:"Enter your last name"},model:{value:e.$v.form.lastname.$model,callback:function(t){e.$set(e.$v.form.lastname,"$model",t)},expression:"$v.form.lastname.$model"}}),i("b-form-invalid-feedback",{attrs:{id:"input-1-live-feedback"}},[e._v("This is a required field and must be at least 3 characters.")])],1),i("b-form-group",{attrs:{id:"example-input-group-1","label-for":"example-input-1"}},[i("b-form-input",{attrs:{id:"example-input-1",name:"example-input-1",state:e.validateState("phone"),"aria-describedby":"input-1-live-feedback",type:"number",placeholder:"Enter your phone"},model:{value:e.$v.form.phone.$model,callback:function(t){e.$set(e.$v.form.phone,"$model",t)},expression:"$v.form.phone.$model"}}),i("b-form-invalid-feedback",{attrs:{id:"input-1-live-feedback"}},[e._v("This is a required field and must be at least 10 characters.")])],1),i("b-form-group",{attrs:{id:"example-input-group-2","label-for":"example-input-2"}},[i("b-form-select",{attrs:{id:"example-input-2",name:"example-input-2",options:e.services,state:e.validateState("service"),"aria-describedby":"input-2-live-feedback"},model:{value:e.$v.form.service.$model,callback:function(t){e.$set(e.$v.form.service,"$model",t)},expression:"$v.form.service.$model"}}),i("b-form-invalid-feedback",{attrs:{id:"input-2-live-feedback"}},[e._v("This is a required field.")])],1),i("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-1",modifiers:{"modal-1":!0}}],staticClass:"btn-send",attrs:{pill:"",block:"",type:"submit",variant:"primary"},on:{click:e.addtoAPI}},[e._v("Submit")]),i("b-modal",{attrs:{id:"modal-1",title:"Hey Hello!"}},[i("p",{attrs:{id:"text-modal"}},[i("img",{attrs:{id:"tooth-modal",src:a("d635"),alt:""}}),e._v("Your information has been sent, we will respond as soon as possible.")])]),i("modalfalse")],1)],1)],1)],1)],1)},n=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("a",{attrs:{href:"https://www.google.com/maps/place/De+Franco+Dental/@32.7160919,-114.7297797,15z/data=!4m5!3m4!1s0x0:0x3f46dbd67b2624da!8m2!3d32.7160919!4d-114.7297797"}},[i("img",{attrs:{id:"mapDFranco",src:a("fc77"),alt:"mapDeFrancoDental"}})])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticStyle:{"background-color":"#6F51C7"}},[a("br")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("h3",[a("b",[e._v("CONTACT US FOR A CONSULTATION")])])}],r=(a("b0c0"),a("9d8d")),o=a("1dce"),l=a("b5ae"),s={mixins:[o["validationMixin"]],components:{navbar:r["a"]},data:function(){return{services:[{value:null,text:"I’m interested in service"},{value:"Dental Implants",text:"Dental Implants"},{value:"Braces",text:"Braces"},{value:"Crowns and Bridges",text:"Crowns and Bridges"},{value:"Endodontics",text:"Endodontics"},{value:"Fillings and Extractions",text:"Fillings and Extractions"}],form:{name:null,service:null,email:null,lastname:null,phone:null,message:null}}},validations:{form:{service:{required:l["required"]},name:{required:l["required"],minLength:Object(l["minLength"])(3)},email:{required:l["required"]},lastname:{required:l["required"]},phone:{required:l["required"],minLength:Object(l["minLength"])(10)},message:{required:l["required"]}}},methods:{addtoAPI:function(){this.axios.post("http://localhost:3000/email",{name:this.name,email:this.email,text:this.message,ln:this.lastname,phone:this.phone,service:this.selected}).then((function(e){console.log("Acción realizada con éxito"+e.data)})).catch((function(e){console.log("[es este error!!!]"+e.response)}))},validateState:function(e){var t=this.$v.form[e],a=t.$dirty,i=t.$error;return a?!i:null},onSubmit:function(){this.$v.form.$touch(),this.$v.form.$anyError||alert("Form submitted!")}}},m=s,d=(a("3b66"),a("2877")),c=Object(d["a"])(m,i,n,!1,null,"c13a65e0",null);t["default"]=c.exports},fc77:function(e,t,a){e.exports=a.p+"img/mapfranco.0a2f70c2.jpg"}}]);
//# sourceMappingURL=chunk-35dab622.53e54e88.js.map