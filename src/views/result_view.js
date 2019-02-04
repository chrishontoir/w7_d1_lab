const PubSub = require('../helpers/pub_sub.js');

const ResultView = function () {

};

ResultView.prototype.bindEvents = function() {
  PubSub.subscribe("PrimeNumber:result-calculated", (event) => {
    const numberChecker = event.detail;
    this.displayResult(numberChecker);
  });
}

ResultView.prototype.displayResult = function(result) {
  const resultElement = document.querySelector('#result');
  if (result === true) {
    resultElement.textContent = "Yes! It's a prime number!";
  }
  else {
    resultElement.textContent = "No! It's not a prime number!";
  };
}

module.exports = ResultView;
