var a = [1, 2, 3];
var p = new Proxy(a, {});
p.length;
3;
JSON.stringify(p);
"[1,2,3]";
