var throttle = require('lodash.throttle');

const form = document.querySelector('.feedback-form');
form.addEventListener('input', throttle(onInput, 500));
form.addEventListener('submit', onSubmit);

const VALUE_KEY = 'feedback-form-state';
const submitObj = {};

onInputValue();

function onInput(evt) {
  submitObj[evt.target.name] = evt.target.value;
  localStorage.setItem(VALUE_KEY, JSON.stringify(submitObj));
}

function onInputValue() {
  let formValue = JSON.parse(localStorage.getItem(VALUE_KEY));
  if (formValue) {
    const {
      elements: { email, message },
    } = form;
    email.value = formValue.email;
    message.value = formValue.message;
  }
}

function onSubmit(evt) {
  evt.preventDefault();
  const {
    elements: { email, message },
  } = evt.currentTarget;

  if (email.value.trim() === '' || message.value.trim() === '') {
    return alert('Fill in all fields');
  }

  console.log({ email: email.value.trim(), message: message.value.trim() });

  evt.currentTarget.reset();
  localStorage.removeItem(VALUE_KEY);
}

// const { email, message } = form;

// email.value = JSON.parse(localStorage.getItem(VALUE_KEY ?? ''));
// message.value = JSON.parse(localStorage.getItem(VALUE_KEY ?? ''));

// function onInput(e) {
//   e.preventDefault();
//   if (e.target === email) {
//     localStorage.setItem(
//       VALUE_KEY,
//       JSON.stringify((submitObj.email = e.target.value))
//     );
//   } else if (e.target === message) {
//     localStorage.setItem(
//       VALUE_KEY,
//       JSON.stringify((submitObj.message = e.target.value))
//     );
//   } else {
//     return;
//   }
//     // console.log(e.target.value);
// }

// function onSubmit(evt) {
//   evt.preventDefault();
//   if (!email.value) {
//     return;
//   }
//   if (!message.value) {
//     return;
//   }

//   console.log(submitObj);
//   evt.currentTarget.reset();
  // localStorage.removeItem(VALUE_KEY);
// }
