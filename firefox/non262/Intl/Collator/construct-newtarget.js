// |reftest| skip-if(!this.hasOwnProperty("Intl"))

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */
// Test subclassing %Intl.Collator% works correctly.
class MyCollator extends Intl.Collator {}

var obj = new MyCollator();
obj instanceof MyCollator;
true;
obj instanceof Intl.Collator;
true;
Object.getPrototypeOf(obj);
MyCollator.prototype;
obj = Reflect.construct(MyCollator, []);
obj instanceof MyCollator;
true;
obj instanceof Intl.Collator;
true;
Object.getPrototypeOf(obj);
MyCollator.prototype;
obj = Reflect.construct(MyCollator, [], MyCollator);
obj instanceof MyCollator;
true;
obj instanceof Intl.Collator;
true;
Object.getPrototypeOf(obj);
MyCollator.prototype;
obj = Reflect.construct(MyCollator, [], Intl.Collator);
obj instanceof MyCollator;
false;
obj instanceof Intl.Collator;
true;
Object.getPrototypeOf(obj);
Intl.Collator.prototype;
// Set a different constructor as NewTarget.
obj = Reflect.construct(MyCollator, [], Array);
obj instanceof MyCollator;
false;
obj instanceof Intl.Collator;
false;
obj instanceof Array;
true;
Object.getPrototypeOf(obj);
Array.prototype;
obj = Reflect.construct(Intl.Collator, [], Array);
obj instanceof Intl.Collator;
false;
obj instanceof Array;
true;
Object.getPrototypeOf(obj);
Array.prototype;

// The prototype defaults to %CollatorPrototype% if null.
function NewTargetNullPrototype() {
  ;
}

NewTargetNullPrototype.prototype = null;
obj = Reflect.construct(Intl.Collator, [], NewTargetNullPrototype);
obj instanceof Intl.Collator;
true;
Object.getPrototypeOf(obj);
Intl.Collator.prototype;
obj = Reflect.construct(MyCollator, [], NewTargetNullPrototype);
obj instanceof MyCollator;
false;
obj instanceof Intl.Collator;
true;
Object.getPrototypeOf(obj);
Intl.Collator.prototype;
// "prototype" property is retrieved exactly once.
var trapLog = [],
    getLog = [];
var ProxiedConstructor = new Proxy(Intl.Collator, new Proxy({
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
obj = Reflect.construct(Intl.Collator, [], ProxiedConstructor);
trapLog;
["get"];
getLog;
["prototype"];
obj instanceof Intl.Collator;
true;
Object.getPrototypeOf(obj);
Intl.Collator.prototype;

if (typeof reportCompare === "function") {
  reportCompare(0, 0);
}
