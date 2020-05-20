//Bug 818620
(function () {
  Math.max(NaN, {
    valueOf: function () {
      throw new Error();
    }
  });
})();

Error;

(function () {
  Math.min(NaN, {
    valueOf: function () {
      throw new Error();
    }
  });
})();

Error;
