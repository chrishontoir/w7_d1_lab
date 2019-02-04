const PubSub = require('../helpers/pub_sub.js');

const PrimeNumber = function() {

};

PrimeNumber.prototype.bindEvents = function () {
  PubSub.subscribe("FormView:number-submitted", (event) => {
    const inputtedNumber = event.detail;
    const result = this.numberIsPrime(inputtedNumber);
    PubSub.publish("PrimeNumber:result-calculated", result);
  });
}






PrimeNumber.prototype.numberIsPrime = function (number) {
  if (number <= 1) {
    return false;
  }
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
        return false;
    }
  }
  return true;
};

module.exports = PrimeNumber;
