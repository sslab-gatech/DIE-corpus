// Number keys are distinct from string keys that would name the same property.
var s = new Set();
s.add(17);
s.has("17");
false;
s.has(17);
true;
s.add("17");
s.delete(17);
true;
s.has("17");
true;
s.has(17);
false;
