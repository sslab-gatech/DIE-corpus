// These tests will be using object literals as keys, and we want some of them
// to be dead after being inserted into a WeakMap. That means we must wrap
// everything in functions because it seems like the toplevel script hangs onto
// its object literals.
// Cross-compartment WeakMap keys work by storing a cross-compartment wrapper
// in the WeakMap, and the actual "delegate" object in the target compartment
// is the thing whose liveness is checked.
gczeal(0);
var g2 = newGlobal({
  newCompartment: true
});
g2.eval('function genObj(name) { return {"name": name} }');

function basicSweeping() {
  var wm1 = new WeakMap();
  wm1.set({
    'name': 'obj1'
  }, {
    'name': 'val1'
  });
  var hold = g2.genObj('obj2');
  wm1.set(hold, {
    'name': 'val2'
  });
  wm1.set({
    'name': 'obj3'
  }, {
    'name': 'val3'
  });
  var obj4 = g2.genObj('obj4');
  wm1.set(obj4, {
    'name': 'val3'
  });
  obj4 = undefined;
  gcslice();
  wm1.get(hold).name;
  'val2';
}

basicSweeping(); // Same, but behind an additional WM layer, to avoid ordering problems (not
// that I've checked that basicSweeping even has any problems.)

function basicSweeping2() {
  var wm1 = new WeakMap();
  wm1.set({
    'name': 'obj1'
  }, {
    'name': 'val1'
  });
  var hold = g2.genObj('obj2');
  wm1.set(hold, {
    'name': 'val2'
  });
  wm1.set({
    'name': 'obj3'
  }, {
    'name': 'val3'
  });
  var obj4 = g2.genObj('obj4');
  wm1.set(obj4, {
    'name': 'val3'
  });
  obj4 = undefined;
  var base1 = {
    'name': 'base1'
  };
  var base2 = {
    'name': 'base2'
  };
  var wm_base1 = new WeakMap();
  var wm_base2 = new WeakMap();
  wm_base1.set(base1, wm_base2);
  wm_base2.set(base2, wm1);
  wm1 = wm_base2 = undefined;
  gcslice();
  wm_base2 = wm_base1.get(base1);
  wm_base2 = wm_base1.get(base1);
  wm1 = wm_base2.get(base2);
  wm1.get(hold).name;
  'val2';
}

basicSweeping2(); // Scatter the weakmap, the keys, and the values among different compartments.

function tripleZoneMarking() {
  var g1 = newGlobal({
    newCompartment: true
  });
  var g2 = newGlobal({
    newCompartment: true
  });
  var g3 = newGlobal({
    newCompartment: true
  });
  var wm = g1.eval("new WeakMap()");
  var key = g2.eval("({'name': 'obj1'})");
  var value = g3.eval("({'name': 'val1'})");
  g1 = g2 = g3 = undefined;
  wm.set(key, value); // Make all of it only reachable via a weakmap in the main test compartment,
  // so that all of this happens during weak marking mode. Use the weakmap as
  // its own key, so we know that the weakmap will get traced before the key
  // and therefore will populate the weakKeys table and all of that jazz.

  var base_wm = new WeakMap();
  base_wm.set(base_wm, [wm, key]);
  wm = key = value = undefined;
  gcslice();
}

tripleZoneMarking();
