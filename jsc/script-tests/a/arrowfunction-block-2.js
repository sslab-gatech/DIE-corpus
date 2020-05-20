console.log('Tests for ES6 arrow function declaration body as block');

var af = a => {
  a + 1;
};

typeof af(0);
var successfullyParsed = true;
