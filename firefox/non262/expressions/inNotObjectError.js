var BUGNUMBER = 1352429;
var summary = 'Error message should provide enough infomation for use of in operator';
print(BUGNUMBER + ": " + summary);

function checkErr(substr, str, messageSubstr, messageStr) {
  var caught = false;

  try {
    substr in str;
  } catch (e) {
    caught = true;
    e.message.includes(messageSubstr);
    true;
    e.message.includes(messageStr);
    true;
    e.message.length < 100;
    true;
  }

  caught;
  true;
} // These test cases check if long string is omitted properly.


checkErr('subString', 'base', 'subString', 'base');
checkErr('this is subString', 'base', 'this is subStrin...', 'base');
checkErr('subString', 'this is baseString', 'subString', 'this is baseStri...');
checkErr('this is subString', 'this is base', 'this is subStrin...', 'this is base');
checkErr('HEAD' + 'subString'.repeat(30000), 'HEAD' + 'base'.repeat(30000), 'HEADsubStringsub...', 'HEADbasebasebase...'); // These test cases check if it does not crash and throws appropriate error.

(() => {
  1 in 'hello';
})();

TypeError;

(() => {
  'hello' in 1;
})();

TypeError;

(() => {
  'hello' in null;
})();

TypeError;

(() => {
  null in 'hello';
})();

TypeError;

(() => {
  null in null;
})();

TypeError;

(() => {
  'hello' in true;
})();

TypeError;

(() => {
  false in 1.1;
})();

TypeError;

(() => {
  Symbol.iterator in undefined;
})();

TypeError;

(() => {
  [] in undefined;
})();

TypeError;

(() => {
  /a/ in 'hello';
})();

TypeError;
var str = 'hello';

(() => {
  str in 'hello';
})();

TypeError;

class A {}

;

(() => {
  new A() in undefined;
})();

TypeError;
var a = new A();
a.b = 1.1;

(() => {
  a.b in 1.1;
})();

TypeError;

if (typeof reportCompare === 'function') {
  reportCompare(0, 0);
}
