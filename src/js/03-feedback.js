const form = document.querySelector('.feedback-form');
const input = document.querySelector('input[name="email"]');
const textarea = document.querySelector('textarea[name="message"]');
const submitBtn = document.querySelector('button[type="submit"]');
const DATAFORM_KEY = 'feedback-form-state';

form.addEventListener('input', inputExchangeDataWithStorage);

function getSaveData() {
  
}

function inputExchangeDataWithStorage(e) {
  // e.preventDefault();

  const {
    elements: { email, message },
  } = e.currentTarget;

  // console.log(email);
  // console.log(message);

  const currentData = load(DATAFORM_KEY);
  console.log(currentData);

  // console.log('currentData', currentData);
  // email.textContent = currentData.email;
  // message.textContent = currentData.message;

  if (currentData !== undefined) {
    email.textContent = currentData.email;
    message.textContent = currentData.message;
  } else {
    console.log('currentData пустой');
  }

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
