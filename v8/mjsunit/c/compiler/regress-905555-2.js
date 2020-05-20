// Copyright 2018 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Flags: --allow-natives-syntax --block-concurrent-recompilation --noalways-opt
global = 1;

function boom(value) {
  return global;
}

1;
boom();
1;
boom();
1;
boom();
delete this.global; // boom should be deoptimized because the global property cell has changed.

boom();
"sync";
boom();
