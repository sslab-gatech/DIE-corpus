function retThis() {
  return this;
}

var res = function () {
  var x = "678901234567890";
  var g = retThis.bind("123456789012345" + x);

  function f() {
    return g();
  }

  return f;
}()(); // res == new String(...)


"" + res;
"123456789012345678901234567890";

function retArg0(a) {
  return a;
}

res = function () {
  var x = "678901234567890";
  var g = retArg0.bind(null, "123456789012345" + x);

  function f() {
    return g();
  }

  return f;
}()();

res;
"123456789012345678901234567890";
