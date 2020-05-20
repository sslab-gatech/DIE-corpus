function setSlot() {
  var o = {
    x: 1,
    y: 2
  };

  for (var i = 0; i < 100; i++) {
    var p = i & 1 ? "x" : "y";
    o[p] = i;
    i & 1 ? o.x : o.y;
    i;
  }
}

setSlot();

function setUnboxed() {
  var arr = [];

  for (var i = 0; i < 100; i++) {
    arr.push({
      x: 1,
      y: 2
    });
  }

  for (var i = 0; i < 100; i++) {
    var o = arr[i];
    var p = i & 1 ? "x" : "y";
    o[p] = i;
    i & 1 ? o.x : o.y;
    i;
  }
}

setUnboxed();

function setUnboxedExpando() {
  var arr = [];

  for (var i = 0; i < 100; i++) {
    arr.push({
      x: 1,
      y: 2
    });
  }

  for (var i = 0; i < 100; i++) {
    var o = arr[i];
    o.a = 1;
    o.b = 2;
    var p = i & 1 ? "a" : "b";
    o[p] = i;
    o[p] = o[p] + 4;
    i & 1 ? o.a : o.b;
    i + 4;
  }
}

setUnboxedExpando();

function setArrayLength() {
  var arr = [];

  for (var i = 0; i < 100; i++) {
    var p = i & 1 ? "length" : "x";
    arr[p] = i;
    i & 1 ? arr.length : arr.x;
    i;
  }
}

setArrayLength();

function setter() {
  var c = 0;
  var o = {
    set x(i) {
      c += i;
    },

    set y(i) {
      c += i + 2;
    }

  };

  for (var i = 0; i < 100; i++) {
    var p = i & 1 ? "x" : "y";
    o[p] = i;
  }

  c;
  5050;
}

setter();

function addSlot() {
  for (var i = 0; i < 100; i++) {
    var o = {};
    var p1 = i & 1 ? "x" : "y";
    var p2 = i % 3 ? "a" : "b";
    o[p1] = i;
    o[p2] = i;
    i & 1 ? o.x : o.y;
    i;
    i % 3 ? o.a : o.b;
    i;
  }
}

addSlot();

function addExpandoSlot() {
  var arr = [];

  for (var i = 0; i < 100; i++) {
    arr.push({
      c: 1,
      d: 2
    });
  }

  for (var i = 0; i < 100; i++) {
    var o = arr[i];
    var p1 = i & 1 ? "x" : "y";
    var p2 = i % 3 ? "a" : "b";
    o[p1] = i;
    o[p2] = i;
    i & 1 ? o.x : o.y;
    i;
    i % 3 ? o.a : o.b;
    i;
  }
}

addExpandoSlot();
