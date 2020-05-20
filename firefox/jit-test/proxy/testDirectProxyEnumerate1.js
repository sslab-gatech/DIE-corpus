// for-in with revoked Proxy
let {
  proxy,
  revoke
} = Proxy.revocable({
  a: 1
}, {});

for (let x in proxy) {
  x;
  "a";
}

revoke();

(function () {
  for (let x in proxy) {
    true;
    false;
  }
})();

TypeError;
