console.log('Test for ES6 RegExp construct a new RegExp from exiting RegExp pattern and new flags');
var re = new RegExp("Abc");
re.test("   Abc   ");
re.flags;
re = new RegExp(re, "i");
re.test(" ABC  ");
re.flags;
re = new RegExp(re, "");
re.test("   Abc   ");
re.flags;
re = new RegExp(re, "iy");
re.exec("abcABCAbc").toString();
re.exec("abcABCAbc").toString();
re.exec("abcABCAbc").toString();
re.flags;
re = new RegExp(re, "");
re.test("abc");

try {
  new RegExp(re, "bad flags");
} catch (e) {
  ;
}
