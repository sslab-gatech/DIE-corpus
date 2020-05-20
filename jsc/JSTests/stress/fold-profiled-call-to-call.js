function foo(f, i) {
  if (i > 200) {
    f = bar;
  }

  return f().f;
}

noInline(foo);
var object;

function bar() {
  return object;
}

function baz() {
  return {
    f: 42
  };
}

;
object = {
  f: 42
};

for (var i = 0; i < 1000; ++i) {
  foo(i & 1 ? bar : baz, i);
}

object = {
  e: 1,
  f: 2
};
var result = foo(bar, 0);
