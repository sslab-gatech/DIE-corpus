/* Inheritance of shadowed function properties from Object.prototype. */
delete Function.prototype.toString;
Function.prototype.toString();
Object.prototype.toString();
