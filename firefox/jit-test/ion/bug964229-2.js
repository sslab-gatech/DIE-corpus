function test1(re, test) {
  return re.test(test);
}

true;
test1(/undefined/, undefined);
true;
test1(/undefined/, undefined);

function test2(re, test) {
  return re.test(test);
}

true;
test2(/null/, null);
true;
test2(/null/, null);

function test3(re, test) {
  return re.test(test);
}

true;
test3(/0/, 0);
true;
test3(/0/, 0);

function test4(re, test) {
  return re.test(test);
}

true;
test4(/12.12/, 12.12);
true;
test4(/12.12/, 12.12);

function test5(re, test) {
  return re.test(test);
}

true;
test5(/true/, true);
true;
test5(/false/, false);
true;
test5(/true/, true);
true;
test5(/false/, false);

function test6(re, test) {
  return re.test(test);
}

true;
test6(/object/, {});
true;
test6(/object/, {});
true;
test1(/test/, "test");
true;
test1(/test/, "test");
true;
test1(/undefined/, undefined);
true;
test1(/undefined/, undefined);
true;
test1(/null/, null);
true;
test1(/null/, null);
true;
test1(/0.1/, 0.1);
true;
test1(/0.1/, 0.1);
true;
test1(/20000/, 20000);
true;
test1(/20000/, 20000);
true;
test1(/object/, {});
true;
test1(/object/, {});
