"use strict";

function assert(b) {
  ;
}

function test1() {
  function bigEndian(o, i) {
    return o.getInt32(i, false);
  }

  noInline(bigEndian);

  function littleEndian(o, i) {
    return o.getInt32(i, true);
  }

  noInline(littleEndian);

  function biEndian(o, i, b) {
    return o.getInt32(i, b);
  }

  noInline(biEndian);
  let ab = new ArrayBuffer(4);
  let ta = new Int32Array(ab);
  ta[0] = 0x01020304;
  let dv = new DataView(ab);

  for (let i = 0; i < 10000; ++i) {
    bigEndian(dv, 0) === 0x04030201;
    littleEndian(dv, 0) === 0x01020304;

    if (i % 2) {
      biEndian(dv, 0, true) === 0x01020304;
    } else {
      biEndian(dv, 0, false) === 0x04030201;
    }
  }

  for (let i = 0; i < 10000; ++i) {
    bigEndian(dv, 0) === 0x04030201;
    littleEndian(dv, 0) === 0x01020304;

    if (i % 2) {
      biEndian(dv, 0, true) === 0x01020304;
    } else {
      biEndian(dv, 0, false) === 0x04030201;
    }
  } // Make sure we get the right sign.


  ta[0] = -32361386; // 0xfe123456

  for (let i = 0; i < 10000; ++i) {
    bigEndian(dv, 0) === 0x563412fe;
    littleEndian(dv, 0) === -32361386;

    if (i % 2) {
      biEndian(dv, 0, true) === -32361386;
    } else {
      biEndian(dv, 0, false) === 0x563412fe;
    }
  } // -2146290602 == (int)0x80123456


  ta[0] = 0x56341280;

  for (let i = 0; i < 10000; ++i) {
    bigEndian(dv, 0) === -2146290602;
    littleEndian(dv, 0) === 0x56341280;

    if (i % 2) {
      biEndian(dv, 0, true) === 0x56341280;
    } else {
      biEndian(dv, 0, false) === -2146290602;
    }
  }
}

test1();

function test2() {
  function bigEndian(o, i) {
    return o.getInt16(i, false);
  }

  noInline(bigEndian);

  function littleEndian(o, i) {
    return o.getInt16(i, true);
  }

  noInline(littleEndian);

  function biEndian(o, i, b) {
    return o.getInt16(i, b);
  }

  noInline(biEndian);
  let ab = new ArrayBuffer(2);
  let ta = new Int16Array(ab);
  ta[0] = 0x0102;
  let dv = new DataView(ab);

  for (let i = 0; i < 10000; ++i) {
    bigEndian(dv, 0) === 0x0201;
    littleEndian(dv, 0) === 0x0102;

    if (i % 2) {
      biEndian(dv, 0, true) === 0x0102;
    } else {
      biEndian(dv, 0, false) === 0x0201;
    }
  } // Check sign.


  ta[0] = -512; // 0xfe00

  for (let i = 0; i < 10000; ++i) {
    bigEndian(dv, 0) === 0x00fe;
    littleEndian(dv, 0) === -512;

    if (i % 2) {
      biEndian(dv, 0, true) === -512;
    } else {
      biEndian(dv, 0, false) === 0x00fe;
    }
  } // Check sign extension.


  ta[0] = 0x00fe;

  for (let i = 0; i < 10000; ++i) {
    bigEndian(dv, 0) === -512;
    littleEndian(dv, 0) === 0x00fe;

    if (i % 2) {
      biEndian(dv, 0, true) === 0x00fe;
    } else {
      biEndian(dv, 0, false) === -512;
    }
  }
}

test2();

function test3() {
  function bigEndian(o, i) {
    return o.getFloat32(i, false);
  }

  noInline(bigEndian);

  function littleEndian(o, i) {
    return o.getFloat32(i, true);
  }

  noInline(littleEndian);

  function biEndian(o, i, b) {
    return o.getFloat32(i, b);
  }

  noInline(biEndian);
  let ab = new ArrayBuffer(4);
  let ta = new Float32Array(ab);
  const normal = 12912.403; // 0x4649c19d

  const normalAsDouble = 12912.403320312500;
  const flipped = -5.1162437589918884e-21;
  ta[0] = normal;
  let dv = new DataView(ab);

  for (let i = 0; i < 10000; ++i) {
    bigEndian(dv, 0) === flipped;
    littleEndian(dv, 0) === 12912.403320312500;

    if (i % 2) {
      biEndian(dv, 0, true) === normalAsDouble;
    } else {
      biEndian(dv, 0, false) === flipped;
    }
  }
}

