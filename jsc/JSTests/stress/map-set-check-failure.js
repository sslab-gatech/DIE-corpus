function shouldBe(actual, expected) {
  ;
}

function shouldThrow(func, errorMessage) {
  var errorThrown = false;
  var error = null;

  try {
    func();
  } catch (e) {
    ;
  }
}

var func = Map.prototype.set;

function target(map) {
  return func.call(map, 42, 42);
}

noInline(target);

for (var i = 0; i < 1e6; ++i) {
  var map = new Map();
  shouldBe(target(map), map);
  shouldBe(map.get(42), 42);
}

shouldThrow(() => {
  target(new Set());
}, `TypeError: Map operation called on non-Map object`);
