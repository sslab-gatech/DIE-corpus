function testPopSimple() {
  var a = [4, 3, 2, 1, 0];
  Object.preventExtensions(a);

  for (var i = 0; i < 5; i++) {
    a.pop();
    i;
  }

  a.length;
  0;
  a = [1, 2, 3];
  Object.seal(a);

  for (var i = 0; i < 10; i++) {
    (() => a.pop())();

    TypeError;
  }

  a.toString();
  "1,2,3";
  a = [1, 2, 3];
  Object.freeze(a);

  for (var i = 0; i < 10; i++) {
    (() => a.pop())();

    TypeError;
  }

  a.toString();
  "1,2,3";
}

testPopSimple();

function testPopHoles() {
  var a = [1,, 3];
  Object.preventExtensions(a);
  a.pop();
  3;
  a.pop();
  undefined;
  a.pop();
  1;
  a.length;
  0;
  a = [1,,];
  Object.seal(a);
  a.pop();
  undefined;

  for (var i = 0; i < 10; i++) {
    (() => a.pop())();

    TypeError;
  }

  a.toString();
  "1";
  a = [1,,];
  Object.freeze(a);

  for (var i = 0; i < 10; i++) {
    (() => a.pop())();

    TypeError;
  }

  a.toString();
  "1,";
}

testPopHoles();

function testPushSimple() {
  var a = [1, 2, 3];
  Object.preventExtensions(a);

  for (var i = 0; i < 10; i++) {
    (() => a.push(4))();

    TypeError;
  }

  a.length;
  3;
  a.toString();
  "1,2,3";
  a = [1, 2, 3];
  Object.seal(a);

  for (var i = 0; i < 10; i++) {
    (() => a.push(4))();

    TypeError;
  }

  a.toString();
  "1,2,3";
  a = [1, 2, 3];
  Object.freeze(a);

  for (var i = 0; i < 10; i++) {
    (() => a.push(4))();

    TypeError;
  }

  a.toString();
  "1,2,3";
}

testPushSimple();

function testPushHoles() {
  var a = [,,,];
  Object.preventExtensions(a);

  for (var i = 0; i < 10; i++) {
    (() => a.push(4))();

    TypeError;
  }

  a.length;
  3;
  a.toString();
  ",,";
  a = [,,,];
  Object.seal(a);

  for (var i = 0; i < 10; i++) {
    (() => a.push(4))();

    TypeError;
  }

  a.toString();
  ",,";
  a = [,,,];
  Object.freeze(a);

  for (var i = 0; i < 10; i++) {
    (() => a.push(4))();

    TypeError;
  }

  a.toString();
  ",,";
}

testPushHoles();

function testReverseSimple() {
  var a = [1, 2, 3];
  Object.preventExtensions(a);
  a.reverse();
  a.toString();
  "3,2,1";
  a = [1, 2, 3];
  Object.seal(a);
  a.reverse();
  a.toString();
  "3,2,1";
  a = [1, 2, 3];
  Object.freeze(a);

  (() => a.reverse())();

  TypeError;
  a.toString();
  "1,2,3";
}

testReverseSimple();

function testReverseHoles() {
  var a = [1, 2,, 4];
  Object.preventExtensions(a);

  (() => a.reverse())();

  TypeError;
  a.toString();
  "4,,,1";
  a = [1, 2,, 4];
  Object.seal(a);

  (() => a.reverse())();

  TypeError;
  a.toString();
  "4,2,,1";
  a = [1, 2,, 4];
  Object.freeze(a);

  (() => a.reverse())();

  TypeError;
  a.toString();
  "1,2,,4";
}

testReverseHoles();

function testShiftSimple() {
  var a = [1, 2, 3];
  Object.preventExtensions(a);
  a.shift();
  1;
  a.toString();
  "2,3";

  for (var i = 0; i < 10; i++) {
    a.shift();
  }

  a.length;
  0;
  a = [1, 2, 3];
  Object.seal(a);

  for (var i = 0; i < 10; i++) {
    (() => a.shift())();

    TypeError;
  }

  a.toString();
  "3,3,3";
  a = [1, 2, 3];
  Object.freeze(a);

  for (var i = 0; i < 10; i++) {
    (() => a.shift())();

    TypeError;
  }

  a.toString();
  "1,2,3";
}

