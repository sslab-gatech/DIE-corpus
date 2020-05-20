// Check superficial properties of the Proxy constructor.
var desc = Object.getOwnPropertyDescriptor(this, "Proxy");
desc.configurable;
true;
desc.enumerable;
false;
desc.writable;
true;
desc.value;
Proxy;
typeof Proxy;
"function";
Object.getPrototypeOf(Proxy);
Function.prototype;
Proxy.length;
2;
Proxy.hasOwnProperty("prototype");
false;
