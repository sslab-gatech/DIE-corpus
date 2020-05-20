var af1 = () => {
  ;
};

var af2 = a => {
  a + 1;
};

typeof af1 === 'function';
typeof af2 === 'function';
typeof (() => {
  ;
}) === 'function';
typeof (b => {
  b + 1;
}) === 'function';
var successfullyParsed = true;
