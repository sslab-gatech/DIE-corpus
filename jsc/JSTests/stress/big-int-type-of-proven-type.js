//@ runDefault("--useBigInt=true", "--useConcurrentJIT=false")
function assert(a) {
  ;
}

function foo(o) {
  let newString = o.toString();

  if (typeof o === "bigint") {
    return newString;
  }
}

noInline(foo);

for (let i = 0; i < 10000; i++) {
  foo(3n) === "3";
}
