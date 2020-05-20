console.log("Tests for Array.prototype.includes");
Array.prototype.includes.length;
Array.prototype.includes.name;
[1, 2, 3].includes(2);
[1, 2, 3].includes(4);
[].includes(1);
[1, 2, 3].includes(1, 2);
[1, 2, 3].includes(3, 3);
[1, 2, 3].includes(2, undefined);
[1, 2, 3].includes(2, null);
[1, 2, 3].includes(2, 1, 2);
[1, 2, 3].includes(2, Number);
[1, 2, 3].includes(2, Number(2));
[1, 2, 3].includes(2, 'egg');
[1, 2, 3].includes(2, '3');
[1, 2, 3].includes(3, -1);
[1, 2, 3].includes(1, -2);
[1, 2, 3].includes(1, -3);
[1, 2, NaN, 4].includes(NaN);
['egg', 'bacon', 'sausage'].includes('egg');
['egg', 'bacon', 'sausage'].includes('spinach');
console.log("Array with holes (sparse array)");
var a = [];
a[0] = 'egg';
a[1] = 'bacon';
a[5] = 'sausage';
a[6] = 'spinach';
a[-2] = 'toast';
a.includes('egg');
a.includes('sausage');
a.includes('hashbrown');
a.includes('toast');

try {
  Array.prototype.includes.call(undefined, 1);
} catch (e) {
  ;
}

try {
  Array.prototype.includes.call(null, 1);
} catch (e) {
  ;
}

console.log("Array-like object with invalid lengths");
var obj = {
  0: 1,
  1: 1,
  2: 1,
  length: 0
};
Array.prototype.includes.call(obj, 1);
var obj = {
  0: 1,
  1: 1,
  2: 1,
  length: -0
};
Array.prototype.includes.call(obj, 1);
var obj = {
  0: 1,
  1: 1,
  2: 1,
  length: -3
};
Array.prototype.includes.call(obj, 1);
console.log("The index is converted to integer");
[2, 3, 5, 7, 11, 13, 17].includes(2, NaN);
[2, 3, 5, 7, 11, 13, 17].includes(7, NaN);
[2, 3, 5, 7, 11, 13, 17].includes(17, NaN);
[2, 3, 5, 7, 11, 13, 17].includes(2, Infinity);
[2, 3, 5, 7, 11, 13, 17].includes(7, Infinity);
[2, 3, 5, 7, 11, 13, 17].includes(17, Infinity);
[2, 3, 5, 7, 11, 13, 17].includes(2, -Infinity);
[2, 3, 5, 7, 11, 13, 17].includes(7, -Infinity);
[2, 3, 5, 7, 11, 13, 17].includes(17, -Infinity);
[2, 3, 5, 7, 11, 13, 17].includes(2, Number.MAX_SAFE_INTEGER);
[2, 3, 5, 7, 11, 13, 17].includes(7, Number.MAX_SAFE_INTEGER);
[2, 3, 5, 7, 11, 13, 17].includes(17, Number.MAX_SAFE_INTEGER);
[2, 3, 5, 7, 11, 13, 17].includes(2, Number.MAX_SAFE_INTEGER + 1);
[2, 3, 5, 7, 11, 13, 17].includes(7, Number.MAX_SAFE_INTEGER + 1);
[2, 3, 5, 7, 11, 13, 17].includes(17, Number.MAX_SAFE_INTEGER + 1);
[2, 3, 5, 7, 11, 13, 17].includes(2, Number.MIN_SAFE_INTEGER);
[2, 3, 5, 7, 11, 13, 17].includes(7, Number.MIN_SAFE_INTEGER);
[2, 3, 5, 7, 11, 13, 17].includes(17, Number.MIN_SAFE_INTEGER);
[2, 3, 5, 7, 11, 13, 17].includes(2, Number.MIN_SAFE_INTEGER - 1);
[2, 3, 5, 7, 11, 13, 17].includes(7, Number.MIN_SAFE_INTEGER - 1);
[2, 3, 5, 7, 11, 13, 17].includes(17, Number.MIN_SAFE_INTEGER - 1);
[2, 3, 5, 7, 11, 13, 17].includes(2, {
  valueOf: () => {
    return 1;
  }
});
[2, 3, 5, 7, 11, 13, 17].includes(7, {
  valueOf: () => {
    return 1;
  }
});
[2, 3, 5, 7, 11, 13, 17].includes(17, {
  valueOf: () => {
    return 1;
  }
});
[2, 3, 5, 7, 11, 13, 17].includes(2, {
  toString: () => {
    return '1';
  }
});
[2, 3, 5, 7, 11, 13, 17].includes(7, {
  toString: () => {
    return '1';
  }
});
[2, 3, 5, 7, 11, 13, 17].includes(17, {
  toString: () => {
    return '1';
  }
});
[2, 3, 5, 7, 11, 13, 17].includes(2, '1');
[2, 3, 5, 7, 11, 13, 17].includes(7, '1');
[2, 3, 5, 7, 11, 13, 17].includes(17, '1');
