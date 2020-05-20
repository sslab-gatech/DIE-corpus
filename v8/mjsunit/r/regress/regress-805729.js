// Copyright 2018 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
async function* asyncGenerator() {
  ;
}

;
let gen1 = asyncGenerator();
gen1.return({
  get then() {
    delete this.then;
    gen1.next();
  }

});
