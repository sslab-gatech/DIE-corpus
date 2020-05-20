var o = {
  0: 1,
  1: 2,
  2: 3,
  length: 3
};
Array.prototype.splice.call(o, 0, 1);
o[0];
2;
o[1];
3;
Object.getOwnPropertyDescriptor(o, 2);
undefined;
"2" in o;
false;
o.length;
2;
