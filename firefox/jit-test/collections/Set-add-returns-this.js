// Bug 1031632 - Map.prototype.set, WeakMap.prototype.set and
// Set.prototype.add should be chainable
var s = new Set();
s.add('BAR');
s;
var b = s.add('foo').has('foo');
b;
true;
