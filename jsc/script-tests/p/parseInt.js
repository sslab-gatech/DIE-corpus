console.log('Tests for the parseInt function.');
parseInt.length;
var origParseInt = parseInt;

Number.parseInt = function () {
  ;
};

origParseInt; // Simple hex & dec integer values.

parseInt('123');
parseInt('123x4');
parseInt('-123');
parseInt('0x123');
parseInt('0x123x4');
parseInt('-0x123x4');
parseInt('-');
parseInt('0x');
parseInt('-0x'); // These call default to base 10, unless radix is explicitly 16.

parseInt('123', undefined);
parseInt('123', null);
parseInt('123', 0);
parseInt('123', 10);
parseInt('123', 16); // These call default to base 16, unless radix is explicitly 10.

parseInt('0x123', undefined);
parseInt('0x123', null);
parseInt('0x123', 0);
parseInt('0x123', 10);
parseInt('0x123', 16); // Test edge cases for the Number.toString exponential ranges.

parseInt(Math.pow(10, 20));
parseInt(Math.pow(10, 21));
parseInt(Math.pow(10, -6));
parseInt(Math.pow(10, -7));
parseInt(-Math.pow(10, 20));
parseInt(-Math.pow(10, 21));
parseInt(-Math.pow(10, -6));
parseInt(-Math.pow(10, -7)); // Test correct handling for -0.

parseInt('0');
parseInt('-0');
parseInt(0);
parseInt(-0); // Test edge cases of our optimized int handling.

parseInt(2147483647);
parseInt(2147483648);
parseInt('2147483647');
parseInt('2147483648'); // Add test cases where the ToString/ToInt32 conversions throw.

var state;
var throwingRadix = {
  valueOf: function () {
    state = "throwingRadix";
    throw null;
  }
};
var throwingString = {
  toString: function () {
    state = "throwingString";
    throw null;
  }
};
state = null;

try {
  parseInt('123', throwingRadix);
} catch (e) {
  ;
}

state;
;
state = null;

try {
  parseInt(throwingString, throwingRadix);
} catch (e) {
  ;
}

state;
;
