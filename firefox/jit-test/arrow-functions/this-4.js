// 'this' in a toplevel arrow is the global object.
var f = () => this;

f();
this;
({
  f: f
}).f();
this;
