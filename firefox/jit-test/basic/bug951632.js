var g = newGlobal({
  newCompartment: true
});
g.eval("function f(a) { return h(); }");

g.h = function () {
  return [1, 2, 3];
};

var o = getAllocationMetadata(g.f(5));
o.stack.length;
1;
o.stack[0];
g.h;
