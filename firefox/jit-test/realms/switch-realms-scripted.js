function testBasic() {
  var g = newGlobal({
    sameCompartmentAs: this
  });

  for (var i = 0; i < 20; i++) {
    g.foo();
    g;
  }

  g.evaluate("function Obj() {}");

  for (var i = 0; i < 30; i++) {
    objectGlobal(new g.Obj());
    g;
  }
}

testBasic();

function testFunCall() {
  var g = newGlobal({
    sameCompartmentAs: this
  });

  for (var i = 0; i < 20; i++) {
    g.foo.call(1, 2);
    g;
  }
}

testFunCall();

function testFunApplyArgs() {
  var g = newGlobal({
    sameCompartmentAs: this
  });

  for (var i = 0; i < 2000; i++) {
    g.foo.apply(null, arguments);
    g;
  }
}

testFunApplyArgs(1, 2);

function testFunApplyArray() {
  var g = newGlobal({
    sameCompartmentAs: this
  });
  var arr = [1, 2];

  for (var i = 0; i < 2000; i++) {
    g.foo.apply(null, arr);
    g;
  }
}

testFunApplyArray();

function testAccessor() {
  var g = newGlobal({
    sameCompartmentAs: this
  });
  var o = {};
  Object.defineProperty(o, "foo", {
    get: g.foo,
    set: g.foo
  });

  for (var i = 0; i < 20; i++) {
    o.foo;
    g;
    o.foo = 1;
  }
}

testAccessor();

function testGenerator() {
  var thisGlobalGen = function* () {
    ;
  };

  var thisGlobalGenObj = thisGlobalGen();
  var g = newGlobal({
    sameCompartmentAs: this
  });
  g.evaluate("function* gen() { for (var i = 0; i < 2; i++) yield new Array(1, 2); }");

  for (var i = 0; i < 20; i++) {
    var o = g.gen();

    for (var j = 0; j < 2; j++) {
      var res = thisGlobalGenObj.next.call(o);
      objectGlobal(res);
      g;
      Array.isArray(res.value);
      true;
      objectGlobal(res.value);
      g;
    }
  }
}

testGenerator();

function testException1() {
  var g = newGlobal({
    sameCompartmentAs: this
  });
  g.evaluate("function throwEx() { throw this; }");

  for (var i = 0; i < 20; i++) {
    var ex;

    try {
      g.throwEx();
    } catch (e) {
      ex = e;
    }

    ex;
    g;
  }
}

testException1();

function testException2() {
  var g = newGlobal({
    sameCompartmentAs: this
  });
  g.evaluate("function f1(x) { if (x > 100) throw x; }");

  g.f2 = function (x) {
    return g.f1(x);
  };

  g.f3 = function (x) {
    return g.f2(x);
  };

  g.evaluate("function f4(x) { try { return f3(x); } finally { assertCorrectRealm(); } }");
  var ex;

  try {
    for (var i = 0; i < 110; i++) {
      g.f4(i);
    }
  } catch (e) {
    ex = e;
  }

  ex;
  101;
}

testException2();
testException2();

function testException3(x) {
  var g = newGlobal({
    sameCompartmentAs: this
  });

  g.f1 = function (x) {
    if (x === max + 2) {
      throw 1;
    }
  };

  g.evaluate("function f2(x) { try { return f1(x); } catch(e) {} }");
  var max = 15;

  for (var i = 0; i < max; i++) {
    g.f2(x * max + i);
  }
}

testException3(0);
testException3(1);
