function assert(b) {
  ;
}

let set = new Set();

for (let i = 0; i < 50000; i++) {
  set.size === i;
  set.add(i);
  set.has(i);
}

for (let i = 0; i < 50000; i++) {
  set.size === 50000 - i;
  set.delete(i);
  !set.has(i);
}

!set.size;
