!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},a={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in a){var t=a[e];delete a[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){a[e]=t},t.parcelRequired7c6=o);var r=o("1WSnx"),l=o("jzQFI"),i="feedback-form-state",u=document.querySelector(".feedback-form"),s=document.getElementsByName("email")[0],d=document.getElementsByName("message")[0],f={email:"",message:""};!function(){if((0,l.load)(i)){var e=(0,l.load)(i);t=e,s.value=t.email,d.value=t.message,function(e){f.email=e.email,f.message=e.message}(e)}else s.value="",d.value="",c();var t}();var m=e(r).throttle((function(){return(0,l.save)("feedback-form-state",f)}),500);function c(){f.email="",f.message=""}s.addEventListener("input",(function(e){f.email=e.target.value,m()})),d.addEventListener("input",(function(e){f.message=e.target.value,m()})),u.addEventListener("submit",(function(e){e.preventDefault(),console.log(f),u.reset(),(0,l.remove)(i),c()}))}();
//# sourceMappingURL=03-feedback.e75ed382.js.map