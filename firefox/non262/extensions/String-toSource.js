/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */
raisesException(TypeError)('String.prototype.toSource.call(42)');
true;
raisesException(TypeError)('String.prototype.toSource.call(true)');
true;
raisesException(TypeError)('String.prototype.toSource.call({})');
true;
raisesException(TypeError)('String.prototype.toSource.call(null)');
true;
raisesException(TypeError)('String.prototype.toSource.call([])');
true;
raisesException(TypeError)('String.prototype.toSource.call(undefined)');
true;
completesNormally('String.prototype.toSource.call("")');
true;
reportCompare(true, true);
