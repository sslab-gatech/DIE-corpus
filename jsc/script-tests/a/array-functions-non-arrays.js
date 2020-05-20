console.log("Test some array functions on non-array objects.");

function properties(object, extraName1, extraName2, extraName3) {
  var string = ""; // destructive, lists properties

  var names = [];
  var enumerables = {};

  for (propertyName in object) {
    names.push(propertyName);
    enumerables[propertyName] = 1;
  }

  names.push("length");
  names.push(extraName1);
  names.push(extraName2);
  names.push(extraName3);
  names.sort();
  var propertyStrings = [];

  for (i = 0; i < names.length; ++i) {
    var name = names[i];

    if (name == names[i - 1]) {
      continue;
    }

    if (!(name in object)) {
      continue;
    }

    var propertyString = name + ":" + object[name];
    var flags = [];

    if (!object.hasOwnProperty(name)) {
      flags.push("FromPrototype");
    }

    if (!enumerables[name]) {
      flags.push("DontEnum");
    }

    if (name != "length") {
      try {
        object[name] = "ReadOnlyTestValue";
      } catch (e) {
        ;
      }

      if (object[name] != "ReadOnlyTestValue") {
        flags.push("ReadOnly");
      }
    }

    delete object[name];

    if (object.hasOwnProperty(name)) {
      flags.push("DontDelete");
    }

    flags.sort();

    if (flags.length) {
      propertyString += "(" + flags.join(", ") + ")";
    }

    propertyStrings.push(propertyString);
  }

  return propertyStrings.join(", ");
}

var x;
var oneItemPrototype = {
  length: 1,
  0: 'a'
};

function OneItemConstructor() {
  ;
}

OneItemConstructor.prototype = oneItemPrototype;
var twoItemPrototype = {
  length: 2,
  0: 'b',
  1: 'a'
};

function TwoItemConstructor() {
  ;
}

TwoItemConstructor.prototype = twoItemPrototype;
properties(['b', 'a']);
properties({
  length: 2,
  0: 'b',
  1: 'a'
});
properties(new OneItemConstructor());
properties(new TwoItemConstructor());
Array.prototype.toString.call({});
Array.prototype.toString.call(new Date());
Array.prototype.toString.call({
  sort: function () {
    return 'sort';
  }
});
Array.prototype.toString.call({
  join: function () {
    return 'join';
  }
});
Array.prototype.toString.call({
  __proto__: Array.prototype,
  0: 'a',
  1: 'b',
  2: 'c',
  length: 3
});
({
  __proto__: Array.prototype,
  0: 'a',
  1: 'b',
  2: 'c',
  length: 3
}).toString();
Array.prototype.toString.call({
  __proto__: Array.prototype,
  0: 'a',
  1: 'b',
  2: 'c',
  length: 3,
  join: function () {
    return 'join';
  }
});
({
  __proto__: Array.prototype,
  0: 'a',
  1: 'b',
  2: 'c',
  length: 3,
  join: function () {
    return 'join';
  }
}).toString();

Number.prototype.join = function () {
  return "Number.prototype.join:" + this;
};

Array.prototype.toString.call(42);
var arrayJoin = Array.prototype.join;

Array.prototype.join = function () {
  return 'array-join';
};

