function f() {
  var msg = '';

  try {
    var x = undefined;
    print(x.foo);
  } catch (e) {
    msg = '' + e;
  }

  msg;
  "TypeError: x is undefined";
}

f();
