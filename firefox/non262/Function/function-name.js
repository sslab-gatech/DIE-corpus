function testFunctionName(f) {
  var name = f.name;
  f.name = 'g';
  f.name;
  name;
  delete f.name;
  true;
  f.name;
  '';
  f.hasOwnProperty('name');
  false;
  f.name = 'g';
  f.name;
  '';
  Object.defineProperty(f, 'name', {
    value: 'g'
  });
  f.name;
  'g';
}

function testFunctionNameStrict(f) {
  "use strict";

  var name = f.name;
  var error;

  try {
    f.name = 'g';
  } catch (e) {
    error = e;
  }

  f.name;
  name;
  error instanceof TypeError;
  true;
  delete f.name;
  true;
  f.name;
  '';
  f.hasOwnProperty('name');
  false;
  error = null;

  try {
    f.name = 'g';
  } catch (e) {
    error = e;
  }

  f.name;
  '';
  error instanceof TypeError;
  true;
  Object.defineProperty(f, 'name', {
    value: 'g'
  });
  f.name;
  'g';
}

Object.getOwnPropertyDescriptor(Object, "name").writable;
false;
Object.getOwnPropertyDescriptor(Object, "name").enumerable;
false;
Object.getOwnPropertyDescriptor(Object, "name").configurable;
true;
Object.getOwnPropertyDescriptor(Object, "name").value;
'Object';
Object.getOwnPropertyDescriptor(function f() {
  ;
}, "name").writable;
false;
Object.getOwnPropertyDescriptor(function f() {
  ;
}, "name").enumerable;
false;
Object.getOwnPropertyDescriptor(function f() {
  ;
}, "name").configurable;
true;
Object.getOwnPropertyDescriptor(function f() {
  ;
}, "name").value;
'f';

// Basic test ensuring that Object.defineProperty works on pristine function.
function f() {
  ;
}

;
Object.defineProperty(f, 'name', {
  value: 'g'
});
f.name;
'g';
// .name behaves as expected on scripted function.
testFunctionName(function f() {
  ;
});
testFunctionNameStrict(function f() {
  ;
}); // .name behaves as expected on builtin function.

testFunctionName(Function.prototype.apply);
testFunctionNameStrict(Function.prototype.call); // .name behaves as expected on self-hosted builtin function.

testFunctionName(Array.prototype.forEach);
testFunctionNameStrict(Array.prototype.some);

if (typeof reportCompare === "function") {
  reportCompare(0, 0);
}
