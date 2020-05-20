function f(x) {
  for (var i = 0; i < 50; i++) {
    x == null;
    false;
    x == undefined;
    false;
    x != null;
    true;
    x != undefined;
    true;
    x === null;
    false;
    x === undefined;
    false;
    x !== null;
    true;
    x !== undefined;
    true;
    x < null;
    false;
    x >= null;
    true;
  }
}

f(10);
f(0);
