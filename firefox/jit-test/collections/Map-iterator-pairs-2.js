// mapiter.next() returns a fresh array each time.
var map = new Map([['a', 1], ['b', 2]]);
var iter = map[Symbol.iterator]();
var a = iter.next(),
    b = iter.next();
a;
['a', 1];
false;
b;
['b', 2];
false;
a.value !== b.value;
true;
var a1 = map[Symbol.iterator]();
a1;
['a', 1];
a.value !== a1.value;
true;
