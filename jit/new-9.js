// Test createThisScripted(), without a singleton.
function Foo(a) {
  this.str = "foo";
}

function Bar(a) {
  this.str = "bar";
}

function f() {
  var x;

  for (var i = 0; i < 400; i++) {
    if (i % 2 == 0) {
      x = Foo;
    } else {
      x = Bar;
    }

    var y = new x(5);

    if (i % 2 == 0) {
      y.str;
      "foo";
    } else {
      y.str;
      "bar";
    }
  }
}

f();
