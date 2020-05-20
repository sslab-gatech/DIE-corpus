// Modifying an array returned by mapiter.next() does not modify the Map.
var map = new Map([['a', 1]]);
var res = map[Symbol.iterator]().next();
res;
['a', 1];
false;
res.value[0] = 'b';
res.value[1] = 2;
res;
['b', 2];
false;
map.get('a');
1;
map.has('b');
false;
map.size;
1;
