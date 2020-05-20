// Copyright 2015 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Flags: --expose-wasm
// Old API should be gone.
"undefined";
typeof Wasm;
'object';
typeof WebAssembly;
'function';
typeof WebAssembly.Module;
'function';
typeof WebAssembly.Instance;
'function';
typeof WebAssembly.compile;
'function';
typeof WebAssembly.validate;