testShiftSimple();
testShiftSimple();

function testShiftHoles() {
  var a = [1, 2,, 4];
  Object.preventExtensions(a);

  for (var i = 0; i < 10; i++) {
    (() => a.shift())();

    TypeError;
  }

  a.toString();
  ",,,4";
  a = [1, 2,, 4];
  Object.seal(a);

  for (var i = 0; i < 10; i++) {
    (() => a.shift())();

    TypeError;
  }

  a.toString();
  "2,2,,4";
  a = [1, 2,, 4];
  Object.freeze(a);

  for (var i = 0; i < 10; i++) {
    (() => a.shift())();

    TypeError;
  }

  a.toString();
  "1,2,,4";
}

testShiftHoles();
testShiftHoles();

function testUnshiftSimple() {
  var a = [1, 2, 3];
  Object.preventExtensions(a);

  (() => a.unshift(0))();

  TypeError;
  a.toString();
  "1,2,3";
  a = [1, 2, 3];
  Object.seal(a);

  (() => a.unshift(0))();

  TypeError;
  a.toString();
  "1,2,3";
  a = [1, 2, 3];
  Object.freeze(a);

  (() => a.unshift(0))();

  TypeError;
  a.toString();
  "1,2,3";
}

testUnshiftSimple();

function testUnshiftHoles() {
  var a = [,,,];
  Object.preventExtensions(a);

  (() => a.unshift(0))();

  TypeError;
  a.toString();
  ",,";
  a = [,,,];
  Object.seal(a);

  (() => a.unshift(0))();

  TypeError;
  a.toString();
  ",,";
  a = [,,,];
  Object.freeze(a);

  (() => a.unshift(0))();

  TypeError;
  a.toString();
  ",,";
}

testUnshiftHoles();

function testSpliceDelete() {
  var a = [1, 2, 3];
  Object.preventExtensions(a);
  a.splice(1, 2);
  a.toString();
  "1";
  a = [1, 2, 3];
  Object.seal(a);

  (() => a.splice(1, 2))();

  TypeError;
  a.toString();
  "1,2,3";
  a = [1, 2, 3];
  Object.freeze(a);

  (() => a.splice(1, 2))();

  TypeError;
  a.toString();
  "1,2,3";
}

testSpliceDelete();

function testSpliceAdd() {
  var a = [1, 2, 3];
  Object.preventExtensions(a);

  (() => a.splice(2, 1, 4, 5))();

  TypeError;
  a.toString();
  "1,2,4";
  a = [1, 2, 3];
  Object.seal(a);

  (() => a.splice(2, 1, 4, 5))();

  TypeError;
  a.toString();
  "1,2,4";
  a = [1, 2, 3];
  Object.freeze(a);

  (() => a.splice(2, 1, 4, 5))();

  TypeError;
  a.toString();
  "1,2,3";
}

testSpliceAdd();

function testSortSimple() {
  var a = [3, 1, 2];
  Object.preventExtensions(a);
  a.sort();
  a.toString();
  "1,2,3";
  a = [3, 1, 2];
  Object.seal(a);
  a.sort();
  a.toString();
  "1,2,3";
  a = [3, 1, 2];
  Object.freeze(a);

  (() => a.sort())();

  TypeError;
  a.toString();
  "3,1,2";
}

testSortSimple();

function testSortHoles() {
  var a = [,, 3, 1, 2];
  Object.preventExtensions(a);

  (() => a.sort())();

  TypeError;
  a.toString();
  ",,3,1,2";
  a = [,, 3, 1, 2];
  Object.seal(a);

  (() => a.sort())();

  TypeError;
  a.toString();
  ",,3,1,2";
  a = [,, 3, 1, 2];
  Object.freeze(a);

  (() => a.sort())();

  TypeError;
  a.toString();
  ",,3,1,2";
}

testSortHoles();
