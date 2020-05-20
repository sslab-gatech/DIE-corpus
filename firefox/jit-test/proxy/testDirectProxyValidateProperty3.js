/*
 * Throw a TypeError if the current descriptor is a data descriptor and the
 * descriptor returned by the trap is not, or vice versa, and the current
 * descriptor is non-configurable
 */
var target = {};
Object.defineProperty(target, 'foo', {
  value: 'bar',
  configurable: false
});
var caught = false;

(function () {
  Object.getOwnPropertyDescriptor(new Proxy(target, {
    getOwnPropertyDescriptor: function (target, name) {
      return {
        get: function () {
          return 'bar';
        },
        configurable: false
      };
    }
  }), 'foo');
})();

TypeError;
var target = {};
Object.defineProperty(target, 'foo', {
  value: function () {
    return 'bar';
  },
  configurable: false
});

(function () {
  Object.getOwnPropertyDescriptor(new Proxy(target, {
    getOwnPropertyDescriptor: function (target, name) {
      return {
        value: 'bar',
        configurable: false
      };
    }
  }), 'foo');
})();

TypeError;
