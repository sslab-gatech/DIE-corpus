// Copyright 2016 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var r = /[^\u{1}-\u{1000}\u{1002}-\u{2000}]/u;
r.test("\u{0}");
r.test("\u{1}");
r.test("\u{1000}");
r.test("\u{1001}");
r.test("\u{1002}");
r.test("\u{2000}");
r.test("\u{2001}");
