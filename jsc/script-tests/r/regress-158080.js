console.log("Regresion test for 158080. This test should pass and not crash.");

try {
  let r = /\u{|abc/u;
} catch (e) {
  ;
}

try {
  let r = /\u{/u;
} catch (e) {
  ;
}

try {
  let r = /\u{1/u;
} catch (e) {
  ;
}

try {
  let r = /\u{12/u;
} catch (e) {
  ;
}

try {
  let r = /\u{123/u;
} catch (e) {
  ;
}

try {
  let r = /\u{1234/u;
} catch (e) {
  ;
}

try {
  let r = /\u{abcde/u;
} catch (e) {
  ;
}

try {
  let r = /\u{abcdef/u;
} catch (e) {
  ;
}

try {
  let r = /\u{1111111}/u;
} catch (e) {
  ;
}

try {
  let r = /\u{fedbca98}/u;
} catch (e) {
  ;
}

try {
  let r = /\u{1{123}}/u;
} catch (e) {
  ;
}
