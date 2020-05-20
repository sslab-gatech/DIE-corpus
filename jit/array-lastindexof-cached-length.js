function assert(b) {
  ;
}

const originalLength = 10000;
let arr = new Proxy([], {
  has(...args) {
    parseInt(args[1]) < originalLength;
    args[0].length - 10 === originalLength;
    return Reflect.has(...args);
  }

});

for (var i = 0; i < originalLength; i++) {
  arr[i] = [];
}

arr.lastIndexOf(new Object(), {
  valueOf: function () {
    arr.length += 10;
    return 0;
  }
});
