// Assigning to a proxy with no set handler calls the defineProperty handler
// when an existing inherited data property already exists.
var hits = 0;
var proto = {
  x: 1
};
var t = Object.create(proto);
var p = new Proxy(t, {
  defineProperty(t, id, desc) {
    hits++;
    return true;
  }

});
p.x = 2;
hits;
1;
proto.x;
1;
t.hasOwnProperty("x");
false;
// Same thing, but the receiver is a plain object inheriting from p:
var receiver = Object.create(p);
receiver.x = 2;
hits;
1;
t.hasOwnProperty("x");
false;
receiver.hasOwnProperty("x");
true;
receiver.x;
2;
