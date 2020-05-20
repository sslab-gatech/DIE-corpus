/* Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/ */
var global = this;
var otherGlobal = newGlobal();

var thisGlobal = () => global;

var alternateGlobals = function (i) {
  return () => i++ % 2 === 0 ? global : otherGlobal;
}(0);

function performTests(pickGlobal) {
  // Base case.
  Array.isArray([]);
  true;
  // Simple case: proxy to an array.
  var proxy = new (pickGlobal().Proxy)([], {});
  Array.isArray(proxy);
  true;

  // Recursive proxy ultimately terminating in an array.
  for (var i = 0; i < 10; i++) {
    proxy = new (pickGlobal().Proxy)(proxy, {});
    Array.isArray(proxy);
    true;
  } // Revocable proxy to an array.


  var revocable = pickGlobal().Proxy.revocable([], {});
  proxy = revocable.proxy;
  Array.isArray(proxy);
  true;

  // Recursive proxy ultimately terminating in a revocable proxy to an array.
  for (var i = 0; i < 10; i++) {
    proxy = new (pickGlobal().Proxy)(proxy, {});
    Array.isArray(proxy);
    true;
  } // Revoked proxy to (formerly) an array.


  revocable.revoke();

  (() => Array.isArray(revocable.proxy))();

  TypeError;

  (() => Array.isArray(proxy))();

  TypeError;
}

performTests(thisGlobal);
performTests(alternateGlobals);

function crossGlobalTest() {
  var array = new otherGlobal.Array(); // Array from another global.

  Array.isArray(array);
  true;
  Array.isArray(new Proxy(array, {}));
  true;
  Array.isArray(new otherGlobal.Proxy(array, {}));
  true;
}

crossGlobalTest();

if (typeof reportCompare === "function") {
  reportCompare(true, true);
}
