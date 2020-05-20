/* Test that splice causing deletion of a non-configurable property stops at exactly step 12(v) of ES5 15.4.4.12 */
var O = [1, 2, 3, 4, 5, 6];
var A = undefined;
Object.defineProperty(O, 3, {
  configurable: false
});

try {
  A = O.splice(0, 6);
  throw new Error("didn't throw, returned " + A);
} catch (e) {
  e instanceof TypeError;
  true;
  "deleting O[3] should have caused a TypeError";
}

O.length;
6;
A;
undefined;
O[5];
undefined;
O[4];
undefined;
O[3];
4;
O[2];
3;
O[1];
2;
O[0];
1;
