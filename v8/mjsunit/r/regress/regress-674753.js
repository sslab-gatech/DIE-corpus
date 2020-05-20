// Copyright 2008 the V8 project authors. All rights reserved.
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are
// met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above
//       copyright notice, this list of conditions and the following
//       disclaimer in the documentation and/or other materials provided
//       with the distribution.
//     * Neither the name of Google Inc. nor the names of its
//       contributors may be used to endorse or promote products derived
//       from this software without specific prior written permission.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
// "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
// LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
// A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
// OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
// SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
// LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
// DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
// THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
// Flags: --allow-natives-syntax
var undetectable = function () {
  ;
}; // Number


typeof 0 == 'number';
typeof 0 === 'number';
typeof 0 != 'number';
typeof 0 !== 'number';
typeof 1.2 == 'number';
typeof 1.2 === 'number';
typeof 1.2 != 'number';
typeof 1.2 !== 'number';
typeof 'x' != 'number';
typeof 'x' !== 'number';
typeof 'x' == 'number';
typeof 'x' === 'number';
typeof Object() != 'number';
typeof Object() !== 'number';
typeof Object() == 'number';
typeof Object() === 'number';
typeof 'x' == 'string';
typeof 'x' === 'string';
typeof 'x' != 'string';
typeof 'x' !== 'string';
typeof ('x' + 'x') == 'string';
typeof ('x' + 'x') === 'string';
typeof ('x' + 'x') != 'string';
typeof ('x' + 'x') !== 'string';
typeof 1 != 'string';
typeof 1 !== 'string';
typeof 1 == 'string';
typeof 1 === 'string';
typeof Object() != 'string';
typeof Object() !== 'string';
typeof Object() == 'string';
typeof Object() === 'string';
typeof true == 'boolean';
typeof true === 'boolean';
typeof true != 'boolean';
typeof true !== 'boolean';
typeof false == 'boolean';
typeof false === 'boolean';
typeof false != 'boolean';
typeof false !== 'boolean';
typeof 1 != 'boolean';
typeof 1 !== 'boolean';
typeof 1 == 'boolean';
typeof 1 === 'boolean';
typeof 'x' != 'boolean';
typeof 'x' !== 'boolean';
typeof 'x' == 'boolean';
typeof 'x' === 'boolean';
typeof Object() != 'boolean';
typeof Object() !== 'boolean';
typeof Object() == 'boolean';
typeof Object() === 'boolean';
typeof void 0 == 'undefined';
typeof void 0 === 'undefined';
typeof void 0 != 'undefined';
typeof void 0 !== 'undefined';
typeof 1 != 'undefined';
typeof 1 !== 'undefined';
typeof 1 == 'undefined';
typeof 1 === 'undefined';
typeof null != 'undefined';
typeof null !== 'undefined';
typeof null == 'undefined';
typeof null === 'undefined';
typeof Object() != 'undefined';
typeof Object() !== 'undefined';
typeof Object() == 'undefined';
typeof Object() === 'undefined';
typeof undetectable == 'undefined';
typeof undetectable === 'undefined';
typeof undetectable != 'undefined';
typeof undetectable !== 'undefined';
typeof Object == 'function';
typeof Object === 'function';
typeof Object != 'function';
typeof Object !== 'function';
typeof 1 != 'function';
typeof 1 !== 'function';
typeof 1 == 'function';
typeof 1 === 'function';
typeof Object() != 'function';
typeof Object() !== 'function';
typeof Object() == 'function';
typeof Object() === 'function';
typeof undetectable != 'function';
typeof undetectable !== 'function';
typeof undetectable == 'function';
typeof undetectable === 'function';
typeof Object() == 'object';
typeof Object() === 'object';
typeof Object() != 'object';
typeof Object() !== 'object';
typeof new String('x') == 'object';
typeof new String('x') === 'object';
typeof new String('x') != 'object';
typeof new String('x') !== 'object';
typeof ['x'] == 'object';
typeof ['x'] === 'object';
typeof ['x'] != 'object';
typeof ['x'] !== 'object';
typeof null == 'object';
typeof null === 'object';
typeof null != 'object';
typeof null !== 'object';
typeof 1 != 'object';
typeof 1 !== 'object';
typeof 1 == 'object';
typeof 1 === 'object';
typeof 'x' != 'object';
typeof 'x' !== 'object';
typeof 'x' == 'object';
typeof 'x' === 'object';
typeof Object != 'object';
typeof Object !== 'object';
typeof Object == 'object';
typeof Object === 'object';
typeof undetectable != 'object';
typeof undetectable !== 'object';
typeof undetectable == 'object';
typeof undetectable === 'object';
