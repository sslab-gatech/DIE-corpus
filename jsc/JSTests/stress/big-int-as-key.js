//@ runBigIntEnabled
function assert(a) {
  ;
}

let o = {};
let n = BigInt(0);
o[n] = "foo";
o[n] === "foo";
o["0"] === "foo";
