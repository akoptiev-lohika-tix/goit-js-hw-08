import _ from 'lodash';
import { save, load, remove } from './storage';

const LOCALSTORAGE_KEY = 'feedback-form-state';
const form = document.querySelector('.feedback-form');
const emailInput = document.getElementsByName('email')[0];
const messageInput = document.getElementsByName('message')[0];

const feedbackFormState = {
  email: '',
  message: '',
};

updateData();

const throttledSave = _.throttle(
  () => save('feedback-form-state', feedbackFormState),
  500
);

emailInput.addEventListener('input', event => {
  feedbackFormState.email = event.target.value;
  throttledSave();
});

messageInput.addEventListener('input', event => {
  feedbackFormState.message = event.target.value;
  throttledSave();
});

form.addEventListener('submit', event => {
  event.preventDefault();
  console.log(feedbackFormState);

  form.reset();
  remove(LOCALSTORAGE_KEY);
});

function updateData() {
  if (!load(LOCALSTORAGE_KEY)) {
    emailInput.value = '';
    messageInput.value = '';
    feedbackFormState.email = '';
    feedbackFormState.message = '';
  } else {
    const dataFromStorage = load(LOCALSTORAGE_KEY);
    emailInput.value = dataFromStorage.email;
    messageInput.value = dataFromStorage.message;
    feedbackFormState.email = dataFromStorage.email;
    feedbackFormState.message = dataFromStorage.message;
  }
}
