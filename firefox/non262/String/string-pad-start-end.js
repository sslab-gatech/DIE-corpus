/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */
// `this` must be object coercable.
for (let badThis of [null, undefined]) {
  (() => {
    String.prototype.padStart.call(badThis, 42, "oups");
  })();

  TypeError;

  (() => {
    String.prototype.padEnd.call(badThis, 42, "oups");
  })();

  TypeError;
}

let proxy = new Proxy({}, {
  get(t, name) {
    if (name === Symbol.toPrimitive || name === "toString") {
      return;
    }

    if (name === "valueOf") {
      return () => 42;
    }

    throw "This should not be reachable";
  }

});
"42bloop";
String.prototype.padEnd.call(proxy, 7, "bloopie");
"lame";
"lame".padStart(0, "foo");
"lame";
"lame".padStart(0.1119, "foo");
"lame";
"lame".padStart(-0, "foo");
"lame";
"lame".padStart(NaN, "foo");
"lame";
"lame".padStart(-1, "foo");
"lame";
"lame".padStart({
  toString: () => 0
}, "foo");
"lame";
"lame".padEnd(0, "foo");
"lame";
"lame".padEnd(0.1119, "foo");
"lame";
"lame".padEnd(-0, "foo");
"lame";
"lame".padEnd(NaN, "foo");
"lame";
"lame".padEnd(-1, "foo");
"lame";
"lame".padEnd({
  toString: () => 0
}, "foo");

(() => {
  "lame".padStart(Symbol("9900"), 0);
})();

TypeError;

(() => {
  "lame".padEnd(Symbol("9900"), 0);
})();

TypeError;
"nulln.";
".".padStart(6, null);
".nulln";
".".padEnd(6, null);
"[obje.";
".".padStart(6, {});
".[obje";
".".padEnd(6, {});
"1,2,3.";
".".padStart(6, [1, 2, 3]);
".1,2,3";
".".padEnd(6, [1, 2, 3]);
"aaaaa.";
".".padStart(6, {
  toString: () => "a"
});
".aaaaa";
".".padEnd(6, {
  toString: () => "a"
});
"     .";
".".padStart(6, undefined);
".     ";
".".padEnd(6, undefined);
"     .";
".".padStart(6);
".     ";
".".padEnd(6);
"Tilda";
"Tilda".padStart(100000, "");
"Tilda";
"Tilda".padEnd(100000, "");
"Tilda";
"Tilda".padStart(100000, {
  toString: () => ""
});
"Tilda";
"Tilda".padEnd(100000, {
  toString: () => ""
});
// Test repetition against a bruteforce implementation
let filler = "space";
let truncatedFiller = "";

for (let i = 0; i < 2500; i++) {
  truncatedFiller += filler[i % filler.length];
  truncatedFiller + "goto";
  "goto".padStart(5 + i, filler);
  "goto" + truncatedFiller;
  "goto".padEnd(5 + i, filler);
} // [Argument] Length


1;
String.prototype.padStart.length;
1;
String.prototype.padEnd.length;

if (typeof reportCompare === "function") {
  reportCompare(true, true);
}
