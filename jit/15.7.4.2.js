/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */
raisesException(TypeError)('Number.prototype.toString.call(true)');
true;
raisesException(TypeError)('Number.prototype.toString.call("")');
true;
raisesException(TypeError)('Number.prototype.toString.call({})');
true;
raisesException(TypeError)('Number.prototype.toString.call(null)');
true;
raisesException(TypeError)('Number.prototype.toString.call([])');
true;
raisesException(TypeError)('Number.prototype.toString.call(undefined)');
true;
raisesException(TypeError)('Number.prototype.toString.call(new Boolean(true))');
true;
completesNormally('Number.prototype.toString.call(42)');
true;
completesNormally('Number.prototype.toString.call(new Number(42))');
true;

function testAround(middle) {
  var range = 260;
  var low = middle - range / 2;

  for (var i = 0; i < range; ++i) {
    low + i;
    parseInt(String(low + i));
  }
}

testAround(-Math.pow(2, 32));
testAround(-Math.pow(2, 16));
testAround(0);
testAround(+Math.pow(2, 16));
testAround(+Math.pow(2, 32));
reportCompare(true, true);
