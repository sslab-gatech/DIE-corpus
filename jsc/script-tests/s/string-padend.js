console.log("This test checks the String.prototype.padEnd.");
String.prototype.padEnd.length;
String.prototype.padEnd.name;
Object.getOwnPropertyDescriptor(String.prototype, "padEnd").configurable;
Object.getOwnPropertyDescriptor(String.prototype, "padEnd").enumerable;
Object.getOwnPropertyDescriptor(String.prototype, "padEnd").writable;
Object.getOwnPropertyDescriptor(String.prototype, "padEnd").get;
Object.getOwnPropertyDescriptor(String.prototype, "padEnd").set;
Object.getOwnPropertyDescriptor(String.prototype, "padEnd").value;
'foo'.padEnd();
'foo'.padEnd(+0);
'foo'.padEnd(-0);
'foo'.padEnd(1);
'foo'.padEnd(2);
'foo'.padEnd(-2);
'foo'.padEnd(10);
'foo'.padEnd(10, undefined);
'foo'.padEnd(10, 'x');
'foo'.padEnd(10.5, 'z');
'foo'.padEnd(10, 'bar');
'foo'.padEnd(10, '123456789');
'foo'.padEnd(999, '');
''.padEnd(1, '');
''.padEnd(2, 'bar');
'x'.padEnd(2, 'bar');
'xx'.padEnd(2, 'bar');
'xx'.padEnd(Math.PI, 'bar'); // Coerce length (ToLength).

''.padEnd(true, 'ABC');
''.padEnd(false, 'ABC');
''.padEnd(null, 'ABC');
''.padEnd({}, 'ABC');
''.padEnd(NaN, 'ABC'); // Coerce fillString (ToString).

'ABC'.padEnd(10, true);
'ABC'.padEnd(10, false);
'ABC'.padEnd(10, null);
'ABC'.padEnd(10, {});
'ABC'.padEnd(10, NaN); // Check out of memory errors.

try {
  "x".padEnd(Infinity, "");
} catch (e) {
  ;
}

try {
  "x".padEnd(Infinity, "x");
} catch (e) {
  ;
}

try {
  "x".padEnd(0x80000000, "x");
} catch (e) {
  ;
}

try {
  "x".padEnd(0xFFFFFFFF, "x");
} catch (e) {
  ;
} // Check side-effects.


let sideEffects = "";
let thisObject = new String("foo bar");
let lengthObject = new Number(10);
let fillObject = new String("X");
sideEffects = "";

thisObject.toString = function () {
  sideEffects += "A";
  return this;
};

lengthObject.valueOf = function () {
  sideEffects += "B";
  return this;
};

fillObject.toString = function () {
  sideEffects += "C";
  return this;
};

String.prototype.padEnd.call(thisObject, lengthObject, fillObject);
sideEffects;
sideEffects = "";

thisObject.toString = function () {
  throw "ERROR";
};

lengthObject.valueOf = function () {
  sideEffects += "B";
  return this;
};

fillObject.toString = function () {
  sideEffects += "C";
  return this;
};

try {
  String.prototype.padEnd.call(thisObject, lengthObject, fillObject);
} catch (e) {
  ;
}

sideEffects;
sideEffects = "";

thisObject.toString = function () {
  sideEffects += "A";
  return this;
};

lengthObject.valueOf = function () {
  throw "ERROR";
};

fillObject.toString = function () {
  sideEffects += "C";
  return this;
};

try {
  String.prototype.padEnd.call(thisObject, lengthObject, fillObject);
} catch (e) {
  ;
}

sideEffects;
sideEffects = "";

thisObject.toString = function () {
  sideEffects += "A";
  return this;
};

lengthObject.valueOf = function () {
  sideEffects += "B";
  return this;
};

fillObject.toString = function () {
  throw "ERROR";
  return this;
};

try {
  String.prototype.padEnd.call(thisObject, lengthObject, fillObject);
} catch (e) {
  ;
}

sideEffects;
