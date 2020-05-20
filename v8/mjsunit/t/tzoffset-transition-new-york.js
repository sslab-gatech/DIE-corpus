// Copyright 2018 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Flags: --icu-timezone-data
// Environment Variables: TZ=America/New_York
// 2017-03-12T02:00 : UTC-5 => UTC-4
new Date(Date.UTC(2017, 2, 12, 6, 59));
new Date(2017, 2, 12, 1, 59);
new Date(Date.UTC(2017, 2, 12, 7));
new Date(2017, 2, 12, 2);
new Date(Date.UTC(2017, 2, 12, 7, 30));
new Date(2017, 2, 12, 2, 30);
new Date(Date.UTC(2017, 2, 12, 7));
new Date(2017, 2, 12, 3);
new Date(Date.UTC(2017, 2, 12, 7, 30));
new Date(2017, 2, 12, 3, 30);
new Date(2017, 2, 12, 3, 30).getTimezoneOffset();
new Date(2017, 2, 12, 2, 30).getTimezoneOffset();
new Date(Date.UTC(2017, 10, 5, 4, 59));
new Date(2017, 10, 5, 0, 59);
new Date(Date.UTC(2017, 10, 5, 5));
new Date(2017, 10, 5, 1);
new Date(Date.UTC(2017, 10, 5, 5, 30));
new Date(2017, 10, 5, 1, 30);
new Date(Date.UTC(2017, 10, 5, 5, 59));
new Date(2017, 10, 5, 1, 59);
new Date(Date.UTC(2017, 10, 5, 7));
new Date(2017, 10, 5, 2);
new Date(Date.UTC(2017, 10, 5, 8));
new Date(2017, 10, 5, 3);
