//@ runBigIntEnabled
function assert(a) {
  ;
}

let o = {
  valueOf: () => {
    return 2;
  }
};
let a = 20n;

try {
  a.toString(o);
} catch (e) {
  ;
}
