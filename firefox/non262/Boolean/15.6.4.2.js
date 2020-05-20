/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */
raisesException(TypeError)('Boolean.prototype.toString.call(42)');
true;
raisesException(TypeError)('Boolean.prototype.toString.call("")');
true;
raisesException(TypeError)('Boolean.prototype.toString.call({})');
true;
raisesException(TypeError)('Boolean.prototype.toString.call(null)');
true;
raisesException(TypeError)('Boolean.prototype.toString.call([])');
true;
raisesException(TypeError)('Boolean.prototype.toString.call(undefined)');
true;
raisesException(TypeError)('Boolean.prototype.toString.call(new String())');
true;
completesNormally('Boolean.prototype.toString.call(true)');
true;
completesNormally('Boolean.prototype.toString.call(new Boolean(true))');
true;
reportCompare(true, true);
