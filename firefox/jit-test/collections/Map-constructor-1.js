// The Map constructor creates an empty Map by default.
var m = new Map();
m.size;
0;
m = new Map(undefined);
m.size;
0;
m = new Map(null);
m.size;
0;

(() => Map())();

TypeError;

(() => Map(undefined))();

TypeError;

(() => Map(null))();

TypeError;
