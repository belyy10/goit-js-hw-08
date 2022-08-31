import throttle from 'lodash.throttle';
const refs = {
    textarea: document.querySelector('textarea[name=message]'),
    form: document.querySelector ('.feedback-form'),
    email: document.querySelector('input[name="email"]')
}

let formData = {};
const STORAGE_KEY = 'feedback-form-state';

refs.form.addEventListener('submit', onformSubmit);
refs.form.addEventListener('input',throttle(onTextAreaInput,500));
populateTextarea();
function onTextAreaInput (e){
        formData[e.target.name] = e.target.value;
        localStorage.setItem(STORAGE_KEY,JSON.stringify(formData))
}
function onformSubmit (e){
    e.preventDefault() ;
    e.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY)
    console.log(formData)
}

function populateTextarea () {
    const savedMessage = localStorage.getItem(STORAGE_KEY);
    
    if(savedMessage) {
        formData = JSON.parse (savedMessage)
        console.log(formData)
            if (formData.email) {
                refs.email.value = formData.email
            }
            if (formData.message) {
                refs.textarea.value = formData.message
            }
    }
}

