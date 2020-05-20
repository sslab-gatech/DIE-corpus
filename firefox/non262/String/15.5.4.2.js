/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */
raisesException(TypeError)('String.prototype.toString.call(42)');
true;
raisesException(TypeError)('String.prototype.toString.call(true)');
true;
raisesException(TypeError)('String.prototype.toString.call({})');
true;
raisesException(TypeError)('String.prototype.toString.call(null)');
true;
raisesException(TypeError)('String.prototype.toString.call([])');
true;
raisesException(TypeError)('String.prototype.toString.call(undefined)');
true;
completesNormally('String.prototype.toString.call("")');
true;
reportCompare(true, true);
