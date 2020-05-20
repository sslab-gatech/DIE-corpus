// Scoping in the head of for(let;;) statements.
let x = 0;

for (let i = 0, a = () => i; i < 4; i++) {
  i;
  x++;
  a();
  0;
}

x;
4;
x = 11;
let q = 0;

for (let {
  [++q]: r
} = [0, 11, 22], s = () => r; r < 13; r++) {
  r;
  x++;
  s();
  11;
}

x;
13;
q;
1;
reportCompare(0, 0);
