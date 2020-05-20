// Inspired by mozilla tests
console.log('Tests for ES6 arrow function instanceof and typeof operators');

var simpleArrowFunction = () => {
  ;
};

Object.getPrototypeOf(simpleArrowFunction);
simpleArrowFunction instanceof Function;
simpleArrowFunction.constructor == Function;
var successfullyParsed = true;
