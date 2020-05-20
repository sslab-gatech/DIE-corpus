console.log("This test checks String.trim(), String.trimLeft() and String.trimRight() methods."); //references to trim(), trimLeft() and trimRight() functions for testing Function's *.call() and *.apply() methods

var trim = String.prototype.trim;
var trimLeft = String.prototype.trimLeft;
var trimRight = String.prototype.trimRight;
var testString = 'foo bar';
var trimString = '';
var leftTrimString = '';
var rightTrimString = '';
var wsString = '';
var whitespace = [{
  s: '\u0009',
  t: 'HORIZONTAL TAB'
}, {
  s: '\u000A',
  t: 'LINE FEED OR NEW LINE'
}, {
  s: '\u000B',
  t: 'VERTICAL TAB'
}, {
  s: '\u000C',
  t: 'FORMFEED'
}, {
  s: '\u000D',
  t: 'CARRIAGE RETURN'
}, {
  s: '\u0020',
  t: 'SPACE'
}, {
  s: '\u00A0',
  t: 'NO-BREAK SPACE'
}, {
  s: '\u2000',
  t: 'EN QUAD'
}, {
  s: '\u2001',
  t: 'EM QUAD'
}, {
  s: '\u2002',
  t: 'EN SPACE'
}, {
  s: '\u2003',
  t: 'EM SPACE'
}, {
  s: '\u2004',
  t: 'THREE-PER-EM SPACE'
}, {
  s: '\u2005',
  t: 'FOUR-PER-EM SPACE'
}, {
  s: '\u2006',
  t: 'SIX-PER-EM SPACE'
}, {
  s: '\u2007',
  t: 'FIGURE SPACE'
}, {
  s: '\u2008',
  t: 'PUNCTUATION SPACE'
}, {
  s: '\u2009',
  t: 'THIN SPACE'
}, {
  s: '\u200A',
  t: 'HAIR SPACE'
}, {
  s: '\u3000',
  t: 'IDEOGRAPHIC SPACE'
}, {
  s: '\u2028',
  t: 'LINE SEPARATOR'
}, {
  s: '\u2029',
  t: 'PARAGRAPH SEPARATOR'
}];

for (var i = 0; i < whitespace.length; i++) {
  whitespace[i].s.trim();
  whitespace[i].s.trimLeft();
  whitespace[i].s.trimRight();
  wsString += whitespace[i].s;
}

trimString = wsString + testString + wsString;
leftTrimString = testString + wsString; //trimmed from the left

rightTrimString = wsString + testString; //trimmed from the right

wsString.trim();
wsString.trimLeft();
wsString.trimRight();
trimString.trim();
trimString.trimLeft();
trimString.trimRight();
leftTrimString.trim();
leftTrimString.trimLeft();
leftTrimString.trimRight();
rightTrimString.trim();
rightTrimString.trimLeft();
rightTrimString.trimRight();
var testValues = ["0", "Infinity", "NaN", "true", "false", "({})", "({toString:function(){return 'wibble'}})", "['an','array']", "'\u200b'"];

for (var i = 0; i < testValues.length; i++) {
  trim.call(testValues[i]);
  trimLeft.call(testValues[i]);
  trimRight.call(testValues[i]);
}
