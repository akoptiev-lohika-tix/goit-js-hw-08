function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a={},n={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in a)return a[e].exports;if(e in n){var t=n[e];delete n[e];var o={id:e,exports:{}};return a[e]=o,t.call(o.exports,o,o.exports),o.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){n[e]=t},t.parcelRequired7c6=o);var l=o("kEUo3"),r=o("5uEKZ");const s=document.querySelector(".feedback-form"),i=document.getElementsByName("email")[0],d=document.getElementsByName("message")[0],u={email:"",message:""};!function(){if((0,r.load)("feedback-form-state")){const t=(0,r.load)("feedback-form-state");e=t,i.value=e.email,d.value=e.message,function(e){u.email=e.email,u.message=e.message}(t)}else i.value="",d.value="",m();var e}();const f=e(l).throttle((()=>(0,r.save)("feedback-form-state",u)),500);function m(){u.email="",u.message=""}i.addEventListener("input",(e=>{u.email=e.target.value,f()})),d.addEventListener("input",(e=>{u.message=e.target.value,f()})),s.addEventListener("submit",(e=>{e.preventDefault(),console.log(u),s.reset(),(0,r.remove)("feedback-form-state"),m()}));
//# sourceMappingURL=03-feedback.a8492ce1.js.map