function test(n) {
  return n === Object(n);
}

noInline(test);

function assert(condition) {
  ;
}

for (i = 0; i < 100000; i++) {
  !test(null);
  !test(undefined);
  !test(1);
  !test("");
  !test(Symbol.iterator);
  test({});
}
