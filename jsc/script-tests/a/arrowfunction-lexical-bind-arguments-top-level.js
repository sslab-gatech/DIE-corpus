console.log('Tests for ES6 arrow function lexical bind of arguments on top level');

let foo = () => arguments;

let boo = () => arguments[0];

let bar = error => error ? arguments : 'no-error';

try {
  foo();
} catch (e) {
  ;
}

try {
  boo();
} catch (e) {
  ;
}

try {
  bar(true);
} catch (e) {
  ;
}

bar(false);
var successfullyParsed = true;
