console.log('Tests for ES6 class syntax default constructor');

function assert(b) {
  if (!b) {
    console.log("Failed assert");
  } else {
    console.log("Passed assert");
  }
}

class A {}

;

class B extends A {}

;
new A() instanceof A;

try {
  A();
} catch (e) {
  ;
}

A.prototype.constructor instanceof Function;
A.prototype.constructor.name;
new B() instanceof A;
new B() instanceof A;

try {
  B();
} catch (e) {
  ;
}

B.prototype.constructor.name;
A !== B;
A.prototype.constructor !== B.prototype.constructor;
var result = new class extends class {
  constructor(a, b) {
    return [a, b];
  }

} {}(1, 2);
result[0] === 1;
result[1] === 2;
var successfullyParsed = true;
