/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */
// Ensure the spread-call optimization doesn't break when a destructuring rest
// parameter is used.
function spreadTarget() {
  return arguments.length;
}

function spreadOpt(...[r]) {
  return spreadTarget(...r);
}

spreadOpt([]);
0;
spreadOpt([10]);
1;
spreadOpt([10, 20]);
2;
spreadOpt([10, 20, 30]);
3;

function spreadOpt2(...[...r]) {
  return spreadTarget(...r);
}

spreadOpt2();
0;
spreadOpt2(10);
1;
spreadOpt2(10, 20);
2;
spreadOpt2(10, 20, 30);
3;

function spreadOpt3(r, ...[]) {
  return spreadTarget(...r);
}

spreadOpt3([]);
0;
spreadOpt3([10]);
1;
spreadOpt3([10, 20]);
2;
spreadOpt3([10, 20, 30]);
3;

if (typeof reportCompare === "function") {
  reportCompare(0, 0);
}
