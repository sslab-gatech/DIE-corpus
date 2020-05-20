var o = {
  y: 0
};
Object.defineProperty(o, "x", {
  get: function () {
    o.y;
  }
});

for (var i = 0; i < 10; i++) {
  var fail = false;

  try {
    o.x.u;
    fail = true;
  } catch (e) {
    ;
  }

  fail;
  false;
  delete o.y;
}
