const form = document.getElementsByTagName('form')[0];
const inputForm = document.querySelector('.inputForm');
const errorInput = document.querySelector('.error');

// Verify validity of inputForm, if it's valid no error
inputForm.addEventListener(
  'input',
  function (event) {
    if (inputForm.validity.valid) {
      inputForm.className = 'inputForm';
      errorInput.className = 'error';
    }
  },
  false
);

// Verify validity of inputForm, if it's invalid error appears
form.addEventListener(
  'submit',
  function (event) {
    if (!inputForm.validity.valid) {
      inputForm.className = 'inputFormError';
      errorInput.className = 'errorActive';
      event.preventDefault();
    }
  },
  false
);

// clear inputForm when website reload
function clearInputForm() {
  document.querySelector('.inputForm').value = '';
}
clearInputForm();
