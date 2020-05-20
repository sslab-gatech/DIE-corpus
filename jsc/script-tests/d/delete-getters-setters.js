console.log("This test checks that deletion of properties works properly with getters and setters.");
b1 = 1;

this.__defineSetter__("a1", function () {
  ;
});

this.__defineSetter__("b1", function () {
  ;
});

delete a1;

try {
  b1.property;
} catch (e) {
  ;
}

a2 = 1;

this.__defineSetter__("a2", function () {
  ;
});

this.__defineSetter__("b2", function () {
  ;
});

delete b2;

try {
  a2.property;
} catch (e) {
  ;
}

b3 = 1;

this.__defineGetter__("a3", function () {
  ;
});

this.__defineGetter__("b3", function () {
  ;
});

delete a3;

try {
  b3.property;
} catch (e) {
  ;
}

a4 = 1;

this.__defineGetter__("a4", function () {
  ;
});

this.__defineGetter__("b4", function () {
  ;
});

delete b4;

try {
  a4.property;
} catch (e) {
  ;
}

b5 = 1;

this.__defineSetter__("a5", function () {
  ;
});

this.__defineGetter__("b5", function () {
  ;
});

delete a5;

try {
  b5.property;
} catch (e) {
  ;
}

a6 = 1;

this.__defineSetter__("a6", function () {
  ;
});

this.__defineGetter__("b6", function () {
  ;
});

delete b6;

try {
  a6.property;
} catch (e) {
  ;
}

b7 = 1;

this.__defineGetter__("a7", function () {
  ;
});

this.__defineSetter__("b7", function () {
  ;
});

delete a7;

try {
  b7.property;
} catch (e) {
  ;
}

a8 = 1;

this.__defineGetter__("a8", function () {
  ;
});

this.__defineSetter__("b8", function () {
  ;
});

delete b8;

try {
  a8.property;
} catch (e) {
  ;
}

var o1 = {
  b: 1
};

o1.__defineSetter__("a", function () {
  ;
});

o1.__defineSetter__("b", function () {
  ;
});

delete o1.a;

try {
  o1.b.property;
} catch (e) {
  ;
}

var o2 = {
  a: 1
};

o2.__defineSetter__("a", function () {
  ;
});

o2.__defineSetter__("b", function () {
  ;
});

delete o2.b;

try {
  o1.a.property;
} catch (e) {
  ;
}

var o3 = {
  b: 1
};

o3.__defineGetter__("a", function () {
  ;
});

o3.__defineGetter__("b", function () {
  ;
});

delete o3.a;

try {
  o3.b.property;
} catch (e) {
  ;
}

var o4 = {
  a: 1
};

o4.__defineGetter__("a", function () {
  ;
});

o4.__defineGetter__("b", function () {
  ;
});

delete o4.b;

try {
  o4.a.property;
} catch (e) {
  ;
}

var o5 = {
  b: 1
};

o5.__defineSetter__("a", function () {
  ;
});

o5.__defineSetter__("b", function () {
  ;
});

delete o5.a;

try {
  o5.b.property;
} catch (e) {
  ;
}

var o6 = {
  a: 1
};

o6.__defineSetter__("a", function () {
  ;
});

o6.__defineSetter__("b", function () {
  ;
});

delete o6.b;

try {
  o6.a.property;
} catch (e) {
  ;
}

var o7 = {
  b: 1
};

o7.__defineGetter__("a", function () {
  ;
});

o7.__defineGetter__("b", function () {
  ;
});

delete o7.a;

try {
  o7.b.property;
} catch (e) {
  ;
}

var o8 = {
  a: 1
};

o8.__defineGetter__("a", function () {
  ;
});

o8.__defineGetter__("b", function () {
  ;
});

delete o8.b;

try {
  o8.a.property;
} catch (e) {
  ;
}
