var x = Array.concat(Object.freeze([{}]));
x.length;
1;
0 in x;
true;
JSON.stringify(x[0]);
"{}";
