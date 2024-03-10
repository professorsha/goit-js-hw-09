// Під час сабміту форми очищай сховище і поля форми, а також виводь у консоль об'єкт з полями email, message та
//  їхніми поточними значеннями.

const formSubmit = document.querySelector('form.feedback-form');
let email = document.querySelector('[name="email"]');
let message = document.querySelector('[name="message"]');
formSubmit.addEventListener('input', hadlerInput);
formSubmit.addEventListener('submit', hadlerSubmit);
let value = localStorage.getItem('feedback-form-state');
if (value) {
  const data = JSON.parse(value);
  email.value = data.email;
  message.value = data.message;
}

function hadlerInput(event) {
  event.preventDefault();

  const feedbackForm = {
    email: email.value,
    message: message.value,
  };
  const jsn = JSON.stringify(feedbackForm);
  localStorage.setItem('feedback-form-state', jsn);
}
function hadlerSubmit(event) {
  event.preventDefault();
  const data = JSON.parse(value);
  console.log(
    `Об'єкт feedback-form-state:\n email: ${data.email} \n message: ${data.message}`
  );
  document.getElementById('email').value = '';
  
  message.value = '';
  localStorage.removeItem('feedback-form-state');
}
