console.log("This tests that speculating other on a branch does not corrupt state.");

function foo(a) {
  if (a.f) {
    return "yes";
  } else {
    return "no";
  }
}

function bar(a) {
  return !a.f;
}

for (var i = 0; i < 100; ++i) {
  foo({
    f: void 0
  });
}

for (var i = 0; i < 10; ++i) {
  foo({
    f: i
  });
}

for (var i = 0; i < 100; ++i) {
  bar({
    f: void 0
  });
}

for (var i = 0; i < 10; ++i) {
  bar({
    f: i
  });
}

var successfullyParsed = true;
