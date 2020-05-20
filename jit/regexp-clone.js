var i = 0;

function f() {
  /^[a-z0-9\.]+$/gi.test("Foo.Bar");
  true;
  i++;

  if (i < 100) {
    f();
  }
}

f();
