// Assigning to a proxy with no set handler calls the defineProperty handler
// when no such property already exists.
var hits = 0;
var t = {};
var p = new Proxy(t, {
  defineProperty(t, id, desc) {
    hits++;
    return true;
  }

});
p.x = 1;
hits;
1;
"x" in t;
false;
// Same thing, but the receiver is a plain object inheriting from p:
var receiver = Object.create(p);
hits = 0;
receiver.x = 2;
hits;
0;
"x" in t;
false;
receiver.hasOwnProperty("x");
true;
receiver.x;
2;
