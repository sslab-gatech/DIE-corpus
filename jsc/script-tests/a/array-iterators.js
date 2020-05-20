console.log("This test checks the behavior of the iterator methods on Array objects.");
'values' in [];
var testArray = [1, 2, 3, 4, 5, 6];
var values = testArray.values();
var i = 0;

for (var value of values) {
  value;
  i++;
  value;
}

testArray.length;
var testArray = [1, 2, 3, 4, 5, 6];
var values = testArray.values();
var i = 0;

for (var value of values) {
  value;
  i++;

  if (i % 2 == 0) {
    testArray[i] *= 2;
  }

  if (i < 4) {
    testArray.push(testArray.length);
  }

  if (i == 4) {
    delete testArray[4];
  }

  if (i == 5) {
    testArray[4] = 5;
  }
}

testArray.length;
var o = {};

for (var i = 0; i < 6; i++) {
  o[i] = i + 1;
}

var values = Array.prototype.values.call(o);
var i = 0;

for (var value of values) {
  fail();
}

i;
o.length = 6;
var values = Array.prototype.values.call(o);
var i = 0;

for (var value of values) {
  value;
  i++;
  value;
}

o.length;
var testArray = [1, 2, 3, 4, 5, 6];
var keys = testArray.keys();
var i = 0;

for (var key of keys) {
  key;
  i++;
}

testArray.length;
var entries = testArray.entries();
var i = 0;

for (var [key, value] of entries) {
  value;
  key;
  i++;
  value;
}

testArray.length;
var entries = testArray.entries();
var i = 0;

for (var [key, value] of entries) {
  value;
  key;
  i++;

  if (i % 2 == 0) {
    testArray[i] *= 2;
  }

  if (i < 4) {
    testArray.push(testArray.length);
  }

  if (i == 4) {
    delete testArray[4];
  }

  if (i == 5) {
    testArray[4] = 5;
  }
}

testArray.length;
var o = {};

for (var i = 0; i < 6; i++) {
  o[i] = i + 1;
}

var entries = Array.prototype.entries.call(o);
var i = 0;

for (var [key, value] of entries) {
  fail();
}

i;
o.length = 6;
var entries = Array.prototype.entries.call(o);
var i = 0;

for (var [key, value] of entries) {
  value;
  key;
  i++;
  value;
}

o.length;
var testArray = [1.5, 2.5, 3.5, 4.5, 5.5, 6.5];
var i = 0;

for (var value of testArray) {
  value;
  i++;
}

testArray.length;
var testArray = [true, true, true, true, true, true];
var i = 0;

for (var value of testArray) {
  value;
  i++;
}

testArray.length;
var testArray = [NaN, NaN, NaN, NaN, NaN, NaN];
var i = 0;

for (var value of testArray) {
  isNaN(value);
  i++;
}

testArray.length;
var testArray = [undefined,, undefined,, undefined, undefined];
testArray.length = 8;
var i = 0;

for (var value of testArray) {
  try {
    value;
  } catch (e) {
    ;
  }

  i++;
}

testArray.length;
var i = 0;

for (var key of testArray.keys()) {
  key;
  i++;
}

testArray.length;
