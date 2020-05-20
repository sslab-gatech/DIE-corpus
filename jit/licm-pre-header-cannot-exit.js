//@ runFTLNoCJIT("--createPreHeaders=false")
function foo(object, predicatei, i) {
  var result = 0;
  var i = 0;

  if (i > 100) {
    predicatei = 42;
  }

  while (predicatei >= 42) {
    result += object.array[i++];

    if (i >= object.array.length) {
      break;
    }
  }

  return result;
}

noInline(foo);

for (var i = 0; i < 10000; ++i) {
  foo({
    array: [1, 2, 3]
  }, {
    valueOf: function () {
      return 42;
    }
  }, i);
}
