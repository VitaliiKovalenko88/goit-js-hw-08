import { refs } from './refs.js';
import throttle from 'lodash.throttle';

const KEEFORM_STATE = 'feedback-form-state';
const data = {};

const onInput = ({ target: { name, value } }) => {
  data[name] = value;
  localStorage.setItem(KEEFORM_STATE, JSON.stringify(data));
};

const onPageLoaded = () => {
  const statusLS = JSON.parse(localStorage.getItem(KEEFORM_STATE));
  if (statusLS) {
    data.email = statusLS.email;
    data.message = statusLS.message;
    refs.form.elements.email.value = statusLS.email;
    refs.form.elements.message.value = statusLS.message;
    return;
  }
  data.email = '';
  data.message = '';
  refs.form.addEventListener('input', throttle(onInput, 500));
};

const onSubmitForm = e => {
  e.preventDefault();
  e.currentTarget.reset();
  localStorage.removeItem(KEEFORM_STATE);

  console.log(data);
};

window.addEventListener('DOMContentLoaded', onPageLoaded);
refs.form.addEventListener('input', throttle(onInput, 500));
refs.form.addEventListener('submit', onSubmitForm);
