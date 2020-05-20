// Bug 1031632 - Map.prototype.set, WeakMap.prototype.set and
// Set.prototype.add should be chainable
var wm = new WeakMap();
var bar = {};
wm.set(bar, 'BAR');
wm;
var foo = {};
var a = wm.set(foo, 'FOO').get(foo);
a;
'FOO';
