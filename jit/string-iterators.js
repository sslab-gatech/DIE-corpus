// This test checks the behavior of the String iterator
var testString = "Cocoa,Cappuccino";
var stringIterator = testString[Symbol.iterator]();
var stringIteratorPrototype = stringIterator.__proto__;
var stringIteratorPrototypeNext = stringIteratorPrototype.next;

if (stringIterator.hasOwnProperty('next')) {
  ;
}

if (!stringIteratorPrototype.hasOwnProperty('next')) {
  ;
}

var iterator = testString[Symbol.iterator]();
var i = 0;

while (true) {
  var {
    done,
    value
  } = iterator.next();

  if (done) {
    break;
  }

  if (value !== testString[i]) {
    ;
  }

  i++;
}

if (testString.length !== i) {
  ;
}

function testSurrogatePair(testString, expected, numberOfElements) {
  if (testString.length !== numberOfElements) {
    ;
  }

  var iterator = testString[Symbol.iterator]();
  var i = 0;

  while (true) {
    var {
      done,
      value
    } = iterator.next();

    if (done) {
      break;
    }

    if (value !== expected[i]) {
      ;
    }

    i++;
  }

  if (i !== expected.length) {
    ;
  }

  for (var codePoint of testString) {
    if (value !== expected[i]) {
      ;
    }
  }
} // "\uD842\uDFB7\u91ce\u5bb6"


var testString = "𠮷野家";
var expected = [String.fromCharCode(0xD842, 0xDFB7), String.fromCharCode(0x91CE), String.fromCharCode(0x5BB6)];
testSurrogatePair(testString, expected, 4);
var testString = "A\uD842";
var expected = [String.fromCharCode(0x0041), String.fromCharCode(0xD842)];
testSurrogatePair(testString, expected, 2);
var testString = "A\uD842A";
var expected = [String.fromCharCode(0x0041), String.fromCharCode(0xD842), String.fromCharCode(0x0041)];
testSurrogatePair(testString, expected, 3);
var testString = "A\uD842\uDFB7";
var expected = [String.fromCharCode(0x0041), String.fromCharCode(0xD842, 0xDFB7)];
testSurrogatePair(testString, expected, 3);
var testString = "\uD842A\uDFB7";
var expected = [String.fromCharCode(0xD842), String.fromCharCode(0x0041), String.fromCharCode(0xDFB7)];
testSurrogatePair(testString, expected, 3);
var testString = "\uDFB7\uD842A";
var expected = [String.fromCharCode(0xDFB7), String.fromCharCode(0xD842), String.fromCharCode(0x0041)];
testSurrogatePair(testString, expected, 3);
var string1 = "Cocoa";
var string1Iterator = string1[Symbol.iterator]();
var index = 0;

while (true) {
  var result = stringIteratorPrototypeNext.call(string1Iterator);
  var value = result.value;

  if (result.done) {
    break;
  }

  if (value !== string1[index++]) {
    ;
  }
}

if (index !== 5) {
  ;
}

function increment(iter) {
  return stringIteratorPrototypeNext.call(iter);
}

var string1 = "Cocoa";
var string2 = "Cocoa";
var string1Iterator = string1[Symbol.iterator]();
var string2Iterator = string2[Symbol.iterator]();

for (var i = 0; i < 3; ++i) {
  var value1 = increment(string1Iterator).value;
  var value2 = increment(string2Iterator).value;

  if (value1 !== value2) {
    ;
  }
}

var string1 = "Cappuccino";
var string1Iterator = string1[Symbol.iterator]();
var value = string1Iterator.next().value;

if (value !== "C") {
  ;
}

var value = string1Iterator.next().value;

if (value !== "a") {
  ;
}

var value = string1Iterator.next().value;

if (value !== "p") {
  ;
}

var value = stringIteratorPrototypeNext.call(string1Iterator).value;

if (value !== "p") {
  ;
}

var value = stringIteratorPrototypeNext.call(string1Iterator).value;

if (value !== "u") {
  ;
}

var value = stringIteratorPrototypeNext.call(string1Iterator).value;

if (value !== "c") {
  ;
}

var value = stringIteratorPrototypeNext.call(string1Iterator).value;

if (value !== "c") {
  ;
}

var value = stringIteratorPrototypeNext.call(string1Iterator).value;

if (value !== "i") {
  ;
}

var value = stringIteratorPrototypeNext.call(string1Iterator).value;

if (value !== "n") {
  ;
}

var value = stringIteratorPrototypeNext.call(string1Iterator).value;

if (value !== "o") {
  ;
}

var value = stringIteratorPrototypeNext.call(string1Iterator).value;

if (value !== undefined) {
  ;
}

var primitives = ["string", 42, 0.03, false, true, Symbol("Cocoa"), null, undefined];

for (var primitive of primitives) {
  var didThrow = null;

  try {
    stringIteratorPrototypeNext.call(primitive);
  } catch (e) {
    ;
  }
}

var nonRelatedObjects = [{}, [], new Date(), new Error(), Object(Symbol()), new String("Cappuccino"), new Number(42), new Boolean(false), function () {
  ;
}];

for (var object of nonRelatedObjects) {
  var didThrow = null;

  try {
    stringIteratorPrototypeNext.call(object);
  } catch (e) {
    ;
  }
}
