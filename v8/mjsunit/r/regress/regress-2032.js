// Copyright 2012 the V8 project authors. All rights reserved.
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
// See: http://code.google.com/p/v8/issues/detail?id=2032
// Case independent regexp that ends on the first character in a block.
/[@-A]/i.test("a");
/[@-A]/i.test("A");
/[@-A]/i.test("@");
/[@-A]/.test("a");
/[@-A]/.test("A");
/[@-A]/.test("@");
/[¿-À]/i.test('¾');
/[¿-À]/i.test('¿');
/[¿-À]/i.test('À');
/[¿-À]/i.test('à');
/[¿-À]/i.test('á');
/[¿-À]/i.test('Á');
/[¿-À]/.test('¾');
/[¿-À]/.test('¿');
/[¿-À]/.test('À');
/[¿-À]/.test('à');
/[¿-À]/.test('á');
/[¿-À]/.test('á');
/[¿-À]/i.test('Á');
/[Ö-×]/i.test('Õ');
/[Ö-×]/i.test('Ö');
/[Ö-×]/i.test('ö');
/[Ö-×]/i.test('×');
/[Ö-×]/i.test('Ø');
/[Ö-×]/.test('Õ');
/[Ö-×]/.test('Ö');
/[Ö-×]/.test('ö');
/[Ö-×]/.test('×');
/[Ö-×]/.test('Ø');