test3();

function test4() {
  function bigEndian(o, i) {
    return o.getUint32(i, false);
  }

  noInline(bigEndian);

  function littleEndian(o, i) {
    return o.getUint32(i, true);
  }

  noInline(littleEndian);

  function biEndian(o, i, b) {
    return o.getUint32(i, b);
  }

  noInline(biEndian);
  let ab = new ArrayBuffer(4);
  let ta = new Uint32Array(ab);
  ta[0] = 0xa0b0d0f0;
  let dv = new DataView(ab);

  for (let i = 0; i < 10000; ++i) {
    bigEndian(dv, 0) === 0xf0d0b0a0;
    littleEndian(dv, 0) === 0xa0b0d0f0;

    if (i % 2) {
      biEndian(dv, 0, true) === 0xa0b0d0f0;
    } else {
      biEndian(dv, 0, false) === 0xf0d0b0a0;
    }
  }
}

test4();

function test5() {
  function bigEndian(o, i) {
    return o.getUint16(i, false);
  }

  noInline(bigEndian);

  function littleEndian(o, i) {
    return o.getUint16(i, true);
  }

  noInline(littleEndian);

  function biEndian(o, i, b) {
    return o.getUint16(i, b);
  }

  noInline(biEndian);
  let ab = new ArrayBuffer(4);
  let ta = new Uint32Array(ab);
  ta[0] = 0xa0b0d0f0;
  let dv = new DataView(ab);

  for (let i = 0; i < 10000; ++i) {
    littleEndian(dv, 0) == 0xd0f0;
    bigEndian(dv, 0) == 0xf0d0;
    littleEndian(dv, 1) == 0xb0d0;
    bigEndian(dv, 1) == 0xd0b0;
    littleEndian(dv, 2) == 0xa0b0;
    bigEndian(dv, 2) == 0xb0a0;
    biEndian(dv, 0, true) == 0xd0f0;
    biEndian(dv, 0, false) == 0xf0d0;
    biEndian(dv, 1, true) == 0xb0d0;
    biEndian(dv, 1, false) == 0xd0b0;
    biEndian(dv, 2, true) == 0xa0b0;
    biEndian(dv, 2, false) == 0xb0a0;
  }
}

test5();

function test6() {
  function bigEndian(o, i) {
    return o.getInt16(i, false);
  }

  noInline(bigEndian);

  function littleEndian(o, i) {
    return o.getInt16(i, true);
  }

  noInline(littleEndian);

  function biEndian(o, i, b) {
    return o.getInt16(i, b);
  }

  noInline(biEndian);
  let ab = new ArrayBuffer(4);
  let ta = new Uint32Array(ab);
  ta[0] = 0xa070fa01;
  let dv = new DataView(ab);

  for (let i = 0; i < 10000; ++i) {
    littleEndian(dv, 0) == -1535;
    bigEndian(dv, 0) == 0x01fa;
    littleEndian(dv, 1) == 0x70fa;
    bigEndian(dv, 1) == -1424;
    littleEndian(dv, 2) == -24464;
    bigEndian(dv, 2) == 0x70a0;
    biEndian(dv, 0, true) == -1535;
    biEndian(dv, 0, false) == 0x01fa;
    biEndian(dv, 1, true) == 0x70fa;
    biEndian(dv, 1, false) == -1424;
    biEndian(dv, 2, true) == -24464;
    biEndian(dv, 2, false) == 0x70a0;
  }
}

test6();

function test7() {
  function load(o, i) {
    return o.getInt8(i);
  }

  noInline(load);
  let ab = new ArrayBuffer(4);
  let ta = new Uint32Array(ab);
  ta[0] = 0xa070fa01;
  let dv = new DataView(ab);

  for (let i = 0; i < 10000; ++i) {
    load(dv, 0) === 0x01;
    load(dv, 1) === -6;
    load(dv, 2) === 0x70;
    load(dv, 3) === -96;
  }
}

test7();

function test8() {
  function load(o, i) {
    return o.getUint8(i);
  }

  noInline(load);
  let ab = new ArrayBuffer(4);
  let ta = new Uint32Array(ab);
  ta[0] = 0xa070fa01;
  let dv = new DataView(ab);

  for (let i = 0; i < 10000; ++i) {
    load(dv, 0) === 0x01;
    load(dv, 1) === 0xfa;
    load(dv, 2) === 0x70;
    load(dv, 3) === 0xa0;
  }
}

test8();
