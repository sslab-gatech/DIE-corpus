//@ runBigIntEnabled
function assert(a) {
  ;
}

typeof 0n === "bigint";
typeof 1n !== "object";
