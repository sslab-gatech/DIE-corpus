// throw, don't crash
var actual = "";

try {
  var x = new Proxy({}, {
    defineProperty: function (target, name, desc) {
      Object.defineProperty(x, name, desc);
    }
  });
  Object.defineProperty(x, "", {
    get: function () {
      ;
    }
  });
} catch (e) {
  actual = '' + e;
}

actual;
"InternalError: too much recursion";
