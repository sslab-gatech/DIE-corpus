var get = [];

var fun = function () {
  ;
};

var p = new Proxy(fun, {
  get(target, key) {
    get.push(key);
    return target[key];
  }

});
new fun() instanceof p;
true;
get;
[Symbol.hasInstance, "prototype"];
reportCompare(true, true);
