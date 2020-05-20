// |jit-test| error: Error
var g = newGlobal();
var f = new Function();
g.eval("clone(f)()(9)");
