import throttle from 'lodash.throttle';
const formData = {};
let refs = { 
    form: document.querySelector('.feedback-form'),
    email: document.querySelector('.feedback-form input'),
    email: document.querySelector('.feedback-form textarea'),
}
refs.form.addEventListener('submit', formSubmit);
refs.form.addEventListener('input', throttle(formInput, 500));

populateOnFormInput();

function formSubmit(e) {
    e.preventDefault();
    e.currentTarget.reset();
    localStorage.removeItem('feedback-form-state');
    console.log("Delete text");
}
function formInput(e) {
    formData[e.target.name] = e.target.value;
    console.log(formData);
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}
function populateOnFormInput() {
  const userData = JSON.parse(localStorage.getItem(STORAGE_KEY));
   if(userData && Object.values(userData) !== [ ] ) {
    form.email.value = userData.email;
    form.message.value = userData.message;
    formData.email = userData.email;
    formData.message = userData.message;
   }
}