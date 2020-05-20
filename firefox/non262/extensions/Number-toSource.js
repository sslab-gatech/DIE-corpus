/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */
raisesException(TypeError)('Number.prototype.toSource.call("")');
true;
raisesException(TypeError)('Number.prototype.toSource.call(true)');
true;
raisesException(TypeError)('Number.prototype.toSource.call({})');
true;
raisesException(TypeError)('Number.prototype.toSource.call(null)');
true;
raisesException(TypeError)('Number.prototype.toSource.call([])');
true;
raisesException(TypeError)('Number.prototype.toSource.call(undefined)');
true;
raisesException(TypeError)('Number.prototype.toSource.call(new Boolean(true))');
true;
completesNormally('Number.prototype.toSource.call(42)');
true;
completesNormally('Number.prototype.toSource.call(new Number(42))');
true;
reportCompare(true, true);
