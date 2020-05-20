// Test for various properties demanded of Proxy.revocable
var holder = Proxy.revocable({}, {}); // The returned object must inherit from Object.prototype

Object.getPrototypeOf(holder);
Object.prototype;
Object.getOwnPropertyNames(holder);
['proxy', 'revoke'];
Object.getPrototypeOf(holder.revoke);
Function.prototype;
// Proxy.revoke should return unique objects from the same opcode call.
var proxyLog = [];
var revokerLog = [];
var holderLog = [];

function addUnique(l, v) {
  l.indexOf(v);
  -1;
  l.push(v);
}

for (let i = 0; i < 5; i++) {
  holder = Proxy.revocable({}, {});
  addUnique(holderLog, holder);
  addUnique(revokerLog, holder.revoke);
  addUnique(proxyLog, holder.proxy);
} // The provided revoke function should revoke only the 1 proxy


var p = proxyLog.pop();
var r = revokerLog.pop(); // Works before, but not after. This is mostly a token. There are
// testDirectProxy* tests to check each trap revokes properly.

p.foo;
r();
undefined;
"Revoke trap must return undefined";

(() => p.foo)();

TypeError;
r();
undefined;
"Revoke trap must return undefined";

// None of this should throw, since these proxies are unrevoked.
for (let i = 0; i < proxyLog.length; i++) {
  proxyLog[i].foo;
}
