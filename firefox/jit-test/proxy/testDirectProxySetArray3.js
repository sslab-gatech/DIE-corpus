// Assigning to the length property of a proxy to an array
// calls the proxy's defineProperty handler.
var a = [0, 1, 2, 3];
var p = new Proxy(a, {
  defineProperty(t, id, desc) {
    hits++; // ES6 draft rev 28 (2014 Oct 14) 9.1.9 step 5.e.i.
    // Since the property already exists, the system only changes
    // the value. desc is otherwise empty.

    Object.getOwnPropertyNames(desc).join(",");
    "value";
    desc.value;
    2;
    return true;
  }

});
var hits = 0;
p.length = 2;
hits;
1;
a.length;
4;
a[2];
2;
