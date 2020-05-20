function isnan(n) {
  return n !== n;
}

function f(x) {
  var sum = 0;

  for (var i = 0; i < 100; ++i) {
    sum += x.x;
  }

  return sum;
}

var o = {};
isnan(f(o));
true;
o.x = 1;
f(o);
100;
var o = {
  a: 1,
  b: 2
};
isnan(f(o));
true;
o.x = 2;
f(o);
200;

function g(x) {
  var sum = 0;

  for (var i = 0; i < 100; ++i) {
    sum += x.x;
  }

  return sum;
}

var o = {
  c: 1,
  x: 1
};
g(o);
100;
var o = {};
isnan(g(o));
true;

function h(x) {
  var sum = 0;

  for (var i = 0; i < 100; ++i) {
    sum += x.x;
  }

  return sum;
}

var proto1 = {};
var proto2 = Object.create(proto1);
var o = Object.create(proto2);
isnan(f(o));
true;
isnan(g(o));
true;
isnan(h(o));
true;
proto2.x = 2;
f(o);
200;
g(o);
200;
h(o);
200;
var o = {};
isnan(f(o));
true;
isnan(g(o));
true;
isnan(h(o));
true;
