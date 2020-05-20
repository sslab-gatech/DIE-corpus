console.log("This test checks the behavior of the for-of construct.");
var testArray = [1, 2, 3, 4, 5, 6];
var i = 0;

for (var value of testArray) {
  value;
}

testArray.length;
var i = 0;

for (var key of testArray.keys()) {
  key;
}

testArray.length;
var i = 0;

for (this.prop1 of testArray.keys()) {
  this.prop1;
}

testArray.length;
var i = 0;
var prop2 = "asdf";

for (this[prop2] of testArray.keys()) {
  this[prop2];
}

testArray.length;
var i = 0;

for (var [key, value] of testArray.entries()) {
  key;
  value;
}

testArray.length;
var i = 0;

for (var [key, value] of testArray.entries()) {
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
var i = 0;

for ([key, value] of testArray.entries()) {
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
