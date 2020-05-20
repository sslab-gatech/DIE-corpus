console.log("Test to ensure that we handle caching of prototype chains containing dictionaries.");

var Test = function () {
  ;
};

var methodCount = 65;

for (var i = 0; i < methodCount; i++) {
  Test.prototype['myMethod' + i] = function () {
    ;
  };
}

var test1 = new Test();

for (var k in test1) {
  ;
}

Test.prototype.myAdditionalMethod = function () {
  ;
};

var test2 = new Test();
var j = k;
var foundNewPrototypeProperty = false;

for (var k in test2) {
  if ("myAdditionalMethod" == k) {
    foundNewPrototypeProperty = true;
  }
}

foundNewPrototypeProperty;

var Test = function () {
  ;
};

for (var i = 0; i < methodCount; i++) {
  Test.prototype['myMethod' + i] = function () {
    ;
  };
}

var test1 = new Test();

for (var k in test1) {
  ;
}

delete Test.prototype[k];
var test2 = new Test();
var j = k;
var foundRemovedPrototypeProperty = false;

for (var k in test2) {
  if (j == k) {
    foundRemovedPrototypeProperty = true;
  }
}

foundRemovedPrototypeProperty;

var Test = function () {
  ;
};

for (var i = 0; i < methodCount; i++) {
  Test.prototype['myMethod' + i] = function () {
    ;
  };
}

function update(test) {
  test.newProperty = true;
}

var test1 = new Test();
update(test1);
var test2 = new Test();
update(test2);
var test3 = new Test();
update(test3);
var calledNewPrototypeSetter = false;

Test.prototype.__defineSetter__("newProperty", function () {
  calledNewPrototypeSetter = true;
});

var test4 = new Test();
update(test4);
calledNewPrototypeSetter;
var test4 = {
  __proto__: {
    prop: "on prototype"
  }
};

for (var i = 0; i < 200; i++) {
  test4[i] = [i];
}

var test5 = {
  __proto__: {
    __proto__: {
      prop: "on prototype's prototype"
    }
  }
};

for (var i = 0; i < 200; i++) {
  test5[i] = [i];
}

getTestProperty = function (o) {
  return o.prop;
};

getTestProperty(test4);
getTestProperty(test4);
getTestProperty(test4);
test4.prop = "on self";
getTestProperty(test4);

getTestProperty = function (o) {
  return o.prop;
};

getTestProperty(test5);
getTestProperty(test5);
getTestProperty(test5);
test5.prop = "on self";
getTestProperty(test5);
