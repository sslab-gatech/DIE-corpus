// Copyright 2015 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Flags: --expose-wasm
function Foo() {
  ;
}

(function () {
  new WebAssembly.Module();
})();

(function () {
  new WebAssembly.Module(0);
})();

(function () {
  new WebAssembly.Module("s");
})();

(function () {
  new WebAssembly.Module(undefined);
})();

(function () {
  new WebAssembly.Module(1.1);
})();

(function () {
  new WebAssembly.Module(1 / 0);
})();

(function () {
  new WebAssembly.Module(null);
})();

(function () {
  new WebAssembly.Module(new Foo());
})();

(function () {
  new WebAssembly.Module(new ArrayBuffer(0));
})();

(function () {
  new WebAssembly.Module(new ArrayBuffer(7));
})();
