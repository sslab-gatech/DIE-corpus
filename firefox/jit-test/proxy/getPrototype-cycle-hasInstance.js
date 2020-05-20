// |jit-test| exitstatus: 6
var proxy = new Proxy({}, {
  getPrototypeOf() {
    return proxy;
  }

});

var x = proxy instanceof function () {
  ;
};

0;
1;
