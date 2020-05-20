console.log('Tests for ES6 arrow function nested declaration');
console.log("af = a => b => a");

var af = a => b => a;

af('ABC')('DEF');
var successfullyParsed = true;
