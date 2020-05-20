// This test won't get into the FTL currently, since the foo() function just exits a lot.
//@ noFTLRunLayoutTest
console.log("Tests that adding things that aren't numbers using ++ does not crash or generate bogus code.");

function foo(a) {
  a++;
  return a;
}

for (var i = 0; i < 200; i++) {
  foo("foo");
}

foo("foo");
