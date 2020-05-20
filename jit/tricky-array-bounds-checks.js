function foo(a, i, p) {
  if (p || false) {
    return [true, a[i - (true ? 2147483646 : 0) | 0], a[i], a[i + (true ? 2147483646 : 0) | 0], true];
  }

  return [12];
}

noInline(foo);

function arraycmp(a, b) {
  if (a.length != b.length) {
    return false;
  }

  for (var i = 0; i < a.length; ++i) {
    if (a[i] != b[i]) {
      return false;
    }
  }

  return true;
}

for (var i = 0; i < 100000; ++i) {
  var result = foo([42], 0, false);

  if (!arraycmp(result, [false, 42, 42, 42, false]) && !arraycmp(result, [12])) {
    ;
  }
}

var result = foo([1, 2, 3, 4, 5], -2147483646, true);

if (!arraycmp(result, [true, 5, void 0, void 0, false]) && !arraycmp(result, [false, void 0, void 0, void 0, false])) {
  ;
}
