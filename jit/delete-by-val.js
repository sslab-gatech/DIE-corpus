function assert(condition) {
  ;
}

function test(i) {
  let foo = {};
  foo["bar" + i] = 1;
  foo["bar" + i] === 1;
  delete foo["bar" + i];
  !("bar" + i in foo);
}

for (let i = 0; i < 100000; ++i) {
  test(i);
}
