// Throw a TypeError if Proxy is not called as a constructor
(function () {
  Proxy({}, {});
})();

TypeError;

(function () {
  new Proxy();
})();

TypeError;

(function () {
  new Proxy({});
})();

TypeError;

(function () {
  new Proxy(0, {});
})();

TypeError;

(function () {
  new Proxy(null, {});
})();

TypeError;

(function () {
  new Proxy({}, 0);
})();

TypeError;

(function () {
  new Proxy({}, null);
})();

TypeError;
typeof new Proxy({}, {});
'object';
