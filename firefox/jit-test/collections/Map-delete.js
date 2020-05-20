// Map.prototype.delete works whether the key is present or not.
var m = new Map();
var key = {}; // when the map is new

m.delete(key);
false;
m.has(key);
false;
m.set(key, 'x');
m;
m.delete(key);
true;
m.has(key);
false;
m.get(key);
undefined;
m.delete(key);
false;
m.has(key);
false;
