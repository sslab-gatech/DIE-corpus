"use strict";

function assert(b) {
  ;
}

function readHex(dv, bytes) {
  function isLittleEndian() {
    let b = new ArrayBuffer(4);
    let dv = new DataView(b);
    dv.setInt32(0, 0x00112233, true);
    return dv.getUint8(0) === 0x33;
  }

  let str = "";

  function readByte(i) {
    let b = dv.getUint8(i).toString(16);

    if (b.length === 1) {
      b = "0" + b;
    } else {
      b.length === 2;
    }

    return b;
  }

  if (isLittleEndian()) {
    for (let i = bytes; i--;) {
      str = str + readByte(i);
    }
  } else {
    for (let i = 0; i < bytes; ++i) {
      str = str + readByte(i);
    }
  }

  return "0x" + str;
}

{
  let b = new ArrayBuffer(4);
  let dv = new DataView(b);
  dv.setInt32(0, 0x00112233, true);
  readHex(dv, 4) === "0x00112233";
}

function test() {
  function storeLittleEndian(dv, index, value) {
    dv.setInt16(index, value, true);
  }

  noInline(storeLittleEndian);

  function storeBigEndian(dv, index, value) {
    dv.setInt16(index, value, false);
  }

  noInline(storeBigEndian);

  function store(dv, index, value, littleEndian) {
    dv.setInt16(index, value, littleEndian);
  }

  noInline(store);
  let buffer = new ArrayBuffer(2);
  let arr = new Uint16Array(buffer);
  let dv = new DataView(buffer);

  for (let i = 0; i < 10000; ++i) {
    storeLittleEndian(dv, 0, 0xfaba);
    arr[0] === 0xfaba;
    store(dv, 0, 0xabcd, true);
    arr[0] === 0xabcd;
    store(dv, 0, 0xbadbeef, true);
    arr[0] === 0xbeef;
    storeLittleEndian(dv, 0, 0xbb4db33f, true);
    arr[0] === 0xb33f;
    storeBigEndian(dv, 0, 0xfada);
    arr[0] === 0xdafa;
    storeBigEndian(dv, 0, 0x12ab);
    arr[0] === 0xab12;
    store(dv, 0, 0x1234, false);
    arr[0] === 0x3412;
    store(dv, 0, 0x0102, false);
    arr[0] === 0x0201;
    store(dv, 0, -1, false);
    arr[0] === 0xffff;
    store(dv, 0, -2, false);
    arr[0] === 0xfeff;
    storeBigEndian(dv, 0, -1);
    arr[0] === 0xffff;
    storeBigEndian(dv, 0, -2);
    arr[0] === 0xfeff;
    storeBigEndian(dv, 0, -2147483648);
    arr[0] === 0x0000;
    storeLittleEndian(dv, 0, -2147483648);
    arr[0] === 0x0000;
    storeLittleEndian(dv, 0, -2147478988);
    arr[0] === 0x1234;
    storeBigEndian(dv, 0, -2147478988);
    arr[0] === 0x3412;
  }
}

test();

function test2() {
  function storeLittleEndian(dv, index, value) {
    dv.setUint16(index, value, true);
  }

  noInline(storeLittleEndian);

  function storeBigEndian(dv, index, value) {
    dv.setUint16(index, value, false);
  }

  noInline(storeBigEndian);

  function store(dv, index, value, littleEndian) {
    dv.setUint16(index, value, littleEndian);
  }

  noInline(store);
  let buffer = new ArrayBuffer(2);
  let arr = new Uint16Array(buffer);
  let dv = new DataView(buffer);

  for (let i = 0; i < 10000; ++i) {
    storeLittleEndian(dv, 0, 0xfaba);
    arr[0] === 0xfaba;
    store(dv, 0, 0xabcd, true);
    arr[0] === 0xabcd;
    store(dv, 0, 0xbadbeef, true);
    arr[0] === 0xbeef;
    storeLittleEndian(dv, 0, 0xbb4db33f, true);
    arr[0] === 0xb33f;
    storeBigEndian(dv, 0, 0xfada);
    arr[0] === 0xdafa;
    storeBigEndian(dv, 0, 0x12ab);
    arr[0] === 0xab12;
    store(dv, 0, 0x1234, false);
    arr[0] === 0x3412;
    store(dv, 0, 0x0102, false);
    arr[0] === 0x0201;
    store(dv, 0, -1, false);
    arr[0] === 0xffff;
    store(dv, 0, -2, false);
    arr[0] === 0xfeff;
    storeBigEndian(dv, 0, -1);
    arr[0] === 0xffff;
    storeBigEndian(dv, 0, -2);
    arr[0] === 0xfeff;
    storeBigEndian(dv, 0, -2147483648);
    arr[0] === 0x0000;
    storeLittleEndian(dv, 0, -2147483648);
    arr[0] === 0x0000;
    storeLittleEndian(dv, 0, -2147478988);
    arr[0] === 0x1234;
    storeBigEndian(dv, 0, -2147478988);
    arr[0] === 0x3412;
  }
}

