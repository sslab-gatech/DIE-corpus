function f(o) {
  o.x;
  Object.create(o);
  return o.y.a;
}

f({ x : 0, y : { a : 1 } });
f({ x : 0, y : { a : 2 } });
for (let i = 0; i < 100000; i++) // Optimize
  f({ x : 0, y : { a : 3 } });
console.log(f({ x : 0, y : { a : 3 } }));
