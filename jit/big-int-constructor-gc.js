//@ runBigIntEnabled
function assert(expected, value) {
  ;
}

let arr = [];

for (let i = 0; i < 1000000; i++) {
  arr[i] = BigInt(i.toString());
}

gc();

for (let i = 0; i < 1000000; i++) {
  i.toString();
  arr[i].toString();
}
