import"./assets/styles-bbc74318.js";const a=document.querySelector("form.feedback-form");let o=document.querySelector('[name="email"]'),l=document.querySelector('[name="message"]');a.addEventListener("input",r);a.addEventListener("submit",s);function r(e){const t={email:o.value,message:l.value};let n=JSON.stringify(t);localStorage.setItem("feedback-form-state",n)}const m=localStorage.getItem("feedback-form-state")??"";try{let e=JSON.parse(m);console.log(e)}catch{console.log("No info")}function s(e){e.preventDefault();let t=JSON.parse(m);console.log(`Об'єкт feedback-form-state:
 email: ${t.email} 
 message: ${t.message}`),o.value="",l.value="",localStorage.removeItem("feedback-form-state")}
//# sourceMappingURL=commonHelpers2.js.map
