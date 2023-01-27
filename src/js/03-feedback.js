const throttle = require('lodash.throttle');

const form = document.querySelector('.feedback-form');
let input = document.querySelector('input[name="email"]');
let textarea = document.querySelector('textarea[name="message"]');
const submitBtn = document.querySelector('button[type="submit"]');
const DATAFORM_KEY = 'feedback-form-state';

form.addEventListener('input', throttle(inputDataInStorage, 500));
form.addEventListener('submit', submitFormData);

getSaveData();

function submitFormData(e) {
  e.preventDefault();

  const {
    elements: { email, message },
  } = e.currentTarget;
  const currentData = load(DATAFORM_KEY);

  if (email.value === '' || message.value === '') {
    alert('Please fill in all the fields!');
  } else {
    console.log(`${DATAFORM_KEY}`, currentData);

    textarea.textContent = '';
    form.reset();
    localStorage.removeItem(DATAFORM_KEY);
  }
}

function getSaveData() {
  const currentData = load(DATAFORM_KEY);

  if (currentData === undefined) {
    input.value = '';
    textarea.textContent = '';
  } else {
    input.value = currentData.email || '';
    textarea.textContent = currentData.message || '';
  }
}

function inputDataInStorage(e) {
  const {
    elements: { email, message },
  } = e.currentTarget;

  save(DATAFORM_KEY, createDataObject(email.value, message.value));
}

function createDataObject(email, message) {
  return {
    email,
    message,
  };
}

function save(key, value) {
  try {
    const serializedState = JSON.stringify(value);
    localStorage.setItem(key, serializedState);
  } catch (error) {
    console.error('Set state error: ', error.message);
  }
}

function load(key) {
  try {
    const serializedState = localStorage.getItem(key);
    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (error) {
    console.error('Get state error: ', error.message);
  }
}
