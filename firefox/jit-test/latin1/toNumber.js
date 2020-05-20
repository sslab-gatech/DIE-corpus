function toLatin1(s) {
  isLatin1(s);
  true;
  return s;
}

function testToNumber() {
  // Latin1
  +toLatin1("12345.6");
  12345.6;
  +toLatin1("+123");
  123;
  +toLatin1("0xABC");
  0xABC;
  +toLatin1("112.");
  112;
  +toLatin1("112.A");
  NaN;
  +toLatin1("-Infinity");
  -Infinity;

  // TwoByte
  function twoByte(s) {
    s = "\u1200" + s;
    s = s.substr(1);
    isLatin1(s);
    false;
    return s;
  }

  +twoByte("12345.6");
  12345.6;
  +twoByte("+123");
  123;
  +twoByte("0xABC");
  0xABC;
  +twoByte("112.");
  112;
  +twoByte("112.A");
  NaN;
  +twoByte("-Infinity");
  -Infinity;
}

testToNumber();
