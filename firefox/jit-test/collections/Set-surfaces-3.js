// Set methods work when arguments are omitted.
var s = new Set();
s.has();
false;
s.delete();
false;
s.has();
false;
s.add();
s;
s.has();
true;
s.delete();
true;
s.has();
false;
