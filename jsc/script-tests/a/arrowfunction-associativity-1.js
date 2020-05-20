console.log('Tests for ES6 arrow function nested declaration');
var af1, af2, af3;

af1 = af2 = af3 => af1 = af2 = af3;

console.log('af1 = af2 = af3 => af1 = af2 = af3');
af1;
af1(13);
af2;
af1;
var successfullyParsed = true;