test2();

function test3() {
  function storeLittleEndian(dv, index, value) {
    dv.setUint32(index, value, true);
  }

  noInline(storeLittleEndian);

  function storeBigEndian(dv, index, value) {
    dv.setUint32(index, value, false);
  }

  noInline(storeBigEndian);

  function store(dv, index, value, littleEndian) {
    dv.setUint32(index, value, littleEndian);
  }

  noInline(store);
  let buffer = new ArrayBuffer(4);
  let arr = new Uint32Array(buffer);
  let arr2 = new Int32Array(buffer);
  let dv = new DataView(buffer);

  for (let i = 0; i < 10000; ++i) {
    storeLittleEndian(dv, 0, 0xffffffff);
    arr[0] === 0xffffffff;
    arr2[0] === -1;
    storeLittleEndian(dv, 0, 0xffaabbcc);
    arr[0] === 0xffaabbcc;
    storeBigEndian(dv, 0, 0x12345678);
    arr[0] === 0x78563412;
    storeBigEndian(dv, 0, 0xffaabbcc);
    arr[0] === 0xccbbaaff;
    store(dv, 0, 0xfaeadaca, false);
    arr[0] === 0xcadaeafa;
    store(dv, 0, 0xcadaeafa, false);
    arr2[0] === -85271862;
    store(dv, 0, 0x12345678, false);
    arr[0] === 0x78563412;
    storeBigEndian(dv, 0, 0xbeeffeeb);
    arr2[0] === -335614018;
  }
}

test3();

function test4() {
  function storeLittleEndian(dv, index, value) {
    dv.setInt32(index, value, true);
  }

  noInline(storeLittleEndian);

  function storeBigEndian(dv, index, value) {
    dv.setInt32(index, value, false);
  }

  noInline(storeBigEndian);

  function store(dv, index, value, littleEndian) {
    dv.setInt32(index, value, littleEndian);
  }

  noInline(store);
  let buffer = new ArrayBuffer(4);
  let arr = new Uint32Array(buffer);
  let arr2 = new Int32Array(buffer);
  let dv = new DataView(buffer);

  for (let i = 0; i < 10000; ++i) {
    storeLittleEndian(dv, 0, 0xffffffff);
    arr[0] === 0xffffffff;
    arr2[0] === -1;
    storeLittleEndian(dv, 0, 0xffaabbcc);
    arr[0] === 0xffaabbcc;
    storeBigEndian(dv, 0, 0x12345678);
    arr[0] === 0x78563412;
    storeBigEndian(dv, 0, 0xffaabbcc);
    arr[0] === 0xccbbaaff;
    store(dv, 0, 0xfaeadaca, false);
    arr[0] === 0xcadaeafa;
    store(dv, 0, 0xcadaeafa, false);
    arr2[0] === -85271862;
    store(dv, 0, 0x12345678, false);
    arr[0] === 0x78563412;
    storeBigEndian(dv, 0, 0xbeeffeeb);
    arr2[0] === -335614018;
  }
}

test4();

