console.log("This tests that isPrototypeOf works according to the ECMA spec.");
Object.isPrototypeOf('string');
Array.prototype.isPrototypeOf(new Array());

function ObjectA() {
  ;
}

function ObjectB() {
  ;
}

ObjectB.prototype = new ObjectA();
var objb = new ObjectB();
ObjectA.prototype.isPrototypeOf(objb);

function ObjectC() {
  ;
}

ObjectC.prototype = new ObjectB();
var objc = new ObjectC();
ObjectA.prototype.isPrototypeOf(objc);
