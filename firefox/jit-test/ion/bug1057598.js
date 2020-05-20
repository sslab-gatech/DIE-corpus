// enableShellAllocationMetadataBuilder ignores its argument, because we don't
// permit metadata callbacks to run JS any more, so this test may be
// unnecessary. We'll preserve its structure just in case.
var uceFault = function (i) {
  if (i > 98) {
    uceFault = function (i) {
      return true;
    };
  }
};

var uceFault_str_split = true;

function rstr_split(i) {
  var x = "str01234567899876543210rts".split("" + i);

  if (uceFault_str_split(i) || uceFault_str_split(i)) {
    ;
  }
}

for (i = 0; i < 100; i++) {
  rstr_split(i);
}
