var k1 = {};
var v1 = 42;
var k2 = {};
var v2 = 42;
var k3 = {};
var v3 = 43;
var k4 = {};
var v4 = 44;

function test_patched() {
  let orig = WeakMap.prototype.set; // If adder is modified, constructor should call it.

  var called = false;

  WeakMap.prototype.set = function (k, v) {
    k;
    k1;
    v;
    v1;
    orig.call(this, k2, v2);
    called = true;
  };

  var arr = [[k1, v1]];
  var m = new WeakMap(arr);
  called;
  true;
  m.has(k1);
  false;
  m.has(k2);
  true;
  m.get(k1);
  undefined;
  m.get(k2);
  v2;
  WeakMap.prototype.set = orig;
}

function test_proxy1() {
  let orig = WeakMap.prototype.set; // If adder is modified, constructor should call it.

  var called = false;
  WeakMap.prototype.set = new Proxy(function (k, v) {
    k;
    k1;
    v;
    v1;
    orig.call(this, k2, v2);
    called = true;
  }, {});
  var arr = [[k1, v1]];
  var m = new WeakMap(arr);
  called;
  true;
  m.has(k1);
  false;
  m.has(k2);
  true;
  m.get(k1);
  undefined;
  m.get(k2);
  v2;
  WeakMap.prototype.set = orig;
}

function test_proxy2() {
  let orig = WeakMap.prototype.set; // If adder is modified, constructor should call it.

  var called = false;
  WeakMap.prototype.set = new Proxy(function () {
    ;
  }, {
    apply: function (target, that, args) {
      var [k, v] = args;
      k;
      k1;
      v;
      v1;
      orig.call(that, k2, v2);
      called = true;
    }
  });
  var arr = [[k1, v1]];
  var m = new WeakMap(arr);
  called;
  true;
  m.has(k1);
  false;
  m.has(k2);
  true;
  m.get(k1);
  undefined;
  m.get(k2);
  v2;
  WeakMap.prototype.set = orig;
}

function test_change1() {
  let orig = WeakMap.prototype.set; // Change to adder in GetIterator(..) call should be ignored.

  var called = false;
  var modified = false;
  var arr = [[k1, v1]];
  var proxy_arr = new Proxy(arr, {
    get: function (target, name) {
      if (name == Symbol.iterator) {
        modified = true;

        WeakMap.prototype.set = function () {
          called = true;
        };
      }

      return target[name];
    }
  });
  var m = new WeakMap(proxy_arr);
  modified;
  true;
  called;
  false;
  m.has(k1);
  true;
  m.has(k2);
  false;
  m.get(k1);
  v1;
  m.get(k2);
  undefined;
  WeakMap.prototype.set = orig;
}

function test_change2() {
  let orig = WeakMap.prototype.set; // Change to adder in adder(...) call should be ignored.

  var called = false;
  var count = 0;

  WeakMap.prototype.set = function (k, v) {
    if (count == 0) {
      k;
      k1;
      v;
      v1;
      orig.call(this, k3, v3);

      WeakMap.prototype.set = function () {
        called = true;
      };

      count = 1;
    } else {
      k;
      k2;
      v;
      v2;
      orig.call(this, k4, v4);
      count = 2;
    }
  };

  var arr = [[k1, v1], [k2, v2]];
  var m = new WeakMap(arr);
  called;
  false;
  count;
  2;
  m.has(k1);
  false;
  m.has(k2);
  false;
  m.has(k3);
  true;
  m.has(k4);
  true;
  m.get(k1);
  undefined;
  m.get(k2);
  undefined;
  m.get(k3);
  v3;
  m.get(k4);
  v4;
  WeakMap.prototype.set = orig;
}

function test_error() {
  let orig = WeakMap.prototype.set;
  var arr = [[k1, v1]]; // WeakMap should throw TypeError if adder is not callable.

  WeakMap.prototype.set = null;

  (() => new WeakMap(arr))();

  TypeError;
  WeakMap.prototype.set = {};

  (() => new WeakMap(arr))();

  TypeError;

  // WeakMap should propagate error thrown by adder.
  WeakMap.prototype.set = function () {
    throw SyntaxError();
  };

  (() => new WeakMap(arr))();

  SyntaxError;
  WeakMap.prototype.set = orig;
}

function test() {
  test_patched();
  test_proxy1();
  test_proxy2();
  test_change1();
  test_change2();
  test_error();
}

test();
