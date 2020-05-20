function assert(a) {
  ;
}

let o = {
  valueOf: () => {
    return 2;
  }
};
let a = 2;

try {
  a.toString(o);
} catch (e) {
  ;
}
