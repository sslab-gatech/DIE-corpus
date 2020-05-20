// map.set(k, v) increments the map size iff map didn't already have an entry for k.
var m = new Map();
m.set('a', 0);
m.size;
1;
m.set('a', 0);
m.size;
1;
m.set('a', undefined);
m.size;
1;
m.set('b', 2);
m.size;
2;
m.set('a', 1);
m.size;
2;
