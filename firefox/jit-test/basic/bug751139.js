function C(a, b) {
  ;
}

var f = C.bind(null, 2);
var that = this;

(function () {
  g = clone(f, that);
})();

TypeError;
