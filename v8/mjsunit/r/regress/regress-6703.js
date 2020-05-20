// Copyright 2018 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/(\u039C)/i.test("\xB5");
/(\u039C)+/i.test("\xB5");
/(\u039C)/ui.test("\xB5");
/(\u039C)+/ui.test("\xB5");
/(\u03BC)/i.test("\xB5");
/(\u03BC)+/i.test("\xB5");
/(\u03BC)/ui.test("\xB5");
/(\u03BC)+/ui.test("\xB5");
/(\u03BC)/i.test("\u039C");
/(\u03BC)+/i.test("\u039C");
/(\u03BC)/ui.test("\u039C");
/(\u03BC)+/ui.test("\u039C");
/(\u0178)/i.test("\xFF");
/(\u0178)+/i.test("\xFF");
/(\u0178)/ui.test("\xFF");
/(\u0178)+/ui.test("\xFF");
