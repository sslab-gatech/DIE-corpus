function bug673705() {
  var x;

  try {
    ;
  } catch (e) {
    ;
  } finally {
    print(x);
  }

  return x;
}

bug673705();
undefined;
