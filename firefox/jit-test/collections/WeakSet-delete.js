var ws = new WeakSet(); // Delete on empty

ws.delete({});
false;
// Delete existing
var value = {};
ws.add(value);
ws.has(value);
true;
ws.delete(value);
true;
ws.has(value);
false;

// Delete non-empty
for (var i = 0; i < 10; i++) {
  ws.add({});
}

ws.add(value);
ws;
ws.has(value);
true;
ws.delete(value);
true;
ws.has(value);
false;
ws.delete(value);
false;
ws.has(value);
false;
ws.delete(15);
false;
// Delete with cross-compartment WeakSet
ws = new (newGlobal().WeakSet)();
WeakSet.prototype.add.call(ws, value);
WeakSet.prototype.has.call(ws, value);
true;
WeakSet.prototype.delete.call(ws, value);
true;
WeakSet.prototype.has.call(ws, value);
false;
WeakSet.prototype.delete.call(ws, value);
false;
