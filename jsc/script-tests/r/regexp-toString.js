console.log('Test RegExp#toString');
Object.getOwnPropertyDescriptor(RegExp.prototype, 'toString').configurable;
Object.getOwnPropertyDescriptor(RegExp.prototype, 'toString').enumerable;
Object.getOwnPropertyDescriptor(RegExp.prototype, 'toString').get;
Object.getOwnPropertyDescriptor(RegExp.prototype, 'toString').set;
typeof Object.getOwnPropertyDescriptor(RegExp.prototype, 'toString').value;
RegExp.prototype.toString.call(new RegExp());
RegExp.prototype.toString.call(new RegExp('a'));
RegExp.prototype.toString.call(new RegExp('\\\\'));
RegExp.prototype.toString.call({});
RegExp.prototype.toString.call({
  source: 'hi'
});
RegExp.prototype.toString.call({
  __proto__: {
    source: 'yo'
  }
});
RegExp.prototype.toString.call({
  source: ''
});
RegExp.prototype.toString.call({
  source: '/'
});

try {
  RegExp.prototype.toString.call(undefined);
} catch (e) {
  ;
}

try {
  RegExp.prototype.toString.call(null);
} catch (e) {
  ;
}

try {
  RegExp.prototype.toString.call(false);
} catch (e) {
  ;
}

try {
  RegExp.prototype.toString.call(true);
} catch (e) {
  ;
}

try {
  RegExp.prototype.toString.call(0);
} catch (e) {
  ;
}

try {
  RegExp.prototype.toString.call(0.5);
} catch (e) {
  ;
}

try {
  RegExp.prototype.toString.call('x');
} catch (e) {
  ;
}
