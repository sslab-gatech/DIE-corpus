/* -*- indent-tabs-mode: nil; js-indent-level: 2 -*- */

/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */

/* Simple identifier labels. */
testLenientAndStrict('({x:1, x:1})', parsesSuccessfully, parsesSuccessfully);
true;
testLenientAndStrict('({x:1, y:1})', parsesSuccessfully, parsesSuccessfully);
true;
testLenientAndStrict('({x:1, y:1, x:1})', parsesSuccessfully, parsesSuccessfully);
true;
testLenientAndStrict('({x:1,   "x":1})', parsesSuccessfully, parsesSuccessfully);
true;
testLenientAndStrict('({"x":1, x:1})', parsesSuccessfully, parsesSuccessfully);
true;
testLenientAndStrict('({"x":1, "x":1})', parsesSuccessfully, parsesSuccessfully);
true;
testLenientAndStrict('({1.5:1, 1.5:1})', parsesSuccessfully, parsesSuccessfully);
true;
testLenientAndStrict('({1.5:1, 15e-1:1})', parsesSuccessfully, parsesSuccessfully);
true;
testLenientAndStrict('({6.02214179e23:1, 6.02214179e23:1})', parsesSuccessfully, parsesSuccessfully);
true;
testLenientAndStrict('({6.02214179e23:1, 3.1415926535:1})', parsesSuccessfully, parsesSuccessfully);
true;
testLenientAndStrict('({ 1: 1, "1": 2 })', parsesSuccessfully, parsesSuccessfully);
true;
testLenientAndStrict('({ "1": 1, 1: 2 })', parsesSuccessfully, parsesSuccessfully);
true;
testLenientAndStrict('({ 2.5: 1, "2.5": 2 })', parsesSuccessfully, parsesSuccessfully);
true;
testLenientAndStrict('({ "2.5": 1, 2.5: 2 })', parsesSuccessfully, parsesSuccessfully);
true;
testLenientAndStrict('({a:1, b:1, c:1, d:1, e:1, f:1, g:1, h:1, i:1, j:1, k:1, l:1, m:1, n:1, o:1, p:1, q:1, r:1, s:1, t:1, u:1, v:1, w:1, x:1, y:1, z:1})', parsesSuccessfully, parsesSuccessfully);
true;
testLenientAndStrict('({a:1, b:1, c:1, d:1, e:1, f:1, g:1, h:1, i:1, j:1, k:1, l:1, m:1, n:1, o:1, p:1, q:1, r:1, s:1, t:1, u:1, v:1, w:1, x:1, y:1, a:1})', parsesSuccessfully, parsesSuccessfully);
true;
testLenientAndStrict('({get x() {}, x:1})', parsesSuccessfully, parsesSuccessfully);
true;
testLenientAndStrict('({x:1, get x() {}})', parsesSuccessfully, parsesSuccessfully);
true;
testLenientAndStrict('({set x(q) {}, x:1})', parsesSuccessfully, parsesSuccessfully);
true;
testLenientAndStrict('({x:1, set x(q) {}})', parsesSuccessfully, parsesSuccessfully);
true;
testLenientAndStrict('({1:1, set 1(q) {}})', parsesSuccessfully, parsesSuccessfully);
true;
testLenientAndStrict('({set 1(q) {}, 1:1})', parsesSuccessfully, parsesSuccessfully);
true;
testLenientAndStrict('({"1":1, set 1(q) {}})', parsesSuccessfully, parsesSuccessfully);
true;
testLenientAndStrict('({set 1(q) {}, "1":1})', parsesSuccessfully, parsesSuccessfully);
true;
testLenientAndStrict('({get x() {}, set x(q) {}})', parsesSuccessfully, parsesSuccessfully);
true;
testLenientAndStrict('({set x(q) {}, get x() {}})', parsesSuccessfully, parsesSuccessfully);
true;
testLenientAndStrict('({get x() {}, set x(q) {}, x:1})', parsesSuccessfully, parsesSuccessfully);
true;
testLenientAndStrict('({set x(q) {}, get x() {}, x:1})', parsesSuccessfully, parsesSuccessfully);
true;
testLenientAndStrict('({get x() {}, get x() {}})', parsesSuccessfully, parsesSuccessfully);
true;
testLenientAndStrict('({set x(q) {}, set x(q) {}})', parsesSuccessfully, parsesSuccessfully);
true;
testLenientAndStrict('({get x() {}, set x(q) {}, y:1})', parsesSuccessfully, parsesSuccessfully);
true;
reportCompare(true, true);
