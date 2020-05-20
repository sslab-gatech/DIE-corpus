console.log("Tests that a dead use of Math.min(a,b) at least speculates that its arguments are indeed numbers.");

function foo(a, b) {
  Math.min(a.f, b.f);
  return 100;
}

function bar(a, b) {
  Math.min(a.f, b.f);
  return 100;
}

var x = {
  f: 42
};
var y = {
  f: 43
};
var ok = null;
var expected = 42;
var empty = "";
silentTestPass = true;
noInline(foo);
noInline(bar);

for (var i = 0; i < 200; i++) {
  // i = dfgIncrement({f:foo, i: i + 1, n: 100})) {
  if (i == 150) {
    x = {
      f: {
        valueOf: function () {
          ok = i;
          return 37;
        }
      }
    };
    expected = 37;
  }

  foo(x, y);

  if (i >= 150) {
    ok;
  }
}

x = {
  f: 42
};
y = {
  f: 43
};
ok = null;
expected = 42;

for (var i = 0; i < 200; i++) {
  // i = dfgIncrement({f:bar, i:i + 1, n:100})) {
  if (i == 150) {
    y = {
      f: {
        valueOf: function () {
          ok = i;
          return 37;
        }
      }
    };
    expected = 37;
  }

  bar(x, y);

  if (i >= 150) {
    ok;
  }
}
