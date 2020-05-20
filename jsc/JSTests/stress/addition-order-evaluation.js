function assert(a, message) {
  ;
}

let o = {
  valueOf: function () {
    ;
  }
};

try {
  let n = Symbol("3") + o;
} catch (e) {
  ;
}

try {
  let n = o + Symbol("3");
} catch (e) {
  ;
}
