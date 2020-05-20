console.log('This test case tests the Number constructor.'); // isFinite

Number.isFinite(0);
Number.isFinite(-0);
Number.isFinite(1);
Number.isFinite(-1);
Number.isFinite(1.0);
Number.isFinite(1.1);
Number.isFinite(-1.0);
Number.isFinite(-1.1);
Number.isFinite(Number.MAX_SAFE_INTEGER);
Number.isFinite(Number.MIN_SAFE_INTEGER);
Number.isFinite(Number.MAX_VALUE);
Number.isFinite(Number.MIN_VALUE);
Number.isFinite();
Number.isFinite({});
Number.isFinite([]);
Number.isFinite(true);
Number.isFinite(false);
Number.isFinite(null);
Number.isFinite(Number.NaN);
Number.isFinite(Number.POSITIVE_INFINITY);
Number.isFinite(Number.NEGATIVE_INFINITY);

try {
  Number.isFinite(foo);
} catch (e) {
  ;
} // isInteger


Number.isInteger(0);
Number.isInteger(-0);
Number.isInteger(1);
Number.isInteger(-1);
Number.isInteger(1.0);
Number.isInteger(-1.0);
Number.isInteger(Number.MAX_SAFE_INTEGER);
Number.isInteger(Number.MIN_SAFE_INTEGER);
Number.isInteger(Number.MAX_VALUE);
Number.isInteger(Number.MIN_VALUE);
Number.isInteger(1.1);
Number.isInteger(-1.1);
Number.isInteger();
Number.isInteger({});
Number.isInteger([]);
Number.isInteger(true);
Number.isInteger(false);
Number.isInteger(null);
Number.isInteger(Number.NaN);
Number.isInteger(Number.POSITIVE_INFINITY);
Number.isInteger(Number.NEGATIVE_INFINITY);

try {
  Number.isInteger(foo);
} catch (e) {
  ;
} // isNaN


Number.isNaN(Number.NaN);
Number.isNaN(0);
Number.isNaN(-0);
Number.isNaN(1);
Number.isNaN(-1);
Number.isNaN(1.0);
Number.isNaN(1.1);
Number.isNaN(-1.0);
Number.isNaN(-1.1);
Number.isNaN();
Number.isNaN({});
Number.isNaN([]);
Number.isNaN(true);
Number.isNaN(false);
Number.isNaN(null);
Number.isNaN(Number.POSITIVE_INFINITY);
Number.isNaN(Number.NEGATIVE_INFINITY);
Number.isNaN(Number.MAX_SAFE_INTEGER);
Number.isNaN(Number.MIN_SAFE_INTEGER);
Number.isNaN(Number.MAX_VALUE);
Number.isNaN(Number.MIN_VALUE);

try {
  Number.isNaN(foo);
} catch (e) {
  ;
} // isSafeInteger


Number.isSafeInteger(0);
Number.isSafeInteger(-0);
Number.isSafeInteger(1);
Number.isSafeInteger(-1);
Number.isSafeInteger(1.0);
Number.isSafeInteger(-1.0);
Number.isSafeInteger(Number.MAX_SAFE_INTEGER);
Number.isSafeInteger(Number.MAX_SAFE_INTEGER - 1);
Number.isSafeInteger(Number.MIN_SAFE_INTEGER);
Number.isSafeInteger(Number.MIN_SAFE_INTEGER + 1);
Number.isSafeInteger(1.1);
Number.isSafeInteger(-1.1);
Number.isSafeInteger();
Number.isSafeInteger({});
Number.isSafeInteger([]);
Number.isSafeInteger(true);
Number.isSafeInteger(false);
Number.isSafeInteger(null);
Number.isSafeInteger(Number.NaN);
Number.isSafeInteger(Number.MAX_VALUE);
Number.isSafeInteger(Number.MIN_VALUE);
Number.isSafeInteger(Number.POSITIVE_INFINITY);
Number.isSafeInteger(Number.NEGATIVE_INFINITY);
Number.isSafeInteger(Number.MAX_SAFE_INTEGER + 1);
Number.isSafeInteger(Number.MIN_SAFE_INTEGER - 1);

try {
  Number.isSafeInteger(foo);
} catch (e) {
  ;
} // parseFloat


Number.parseFloat("0");
Number.parseFloat("-0");
Number.parseFloat("1");
Number.parseFloat("-1");
Number.parseFloat("1.1");
Number.parseFloat("-1.1");
Number.parseFloat("10E6");
Number.parseFloat("0xA");
Number.parseFloat("050");
Number.parseFloat(050);
Number.parseFloat("0x20");
Number.parseFloat(0x20);
Number.parseFloat();
Number.parseFloat({});
Number.parseFloat([]);
Number.parseFloat(true);
Number.parseFloat(false);
Number.parseFloat(null);
Number.parseFloat(undefined);
Number.parseFloat(Number.NaN);
Number.parseFloat("1.7976931348623157E308");
Number.parseFloat("1.80E308");
Number.parseFloat("5E-324");
Number.parseFloat("5E-325");
Number.parseFloat("20000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000");
Number.parseFloat("200000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000");

try {
  Number.parseFloat(foo);
} catch (e) {
  ;
} // parseInt


Number.parseInt;
var numberParseInt = Number.parseInt;

parseInt = function () {
  ;
};

numberParseInt;
Number.parseInt.length;
Number.parseInt("0");
Number.parseInt("-0");
Number.parseInt("1");
Number.parseInt("-1");
Number.parseInt("1.1");
Number.parseInt("-1.1");
Number.parseInt("10E6");
Number.parseInt("0xA");
Number.parseInt("050");
Number.parseInt("050", 8);
Number.parseInt(050);
Number.parseInt("0x20");
Number.parseInt("0x20", 16);
Number.parseInt("20", 16);
Number.parseInt(0x20);
Number.parseInt();
Number.parseInt({});
Number.parseInt([]);
Number.parseInt(true);
Number.parseInt(false);
Number.parseInt(null);
Number.parseInt(undefined);
Number.parseInt(Number.NaN);
Number.parseInt("1.7976931348623157E308");
Number.parseInt("1.80E308");
Number.parseInt("5E-324");
Number.parseInt("5E-325");
Number.parseInt("20000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000");
Number.parseInt("200000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000");

try {
  Number.parseInt(foo);
} catch (e) {
  ;
}
