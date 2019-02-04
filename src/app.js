const FormView = require('./views/form_view.js');
const PrimeNumber = require('./models/prime_number.js');

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  const formView = new FormView();
  formView.bindEvents();

  const primeNumber = new PrimeNumber();
  primeNumber.bindEvents();
});
