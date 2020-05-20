function test1() {
  function push(arr, x) {
    return arr.push(x);
  }

  var arr = [];

  for (var i = 0; i < 100; i++) {
    push(arr, i);
    i + 1;
  }
}

test1();

function test2() {
  var arr;

  for (var i = 0; i < 60; i++) {
    arr = [];
    arr.push(3.3);
    1;
    arr.push(undefined);
    2;
    arr.push(true);
    3;
    arr.push(Math);
    4;
    arr.toString();
    "3.3,,true,[object Math]";
  }
}

test2();

function test3() {
  function push(arr, v) {
    arr.push(v);
  }

  for (var i = 0; i < 60; i++) {
    var arr = [];
    push(arr, null);
    push(arr, 3.14);
    push(arr, {});
    arr.toString();
    ",3.14,[object Object]";
  }
}

test3();
