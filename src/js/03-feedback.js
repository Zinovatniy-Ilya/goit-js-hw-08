import throttle from 'lodash.throttle';

const LOCALSTORAGE_KEY = 'feedback-form-state';

const refs = {
    form: document.querySelector('.feedback-form'),
    mail: document.querySelector('.feedback-form input'),
    textarea: document.querySelector('.feedback-form textarea'),
};

const formData = {};

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onFormInput, 500));

saveForm()

function onFormInput(e) {
    formData[e.target.name] = e.target.value;
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmit(e) {
    e.preventDefault();
    e.target.reset();
    console.log('feedback-form-state', JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)));
    localStorage.removeItem(LOCALSTORAGE_KEY);
};

function saveForm() {
    const saveText = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
    
    if (saveText && saveText.email) {
    refs.mail.value = saveText.email;
    };

    if (saveText && saveText.message) {
    refs.textarea.value = saveText.message;
    };
  
};