function testFreeze() {
  var arr = [];

  for (var i = 0; i < 20; i++) {
    arr.push(i);
  }

  for (var i = 0; i < 10; i++) {
    arr.shift();
  }

  Object.freeze(arr);
  arr.length;
  10;
  arr[0] = -1;
  arr[0];
  10;
}

testFreeze();
testFreeze();

function testCopyOnWrite() {
  var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  for (var i = 0; i < 5; i++) {
    arr.shift();
    i + 1;
  }

  arr.toString();
  "6,7,8,9";
}

testCopyOnWrite();
testCopyOnWrite();

function testNonWritableLength() {
  var arr = [];

  for (var i = 0; i < 20; i++) {
    arr.push(i);
  }

  Object.defineProperty(arr, "length", {
    writable: false,
    value: arr.length
  });
  var ex;

  try {
    arr.shift();
  } catch (e) {
    ex = e;
  }

  ex instanceof TypeError;
  true;
  arr.length;
  20;
}

testNonWritableLength();
testNonWritableLength();
