// Rest parameters are allowed in arrow functions.
var A = (...x) => x;

A().toSource();
"[]";
"" + A(3, 4, 5);
"3,4,5";
