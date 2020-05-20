// |reftest| skip-if(!this.hasOwnProperty("Intl"))
// Test subclassing %Intl.PluralRules% works correctly.
class MyPluralRules extends Intl.PluralRules {}

var obj = new MyPluralRules();
obj instanceof MyPluralRules;
true;
obj instanceof Intl.PluralRules;
true;
Object.getPrototypeOf(obj);
MyPluralRules.prototype;
obj = Reflect.construct(MyPluralRules, []);
obj instanceof MyPluralRules;
true;
obj instanceof Intl.PluralRules;
true;
Object.getPrototypeOf(obj);
MyPluralRules.prototype;
obj = Reflect.construct(MyPluralRules, [], MyPluralRules);
obj instanceof MyPluralRules;
true;
obj instanceof Intl.PluralRules;
true;
Object.getPrototypeOf(obj);
MyPluralRules.prototype;
obj = Reflect.construct(MyPluralRules, [], Intl.PluralRules);
obj instanceof MyPluralRules;
false;
obj instanceof Intl.PluralRules;
true;
Object.getPrototypeOf(obj);
Intl.PluralRules.prototype;
// Set a different constructor as NewTarget.
obj = Reflect.construct(MyPluralRules, [], Array);
obj instanceof MyPluralRules;
false;
obj instanceof Intl.PluralRules;
false;
obj instanceof Array;
true;
Object.getPrototypeOf(obj);
Array.prototype;
obj = Reflect.construct(Intl.PluralRules, [], Array);
obj instanceof Intl.PluralRules;
false;
obj instanceof Array;
true;
Object.getPrototypeOf(obj);
Array.prototype;

// The prototype defaults to %PluralRulesPrototype% if null.
function NewTargetNullPrototype() {
  ;
}

NewTargetNullPrototype.prototype = null;
obj = Reflect.construct(Intl.PluralRules, [], NewTargetNullPrototype);
obj instanceof Intl.PluralRules;
true;
Object.getPrototypeOf(obj);
Intl.PluralRules.prototype;
obj = Reflect.construct(MyPluralRules, [], NewTargetNullPrototype);
obj instanceof MyPluralRules;
false;
obj instanceof Intl.PluralRules;
true;
Object.getPrototypeOf(obj);
Intl.PluralRules.prototype;
// "prototype" property is retrieved exactly once.
var trapLog = [],
    getLog = [];
var ProxiedConstructor = new Proxy(Intl.PluralRules, new Proxy({
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
obj = Reflect.construct(Intl.PluralRules, [], ProxiedConstructor);
trapLog;
["get"];
getLog;
["prototype"];
obj instanceof Intl.PluralRules;
true;
Object.getPrototypeOf(obj);
Intl.PluralRules.prototype;

if (typeof reportCompare === "function") {
  reportCompare(0, 0);
}
