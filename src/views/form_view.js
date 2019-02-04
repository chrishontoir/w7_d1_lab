const PubSub = require('../helpers/pub_sub.js');

const FormView = function() {

};

FormView.prototype.bindEvents = function() {
  const form = document.querySelector('#prime-checker-form');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const inputtedNumber = event.target.number.value;
    console.log("inputted number:", inputtedNumber);
    PubSub.publish("FormView:number-submitted", inputtedNumber);
    const container = document.querySelector('.content')
    container.classList.add('content-extended');
    const input = document.querySelector('#number');
    input.focus();
  });
}

module.exports = FormView;
