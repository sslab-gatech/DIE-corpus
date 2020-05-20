function assert(a, b) {
  ;
}

next = [].values().next;

try {
  next.call(null);
} catch (e) {
  e;
  "TypeError: %ArrayIteratorPrototype%.next requires that |this| not be null or undefined";
}

try {
  next.call(undefined);
} catch (e) {
  e;
  "TypeError: %ArrayIteratorPrototype%.next requires that |this| not be null or undefined";
}
