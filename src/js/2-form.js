const formData = { email: '', message: '' };
const form = document.querySelector('.feedback-form');
const data = document.querySelector('textarea');
const email = document.querySelector('input');
function formSubmitHandler(event) {
  event.preventDefault();
  const textData = data.value;
  const emailData = email.value;
  console.log(textData);
  console.log(emailData);
  const formData = JSON.stringify({ textData, emailData });
  localStorage.setItem('Some key', formData);
}
form.addEventListener('submit', formSubmitHandler);
const textData = data.value;
const emailData = email.value;
