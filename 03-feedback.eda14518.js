!function(){var e=document.querySelector(".feedback-form"),t=(document.querySelector('input[name="email"]'),document.querySelector('textarea[name="message"]'),document.querySelector('button[type="submit"]'),"feedback-form-state");e.addEventListener("input",(function(e){var r=e.currentTarget.elements,o=r.email,a=r.message,n=function(e){try{var t=localStorage.getItem(e);return null===t?void 0:JSON.parse(t)}catch(e){console.error("Get state error: ",e.message)}}(t);console.log(n),void 0!==n?(o.textContent=n.email,a.textContent=n.message):console.log("currentData пустой");!function(e,t){try{var r=JSON.stringify(t);localStorage.setItem(e,r)}catch(e){console.error("Set state error: ",e.message)}}(t,function(e,t){return{email:e,message:t}}(o.value,a.value))}))}();
//# sourceMappingURL=03-feedback.eda14518.js.map
