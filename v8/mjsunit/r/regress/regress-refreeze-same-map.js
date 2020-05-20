// Copyright 2017 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Flags: --allow-natives-syntax
// precondition
// refreezing an already frozen obj does not keep adding transitions
// resealing a sealed object is idempotent
// sealing a frozen object is idempotent
// freezing a sealed empty is idempotent
// sealing a unextensible empty object is idempotent
