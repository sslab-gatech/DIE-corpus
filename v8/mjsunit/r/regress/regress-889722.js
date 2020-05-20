// Copyright 2018 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var o = {};

function getRandomProperty(v, rand) {
  var properties = Object.getOwnPropertyNames(v);
  return properties[rand % properties.length];
}

o.__p_211203344 = o[getRandomProperty(o, 211203344)];
