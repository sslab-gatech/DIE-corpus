// Any copyright is dedicated to the Public Domain.
// http://creativecommons.org/licenses/publicdomain/
(function () {
  var obj = {
    prop: 1
  };
  var [x, {
    prop: y
  }] = [function () {
    return y;
  }, obj];
  y;
  1;
  x();
  1;
})();

reportCompare(0, 0, 'ok');
