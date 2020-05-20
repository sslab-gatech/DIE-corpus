// Setting a Map key to undefined, or a missing argument, isn't the same as deleting it.
var m = new Map();
m.set(42, undefined);
m.has(42);
true;
m.get(42);
undefined;
m.set(42, "wrong");
m.set(42);
m.has(42);
true;
m.get(42);
undefined;
m.set();
m.has(undefined);
true;
m.get(undefined);
undefined;
