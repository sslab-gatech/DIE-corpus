/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */
// Ensure function length is set correctly when a destructuring rest parameter
// is present.
(function (...[]) {
  ;
}).length;
0;
(function (...[a]) {
  ;
}).length;
0;
(function (...[a = 0]) {
  ;
}).length;
0;
(function (...{}) {
  ;
}).length;
0;
(function (...{
  p: a
}) {
  ;
}).length;
0;
(function (...{
  p: a = 0
}) {
  ;
}).length;
0;
(function (...{
  a = 0
}) {
  ;
}).length;
0;
(function (x, ...[]) {
  ;
}).length;
1;
(function (x, ...[a]) {
  ;
}).length;
1;
(function (x, ...[a = 0]) {
  ;
}).length;
1;
(function (x, ...{}) {
  ;
}).length;
1;
(function (x, ...{
  p: a
}) {
  ;
}).length;
1;
(function (x, ...{
  p: a = 0
}) {
  ;
}).length;
1;
(function (x, ...{
  a = 0
}) {
  ;
}).length;
1;
(function (x, y, ...[]) {
  ;
}).length;
2;
(function (x, y, ...[a]) {
  ;
}).length;
2;
(function (x, y, ...[a = 0]) {
  ;
}).length;
2;
(function (x, y, ...{}) {
  ;
}).length;
2;
(function (x, y, ...{
  p: a
}) {
  ;
}).length;
2;
(function (x, y, ...{
  p: a = 0
}) {
  ;
}).length;
2;
(function (x, y, ...{
  a = 0
}) {
  ;
}).length;
2;
(function (x, y = 0, ...[]) {
  ;
}).length;
1;
(function (x, y = 0, ...[a]) {
  ;
}).length;
1;
(function (x, y = 0, ...[a = 0]) {
  ;
}).length;
1;
(function (x, y = 0, ...{}) {
  ;
}).length;
1;
(function (x, y = 0, ...{
  p: a
}) {
  ;
}).length;
1;
(function (x, y = 0, ...{
  p: a = 0
}) {
  ;
}).length;
1;
(function (x, y = 0, ...{
  a = 0
}) {
  ;
}).length;
1;

if (typeof reportCompare === "function") {
  reportCompare(0, 0);
}
