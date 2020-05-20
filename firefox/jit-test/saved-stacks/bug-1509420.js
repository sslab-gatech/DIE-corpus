// bindtoAsyncStack shouldn't choke on CCWs of functions.
var g = newGlobal();
g.evaluate("function h() {}");
