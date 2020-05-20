// Inspired by mozilla tests
console.log('Tests for ES6 arrow function toString() method');
console.log('var simpleArrowFunction = () => {}');

var simpleArrowFunction = () => {
  ;
};

simpleArrowFunction.toString();
(x => {
  x + 1;
}).toString();
(x => x + 1).toString();
console.log('var f0 = x => x');

var f0 = x => x;

f0.toString();
console.log('var f1 = () => this');

var f1 = () => this;

f1.toString();
console.log('var f2 = x => { return x; };');

var f2 = x => {
  return x;
};

f2.toString();
console.log('var f3 = (x, y) => { return x + y; };');

var f3 = (x, y) => {
  return x + y;
};

f3.toString();

function foo(x) {
  return x.toString();
}

;
console.log('function foo(x) { return x.toString()};');
foo(x => x);

var a = z => z * 2,
    b = () => ({});

console.log('var a = z => z*2, b = () => ({});');
a.toString();
b.toString();
var arrExpr = [y => y + 1, x => x];
console.log('var arrExpr = [y=>y + 1, x=>x];');
arrExpr[0].toString();
arrExpr[1].toString();
var arrBody = [y => {
  y + 1;
}, x => {
  x;
}];
console.log('var arrBody  = [y=>{ y + 1 }, x=>{ x }];');
arrBody[0].toString();
arrBody[1].toString();
var successfullyParsed = true;