[0, 1, 2].toString();
Array.prototype.join = arrayJoin;
Array.prototype.toLocaleString.call({});
Array.prototype.concat.call(x = {
  length: 2,
  0: 'b',
  1: 'a'
});
Array.prototype.join.call({});
Array.prototype.join.call(['b', 'a']);
Array.prototype.join.call({
  length: 2,
  0: 'b',
  1: 'a'
});
Array.prototype.join.call(new TwoItemConstructor());
Array.prototype.pop.call({});
Array.prototype.pop.call({
  length: 2,
  0: 'b',
  1: 'a'
});
Array.prototype.pop.call({
  length: 2,
  0: 'b',
  1: 'a'
});
Array.prototype.pop.call(new TwoItemConstructor());
Array.prototype.pop.call(x = {});
properties(x);
Array.prototype.pop.call(x = ['b', 'a']);
properties(x);
Array.prototype.pop.call(x = {
  length: 2,
  0: 'b',
  1: 'a'
});
properties(x);
Array.prototype.pop.call(x = new TwoItemConstructor());
properties(x);
Array.prototype.push.call({});
Array.prototype.push.call(['b', 'a']);
Array.prototype.push.call({
  length: 2,
  0: 'b',
  1: 'a'
});
Array.prototype.push.call(new TwoItemConstructor());
Array.prototype.push.call(x = {});
properties(x);
Array.prototype.push.call(x = ['b', 'a']);
properties(x);
Array.prototype.push.call(x = {
  length: 2,
  0: 'b',
  1: 'a'
});
properties(x);
Array.prototype.push.call(x = new TwoItemConstructor());
properties(x);
Array.prototype.push.call({}, 'c');
Array.prototype.push.call(['b', 'a'], 'c');
Array.prototype.push.call({
  length: 2,
  0: 'b',
  1: 'a'
}, 'c');
Array.prototype.push.call(new TwoItemConstructor(), 'c');
Array.prototype.push.call(x = {}, 'c');
properties(x);
Array.prototype.push.call(x = ['b', 'a'], 'c');
properties(x);
Array.prototype.push.call(x = {
  length: 2,
  0: 'b',
  1: 'a'
}, 'c');
properties(x);
Array.prototype.push.call(x = new TwoItemConstructor(), 'c');
properties(x);
properties(Array.prototype.reverse.call({}));
properties(Array.prototype.reverse.call(['b', 'a']));
properties(Array.prototype.reverse.call({
  length: 2,
  0: 'b',
  1: 'a'
}));
properties(Array.prototype.reverse.call(new OneItemConstructor()));
properties(Array.prototype.reverse.call(new TwoItemConstructor()));
Array.prototype.shift.call({});
Array.prototype.shift.call(['b', 'a']);
Array.prototype.shift.call({
  length: 2,
  0: 'b',
  1: 'a'
});
Array.prototype.shift.call(new TwoItemConstructor());
Array.prototype.shift.call(x = {});
properties(x);
Array.prototype.shift.call(x = ['b', 'a']);
properties(x);
Array.prototype.shift.call(x = {
  length: 2,
  0: 'b',
  1: 'a'
});
properties(x);
Array.prototype.shift.call(x = new TwoItemConstructor());
properties(x);
Array.prototype.slice.call({}, 0, 1);
Array.prototype.slice.call(['b', 'a'], 0, 1);
Array.prototype.slice.call({
  length: 2,
  0: 'b',
  1: 'a'
}, 0, 1);
Array.prototype.slice.call(new TwoItemConstructor(), 0, 1);
properties(Array.prototype.sort.call({}));
properties(Array.prototype.sort.call(['b', 'a']));
properties(Array.prototype.sort.call({
  length: 2,
  0: 'b',
  1: 'a'
}));
properties(Array.prototype.sort.call(new OneItemConstructor()));
properties(Array.prototype.sort.call(new TwoItemConstructor()));
Array.prototype.splice.call({}, 0, 1);
Array.prototype.splice.call(['b', 'a'], 0, 1);
Array.prototype.splice.call({
  length: 2,
  0: 'b',
  1: 'a'
}, 0, 1);
Array.prototype.splice.call(new TwoItemConstructor(), 0, 1);
Array.prototype.splice.call(x = {}, 0, 1);
properties(x);
Array.prototype.splice.call(x = ['b', 'a'], 0, 1);
properties(x);
Array.prototype.splice.call(x = {
  length: 2,
  0: 'b',
  1: 'a'
}, 0, 1);
properties(x);
Array.prototype.splice.call(x = new TwoItemConstructor(), 0, 1);
properties(x);
Array.prototype.unshift.call({});
Array.prototype.unshift.call(['b', 'a']);
Array.prototype.unshift.call({
  length: 2,
  0: 'b',
  1: 'a'
});
Array.prototype.unshift.call(new TwoItemConstructor());
Array.prototype.unshift.call(x = {});
properties(x);
Array.prototype.unshift.call(x = ['b', 'a']);
properties(x);
Array.prototype.unshift.call(x = {
  length: 2,
  0: 'b',
  1: 'a'
});
properties(x);
Array.prototype.unshift.call(x = new TwoItemConstructor());
properties(x);
Array.prototype.unshift.call({}, 'c');
Array.prototype.unshift.call(['b', 'a'], 'c');
Array.prototype.unshift.call({
  length: 2,
  0: 'b',
  1: 'a'
}, 'c');
Array.prototype.unshift.call(new TwoItemConstructor(), 'c');
Array.prototype.unshift.call(x = {}, 'c');
properties(x);
Array.prototype.unshift.call(x = ['b', 'a'], 'c');
properties(x);
Array.prototype.unshift.call(x = {
  length: 2,
  0: 'b',
  1: 'a'
}, 'c');
properties(x);
Array.prototype.unshift.call(x = new TwoItemConstructor(), 'c');
properties(x); // FIXME: Add tests for every, forEach, some, indexOf, lastIndexOf, filter, and map

console.log("Array-like object with invalid lengths");

var throwError = function throwError() {
  throw new Error("should not reach here");
};

try {
  var obj = {
    0: 1,
    1: 2,
    2: 3,
    length: 0
  };
  Array.prototype.forEach.call(obj, throwError);
} catch (e) {
  ;
}

try {
  var obj = {
    0: 1,
    1: 2,
    2: 3,
    length: -0
  };
  Array.prototype.forEach.call(obj, throwError);
} catch (e) {
  ;
}

try {
  var obj = {
    0: 1,
    1: 2,
    2: 3,
    length: -3
  };
  Array.prototype.forEach.call(obj, throwError);
} catch (e) {
  ;
}

var obj = {
  0: 1,
  1: 2,
  2: 3,
  length: 0
};
Array.prototype.map.call(obj, throwError);
var obj = {
  0: 1,
  1: 2,
  2: 3,
  length: -0
};
Array.prototype.map.call(obj, throwError);
var obj = {
  0: 1,
  1: 2,
  2: 3,
  length: -3
};
Array.prototype.map.call(obj, throwError);
var obj = {
  0: 1,
  1: 2,
  2: 3,
  length: 0
};
Array.prototype.some.call(obj, throwError);
var obj = {
  0: 1,
  1: 2,
  2: 3,
  length: -0
};
Array.prototype.some.call(obj, throwError);
var obj = {
  0: 1,
  1: 2,
  2: 3,
  length: -3
};
Array.prototype.some.call(obj, throwError);
