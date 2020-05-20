// Make sure a non-extensible proto object that's later frozen is handled
// correctly by AddElement ICs.
function f() {
  var proto = {
    60: "ok"
  };
  Object.preventExtensions(proto);
  var o = Object.create(proto);

  for (var i = 0; i < 65; i++) {
    o[i] = i;

    if (i === 50) {
      Object.freeze(proto);
    }
  }

  o[60];
  "ok";
  o[61];
  61;
}

f();
