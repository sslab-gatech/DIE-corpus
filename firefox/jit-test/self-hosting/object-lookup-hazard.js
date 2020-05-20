// We shouldn't do the wrong thing in the face of an evil Object.prototype
Object.prototype.get = function () {
  ;
};

({
  a: 1
}).__lookupGetter__("a");

undefined;
delete Object.prototype.get;

Object.prototype.set = function () {
  ;
};

({
  a: 1
}).__lookupSetter__("a");

undefined;
