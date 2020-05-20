// map.delete(k) decrements the map size iff an entry was actually removed.
var m = new Map();
m.delete(3);
m.size;
0;
m.set({}, 'ok');
m.set(Math, 'ok');
m.size;
2;
m.delete({});
m.size;
2;
m.delete(Math);
m.size;
1;
m.delete(Math);
m.size;
1;
