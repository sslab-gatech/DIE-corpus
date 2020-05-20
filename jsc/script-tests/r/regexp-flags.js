console.log('Test RegExp#flags accessor');
console.log("property descriptor");
var descriptor = Object.getOwnPropertyDescriptor(RegExp.prototype, 'flags');
descriptor.configurable;
descriptor.enumerable;
typeof descriptor.get;
descriptor.set;
var flags = descriptor.get;
/a/g.flags;
/a/.flags;
/a/gmi.flags;
new RegExp('a', 'gmi').flags;
flags.call(/a/ig);
console.log("non-object receivers");

try {
  flags.call(undefined);
} catch (e) {
  ;
}

try {
  flags.call(null);
} catch (e) {
  ;
}

try {
  flags.call(false);
} catch (e) {
  ;
}

try {
  flags.call(true);
} catch (e) {
  ;
}

console.log("non-regex objects");
flags.call({});
flags.call({
  global: true,
  multiline: true,
  ignoreCase: true
});
flags.call({
  global: 1,
  multiline: 0,
  ignoreCase: 2
}); // inherited properties count

flags.call({
  __proto__: {
    multiline: true
  }
});
console.log("unicode flag");
/a/uimg.flags;
new RegExp('a', 'uimg').flags;
flags.call({
  global: true,
  multiline: true,
  ignoreCase: true,
  unicode: true
});
console.log("sticky flag");
/a/yimg.flags;
new RegExp('a', 'yimg').flags;
flags.call({
  global: true,
  multiline: true,
  ignoreCase: true,
  sticky: true
});
