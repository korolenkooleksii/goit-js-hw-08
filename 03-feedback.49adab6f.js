var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,i=/^0o[0-7]+$/i,a=parseInt,u="object"==typeof e&&e&&e.Object===Object&&e,f="object"==typeof self&&self&&self.Object===Object&&self,c=u||f||Function("return this")(),l=Object.prototype.toString,s=Math.max,m=Math.min,d=function(){return c.Date.now()};function v(e,t,n){var o,r,i,a,u,f,c=0,l=!1,v=!1,y=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=o,i=r;return o=r=void 0,c=t,a=e.apply(i,n)}function h(e){return c=e,u=setTimeout(x,t),l?b(e):a}function S(e){var n=e-f;return void 0===f||n>=t||n<0||v&&e-c>=i}function x(){var e=d();if(S(e))return T(e);u=setTimeout(x,function(e){var n=t-(e-f);return v?m(n,i-(e-c)):n}(e))}function T(e){return u=void 0,y&&o?b(e):(o=r=void 0,a)}function j(){var e=d(),n=S(e);if(o=arguments,r=this,f=e,n){if(void 0===u)return h(f);if(v)return u=setTimeout(x,t),b(f)}return void 0===u&&(u=setTimeout(x,t)),a}return t=p(t)||0,g(n)&&(l=!!n.leading,i=(v="maxWait"in n)?s(p(n.maxWait)||0,t):i,y="trailing"in n?!!n.trailing:y),j.cancel=function(){void 0!==u&&clearTimeout(u),c=0,o=f=r=u=void 0},j.flush=function(){return void 0===u?a:T(d())},j}function g(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function p(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==l.call(e)}(e))return NaN;if(g(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=g(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(n,"");var u=r.test(e);return u||i.test(e)?a(e.slice(2),u?2:8):o.test(e)?NaN:+e}t=function(e,t,n){var o=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return g(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),v(e,t,{leading:o,maxWait:t,trailing:r})};const y=document.querySelector(".feedback-form");let b=document.querySelector('input[name="email"]'),h=document.querySelector('textarea[name="message"]');document.querySelector('button[type="submit"]');function S(e){try{const t=localStorage.getItem(e);return null===t?void 0:JSON.parse(t)}catch(e){console.error("Get state error: ",e.message)}}y.addEventListener("input",t((function(e){const{elements:{email:t,message:n}}=e.currentTarget;!function(e,t){try{const n=JSON.stringify(t);localStorage.setItem(e,n)}catch(e){console.error("Set state error: ",e.message)}}("feedback-form-state",function(e,t){return{email:e,message:t}}(t.value,n.value))}),500)),y.addEventListener("submit",(function(e){e.preventDefault();const{elements:{email:t,message:n}}=e.currentTarget,o=S("feedback-form-state");""===t.value||""===n.value?alert("Please fill in all the fields!"):(console.log("feedback-form-state",o),h.textContent="",y.reset(),localStorage.removeItem("feedback-form-state"))})),function(){const e=S("feedback-form-state");void 0===e?(b.value="",h.textContent=""):(b.value=e.email||"",h.textContent=e.message||"")}();
//# sourceMappingURL=03-feedback.49adab6f.js.map
