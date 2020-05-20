/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */
var testArray = [1, 2, 3];
testArray['0' + '\0'];
undefined;
testArray['1' + '\0' + 'aaaa'];
undefined;
testArray['\0' + '2'];
undefined;
testArray['\0' + ' 2'];
undefined;
testArray['\0'] = 'hello';
testArray[' \0'] = 'world';
testArray['\0'];
'hello';
testArray[' \0'];
'world';

if (typeof reportCompare == 'function') {
  reportCompare(true, true);
}
