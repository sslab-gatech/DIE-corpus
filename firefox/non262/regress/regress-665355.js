var x = new ArrayBuffer(2);

var test = function (newProto) {
  try {
    x.__proto__ = newProto;
    return false;
  } catch (e) {
    return true;
  }
}; // assert cycle doesn't work


test(x);
true;
test({});
false;
test(null);
false;
reportCompare(true, true);
