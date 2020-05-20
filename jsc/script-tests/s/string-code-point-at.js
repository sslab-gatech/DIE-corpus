console.log("Test the basic behaviors of String.codePointAt");
String.codePointAt;
typeof String.prototype.codePointAt; // Function properties.

String.prototype.codePointAt.length;
String.prototype.codePointAt.name;
Object.getOwnPropertyDescriptor(String.prototype, "codePointAt").configurable;
Object.getOwnPropertyDescriptor(String.prototype, "codePointAt").enumerable;
Object.getOwnPropertyDescriptor(String.prototype, "codePointAt").writable; // The function should only be on the prototype chain, not on the object themselves.

"foo".hasOwnProperty("codePointAt");
new String("bar").hasOwnProperty("codePointAt"); // Some simple cases.

"".codePointAt(0);
"".codePointAt(1);
"Été".codePointAt(0);
"Été".codePointAt(1);
"Été".codePointAt(2);
"Été".codePointAt(3);
"ウェブキット".codePointAt(0);
"ウェブキット".codePointAt(1);
"ウェブキット".codePointAt(2);
"ウェブキット".codePointAt(3);
"ウェブキット".codePointAt(4);
"ウェブキット".codePointAt(5);
"ウェブキット".codePointAt(6); // Object coercion.

try {
  "".codePointAt.call(null, 0);
} catch (e) {
  ;
}

try {
  "".codePointAt.call(undefined, 0);
} catch (e) {
  ;
}

"".codePointAt.call(0, 0);
"".codePointAt.call(Math.PI, 0);
"".codePointAt.call(Math.PI, 1);
"".codePointAt.call(Math.PI, 3);
"".codePointAt.call(true, 3);
"".codePointAt.call(false, 3);
"".codePointAt.call(new Object(), 3);

try {
  "".codePointAt.call(Symbol("WebKit"), 3);
} catch (e) {
  ;
} // toString.


var objectWithCustomToString = {
  toString: function () {
    return "ø";
  }
};
"".codePointAt.call(objectWithCustomToString, 0);
var objectThrowingOnToString = {
  toString: function () {
    throw "Hehe";
  }
};

try {
  "".codePointAt.call(objectThrowingOnToString, 0);
} catch (e) {
  ;
}

var objectCountingToString = {
  counter: 0,
  toString: function () {
    ++this.counter;
    return this.counter;
  }
};
"".codePointAt.call(objectCountingToString, 0);
objectCountingToString.counter; // ToNumber.

var objectWithCustomValueOf = {
  toString: function () {
    return "5";
  },
  valueOf: function () {
    return 1;
  }
};
"abcde".codePointAt(objectWithCustomValueOf); // The second object is never converted to number if the first object did not convert to string.

var objectRecordsValueOf = {
  valueOfEvaluated: false,
  valueOf: function () {
    this.valueOfEvaluated = true;
    return 1;
  }
};

try {
  "".codePointAt.call(null, objectRecordsValueOf);
} catch (e) {
  ;
}

try {
  "".codePointAt.call(undefined, objectRecordsValueOf);
} catch (e) {
  ;
}

try {
  "".codePointAt.call(Symbol("WebKit"), objectRecordsValueOf);
} catch (e) {
  ;
}

try {
  "".codePointAt.call(objectThrowingOnToString, objectRecordsValueOf);
} catch (e) {
  ;
}

objectRecordsValueOf.valueOfEvaluated; // Evaluation order.

var evaluationOrderRecorder = {
  methodsCalled: [],
  toString: function () {
    this.methodsCalled.push("toString");
    return "foobar";
  },
  valueOf: function () {
    this.methodsCalled.push("valueOf");
    return 5;
  }
};
"".codePointAt.call(evaluationOrderRecorder, evaluationOrderRecorder);
evaluationOrderRecorder.methodsCalled.toString(); // Weird positions.

"abc".codePointAt(NaN);
"abc".codePointAt(-0);
"abc".codePointAt(-0.0);
"abc".codePointAt(-0.05);
"abc".codePointAt(-0.999);
"abc".codePointAt(0.4);
"abc".codePointAt(0.9);
"abc".codePointAt(2.9999); // Out of bound positions.

"abc".codePointAt(-1);
"abc".codePointAt(4);
var str = "abc";
str.codePointAt(str.length);
"abc".codePointAt(4.1);
"abc".codePointAt(Number.POSITIVE_INFINITY);
"abc".codePointAt(Number.NEGATIVE_INFINITY); // Non-number as positions.

"abc".codePointAt(null);
"abc".codePointAt(undefined);
"abc".codePointAt("");
"abc".codePointAt("WebKit!");
"abc".codePointAt(new Object());

try {
  "abc".codePointAt(Symbol("WebKit"));
} catch (e) {
  ;
} // The following are using special test functions because of limitations of WebKitTestRunner when handling strings with invalid codepoints.
// When transfering the text of a test, WebKitTestRunner converts it to a UTF-8 C String. Not all invalid code point can be represented.
// If first < 0xD800 or first > 0xDBFF or position+1 = size, return first.


function testLeadSurrogateOutOfBounds() {
  return "\uD7FF\uDC00".codePointAt(0) === 0xd7ff && "\uD7FF\uDC00".codePointAt(1) === 0xdc00 && "\uD7FF\uDC00".codePointAt(2) === undefined && "\uDC00\uDC00".codePointAt(0) === 0xdc00 && "\uDC00\uDC00".codePointAt(1) === 0xdc00 && "\uDC00\uDC00".codePointAt(2) === undefined;
}

testLeadSurrogateOutOfBounds();

function testLeadSurrogateAsLastCharacter() {
  return "abc\uD800".codePointAt(3) === 0xd800;
}

testLeadSurrogateAsLastCharacter(); // If second < 0xDC00 or second > 0xDFFF, return first.

function testTrailSurrogateOutOfbounds() {
  return "\uD800\uDBFF".codePointAt(0) === 0xd800 && "\uD800\uDBFF".codePointAt(1) === 0xdbff && "\uD800\uDBFF".codePointAt(2) === undefined && "\uD800\uE000".codePointAt(0) === 0xd800 && "\uD800\uE000".codePointAt(1) === 0xe000 && "\uD800\uE000".codePointAt(2) === undefined;
}

testTrailSurrogateOutOfbounds(); // Null in a string.

function testAccessNullInString() {
  return "a\u0000b".codePointAt(0) === 97 && "a\u0000b".codePointAt(1) === 0 && "a\u0000b".codePointAt(2) === 98 && "a\u0000b".codePointAt(3) === undefined;
}

testAccessNullInString(); // Normal combinations of surrogates.

function testNormalCombinationOfSurrogates() {
  return "\uD800\uDC00".codePointAt(0) === 65536 && "\uD800\uDC00".codePointAt(1) === 56320 && "\uD800\uDC00".codePointAt(2) === undefined;
}

testNormalCombinationOfSurrogates();
