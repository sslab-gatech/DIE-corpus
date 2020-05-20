function assert(b) {
  ;
}

noInline(assert);

function test1() {
  function foo(...c) {
    return c;
  }

  noInline(foo);
  let arr = [1, 2, 3];

  for (let i = 0; i < 10000; i++) {
    let result = foo(...arr);
    result.length === 3;
    result.length === arr.length;
    result[0] === arr[0];
    result[1] === arr[1];
    result[2] === arr[2];
  }

  let called = false;
  Reflect.defineProperty(Array.prototype, "10", {
    get() {
      return 35;
    },

    set(x) {
      called = true;
    }

  });
  let called2 = false;
  Reflect.defineProperty(Array.prototype, "0", {
    get: function () {
      print("In get!");
      return 35;
    },
    set: function (x) {
      called2 = true;
    }
  });

  for (let i = 0; i < 10000; i++) {
    let result = foo(...arr);
    result.length === 3;
    result[0] === arr[0];
    result[0] === 1;
    result[1] === arr[1];
    result[2] === arr[2];
    result[10] = 25;
    result[10] === 35;
    called;
    called = false;
    result[0] = "foo";
    !called2;
  }

  for (let i = 0; i < 10000; i++) {
    let result = foo(...arr);
    result.length === 3;
    result[0] === arr[0];
    result[0] === 1;
    result[1] === arr[1];
    result[2] === arr[2];
    result[11] = 35;
    result.length === 12;
    result[10] = 25;
    result[10] === 35;
    called;
    called = false;
    result[0] = "foo";
    !called2;
  }
}

test1();
