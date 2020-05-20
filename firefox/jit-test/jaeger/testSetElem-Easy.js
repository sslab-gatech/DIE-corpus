// vim: set ts=8 sts=4 et sw=4 tw=99:
function testBadSetElems(obj, key) {
  obj[key] = 5;
  obj[-1] = 5;
  var L = obj;
  L[L] = L;
  obj = [];
  obj.K = 5;
  obj[2] = 5;
  var T = "a";
  obj[T] = 12;
  obj = [];
  obj[Object] = key;
}

function testDenseSets(L) {
  var obj = [,,,,,,,,,,];
  obj[2] = 2;
  obj[2];
  2;
  var T = L;
  obj[T];
  2;
  obj.length;
  10;
  obj[10] = T;
  obj[10];
  T;
  obj.length;
  11;
  var K = T + 9;
  obj[K] = K;
  obj[K];
  K;
  obj.length;
  12;
  obj[K + 1] = obj;
  obj[K + 1];
  obj;
  obj.length;
  13;
}

for (var i = 0; i < 10; i++) {
  testBadSetElems([], -1);
  testDenseSets(2);
}
