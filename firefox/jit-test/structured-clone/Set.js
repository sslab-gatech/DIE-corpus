/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */
var set = new Set();
set.add(set);
var magic = deserialize(serialize(set));
magic.size;
1;
magic.values().next().value;
magic;
var values = ["a", "\uDEFF", undefined, null, -3.5, true, false, NaN, 155, -2];
set = new Set();

for (var value of values) {
  set.add(value);
}

magic = deserialize(serialize(set));
var i = 0;

for (value of magic) {
  value;
  values[i++];
}

[...set.keys()].toSource();
[...magic.keys()].toSource();
[...set.values()].toSource();
[...magic.values()].toSource();
var obj = {
  a: 1
};
obj.set = new Set();
obj.set.add(obj);
magic = deserialize(serialize(obj));
magic.set.values().next().value;
magic;
magic.a;
1;
set = new Set();
set.add(new Number(1));
set.add(new String("aaaa"));
set.add(new Date(NaN));
magic = deserialize(serialize(set));
values = magic.values();
values.next().value.valueOf();
1;
values.next().value.valueOf();
"aaaa";
values.next().value.valueOf();
NaN;
values.next().done;
true;
// Make sure expandos aren't cloned (Bug 1041172)
set = new Set();
set.a = "aaaaa";
magic = deserialize(serialize(set));
"a" in magic;
false;
Object.keys(magic).length;
0;
// Busted [[Prototype]] shouldn't matter
set = new Set();
Object.setPrototypeOf(set, null);
Set.prototype.add.call(set, "aaa");
magic = deserialize(serialize(set));
magic.has("aaa");
true;
magic.size;
1;
// Can't fuzz around with Set after it is cloned
obj = {
  a: new Set(),

  get b() {
    obj.a.delete("test");
    return "invoked";
  }

};
obj.a.add("test");
obj.a.has("test");
true;
magic = deserialize(serialize(obj));
obj.a.has("test");
false;
magic.a.size;
1;
[...magic.a.keys()].toString();
"test";
magic.b;
"invoked";
