// Direct proxies pass through the receiver argument to [[Set]] to their targets.
// This also tests that an ordinary object's [[Set]] method can change the length
// of an array passed as the receiver.
var a = [0, 1, 2, 3];
var p = new Proxy({}, {});
Reflect.set(p, "length", 2, a);
"length" in p;
false;
a.length;
2;
a;
[0, 1];
