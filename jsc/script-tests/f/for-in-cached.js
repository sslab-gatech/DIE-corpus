console.log("This tests that for/in statements behave correctly when cached.");

function forIn1() {
  var result = [];
  var o = {
    x: 1
  };

  for (var p in o) {
    result.push(p);
  }

  return result;
}

forIn1();
Object.prototype.y = 2;
forIn1();
delete Object.prototype.y;

function forIn2() {
  var result = [];
  var o = {
    x: 1,
    __proto__: null
  };

  for (var p in o) {
    result.push(p);
  }

  return result;
}

forIn2();
forIn2();

function forIn3(proto) {
  var result = [];
  var o = {
    x: 1,
    __proto__: proto
  };

  for (var p in o) {
    result.push(p);
  }

  return result;
}

forIn3({
  __proto__: {
    y1: 2
  }
});
forIn3({
  __proto__: {
    y1: 2
  }
});
forIn3({
  __proto__: {
    y1: 2
  }
});
forIn3({
  y2: 2,
  __proto__: null
});
forIn3({
  y2: 2,
  __proto__: null
});
forIn3({
  y2: 2,
  __proto__: null
});
forIn3({
  __proto__: {
    __proto__: {
      y3: 2
    }
  }
});
forIn3({
  __proto__: {
    __proto__: {
      y3: 2
    }
  }
});
forIn3({
  __proto__: {
    __proto__: {
      y3: 2
    }
  }
});

function forIn4(o) {
  var result = [];

  for (var p in o) {
    result.push(p);
  }

  return result;
}

var objectWithArrayAsProto = {};
objectWithArrayAsProto.__proto__ = [];
forIn4(objectWithArrayAsProto);
objectWithArrayAsProto.__proto__[0] = 1;
forIn4(objectWithArrayAsProto);

function forIn5(o) {
  for (var i in o) {
    return [i, o[i]];
  }
}

forIn5({
  get foo() {
    return 'called getter';
  }

});
forIn5({
  set foo(x) {
    ;
  }

});
forIn5({
  get foo() {
    return 'called getter';
  },

  set foo(x) {
    ;
  }

});

function cacheClearing() {
  for (var j = 0; j < 10; j++) {
    var o = {
      a: 1,
      b: 2,
      c: 3,
      d: 4,
      e: 5
    };

    try {
      for (i in o) {
        delete o.a;
        o = null;
        throw "";
      }

      ;
    } finally {
      continue;
    }
  }
}

cacheClearing();
