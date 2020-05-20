var k1 = {};
var v1 = 42;
var k2 = {};
var v2 = 42;
var k3 = {};
var v3 = 43;
var k4 = {};
var v4 = 44;

function test_patched() {
  let orig = Map.prototype.set; // If adder is modified, constructor should call it.

  var called = false;

  Map.prototype.set = function (k, v) {
    k;
    k1;
    v;
    v1;
    orig.call(this, k2, v2);
    called = true;
  };

  var arr = [[k1, v1]];
  var m = new Map(arr);
  called;
  true;
  m.size;
  1;
  m.has(k1);
  false;
  m.has(k2);
  true;
  m.get(k1);
  undefined;
  m.get(k2);
  v2;
  Map.prototype.set = orig;
}

function test_proxy1() {
  let orig = Map.prototype.set; // If adder is modified, constructor should call it.

  var called = false;
  Map.prototype.set = new Proxy(function (k, v) {
    k;
    k1;
    v;
    v1;
    orig.call(this, k2, v2);
    called = true;
  }, {});
  var arr = [[k1, v1]];
  var m = new Map(arr);
  called;
  true;
  m.size;
  1;
  m.has(k1);
  false;
  m.has(k2);
  true;
  m.get(k1);
  undefined;
  m.get(k2);
  v2;
  Map.prototype.set = orig;
}

function test_proxy2() {
  let orig = Map.prototype.set; // If adder is modified, constructor should call it.

  var called = false;
  Map.prototype.set = new Proxy(function () {
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
  var m = new Map(arr);
  called;
  true;
  m.size;
  1;
  m.has(k1);
  false;
  m.has(k2);
  true;
  m.get(k1);
  undefined;
  m.get(k2);
  v2;
  Map.prototype.set = orig;
}

function test_change1() {
  let orig = Map.prototype.set; // Change to adder in GetIterator(..) call should be ignored.

  var called = false;
  var modified = false;
  var arr = [[k1, v1]];
  var proxy_arr = new Proxy(arr, {
    get: function (target, name) {
      if (name == Symbol.iterator) {
        modified = true;

        Map.prototype.set = function () {
          called = true;
        };
      }

      return target[name];
    }
  });
  var m = new Map(proxy_arr);
  modified;
  true;
  called;
  false;
  m.size;
  1;
  m.has(k1);
  true;
  m.has(k2);
  false;
  m.get(k1);
  v1;
  m.get(k2);
  undefined;
  Map.prototype.set = orig;
}

function test_change2() {
  let orig = Map.prototype.set; // Change to adder in adder(...) call should be ignored.

  var called = false;
  var count = 0;

  Map.prototype.set = function (k, v) {
    if (count == 0) {
      k;
      k1;
      v;
      v1;
      orig.call(this, k3, v3);

      Map.prototype.set = function () {
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
  var m = new Map(arr);
  called;
  false;
  count;
  2;
  m.size;
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
  Map.prototype.set = orig;
}

function test_error() {
  let orig = Map.prototype.set;
  var arr = [[k1, v1]]; // Map should throw TypeError if adder is not callable.

  Map.prototype.set = null;

  (() => new Map(arr))();

  TypeError;
  Map.prototype.set = {};

  (() => new Map(arr))();

  TypeError;

  // Map should propagate error thrown by adder.
  Map.prototype.set = function () {
    throw SyntaxError();
  };

  (() => new Map(arr))();

  SyntaxError;
  Map.prototype.set = orig;
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
