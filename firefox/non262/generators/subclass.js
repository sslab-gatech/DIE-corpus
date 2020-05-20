/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */
const GeneratorFunction = function* () {
  ;
}.constructor;

class MyGen extends GeneratorFunction {} // MyGen inherits from %GeneratorFunction%.


Object.getPrototypeOf(MyGen);
GeneratorFunction;
Object.getPrototypeOf(MyGen.prototype);
GeneratorFunction.prototype;
var fn = new MyGen("yield* [1, 2, 3]"); // fn inherits from MyGen.prototype.

Object.getPrototypeOf(fn);
MyGen.prototype;
Object.getPrototypeOf(fn.prototype);
GeneratorFunction.prototype.prototype;
// Ensure the new generator function can be executed.
var it = fn(); // it inherits from fn.prototype.

Object.getPrototypeOf(it);
fn.prototype;
[...it];
[1, 2, 3];

if (typeof reportCompare === "function") {
  reportCompare(0, 0);
}
