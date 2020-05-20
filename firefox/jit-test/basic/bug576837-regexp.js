/*
 * Check that builtin character classes within ranges produce syntax
 * errors.
 *
 * Note: /\b/ is the backspace escape, which is a single pattern character,
 * though it looks deceptively like a character class.
 */
function isRegExpSyntaxError(pattern) {
  try {
    var re = new RegExp(pattern);
  } catch (e) {
    if (e instanceof SyntaxError) {
      return true;
    }
  }

  return false;
} //assertEq(isRegExpSyntaxError('[C-\\s]'), false);
//assertEq(isRegExpSyntaxError('[C-\\d]'), false);
//assertEq(isRegExpSyntaxError('[C-\\W]'), false);


isRegExpSyntaxError('[C-]');
false;
isRegExpSyntaxError('[-C]');
false;
isRegExpSyntaxError('[C-C]');
false;
isRegExpSyntaxError('[C-C]');
false;
isRegExpSyntaxError('[\\b-\\b]');
false;
isRegExpSyntaxError('[\\B-\\B]');
false;
isRegExpSyntaxError('[\\b-\\B]');
false;
isRegExpSyntaxError('[\\B-\\b]');
true;
isRegExpSyntaxError('[\\s-\\s]');
false;
isRegExpSyntaxError('[\\W-\\s]');
false;
isRegExpSyntaxError('[\\s-\\W]');
false;
isRegExpSyntaxError('[\\W-C]');
false;
isRegExpSyntaxError('[\\d-C]');
false;
isRegExpSyntaxError('[\\s-C]');
false;
isRegExpSyntaxError('[\\w-\\b]');
false;
isRegExpSyntaxError('[\\w-\\B]');
false;