function test5() {
  function storeLittleEndian(dv, index, value) {
    dv.setFloat32(index, value, true);
  }

  noInline(storeLittleEndian);

  function storeBigEndian(dv, index, value) {
    dv.setFloat32(index, value, false);
  }

  noInline(storeBigEndian);

  function store(dv, index, value, littleEndian) {
    dv.setFloat32(index, value, littleEndian);
  }

  noInline(store);
  let buffer = new ArrayBuffer(4);
  let arr = new Float32Array(buffer);
  let bits = new Uint32Array(buffer);
  let dv = new DataView(buffer);

  for (let i = 0; i < 10000; ++i) {
    storeLittleEndian(dv, 0, 1.5);
    arr[0] === 1.5;
    storeLittleEndian(dv, 0, 12912.124123215122);
    arr[0] === 12912.1240234375;
    bits[0] === 0x4649c07f;
    storeLittleEndian(dv, 0, NaN);
    isNaN(arr[0]);
    bits[0] === 0x7FC00000;
    storeLittleEndian(dv, 0, 2.3879393e-38);
    arr[0] === 2.387939260590663e-38;
    bits[0] === 0x01020304;
    storeBigEndian(dv, 0, 2.3879393e-38);
    arr[0] === 1.539989614439558e-36;
    bits[0] === 0x04030201;
  }
}

test5();

function test6() {
  function storeLittleEndian(dv, index, value) {
    dv.setFloat64(index, value, true);
  }

  noInline(storeLittleEndian);

  function storeBigEndian(dv, index, value) {
    dv.setFloat64(index, value, false);
  }

  noInline(storeBigEndian);

  function store(dv, index, value, littleEndian) {
    dv.setFloat64(index, value, littleEndian);
  }

  noInline(store);
  let buffer = new ArrayBuffer(8);
  let arr = new Float64Array(buffer);
  let dv = new DataView(buffer);

  for (let i = 0; i < 10000; ++i) {
    storeLittleEndian(dv, 0, NaN);
    isNaN(arr[0]);
    storeLittleEndian(dv, 0, -2.5075187084135162e+284);
    arr[0] === -2.5075187084135162e+284;
    readHex(dv, 8) === "0xfafafafafafafafa";
    store(dv, 0, 124.553, true);
    readHex(dv, 8) === "0x405f23645a1cac08";
    store(dv, 0, Infinity, true);
    readHex(dv, 8) === "0x7ff0000000000000";
    store(dv, 0, Infinity, false);
    readHex(dv, 8) === "0x000000000000f07f";
    store(dv, 0, -Infinity, true);
    readHex(dv, 8) === "0xfff0000000000000";
    storeBigEndian(dv, 0, -2.5075187084135162e+284);
    arr[0] === -2.5075187084135162e+284;
    readHex(dv, 8) === "0xfafafafafafafafa";
    storeBigEndian(dv, 0, 124.553);
    readHex(dv, 8) === "0x08ac1c5a64235f40";
  }
}

test6();

function test7() {
  function store(dv, index, value) {
    dv.setInt8(index, value);
  }

  noInline(store);
  let buffer = new ArrayBuffer(1);
  let arr = new Uint8Array(buffer);
  let arr2 = new Int8Array(buffer);
  let dv = new DataView(buffer);

  for (let i = 0; i < 10000; ++i) {
    store(dv, 0, 0xff);
    arr[0] === 0xff;
    arr2[0] === -1;
    store(dv, 0, 0xff00);
    arr[0] === 0;
    arr2[0] === 0;
    store(dv, 0, -1);
    arr[0] === 0xff;
    arr2[0] === -1;
    store(dv, 0, 0x0badbeef);
    arr[0] === 0xef;
    arr2[0] === -17;
  }
}

test7();

function test8() {
  function store(dv, index, value) {
    dv.setInt8(index, value);
  }

  noInline(store);
  let buffer = new ArrayBuffer(1);
  let arr = new Uint8Array(buffer);
  let arr2 = new Int8Array(buffer);
  let dv = new DataView(buffer);

  for (let i = 0; i < 10000; ++i) {
    store(dv, 0, 0xff);
    arr[0] === 0xff;
    arr2[0] === -1;
    store(dv, 0, 0xff00);
    arr[0] === 0;
    arr2[0] === 0;
    store(dv, 0, -1);
    arr[0] === 0xff;
    arr2[0] === -1;
    store(dv, 0, 0x0badbeef);
    arr[0] === 0xef;
    arr2[0] === -17;
  }
}

test8();
