(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-69db41f2"],{"6f1a":function(e,a,t){},"7c9f":function(e,a,t){"use strict";var i=t("6f1a"),r=t.n(i);r.a},c109:function(e,a,t){"use strict";t.r(a);var i=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[t("b-form",{on:{submit:function(a){return a.stopPropagation(),a.preventDefault(),e.onSubmit(a)}}},[t("b-row",[t("b-col",[t("b-form-group",{attrs:{id:"example-input-group-1",label:"Name","label-for":"example-input-1"}},[t("b-form-input",{attrs:{id:"example-input-1",name:"example-input-1",state:e.validateState("name"),"aria-describedby":"input-1-live-feedback"},model:{value:e.$v.form.name.$model,callback:function(a){e.$set(e.$v.form.name,"$model",a)},expression:"$v.form.name.$model"}}),t("b-form-invalid-feedback",{attrs:{id:"input-1-live-feedback"}},[e._v("This is a required field and must be at least 3 characters.")])],1),t("b-form-group",{attrs:{id:"example-input-group-1",label:"Last name","label-for":"example-input-1"}},[t("b-form-input",{attrs:{id:"example-input-1",name:"example-input-1",state:e.validateState("lastname"),"aria-describedby":"input-1-live-feedback"},model:{value:e.$v.form.lastname.$model,callback:function(a){e.$set(e.$v.form.lastname,"$model",a)},expression:"$v.form.lastname.$model"}}),t("b-form-invalid-feedback",{attrs:{id:"input-1-live-feedback"}},[e._v("This is a required field and must be at least 3 characters.")])],1),t("b-form-group",{attrs:{id:"example-input-group-1",label:"Phone","label-for":"example-input-1"}},[t("b-form-input",{attrs:{id:"example-input-1",name:"example-input-1",state:e.validateState("phone"),"aria-describedby":"input-1-live-feedback",type:"number"},model:{value:e.$v.form.phone.$model,callback:function(a){e.$set(e.$v.form.phone,"$model",a)},expression:"$v.form.phone.$model"}}),t("b-form-invalid-feedback",{attrs:{id:"input-1-live-feedback"}},[e._v("This is a required field and must be at least 10 characters.")])],1)],1),t("b-col",[t("b-form-group",{attrs:{id:"example-input-group-1",label:"Email","label-for":"example-input-1"}},[t("b-form-input",{attrs:{id:"example-input-1",name:"example-input-1",state:e.validateState("email"),"aria-describedby":"input-1-live-feedback",type:"email"},model:{value:e.$v.form.email.$model,callback:function(a){e.$set(e.$v.form.email,"$model",a)},expression:"$v.form.email.$model"}}),t("b-form-invalid-feedback",{attrs:{id:"input-1-live-feedback"}},[e._v(" This is a required field. ")])],1),t("b-form-group",{attrs:{id:"example-input-group-1",label:"Message","label-for":"example-input-1"}},[t("b-form-textarea",{attrs:{id:"example-input-1",name:"example-input-1",state:e.validateState("message"),"aria-describedby":"input-1-live-feedback",rows:"3","max-rows":"6"},model:{value:e.$v.form.message.$model,callback:function(a){e.$set(e.$v.form.message,"$model",a)},expression:"$v.form.message.$model"}}),t("b-form-invalid-feedback",{attrs:{id:"input-1-live-feedback"}},[e._v(" This is a required field. ")])],1),t("b-form-group",{attrs:{id:"example-input-group-2",label:"Services","label-for":"example-input-2"}},[t("b-form-select",{attrs:{id:"example-input-2",name:"example-input-2",options:e.services,state:e.validateState("service"),"aria-describedby":"input-2-live-feedback"},model:{value:e.$v.form.service.$model,callback:function(a){e.$set(e.$v.form.service,"$model",a)},expression:"$v.form.service.$model"}}),t("b-form-invalid-feedback",{attrs:{id:"input-2-live-feedback"}},[e._v("This is a required field.")])],1),t("b-button",{attrs:{type:"submit",variant:"primary"}},[e._v("Submit")]),t("b-button",{staticClass:"ml-2",on:{click:function(a){return e.resetForm()}}},[e._v("Reset")])],1)],1)],1)],1)},r=[],l=t("1dce"),n=t("b5ae"),o={mixins:[l["validationMixin"]],data:function(){return{services:[{value:null,text:"I’m interested in service"},{value:"Dental Implants",text:"Dental Implants"},{value:"Braces",text:"Braces"},{value:"Crowns and Bridges",text:"Crowns and Bridges"},{value:"Endodontics",text:"Endodontics"},{value:"Fillings and Extractions",text:"Fillings and Extractions"}],form:{name:null,service:null,email:null,lastname:null,phone:null,message:null}}},validations:{form:{service:{required:n["required"]},name:{required:n["required"],minLength:Object(n["minLength"])(3)},email:{required:n["required"]},lastname:{required:n["required"]},phone:{required:n["required"],minLength:Object(n["minLength"])(10)},message:{required:n["required"],minLength:Object(n["minLength"])(1500)}}},methods:{validateState:function(e){var a=this.$v.form[e],t=a.$dirty,i=a.$error;return t?!i:null},resetForm:function(){var e=this;this.form={name:null,food:null},this.$nextTick((function(){e.$v.$reset()}))},onSubmit:function(){this.$v.form.$touch(),this.$v.form.$anyError||alert("Form submitted!")}}},m=o,s=(t("7c9f"),t("2877")),d=Object(s["a"])(m,i,r,!1,null,null,null);a["default"]=d.exports}}]);
//# sourceMappingURL=chunk-69db41f2.8d5832d4.js.map