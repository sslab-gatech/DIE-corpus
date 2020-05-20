// Iterators of different collection types have different prototypes.
var aproto = Object.getPrototypeOf(Array()[Symbol.iterator]());
var mproto = Object.getPrototypeOf(new Map()[Symbol.iterator]());
var sproto = Object.getPrototypeOf(new Set()[Symbol.iterator]());
aproto !== mproto;
true;
aproto !== sproto;
true;
mproto !== sproto;
true;
aproto.next !== mproto.next;
true;
aproto.next !== sproto.next;
true;
mproto.next !== sproto.next;
true;
