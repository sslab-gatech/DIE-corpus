console.log("This test checks the String.prototype.padStart.");
String.prototype.padStart.length;
String.prototype.padStart.name;
Object.getOwnPropertyDescriptor(String.prototype, "padStart").configurable;
Object.getOwnPropertyDescriptor(String.prototype, "padStart").enumerable;
Object.getOwnPropertyDescriptor(String.prototype, "padStart").writable;
Object.getOwnPropertyDescriptor(String.prototype, "padStart").get;
Object.getOwnPropertyDescriptor(String.prototype, "padStart").set;
Object.getOwnPropertyDescriptor(String.prototype, "padStart").value;
'foo'.padStart();
'foo'.padStart(+0);
'foo'.padStart(-0);
'foo'.padStart(1);
'foo'.padStart(2);
'foo'.padStart(-2);
'foo'.padStart(10);
'foo'.padStart(10, undefined);
'foo'.padStart(10, 'x');
'foo'.padStart(10.5, 'z');
'foo'.padStart(10, 'bar');
'foo'.padStart(10, '123456789');
'foo'.padStart(999, '');
''.padStart(1, '');
''.padStart(2, 'bar');
'x'.padStart(2, 'bar');
'xx'.padStart(2, 'bar');
'xx'.padStart(Math.PI, 'bar'); // Coerce length (ToLength).

''.padStart(true, 'ABC');
''.padStart(false, 'ABC');
''.padStart(null, 'ABC');
''.padStart({}, 'ABC');
''.padStart(NaN, 'ABC'); // Coerce fillString (ToString).

'ABC'.padStart(10, true);
'ABC'.padStart(10, false);
'ABC'.padStart(10, null);
'ABC'.padStart(10, {});
'ABC'.padStart(10, NaN); // Check out of memory errors.

try {
  "x".padStart(Infinity, "");
} catch (e) {
  ;
}

try {
  "x".padStart(Infinity, "x");
} catch (e) {
  ;
}

try {
  "x".padStart(0x80000000, "x");
} catch (e) {
  ;
}

try {
  "x".padStart(0xFFFFFFFF, "x");
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

String.prototype.padStart.call(thisObject, lengthObject, fillObject);
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
  String.prototype.padStart.call(thisObject, lengthObject, fillObject);
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
  String.prototype.padStart.call(thisObject, lengthObject, fillObject);
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
  String.prototype.padStart.call(thisObject, lengthObject, fillObject);
} catch (e) {
  ;
}

sideEffects;
