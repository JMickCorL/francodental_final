(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7a8b056c"],{"0234":function(e,t,r){"use strict";function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e){return o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.pushParams=s,t.popParams=c,t.withParams=v,t._setTarget=t.target=void 0;var u=[],l=null;t.target=l;var f=function(e){t.target=l=e};function s(){null!==l&&u.push(l),t.target=l={}}function c(){var e=l,r=t.target=l=u.pop()||null;return r&&(Array.isArray(r.$sub)||(r.$sub=[]),r.$sub.push(e)),e}function d(e){if("object"!==o(e)||Array.isArray(e))throw new Error("params must be an object");t.target=l=i({},l,{},e)}function p(e,t){return m((function(r){return function(){r(e);for(var n=arguments.length,i=new Array(n),a=0;a<n;a++)i[a]=arguments[a];return t.apply(this,i)}}))}function m(e){var t=e(d);return function(){s();try{for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];return t.apply(this,r)}finally{c()}}}function v(e,t){return"object"===o(e)&&void 0!==t?p(e,t):m(e)}t._setTarget=f},1331:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),i=(0,n.regex)("integer",/(^[0-9]*$)|(^-[0-9]+$)/);t.default=i},"1dce":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Vuelidate=z,Object.defineProperty(t,"withParams",{enumerable:!0,get:function(){return i.withParams}}),t.default=t.validationMixin=void 0;var n=r("fbf4"),i=r("0234");function a(e){return l(e)||u(e)||o()}function o(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function u(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}function l(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function d(e){return d="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},d(e)}var p=function(){return null},m=function(e,t,r){return e.reduce((function(e,n){return e[r?r(n):n]=t(n),e}),{})};function v(e){return"function"===typeof e}function b(e){return null!==e&&("object"===d(e)||v(e))}function y(e){return b(e)&&v(e.then)}var h=function(e,t,r,n){if("function"===typeof r)return r.call(e,t,n);r=Array.isArray(r)?r:r.split(".");for(var i=0;i<r.length;i++){if(!t||"object"!==d(t))return n;t=t[r[i]]}return"undefined"===typeof t?n:t},g="__isVuelidateAsyncVm";function _(e,t){var r=new e({data:{p:!0,v:!1}});return t.then((function(e){r.p=!1,r.v=e}),(function(e){throw r.p=!1,r.v=!1,e})),r[g]=!0,r}var P={$invalid:function(){var e=this,t=this.proxy;return this.nestedKeys.some((function(t){return e.refProxy(t).$invalid}))||this.ruleKeys.some((function(e){return!t[e]}))},$dirty:function(){var e=this;return!!this.dirty||0!==this.nestedKeys.length&&this.nestedKeys.every((function(t){return e.refProxy(t).$dirty}))},$anyDirty:function(){var e=this;return!!this.dirty||0!==this.nestedKeys.length&&this.nestedKeys.some((function(t){return e.refProxy(t).$anyDirty}))},$error:function(){return this.$dirty&&!this.$pending&&this.$invalid},$anyError:function(){var e=this;return!!this.$error||this.nestedKeys.some((function(t){return e.refProxy(t).$anyError}))},$pending:function(){var e=this;return this.ruleKeys.some((function(t){return e.getRef(t).$pending}))||this.nestedKeys.some((function(t){return e.refProxy(t).$pending}))},$params:function(){var e=this,t=this.validations;return s({},m(this.nestedKeys,(function(e){return t[e]&&t[e].$params||null})),{},m(this.ruleKeys,(function(t){return e.getRef(t).$params})))}};function O(e){this.dirty=e;var t=this.proxy,r=e?"$touch":"$reset";this.nestedKeys.forEach((function(e){t[e][r]()}))}var j={$touch:function(){O.call(this,!0)},$reset:function(){O.call(this,!1)},$flattenParams:function(){var e=this.proxy,t=[];for(var r in this.$params)if(this.isNested(r)){for(var n=e[r].$flattenParams(),i=0;i<n.length;i++)n[i].path.unshift(r);t=t.concat(n)}else t.push({path:[],name:r,params:this.$params[r]});return t}},x=Object.keys(P),w=Object.keys(j),M=null,$=function(e){if(M)return M;var t=e.extend({computed:{refs:function(){var e=this._vval;this._vval=this.children,(0,n.patchChildren)(e,this._vval);var t={};return this._vval.forEach((function(e){t[e.key]=e.vm})),t}},beforeCreate:function(){this._vval=null},beforeDestroy:function(){this._vval&&((0,n.patchChildren)(this._vval),this._vval=null)},methods:{getModel:function(){return this.lazyModel?this.lazyModel(this.prop):this.model},getModelKey:function(e){var t=this.getModel();if(t)return t[e]},hasIter:function(){return!1}}}),r=t.extend({data:function(){return{rule:null,lazyModel:null,model:null,lazyParentModel:null,rootModel:null}},methods:{runRule:function(t){var r=this.getModel();(0,i.pushParams)();var n=this.rule.call(this.rootModel,r,t),a=y(n)?_(e,n):n,o=(0,i.popParams)(),u=o&&o.$sub?o.$sub.length>1?o:o.$sub[0]:null;return{output:a,params:u}}},computed:{run:function(){var e=this,t=this.lazyParentModel(),r=Array.isArray(t)&&t.__ob__;if(r){var n=t.__ob__.dep;n.depend();var i=n.constructor.target;if(!this._indirectWatcher){var a=i.constructor;this._indirectWatcher=new a(this,(function(){return e.runRule(t)}),null,{lazy:!0})}var o=this.getModel();if(!this._indirectWatcher.dirty&&this._lastModel===o)return this._indirectWatcher.depend(),i.value;this._lastModel=o,this._indirectWatcher.evaluate(),this._indirectWatcher.depend()}else this._indirectWatcher&&(this._indirectWatcher.teardown(),this._indirectWatcher=null);return this._indirectWatcher?this._indirectWatcher.value:this.runRule(t)},$params:function(){return this.run.params},proxy:function(){var e=this.run.output;return e[g]?!!e.v:!!e},$pending:function(){var e=this.run.output;return!!e[g]&&e.p}},destroyed:function(){this._indirectWatcher&&(this._indirectWatcher.teardown(),this._indirectWatcher=null)}}),o=t.extend({data:function(){return{dirty:!1,validations:null,lazyModel:null,model:null,prop:null,lazyParentModel:null,rootModel:null}},methods:s({},j,{refProxy:function(e){return this.getRef(e).proxy},getRef:function(e){return this.refs[e]},isNested:function(e){return"function"!==typeof this.validations[e]}}),computed:s({},P,{nestedKeys:function(){return this.keys.filter(this.isNested)},ruleKeys:function(){var e=this;return this.keys.filter((function(t){return!e.isNested(t)}))},keys:function(){return Object.keys(this.validations).filter((function(e){return"$params"!==e}))},proxy:function(){var e=this,t=m(this.keys,(function(t){return{enumerable:!0,configurable:!0,get:function(){return e.refProxy(t)}}})),r=m(x,(function(t){return{enumerable:!0,configurable:!0,get:function(){return e[t]}}})),n=m(w,(function(t){return{enumerable:!1,configurable:!0,get:function(){return e[t]}}})),i=this.hasIter()?{$iter:{enumerable:!0,value:Object.defineProperties({},s({},t))}}:{};return Object.defineProperties({},s({},t,{},i,{$model:{enumerable:!0,get:function(){var t=e.lazyParentModel();return null!=t?t[e.prop]:null},set:function(t){var r=e.lazyParentModel();null!=r&&(r[e.prop]=t,e.$touch())}}},r,{},n))},children:function(){var e=this;return[].concat(a(this.nestedKeys.map((function(t){return f(e,t)}))),a(this.ruleKeys.map((function(t){return c(e,t)})))).filter(Boolean)}})}),u=o.extend({methods:{isNested:function(e){return"undefined"!==typeof this.validations[e]()},getRef:function(e){var t=this;return{get proxy(){return t.validations[e]()||!1}}}}}),l=o.extend({computed:{keys:function(){var e=this.getModel();return b(e)?Object.keys(e):[]},tracker:function(){var e=this,t=this.validations.$trackBy;return t?function(r){return"".concat(h(e.rootModel,e.getModelKey(r),t))}:function(e){return"".concat(e)}},getModelLazy:function(){var e=this;return function(){return e.getModel()}},children:function(){var e=this,t=this.validations,r=this.getModel(),i=s({},t);delete i["$trackBy"];var a={};return this.keys.map((function(t){var u=e.tracker(t);return a.hasOwnProperty(u)?null:(a[u]=!0,(0,n.h)(o,u,{validations:i,prop:t,lazyParentModel:e.getModelLazy,model:r[t],rootModel:e.rootModel}))})).filter(Boolean)}},methods:{isNested:function(){return!0},getRef:function(e){return this.refs[this.tracker(e)]},hasIter:function(){return!0}}}),f=function(e,t){if("$each"===t)return(0,n.h)(l,t,{validations:e.validations[t],lazyParentModel:e.lazyParentModel,prop:t,lazyModel:e.getModel,rootModel:e.rootModel});var r=e.validations[t];if(Array.isArray(r)){var i=e.rootModel,a=m(r,(function(e){return function(){return h(i,i.$v,e)}}),(function(e){return Array.isArray(e)?e.join("."):e}));return(0,n.h)(u,t,{validations:a,lazyParentModel:p,prop:t,lazyModel:p,rootModel:i})}return(0,n.h)(o,t,{validations:r,lazyParentModel:e.getModel,prop:t,lazyModel:e.getModelKey,rootModel:e.rootModel})},c=function(e,t){return(0,n.h)(r,t,{rule:e.validations[t],lazyParentModel:e.lazyParentModel,lazyModel:e.getModel,rootModel:e.rootModel})};return M={VBase:t,Validation:o},M},k=null;function S(e){if(k)return k;var t=e.constructor;while(t.super)t=t.super;return k=t,t}var A=function(e,t){var r=S(e),i=$(r),a=i.Validation,o=i.VBase,u=new o({computed:{children:function(){var r="function"===typeof t?t.call(e):t;return[(0,n.h)(a,"$v",{validations:r,lazyParentModel:p,prop:"$v",model:e,rootModel:e})]}}});return u},q={data:function(){var e=this.$options.validations;return e&&(this._vuelidate=A(this,e)),{}},beforeCreate:function(){var e=this.$options,t=e.validations;t&&(e.computed||(e.computed={}),e.computed.$v||(e.computed.$v=function(){return this._vuelidate?this._vuelidate.refs.$v.proxy:null}))},beforeDestroy:function(){this._vuelidate&&(this._vuelidate.$destroy(),this._vuelidate=null)}};function z(e){e.mixin(q)}t.validationMixin=q;var D=z;t.default=D},"2a12":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),i=function(e){return(0,n.withParams)({type:"maxLength",max:e},(function(t){return!(0,n.req)(t)||(0,n.len)(t)<=e}))};t.default=i},3360:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),i=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,n.withParams)({type:"and"},(function(){for(var e=this,r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return t.length>0&&t.reduce((function(t,r){return t&&r.apply(e,n)}),!0)}))};t.default=i},"3a54":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),i=(0,n.regex)("alphaNum",/^[a-zA-Z0-9]*$/);t.default=i},"3b52":function(e,t,r){e.exports=r.p+"img/logodental.102899e1.png"},"45b8":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),i=(0,n.regex)("numeric",/^[0-9]*$/);t.default=i},"46bc":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),i=function(e){return(0,n.withParams)({type:"maxValue",max:e},(function(t){return!(0,n.req)(t)||(!/\s/.test(t)||t instanceof Date)&&+t<=+e}))};t.default=i},"534a":function(e,t,r){"use strict";var n=r("8748"),i=r.n(n);i.a},"576a":function(e,t,r){"use strict";var n=r("b214"),i=r.n(n);i.a},"5d75":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),i=/(^$|^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$)/,a=(0,n.regex)("email",i);t.default=a},"5db3":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),i=function(e){return(0,n.withParams)({type:"minLength",min:e},(function(t){return!(0,n.req)(t)||(0,n.len)(t)>=e}))};t.default=i},6235:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),i=(0,n.regex)("alpha",/^[a-zA-Z]*$/);t.default=i},6417:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),i=function(e){return(0,n.withParams)({type:"not"},(function(t,r){return!(0,n.req)(t)||!e.call(this,t,r)}))};t.default=i},"772d":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),i=/^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i,a=(0,n.regex)("url",i);t.default=a},"78ef":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"withParams",{enumerable:!0,get:function(){return n.default}}),t.regex=t.ref=t.len=t.req=void 0;var n=i(r("8750"));function i(e){return e&&e.__esModule?e:{default:e}}function a(e){return a="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}var o=function(e){if(Array.isArray(e))return!!e.length;if(void 0===e||null===e)return!1;if(!1===e)return!0;if(e instanceof Date)return!isNaN(e.getTime());if("object"===a(e)){for(var t in e)return!0;return!1}return!!String(e).length};t.req=o;var u=function(e){return Array.isArray(e)?e.length:"object"===a(e)?Object.keys(e).length:String(e).length};t.len=u;var l=function(e,t,r){return"function"===typeof e?e.call(t,r):r[e]};t.ref=l;var f=function(e,t){return(0,n.default)({type:e},(function(e){return!o(e)||t.test(e)}))};t.regex=f},8748:function(e,t,r){},8750:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n="web"===Object({NODE_ENV:"production",BASE_URL:"/"}).BUILD?r("cb69").withParams:r("0234").withParams,i=n;t.default=i},"91d3":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:":";return(0,n.withParams)({type:"macAddress"},(function(t){if(!(0,n.req)(t))return!0;if("string"!==typeof t)return!1;var r="string"===typeof e&&""!==e?t.split(e):12===t.length||16===t.length?t.match(/.{2}/g):null;return null!==r&&(6===r.length||8===r.length)&&r.every(a)}))};t.default=i;var a=function(e){return e.toLowerCase().match(/^[0-9a-f]{2}$/)}},"9d8d":function(e,t,r){"use strict";var n=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"navigation-bar"},[n("b-navbar",{attrs:{toggleable:"lg",id:"navbar"}},[n("b-navbar-toggle",{attrs:{id:"navbar",target:"nav-collapse"}}),n("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[n("ul",{staticClass:"nav justify-content-center fixed-top",staticStyle:{background:"#F9F9F9"}},[n("b-navbar-nav",[n("b-nav-item",{attrs:{to:{name:"Reviews"}}},[e._v("Reviews")]),n("b-nav-item",{attrs:{to:{name:"ContactUs"}}},[e._v("Contact Us")]),n("b-nav-item",{attrs:{to:{name:"Index"}}},[n("a",{staticClass:"nav-link",attrs:{id:"image-a",to:{name:"index"}}},[n("img",{attrs:{id:"logodental",alt:"Logo De Franco",src:r("3b52")}})])]),n("b-nav-item",{attrs:{to:{name:"Services"}}},[e._v("Services")]),n("b-nav-item",{attrs:{to:{name:"AboutUs"}}},[e._v("About Us")])],1)],1)])],1)],1)},i=[],a={data:function(){return{}}},o=a,u=(r("576a"),r("2877")),l=Object(u["a"])(o,n,i,!1,null,"502cb458",null);t["a"]=l.exports},aa82:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),i=function(e){return(0,n.withParams)({type:"requiredIf",prop:e},(function(t,r){return!(0,n.ref)(e,this,r)||(0,n.req)(t)}))};t.default=i},b0c0:function(e,t,r){var n=r("83ab"),i=r("9bf2").f,a=Function.prototype,o=a.toString,u=/^\s*function ([^ (]*)/,l="name";n&&!(l in a)&&i(a,l,{configurable:!0,get:function(){try{return o.call(this).match(u)[1]}catch(e){return""}}})},b214:function(e,t,r){},b5ae:function(e,t,r){"use strict";function n(e){return n="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"alpha",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(t,"alphaNum",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(t,"numeric",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"between",{enumerable:!0,get:function(){return u.default}}),Object.defineProperty(t,"email",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(t,"ipAddress",{enumerable:!0,get:function(){return f.default}}),Object.defineProperty(t,"macAddress",{enumerable:!0,get:function(){return s.default}}),Object.defineProperty(t,"maxLength",{enumerable:!0,get:function(){return c.default}}),Object.defineProperty(t,"minLength",{enumerable:!0,get:function(){return d.default}}),Object.defineProperty(t,"required",{enumerable:!0,get:function(){return p.default}}),Object.defineProperty(t,"requiredIf",{enumerable:!0,get:function(){return m.default}}),Object.defineProperty(t,"requiredUnless",{enumerable:!0,get:function(){return v.default}}),Object.defineProperty(t,"sameAs",{enumerable:!0,get:function(){return b.default}}),Object.defineProperty(t,"url",{enumerable:!0,get:function(){return y.default}}),Object.defineProperty(t,"or",{enumerable:!0,get:function(){return h.default}}),Object.defineProperty(t,"and",{enumerable:!0,get:function(){return g.default}}),Object.defineProperty(t,"not",{enumerable:!0,get:function(){return _.default}}),Object.defineProperty(t,"minValue",{enumerable:!0,get:function(){return P.default}}),Object.defineProperty(t,"maxValue",{enumerable:!0,get:function(){return O.default}}),Object.defineProperty(t,"integer",{enumerable:!0,get:function(){return j.default}}),Object.defineProperty(t,"decimal",{enumerable:!0,get:function(){return x.default}}),t.helpers=void 0;var i=k(r("6235")),a=k(r("3a54")),o=k(r("45b8")),u=k(r("ec11")),l=k(r("5d75")),f=k(r("c99d")),s=k(r("91d3")),c=k(r("2a12")),d=k(r("5db3")),p=k(r("d4f4")),m=k(r("aa82")),v=k(r("e652")),b=k(r("b6cb")),y=k(r("772d")),h=k(r("d294")),g=k(r("3360")),_=k(r("6417")),P=k(r("eb66")),O=k(r("46bc")),j=k(r("1331")),x=k(r("c301")),w=$(r("78ef"));function M(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return M=function(){return e},e}function $(e){if(e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!==typeof e)return{default:e};var t=M();if(t&&t.has(e))return t.get(e);var r={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var o=i?Object.getOwnPropertyDescriptor(e,a):null;o&&(o.get||o.set)?Object.defineProperty(r,a,o):r[a]=e[a]}return r.default=e,t&&t.set(e,r),r}function k(e){return e&&e.__esModule?e:{default:e}}t.helpers=w},b6cb:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),i=function(e){return(0,n.withParams)({type:"sameAs",eq:e},(function(t,r){return t===(0,n.ref)(e,this,r)}))};t.default=i},c301:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),i=(0,n.regex)("decimal",/^[-]?\d*(\.\d+)?$/);t.default=i},c99d:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),i=(0,n.withParams)({type:"ipAddress"},(function(e){if(!(0,n.req)(e))return!0;if("string"!==typeof e)return!1;var t=e.split(".");return 4===t.length&&t.every(a)}));t.default=i;var a=function(e){if(e.length>3||0===e.length)return!1;if("0"===e[0]&&"0"!==e)return!1;if(!e.match(/^\d+$/))return!1;var t=0|+e;return t>=0&&t<=255}},cb69:function(e,t,r){"use strict";(function(e){function r(e){return r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.withParams=void 0;var n="undefined"!==typeof window?window:"undefined"!==typeof e?e:{},i=function(e,t){return"object"===r(e)&&void 0!==t?t:e((function(){}))},a=n.vuelidate?n.vuelidate.withParams:i;t.withParams=a}).call(this,r("c8ba"))},d294:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),i=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,n.withParams)({type:"or"},(function(){for(var e=this,r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return t.length>0&&t.reduce((function(t,r){return t||r.apply(e,n)}),!1)}))};t.default=i},d4f4:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),i=(0,n.withParams)({type:"required"},(function(e){return"string"===typeof e?(0,n.req)(e.trim()):(0,n.req)(e)}));t.default=i},d635:function(e,t,r){e.exports=r.p+"img/010-approve.a1e89722.png"},e652:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),i=function(e){return(0,n.withParams)({type:"requiredUnless",prop:e},(function(t,r){return!!(0,n.ref)(e,this,r)||(0,n.req)(t)}))};t.default=i},e9bb:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"contactus"},[n("navbar"),e._m(0),e._m(1),n("br"),e._m(2),n("br"),e._v(" "),n("br"),n("b-container",{staticClass:"consultation-input"},[n("b-form",{on:{submit:function(t){return t.stopPropagation(),t.preventDefault(),e.onSubmit(t)}}},[n("b-row",[n("b-col",[n("b-form-group",{attrs:{id:"example-input-group-1","label-for":"example-input-1"}},[n("b-form-input",{attrs:{id:"example-input-1",name:"example-input-1",state:e.validateState("name"),"aria-describedby":"input-1-live-feedback",placeholder:"Enter your name"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}}),n("b-form-invalid-feedback",{attrs:{id:"input-1-live-feedback"}},[e._v("This is a required field and must be at least 3 characters.")])],1),n("b-form-group",{attrs:{id:"example-input-group-1","label-for":"example-input-1"}},[n("b-form-input",{attrs:{id:"example-input-1",name:"example-input-1",state:e.validateState("lastname"),"aria-describedby":"input-1-live-feedback",placeholder:"Enter your last name"},model:{value:e.form.lastname,callback:function(t){e.$set(e.form,"lastname",t)},expression:"form.lastname"}}),n("b-form-invalid-feedback",{attrs:{id:"input-1-live-feedback"}},[e._v("This is a required field and must be at least 3 characters.")])],1),n("b-form-group",{attrs:{id:"example-input-group-1","label-for":"example-input-1"}},[n("b-form-textarea",{attrs:{id:"example-input-1",name:"example-input-1",state:e.validateState("message"),"aria-describedby":"input-1-live-feedback",rows:"3","max-rows":"6",placeholder:"Enter your message"},model:{value:e.form.message,callback:function(t){e.$set(e.form,"message",t)},expression:"form.message"}}),n("b-form-invalid-feedback",{attrs:{id:"input-1-live-feedback"}},[e._v(" This is a required field. ")])],1)],1),n("b-col",[n("b-form-group",{attrs:{id:"example-input-group-1","label-for":"example-input-1"}},[n("b-form-input",{attrs:{id:"example-input-1",name:"example-input-1",state:e.validateState("phone"),"aria-describedby":"input-1-live-feedback",type:"number",placeholder:"Enter your phone"},model:{value:e.form.phone,callback:function(t){e.$set(e.form,"phone",t)},expression:"form.phone"}}),n("b-form-invalid-feedback",{attrs:{id:"input-1-live-feedback"}},[e._v("This is a required field and must be at least 10 characters.")])],1),n("b-form-group",{attrs:{id:"example-input-group-1","label-for":"example-input-1"}},[n("b-form-input",{attrs:{id:"example-input-1",name:"example-input-1",state:e.validateState("email"),"aria-describedby":"input-1-live-feedback",type:"email",placeholder:"Enter your email"},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}}),n("b-form-invalid-feedback",{attrs:{id:"input-1-live-feedback"}},[e._v(" This is a required field. ")])],1),n("b-form-group",{attrs:{id:"example-input-group-2","label-for":"example-input-2"}},[n("b-form-select",{attrs:{id:"example-input-2",name:"example-input-2",options:e.service,state:e.validateState("service"),"aria-describedby":"input-2-live-feedback"},model:{value:e.form.selected,callback:function(t){e.$set(e.form,"selected",t)},expression:"form.selected"}}),n("b-form-invalid-feedback",{attrs:{id:"input-2-live-feedback"}},[e._v("This is a required field.")])],1),n("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-1",modifiers:{"modal-1":!0}}],staticClass:"btn-send",attrs:{pill:"",block:"",type:"submit",variant:"primary"},on:{click:e.addtoAPI}},[e._v("Submit")]),n("b-modal",{attrs:{id:"modal-1",title:"Hey Hello!"}},[n("p",{attrs:{id:"text-modal"}},[n("img",{attrs:{id:"tooth-modal",src:r("d635"),alt:""}}),e._v("Your information has been sent, we will respond as soon as possible.")])]),n("modalfalse")],1)],1)],1)],1)],1)},i=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("a",{attrs:{href:"https://www.google.com/maps/place/De+Franco+Dental/@32.7160919,-114.7297797,15z/data=!4m5!3m4!1s0x0:0x3f46dbd67b2624da!8m2!3d32.7160919!4d-114.7297797"}},[n("img",{attrs:{id:"mapDFranco",src:r("fc77"),alt:"mapDeFrancoDental"}})])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticStyle:{"background-color":"#6F51C7"}},[r("br")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("h3",[r("b",[e._v("CONTACT US FOR A CONSULTATION")])])}],a=(r("b0c0"),r("9d8d")),o=r("1dce"),u=r("b5ae"),l={mixins:[o["validationMixin"]],components:{navbar:a["a"]},data:function(){return{service:[{value:null,text:"I’m interested in service"},{value:"Dental Implants",text:"Dental Implants"},{value:"Braces",text:"Braces"},{value:"Crowns and Bridges",text:"Crowns and Bridges"},{value:"Endodontics",text:"Endodontics"},{value:"Fillings and Extractions",text:"Fillings and Extractions"}],form:{name:"",service:"",email:"",lastname:"",phone:"",message:"",selected:null}}},validations:{form:{service:{required:u["required"]},name:{required:u["required"],minLength:Object(u["minLength"])(3)},email:{required:u["required"]},lastname:{required:u["required"]},phone:{required:u["required"],minLength:Object(u["minLength"])(10)},message:{required:u["required"],minLength:Object(u["minLength"])(1500)}}},methods:{addtoAPI:function(){this.axios.post("/email",{name:this.form.name,email:this.form.email,text:this.form.message,ln:this.form.lastname,phone:this.form.phone,service:this.form.selected}).then((function(e){console.log("Acción realizada con éxito"+e.data)})).catch((function(e){console.log("[es este error!!!]"+e.response)}))},validateState:function(e){var t=this.$v.form[e],r=t.$dirty,n=t.$error;return r?!n:null},onSubmit:function(){this.$v.form.$touch(),this.$v.form.$anyError||alert("Form submitted!")}}},f=l,s=(r("534a"),r("2877")),c=Object(s["a"])(f,n,i,!1,null,"b601959c",null);t["default"]=c.exports},eb66:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),i=function(e){return(0,n.withParams)({type:"minValue",min:e},(function(t){return!(0,n.req)(t)||(!/\s/.test(t)||t instanceof Date)&&+t>=+e}))};t.default=i},ec11:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),i=function(e,t){return(0,n.withParams)({type:"between",min:e,max:t},(function(r){return!(0,n.req)(r)||(!/\s/.test(r)||r instanceof Date)&&+e<=+r&&+t>=+r}))};t.default=i},fbf4:function(e,t,r){"use strict";function n(e){return null===e||void 0===e}function i(e){return null!==e&&void 0!==e}function a(e,t){return t.tag===e.tag&&t.key===e.key}function o(e){var t=e.tag;e.vm=new t({data:e.args})}function u(e){for(var t=Object.keys(e.args),r=0;r<t.length;r++)t.forEach((function(t){e.vm[t]=e.args[t]}))}function l(e,t,r){var n,a,o={};for(n=t;n<=r;++n)a=e[n].key,i(a)&&(o[a]=n);return o}function f(e,t){var r,u,f,p=0,m=0,v=e.length-1,b=e[0],y=e[v],h=t.length-1,g=t[0],_=t[h];while(p<=v&&m<=h)n(b)?b=e[++p]:n(y)?y=e[--v]:a(b,g)?(d(b,g),b=e[++p],g=t[++m]):a(y,_)?(d(y,_),y=e[--v],_=t[--h]):a(b,_)?(d(b,_),b=e[++p],_=t[--h]):a(y,g)?(d(y,g),y=e[--v],g=t[++m]):(n(r)&&(r=l(e,p,v)),u=i(g.key)?r[g.key]:null,n(u)?(o(g),g=t[++m]):(f=e[u],a(f,g)?(d(f,g),e[u]=void 0,g=t[++m]):(o(g),g=t[++m])));p>v?s(t,m,h):m>h&&c(e,p,v)}function s(e,t,r){for(;t<=r;++t)o(e[t])}function c(e,t,r){for(;t<=r;++t){var n=e[t];i(n)&&(n.vm.$destroy(),n.vm=null)}}function d(e,t){e!==t&&(t.vm=e.vm,u(t))}function p(e,t){i(e)&&i(t)?e!==t&&f(e,t):i(t)?s(t,0,t.length-1):i(e)&&c(e,0,e.length-1)}function m(e,t,r){return{tag:e,key:t,args:r}}Object.defineProperty(t,"__esModule",{value:!0}),t.patchChildren=p,t.h=m},fc77:function(e,t,r){e.exports=r.p+"img/mapfranco.0a2f70c2.jpg"}}]);
//# sourceMappingURL=chunk-7a8b056c.58597b5f.js.map