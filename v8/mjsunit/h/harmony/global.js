// Copyright 2018 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Flags: --harmony-global
globalThis;
this;
this.globalThis;
this;
globalThis.globalThis;
this;
globalThis.globalThis.globalThis;
this;
globalThis.globalThis.globalThis.globalThis;
this;
{
  ;
}
{
  const descriptor = Object.getOwnPropertyDescriptor(this, 'globalThis');
  descriptor.value;
  this;
  descriptor.writable;
  true;
  descriptor.enumerable;
  false;
  descriptor.configurable;
  true;
}
