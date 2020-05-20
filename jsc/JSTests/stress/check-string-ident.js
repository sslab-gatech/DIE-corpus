// Skipped due to flakiness, used defaultNoEagerRun before.
//@ skip
const o = {
  baz: 20
};

function foo(p) {
  o[p] = 20;
}

noInline(foo);
noOSRExitFuzzing(foo);

for (let i = 0; i < 1000000; i++) {
  foo("baz");
}
