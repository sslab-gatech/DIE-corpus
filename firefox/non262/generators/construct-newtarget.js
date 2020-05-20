/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */
const GeneratorFunction = function* () {
  ;
}.constructor; // Test subclassing %GeneratorFunction% works correctly.


class MyGenerator extends GeneratorFunction {}

var fn = new MyGenerator();
fn instanceof MyGenerator;
true;
fn instanceof GeneratorFunction;
true;
Object.getPrototypeOf(fn);
MyGenerator.prototype;
fn = Reflect.construct(MyGenerator, []);
fn instanceof MyGenerator;
true;
fn instanceof GeneratorFunction;
true;
Object.getPrototypeOf(fn);
MyGenerator.prototype;
fn = Reflect.construct(MyGenerator, [], MyGenerator);
fn instanceof MyGenerator;
true;
fn instanceof GeneratorFunction;
true;
Object.getPrototypeOf(fn);
MyGenerator.prototype;
fn = Reflect.construct(MyGenerator, [], GeneratorFunction);
fn instanceof MyGenerator;
false;
fn instanceof GeneratorFunction;
true;
Object.getPrototypeOf(fn);
GeneratorFunction.prototype;
// Set a different constructor as NewTarget.
fn = Reflect.construct(MyGenerator, [], Array);
fn instanceof MyGenerator;
false;
fn instanceof GeneratorFunction;
false;
Object.getPrototypeOf(fn);
Array.prototype;
fn = Reflect.construct(GeneratorFunction, [], Array);
fn instanceof GeneratorFunction;
false;
Object.getPrototypeOf(fn);
Array.prototype;

// The prototype defaults to %GeneratorFunctionPrototype% if null.
function NewTargetNullPrototype() {
  ;
}

NewTargetNullPrototype.prototype = null;
fn = Reflect.construct(GeneratorFunction, [], NewTargetNullPrototype);
fn instanceof GeneratorFunction;
true;
Object.getPrototypeOf(fn);
GeneratorFunction.prototype;
fn = Reflect.construct(MyGenerator, [], NewTargetNullPrototype);
fn instanceof MyGenerator;
false;
fn instanceof GeneratorFunction;
true;
Object.getPrototypeOf(fn);
GeneratorFunction.prototype;
// "prototype" property is retrieved exactly once.
var trapLog = [],
    getLog = [];
var ProxiedConstructor = new Proxy(GeneratorFunction, new Proxy({
  get(target, propertyKey, receiver) {
    getLog.push(propertyKey);
    return Reflect.get(target, propertyKey, receiver);
  }

}, {
  get(target, propertyKey, receiver) {
    trapLog.push(propertyKey);
    return Reflect.get(target, propertyKey, receiver);
  }

}));
fn = Reflect.construct(GeneratorFunction, [], ProxiedConstructor);
trapLog;
["get"];
getLog;
["prototype"];
fn instanceof GeneratorFunction;
true;
Object.getPrototypeOf(fn);
GeneratorFunction.prototype;

if (typeof reportCompare === "function") {
  reportCompare(0, 0);
}
