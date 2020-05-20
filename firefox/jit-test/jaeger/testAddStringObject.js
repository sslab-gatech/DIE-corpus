String.prototype.m = function (s) {
  return this.indexOf('a');
};

var g = function (s) {
  return (s + 'asdf').m();
};

var h = function (s) {
  return ('asdf' + s).m();
};

var ix = g(new String('abc'));
ix;
0;
var ix = h(new String('abc'));
ix;
0;
