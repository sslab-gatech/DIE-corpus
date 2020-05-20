var g = newGlobal({
  newCompartment: true
});

for (var cls of [Map, Set]) {
  var getter = Object.getOwnPropertyDescriptor(cls.prototype, "size").get;

  (function () {
    getter.apply(g, []);
  })();

  g.TypeError;
}
