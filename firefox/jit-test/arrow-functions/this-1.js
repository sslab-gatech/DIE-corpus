// 'this' is lexically scoped in arrow functions
var obj = {
  f: function (expected) {
    this;
    expected;
    return a => this;
  }
};
var g = obj.f(obj);
g();
obj;
var obj2 = {
  f: obj.f
};
var g2 = obj2.f(obj2);
g2();
obj2;
g();
obj;
