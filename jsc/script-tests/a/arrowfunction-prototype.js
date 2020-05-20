// Inspired by mozilla tests
console.log('Tests for ES6 arrow function prototype property');

var af1 = () => {
  ;
};

console.log('() =>  {}');
typeof af1.prototype;
af1.hasOwnProperty('prototype');

var af2 = a => {
  a + 1;
};

console.log('(a) => {a + 1}');
typeof af2.prototype;
af2.hasOwnProperty('prototype');

var af3 = x => x + 1;

console.log('(x) =>  x + 1');
typeof af3.prototype;
af3.hasOwnProperty('prototype');

af1.prototype = function (x) {
  return x + 1;
};

console.log('af1.prototype = function (x) { return x + 1;}');
typeof af1.prototype;
af1.prototype.toString();
af1.hasOwnProperty('prototype');
delete af1.prototype;
console.log('delete af1.prototype');
typeof af1.prototype;
af1.hasOwnProperty('prototype');
var successfullyParsed = true;
