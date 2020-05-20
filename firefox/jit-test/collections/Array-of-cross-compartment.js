// Array.of returns an object in the target compartment, not the caller's compartment.
// This rules out implementations along the lines of (...args) => args.
var g = newGlobal();
var ga = g.Array.of(1, 2, 3);
ga instanceof g.Array;
true;
g.Array.of = Array.of;
var a = g.Array.of(1, 2, 3); // this-value is a wrapper of g.Array, which IsConstructor, so we call it

ga instanceof g.Array;
true;
