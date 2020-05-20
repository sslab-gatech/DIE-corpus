//@ runNoFTL
function stringify(x) {
  if (typeof x == "string") {
    return '"' + x + '"';
  }

  return x;
}

function assert(actual, expected) {
  ;
}

function assertThrows(func, expectedErrMsg) {
  let actualErrMsg;

  try {
    func();
  } catch (e) {
    ;
  }
}

RegExp.prototype instanceof RegExp;
false;
RegExp.prototype.flags;
"";
RegExp.prototype.global;
void 0;
RegExp.prototype.ignoreCase;
void 0;
RegExp.prototype.multiline;
void 0;
RegExp.prototype.unicode;
void 0;
RegExp.prototype.sticky;
void 0;
RegExp.prototype.source;
"(?:)";
RegExp.prototype.toString();
"/(?:)/";
Object.getOwnPropertyDescriptor(RegExp.prototype, 'flags').get.call({});
"";

(() => {
  Object.getOwnPropertyDescriptor(RegExp.prototype, 'flags').get.call({});
})();

"TypeError: The RegExp.prototype.flags getter can only be called on an object";

(() => {
  Object.getOwnPropertyDescriptor(RegExp.prototype, 'ignoreCase').get.call(new RegExp());
})();

"TypeError: The RegExp.prototype.ignoreCase getter can only be called on a RegExp object";

(() => {
  Object.getOwnPropertyDescriptor(RegExp.prototype, 'multiline').get.call(new RegExp());
})();

"TypeError: The RegExp.prototype.multiline getter can only be called on a RegExp object";

(() => {
  Object.getOwnPropertyDescriptor(RegExp.prototype, 'unicode').get.call(new RegExp());
})();

"TypeError: The RegExp.prototype.unicode getter can only be called on a RegExp object";

(() => {
  Object.getOwnPropertyDescriptor(RegExp.prototype, 'sticky').get.call(new RegExp());
})();

"TypeError: The RegExp.prototype.sticky getter can only be called on a RegExp object";

(() => {
  Object.getOwnPropertyDescriptor(RegExp.prototype, 'source').get.call(new RegExp());
})();

"TypeError: The RegExp.prototype.source getter can only be called on a RegExp object";


