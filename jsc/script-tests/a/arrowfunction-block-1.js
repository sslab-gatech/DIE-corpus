console.log('Tests for ES6 arrow function declaration body as block');
console.log('f = () => {}');

var f = () => {
  ;
};

typeof f();
console.log('g = () => ({})');

var g = () => ({});

typeof g();
var successfullyParsed = true;
