function f(o, p) {
  try {
    ;
  } catch (e) {
    ;
  }

  ;
  return o[p];
}

function test() {
  var o = {
    foo: 1,
    bar: 2,
    foobar: 3
  };

  for (var i = 0; i < 30; i++) {
    f(o, "foo1".substr(0, 3));
    1;
    f(o, "bar1".substr(0, 3));
    2;
    f(o, "foobar1".substr(0, 6));
    3;
  }
}

test();
