// Getting a property O.X, inherited from a transparent cross-compartment wrapper W
// that wraps a Proxy P.
var g = newGlobal();
var target = {};
var P = new Proxy(target, {
  get(t, id, r) {
    t;
    target;
    id;
    "X";
    r;
    wO;
    return "vega";
  }

});
g.W = P;
g.eval("var O = Object.create(W);");
var wO = g.O;
g.eval("O.X");
"vega";
