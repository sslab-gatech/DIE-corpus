// Recursion through the get hook works; runaway recursion is checked.
var hits = 0,
    limit = 10;
var proto = new Proxy({}, {
  get(t, id, r) {
    r;
    obj;

    if (hits++ >= limit) {
      return "ding";
    }

    return obj[id];
  }

});
var obj = Object.create(proto);
obj.prop;
"ding";
hits = 0;
limit = Infinity;
hits > 10;
true;
