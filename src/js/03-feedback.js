const form = document.querySelector('.feedback-form');
const input = document.querySelector('input[name="email"]');
const textarea = document.querySelector('textarea[name="message"]');
const submitBtn = document.querySelector('button[type="submit"]');
const DATAFORM_KEY = 'feedback-form-state';

form.addEventListener('input', inputExchangeDataWithStorage);

updateData();

function inputExchangeDataWithStorage(e) {
  // e.preventDefault();

  const dataInput = { email, message };
  const {
    elements: { email, message },
  } = e.currentTarget;

  dataInput.email = `${email.value}`;
  dataInput.message = `${message.value}`;

  localStorage.setItem(DATAFORM_KEY, JSON.stringify(dataInput));
}

// function updateData() {
//   try {
//     const savedData = localStorage.getItem(DATAFORM_KEY);
//     return (parsedData = null ? undefined : JSON.parse(savedData));
//   } catch (error) {
//     console.error('Get state error: ', error.message);
//   }

//   console.log('parsedData', parsedData);

//   input.value = parsedData.email || '';
//   textarea.textContent = parsedData.message || '';
// }

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
