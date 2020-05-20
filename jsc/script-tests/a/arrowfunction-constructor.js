console.log('Tests for ES6 arrow function no constructor');

var simpleArrowFunction = () => {
  ;
};

try {
  new simpleArrowFunction();
} catch (e) {
  ;
}

var successfullyParsed = true;
