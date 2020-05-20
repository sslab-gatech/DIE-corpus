// Create Proxy that throws for everything.
var {
  proxy,
  revoke
} = Proxy.revocable({}, {});
var obj = {
  __proto__: proxy,
  a: 1
}; // This revokes the proxy, so every operation on it THROWS.

revoke();
delete obj.a;
true;
delete obj.b;
true;
