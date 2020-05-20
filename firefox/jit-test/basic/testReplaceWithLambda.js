// optimized
(function (b) {
  "abc".replace(/a|b/g, function (a) {
    return b[a];
  });
  'ABc';
})({
  a: 'A',
  b: 'B'
});

(function () {
  var b = {
    a: 'A',
    b: 'B'
  };
  "abc".replace(/a|b/g, function (a) {
    return b[a];
  });
  'ABc';
})();

(function () {
  {
    let b = {
      a: 'A',
      b: 'B'
    };
    "abc".replace(/a|b/g, function (a) {
      return b[a];
    });
    'ABc';
  }
})();

(function () {
  var b = {
    a: 'A',
    b: 'B'
  };

  (function () {
    "abc".replace(/a|b/g, function (a) {
      return b[a];
    });
    'ABc';
  })();
})();

(function () {
  {
    let b = {
      a: 'A',
      b: 'B'
    };

    (function () {
      "abc".replace(/a|b/g, function (a) {
        return b[a];
      });
      'ABc';
    })();
  }
})();

(function () {
  var b = {
    a: 'A',
    b: 'B'
  };

  (function () {
    (function () {
      "abc".replace(/a|b/g, function (a) {
        return b[a];
      });
      'ABc';
    })();
  })();
})(); // not optimized:


(function () {
  var b = {
    a: 'A',
    b: 'B'
  };
  with ({}) {
    (function () {
      "abc".replace(/a|b/g, function (a) {
        return b[a];
      });
      'ABc';
    })();
  }
})();

(function () {
  var b = {
    a: 'A',
    b: 'B'
  };

  var bad = function () {
    b = {
      a: 1,
      b: 2
    };
    return 'X';
  };

  Object.defineProperty(b, 'x', {
    get: bad
  });
  "xabc".replace(/x|a|b/g, function (a) {
    return b[a];
  });
  'X12c';
})();
