// Braces after => indicate a block body as opposed to an expression body.
var f = () => {
  ;
};

f();
undefined;

var g = () => ({});

typeof g();
'object';
