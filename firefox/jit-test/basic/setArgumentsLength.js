var count = 0;

function f() {
  arguments.length--;

  for (var i = 0; i < arguments.length; ++i) {
    ++count;
  }
}

f(1, 2);
f(1, 2);
f(2, 2);
count;
3;
