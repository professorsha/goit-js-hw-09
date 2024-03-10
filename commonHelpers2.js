import"./assets/styles-bbc74318.js";const l=document.querySelector("form.feedback-form");let o=document.querySelector('[name="email"]'),m=document.querySelector('[name="message"]');l.addEventListener("input",n);l.addEventListener("submit",r);let a=localStorage.getItem("feedback-form-state");if(a){const e=JSON.parse(a);o.value=e.email,m.value=e.message}function n(e){e.preventDefault();const t={email:o.value,message:m.value},s=JSON.stringify(t);localStorage.setItem("feedback-form-state",s)}function r(e){e.preventDefault();const t=JSON.parse(a);console.log(`Об'єкт feedback-form-state:
 email: ${t.email} 
 message: ${t.message}`),document.getElementById("email").value="",m.value="",localStorage.removeItem("feedback-form-state")}
//# sourceMappingURL=commonHelpers2.js.map
