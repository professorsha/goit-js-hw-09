const formSubmit = document.querySelector('form.feedback-form');
let email = document.querySelector('[name="email"]');
let message = document.querySelector('[name="message"]');
formSubmit.addEventListener('input', hadlerInput);
formSubmit.addEventListener('submit', hadlerSubmit);
let value = localStorage.getItem('feedback-form-state') ?? '';
try {
  let data = JSON.parse(value);
  console.log(data);
  email.value = data.email;
  message.value = data.message;
} catch {
  console.log('No info');
}
function hadlerInput(event) {
  const feedbackForm = {
    email: email.value,
    message: message.value,
  };
  let jsn = JSON.stringify(feedbackForm);
  localStorage.setItem('feedback-form-state', jsn);
}

function hadlerSubmit(event) {
  event.preventDefault();
  
  //   let data = JSON.parse(value);
  //  console.log(
  // `Об'єкт feedback-form-state:\n email: ${data.email} \n message: ${data.message}`
  //  );
  email.value = '';
  message.value = '';
  localStorage.removeItem('feedback-form-state');
}

