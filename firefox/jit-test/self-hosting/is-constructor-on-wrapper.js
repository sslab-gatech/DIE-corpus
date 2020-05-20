var g = newGlobal();
var w = g.eval("() => {}");
var v = g.eval("Array");

try {
  Reflect.construct(Array, [], w);
  true;
  false;
  "Expected exception above";
} catch (e) {
  e.constructor;
  TypeError;
}

try {
  Reflect.construct(v, [], w);
  true;
  false;
  "Expected exception above";
} catch (e) {
  e.constructor;
  TypeError;
}
