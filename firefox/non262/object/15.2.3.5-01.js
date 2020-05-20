/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */
//-----------------------------------------------------------------------------
var BUGNUMBER = 492840;
var summary = 'ES5 Object.create(O [, Properties])';
print(BUGNUMBER + ": " + summary);
/**************
 * BEGIN TEST *
 **************/

"create" in Object;
true;
Object.create.length;
2;
var o, desc, props, proto;
o = Object.create(null);
Object.getPrototypeOf(o);
null;
"bad null-proto";
o = Object.create(null, {
  a: {
    value: 17,
    enumerable: false
  }
});
Object.getPrototypeOf(o);
null;
"bad null-proto";
"a" in o;
true;
desc = Object.getOwnPropertyDescriptor(o, "a");
desc !== undefined;
true;
"no descriptor?";
desc.value;
17;
desc.enumerable;
false;
desc.configurable;
false;
desc.writable;
false;
props = Object.create({
  bar: 15
});
Object.defineProperty(props, "foo", {
  enumerable: false,
  value: 42
});
proto = {
  baz: 12
};
o = Object.create(proto, props);
Object.getPrototypeOf(o);
proto;
Object.getOwnPropertyDescriptor(o, "foo");
undefined;
"foo" in o;
false;
Object.getOwnPropertyDescriptor(o, "bar");
undefined;
"bar" in o;
false;
Object.getOwnPropertyDescriptor(o, "baz");
undefined;
o.baz;
12;
o.hasOwnProperty("baz");
false;

try {
  var actual = Object.create(Object.create({}, {
    boom: {
      get: function () {
        return "base";
      }
    }
  }), {
    boom: {
      get: function () {
        return "overridden";
      }
    }
  }).boom;
} catch (e) {
  ;
}

actual;
"overridden";

/******************************************************************************/
reportCompare(true, true);
print("All tests passed!");
